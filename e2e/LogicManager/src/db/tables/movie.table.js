import { sequelize} from "./../index.js";
import { DataTypes } from "sequelize";

const Movie = sequelize.define("Movie", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  staring:{
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  }
});

export default Movie;
