export class Questions {
  /**
   *
   * @param {string} question this is the text of the question
   * @param {string[]} choices text that contain the choices
   * @param {string} answer answer of the question
   */
  constructor(category, dificulty, question, choices, answer) {
    this.category = category;
    this.dificulty = dificulty;
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice any choice
   * @returns {boolean} true or false depending of the answer
   */

  correctAnswer(choice) {
    return choice === this.answer;
  }
}
