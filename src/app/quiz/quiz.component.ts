import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = {};
  quizId = 0;
  subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService : QuizServiceClient) { }

    submitQuiz(quiz){
      console.log(quiz);
    }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.quizId = params['quizId'];
      this.quizService.findQuizById(this.quizId)
      .then((quiz) => this.quiz = quiz)
    })
  }

}
