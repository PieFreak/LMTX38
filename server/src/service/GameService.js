
import { v4 as uuidv4 } from 'uuid';
import { dbInit } from '../database/database.js';

/**
 * @typedef {Object} Answer
 * @property {string} answer the answer
 * @property {boolean} correct if correct
 */

/**
 * @typedef {Object} Question
 * @property {string} id the unique identifier of the question
 * @property {string} question the question
 * @property {string} type the type of the question
 * @property {Array<Answer>} answers the answers to the question
 */

/**
 * @typedef {Object} Round
 * @property {string} id the unique identifier of the round
 * @property {string} owner the unique identifier of the owner (a user)
 * @property {string} ownerscore the score of the owner
 * @property {string} date the date it was created
 * @property {Array<string>} questions list of the questions associated with the round
 */

/**
 * @class
 * @classdesc class with helpful functions for manipulating data in the database concerning games
 * 
 * @author Lukas Wigren
 * @author Jakob Ståhl
 * @since 2023-03-23
 */
class GameService {

    /**
     * @async
     * @function initiateGame
     * @param {string} questionType what question type to get
     * @param {number} questionAmount the amount of questions to get
     * @returns {Promise<Array<Question> | undefined} the questions, undefined if an error occurs
     * @description initiates a game by getting amount of questionso of a certain type
     */
    async initiateGame(questionType, questionAmount) {
        const connection = await dbInit();
        try {
            const [questions] = await connection.query(`
            SELECT q.id, q.question, q.type, JSON_ARRAYAGG(JSON_OBJECT('answer',a.answer,'correct', a.correct)) answer
            FROM (
                SELECT *
                FROM question
                WHERE type = (?)
                ORDER BY RAND()
                LIMIT ?
            ) q
            JOIN answer a ON q.id = a.question
            GROUP BY q.id, q.question, q.type`,

                [questionType, questionAmount]
            );
            return questions;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }

    /**
     * @async
     * @function saveRound
     * @param {string} user the ID of the user 
     * @param {Array<string>} questions array of question IDs
     * @param {number} score the score the user got when answering the questions
     * @returns {Promise<string>} id of the new round, undefined if an error occurs
     * @description saves a round in the database
     */
    async saveRound(user, questions, score) {
        const connection = await dbInit();
        const id = uuidv4();
        try {
            await connection.query(`
            INSERT INTO round (id, user, score, date)
            VALUES (?, ?, ?, NOW())`,
                [id, user, score]
            );
            for (const question of questions) {
                await connection.query(`
                INSERT INTO roundquestion (roundid, questionid)
                VALUES (?, ?)`,
                    [id, question]
                );
            }
            return id;
        } catch (error) {
            console.error(error)
            return undefined;
        } finally {
            connection.end();
        }
    }

    /**
     * @async
     * @function getRound
     * @param {string} id the ID of the round
     * @returns {Promise<Round | undefined>}
     * @description gets a round by its ID from the database
     */
    async getRound(id) {
        const connection = await dbInit();
        try {
            const [round] = await connection.query(`
            SELECT r.id, r.user, r.score, r.date, JSON_ARRAYAGG(rq.questionid) AS questionIds
            FROM (
                SELECT *
                FROM round
                WHERE id = (?)
                LIMIT 1
            ) r
            JOIN roundquestion rq ON r.id = rq.roundid
            GROUP BY r.id`,
                [id]
            );

            // Fetch the details for each question in the round
            const questions = [];
            for (const questionId of round[0].questionIds) {
                const [question] = await connection.query(`
                SELECT q.id, q.question, q.type, JSON_ARRAYAGG(JSON_OBJECT('answer',a.answer,'correct', a.correct)) answer
                FROM question q
                JOIN answer a ON q.id = a.question
                WHERE q.id = (?)
                GROUP BY q.id, q.question, q.type`,
                    [questionId]
                );
                questions.push(question[0]);
            }

            // Replace the 'questionIds' field with the fetched question details
            round[0].questions = questions;

            return round[0];
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }


    async saveRoundChallenge(user, questions, roundID, score) {
        const connection = await dbInit();
        try {
            await connection.query(`
            INSERT INTO roundchallenge (id, opponent, opponentscore, date)
            VALUES (?, ?, ?, NOW())`,
                [roundID, user, score]
            );
            return roundID;
        } catch (error) {
            console.error(error)
            return undefined;
        } finally {
            connection.end();
        }
    }
}

/**
 * @function makeGameService
 * @returns {GameService} the GameService class
 * @description used to make a GameService class
 */
export function makeGameService() {
    return new GameService();
}