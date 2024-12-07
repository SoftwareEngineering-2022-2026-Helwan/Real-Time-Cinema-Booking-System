import Movie from "./../db/tables/movie.table.js";
import {client} from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";

export const addMovieToCinema = async (req, res) => {
  try {
    const { title, staring, id } = req.body;
    const cinema = await Cinema.findByPk(id);
    if (cinema) {
      const movie = await Movie.create({ title, staring, cinemaId: id });

      res.status(201).json(movie);
    } else {
      res.status(404).json({ message: "Cinema not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovies = async (req, res) => {
  let Movies;
  Movies ??= await Movie.findAll();
  if (Movies) {
    res.status(200).json(Movies);
  } else {
    res.status(500).json({ message: "Error fetching Movies" });
  }
};


export const getMovieById = async (req, res) => {
  const { id } = req.params;
  let movie;
  movie ??= await Movie.findByPk(id);
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  } else {
    client.set("movie" + id, movie);
    await res.status(200).json(movie);
  }
};


export const deleteMovie = async (req, res) => {
  const { id } = req.body;
  let movie;
  movie ??= await Movie.destroy({ where: { id: id } });
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  } else {
    res.status(200).json({ message: "Movie deleted successfully" });
  }
};

export const updateMovie = async (req, res) => {
  const { id } = req.body;
  const { title, staring } = req.body;
  let movie;
  movie ??= await Movie.update({ title, staring }, { where: { id: id } });
  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  } else {
    res.status(200).json({ message: "Movie updated successfully" });
  }
};
