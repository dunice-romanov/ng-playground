import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StartPageComponent } from './containers/start-page/start-page.component';

@NgModule({
  imports: [
    SharedModule,
    AuthenticationRoutingModule,
  ],
  declarations: [LoginComponent, RegisterComponent, StartPageComponent]
})
export class AuthenticationModule { }
