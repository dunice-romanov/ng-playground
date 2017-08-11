import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './containers/list/list.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TodosRoutingModule,
  ],
  declarations: [ListComponent]
})
export class TodosModule { }
