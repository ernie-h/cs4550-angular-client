import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '../../../node_modules/@angular/router';
import {
  QuizServiceClient
} from '../services/quiz.service.client';
import {
  UserServiceClient
} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {
  quizId = -1;
  quiz = {};
  submissions = [];
  subscription;
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizServiceClient,
    private userService: UserServiceClient) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz);
      this.quizService.findAllSubmissionsForQuiz(this.quizId)
        .then(submissions => this.submissions = submissions);
    });
  }

  fillBlanksString = (fillBlanksAnswers) => {

   return fillBlanksAnswers
     .replace(/var/g, 'Blank Answer ')
     .replace(/["']/g, '')
     .replace('{', '')
     .replace('}', '')
     .split(',');
  }
}
