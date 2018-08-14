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
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {
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
        this.quizService.findAllSubmissionsForQuiz(this.quizId)
        .then(submissions => this.submissions = submissions);
        this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz);
      });
    }
  }
