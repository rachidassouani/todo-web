import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../../services/todo-data.service';

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

  constructor(private todoDataService: TodoDataService) { }

  // todo = {id: 1, description: 'hi there'};
  // todos: Todo[] = [
  //   new Todo(1, 'hi there', new Date, false),
  //   new Todo(2, 'hi there', new Date, true),
  //   new Todo(3, 'hi there', new Date, false)
  // ];


  ngOnInit(): void {
    this.todoDataService.retrieveAllTodosByUsername('rachid').subscribe(
      data => {
        console.log(data);
        this.todos = data;
      }
    );
  }
}
