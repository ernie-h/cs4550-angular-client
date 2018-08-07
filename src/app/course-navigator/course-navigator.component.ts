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
  selectedLesson = {

  };
  selectedTopic = {

  };
  selectedWidget = {};
  otherCourseSelected = false;
  constructor(private courseService: CourseServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then((courses) => this.courses = courses);
  }

  selectCourse(course) {
    this.selectedModule=  {};
    this.selectedLesson = {title: ''};
    this.selectedTopic = {title: ''};
    this.selectedCourse = course;
  }

  selectModule(module) {
    this.selectedLesson = {};
    this.selectedTopic = {};
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
