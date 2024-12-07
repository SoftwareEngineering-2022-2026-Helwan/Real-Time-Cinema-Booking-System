import { sequelize, DataTypes } from "./../index";
import User from "./user.table";
import Cinema from "./cinema.table";
import Movie from "./movie.table";
import ShowTime from "./showtime.table";

// const Reservation = sequelize.define(
//   "Reservation",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     Cinema: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Cinema",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     Movie: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Movie",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     ShowTime: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "ShowTime",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     Seats: {
//       type: DataTypes.ARRAY,
//       allowNull: false,
//     },
//     Customer: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "User",
//         key: "ID",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     Price: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// Reservation.belongsTo(User, { foreignKey: "Customer" });
// Reservation.belongsTo(Cinema, { foreignKey: "Cinema" });
// Reservation.belongsTo(Movie, { foreignKey: "Movie" });
// Reservation.belongsTo(ShowTime, { foreignKey: "ShowTime" });

const Reservation = sequelize.define('Reservation', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Seats: { type: DataTypes.INTEGER, allowNull: false },
    Price: { type: DataTypes.FLOAT, allowNull: false }
  });

  Reservation.belongsTo(Users, { foreignKey: 'Customer' });
  Reservation.belongsTo(Cinema, { foreignKey: 'Cinema' });
  Reservation.belongsTo(Movie, { foreignKey: 'Movie' });
  Reservation.belongsTo(Showtime, { foreignKey: 'Showtime' });
  
  
  

export default Reservation;
