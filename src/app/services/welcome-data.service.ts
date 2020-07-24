import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  executeHelloWordBeanService() {
    return this.httpClient.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldServiceWithPathVariable(username) {
    const url = `http://localhost:8080/hello-world/pathVariable/${username}`;
    return this.httpClient.get<HelloWorldBean>(url);
  }
}
