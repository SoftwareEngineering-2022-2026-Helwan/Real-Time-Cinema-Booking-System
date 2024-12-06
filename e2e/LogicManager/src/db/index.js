import { Sequelize , DataTypes} from "sequelize";
import * as env from "../env.js";

export const sequelize = new Sequelize(
    env.DBNAME,
    env.USERNAME,
    env.PASSWORD,
    {
        host: env.HOST,
        dialect: env.DIALECT,
    }
);

export const DataTypes = DataTypes;



