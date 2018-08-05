import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client'

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {
  courses = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedTopic = {};
  selectedWidget = {};
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then((courses) => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectModule(module) {
    this.selectedModule = module;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }
}
