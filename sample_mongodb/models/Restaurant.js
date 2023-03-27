import { Schema, model } from "mongoose";

const restSchema = new Schema({
    name: String,
    address: {
        building: String,
        street: String,
        zipcode: String,
        coord: [Number]
    }
})

restSchema.index({ "address.coord": "2dsphere" });
const Restaurant =  model('Restaurant', restSchema);
export default Restaurant;