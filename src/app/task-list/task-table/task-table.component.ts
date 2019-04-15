import { Component, OnInit } from '@angular/core';
import {TaskTableService} from './services/task-table.service';
import {Itopic} from '../../model/itopic';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  tasks: Itopic[]=[] ;

  constructor(private taskTableService: TaskTableService) { }

  ngOnInit() {
        this.tasks=this.taskTableService.getData();
  }

}
