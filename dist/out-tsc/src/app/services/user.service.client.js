var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@angular/core";
var LOGIN_URL = 'https://eh-node-server.herokuapp.com/api/login';
var REGISTER_URL = 'https://eh-node-server.herokuapp.com/api/register';
var LOGOUT_URL = 'https://eh-node-server.herokuapp.com/api/logout';
var PROFILE_URL = 'https://eh-node-server.herokuapp.com/api/profile';
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
        this.login = function (user) {
            return fetch(LOGIN_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(function (response) { return response.status; });
        };
        this.register = function (user) {
            return fetch(REGISTER_URL, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(function (response) { return response.status; });
        };
        this.currentUser = function () {
            return fetch(PROFILE_URL, {
                credentials: 'include'
            }).then(function (response) { return response.json(); });
        };
        this.updateUser = function (newUser) {
            return fetch(PROFILE_URL, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            }).then(function (response) { return response.json(); });
        };
        this.logout = function () {
            return fetch(LOGOUT_URL, {
                method: 'POST',
                'credentials': 'include'
            });
        };
    }
    UserServiceClient = __decorate([
        Injectable()
    ], UserServiceClient);
    return UserServiceClient;
}());
export { UserServiceClient };
//# sourceMappingURL=user.service.client.js.map