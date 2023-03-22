import express from "express";
import { signUp, signIn } from "../services/admin.-service.js";

const Router = express.Router();

Router.post('/register', signUp);
Router.post('/login', signIn);

export default Router;