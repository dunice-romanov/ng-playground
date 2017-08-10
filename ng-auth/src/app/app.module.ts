import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global-components/navbar/navbar.component';

import { UserService } from './core/_services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
