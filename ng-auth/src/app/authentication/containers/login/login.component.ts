import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../../core/_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

    this.userService.loginUser(username, password)
      .subscribe(
        value => {
          this.router.navigate(['/register']);
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

  notEmpty(control) {
    return control.value.trim().length ? null : {
      notEmpty: true,
    };
  }

  _createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, this.notEmpty])],
      password: ['', Validators.compose([Validators.required, this.notEmpty])],
    })
  }

}
