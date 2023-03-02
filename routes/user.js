import express from "express";

const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
  console.log("Users avah huselt orj irlee");
  res.send("Users avah handalt orj irlee");
});

export default usersRouter;
