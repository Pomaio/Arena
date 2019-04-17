import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../../model/itask';
import {ServiceRxTxService} from '../../../../services/service-rx-tx.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Itask;
  activeElement: any;
  amountactiveElement: number = 0;

  constructor(private _service: ServiceRxTxService) {
    this._service.txamountAT.subscribe( (value) => {
        this.amountactiveElement = value;
      })
  }

  ngOnInit() {
  }
  onClick() {
    if(this.amountactiveElement < 3) {

        this.activeElement = document.getElementById(this.task.name);
        this.activeElement.className = 'active';
        this._service.activateTask(this.task);
      }
    console.log(this.amountactiveElement);
    }
}
