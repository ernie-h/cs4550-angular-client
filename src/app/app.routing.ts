import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionComponent } from './section/section.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizSubmissionsComponent } from './quiz-submissions/quiz-submissions.component';
import { QuizAnswersComponent } from './quiz-answers/quiz-answers.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizComponent },
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent },
  { path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
