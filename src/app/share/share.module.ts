import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
const components = [
  TaskCardComponent,
  ModalComponent
];

const impExpModule = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatDialogModule
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
