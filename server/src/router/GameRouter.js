import express from "express";
import { makeGameService } from "../service/GameService.js";



export const gameRouter = express.Router();

const gameService = makeGameService();

gameRouter.post("/", async (req, res) => {
    try {
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        // create new game and return
    } catch (err) {
        res.status(500).send(err.message);
    }
})
gameRouter.post("/finish", async (req, res) => {
    try {
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        // create create complete run
    } catch (err) {
        res.status(500).send(err.message);
    }
})
gameRouter.get("/", async (req, res) => {
    try {
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }

        // return game
    } catch (err) {
        res.status(500).send(err.message);
    }
})