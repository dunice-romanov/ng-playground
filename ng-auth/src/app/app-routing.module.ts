import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateViaAuthGuard } from './_guards/is-logged-in.guard';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full', },
  { path: 'todos', loadChildren: 'app/todos/todos.module#TodosModule', canLoad: [ CanActivateViaAuthGuard ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
