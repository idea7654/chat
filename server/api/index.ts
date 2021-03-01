import express from "express";
import authRoute from "./auth";
import friendRoute from "./friend";
import userRoute from "./user";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/friend", friendRoute);
router.use("/user", userRoute);

export default router;
