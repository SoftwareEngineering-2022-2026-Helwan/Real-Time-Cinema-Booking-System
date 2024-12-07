import { sequelize } from "./../index.js";
import Cinema from "./cinema.table.js";
import Movie from "./movie.table.js";
import ShowTime from "./showtime.table.js";
import User from "./user.table.js";
import Report from "./report.table.js";
import Reservation from "./reservation.table.js";


Cinema.hasMany(Movie, { foreignKey: "cinemaId", onDelete: "CASCADE" });
Movie.belongsTo(Cinema, { foreignKey: "cinemaId" });

Cinema.hasMany(ShowTime, { foreignKey: "cinemaId", onDelete: "CASCADE" });
ShowTime.belongsTo(Cinema, { foreignKey: "cinemaId" });

Movie.hasMany(ShowTime, { foreignKey: "movieId", onDelete: "CASCADE" });
ShowTime.belongsTo(Movie, { foreignKey: "movieId" });

User.hasMany(Report, { foreignKey: "userId", onDelete: "CASCADE" });
Report.belongsTo(User, { foreignKey: "userId" });

Cinema.hasMany(Reservation, { foreignKey: "cinemaId", onDelete: "CASCADE" });
Reservation.belongsTo(Cinema, { foreignKey: "cinemaId" });

Movie.hasMany(Reservation, { foreignKey: "movieId", onDelete: "CASCADE" });
Reservation.belongsTo(Movie, { foreignKey: "movieId" });

ShowTime.hasMany(Reservation, { foreignKey: "showTimeId", onDelete: "CASCADE" });
Reservation.belongsTo(ShowTime, { foreignKey: "showTimeId" });

User.hasMany(Reservation, { foreignKey: "userId", onDelete: "CASCADE" });
Reservation.belongsTo(User, { foreignKey: "userId" });

export { sequelize, Cinema, Movie, ShowTime, User, Report, Reservation };
