import cors from "cors";
import express from "express";
import session from "express-session";

import { userRouter } from "./router/UserRouter.js";
import { gameRouter } from "./router/GameRouter.js";
import { questionRouter } from "./router/QuestionRouter.js";

export const app = express();

app.use(session({
    secret: "secret key", // TODO: separate file. DO NOT UPLOAD TO GITHUB
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
//app.use("/question", questionRouter);