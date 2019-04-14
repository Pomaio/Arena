import { Component, OnInit } from '@angular/core';
import {Itask} from '../../model/itask';
import {TaskTableService} from './services/task-table.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  tasks: Itask[] = [];

  constructor(private taskTableService: TaskTableService) { }

  ngOnInit() {
        this.tasks=this.taskTableService.getData();
  }

}
