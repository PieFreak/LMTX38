import express from "express";
import { makeGameService } from "../service/GameService.js";



export const gameRouter = express.Router();

const gameService = makeGameService();

/**
 * POST call for a new game with a list of questions
 */
gameRouter.post("/", async (req, res) => {
    try {
        const { questionType, questionAmount } = req.body;
        if (req.session.user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof (questionType) !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionType should be a string, has type ${typeof questionType}`);
            return;
        }
        if (!["XYZ", "KVA", "NOG", "ORD", "LÄS", "MEK"].includes(questionType)) {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionType has to be one of ["XYZ, KVA, NOG, ORD, LÄS, MEK"]`);
            return;
        }
        if (typeof (questionAmount) !== "number") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questionAmount has type ${typeof questionAmount}`);
            return;
        }
        if (![5, 10, 20, 30, 40].includes(questionAmount)) {
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
/**
 * POST call for creating a new round after it has been played
 */
gameRouter.post("/round", async (req, res) => {
    try {
        const { questions, score } = req.body;
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (!Array.isArray(questions) || !questions.every(q => typeof q === "string")) {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | questions should be a list of strings`);
            return;
        }
        if (typeof score !== "number") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | score should be a number, has type ${typeof score}`);
            return;
        }
        const round = await gameService.saveRound(user.id, questions, score);
        if (round == null) {
            res.status(400).send(`Couldn't save the round, something went wrong!`);
            return;
        }
        res.status(201).send(round);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
/**
 * GET call for getting a round by its ID
 */
gameRouter.get("/round/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof id !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | id should be a string, has type ${typeof id}`);
            return;
        }
        const round = await gameService.getRound(id);
        if (round == null) {
            res.status(400).send(`Could not find a round with id ${id}!`);
            return;
        }
        res.status(200).send(round);
    } catch (error) {
        res.status(500).send(err.message);
    }
})
/**
 * POST call for creating a complete round, when a user has played played an existing round
 */
gameRouter.post("/round/complete", async (req, res) => {
    try {
        const { round, score } = req.body;
        const user = req.session.user;
        if (user == null) {
            res.status(403).send(`Bad POST call to ${req.originalUrl} | access denied`);
            return;
        }
        if (typeof round !== "string") {
            res.status(400).send(`Bad POST call to ${req.originalUrl} | round should be a string, has type ${typeof round}`);
            return;
        }
        const completeRound = await gameService.saveCompleteRound(user.id, round, score);
        if (!completeRound) {
            res.status(400).send(`Couldn't save the complete round, something went wrong!`);
            return;
        }
        res.status(201).send(`New completed round was created`);
    } catch (err) {
        res.status(500).send(err.message);
    }
})