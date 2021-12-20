import { Questions } from "../models/Questions.js";

import { data } from "./data.js";

//* se mapearon las preguntas del archivo data y se crearon objetos 'Question' nuevos
export const questions = data.map(
  (question) =>
    new Questions(
      question.category,
      question.dificulty,
      question.question,
      question.choices,
      question.answer
    )
);

//* se filtran las preguntas por la propiedad dificltad
export const easy = questions.filter(
  (question) => question.dificulty == "Easy"
);
export const mid = questions.filter((question) => question.dificulty == "Mid");
export const hard = questions.filter(
  (question) => question.dificulty == "Hard"
);

const questionGroup = [];

questionGroup.push(easy, mid, hard);
export const filteredQuestions = questionGroup;

console.log(filteredQuestions);
// console.log(easy);
// console.log(mid);
// console.log(hard);

// console.log(scienceCategory);
// console.log(geometryCategory);
// console.log(geographyCategory);
// console.log(cultureCategory);
// console.log(historyCategory);

// export const hardDificulty = questions.filter(question => question.dificulty == 'Hard');
// export const midDificulty = questions.filter(question => question.dificulty == 'Mid');
// export const easyDificulty = questions.filter(question => question.dificulty == 'Easy');

// console.log(hardDificulty);

// console.log(hardDificulty);
// console.log(midDificulty);
// console.log(easyDificulty);
