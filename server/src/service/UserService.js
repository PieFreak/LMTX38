import { v4 as uuidv4 } from 'uuid';

import User from "../model/User.js";
import { dbInit } from '../database/database.js';



class UserService {

  constructor() {
  }

  /**
  * createUser, takes the parameters username, email and password
  * creates the user and stores it
  * @param {string} email
  * @param {string} password
  * @param {string} username
  * @returns true if new user was created | false if the user with the same email or username already exists 
  */
  async createUser(email, password, username) {
    const id = uuidv4();
    const connection = await dbInit();

    try {
      await connection.execute(
        'INSERT INTO user (id, email, password, username) VALUES (?, ?, ?, ?)',
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
   * @returns user if the user exist, undefined if it does not
   */
  async findUser(email, password) {
    const connection = await dbInit();
    try {
      const user = await connection.execute(
        "SELECT id, email, password, username FROM user WHERE email = (?) AND password = (?) LIMIT 1;",
        [email, password],
      );
          
      if (!user) {return undefined;}
      return user[0][0];

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
    return this.users;
  }

  async getFriends(ID) {
    // validate ID
    // Get all friends with user

    return `Here is all the friends of user with ID: ${ID}`
  }

  /**
  * 
  * @param {number} ID 
  * @param {string} new_username 
  * @returns 
  */
  async changeUsername(ID, new_username) {
    // Change username in MySQL
    // Get user
    return `Username for ${ID} changed to ${new_username}`;
  }
}


export function makeUserService() {
  return new UserService();
}