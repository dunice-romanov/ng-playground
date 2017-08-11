import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate, CanLoad {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  canActivate() {
    return this.checkLoggedIn();
  }

  canLoad(): boolean {
    console.log('this.checkLoggedIn()', this.checkLoggedIn());
    return this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    if (this.userService.isLoggedIn()) {
      return true;
    };
    this.router.navigate(['/start']);
    return false;
  }

}