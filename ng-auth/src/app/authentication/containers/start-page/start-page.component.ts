import { Component, OnInit } from '@angular/core';

import { NAVBAR_STATES } from '../../../app.constants';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  STATES = NAVBAR_STATES;
  _state: string;


  constructor() {
    this._initStates();
  }

  ngOnInit() {
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
      default:
        this._state = state;
    }
  }
  
}
