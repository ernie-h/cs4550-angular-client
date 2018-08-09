import { Injectable } from "@angular/core";
const LOGIN_URL = 'https://eh-node-server.herokuapp.com/api/login';
const REGISTER_URL = 'https://eh-node-server.herokuapp.com/api/register';
const LOGOUT_URL = 'https://eh-node-server.herokuapp.com/api/logout';
const PROFILE_URL = 'https://eh-node-server.herokuapp.com/api/profile';


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
