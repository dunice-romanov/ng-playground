import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../../core/_services/user.service';

import { User } from '../../models/user.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  user: User = null;
  loggedInSubscription: Subscription;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loggedInSubscription = this.userService.user$.subscribe(
      (user: User) => {
        this.user = user;
      },
      (error) => {
        console.log('navbar error', error);
      },
    )
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

  onLogout() {
    this.userService.logout(); 
  }

}
