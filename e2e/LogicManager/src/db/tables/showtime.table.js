import { sequelize, DataTypes } from "./../index";
import Cinema from "./cinema.table";
import Movie from "./movie.table";
import Reservation from "./reservation.table";


// const ShowTime = sequelize.define(
//   "ShowTime",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     movieID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Movie",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     cinemaID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Cinema",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// ShowTime.belongsTo(Movie, {
//   foreignKey: "movieID",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });
// ShowTime.belongsTo(Cinema, {
//   foreignKey: "cinemaID",
//   onDelete: "CASCADE",
//   onUpdate: "CASCADE",
// });

const Showtime = sequelize.define('Showtime', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    HallNo: { type: DataTypes.INTEGER, allowNull: false }
  });
  

   // Associations


Showtime.belongsTo(Cinema, { foreignKey: 'Cinema' });
Showtime.belongsTo(Movie, { foreignKey: 'Movie' });
Showtime.hasMany(Reservation, { foreignKey: 'Showtime' });

export default ShowTime;
