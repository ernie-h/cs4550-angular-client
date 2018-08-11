import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from './services/user.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser = { _id: 0};

  constructor(
    private router: Router,
    private userService: UserServiceClient, ) { }

  ngOnInit() {
    // this.router.navigate(['home'])
    this.userService.currentUser()
      .then((user) => {
        this.currentUser = user;
      })
  }
}
