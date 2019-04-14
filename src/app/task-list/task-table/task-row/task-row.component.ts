import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../model/itask';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {
  @Input() task: Itask;

  constructor() { }

  ngOnInit() {
  }

}
