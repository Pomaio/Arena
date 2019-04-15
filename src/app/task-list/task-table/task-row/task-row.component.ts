import {Component, Input, OnInit} from '@angular/core';
import {Itopic} from '../../../model/itopic';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {
  @Input() topic: Itopic;

  constructor() { }

  ngOnInit() {
  }

}
