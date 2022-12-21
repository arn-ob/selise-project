import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.scss']
})
export class CreateTaskModalComponent implements OnInit {

  title: string;
  message: string;
  confirm: string;
  cancel: string;

  taskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.title = data.title;
    this.message = data.message;
    this.confirm = data.confirm;
    this.cancel = data.cancel;

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

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }


  get subTask() {
    return this.taskForm.get('sub_task') as FormArray;
  }

  addSubTask() {
    this.subTask.push(this.createUserFrom());
  }

  removeTask(index: any) {
    this.subTask.removeAt(index);
  }

  createUserFrom(): FormGroup {
    return this.fb.group({
      title: [null],
      description: [null]
    })
  }



}
