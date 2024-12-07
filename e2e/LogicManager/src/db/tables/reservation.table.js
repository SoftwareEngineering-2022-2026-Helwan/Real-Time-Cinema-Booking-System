import { sequelize } from "./../index.js";
import { DataTypes } from "sequelize";

const Reservation = sequelize.define("Reservation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  seats: {
    type: DataTypes.ARRAY(DataTypes.STRING), 
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

export default Reservation;
