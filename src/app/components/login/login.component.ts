import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from './../../services/hard-coded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'Rachid';
  password: string;
  errorMessage: string = 'Error Credentiels';
  invalidLogin: boolean = false;

  constructor(private router: Router,
              public hardAuth: HardCodedAuthenticationService) { }

  ngOnInit(): void {
  }

  onHandleLogin() {
    // if (this.username && this.password) {
    //   this.invalidLogin = false;
    // } else {
    //   this.invalidLogin = true;
    // }
    this.invalidLogin = !this.hardAuth.authenticate(this.username, this.password);
    if (!this.invalidLogin) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    }
  }
}
