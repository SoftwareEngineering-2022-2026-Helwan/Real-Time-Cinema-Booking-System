import { sequelize, DataTypes } from "./../index";
import Cinema from "./cinema.table";

// const Movie = sequelize.define(
//   "Movie",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     CinemaID: {
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
// Movie.belongsTo(Cinema, { foreignKey: "CinemaID" });

const Movie = sequelize.define('Movie', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Title: { type: DataTypes.STRING, allowNull: false },
    Starring: { type: DataTypes.STRING, allowNull: true }
  });

Movie.belongsTo(Cinema, { foreignKey: 'Cinema' });
Movie.hasMany(Showtime, { foreignKey: 'Movie' });
Movie.hasMany(Reservation, { foreignKey: 'Movie' });

  
export default Movie;
