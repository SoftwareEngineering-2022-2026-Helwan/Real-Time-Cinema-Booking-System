import Report from "../db/tables/report.table.js";
import { client } from "../db/index.js";
import User from "../db/tables/user.table.js";

export const createReport = async (req, res) => {
  try {
    const id = req.params.id;
    const { description ,email } = req.body;
    console.log(id);

    if (!id || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const report = await Report.create(
      { description, userId: id,email }
    );

    if (!report) {
      return res.status(500).json({ error: "Failed to create report" });
    }

    client.set(`report${report.id}`, JSON.stringify(report));
    res.status(201).json(report);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    if (!reports) {
      return res.status(404).json({ message: "No reports found" });
    }
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByPk(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }
    client.set(`report${report.id}`, JSON.stringify(report));
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.destroy({ where: { id: id } });
    if (report === 0) {
      return res.status(404).json({ message: "Report not found" });
    }
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


