import express from "express";
import {
  createReport,
  getReports,
  getReportById,
  deleteReport,
  
} from "../controller/report.js";
import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";
import { protect, restrictTo, getMe } from "../middleWare/auth.js";

export const reportRouter = express.Router({ mergeParams: true });

reportRouter.get("/showReports", protect,restrictTo("admin"), getReports);

reportRouter.get("/showReport/:id", editKey("report"), getKey, getReportById);

reportRouter.use(protect, getMe);

reportRouter.post("/addReport", createReport);
reportRouter.delete("/deleteReport/:id", deleteReport);

