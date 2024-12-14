import Movie from "./../db/tables/movie.table.js";
import { client } from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";
import ShowTime from "../db/tables/showtime.table.js";
import User from "../db/tables/user.table.js";
import Reservation from "../db/tables/reservation.table.js";
import { Sequelize } from "sequelize";
import Email from "../utils/maillerClass.util.js";
import path from "path";
import { fileURLToPath } from "url";
import { stat } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createReservation = async (req, res) => {
  try {
    const { cinemaId, movieId, userId } = req.params;
    const { seats, price } = req.body;

    const reservation = await Reservation.create({
      seats,
      price,
      cinemaId,
      movieId,

      userId,
    });

    client.set(`reservation${reservation.id}`, JSON.stringify(reservation));

    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: { userId: req.params.id },
      include: [
        {
          model: Cinema,
          attributes: ["ID", "name", "Location"],
        },
        {
          model: Movie,
          attributes: ["id", "title", "img", "category", "duration"],
        },
        {
          model: ShowTime,
          attributes: ["id", "showTime"],
        },
        {
          model: User,
          attributes: ["id", "fname", "lname"],
        },
      ],
      attributes: ["id", "seats", "price", "showTimeId", "movieId", "cinemaId", "userId"],
    });
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const reservation = await Reservation.findAll({where: {showTimeId: id}}, {
      include: [
        { model: Cinema, attributes: ["name", "Location", "ID"] },
        { model: Movie , attributes: ["title", "id"]},
        { model: ShowTime, attributes: ["showTime", 'id'] },
        { model: User , attributes: ['id']},
      ],
    });

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    client.set(`reservation${reservation.id}`, JSON.stringify(reservation));

    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const reservationToDelete = await Reservation.findByPk(id,{
      include: [
        { model: Movie , attributes: ["title", "id"]},
        { model: ShowTime , attributes: ["showTime"]},
        { model: User , attributes: ["fname", "email"]},
      ],
    });
    const reservation = await Reservation.destroy({where: { id: id }});

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    // console.log(__dirname);
      let html = Email.getHTML(
    path.join(__dirname, "../public/emails/reservation-cancel.html")
  );
  let welEmail = new Email("support@mail.com", reservationToDelete.User.email);
  html = html.replace("{{rid}}", reservationToDelete.id);
  html = html.replace("{{name}}", reservationToDelete.User.fname);
  html = html.replace("{{movie}}", reservationToDelete.Movie.title);
  html = html.replace("{{showtime}}", reservationToDelete.ShowTime.showTime);
  html = html.replace("{{movieId}}", reservationToDelete.Movie.id);
  welEmail.sendEmail(html, "Canceled");
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { seats, price } = req.body;

    const reservation = await Reservation.update(
      { seats, price },
      {
        where: { id },
        returning: true,
        plain: true,
      }
    );

    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    res.status(200).json({ message: "Reservation updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//------------------------------------------DashBoard------------------------------------------------
export const PriceOfCinema = async (req, res) => {
  try {
    const vendorId  = req.params.vendorId;

    const cinemas = await Reservation.findAll({
      where: { "$Cinema.vendorId$": vendorId },
      include: [
        {
          model: Cinema,
          required: true,
          attributes: ["name", "Location"],
        },
      ],
      attributes: [
        [Sequelize.fn("SUM", Sequelize.col("price")), "total"],
        [Sequelize.fn("COUNT", Sequelize.col("Cinema.ID")), "count"],
      ],
      group: ["Cinema.ID"],
    });
    const Movies = await Reservation.findAll({
      where: { "$Cinema.vendorId$": vendorId },
      include: [
        {
          model: Cinema,
          required: true,
          attributes: [],
        },
        {
          model: Movie,
          required: true,
          attributes: ["title", "category", "duration"],
        },
      ],
      attributes: [
        [Sequelize.fn("SUM", Sequelize.col("price")), "total"],
        [Sequelize.fn("COUNT", Sequelize.col("Movie.id")), "count"],
      ],
      group: ["Movie.id"],
    });
    const showtimes = await Reservation.findAll({
      where: { "$Cinema.vendorId$": vendorId },
      include: [
        {
          model: Cinema,
          required: true,
          attributes: [],
        },
        {
          model: Movie,
          required: true,
          attributes: [],
        },
        {
          model: ShowTime,
          required: true,
          attributes: ["id", "hallNo", "showTime"],
        },
      ],
      attributes: [
        [Sequelize.fn("SUM", Sequelize.col("price")), "total"],
        [Sequelize.fn("COUNT", Sequelize.col("Movie.id")), "count"],
      ],
      group: ["ShowTime.id"],
    });
    if (
      !cinemas ||
      cinemas.length === 0 ||
      !Movies ||
      Movies.length === 0 ||
      !showtimes ||
      showtimes.length === 0
    ) {
      return res
        .status(404)
        .json({ message: "No reservations found for this vendor." });
    }
    return res.status(200).json({
      cinemas,
      Movies,
      showtimes,
    });
  } catch (error) {
    console.error("Error fetching price of movies:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
