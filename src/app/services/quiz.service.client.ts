import {
  Injectable
} from '@angular/core';
const QUIZ_API_URL = 'http://localhost:3000/api/quiz';
const QUIZ_ID_API_URL = 'http://localhost:3000/api/quiz/QID';
const QUIZ_SUBMISSION_API_URL = 'http://localhost:3000/api/quiz/QID/submission';
const QUIZ_SUBMISSION_ID_API_URL = 'http://localhost:3000/api/quiz/QID/submission/SID';

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

  submitQuiz = (submission) =>
    fetch(QUIZ_SUBMISSION_API_URL.replace('QID', submission.quiz), {
      method: 'post',
      body: JSON.stringify(submission),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(response => response.json())

  findAllSubmissionsForQuiz = (quizId) =>
    fetch(QUIZ_SUBMISSION_API_URL.replace('QID', quizId))
    .then(response => response.json())

  findSubmissionById = (quizId, submissionId) =>
    fetch(QUIZ_SUBMISSION_ID_API_URL.replace('QID', quizId).replace('SID', submissionId))
    .then(response => response.json())

}
