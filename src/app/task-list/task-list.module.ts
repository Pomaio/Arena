import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskListComponent} from './task-list.component';
import {TaskTableComponent} from './task-table/task-table.component';
import { TaskFieldComponent } from './task-field/task-field.component';
import { TaskRowComponent } from './task-table/task-row/task-row.component';

@NgModule({
  declarations: [ TaskListComponent, TaskTableComponent, TaskFieldComponent, TaskRowComponent],
  exports: [
    TaskListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TaskListModule { }
