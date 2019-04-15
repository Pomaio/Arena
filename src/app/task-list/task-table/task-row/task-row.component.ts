import {Component, Input, OnInit, Output} from '@angular/core';
import {Itopic} from '../../../model/itopic';
import {Itask} from '../../../model/itask';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent implements OnInit {
  @Input() topic: Itopic;
  activeElement: any;

  constructor() { }

  ngOnInit() {
  }
  onClick(element) {
    console.log(element);
     this.activeElement = document.getElementById(element.name);
     this.activeElement.className='active';
    console.log(this.activeElement);

  }

}
