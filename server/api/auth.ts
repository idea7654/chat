import express from "express";
import { Register, login, check } from "../controllers/userCtrl";
import jwt from "../utils/jwt";
const authRoute = express.Router();

//authRoute.get("/", Register);
authRoute.post("/register", Register);
authRoute.post("/login", login);
authRoute.use("/check", jwt);
authRoute.get("/check", check);

export default authRoute;
