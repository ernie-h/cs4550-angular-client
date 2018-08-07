import { Injectable } from "@angular/core";
const LOGIN_URL = 'http://localhost:3000/api/login';
const REGISTER_URL = 'http://localhost:3000/api/register';
const LOGOUT_URL = 'http://localhost:3000/api/logout';
const CURRENT_USER_URL = 'http://localhost:3000/currentUser';

const COURSE_MODULE_API_URL = 'http://localhost:8080/api/course/CID/module'

@Injectable()
export class UserServiceClient {
  users = [
    { _id: '123', username: 'alice', password: 'alice' },
    { _id: '234', username: 'bob', password: 'bob' }
  ];

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
    fetch(CURRENT_USER_URL, {
      credentials: 'include'
    }).then(response => response.json())

  logout = () =>
    fetch(LOGOUT_URL, {
      method: 'POST',
      'credentials': 'include'
    });


}
