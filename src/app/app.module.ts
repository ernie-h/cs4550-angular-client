import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StyledComponentsModule } from 'angular-styled-components';

import { AppComponent } from './app.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import {CourseServiceClient} from './services/course.service.client';


@NgModule({
  declarations: [
    AppComponent,
    WhiteBoardComponent,
  ],
  imports: [
    BrowserModule,
    StyledComponentsModule,
  ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
