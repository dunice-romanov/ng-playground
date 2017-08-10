import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
