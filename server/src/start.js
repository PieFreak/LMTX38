import express from "express";
import { userRouter } from "./router/UserRouter.js";
//import { questionRouter } from "./router/QuestionRouter.js";

export const app = express();
app.use(express.json());
app.use("/user", userRouter);
//app.use("/question", questionRouter);