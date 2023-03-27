import express from "express";
import cors from "cors";
import MongoDBconfig from "./config/MongoDB-config.js";
import RestRouter from "./routes/restaurant-routes.js"

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(RestRouter);


app.listen(port, ()=>{
    MongoDBconfig;
    console.log(`Server started at port: ${port}`)
})