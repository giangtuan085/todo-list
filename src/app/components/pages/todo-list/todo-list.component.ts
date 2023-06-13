import { Component } from '@angular/core';
import { Priority } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList: Task[] = [];
  checkedList: number[] = [];
  searchValue: string = '';
  constructor(private dataService: DataService) {
    this.dataService.getTodoList().subscribe(res => this.todoList = res);
  }

  public onSubmit(event: Event | Task): void {
    const selectedIndex = this.todoList.findIndex(x => x.id === (event as Task).id);
    this.todoList.splice(selectedIndex, 1, event as Task);
    this.dataService.updateTodoList(this.todoList);
  }

  public onCheckboxChange(event: Event | boolean, task: Task): void {
    if (event && !this.checkedList.includes(task.id)) {
      this.checkedList.push(task.id);
    } else {
      this.checkedList = this.checkedList.filter(x => x !== task.id);
    }
    this.dataService.updateCheckedList(this.checkedList);
  }

  public removeItem(task: Task): void {
    this.todoList = this.todoList.filter(x => x.id !== task.id);
    this.dataService.updateTodoList(this.todoList);
  }
}
