/**
* CompleteRound class, represents a round of gameplay, after an opponent has played
* extends Round and has opponent and opponentScore
*/
export default class CompleteRound extends Round {
  constructor(opponent, opponentScore) {
    this.opponent = opponent;
    this.opponentScore = opponentScore;
  }
}