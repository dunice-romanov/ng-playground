import { Component, OnInit } from '@angular/core';

import { TodosService } from '../../_services/todos.service';

import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos: Todo[];

  constructor(
    private todoService: TodosService,
  ) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
        (todos) => { this.todos = todos; },
        (error) => { console.log('get todos error', error); }
      )
  }

  addTodo(ev) {
    const { title, text } = ev;
    if (!title || !text) { return; }
    this.todoService
      .addTodo(title, text)
      .subscribe(
        (todo) => this.todos.push(todo),
        (error) => console.log('add todo error', error)
      )
  }  

}
