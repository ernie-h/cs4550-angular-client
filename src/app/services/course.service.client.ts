import { Injectable } from "@angular/core";
const COURSE_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course'
const COURSE_ID_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course/CID'
const COURSE_MODULE_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course/CID/module'

@Injectable()
export class CourseServiceClient {
  findAllCourses() {
    return fetch
      (COURSE_API_URL)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch
      (COURSE_MODULE_API_URL.replace('CID', courseId))
      .then(response => response.json());
  }
}
