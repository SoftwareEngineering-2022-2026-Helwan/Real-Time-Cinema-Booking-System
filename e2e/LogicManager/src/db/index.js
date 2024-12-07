import { Sequelize } from "sequelize";
import redis from 'redis';
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

export const client = redis.createClient({
  host: env.HOST,
  port: 6379 
});

(async () => {
    try {
      await client.connect();
      console.log('Connected to Redis');
    } catch (err) {
      console.error('Error connecting to Redis:', err);
    }
  })();


client.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

