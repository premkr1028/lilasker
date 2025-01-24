import express, { Router } from "express";
import addClients from "../controllers/addClients.js";
const clientAddingRoute = express.Router();
clientAddingRoute.post("/addClient",addClients)
export default clientAddingRoute