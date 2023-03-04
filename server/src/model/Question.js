/**
* Question class, represents a question
* has an ID, question, answer and type
*/
export default class Question {
  constructor(ID, question, answer, type) {
    this.ID = ID;
    this.question = question;
    this.answer = answer;
    this.type = type;
  }
}