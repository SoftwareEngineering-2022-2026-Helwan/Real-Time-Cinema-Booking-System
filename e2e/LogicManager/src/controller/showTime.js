import Movie from "./../db/tables/movie.table.js";
import { client } from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";
import ShowTime from "../db/tables/showtime.table.js";

export const addShowTimeToCinemaAndMovie = async (req, res) => {
  try {
    const { cinemaId, movieId } = req.params;
    const { hallNo, showTimes, showDate } = req.body;
    if (!hallNo || !showTimes) {
      return res.status(400).json({
        message: "Please provide all required fields (hallNo, showTimes)",
      });
    }
    console.log(hallNo, showDate, typeof showTimes, cinemaId, movieId);
    const showTime = await ShowTime.create({
      hallNo,
      showTime: showTimes,
      cinemaId,
      movieId,
    });

    res.status(201).json(showTime);
  } catch (error) {
    console.error("Error adding showtime:", error);
    res
      .status(500)
      .json({ message: "Error adding showtime", error: error.message });
  }
};

export const getShowTimes = async (req, res) => {
  try {
    const times = await ShowTime.findAll({
      include: [{ model: Cinema }, { model: Movie, required: false }],
    });
    
    res.status(200).json(times);
  } catch (error) {
    console.error("Error fetching showtimes:", error);
    res.status(500).json({ message: "Error fetching showtimes" });
  }
};
export const deleteShowTime = async (req, res) => {
  try {
    const { id } = req.params;
    const showTime = await ShowTime.destroy({ where: { id } });
    if (showTime === 0) {
      return res.status(404).json({ message: "ShowTime not found" });
    }
    res.status(200).json({ message: "ShowTime deleted successfully" });
  } catch (error) {
    console.error("Error deleting showtime:", error);
    res.status(500).json({ message: "Error deleting showtime" });
  }
};
//******************************************************************************** */

export const getShowTimeById = async (req, res) => {
  try {
    const { id } = req.params;
    const showTime = await ShowTime.findByPk(id, {
      include: [{ model: Cinema }, { model: Movie, required: false }],
    });
    if (!showTime) {
      return res.status(404).json({ message: "ShowTime not found" });
    }
    client.set(`showTime${showTime.id}`, JSON.stringify(showTime));
    res.status(200).json(showTime);
  } catch (error) {
    console.error("Error fetching showtime:", error);
    res.status(500).json({ message: "Error fetching showtime" });
  }
};

export const updateShowTime = async (req, res) => {
  try {
    const { id } = req.params;
    const { hallNo, showTimes, showDate } = req.body;
    const showTime = await ShowTime.update(
      { hallNo, showTimes, showDate },
      { where: { id } }
    );
    if (showTime[0] === 0) {
      return res.status(404).json({ message: "ShowTime not found" });
    }
    client.set(`showTime${showTime.id}`, JSON.stringify(showTime));

    res.status(200).json({ message: "ShowTime updated successfully" });
  } catch (error) {
    console.error("Error updating showtime:", error);
    res.status(500).json({ message: "Error updating showtime" });
  }
};
