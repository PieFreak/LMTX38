
import { v4 as uuidv4 } from 'uuid';
import { dbInit } from '../database/database.js';

class GameService {
    
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
            const result = questions.reduce((result, questionEntry) => {
                result[questionEntry.id] 
            })
            console.log(result);
            return questions;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }

    async newGame(user, questions, answers) {
        
    }
}

export function makeGameService() {
    return new GameService();
}