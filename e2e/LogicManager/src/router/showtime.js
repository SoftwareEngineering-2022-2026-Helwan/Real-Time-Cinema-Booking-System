import express from 'express';
import {
  addShowTimeToCinemaAndMovie,
  getShowTimes,
  getShowTimeById,
  deleteShowTime,
  updateShowTime,
} from '../controller/showTime.js';

import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
export const showtimeRouter = express.Router();


showtimeRouter.post('/showtime', addShowTimeToCinemaAndMovie);


showtimeRouter.get('/showtime', getShowTimes);


showtimeRouter.get('/showtime/:id', editKey('showTime'),getKey,getShowTimeById);


showtimeRouter.delete('/showtime', deleteShowTime);


showtimeRouter.put('/showtime', updateShowTime);

