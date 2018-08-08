import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  courses = [];
  currentUser = { _id: 0 }
  constructor(
    private courseService: CourseServiceClient,
    private userService: UserServiceClient,
    private router: Router) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then((courses) => this.courses = courses);
    this.userService.currentUser()
      .then((user) => {
        this.currentUser = user;
      })
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['login']));
  }
}
