import { 
  Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter,
} from '@angular/core';

import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent implements OnInit {

  @Input() todo: Todo;

  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onRemove() {
    this.remove.emit(this.todo);
  }

}
