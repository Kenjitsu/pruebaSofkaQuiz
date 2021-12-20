import { Questions } from "./Questions.js";
import * as question from "../data/questions.js";
import { UI } from "./UI.js";
export class Quiz {
  questionIndex = 0;
  score = 100;
  actualRounds = 1;
  maxRounds = 5;

  /**
   *
   * @param {Questions[]} questions
   */

  constructor(questions) {
    this.questions = questions;
    this.questionIndex = Math.floor(Math.random() * this.questions.length);
  }
  getQuestion() {
    //* se obtendra una pregunta de un array dependiendo del numero de la ronda
    this.questions = question.filteredQuestions;
    if (this.actualRounds == 1) {
      console.log(question.filteredQuestions[0]);
      return question.filteredQuestions[0];
    } else if (this.actualRounds == 2 && this.actualRounds <= 3) {
      return question.filteredQuestions[1];
    } else {
      return question.filteredQuestions[2];
    }
  }

  getQuestionIndex() {
    //* se obtiene el indice de la pregunta actual
    let index = this.questionIndex;
    console.log(this.getQuestion()[index]);
    const actualIndex = this.getQuestion()[index];
    console.log(index);
    return actualIndex;
  }

  getCategoryOfIndex() {
    return this.index.category;
  }
  wrongGuess(lose) {
    lose = new UI();
    lose.showScores(this.score);
    const element = document.createElement("span");
    element.innerHTML = "You Lose";
  }
  /**
   *
   * @param {string} answer choiced answer
   */
  guess(answer) {
    console.log(answer);
    // * se valida que la respuesta coincida con la que tiene la pregunta actual, de ser asi se renderizan mas preguntas si no se termina el juego
    if (this.getQuestionIndex().correctAnswer(answer)) {
      const ui = new UI();
      this.getQuestion();
      this.questionIndex += Math.floor(Math.random() * this.questions.length);
      ui.showPoints((this.score *= 3));
    } else {
      this.wrongGuess();
    }
  }
  isEnded() {
    //* se termina el juego cuando se alcance el numero maximo de rondas
    return this.actualRounds === this.maxRounds;
  }
}
