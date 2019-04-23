import {Component, OnInit} from '@angular/core';
import {TaskTableService} from './services/task-table.service';
import {Itopic} from '../../model/itopic';
import {Iuser} from '../../model/iuser';
import {TaskHttpService} from '../services/task-http.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {

  tasks: Itopic[]=[];
  user: Iuser;

  constructor(private taskTableService: TaskTableService,
              private httpService: TaskHttpService) {

  }

  ngOnInit() {
    this.user = this.taskTableService.username;
    // this.tasks=this.taskTableService.getData();
    this.httpService.getTable().subscribe(topic =>{
      this.tasks = topic;
    });

  }
}
