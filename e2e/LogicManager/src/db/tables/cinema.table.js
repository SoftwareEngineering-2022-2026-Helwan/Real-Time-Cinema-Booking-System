import { sequelize, DataTypes } from "./../index";

// const Cinema = sequelize.define(
//   "Cinema",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Location: {
//       type: DataTypes.JSON,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const Cinema = sequelize.define('Cinema', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: { type: DataTypes.STRING, allowNull: false },
    Location: { type: DataTypes.STRING, allowNull: false }
  });

Cinema.hasMany(Movie, { foreignKey: 'Cinema' });
Cinema.hasMany(Showtime, { foreignKey: 'Cinema' });
Cinema.hasMany(Reservation, { foreignKey: 'Cinema' });



export default Cinema;
