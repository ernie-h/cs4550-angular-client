import {
  Component,
  OnInit
} from '@angular/core';
import {
  QuizServiceClient
} from '../services/quiz.service.client';
import {
  Router
} from '@angular/router';
import {
  ActivatedRoute
} from '@angular/router';
import {
  UserServiceClient
} from '../services/user.service.client';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = {};
  quizId = 0;
  answers = [];
  subscription;
  currentUserId: -1;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizServiceClient,
    private userService: UserServiceClient
  ) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.quizService.findQuizById(this.quizId)
      .then((quiz) => this.quiz = quiz);
    });
    this.userService.currentUser()
    .then((user) => {
      if (user._id) {
        this.currentUserId = user._id;
      } else {
        alert('You are not logged in. Please log in before taking a quiz');
        this.router.navigate(['login']);
      }
    });
  }

  submitQuiz(quiz) {
    quiz.questions.map(question => {
      if (question.essayAnswer) {
        this.answers.push({
          essayAnswer: question.essayAnswer,
          questionId: question._id
        });
      } else if (question.multipleChoiceAnswer) {
        this.answers.push({
          multipleChoiceAnswer: question.multipleChoiceAnswer,
          questionId: question._id
        });
      } else if (question.trueFalseAnswer) {
        this.answers.push({
          trueFalseAnswer: question.trueFalseAnswer,
          questionId: question._id
        });
      } else if (!isEmpty(question.fillBlanksAnswers)) {
        this.answers.push({
          fillBlanksAnswers: question.fillBlanksAnswers,
          questionId: question._id
        });
      }
    });
    if (quiz.questions.length === this.answers.length) {
      if (this.currentUserId !== undefined) {
        const submission = {
          student: this.currentUserId,
          quiz: quiz._id,
          answers: this.answers,
          timestamp: Date.now()
        };
        console.log(submission)
        this.quizService.submitQuiz(submission);
        this.answers = [];
        alert('Submission received!');
        this.router.navigate(['quizzes']);

      } else {
        alert('Please login before taking this quiz.');
        this.router.navigate(['login']);
      }
    } else {
      alert('Please fill in ALL FIELDS before submitting.');
      this.answers = [];
    }
  }
}
const isEmpty = (obj) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
