import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onHandleLogin() {
    // if (this.username && this.password) {
    //   this.invalidLogin = false;
    // } else {
    //   this.invalidLogin = true;
    // }
    this.invalidLogin = (this.username && this.password) ? false : true;
    console.log(this.username + ' ' + this.password);
  }
}
