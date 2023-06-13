import { Component } from '@angular/core';
import { GrowAnimation } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-bulk-action',
  templateUrl: './bulk-action.component.html',
  styleUrls: ['./bulk-action.component.scss'],
  animations: [GrowAnimation]
})
export class BulkActionComponent {
  isOpen: boolean = false;
  todoList: Task[] = [];
  checkedList: number[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getTodoList().subscribe(res => this.todoList = res);
    this.dataService.getCheckedList().subscribe(res => this.checkedList = res);
  }

  public removeCheckedItem(): void {
    this.todoList = this.todoList.filter(x => !this.checkedList.includes(x.id));
    this.dataService.updateTodoList(this.todoList);
  }
}
