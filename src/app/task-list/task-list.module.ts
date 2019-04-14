import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskListComponent} from './task-list.component';
import {TaskTableComponent} from './task-table/task-table.component';

@NgModule({
  declarations: [ TaskListComponent, TaskTableComponent],
  exports: [
    TaskListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TaskListModule { }
