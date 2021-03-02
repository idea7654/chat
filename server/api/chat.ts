import express from "express";
// import { update } from "../controllers/userCtrl";
import jwt from "../utils/jwt";
import { createRoom, getRoom, searchRoom } from "../controllers/roomCtrl";
const roomRoute: express.Router = express.Router();

// userRoute.use("/", jwt);
roomRoute.post("/create", createRoom);
roomRoute.use("/", jwt);
roomRoute.get("/", getRoom);
roomRoute.post("/search", searchRoom);

export default roomRoute;
