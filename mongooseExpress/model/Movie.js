import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  poster: String,
  num_mflix_comments: Number,
  title: String,
  fullplot: String,
  languages: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: Object,
  lastupdated: String,
  year: Number,
  imdb: Object,
  countries: [String],
  type: String,
  tomatoes: Object,
});

const Movie = mongoose.model("Movie", MovieSchema);

export default Movie;
