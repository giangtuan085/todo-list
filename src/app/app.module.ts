import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './components/shared/task-detail/task-detail.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { TodoListComponent } from './components/pages/todo-list/todo-list.component';
import { CheckboxComponent } from './components/shared/checkbox/checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/shared/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BulkActionComponent } from './components/pages/bulk-action/bulk-action.component';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    SidebarComponent,
    TodoListComponent,
    CheckboxComponent,
    ButtonComponent,
    BulkActionComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
