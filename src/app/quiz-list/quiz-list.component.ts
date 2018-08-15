import {
  Component,
  OnInit
} from '@angular/core';
import {
  QuizServiceClient
} from '../services/quiz.service.client';
import {
  UserServiceClient
} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes = [];
  currentUserRole = '';
  constructor(private quizService: QuizServiceClient,
    private userService: UserServiceClient) {}

  ngOnInit() {
    this.quizService.findAllQuiz()
      .then(quizzes => this.quizzes = quizzes);
    this.userService.currentUser()
      .then((user) => {
        this.currentUserRole = user.role;
      });
  }

}
