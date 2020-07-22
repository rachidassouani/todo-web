import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todo = {id: 1, description: 'hi there'};
  todos = [
    {id: 1, description: 'hi there'},
    {id: 1, description: 'hi there'},
    {id: 1, description: 'hi there'}
  ];
  ngOnInit(): void {
  }

}
