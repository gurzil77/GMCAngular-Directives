import { Component, OnInit } from '@angular/core';
import {Model} from './model'
import {TodoServicesService} from './todo-services.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo = new Model();
  todos: Model[];
  constructor(
    private todoService : TodoServicesService
  ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos()
  }
  todoAdd() {
    if (this.todos.length){
      this.todo.id = this.todos[this.todos.length - 1].id + 1;
    } else {
      this.todo.id = 1
    }
    this.todoService.addTodo(this.todo);
    this.todo = new Model()
  }
  todoDelete(todo:Model) {
    this.todoService.deleteTodo(todo);
  }
}
