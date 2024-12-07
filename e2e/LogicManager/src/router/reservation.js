import express from "express";
import {
  createReservation,
  getReservations,
  getReservationById,
  deleteReservation,
  updateReservation,
} from "../controller/reservation.js"; 

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
export const reservationRouter = express.Router();


reservationRouter.post("/reservation", createReservation);


reservationRouter.get("/reservation", getReservations);


reservationRouter.get("/reservation/:id",editKey('reservation'),getKey, getReservationById);


reservationRouter.delete("/reservation", deleteReservation);

reservationRouter.put("/reservation", updateReservation);

