var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
var COURSE_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course';
var COURSE_ID_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course/CID';
var COURSE_MODULE_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/course/CID/module';
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(COURSE_API_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findAllModulesForCourse = function (courseId) {
        return fetch(COURSE_MODULE_API_URL.replace('CID', courseId))
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient = __decorate([
        Injectable()
    ], CourseServiceClient);
    return CourseServiceClient;
}());
export { CourseServiceClient };
//# sourceMappingURL=course.service.client.js.map