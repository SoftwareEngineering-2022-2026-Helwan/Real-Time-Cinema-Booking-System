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
    type: DataTypes.TIME,
    allowNull: false,
  },
  showDate:{
    type: DataTypes.DATE,
    allowNull: false,
  }
});

export default ShowTime;
