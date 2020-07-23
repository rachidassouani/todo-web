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
  validLogin: boolean = true;

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
    this.validLogin = this.hardAuth.authenticate(this.username, this.password);
    if (this.validLogin) {
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
    }
  }
}
