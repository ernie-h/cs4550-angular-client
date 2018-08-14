import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  UserServiceClient
} from '../services/user.service.client';
import {
  ActivatedRoute
} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';
  username = '';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserServiceClient) {}

  ngOnInit() {}

  login = (username, password) => {
    const user = {
      username: username,
      password: password
    };
    this.userService.login(user)
      .then(status => {
        if (status === 200) {
          return this.router.navigate(['profile']);
        } else {
          alert('User does not exist.');
        }
      });
  }
}
