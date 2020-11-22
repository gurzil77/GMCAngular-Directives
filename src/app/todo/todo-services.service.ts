import { Injectable } from '@angular/core';
import { Model } from "./model";
import {LoggerService} from './logger.service'

@Injectable({
  providedIn: 'root'
})
export class TodoServicesService {
  todos: Model[] = [];
  constructor(
    private loggerService : LoggerService
  ) {}
    getTodos() : Model[] {
      return this.todos
    }
    addTodo(todo: Model) {
      this.todos.push(todo)
    }
    deleteTodo(todo:Model) {
      const index = this.todos.indexOf(todo)
      if (index > -1) {
        this.todos.splice(index, 1 )
      }
    }
    logger() {
      this.loggerService.logger(this.todos);
    }
}
