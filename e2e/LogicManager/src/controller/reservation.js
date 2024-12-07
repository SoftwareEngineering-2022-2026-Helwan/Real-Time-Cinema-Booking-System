import Movie from "./../db/tables/movie.table.js";
import {client} from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";
import ShowTime from "../db/tables/showtime.table.js";
import User from "../db/tables/user.table.js";
import Reservation from "../db/tables/reservation.table.js";

export const createReservation = async (req, res) => {
  try {
    const { seats, price, cinemaId, movieId, showTimeId, userId } = req.body;
    const cinema = await Cinema.findByPk(cinemaId);
    const movie = await Movie.findByPk(movieId);
    const showTime = await ShowTime.findByPk(showTimeId);
    const user = await User.findByPk(userId);

    if ((cinema && movie && showTime, user)) {
      const reservation = await Reservation.create({
        seats,
        price,
        cinemaId: cinemaId,
        movieId: movieId,
        showTimeId: showTimeId,
        userId: userId,
      });

      res.status(201).json(reservation);
    } else {
      res.status(404).json({ message: "err in input data " });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReservations = async (req, res) => {
  let reservation;
  reservation ??= await Reservation.findAll();
  if (reservation) {
    res.status(200).json(reservation);
  } else {
    res.status(500).json({ message: "Error fetching reservations" });
  }
};

export const getReservationById = async (req, res) => {
  const { id } = req.params;
  let reservation;
  reservation ??= await Reservation.findByPk(id);
  if (!reservation) {
    return res.status(404).json({ message: "reservation not found" });
  } else {
    client.set("reservation" + id, reservation);
    await res.status(200).json(reservation);
  }
};

export const deleteReservation = async (req, res) => {
  const { id } = req.body;
  let reservation;
  reservation ??= await Reservation.destroy({ where: { id: id } });
  if (!reservation) {
    return res.status(404).json({ message: "reservation not found" });
  } else {
    res.status(200).json({ message: "reservation deleted successfully" });
  }
};

export const updateReservation = async (req, res) => {
  const { id } = req.body;
  const { seats, price } = req.body;

  let reservation;
  reservation ??= await Reservation.update(
    { seats, price },
    { where: { id: id } }
  );
  if (!reservation) {
    return res.status(404).json({ message: "Reservation not found" });
  } else {
    res.status(200).json({ message: "Reservation updated successfully" });
  }
};
