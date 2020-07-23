import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username && password) {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    return sessionStorage.getItem('authenticatedUser') !== null;
  }

  logout() {
    if (this.isUserLoggedIn()) {
      sessionStorage.removeItem('authenticatedUser');
    }
  }
}
