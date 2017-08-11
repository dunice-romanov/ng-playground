import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './global-components/navbar/navbar.component';

import { UserService } from './_services/user.service';

import { CanActivateViaAuthGuard } from './_guards/is-logged-in.guard';
import { NotAuthGuard } from './_guards/not-logged-in.guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  providers: [
    UserService,
    CanActivateViaAuthGuard,
    NotAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
