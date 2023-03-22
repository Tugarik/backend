import express from "express";
import { getMovies } from "../service/movie-service.js";

const MoviesRouter = express.Router();

MoviesRouter.get("/movies", async (req, res) => {
  console.log("GET movies request recieved");
  const result = await getMovies();
  res.send(result);
});

export default MoviesRouter;
