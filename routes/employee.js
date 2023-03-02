import express from "express";
import { getEmployees } from "../services/emp-service.js";

const empRouter = express.Router();

empRouter.get("/employees", async (req, res) => {
  console.log("Ajiltan avah huselt orj irlee");
  const { query } = req;
  const result = await getEmployees(query.limit || 10);
  res.send(result);
});

export default empRouter;
