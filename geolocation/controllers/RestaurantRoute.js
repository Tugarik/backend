import express from "express";
import Restaurant from "../models/Rastaurant.js";
import SampleRestaurant from "../models/SampleRestaurant.js";

const restaurantRoute = express.Router();

// restaurantRoute.get("/nearestrestaurants", async (req, res) => {
//   const currentLocation = req.body.location;
//   const nearestRestaurant = await Restaurant.findOne({
//     location: {
//       $near: {
//         $geometry: currentLocation,
//         $maxDistance: 1000,
//       },
//     },
//   }).exec();
//   res.send(nearestRestaurant);
// });

// restaurantRoute.get("/addrestaurant", async function (req, res) {
//   const newRestaurant = new Restaurant({
//     name: "Yuna Restaurant",
//     location: {
//       coordinates: [106.934593, 47.923756],
//     },
//   });
//   newRestaurant.save();
//   res.status(200).send("success");
// });

restaurantRoute.get("/nearesttenrestaurants", async (req, res) => {
  const currentLocation = req.body.address;
  const nearestRestaurant = await SampleRestaurant.findOne({
    address: {
      $near: {
        $geometry: currentLocation,
        $maxDistance: 1000,
      },
    },
  }).exec();
  res.render("index", {
    title: "Find Nearest Restaurant",
    result: nearestRestaurant,
  });
});

export default restaurantRoute;
