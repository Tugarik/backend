import express from "express";
import cors from "cors";
import mongoDBConfig from "./config/mongoDB-config.js";

const app = express();
app.use(cors());
const PORT = 5050;

app.listen(PORT, () => {
  mongoDBConfig;
  console.log(`Server started at port ${PORT}`);
});
