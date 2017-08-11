import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from './containers/start-page/start-page.component';

import { NotAuthGuard } from '../_guards/not-logged-in.guard';

const routes: Routes = [
  { path: 'start', component: StartPageComponent, canActivate: [NotAuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AuthenticationRoutingModule { }
