//* clase que renderizara los nuevos elementos correspondientes para la interfaz

export class UI {
  constructor() {}

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  showCategory(category) {
    const questionCategory = document.getElementById("category");
    questionCategory.innerText = `Category: ${category}`;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }
  /**
   *
   * @param {number} score total score
   */

  showScores(score) {
    const quizEnd = `
            <h1>Result</h1>
            <h2>Your Score: ${score}</h2>
            <button id="button" class="button" value="Restart">Restart</button>
        `;
    const element = document.getElementById("quiz");
    element.innerHTML = quizEnd;

    const restart = document.getElementById("button");
    restart.addEventListener("click", () => {
      location.reload();
    });
  }

  showPoints(value) {
    const points = document.getElementById("player-score");
    points.innerHTML = `Your score: ${value}`;
  }
  /**
   *
   * @param {number} currentIndex acutal question index
   * @param {number} total total questions
   */
  showProgress(currentIndex, total) {
    const element = document.getElementById("progress");
    element.innerHTML = `Round ${currentIndex} of ${total}`;
  }
}
