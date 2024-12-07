import Cinema from "./../db/tables/cinema.table.js";
import {client} from "../db/index.js"
// Create a new Cinema
export const createCinema = async (req, res) => {
  const { name, Location } = req.body;
  if (!name || !Location) {
    return res.status(404).json({ message: "enter missing data " });
  }
  let cinema = null;
  cinema ??= await Cinema.create({ name, Location });
  if (cinema) {
    client.SET("cinema"+cinema.ID,JSON.stringify(cinema));
    res.status(201).json(cinema);
  } else {
    res.status(500).json({ message: "Error creating Cinema" });
  }
};

// Get all Cinemas
export const getCinemas = async (req, res) => {
  let cinemas;
  cinemas ??= await Cinema.findAll();
  if (cinemas) {
    res.status(200).json(cinemas);
  } else {
    res.status(500).json({ message: "Error fetching Cinemas" });
  }
};

// Get Cinema by ID
export const getCinemaById = async (req, res) => {
  const id  = req.params.id;
  let cinema;
  cinema ??= await Cinema.findByPk(id);
  if (!cinema) {
    return res.status(404).json({ message: "Cinema not found" });
    
  } else {
    client.set("cinema"+id,JSON.stringify(cinema));
    await res.status(200).json(cinema);
  }
};

// Delete Cinema by ID
export const deleteCinema = async (req, res) => {
  const id  = req.params.id;
  let cinema;
  cinema ??= await Cinema.destroy( {where:{id:id}});
  if (!cinema) {
    return res.status(404).json({ message: "Cinema not found" });
  } else {
    res.status(200).json({ message: "Cinema deleted successfully" });
  }
};

// Update Cinema by ID
export const updateCinema = async (req, res) => {
  const id = req.params.id;
  const { name, Location } = req.body;
  let cinema;
  cinema ??= await Cinema.update({ name, Location }, { where: { id: id } });
  if (!cinema) {
    return res.status(404).json({ message: "Cinema not found" });
  } else {
    res.status(200).json({ message: "Cinema updated successfully" });
  }
};