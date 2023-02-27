import express from "express";
import { makeUserService } from "../service/UserService.js";

export const userRouter = express.Router();

const userService = makeUserService();


/**
 * Post call for creating a user
 */
userRouter.post("/create", async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if (typeof(username) !== "string") {
            res.status(400).send(`Bad POST request -- username ${username} wrong type, should be string`);
            return;
        }
        if (typeof(email) !== "string") {
            res.status(400).send(`Bad POST request -- email ${email} wrong type, should be string`);
        }
        if (typeof(password) !== "string") {
            res.status(400).send(`Bad POST request -- password ${password} wrong type, should be string`);
        }
        const new_user = await userService.createUser(username, email, password);
        res.status(201).send(new_user);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
/**
 * Get call for all users in the database
 */
userRouter.get("/all", async (req, res) => {
    try {
        const users = await userService.getUser();
        res.status(200).send(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
/**
 * Get call for user with given ID in the database
 */
userRouter.get("/:ID", async (req, res) => {
    try {
        const valid_ID = parseInt(req.params.ID);
        if (!Number.isInteger(valid_ID)) {
            res.status(400).send(`Bad GET request to ${req.originalUrl} --- not a valid number`);
            return;
        }
        const user = await userService.getUser(valid_ID);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
/**
 * Put call for new username for a user given ID in the database
 */
userRouter.put("/:ID", async (req, res) => {
    try {
        const valid_ID = parseInt(req.params.ID);
        if (!Number.isInteger(valid_ID)) {
            res.status(400).send(`Bad GET request to ${req.originalUrl} --- not a valid number`);
            return;
        }
        const {new_username} = req.body;
        await userService.changeUsername(valid_ID, new_username);
        res.status(200).send(`Username was changed to ${new_username}`);

    } catch (err) {
        res.status(500).send(err.message)
    }
})