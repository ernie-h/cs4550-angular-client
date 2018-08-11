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
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.register = function (username, password, password2, firstName, lastName, email, phone, dateOfBirth, role) {
            if (username && password && password2 && firstName && lastName &&
                email && phone && dateOfBirth && role !== undefined) {
                if (password === password2) {
                    var user = {
                        username: username,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        dateOfBirth: dateOfBirth,
                        role: role
                    };
                    _this.userService.register(user)
                        .then(function (status) {
                        if (status === 200) {
                            return _this.router.navigate(['profile']);
                        }
                        else {
                            alert("Username already exists. Please pick a new one.");
                        }
                    });
                }
                else {
                    alert('Passwords must match.');
                }
            }
            else {
                alert('Please fill in all fields.');
            }
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [Router,
            UserServiceClient])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map