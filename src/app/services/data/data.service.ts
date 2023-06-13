import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoListKey } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _todoList = new BehaviorSubject<Task[]>([]);
  private _checkedList = new BehaviorSubject<number[]>([]);

  constructor() {}

  public initTodoList(): void {
    const data = localStorage.getItem(TodoListKey);
    if (data) {
      this._todoList.next(JSON.parse(data));
    }
  }

  public getTodoList(): Observable<Task[]> {
    return this._todoList.asObservable();
  }

  public updateTodoList(list: Task[]): void {
    this._todoList.next(list);
    localStorage.setItem(TodoListKey, JSON.stringify(list));
  }

  public getCheckedList(): Observable<number[]> {
    return this._checkedList.asObservable();
  }

  public updateCheckedList(list: number[]): void {
    this._checkedList.next(list);
  }

}
