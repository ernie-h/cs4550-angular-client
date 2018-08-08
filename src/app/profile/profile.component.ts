import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';

import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  userId: String;
  currentUser = {
    _id: 0
  };
  enrollments = [];
  role = '';
  isAdmin = false;
  subscription;

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
          .then(enrollments => this.enrollments = enrollments))
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.userService.logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  unenroll = (userId, sectionId, seats) => {
    console.log(seats)
    this.sectionService.updateSectionUnenroll(sectionId)
      .then(() => {
        if (userId) {
          this.sectionService.unenroll(userId, sectionId)
            .then((status) => {
              if (status === 200) {
                alert('You have been successfully un-enrolled in the course.')
              }
              else {
                alert('Unable to un-enroll. Contact administrator.')
              }
            })
            .then(() => this.sectionService
              .findSectionsForStudent(this.currentUser._id)
              .then(enrollments => this.enrollments = enrollments))

        }
        else {
          alert('Please login before un-enrolling in a section.')
        }
      })
  }
}
