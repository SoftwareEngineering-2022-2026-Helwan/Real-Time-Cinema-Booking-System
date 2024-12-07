import express from "express";
import {
  createCinema,
  getCinemas,
  getCinemaById,
  deleteCinema,
  updateCinema,
} from "./../controller/cinema.js";
import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";

export const cinemaRouter = express.Router();

cinemaRouter.get("/", getCinemas);

cinemaRouter.get("/:id", editKey("cinema"), getKey, getCinemaById);

cinemaRouter.post("/", createCinema);

cinemaRouter.delete("/:id", deleteCinema);

cinemaRouter.put("/:id", updateCinema);

