import express from "express";
import {
  addFriend,
  friendSearch,
  searchManyFriends,
} from "../controllers/friendCtrl";
import { search } from "../controllers/userCtrl";
import jwt from "../utils/jwt";
const friendRoute = express.Router();

friendRoute.use("/", jwt);
friendRoute.post("/", addFriend);
friendRoute.post("/search", search);
friendRoute.get("/", friendSearch);
friendRoute.get("/search", jwt, searchManyFriends);

export default friendRoute;
