import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../../services/todo-data.service';
import { Router } from '@angular/router';

export class Todo {

  constructor(public id: number,
              public description: string,
              public targetDate: Date,
              public completed: boolean
              ) {
  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[];
  messageForDeletedsuccessfully: string;

  constructor(
    private todoDataService: TodoDataService,
    private router: Router) { }

  // todo = {id: 1, description: 'hi there'};
  // todos: Todo[] = [
  //   new Todo(1, 'hi there', new Date, false),
  //   new Todo(2, 'hi there', new Date, true),
  //   new Todo(3, 'hi there', new Date, false)
  // ];


  ngOnInit(): void {
    this.findAllTodosByUsername();
  }

  findAllTodosByUsername() {
    this.todoDataService.retrieveAllTodosByUsername('rachid').subscribe(
      data => {
        this.todos = data;
      }
    );
  }
  deleteTodo(id, description) {
    this.todoDataService.deleteTodoById('rachid', id).subscribe(
      () => {
        this.messageForDeletedsuccessfully = `Todo with description: ${description}  Was Deleted Successfully`;
        this.findAllTodosByUsername();
      }, error => {
        console.log(error);
      }
    );
  }

  updateTodo(id) {
    this.router.navigate(['todos', id]);
  }
  onAddTodo() {
    this.router.navigate(['todos', -1]);
  }
}
