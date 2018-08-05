import {Injectable} from '@angular/core';

const COURSE_API_URL = "http://localhost:3000/api/course";
const COURSE_ID_API_URL = "http://localhost:3000/api/course/CID";
const COURSE_ID_SECTION_API_URL = "http://localhost:3000/api/course/CID/section";
@Injectable()
export class SectionServiceClient {

  enroll = sectionId =>
    fetch('http://localhost:3000/api/section/' + sectionId + '/enroll', {
      method: 'put',
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
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(section)
    })
      .then(response => response.json())
}
