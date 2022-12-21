import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from 'src/app/core/services/storage.service';
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {
  tasks;

  todoTask: any = [];
  progressTask: any = [];
  doneTask: any = [];
  modalActive = false;
  loading = false;

  personArray = [
    {
      name: 'Person1',
      id: 1
    },
    {
      name: 'Person2',
      id: 2
    },
    {
      name: 'Person3',
      id: 3
    },
    {
      name: 'Person4',
      id: 4
    },
    {
      name: 'Person5',
      id: 5
    },
    {
      name: 'Person6',
      id: 6
    },
    {
      name: 'Person7',
      id: 7
    },
    {
      name: 'Person8',
      id: 8
    },
  ]


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private _storage: StorageService
  ) {
    this.tasks = _storage.getItem("tasks");

    if (this.tasks) {
      this.tasks.map((item: any) => {
        if (item?.status == 'Done') {
          this.doneTask.push(item);
        }
        if (item?.status == 'To-Do') {
          this.todoTask.push(item);
        }
        if (item?.status == 'In Progress') {
          this.progressTask.push(item);
        }
      })

      console.log(this.progressTask, this.todoTask);

    }
  }

  ngOnInit(): void {
    console.log(this.tasks);



  }

  openTaskModal() {

    this.dialog.open(CreateTaskModalComponent, {
      data: {
        title: 'Logout',
        message: 'আপনি লগ আউট করতে চান?',
        confirm: 'Create Task',
        cancel: 'Cancel',
        width: 70,
        person: this.personArray
      },
    }).afterClosed().subscribe(result => {
      console.log(result);

      if (result) {

      }
    });


  }
  updateTask() {
  }

}
