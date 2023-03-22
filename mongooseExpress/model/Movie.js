import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    year: Number,
    genres: [String], // specs: Array
  },
  { collection: "movies" }
);

const Movie = mongoose.model("Movie", MovieSchema, "movies");

export default Movie;
