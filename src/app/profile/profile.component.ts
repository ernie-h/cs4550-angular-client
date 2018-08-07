import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';

import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';

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
  subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserServiceClient,
    private sectionService: SectionServiceClient,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.userService.currentUser()
        .then((user) => this.currentUser = user)
        .then(() => this.sectionService.findSectionsForStudent(this.currentUser._id)
          .then(enrollments => this.enrollments = enrollments))
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
