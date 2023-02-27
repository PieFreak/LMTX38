/**
* User class, represents a user
* has a mail, password and username
*/
export class User {
  constructor(email, password, username) {
    this.email = email;
    this.password = password;
    this.username = username;
  }
}