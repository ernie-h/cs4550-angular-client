import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserServiceClient) { }

  ngOnInit() {
  }

  register = (username, password, password2, firstName, lastName, email, phone,
    dateOfBirth, role) => {
      console.log(username);
    if (username && password && password2 && firstName && lastName &&
      email && phone && dateOfBirth && role !== undefined) {
      if (password === password2) {
        const user = {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          dateOfBirth: dateOfBirth,
          role: role
        }
        this.userService.register(user)
          .then(status => {
            if (status === 200) {
              return this.router.navigate(['profile']);
            }
            else {
              alert("Username already exists. Please pick a new one.");
            }
          })
      }
      else {
        alert('Passwords must match.')
      }
    }
    else {
      alert('Please fill in all fields.')
    }
  }
}
