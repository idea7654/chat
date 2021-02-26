import express from "express";
require("dotenv").config();
import api from "./api";

const app: express.Application = express();
const db = require("./models/index");
const port: number = 5000;
const morgan = require("morgan");

db();

app.use(express.json());
app.use(morgan("dev"));
app.use("/", api);

app.set("jwt-secret", process.env.SECRET);

app.listen(port);
