import express from 'express';
import {
  addMovieToCinema,
  getMovies,
  getMovieById,
  deleteMovie,
  updateMovie,
} from './../controller/movie.js'; 

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
export const movieRouter = express.Router();


movieRouter.get('/movie/:id', editKey('movie'),getKey,getMovieById);

movieRouter.get('/movie', getMovies);

movieRouter.post('/movie', addMovieToCinema);

movieRouter.delete('/movie', deleteMovie);

movieRouter.put('/movie', updateMovie);




