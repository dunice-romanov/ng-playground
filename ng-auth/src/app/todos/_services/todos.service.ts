import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { UserService } from '../../_services/user.service';
import { ApiService } from '../../_services/api.service';

import { Todo } from '../../models/todo.model';

@Injectable()
export class TodosService {

  constructor(
    private userService: UserService,
    private api: ApiService,
  ) { }

  getTodos() {
    const url = '/todos';
    return this.api
      .get(url)
      .map(
        (items) => {
          return items.map(this._parseTodo);
        }
      );
  }

  addTodo(title: string, text: string) {
    const url = '/todos',
          body = {
            title,
            text,
          };
    return this.api.post(url, body)
                .map((value) => this._parseTodo(value));
  }

  removeTodo(todoId: string) {
    const url = `/todos/${todoId}`;
    return this.api.delete(url)
            .map((value) => this._parseTodo(value));
  }

  _parseTodo(json) {
    const { title, text, _id } = json;
    return new Todo(_id, title, text);
  } 

}
