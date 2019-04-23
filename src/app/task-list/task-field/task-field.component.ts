import {Component, OnInit} from '@angular/core';
import {Itask} from '../../model/itask';
import {TaskTableService} from '../task-table/services/task-table.service';

@Component({
  selector: 'app-task-field',
  templateUrl: './task-field.component.html',
  styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent implements OnInit {

  activeTasks: Array<Itask> =[];


  constructor(private taskTS: TaskTableService) {
    this.taskTS.txTasktoField.subscribe(task => {
      this.activeTasks.splice(0,0,task);
    })
  }

  ngOnInit() {
  }
}
