import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GrowAnimation, Priority } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  animations: [GrowAnimation]

})
export class TaskDetailComponent implements OnInit, OnChanges {
  @Input() data?: Task;
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      console.log(changes['data']);
      this.buildForm(this.data);
    }
  }

  private buildForm(data?: Task): void {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: [''],
      dueDate: [''],
      priority: [Priority.Low],
      show: [true]
    })

    if (data) {
      this.form.patchValue(data);
    }
  }
}
