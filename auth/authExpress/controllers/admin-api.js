import express from "express";
import { register, login } from "../services/admin.-service.js";

const Router = express.Router();

Router.post("/register", register);
Router.post("/login", login);

export default Router;
