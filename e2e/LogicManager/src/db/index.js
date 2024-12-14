import { Sequelize } from "sequelize";
import redis from "redis";
import * as env from "../env.js";

export const sequelize = new Sequelize(env.DBNAME, env.USERNAME, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT,
});

export const client = redis.createClient({
  socket: {
    host: env.HOST,
    port: 6379,
  },
});

let redisWarningLogged = false;

(async () => {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (err) {
    if (!redisWarningLogged) {
      console.error(
        "Warning: Could not connect to Redis. Continuing without Redis:",
        err.message
      );
      redisWarningLogged = true;
    }
  }
})();

client.on("error", (err) => {
  if (!redisWarningLogged) {
    console.error("Redis Client Error:", err.message);
    redisWarningLogged = true;
  }
});
