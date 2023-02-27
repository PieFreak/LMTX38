import { v4 as uuidv4 } from 'uuid';

import User from "../model/User.js";



class UserService {

  constructor() {
    this.users = [];
  }

  /**
  * createUser, takes the parameters username, email and password
  * adds the user to the database and returns it once its made
  * @param {string} username 
  * @param {string} email
  * @param {string} password
  * @returns The new user that was created | undefined if the user with the same email or username already exists 
  */
  async createUser(email, username, password) {
    if (this.users.includes(user => user.email === email || user.username === username)) return undefined;
    this.users.push(new User(email, username, password));
  }
  /**
  * getUser takes a username and finds the corresponding user, undefined if there is no user with matching username
  * @param {string} username
  * @returns stored user with given username | undefined if there is no user with matching username
  */
  async getUser(username) {
    return this.users.find(user => user.username === username);
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