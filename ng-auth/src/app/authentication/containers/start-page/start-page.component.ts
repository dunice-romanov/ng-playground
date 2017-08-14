import { Component, OnInit } from '@angular/core';

import { NAVBAR_STATES } from '../../../app.constants';

import animations from './start-page.animations';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
  animations,
})
export class StartPageComponent implements OnInit {

  STATES = NAVBAR_STATES;
  _state: string;
  _nextState: string;


  constructor() {
    this._initStates();
  }

  ngOnInit() {
  }

  onFlyInOutDone(ev, state) {
    if (ev.toState === 'void') {
      this.state = this._nextState;
      this._nextState = null;
    }
    // console.log(ev);
    // this.state = state;
  }

  onRegister() {
    this._state = this.STATES.NULL;
    this._nextState = this.STATES.LOGIN;
  }

  onLogin() {
    this._state = this.STATES.NULL;
    this._nextState = this.STATES.REGISTER;
  }

  _initStates() {
    this.state = NAVBAR_STATES.LOGIN;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    switch(state) {
      case this.STATES.REGISTER:
        this._state = state;
        break;
      case this.STATES.LOGIN:
        this._state = state;
        break;
      case this.STATES.NULL:
        this._state = state;
        break;
      default:
        return;
    }
  }
  
}
