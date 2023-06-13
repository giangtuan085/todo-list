import { Component } from '@angular/core';
import { Priority } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todoList: Task[] = [
    {
      id: 1,
      title: 'test',
      dueDate: '',
      priority: Priority.High,
      show: false,
    },
    {
      id: 2,
      title: '2',
      dueDate: '',
      priority: Priority.High,
      show: false,
    },
    {
      id: 3,
      title: 'test3',
      dueDate: '',
      priority: Priority.Medium,
      show: false,
    },
    {
      id: 4,
      title: 'test4',
      dueDate: '',
      priority: Priority.High,
      show: false,
    },
    {
      id: 5,
      title: 'test5555',
      dueDate: '',
      priority: Priority.Low,
      show: false,
    },
  ];
  constructor() {
  }
}
