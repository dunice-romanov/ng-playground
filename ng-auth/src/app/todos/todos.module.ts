import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './containers/list/list.component';
import { TodosRoutingModule } from './todos-routing.module';

import { TodosService } from './_services/todos.service';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
  declarations: [ListComponent, AddTodoFormComponent, TodoCardComponent],
  providers: [ TodosService ],
})
export class TodosModule { }
