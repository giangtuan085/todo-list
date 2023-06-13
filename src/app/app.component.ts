import { Component } from '@angular/core';
import { GrowAnimation } from './constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [GrowAnimation]
})
export class AppComponent {
  title = 'to-do-list';
  isOpen: boolean = false;
}
