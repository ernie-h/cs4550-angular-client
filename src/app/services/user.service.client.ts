import { Injectable } from "@angular/core";
const COURSE_API_URL = 'http://localhost:8080/api/course'
const COURSE_ID_API_URL = 'http://localhost:8080/api/course/CID'
const COURSE_MODULE_API_URL = 'http://localhost:8080/api/course/CID/module'

@Injectable()
export class UserServiceClient {
  users = [
    { _id: '123', username: 'alice', password: 'alice' },
    { _id: '234', username: 'bob', password: 'bob' }
  ];

  login = (user) =>
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.status)

  currentUser = () =>
    fetch('http://localhost:3000/currentUser', {
      credentials: 'include'
    }).then(response => response.json())
  //
  // findUserById(userId: String) {
  //   for (let i = 0; i < this.users.length; i++) {
  //     const user = this.users[i];
  //     if (userId === user._id) {
  //       return user;
  //     }
  //   }
  // }

}
