import mongoose from "mongoose";

const sampleRestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    coord: [Number],
  },
});
const SampleRestaurant = mongoose.model("Restaurant", sampleRestaurantSchema);

SampleRestaurant.collection.createIndex({ address: "2dsphere" });

export default SampleRestaurant;
