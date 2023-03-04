/**
* User class, represents a user
* has a mail, password and username
*/
export default class User {
  constructor(id, email, password, username) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
  }
}