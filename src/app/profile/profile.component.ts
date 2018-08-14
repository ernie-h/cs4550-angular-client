import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy, OnInit {
  userId: String;
  currentUser = {
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
  username: '';
  password: '';
  password2: '';
  firstName: '';
  lastName: '';
  email: '';
  phone: '';
  dateOfBirth: '';
  role = '';
  enrollments = [];
  isAdmin = false;
  subscription;

  refreshed = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceClient,
    private sectionService: SectionServiceClient,
  ) { }

  ngOnInit() {

    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.userService.currentUser()
        .then((user) => {
          this.currentUser = user;
          this.role = user.role;
        })
        .then(() => this.sectionService.findSectionsForStudent(this.currentUser._id)
          .then(enrollments => this.enrollments = enrollments));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  updateUser(currentUserId, username, password, firstName, lastName, phone, dateOfBirth) {
    if (username && password && firstName && lastName && phone && dateOfBirth !== null) {
      const newUser = {
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
      .then(() => alert('Succesfully updated user.'))
          .then(() => this.sectionService.findSectionsForStudent(this.currentUser._id)
            .then(enrollments => this.enrollments = enrollments));
    } else {
      alert('Please edit each field. If you want to leave one field the same, type it out again.');
    }

  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['login']));
  }

  unenroll = (userId, sectionId, seats) => {
    this.sectionService.updateSectionUnenroll(sectionId)
      .then(() => {
        if (userId) {
          this.sectionService.unenroll(userId, sectionId)
            .then((status) => {
              if (status === 200) {
                alert('You have been successfully un-enrolled in the course.');
              } else {
                alert('Unable to un-enroll. Contact administrator.');
              }
            })
            .then(() => this.sectionService
              .findSectionsForStudent(this.currentUser._id)
              .then(enrollments => this.enrollments = enrollments));

        } else {
          alert('Please login before un-enrolling in a section.');
        }
      });
  }
}
