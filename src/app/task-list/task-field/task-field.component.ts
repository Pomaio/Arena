import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../model/itask';

@Component({
  selector: 'app-task-field',
  templateUrl: './task-field.component.html',
  styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent implements OnInit {
  @Input() task: Itask;

  constructor() { }

  ngOnInit() {
  }

}
