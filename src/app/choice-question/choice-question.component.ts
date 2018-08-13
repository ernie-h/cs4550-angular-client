import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-choice-question',
  templateUrl: './choice-question.component.html',
  styleUrls: ['./choice-question.component.css']
})
export class ChoiceQuestionComponent implements OnInit {
  @Input() question;

  constructor() { }

  selected = choice => {
    this.question.multipleChoiceAnswer = this.question.choices.indexOf(choice);
  }

  ngOnInit() {
  }
}
