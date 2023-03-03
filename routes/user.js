import express from "express";
import { getUsers } from "../services/user-service.js";

const usersRouter = express.Router();

usersRouter.get("/users", async (req, res) => {
  console.log("Users avah huselt orj irlee");
  const { query } = req;
  const result = await getUsers(query.limit || 10);
  res.send(result);
});

export default usersRouter;
