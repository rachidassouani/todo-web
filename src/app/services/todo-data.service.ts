import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../components/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveAllTodosByUsername(username: string) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
  }

  deleteTodoById(username, todoId) {
    return this.httpClient.delete(`http://localhost:8080/users/${username}/todos/${todoId}`);
  }

  findTodoById(username, todoId) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${username}/todos/${todoId}`);
  }

  updateTodo(username: string, todoId: number, todo: Todo) {
    return this.httpClient.put(`http://localhost:8080/users/${username}/todos/${todoId}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    return this.httpClient.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
