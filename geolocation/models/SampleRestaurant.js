import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    coord: [Number],
  },
});

RestaurantSchema.index({ "address.coord": "2dsphere" });
const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
