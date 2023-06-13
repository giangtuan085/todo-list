import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Priority, PriorityList } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],

})
export class TaskDetailComponent implements OnInit, OnChanges {
  @Input() data?: Task;
  @Output() formSubmit = new EventEmitter<Task>()
  form?: FormGroup;
  PRIORITY_LIST = PriorityList;
  minDate: string;
  constructor(private fb: FormBuilder) {
    this.minDate = this.getMinDate(new Date());
  }

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      // delay task queue
      setTimeout(() => {this.buildForm(changes['data'].currentValue)});
    }
  }

  private buildForm(data?: Task): void {
    this.form = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: [''],
      dueDate: [this.getMinDate(new Date())],
      priority: [Priority.Medium],
      show: [false]
    })

    if (data) {
      this.form.patchValue(data);
    }
  }

  private getMinDate(date: Date): string {
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();

    // add a 0 before single digit month value
    return year + '-' + `${month < 10 ? 0 : ''}` + month + '-' + day;
  }

  public submit(): void {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formSubmit.emit(this.form?.getRawValue());
    this.form?.reset();
    this.buildForm();
  }
}
