import { sequelize } from "../db/tables/assosication.js";
import User from "../db/tables/user.table.js";
import Cinema from "../db/tables/cinema.table.js";
import Movie from "../db/tables/movie.table.js";
import ShowTime from "../db/tables/showtime.table.js";
import Reservation from "../db/tables/reservation.table.js";
import Report from "../db/tables/report.table.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filePath);

export const importData = async () => {
  try {
    const users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./user.json"), "utf-8")
    );
    const cinemas = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./cinema.json"), "utf-8")
    );
    const movies = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./movie.json"), "utf-8")
    );
    const reports = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./report.json"), "utf-8")
    );
    const showtimes = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./showtime.json"), "utf-8")
    );
    const reservations = JSON.parse(
      fs.readFileSync(path.join(__dirname, "./reservation.json"), "utf-8")
    );

    await sequelize.sync({ force: true });
    console.log("Database synced");

    await User.bulkCreate(users);
    await Cinema.bulkCreate(cinemas);
    await Movie.bulkCreate(movies);
    await ShowTime.bulkCreate(showtimes);
    await Reservation.bulkCreate(reservations);
    await Report.bulkCreate(reports);

    console.log("All data inserted successfully!");
  } catch (error) {
    console.error("Error during data import:", error);
  }
};

// importData();
