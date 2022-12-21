import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskRoutingModule } from './task-routing.module';



@NgModule({
  declarations: [
    TaskDashboardComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
