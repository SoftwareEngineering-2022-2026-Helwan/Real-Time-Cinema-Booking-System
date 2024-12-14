import express from "express";
import {
  createCinema,
  getCinemas,
  getCinemaById,
  getCinemaByVId,
  deleteCinema,
  updateCinema,
  search,
} from "./../controller/cinema.js";
import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo, getMe } from "../middleWare/auth.js";

export const cinemaRouter = express.Router({
  mergeParams: true,
});

cinemaRouter.get("/showAllCinema", getCinemas);
cinemaRouter.get("/getCinemas/:id",protect, restrictTo("vendor"),getCinemaByVId);
cinemaRouter.get("/getCinema/:id",protect,restrictTo("vendor"), getCinemaById);
// cinemaRouter.get("/getCinema/:id", editKey("cinema"), getKey, getCinemaById);
cinemaRouter.get("/", search);

cinemaRouter.post(
  "/createCinema/",
  protect,
  restrictTo("vendor"),
  getMe,
  createCinema
);

//cinemaRouter.use(protect,restrictTo("admin","ventor"));
//cinemaRouter.delete("/deleteCinema/:id", deleteCinema);
//cinemaRouter.patch("/updateCinema/:id", updateCinema);
