import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskListComponent} from './task-list.component';
import {TaskTableComponent} from './task-table/task-table.component';
import { TaskFieldComponent } from './task-field/task-field.component';
import { TaskRowComponent } from './task-table/task-row/task-row.component';
import { TaskComponent } from './task-table/task-row/task/task.component';
import {LengthPipeModule} from '../pipes/length-pipe/length-pipe.module';
import {TaskTableService} from './task-table/services/task-table.service';

@NgModule({
  declarations: [ TaskListComponent, TaskTableComponent, TaskFieldComponent, TaskRowComponent, TaskComponent],
  exports: [
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    LengthPipeModule
  ],
  providers:[TaskTableService]
})
export class TaskListModule { }
