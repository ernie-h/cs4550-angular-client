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
import { SectionServiceClient } from "../services/section.service.client";
var SectionComponent = /** @class */ (function () {
    function SectionComponent(sectionService, courseService) {
        var _this = this;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.courses = [];
        this.sections = [];
        this.selectedCourse = {
            id: 0,
            title: ''
        };
        this.section = {
            title: '',
            seats: 24
        };
        this.selectCourse = function (course) {
            _this.selectedCourse = course;
            _this.sectionService
                .findSectionsForCourse(course.id)
                .then(function (sections) { return _this.sections = sections; });
        };
        this.addSection = function (section) {
            section.courseId = _this.selectedCourse.id;
            if (section.courseId && section.title && section.seats !== undefined) {
                _this.sectionService.createSection(section)
                    .then(function () {
                    return _this.sectionService
                        .findSectionsForCourse(_this.selectedCourse.id);
                })
                    .then(function (sections) { return _this.sections = sections; });
            }
            else {
                alert('Please fill in all fields');
            }
        };
        this.deleteSection = function (sectionId) {
            _this.sectionService.deleteSection(sectionId)
                .then(function (status) {
                if (status === 200) {
                    return _this.sectionService.findSectionsForCourse(_this.selectedCourse.id)
                        .then(function (sections) { return _this.sections = sections; });
                }
                else {
                    alert('Unable to delete');
                }
            });
        };
    }
    SectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
    };
    SectionComponent = __decorate([
        Component({
            selector: 'app-section',
            templateUrl: './section.component.html',
            styleUrls: ['./section.component.css']
        }),
        __metadata("design:paramtypes", [SectionServiceClient,
            CourseServiceClient])
    ], SectionComponent);
    return SectionComponent;
}());
export { SectionComponent };
//# sourceMappingURL=section.component.js.map