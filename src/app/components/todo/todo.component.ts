import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoId: number;
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.todoId = this.route.snapshot.params['id'];
    this.findTodo(this.todoId);
  }

  findTodo(id) {
    this.todoDataService.findTodoById('rachid', id).subscribe(
      data => {
        this.todo = data;
      }, error => {
        console.log(error);

      }
    )
  }

  onSaveTodo() {
    this.todoDataService.updateTodo('rachid', this.todoId, this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todos']);
      }, error => {
        console.log(error);

      }
    )
  }

}
