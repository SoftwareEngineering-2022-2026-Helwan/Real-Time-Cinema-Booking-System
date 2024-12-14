import Movie from "./../db/tables/movie.table.js";
import { client } from "../db/index.js";
import Cinema from "./../db/tables/cinema.table.js";
import showtime from "./../db/tables/showtime.table.js";
import imageHandler from "../utils/imageHandler.util.js";

export const addMovieToCinema = async (req, res) => {
  try {
    console.log("headers: ",req.headers);
    // console.log("body: ",req.body);
    const { id } = req.params;
    const { title, staring, category, description, duration } = req.body;

    const img = req.file || {};
    
    console.log( title, staring, category, description, duration, img);
    if (!title || !staring || !category || !description || !duration || !img) {
    // if (!title || !staring || !category || !description || !duration) {
      return res
        .status(400)
        .json({ message: "Please provide all required data" });
    }

    // save image 
    await imageHandler.saveImage(img);
    const imageName = img.originalname;
    console.log(imageName);
    const cinema = await Cinema.findByPk(id);
    if (!cinema) {
      return res.status(404).json({ message: "Cinema not found" });
    }
    let stars = staring;
    const movie = await Movie.create({
      title,
      staring: stars,
      img: imageName,
      category,
      description,
      duration,
      cinemaId: id,
    });

    //client.set("movie" + movie.id, JSON.stringify(movie));

    res.status(201).json(movie);
  } catch (error) {
    console.error("Error adding movie to cinema:", error);
    res
      .status(500)
      .json({ message: "Error adding movie to cinema", error: error.message });
  }
};

export const getMovies = async (req, res) => {
  try {
    const { cinemaId } = req.body;
    let movies = null;
    if (!cinemaId) {
        movies = await Cinema.findAll({
          include: [
            {
              model: Movie,
              attributes: ["id", "img", "title", "category", "duration"],
            },
            {
              model: showtime,
              attributes: ["id", "showTime"],
            },
          ],
          attributes: ["name", "ID"]
        });
    }else
    {
        movies = await Cinema.findByPk(cinemaId, {
          include: [
            {
              model: Movie,
              attributes: ["id", "img", "title", "category", "duration"],
            },
            {
              model: showtime,
              attributes: ["id", "showTime"],
            },
          ],
          attributes: ["name", "ID"],
        });
    }


    if (!movies) {
      return res.status(404).json({ message: "Cinema not found" });
    }

    res.status(200).json(movies);
  } catch (error) {
    console.error("Error fetching movies:", error);
    res
      .status(500)
      .json({ message: "Error fetching movies", error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findByPk(id, {
      include: [
        { model: Cinema, attributes: ["name", "Location", "ID"] },
        { model: showtime, required: false, attributes: ["id", "showTime"] },
      ],
    });

    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    // client.set("movie" + movie.id, JSON.stringify(movie));
    res.status(200).json(movie);
  } catch (error) {
    console.error("Error fetching movie:", error);
    res
      .status(500)
      .json({ message: "Error fetching movie", error: error.message });
  }
};

//--------------------------------------------

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Movie.destroy({ where: { id } });
    if (deletedRows === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    console.error("Error deleting movie:", error);
    res
      .status(500)
      .json({ message: "Error deleting movie", error: error.message });
  }
};

export const updateMovie = async (req, res) => {
  const { id, cinemaid } = req.params;
  const { title, staring } = req.body;
  if (!title || !staring) {
    return res
      .status(400)
      .json({ message: "Please provide all required data" });
  }

  try {
    const [updatedRows] = await Movie.update(
      { title, staring, cinemaId: cinemaid },
      { where: { id: id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Movie not found" });
    }
    const updatedMovie = await Movie.findByPk(id, {
      include: [{ model: Cinema }, { model: showtime, required: false }],
    });
    res.status(200).json({
      message: "Movie updated successfully",
      movie: updatedMovie,
    });
  } catch (error) {
    console.error("Error updating movie:", error);
    res.status(500).json({
      message: "Error updating movie",
      error: error.message,
    });
  }
};


export const getImgMovie = async (req, res) => {
    try {
      const movie = await Movie.findAll({
        attributes: ["img", "id"],
      });
  
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      client.set("movie" + movie.id, JSON.stringify(movie));
      res.status(200).json(movie);
    } catch (error) {
      console.error("Error fetching movie:", error);
      res
        .status(500)
        .json({ message: "Error fetching movie", error: error.message });
    }
  };

