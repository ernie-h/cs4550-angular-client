var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var COURSE_API_URL = "https://eh-node-server.herokuapp.com/api/course";
var COURSE_ID_SECTION_API_URL = "https://eh-node-server.herokuapp.com/api/course/CID/section";
var SECTION_ID_API_URL = "https://eh-node-server.herokuapp.com/api/section/KID";
var SECTION_URL = "https://eh-node-server.herokuapp.com/api/section";
var STUDENT_SECTION_ID_API_URL = "https://eh-node-server.herokuapp.com/api/student/SID/section/KID";
var STUDENT_SECTION_API_URL = "https://eh-node-server.herokuapp.com/api/student/SID/section";
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.enroll = function (userId, sectionId) {
            return fetch(STUDENT_SECTION_ID_API_URL.replace('SID', userId).replace('KID', sectionId), {
                method: 'POST',
                credentials: 'include'
            })
                .then(function (response) { return response.status; });
        };
        this.unenroll = function (userId, sectionId) {
            return fetch(STUDENT_SECTION_ID_API_URL.replace('SID', userId).replace('KID', sectionId), {
                method: 'DELETE',
                credentials: 'include'
            })
                .then(function (response) { return response.status; });
        };
        this.updateSectionEnroll = function (sectionId) {
            return fetch(SECTION_ID_API_URL.replace('KID', sectionId), {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(function (response) { return response.status; });
        };
        this.updateSectionUnenroll = function (sectionId) {
            return fetch(SECTION_ID_API_URL.replace('KID', sectionId) + '/unenroll', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                }
            });
        };
        this.findSectionsForStudent = function (userId) {
            return fetch(STUDENT_SECTION_API_URL.replace('SID', userId), {
                credentials: 'include'
            })
                .then(function (response) { return response.json(); });
        };
        this.findAllSections = function () {
            return fetch(SECTION_URL)
                .then(function (response) { return response.json(); });
        };
        this.findSectionsForCourse = function (courseId) {
            return fetch(COURSE_ID_SECTION_API_URL.replace('CID', courseId))
                .then(function (response) { return response.json(); });
        };
        this.createSection = function (section) {
            return fetch(SECTION_URL, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(section)
            })
                .then(function (response) { return response.json(); });
        };
        this.deleteSection = function (sectionId) {
            return fetch(SECTION_ID_API_URL.replace('KID', sectionId), {
                method: 'DELETE'
            })
                .then(function (response) { return response.status; });
        };
    }
    SectionServiceClient = __decorate([
        Injectable()
    ], SectionServiceClient);
    return SectionServiceClient;
}());
export { SectionServiceClient };
//# sourceMappingURL=section.service.client.js.map