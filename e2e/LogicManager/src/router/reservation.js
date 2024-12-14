import express from "express";
import {
  createReservation,
  getReservations,
  getReservationById,
  deleteReservation,
  updateReservation,
  PriceOfCinema,
} from "../controller/reservation.js";

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo } from "../middleWare/auth.js";
export const reservationRouter = express.Router();

reservationRouter.get("/dashBoard/vendor/:vendorId",protect,restrictTo("vendor"), PriceOfCinema);

reservationRouter.use(protect, restrictTo("customer"));
reservationRouter.post(
  "/createReservation/:cinemaId/:movieId/:userId",
  createReservation
);

reservationRouter.get("/showReservations/:id", getReservations);

reservationRouter.get(
  "/getReservation/:id",
  editKey("reservation"),
  getKey,
  getReservationById
);

reservationRouter.delete("/canncelReservation/:id", deleteReservation);

reservationRouter.put("/updateReservation/:id", updateReservation);
