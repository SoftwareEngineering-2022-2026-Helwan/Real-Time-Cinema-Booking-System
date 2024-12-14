import express from "express";
import cors from "cors";
import { sequelize } from "./db/tables/assosication.js";
import * as env from "./env.js";
import path from "path";
import { fileURLToPath } from "url";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
import { importData } from "./dataSet/implement.js";
import { cinemaRouter } from "./router/cinema.js";
import { movieRouter } from "./router/movie.js";
import { userRouter } from "./router/user.js";
import { reportRouter } from "./router/report.js";
import { reservationRouter } from "./router/reservation.js";
import { showtimeRouter } from "./router/showtime.js";

const app = express();

const corsOptions = {
    origin: "*",
    
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/public/", express.static(path.join(__dirname, "public")));

sequelize
  .sync({ alter: true })
  .then(() => {
    importData();
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });

app.use("/api/cinema", cinemaRouter);
app.use("/api/movie", movieRouter);
app.use("/api/report", reportRouter);
app.use("/api/reservation", reservationRouter);
app.use("/api/showtime", showtimeRouter);
app.use("/api", userRouter);

app.listen(8081, env.HOST, () => {
  console.log(`Server running on http://${env.HOST}:${env.PORT}`);
});
