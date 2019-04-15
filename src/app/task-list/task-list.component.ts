import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../model/itask';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() task: Itask;
  constructor() { }

  ngOnInit() {
  }

}
