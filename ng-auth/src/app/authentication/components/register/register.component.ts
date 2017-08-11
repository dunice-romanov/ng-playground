import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  
  loginError: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this._createForm();
  }

  onSubmit() {
    if (this.loginForm.invalid) { return; }
    this.loginError = false;
    this.loading = true;
    const { username, password } = this.loginForm.value;

    this.userService.registerUser(username, password.passwordOriginal)
      .subscribe(
        value => {
          this.router.navigate(['/todos']);
          this.loading = false;
        },
        error => {
          this.loginError = true;
          this.loading = false;
        }
      )
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get passwordConfirm() {
    return this.password.get('passwordConfirm');
  }

  get passwordOriginal() {
    return this.password.get('passwordOriginal');
  }

  inputInvalid(input) {
    return input.invalid  && (input.dirty || input.touched)
  }

  notEqual(group) {
    const { passwordConfirm, passwordOriginal } = group.controls;
    return passwordConfirm.value === passwordOriginal.value ? 
      null
      :
      { notEqual: true };
  }

  notEmpty(control) {
    return control.value.trim().length ? null : {
      notEmpty: true,
    };
  }

  _createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, this.notEmpty])],
      password: this.formBuilder.group({
        passwordOriginal: ['', Validators.compose([Validators.required, this.notEmpty])],
        passwordConfirm: ['', Validators.compose([Validators.required, this.notEmpty])],
      }, {
        validator: this.notEqual,
      })
    })
  }
}
