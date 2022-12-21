import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskModalComponent } from '../create-task-modal/create-task-modal.component';

@Component({
  selector: 'app-task-dashboard',
  templateUrl: './task-dashboard.component.html',
  styleUrls: ['./task-dashboard.component.scss']
})
export class TaskDashboardComponent implements OnInit {

  taskForm: FormGroup;
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
    public dialog: MatDialog
  ) {

    this.taskForm = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(100)]],
      description: [null, [Validators.required, Validators.maxLength(150)]],
      priority: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      status: [null, [Validators.required]],
      assigned_person: [null, [Validators.required]],
      attachment: [null],
      sub_task: this.fb.array([this.createUserFrom()])
    })
  }

  ngOnInit(): void {
  }

  openTaskModal() {

    this.dialog.open(CreateTaskModalComponent, {
      data: {
        title: 'Logout',
        message: 'আপনি লগ আউট করতে চান?',
        confirm: 'হ্যাঁ',
        cancel: 'না'
      }
    }).afterClosed().subscribe(result => {
      console.log(result);

      if (result) {

      }
    });


  }

  get subTask() {
    return this.taskForm.get('sub_task') as FormArray;
  }

  createUserFrom(): FormGroup {
    return this.fb.group({
      title: [null],
      description: [null]
    })
  }


  addSubTask() {
    this.subTask.push(this.createUserFrom());
  }

  removeCategory(index: any) {
    this.subTask.removeAt(index);
  }


  updateTask() {
  }

}
