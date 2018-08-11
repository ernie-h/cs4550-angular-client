import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SectionComponent } from './section/section.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { HomePageComponent } from './home-page/home-page.component';
var appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'courses', component: CourseNavigatorComponent },
    { path: 'sections', component: SectionComponent },
    { path: 'enrollment', component: EnrollmentComponent },
    { path: 'home', component: HomePageComponent },
];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map