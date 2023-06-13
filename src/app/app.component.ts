import { Component } from '@angular/core';
import { DataService } from './services/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'to-do-list';

  constructor(private dataService: DataService) {
    this.dataService.initTodoList();
  }
  
}
