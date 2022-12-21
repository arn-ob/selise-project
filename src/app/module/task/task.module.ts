import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDashboardComponent } from './task-dashboard/task-dashboard.component';
import { TaskRoutingModule } from './task-routing.module';
import { ShareModule } from 'src/app/share/share.module';
import { CreateTaskModalComponent } from './create-task-modal/create-task-modal.component';



@NgModule({
  declarations: [
    TaskDashboardComponent,
    CreateTaskModalComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ShareModule
  ]
})
export class TaskModule { }
