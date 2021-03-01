import express from "express";
import { update } from "../controllers/userCtrl";
import jwt from "../utils/jwt";
import upload from "../utils/multer";
const userRoute: express.Router = express.Router();

userRoute.use("/", jwt);
userRoute.put("/", upload.single("img"), update);

export default userRoute;
