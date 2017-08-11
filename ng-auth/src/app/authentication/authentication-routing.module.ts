import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

import { NotAuthGuard } from '../_guards/not-logged-in.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AuthenticationRoutingModule { }
