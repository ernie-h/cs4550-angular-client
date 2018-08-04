import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyledComponentsModule } from 'angular-styled-components';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { UserServiceClient } from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
