import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { SectionServiceClient } from "../services/section.service.client";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  courses = []
  sections = []
  selectedCourse = {
    id: 0,
    title: ''
  }
  section = {
    title: '',
    seats: 24
  }

  constructor(private sectionService: SectionServiceClient,
    private courseService: CourseServiceClient) { }

  selectCourse = course => {
    this.selectedCourse = course;
    this.sectionService
      .findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
  }

  addSection = section => {
    section.courseId = this.selectedCourse.id;
    if(section.courseId && section.title && section.seats !== undefined){
      this.sectionService.createSection(section)
      .then(() => {
        return this.sectionService
          .findSectionsForCourse(this.selectedCourse.id);
      })
      .then(sections => this.sections = sections);
    }
    else{
      alert('Please fill in all fields')
    }
  }

  deleteSection = (sectionId) => {
    this.sectionService.deleteSection(sectionId)
      .then((status) => {
        if (status === 200) {
          return this.sectionService.findSectionsForCourse(this.selectedCourse.id)
            .then((sections) => this.sections = sections)
        }
        else {
          alert('Unable to delete')
        }
      })
  }


  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
