import express from "express";
import {
  addMovieToCinema,
  getMovies,
  getMovieById,
  deleteMovie,
  updateMovie,
} from "./../controller/movie.js";
import multer from "multer";
import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo } from "../middleWare/auth.js";
// const storage = multer.memoryStorage(); // You can use diskStorage for saving files to disk.
// const upload = multer({
//     storage,
//     limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10 MB
//   });
export const movieRouter = express.Router();

movieRouter.post("/movies", getMovies);
movieRouter.get("/movie/:id", getMovieById);
// movieRouter.get("/movie/:id", editKey("movie"), getKey, getMovieById);
movieRouter.get("/slideShow", getMovies);

movieRouter.use(protect, restrictTo("admin", "vendor"));
// movieRouter.post("/createMovie/:id",upload.single("img"), addMovieToCinema);
movieRouter.post("/createMovie/:id", multer().single("img"),addMovieToCinema);

//movieRouter.delete("/deleteMovie/:id", deleteMovie);
//movieRouter.put("/updateMovie/:id/cinema/:id", updateMovie);
