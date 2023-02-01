/**
 * User class, represents a user
 * has a mail, password and username
 */
export class User {
    constructor(mail, password, username) {
        this.mail = mail;
        this.password = password;
        this.username = username;
    }
    getMail() {
        return this.mail;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
        return this.password;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
        return this.username;
    }
}