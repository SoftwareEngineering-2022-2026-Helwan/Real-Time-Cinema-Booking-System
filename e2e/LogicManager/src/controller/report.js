import Report from "../db/tables/report.table.js";
import {client} from "../db/index.js";
import User from "../db/tables/user.table.js";

export const createReport = async (req, res) => {
  try {
    const { description, id } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      const report = await Report.create({ description, userId: id });

      res.status(201).json(report);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getReports = async (req, res) => {
  let reports;
  reports ??= await Report.findAll();
  if (reports) {
    res.status(200).json(reports);
  } else {
    res.status(500).json({ message: "Error fetching Reports" });
  }
};

export const getReportById = async (req, res) => {
  const { id } = req.params;
  let report;
  report ??= await Report.findByPk(id);
  if (!report) {
    return res.status(404).json({ message: "Report not found" });
  } else {
    client.set("report" + id, report);
    await res.status(200).json(report);
  }
};

export const deleteReport = async (req, res) => {
  const { id } = req.body;
  let report;
  report ??= await Report.destroy({ where: { id: id } });
  if (!report) {
    return res.status(404).json({ message: "Report not found" });
  } else {
    res.status(200).json({ message: "Report deleted successfully" });
  }
};

export const updateReport = async (req, res) => {
  const { id } = req.body;
  const { description } = req.body;
  let report;
  report ??= await Report.update({ description }, { where: { id: id } });
  if (!report) {
    return res.status(404).json({ message: "Report not found" });
  } else {
    res.status(200).json({ message: "Report updated successfully" });
  }
};
