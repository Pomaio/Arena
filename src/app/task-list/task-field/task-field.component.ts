import {Component, Input, OnInit} from '@angular/core';
import {ServiceRxTxService} from '../../services/service-rx-tx.service';
import {Itask} from '../../model/itask';

@Component({
  selector: 'app-task-field',
  templateUrl: './task-field.component.html',
  styleUrls: ['./task-field.component.css']
})
export class TaskFieldComponent implements OnInit {

  activeTasks: Array<Itask> =[];


  constructor(private _service: ServiceRxTxService) {
    this._service.txTasktoField.subscribe(task => {
      this.activeTasks.splice(0,0,task);
      console.log(this.activeTasks);
    })
  }

  ngOnInit() {
  }

}
