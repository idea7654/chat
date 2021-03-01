import express from "express";
// import { update } from "../controllers/userCtrl";
import jwt from "../utils/jwt";
import { createRoom, getRoom } from "../controllers/roomCtrl";
const roomRoute: express.Router = express.Router();

// userRoute.use("/", jwt);
roomRoute.post("/create", createRoom);
roomRoute.use("/", jwt);
roomRoute.get("/", getRoom);

export default roomRoute;
