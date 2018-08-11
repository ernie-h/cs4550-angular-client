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
import { SectionServiceClient } from "../services/section.service.client";
import { UserServiceClient } from '../services/user.service.client';
var EnrollmentComponent = /** @class */ (function () {
    function EnrollmentComponent(sectionService, userService) {
        var _this = this;
        this.sectionService = sectionService;
        this.userService = userService;
        this.sections = [];
        this.currentUser = { _id: 0 };
        this.enroll = function (userId, sectionId, seats) {
            if (seats > 0) {
                _this.sectionService.updateSectionEnroll(sectionId)
                    .then(function () {
                    if (userId) {
                        _this.sectionService.enroll(userId, sectionId)
                            .then(function (status) {
                            if (status === 200) {
                                alert('You have been successfully enrolled!');
                            }
                            else {
                                alert('Unable to enroll. Contact administrator.');
                            }
                        })
                            .then(function () { return _this.sectionService.findAllSections()
                            .then(function (sections) { return _this.sections = sections; }); });
                    }
                    else {
                        alert('Please login before enrolling in a section.');
                    }
                });
            }
            else {
                alert('No more seats available. Please contact an Administrator.');
            }
        };
    }
    EnrollmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sectionService
            .findAllSections()
            .then(function (sections) { return _this.sections = sections; })
            .then(function () {
            return _this.userService.currentUser()
                .then(function (user) {
                _this.currentUser = user;
            });
        });
    };
    EnrollmentComponent = __decorate([
        Component({
            selector: 'app-enrollment',
            templateUrl: './enrollment.component.html',
            styleUrls: ['./enrollment.component.css']
        }),
        __metadata("design:paramtypes", [SectionServiceClient,
            UserServiceClient])
    ], EnrollmentComponent);
    return EnrollmentComponent;
}());
export { EnrollmentComponent };
//# sourceMappingURL=enrollment.component.js.map