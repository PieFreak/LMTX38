
import { v4 as uuidv4 } from 'uuid';
import { dbInit } from '../database/database.js';

/**
 * @typedef {Object} PrivateUser
 * @property {string} id the unique identifier of the user
 * @property {string} email the email address of the user
 * @property {string} password the password of the user
 * @property {string} username the username of the user
 */

/**
 * @typedef {Object} PublicUser
 * @property {string} id  the unique identifier of the user
 * @property {string} username  the username of the user
 */

/**
 * @typedef {Object} CompletedRound
 * @property {string} opponent the unique identifier of the opponent (a user)
 * @property {number} opponentscore the score of the opponent
 * @property {string} date the date it was created
 */

/**
 * @typedef {Object} Round
 * @property {string} id the unique identifier of the round
 * @property {string} owner the unique identifier of the owner (a user)
 * @property {number} ownerscore the score of the owner
 * @property {string} date the date it was created
 * @property {Array<CompletedRound>} completerounds
 */

/**
 * @typedef {Object} CompleteRound
 * @property {string} id the unique identifier of the round
 * @property {string} owner the unique identifier of the owner (a user)
 * @property {number} ownerscore the score of the owner
 * @property {string} rounddate the date the round was created
 * @property {string} opponent the unique identifier of the opponent (a user)
 * @property {number} opponentscore the score of the opponent
 * @property {string} completerounddate the date the completeround was created
 */

/**
 * @class
 * @classdesc class with helpful functions for manipulating data in the database concerning users
 * 
 * @author Lukas Wigren
 * @author Jakob Ståhl
 * @since 2023-03-23
 */
class UserService {
    
    /**
     * @async
     * @function createUser
     * @param {string} email the email for the new user
     * @param {string} password  the password for the new user
     * @param {string} username  the username for the new user
     * @returns {Promise<boolean>} if a new user was created
     * @description stores a user in the database
     */
    async createUser(email, password, username) {
        const connection = await dbInit();
        const id = uuidv4();
        try {
            await connection.query(`
            INSERT INTO user (id, email, password, username) 
            VALUES (?, ?, ?, ?)`,
            [id, email, password, username]
            );
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            connection.end();
        }
    }
    
    /**
     * @async
     * @function findUser
     * @param {string} email  the email to look for
     * @param {string} password the password to look for
     * @returns {Promise<PrivateUser | undefined>} user with matching parameters
     * @description finds the user matching email and password
     */
    async findUser(email, password) {
        const connection = await dbInit();
        try {
            const [user] = await connection.query(`
            SELECT * 
            FROM user 
            WHERE email = (?) AND password = (?) LIMIT 1`,
            [email, password]
            );
            return user[0];
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end()
        }
    }
    
    /**
     * @async
     * @function getUsers
     * @returns {Promise<Array<PublicUser> | undefined>} all stored users
     * @description gets all registered users
     */
    async getUsers() {
        const connection = await dbInit();
        try {
            const [users] = await connection.query(`
            SELECT id, username
            FROM user`
            );
            return users;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
        
    }

    /**
     * @async
     * @function updateUsername
     * @param {string} ID the ID of the user to update
     * @param {string} new_username the new username
     * @returns {Promise<boolean>} if the username was updated
     * @description updates the username of the user with given ID
     */
    async updateUsername(ID, new_username) {
        const connection = await dbInit();
        try {
            const [response] = await connection.query(`
            UPDATE user SET username = (?)
            WHERE id = (?)`,
            [new_username, ID]
            );
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            connection.end();
        }
    }

    /**
     * @async
     * @function addFriend
     * @param {string} userID the ID of the user
     * @param {string} friendID the ID of the friend
     * @returns {Promise<boolean>} if the friendship was created
     * @description adds a friend to a users friendlist
     */
    async addFriend(userID, friendID) {
        const connection = await dbInit();
        try {
            await connection.query(`
            INSERT INTO friendship (user, friend)
            VALUES (?, ?)`,
            [userID, friendID]
            );
            return true;
        } catch (error) {
            console.error(error);
            return false;
        } finally {
            connection.end();
        }
    }
    
    /**
     * @async
     * @function getFriends
     * @param {string} user the ID of the user
     * @returns {Promise<Array<string> | undefined>} list of friends
     * @description gets a list of IDs of friends from the given user
     */
    async getFriends(user) {
        const connection = await dbInit();
        try {
            const [friends] = await connection.query(`
            SELECT friend
            FROM friendship
            WHERE user = (?)`,
            [user]
            );
            return friends;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }
    /**
     * @async
     * @function getRounds
     * @param {string} user the ID of the user
     * @returns {Promise<Array<Round> | undefined>} list of rounds that the user has made
     * @description gets the rounds created by user with given ID
     */
    async getRounds(user) {
        const connection = await dbInit();
        try {
            const [rounds] = await connection.query(`
            SELECT r.id, r.owner, r.ownerscore, r.date, JSON_ARRAYAGG(JSON_OBJECT('opponent', cr.opponent, 'opponentscore', cr.opponentscore, 'date', cr.date)) completerounds
            FROM (
                SELECT *
                FROM round 
                WHERE owner = (?)
            ) r
            JOIN completeround cr ON r.id = cr.round
            GROUP BY r.id`,
            [user]
            );
            return rounds;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }

    /**
     * @async
     * @function getCompleteRounds
     * @param {string} user the ID of the user
     * @returns {Promise<Array<CompleteRound> | undefined>} list of completed rounds that the user has done
     * @description gets the completed rounds created by user with given ID
     */
    async getCompleteRounds(user) {
        const connection = await dbInit();
        try {
            const [completedrounds] = await connection.query(`
            SELECT r.id, r.owner, r.ownerscore, r.date rounddate, cr.opponent, cr.opponentscore, cr.date completerounddate
            FROM round r
            JOIN (
                SELECT *
                FROM completeround
                WHERE opponent = (?)
            ) cr ON r.id = cr.round`,
            [user]
            );
            return completedrounds;
        } catch (error) {
            console.error(error);
            return undefined;
        } finally {
            connection.end();
        }
    }
}

/**
 * @function makeUserService
 * @returns {UserService} the UserService class
 * @description used to make a UserService class
 */
export function makeUserService() {
    return new UserService();
}