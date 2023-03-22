import express from "express";
import cors from "cors";
import mongoDBConfig from "./config/mongoDB-config.js";
import AdminRouter from "./controllers/admin-api.js"
import UserRouter from "./controllers/user-api.js"

const PORT = 5050;
const app = express();
app.use(cors());
app.use(express.json());

app.use(AdminRouter);
app.use(UserRouter);

app.listen(PORT, () => {
  mongoDBConfig;
  console.log(`Server started at port ${PORT}`);
});
