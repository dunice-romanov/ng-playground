import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from '../../../models/todo.model';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Output() todo: EventEmitter<Object> = new EventEmitter<Object>();

  form: FormGroup;
  formSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [undefined, Validators.required],
      text: [undefined, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { text, title } = this.form.value;
      this.todo.emit({
        title,
        text,
      });
      console.log(this.form);
      this.form.reset();
    }
  }

  errorMatcher(control, form) {
    // console.log(this);
    // console.log('is subm', form);
    return !!(control.invalid && (control.dirty || control.touched));
  }

}
