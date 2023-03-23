
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
            SELECT q.id, q.question, q.type, JSON_ARRAYAGG(JSON_OBJECT('answer',qa.answer,'correct', qa.correct)) answers
            FROM (
                SELECT *
                FROM question
                WHERE type = (?)
                ORDER BY RAND()
                LIMIT ?
            ) q
            JOIN questionanswer qa ON q.id = qa.question
            GROUP BY id, question, type`,
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
     * @returns {Promise<boolean>} if the new round was created
     * @description saves a round in the database
     */
    async saveRound(user, questions, score) {
        const connection = await dbInit();
        const id = uuidv4();
        try {
            await connection.query(`
            INSERT INTO round (id, owner, ownerscore, date)
            VALUES (?, ?, ?, NOW())`,
            [id, user, score]
            );
            questions.forEach(async (question) => {
                await connection.query(`
                INSERT INTO roundquestion (roundid, questionid)
                VALUES (?, ?)`,
                [id, question]
                );
            })
            return true;
        } catch (error) {
            console.error(error)
            return false
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
            SELECT r.id, r.owner, r.ownerscore, r.date, JSON_ARRAYAGG(rq.roundquestion) AS questions
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
            return round[0];
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }

    /**
     * @async
     * @function saveCompletedRound
     * @param {string} user the ID of user completing the round
     * @param {string} round the ID of the round being completed
     * @param {number} score the score of the user got when answering the questions in the round
     * @returns {Promise<boolean>} if the new completed round was created
     * @description saves a completed round in the database
     */
    async saveCompleteRound(user, round, score) {
        const connection = await dbInit();
        try {
            await connection.query(`
            INSERT INTO completeround (round, opponent, opponentscore, date)
            VALUES (?, ?, ?, NOW())`,
            [round, user, score]
            );
            return true;
        } catch (error) {
            console.error(error);
            return false;
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