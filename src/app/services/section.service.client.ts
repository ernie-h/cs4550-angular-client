import { Injectable } from '@angular/core';

const COURSE_API_URL = "http://localhost:3000/api/course";
const COURSE_ID_SECTION_API_URL = "http://localhost:3000/api/course/CID/section";
const SECTION_ID_API_URL = "http://localhost:3000/api/section/KID";
const STUDENT_SECTION_ID_API_URL = "http://localhost:3000/api/student/SID/section/KID";
const STUDENT_SECTION_API_URL = "http://localhost:3000/api/student/SID/section";


@Injectable()
export class SectionServiceClient {

  enroll = (userId, sectionId) =>
    fetch(STUDENT_SECTION_ID_API_URL.replace('SID', userId).replace('KID', sectionId), {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => response.status)

  findAllSections = () =>
    fetch('http://localhost:3000/api/section')
      .then(response => response.json())

  findSectionsForCourse = (courseId) =>
    fetch(COURSE_ID_SECTION_API_URL.replace('CID', courseId))
      .then(response => response.json())

  createSection = section =>
    fetch('http://localhost:3000/api/section', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())

  deleteSection = (sectionId) =>
    fetch(SECTION_ID_API_URL.replace('KID', sectionId), {
      method: 'DELETE'
    })
      .then(response => response.status)

  updateSectionEnroll = (sectionId) =>
    fetch(SECTION_ID_API_URL.replace('KID', sectionId), {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.status)

  findSectionsForStudent = (userId) =>
    fetch(STUDENT_SECTION_API_URL.replace('SID', userId), {
      credentials: 'include'
    })
      .then(response => response.json());


}
