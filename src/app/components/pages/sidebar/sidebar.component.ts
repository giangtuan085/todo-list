import { Component } from '@angular/core';
import { MaxIdValue, MinIdValue } from 'src/app/constants/constant';
import { Task } from 'src/app/models/task-model';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  todoList: Task[] = [];
  constructor(private dataService: DataService) {
    this.dataService.getTodoList().subscribe(res => this.todoList = res);
  }

  public onSubmit(event: Event | Task): void {
    this.todoList.push({...event, id: this.generateId()} as Task);
    this.dataService.updateTodoList(this.todoList);
  }

  // random id number
  private generateId(): number {
    const newId = this.getRandomInt(MinIdValue, MaxIdValue);
    const existIdList = this.todoList.filter(x => x.id === newId);
    if (existIdList.length > 0) {
      return this.generateId();
    }
    return newId;
  }

  private getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

}
