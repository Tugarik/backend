import express from "express";
import cors from "cors";
import "./config/MongoDB-config.js";
import MoviesRouter from "./routes/movie.js";
import MongoDBConfig from "./config/MongoDB-config.js";

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use(MoviesRouter);

app.listen(PORT, () => {
  MongoDBConfig;
  console.log(`Server started at port: ${PORT}`);
});
