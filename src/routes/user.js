import express, { Router } from "express";
import arr from "../controllers/register.js";
const registerRoute = express.Router();
const [signUp, signIn] = arr

registerRoute.post("/signup",signUp)
registerRoute.post("/signin",signIn)

export default registerRoute