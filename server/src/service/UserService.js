import { v4 as uuidv4 } from 'uuid';

import User from "../model/User.js";



class UserService {

  constructor() {
    this.users = new Array();
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
    if (this.users.some(user => user.email === email || user.username === username)) return false;
    const id = uuidv4();
    this.users.push(new User(id, email, password, username));
    return true;
  }

  /**
   * findUser, takes the parameters email and password
   * finds the user matching parameters | undefined if a matching user does not exist
   * @param {string} email 
   * @param {string} password 
   * @returns 
   */
  async findUser(email, password) {
    return this.users.find(user => user.email === email && user.password === password);
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