import * as question from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

const start = document.getElementById("start");
const checkAnswer = document.getElementById("continue");
const quit = document.getElementById("quit");

/**
 *
 * @param {Quiz} quiz quiz object
 * @param {UI} ui UI object
 */
export function renderPage(quiz, ui) {
  quit.addEventListener("click", function quitGame() {
    //* evento que registra si el jugador actual se quiere retirar del juego
    ui.showScores(quiz.score);
  });

  if (quiz.isEnded()) {
    //* se valida que aun se puede continuar jugando segun el metodo isEnded
    console.log(quiz.score);
    ui.showScores(quiz.score);
  } else {
    //* Evento que maneja el inicio del juego y el renderizado de todos los elementos al dar click
    start.addEventListener("click", () => {
      start.classList.add("hide");
      checkAnswer.classList.add("show");
      quit.classList.add("show");
      checkAnswer.addEventListener("click", () => {
        // * evento para verificar que el jugador quiere seguir jugando
        ui.showQuestion(quiz.getQuestionIndex().question);
        ui.showCategory(quiz.getQuestionIndex().category);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
          quiz.guess(currentChoice);
          renderPage(quiz, ui);
          quiz.actualRounds++;
        });
        ui.showProgress(quiz.actualRounds, quiz.maxRounds);
      });
    });
  }
}

function game() {
  //* funcion que maneja la cantidad de rondas y elije las preguntas segun el numero de ronda
  let actualRounds = Math.floor(Math.random() * 5);
  if (actualRounds == 1) {
    const easyQuestion = new Quiz(question.easy);
    const uiEasy = new UI();

    return renderPage(easyQuestion, uiEasy);
  } else if (actualRounds == 2 || actualRounds <= 3) {
    const midQuestion = new Quiz(question.mid);
    const uiMid = new UI();

    return renderPage(midQuestion, uiMid);
  } else if (actualRounds == 4 || actualRounds <= 5) {
    const hardQuestion = new Quiz(question.hard);
    const uiHard = new UI();

    return renderPage(hardQuestion, uiHard);
  }
}

game();
