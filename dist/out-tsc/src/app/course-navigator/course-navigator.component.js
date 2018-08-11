var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { UserServiceClient } from '../services/user.service.client';
var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(courseService, userService) {
        this.courseService = courseService;
        this.userService = userService;
        this.currentUser = { _id: 0 };
        this.courses = [];
        this.selectedCourse = {
            modules: []
        };
        this.selectedModule = {
            lessons: []
        };
        this.selectedLesson = {
            topics: []
        };
        this.selectedTopic = {
            widgets: []
        };
        this.selectedWidget = {};
        this.otherCourseSelected = false;
    }
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; })
            .then(function () { return _this.userService.currentUser()
            .then(function (user) {
            _this.currentUser = user;
        }); });
    };
    CourseNavigatorComponent.prototype.selectCourse = function (course) {
        this.selectedModule = { lessons: [] };
        this.selectedLesson = { topics: [] };
        this.selectedTopic = { widgets: [] };
        this.selectedWidget = {};
        this.selectedCourse = course;
    };
    CourseNavigatorComponent.prototype.selectModule = function (module) {
        this.selectedLesson = { topics: [] };
        this.selectedTopic = { widgets: [] };
        this.selectedWidget = {};
        this.selectedModule = module;
    };
    CourseNavigatorComponent.prototype.selectLesson = function (lesson) {
        this.selectedTopic = { widgets: [] };
        this.selectedWidget = {};
        this.selectedLesson = lesson;
    };
    CourseNavigatorComponent.prototype.selectTopic = function (topic) {
        this.selectedTopic = topic;
    };
    CourseNavigatorComponent.prototype.selectWidget = function (widget) {
        this.selectedWidget = widget;
    };
    CourseNavigatorComponent.prototype.splitListItems = function (listItems) {
        return listItems.split('\n');
    };
    CourseNavigatorComponent = __decorate([
        Component({
            selector: 'app-course-navigator',
            templateUrl: './course-navigator.component.html',
            styleUrls: ['./course-navigator.component.css']
        }),
        __metadata("design:paramtypes", [CourseServiceClient,
            UserServiceClient])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());
export { CourseNavigatorComponent };
//# sourceMappingURL=course-navigator.component.js.map