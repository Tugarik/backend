import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB_STRING)
.then(()=> console.log('Database Connected!'))
.catch((error)=>console.log(error));

export default mongoose.connection;