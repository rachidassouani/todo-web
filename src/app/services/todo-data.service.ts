import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../components/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodosByUsername(username) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodoById(username, todoId) {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${todoId}`);
  }
}
