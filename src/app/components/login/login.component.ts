import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'Rachid';
  password: string;
  constructor() { }

  ngOnInit(): void {
  }

  onHandleLogin() {
    console.log(this.username + ' ' + this.password);
  }
}
