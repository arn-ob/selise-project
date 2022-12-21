import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

const components = [
  TaskCardComponent,
  ModalComponent
];

const impExpModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatInputModule
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...impExpModule
  ],
  exports: [
    ...components, ...impExpModule
  ]
})
export class ShareModule { }
