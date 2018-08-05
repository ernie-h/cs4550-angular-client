import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionComponent } from './section/section.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'courses', component: CourseNavigatorComponent },
  { path: 'sections', component: SectionComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
