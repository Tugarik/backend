import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
app.use(cors());

const port = process.env.PORT;
// const port = 5001;

app.listen(port, () => {
  // mongoose
  //   .connect(process.env.MONGODB_STRING)
  //   .then(() => {
  //     console.log("Database connected successfully!");
  //   })
  //   .catch((err) => console.log(err));
  console.log(`Server started at port: ${port}`);
});
