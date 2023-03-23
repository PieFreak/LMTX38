import express from "express";
import { makeUserService } from "../service/UserService.js";

export const userRouter = express.Router();

const userService = makeUserService();


/**
 * POST call for creating a user
 */
userRouter.post("/", async (req, res) => {
    try {
        const {email, password, username} = req.body;
        if (typeof email !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | email has type ${typeof email}`);
            return;
        }
        if (typeof password !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | password has type ${typeof password}`);
            return;
        }
        if (typeof username !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | username has type ${typeof username}`);
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


/**
 * POST call for logging in with email and password
 */
userRouter.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
        if (typeof email !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | email has type ${typeof email}`);
            return;
        }
        if (typeof password !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | password has type ${typeof password}`);
            return;
        }
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


/**
 * POST call for logging out
 */
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
 * GET call for getting all the users (id, username) only
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
  * PUT call for changing the username of a user
  */
 userRouter.put("/username/change", async (req, res) => {
    try {
        const user = req.sesson.user;
        const {newUsername} = req.body;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof newUsername !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | newUsername should be a string, has type ${typeof newUsername}`);
            return;
        }
        // TODO: Validate username?

        const response = await userService.updateUsername(user.id, newUsername);
        if (!response) {
            res.status(400).send(`Couldn't update the username, something went wrong!`);
            return;
        }
        const updated_user = await userService.findUser(user.email, user.password);
        req.session.user = updated_user;
        res.status(200).send(`User with ID ${updated_user.id} has updated their username to ${updated_user.username}`);
    } catch (err) {
        res.status(500).send(err.message);
    }
})


/**
 * POST call for adding a friend to a user
 */
userRouter.post("/friend", async (req, res) => {
    try {
        const user = req.session.user;
        const {friend} = req.body;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof friend !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | friend should be a string, has type ${typeof friend}`);
            return;
        }
        const new_friend = await userService.addFriend(user.id, friend);
        if (!new_friend) {
            res.status(400).send(`Couldn't save the friend, something went wrong!`);
            return;
        }
        res.status(201).send(`User with ID ${friend} was added to ${user.id}'s friends`);
    } catch (err) {
        res.status(500).send(err.message);
    }
})


/**
 * GET call for getting all friends of a user
 */
userRouter.get("/friend", async (req, res) => {
    try {
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        const friends = await userService.getFriends(user.id);
        if (friends == null) {
            res.status(400).send(`Couldn't get the friends of user with ID ${user.id}!`);
            return;
        }
        res.status(200).send(friends);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// TODO: remove friend?


/**
 * GET call for getting all the rounds created by the user
 */
userRouter.get("/round", async (req, res) => {
    try {
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        const rounds = await userService.getRounds(user.id);
        if (rounds == null) {
            res.status(400).send(`Couldn't get the rounds of user with ID ${user.id}!`);
            return;
        }
        res.status(200).send(rounds);
    } catch (err) {
        res.status(500).send(err.message);
    }
})


/**
 * GET call for getting all the completed rounds created by the user
 */
userRouter.get("/round/complete", async (req, res) => {
    try {
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        const complete_rounds = await userService.getCompleteRounds(user.id);
        if (complete_rounds == null) {
            res.status(400).send(`Couldn't get the complete rounds of user with ID ${user.id}!`);
            return;
        }
        res.status(200).send(complete_rounds);
    } catch (err) {
        res.status(500).send(err.message);
    }
})