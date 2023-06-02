import express from "express";
import { getMovies } from "../service/movie-service.js";

const MoviesRouter = express.Router();

MoviesRouter.get("/movies", async (req, res) => {
  console.log("GET movies request recieved");
  const result = await getMovies();
  res.send(result);
});

MoviesRouter.get("/movie", async (req, res) => {
  const { query } = req;
  console.log("GET movies request recieved");
  const result = await getMovieById(query.id);
  res.send(result);
});

export default MoviesRouter;
