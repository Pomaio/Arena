import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Itask} from '../model/itask';

@Injectable({
  providedIn: 'root'
})
export class ServiceRxTxService {
  activateTaskEvent: Subject<any>= new Subject();
  txActiveNameTaskEvent: Subject<any>= new Subject();
  txTasktoField: Subject<any>= new Subject();
  txamountAT: Subject<any>= new Subject();
  amountAT:number =0;
  activeNameTask:string ='';

  activateTask(task: Itask){
    this.activateTaskEvent.next(task);
    this.txTasktoField.next(task);

    this.activeNameTask = this.activeNameTask.concat(task.name + ',');
    this.amountAT += 1;
    this.amountActivateTask(this.amountAT);
    this.txActiveNameTaskEvent.next(this.activeNameTask);
  }

  amountActivateTask(value: number){
    this.txamountAT.next(value);
  }
}
