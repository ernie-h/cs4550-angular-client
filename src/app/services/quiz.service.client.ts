import { Injectable } from "@angular/core";
const QUIZ_API_URL = 'http://localhost:3000/api/quiz'
const QUIZ_ID_API_URL = 'http://localhost:3000/api/quiz/QID'


@Injectable()
export class QuizServiceClient {
  createQuiz() {
    return fetch(QUIZ_API_URL)
      .then(response => response.json());
  }

  findAllQuiz() {
    return fetch(QUIZ_API_URL)
      .then(response => response.json());
  }

  findQuizById(quizid) {
    return fetch(QUIZ_ID_API_URL.replace('QID', quizid))
      .then(response => response.json());
  }
}
