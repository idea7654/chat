import express, { Request, Response, NextFunction } from "express";
require("dotenv").config();
import api from "./api";
import cors from "cors";
import socket from "./socket";
const app: express.Application = express();
const db = require("./models/index");
const port: number = 5000;
const morgan = require("morgan");

db();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use("/", api);
app.set("jwt-secret", process.env.SECRET);

const server = app.listen(port);
socket(server);
