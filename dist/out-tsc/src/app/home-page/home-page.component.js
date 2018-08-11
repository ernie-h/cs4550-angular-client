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
import { Router } from '@angular/router';
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(courseService, userService, router) {
        this.courseService = courseService;
        this.userService = userService;
        this.router = router;
        this.courses = [];
        this.currentUser = { _id: 0 };
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseService.findAllCourses()
            .then(function (courses) { return _this.courses = courses; });
        this.userService.currentUser()
            .then(function (user) {
            _this.currentUser = user;
        });
    };
    HomePageComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    HomePageComponent = __decorate([
        Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        __metadata("design:paramtypes", [CourseServiceClient,
            UserServiceClient,
            Router])
    ], HomePageComponent);
    return HomePageComponent;
}());
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map