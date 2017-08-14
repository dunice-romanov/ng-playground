import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http, Headers } from '@angular/http';
import { UserService } from './user.service';

import { API_URI } from '../app.constants';

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private userService: UserService,
  ) { }

  get(uri: string, params: URLSearchParams = new URLSearchParams()) {
    return this.http
      .get(`${API_URI}${uri}`, { headers: this._setHeaders(), search: params })
      .catch((error) => this._formatErrors(error))
      .map((resp) => resp.json())
  }

  post(uri: string, body: Object = {}) {
    return this.http.post(
      `${API_URI}${uri}`,
      JSON.stringify(body),
      { headers: this._setHeaders() }
    )
    .catch((error) => this._formatErrors(error))
    .map((resp) => resp.json())
  }

  delete(uri: string) {
    return this.http.delete(
        `${API_URI}${uri}`,
        { headers: this._setHeaders() }
      )
      .catch((error) => this._formatErrors(error))
      .map((resp) => resp.json());
  }

  _setHeaders() {
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const jwt = this.userService.getToken();
    if (jwt) {
      headers['Authorization'] = jwt;
    };
    return new Headers(headers);
  }

  _formatErrors(error) {
    this.userService.logout();
    return Observable.throw(error);
  }

}
