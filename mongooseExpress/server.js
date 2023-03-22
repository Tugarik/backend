import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "./config/MongoDB-config.js";
import Movie from "./model/Movie.js";
import db from "./config/MongoDB-config.js";
import MoviesRouter from "./routes/movie.js";

const PORT = 5000;
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(MoviesRouter);

db.once("open", () => {
  Movie.find({})
    .limit(1)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
