import express from "express";
import { makeUserService } from "../service/UserService.js";

export const userRouter = express.Router();

const userService = makeUserService();


/**
 * Post call for creating a user
 */
userRouter.post("/", async (req, res) => {
    try {
        const {email, password, username} = req.body;
        if (typeof(email) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | email has type ${typeof(email)}`);
            return;
        }
        if (typeof(password) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | password has type ${typeof(password)}`);
            return;
        }
        if (typeof(username) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | username has type ${typeof(username)}`);
            return;
        }
        if (req.session.user != null) {
            res.status(406).send(`Bad POST call to ${req.originalUrl} | can't create account while logged in, try loggging out`);
            return;
        }
        
        // TODO: Validate email, password and username (length, characters, etc)
        
        const new_user = await userService.createUser(email, password, username);
        if (!new_user) {
            res.status(409).send(`Bad POST call to ${req.originalUrl} | user with email and/or username already exist`);
            return;
        }
        res.status(201).send(`New user created`);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
userRouter.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        if (typeof(email) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | email has type ${typeof(email)}`);
            return;
        }
        if (typeof(password) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | password has type ${typeof(password)}`);
            return;
        }

        // TODO: Validate email and password | Maybe here also?

        const existing_user = await userService.findUser(email, password);
        if (existing_user == null) {
            res.status(401).send(`Bad POST call to ${req.originalUrl} | bad email or password`);
            return;
        }
        req.session.user = existing_user;
        res.status(201).send(existing_user);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
userRouter.post("/logout", async (req, res) => {
    try {
        if (req.session.user == null) {
            res.status(204).send(`Bad POST call to ${req.originalUrl} | already logged out`);
            return;
        }
        req.session.user = undefined;
        res.status(201).send("Logged out");
    } catch (err) {
        res.status(500).send(err.message);
    }
})

/**
 * Get call for all users in the database
 */
 userRouter.get("/all", async (req, res) => {
     try {
         const users = await userService.getUsers();
         res.status(200).send(users);
     } catch (err) {
         res.status(500).send(err.message);
     }
 })


/**
 * Get call for user with given ID in the database
 */
// userRouter.get("/:ID", async (req, res) => {
//     try {
//         const valid_ID = parseInt(req.params.ID);
//         if (!Number.isInteger(valid_ID)) {
//             res.status(400).send(`Bad GET request to ${req.originalUrl} --- not a valid number`);
//             return;
//         }
//         const user = await userService.getUser(valid_ID);
//         res.status(200).send(user);
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// })
/**
 * Put call for new username for a user given ID in the database
 */
// userRouter.put("/:ID", async (req, res) => {
//     try {
//         const valid_ID = parseInt(req.params.ID);
//         if (!Number.isInteger(valid_ID)) {
//             res.status(400).send(`Bad GET request to ${req.originalUrl} --- not a valid number`);
//             return;
//         }
//         const {new_username} = req.body;
//         await userService.changeUsername(valid_ID, new_username);
//         res.status(200).send(`Username was changed to ${new_username}`);

//     } catch (err) {
//         res.status(500).send(err.message)
//     }
// })