import Movie from "./../db/tables/movie.table.js";
import {client} from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";
import ShowTime from "../db/tables/showtime.table.js";


export const addShowTimeToCinemaAndMovie = async (req, res) => {
  try {
    const { hallNo,showTimes,showDate,cinemaId,movieId } = req.body;
    const cinema = await Cinema.findByPk(cinemaId);
    const movie = await Movie.findByPk(movieId);

    if (cinema&&movie) {
      const showTime = await ShowTime.create({ hallNo,showTimes,showDate, cinemaId:cinemaId,movieId:movieId  });

      res.status(201).json(showTime);
    } else {
      res.status(404).json({ message: "Cinema not found and Movie" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getShowTimes = async (req, res) => {
  let times;
  times ??= await ShowTime.findAll();
  if (times) {
    res.status(200).json(times);
  } else {
    res.status(500).json({ message: "Error fetching ShowTimes" });
  }
};


export const getShowTimeById = async (req, res) => {
  const { id } = req.params;
  let showTime;
  showTime ??= await ShowTime.findByPk(id);
  if (!showTime) {
    return res.status(404).json({ message: "ShowTime not found" });
  } else {
    client.set("showTime" + id, showTime);
    await res.status(200).json(showTime);
  }
};


export const deleteShowTime = async (req, res) => {
  const { id } = req.body;
  let showTime;
  showTime ??= await ShowTime.destroy({ where: { id: id } });
  if (!showTime) {
    return res.status(404).json({ message: "ShowTime not found" });
  } else {
    res.status(200).json({ message: "ShowTime deleted successfully" });
  }
};

export const updateShowTime = async (req, res) => {
  const { id } = req.body;
  const { hallNo,showTimes,showDate } = req.body;
  let showTime;
  showTime ??= await ShowTime.update({ hallNo,showTimes,showDate}, { where: { id: id } });
  if (!showTime) {
    return res.status(404).json({ message: "ShowTime not found" });
  } else {
    res.status(200).json({ message: "ShowTime updated successfully" });
  }
};
