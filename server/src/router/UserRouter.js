import express from "express";
import { createUser, changeUsername, getUsers } from "../service/UserService.js";

export const userRouter = express.Router();

userRouter.get("/user", (req, res) => {
    res.status(200).send(getUsers());
});
