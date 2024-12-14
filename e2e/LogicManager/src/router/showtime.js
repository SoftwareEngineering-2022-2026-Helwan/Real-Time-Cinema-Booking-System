import express from "express";
import {
  addShowTimeToCinemaAndMovie,
  getShowTimes,
  getShowTimeById,
  deleteShowTime,
  updateShowTime,
} from "../controller/showTime.js";

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo } from "../middleWare/auth.js";

export const showtimeRouter = express.Router();

showtimeRouter.get("/showAllTimes", getShowTimes);

showtimeRouter.post(
  "/cinema/:cinemaId/movie/:movieId",
  addShowTimeToCinemaAndMovie
);

showtimeRouter.delete("/deleteShowTime/:id", deleteShowTime);

//showtimeRouter.put("/editShowTime/:id", updateShowTime);
/*showtimeRouter.get(
"/showtime/:id",
editKey("showTime"),
getKey,
getShowTimeById
);*/
