import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyledComponentsModule } from 'angular-styled-components';

import { AppComponent } from './app.component';
import {CourseServiceClient} from './services/course.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { UserServiceClient } from './services/user.service.client';
import { SectionComponent } from './section/section.component';
import { SectionServiceClient } from './services/section.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { ChoiceQuestionComponent } from './choice-question/choice-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SectionComponent,
    EnrollmentComponent,
    HomePageComponent,
    QuizListComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    ChoiceQuestionComponent,
    FillBlanksQuestionComponent,
    EssayQuestionComponent,
    QuizSubmissionsComponent,
    QuizAnswersComponent,
  ],
  imports: [
    BrowserModule,
    StyledComponentsModule,
    routing,
    FormsModule,
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
