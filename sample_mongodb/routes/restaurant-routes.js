import express from "express";
import Restaurant from "../models/Restaurant.js";

const Router = express.Router();

Router.get('/', async (req, res)=>{
    console.log('GET query');
    const result = await Restaurant.find().limit(2);
    return res.status(200).send(result);
});

Router.post('/nearest', async (req, res)=>{
    console.log('POST query');
    try {
        const currentLocation = req.body.location;
        const result = await Restaurant.find({
            "address.coord": {
              $near: {
                $geometry: currentLocation,
                $maxDistance: 5000
              }
            }
          }).limit(10).exec();
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
    } 
});

export default Router;