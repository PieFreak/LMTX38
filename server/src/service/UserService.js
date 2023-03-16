import { v4 as uuidv4 } from 'uuid';

import User from "../model/User.js";
import { dbInit } from '../database/database.js';



class UserService {

  /**
  * createUser, takes the parameters username, email and password
  * creates the user and stores it
  * @param {string} email
  * @param {string} password
  * @param {string} username
  * @returns true if new user was created | false if the user with the same email or username already exists 
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
   * findUser, takes the parameters email and password
   * finds the user matching parameters | undefined if a matching user does not exist
   * @param {string} email 
   * @param {string} password 
   * @returns user or undefined if there is no user with matching email and password
   */
  async findUser(email, password) {
    const connection = await dbInit();
    try {
      const [user] = await connection.query(`
        SELECT * 
        FROM user 
        WHERE email = (?) AND password = (?) LIMIT 1;`,
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
   * getUsers takes to parameters and returns all users
   * @returns all stored users
   */
  async getUsers() {
    const connection = await dbInit();
    try {
      const [users] = await connection.query(`
      SELECT *
      FROM user`
      );
    } catch (error) {
      console.error(error);
      return undefined;
    } finally {
      connection.end()
    }
    return users;
  }

  async getFriends(ID) {
    const connection = await dbInit();
    // validate ID
    // Get all friends with user
    try {
      const [friends] = await connection.query(`
      SELECT friend
      FROM friendship
      WHERE user = (?)`,
      [ID]
      );
    } catch (error) {

    }

    return `Here is all the friends of user with ID: ${ID}`
  }

  /**
  * 
  * @param {number} ID 
  * @param {string} new_username 
  * @returns 
  */
  async changeUsername(ID, new_username) {
    const connection = await dbInit();
    // Change username in MySQL
    // Get user
    return `Username for ${ID} changed to ${new_username}`;
  }
}


export function makeUserService() {
  return new UserService();
}