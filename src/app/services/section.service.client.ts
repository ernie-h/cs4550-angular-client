import { Injectable } from '@angular/core';

const COURSE_API_URL = "http://localhost:3000/api/course";
const SECTION_ID_API_URL = "http://localhost:3000/api/section/SID";
const COURSE_ID_SECTION_API_URL = "http://localhost:3000/api/course/CID/section";
@Injectable()
export class SectionServiceClient {

  enroll = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'PUT',
      credentials: 'include'
    })

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
    fetch(SECTION_ID_API_URL.replace('SID', sectionId), {
      method: 'delete'
    })
    .then(response => response.status)

}
