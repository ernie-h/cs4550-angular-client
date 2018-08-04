import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';

import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnDestroy {
  userId: String;
  subscription;
  currentUser = {}

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UserServiceClient,
  ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
      this.userService.currentUser()
        .then((user) => this.currentUser = user)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
