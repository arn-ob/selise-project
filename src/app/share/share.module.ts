import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const impExpModule = [
  CommonModule,

]

@NgModule({
  declarations: [],
  imports: [
    ...impExpModule
  ],
  exports: [
    ...impExpModule
  ]
})
export class ShareModule { }
