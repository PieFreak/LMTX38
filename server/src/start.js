import cors from "cors";
import express from "express";
import session from "express-session";

import { dbInit } from "./database/database.js"
import { userRouter } from "./router/UserRouter.js";
import { gameRouter } from "./router/GameRouter.js";

export const app = express();

const connection = await dbInit();

app.use(session({
    secret: 'asdsdw2hfgvauin9',
    resave: false,
    saveUninitialized: true
}));
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());
app.use("/user", userRouter);
app.use("/game", gameRouter);