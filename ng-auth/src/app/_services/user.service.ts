import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { API_URI } from '../app.constants';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  USER_URI = '/users';
  user$: BehaviorSubject<User>;
  loggedIn: boolean = false;

  constructor(
    private http: Http,
    private router: Router,
  ) { 
    this._initUser();
  }

  registerUser(username: string, password: string) {
    const uri = `${API_URI}${this.USER_URI}`,
      body = {
        username,
        password,
      };
    return this.http.post(uri, body)
            .map((response) => {
              const json = response.json(),
                    user = this._jsonToUser(json);
              this._setUser(user);
            })
            .catch((error) => Observable.throw(error));
  };

  loginUser(username: string, password: string) {
    const uri = `${API_URI}${this.USER_URI}/login`,
          body = {
            username,
            password,
          };
    return this.http.post(uri, body)
              .map((response) => {
                const json = response.json(),
                      user = this._jsonToUser(json);
                this._setUser(user);
                return user;
              })
              .catch((error) => Observable.throw(error));
  };

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this._removeUser();
    this.router.navigate(['/']);
  }

  getToken(): string {
    const user = JSON.parse(localStorage.user);
    if (!user) { return null; }
    return user.token;
  };

  _getUserFromLocalStorage(): User {
    const { user } = localStorage;
    if (user) {
      const rawUser = JSON.parse(user);
      return new User(user.id, user.username, user.token);
    }
    return null;
  };

  _initUser() {
    const user = this._getUserFromLocalStorage();
    if (user) {
      this.user$ = new BehaviorSubject<User>(user);
      this.loggedIn = true;
    } else {
      this.user$ = new BehaviorSubject<User>(null);
      this.loggedIn = false;
    }
  }

  _setUser(user: User) {
    this.loggedIn = true;
    this.user$.next(user);
    localStorage.user = JSON.stringify(user);
  };

  _removeUser() {
    this.user$.next(null);
    this.loggedIn = false;
    localStorage.removeItem('user');
  }

  _jsonToUser(json): User {
    return new User(json.user.id, json.user.username, json.token);
  };

}
