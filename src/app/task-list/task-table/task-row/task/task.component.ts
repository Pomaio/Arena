import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Itask} from '../../../../model/itask';
import {ServiceRxTxService} from '../../../../services/service-rx-tx.service';
import {TaskTableService} from '../../services/task-table.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  @Input() task: Itask;
  activeElement: any;
  amountactiveElement: number = 0;

  constructor(private _service: ServiceRxTxService,
              private taskTS: TaskTableService) {
    this.taskTS.changeAmountTask.subscribe(amount => {
      this.amountactiveElement = amount;
    })

  }

  ngOnInit() {
    if(this.taskTS.username != undefined) {
      this.amountactiveElement = this.taskTS.username.activeTask.length;
    }
  }
  onClick() {
    if(this.amountactiveElement < 3) {
        this.activeElement = document.getElementById(this.task.name);
        this.activeElement.className = 'active';
        this._service.activateTask(this.task);
      }
    }

}
