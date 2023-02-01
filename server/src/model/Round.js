/**
 * Round class, represents a round of gameplay, before an opponent has played
 * has an code, user, userScore, questions, expireDate
 */
export class Round {
    constructor(code, user, userScore, questions) {
        this.code = code;
        this.user = user;
        this.userScore = userScore;
        this.questions = questions;
        this.date = new Date();
    }
    getCode() {
        return this.code;
    }
    getUser() {
        return this.user;
    }
    getUserScore() {
        return this.userScore;
    }
    getQuestions() {
        return this.questions;
    }
    getDate() {
        return this.date;
    }
}