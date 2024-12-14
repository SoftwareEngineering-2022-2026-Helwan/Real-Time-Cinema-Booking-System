import Cinema from "./../db/tables/cinema.table.js";
import { client } from "../db/index.js";
import { Op } from "sequelize";
import Movie from "../db/tables/movie.table.js";

export const createCinema = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name, Location } = req.body;
  if (!name || !Location) {
    return res.status(400).json({ message: "Name and Location are required" });
  }
  try {
    const cinema = await Cinema.create({ name, Location, vendorId: id });
    //client.set("cinema" + cinema.ID, JSON.stringify(cinema));
    res.status(201).json(cinema);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating Cinema" });
  }
};

export const search = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const cinemas = await Cinema.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
      attributes: ["ID", "name", "Location"],
      include: [
        {
          model: Movie,
          required: false,
          attributes: ["id", "title", "img", "category", "duration"],
        },
      ],
    });
    if (!cinemas.length) {
      return res.status(404).json({ message: "No cinemas found" });
    }
    res.status(200).json(cinemas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cinemas" });
  }
};
export const getCinemaById = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Cinema ID is required" });
  }
  let cinema;
  try {
    cinema = await Cinema.findByPk(id, {
      include: [
        {
          model: Movie,
          required: false,
          attributes: ["id", "title", "img", "category", "duration"],
        },
      ],
      attributes: ["ID", "name", "Location"],
    });
    if (!cinema) {
      return res.status(404).json({ message: "Cinema not found" });
    }
    // client.set("cinema" + id, JSON.stringify(cinema));
    return res.status(200).json(cinema);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching cinema" });
  }
};
export const getCinemaByVId = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).json({ message: "Cinema ID is required" });
  }
  let cinema;
  try {
    cinema = await Cinema.findAll({where: {vendorId: id}}, {
      include: [
        {
          model: Movie,
          required: false,
          attributes: ["id", "title", "img", "category", "duration"],
        },
      ],
      attributes: ["ID", "name", "Location", "vendorId"],
    });
    if (!cinema) {
      return res.status(404).json({ message: "Cinema not found" });
    }
    // client.set("cinema" + id, JSON.stringify(cinema));
    return res.status(200).json(cinema);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error fetching cinema" });
  }
};

//-------------------------------------------------------------------------------------

export const getCinemas = async (req, res) => {
  let cinemas;
  cinemas ??= await Cinema.findAll();
  if (cinemas) {
    res.status(200).json(cinemas);
  } else {
    res.status(500).json({ message: "Error fetching Cinemas" });
  }
};

export const deleteCinema = async (req, res) => {
  const { id } = req.params;
  let cinema;
  cinema ??= await Cinema.destroy({ where: { ID: id } });
  if (cinema === 0) {
    return res.status(404).json({ message: "Cinema not found" });
  } else {
    res.status(200).json({ message: "Cinema deleted successfully" });
  }
};

export const updateCinema = async (req, res) => {
  const id = req.params.id;
  const { name, location } = req.body;
  if (!name || !location) {
    return res
      .status(400)
      .json({ message: "Missing data: 'name' or 'location'" });
  }
  try {
    const cinema = await Cinema.findByPk(id);
    if (!cinema) {
      return res.status(404).json({ message: "Cinema not found" });
    }
    await cinema.update(
      { name: name, Location: location },
      {
        where: { ID: id },
      }
    );
    res.status(200).json({ message: "Cinema updated successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the cinema" });
  }
};
