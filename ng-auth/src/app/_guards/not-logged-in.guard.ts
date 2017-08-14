import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class NotAuthGuard implements CanActivate, CanLoad {

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  canActivate() {
    return this.checkLoggedIn();
  }

  canLoad(): boolean {
    return this.checkLoggedIn();
  }

  checkLoggedIn(): boolean {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/todos']);
      return false;
    };
    return true;
  }

}