import { User } from "../model/User.js";

const users = [{mail : "some mail", password : "some password", username : "some username"}]


/**
 * Creates a user when correct parameters are given and returns true, 
 * if bad parameters it returns false 
 * @param {*} mail 
 * @param {*} password 
 * @param {*} username 
 */
export function createUser(mail, password, username) {
    const newUser = new User(mail, password, username);
    users.push(newUser);
    return newUser;
}

export function changeUsername(mail, newUsername) {
    users.map(user => {
        if (mail === this.mail) {
            this.username = newUsername;
            return user;
        }
    })
    return null;
}

export function getUsers() {
    return users;
}