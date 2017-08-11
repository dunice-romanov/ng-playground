import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  MdMenuModule,
  MdCardModule,
  MdButtonModule,
  MdInputModule,
  MdSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdMenuModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    FlexLayoutModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdMenuModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdSnackBarModule,
    FlexLayoutModule,
  ],
})
export class SharedModule { }
