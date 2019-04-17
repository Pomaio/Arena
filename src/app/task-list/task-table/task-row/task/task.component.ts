import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../../model/itask';
import {MAX_ACTIVE_TASK} from '../../../../constants/maxActiveTask.const';
import {ServiceRxTxService} from '../../../../services/service-rx-tx.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: Itask;
  activeElement: any;

  constructor(private _service: ServiceRxTxService) { }

  ngOnInit() {
  }
  onClick() {
      this.activeElement = document.getElementById(this.task.name);
      this.activeElement.className = 'active';
      this._service.activateTask(this.task);
    }

}
