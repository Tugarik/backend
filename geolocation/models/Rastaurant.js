import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

Restaurant.collection.createIndex({ location: "2dsphere" });

export default Restaurant;
