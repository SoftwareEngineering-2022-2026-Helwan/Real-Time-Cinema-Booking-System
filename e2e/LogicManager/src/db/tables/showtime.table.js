import { sequelize } from "./../index.js";
import { DataTypes } from "sequelize";

const ShowTime = sequelize.define("ShowTime", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hallNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  showTime: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cinemaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  movieId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isReleased: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

export default ShowTime;
