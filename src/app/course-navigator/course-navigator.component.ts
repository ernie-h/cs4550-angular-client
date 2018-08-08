import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client'
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  currentUser = { _id: 0 };
  courses = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedTopic = {};
  selectedWidget = {};
  otherCourseSelected = false;
  constructor(
    private courseService: CourseServiceClient,
    private userService: UserServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then((courses) => this.courses = courses)
      .then(() => this.userService.currentUser()
        .then((user) => {
          this.currentUser = user
        }))
  }

  selectCourse(course) {
    this.selectedModule = {};
    this.selectedLesson = {};
    this.selectedTopic = {};
    this.selectedWidget = {};
    this.selectedCourse = course;
  }

  selectModule(module) {
    this.selectedLesson = {};
    this.selectedTopic = {};
    this.selectedWidget = {};
    this.selectedModule = module;
  }

  selectLesson(lesson) {
    this.selectedTopic = {};
    this.selectedWidget = {};
    this.selectedLesson = lesson;
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
  splitListItems(listItems: String) {
    return listItems.split('\n');
  }
}
