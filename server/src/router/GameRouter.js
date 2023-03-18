import express from "express";
import { makeGameService } from "../service/GameService.js";



export const gameRouter = express.Router();

const gameService = makeGameService();

gameRouter.get("/initial", async (req, res) => {
    try {
        const {questionType, questionAmount} = req.body;
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof(questionType) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionType has type ${typeof(questionType)}`);
            return;
        }
        if (typeof(questionAmount) !== "number") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionAmount has type ${typeof(questionAmount)}`);
            return;
        }
        if (!["XYZ, KVA, NOG, ORD, LÄS, MEK"].includes(questionType)) {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionType has to be one of ["XYZ, KVA, NOG, ORD, LÄS, MEK"]`);
            return;
        }
        if (![5,10,20,30,40].includes(questionAmount)) {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionAmount has to be one of [5,10,20,30,40]`);
            return;
        }
        const initiatedGame = await gameService.initiateGame(questionType, questionAmount);
        if (initiatedGame == null) {
            res.status(400).send(`questions came back as undefined, no question of that type: ${questionType}`);
            return;
        }
        res.status(200).send(initiatedGame);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
gameRouter.post("/", async (req, res) => {
    try {
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        // create first "complete" run
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