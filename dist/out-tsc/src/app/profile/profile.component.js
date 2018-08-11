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
import { ActivatedRoute } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { Router } from '@angular/router';
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, activatedRoute, userService, sectionService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.sectionService = sectionService;
        this.currentUser = {
            _id: 0,
            email: '',
            role: '',
            username: '',
            password: '',
            password2: '',
            firstName: '',
            lastName: '',
            phone: '',
            dateOfBirth: '',
        };
        this.role = '';
        this.enrollments = [];
        this.isAdmin = false;
        this.unenroll = function (userId, sectionId, seats) {
            _this.sectionService.updateSectionUnenroll(sectionId)
                .then(function () {
                if (userId) {
                    _this.sectionService.unenroll(userId, sectionId)
                        .then(function (status) {
                        if (status === 200) {
                            alert('You have been successfully un-enrolled in the course.');
                        }
                        else {
                            alert('Unable to un-enroll. Contact administrator.');
                        }
                    })
                        .then(function () { return _this.sectionService
                        .findSectionsForStudent(_this.currentUser._id)
                        .then(function (enrollments) { return _this.enrollments = enrollments; }); });
                }
                else {
                    alert('Please login before un-enrolling in a section.');
                }
            });
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['userId'];
            _this.userService.currentUser()
                .then(function (user) {
                _this.currentUser = user;
                _this.role = user.role;
            })
                .then(function () { return _this.sectionService.findSectionsForStudent(_this.currentUser._id)
                .then(function (enrollments) { return _this.enrollments = enrollments; }); });
        });
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProfileComponent.prototype.updateUser = function (currentUserId, username, password, firstName, lastName, phone, dateOfBirth) {
        var _this = this;
        if (username && password && firstName && lastName && phone && dateOfBirth !== null) {
            var newUser = {
                _id: currentUserId,
                email: this.currentUser.email,
                role: this.currentUser.role,
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                dateOfBirth: dateOfBirth,
            };
            this.userService.updateUser(newUser)
                .then(function () { return alert('Succesfully updated user.'); })
                .then(function () { return _this.sectionService.findSectionsForStudent(_this.currentUser._id)
                .then(function (enrollments) { return _this.enrollments = enrollments; }); });
        }
        else {
            alert('Please edit each field. If you want to leave one field the same, type it out again.');
        }
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent = __decorate([
        Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            ActivatedRoute,
            UserServiceClient,
            SectionServiceClient])
    ], ProfileComponent);
    return ProfileComponent;
}());
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map