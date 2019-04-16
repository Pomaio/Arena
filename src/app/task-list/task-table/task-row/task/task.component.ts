import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../../model/itask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Itask;
  activeElement: any;

  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log(this.task);
    this.activeElement = document.getElementById(this.task.name);
    this.activeElement.className='active';
    console.log(this.activeElement);

  }

}
