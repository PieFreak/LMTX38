/**
* Round class, represents a round of gameplay, before an opponent has played
* has an code, user, userScore, questions, expireDate
*/
export default class Round {
  constructor(code, user, userScore, questions) {
    this.code = code;
    this.user = user;
    this.userScore = userScore;
    this.questions = questions;
    this.date = new Date();
  }
}