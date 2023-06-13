import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './components/shared/task-detail/task-detail.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/shared/button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    SidebarComponent,
    TodoListComponent,
    CheckboxComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
