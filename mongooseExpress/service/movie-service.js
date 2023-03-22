import Movie from "../model/Movie.js";

export async function getMovies() {
  // return await Movie.find({})
  //   .limit(5)
  //   .then((res) => {
  //     return res;
  //   });

  // ----------------------- 1 dasgal -----------------------
  // return await Movie.aggregate([
  //   { $group: { _id: null, total: { $count: {} } } },
  // ]).then((res) => {
  //   return res;
  // });

  // ----------------------- 2 dasgal -----------------------
  // return await Movie.aggregate([
  //   { $group: { _id: null, avg_rating: { $avg: "$imdb.rating" } } },
  // ]).then((res) => {
  //   return res;
  // });

  // ----------------------- 3 dasgal -----------------------
  // return await Movie.aggregate([
  //   { $match: { "imdb.rating": { $ne: "" } } },
  //   { $sort: { "imdb.rating": -1 } },
  //   {
  //     $project: { _id: 0, title: 1, "imdb.rating": 1 },
  //   },
  //   { $limit: 1 },
  // ]).then((res) => {
  //   return res;
  // });

  // ----------------------- 4 dasgal -----------------------
  // return await Movie.aggregate([
  //   { $group: { _id: null, avg_runtime: { $avg: "$runtime" } } },
  // ]).then((res) => {
  //   return res;
  // });

  // ----------------------- 5 dasgal -----------------------
  // return await Movie.aggregate([
  //   { $unwind: "$genres" },
  //   { $group: { _id: "$genres", count: { $count: {} } } },
  // ]).then((res) => {
  //   return res;
  // });

  // ----------------------- 6 dasgal -----------------------
  return await Movie.aggregate([
    { $unwind: "$grades.score" },
    { $group: { _id: null, avgScore: { $avg: "$grades.score" } } },
  ]).then((res) => {
    return res;
  });
}
