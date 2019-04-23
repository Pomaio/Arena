import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Itask} from '../model/itask';
import {TaskTableService} from '../task-list/task-table/services/task-table.service';

@Injectable({providedIn: 'root'})
export class ServiceRxTxService {

  txActiveNameTaskEvent: Subject<any>= new Subject();
  txUser: Subject<any>= new Subject();

  constructor(private TTservice: TaskTableService) {
    this.txUser.subscribe(user =>{
      this.TTservice.txEvent.next(user);
    })
  }


  activateTask(task: Itask){
    this.TTservice.txTasktoField.next(task);
    this.txActiveNameTaskEvent.next(task.name);
  }
}
