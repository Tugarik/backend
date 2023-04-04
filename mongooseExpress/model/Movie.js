import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  poster: String,
  fullplot: String,
  year: Number,
  genres: [String], // specs: Array
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
