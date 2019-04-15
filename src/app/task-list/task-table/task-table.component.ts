import {Component, OnInit, Output} from '@angular/core';
import {TaskTableService} from './services/task-table.service';
import {Itopic} from '../../model/itopic';
import {Itask} from '../../model/itask';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  tasks: Itopic[]=[] ;
  @Output() task: Itask;


  constructor(private taskTableService: TaskTableService) { }

  ngOnInit() {
        this.tasks=this.taskTableService.getData();
  }
}
