import express from "express";
import verifyToken from "../middleware/auth.js";
import { protectedSignIn, unProtectedSignIn } from "../services/user-service.js";

const Router = express.Router();

Router.post('/protected', verifyToken, protectedSignIn);
Router.post('/unprotected', unProtectedSignIn);

export default Router;