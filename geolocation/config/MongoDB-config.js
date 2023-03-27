import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_STRING)
  .then((req, res) => console.log("Database connected"))
  .catch((err) => console.log(err));

export default mongoose.connection;
