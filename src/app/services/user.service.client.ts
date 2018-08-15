import { Injectable } from '@angular/core';
const LOGIN_URL = 'http://localhost:3000/api/login';
const REGISTER_URL = 'http://localhost:3000/api/register';
const LOGOUT_URL = 'http://localhost:3000/api/logout';
const PROFILE_URL = 'http://localhost:3000/api/profile';

const COURSE_MODULE_API_URL = 'http://localhost:8080/api/course/CID/module'

@Injectable()
export class UserServiceClient {
  login = (user) =>
    fetch(LOGIN_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status)

  register = (user) =>
    fetch(REGISTER_URL, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status)

  currentUser = () =>
    fetch(PROFILE_URL, {
      credentials: 'include'
    }).then(response => response.json())

  updateUser = (newUser) =>
    fetch(PROFILE_URL, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(response => response.json())

  logout = () =>
    fetch(LOGOUT_URL, {
      method: 'POST',
      'credentials': 'include'
    });
}
