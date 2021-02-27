import express from "express";
import authRoute from "./auth";
import friendRoute from "./friend";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/friend", friendRoute);

export default router;
