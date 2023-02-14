import express from "express";
import { makeQuestionService } from "../service/QuestionService.js";

export const questionRouter = express.Router();

const questionService = makeQuestionService();

/**
 * Get call for all questions in the database
 */
questionRouter.get("/all", async (req, res) => {
    try {
        const questions = await questionService.getQuestions();
        res.status(200).send(questions);
    } catch (err) {
        res.status(500).send(err.message);
    }
})
/**
 * Get call for certain amount of questions in the database
 */
questionRouter.get("/:amount", async (req, res) => {
    try {
        const valid_amount = parseInt(req.params.amount);
        if (!Number.isInteger(valid_amount)) {
            res.status(400).send(`Bad GET request to ${req.originalUrl} --- not a valid number`);
            return;
        }
        const questions = await questionService.getQuestions(valid_amount);
        res.status(200).send(questions);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

