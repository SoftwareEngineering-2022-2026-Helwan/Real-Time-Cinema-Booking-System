import express from "express";
import {
  createReport,
  getReports,
  getReportById,
  deleteReport,
  updateReport,
} from "../controller/report.js";
import { editKey } from "../middleWare/editkey.js";
import { getKey } from "../middleWare/getKey.js";

export const reportRouter = express.Router();


reportRouter.get("/report", getReports);


reportRouter.get("/report/:id",editKey('report'),getKey, getReportById);

reportRouter.post("/report", createReport);

reportRouter.delete("/report", deleteReport);

reportRouter.put("/report", updateReport);




