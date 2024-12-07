import { sequelize, DataTypes } from "./../index";
import Report from "./report.table";
import Reservation from "./reservation.table";


// const User = sequelize.define(
//   "User",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     role: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       defaultValue: "customer",
//     },
//     phone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const User = sequelize.define('Users', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    Phone: { type: DataTypes.STRING, allowNull: false },
    Email: { type: DataTypes.STRING, allowNull: false, unique: true },
    Password: { type: DataTypes.STRING, allowNull: false },
    Role: { type: DataTypes.STRING, allowNull: false }
  });

User.hasMany(Reservation, { foreignKey: 'Customer' });
User.hasMany(Report, { foreignKey: 'Customer' });

export default User;
