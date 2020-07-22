import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';

export class Todo {

  constructor(public id: number,
              public description: string,
              public targetDate: Date,
              public isCompleted: boolean
              ) {
  }

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todo = {id: 1, description: 'hi there'};
  todos: Todo[] = [
    new Todo(1, 'hi there', new Date, false),
    new Todo(2, 'hi there', new Date, true),
    new Todo(3, 'hi there', new Date, false)
  ];
  ngOnInit(): void {
  }

}
