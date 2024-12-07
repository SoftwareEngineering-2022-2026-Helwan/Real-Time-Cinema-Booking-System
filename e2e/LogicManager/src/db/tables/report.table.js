import { sequelize, DataTypes } from "./../index";
import  User  from "./User";

// const Report = sequelize.define(
//   "Report",
//   {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     report: {
//       type: DataTypes.STRING,
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
//   },
//   {
//     timestamps: true,
//   }
// );

// Report.belongsTo(User, {
//     foreignKey: "Customer",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
//   })

const Report = sequelize.define('Report', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Description: { type: DataTypes.STRING, allowNull: false }
  });


Report.belongsTo(User, { foreignKey: 'Customer' });
export default Report;
