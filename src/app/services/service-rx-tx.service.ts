import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Itask} from '../model/itask';

@Injectable({
  providedIn: 'root'
})
export class ServiceRxTxService {
  activateTaskEvent: Subject<any>= new Subject();
  txActiveNameTaskEvent: Subject<any>= new Subject();
  activeNameTask:string ='';

  activateTask(task: Itask){
    this.activateTaskEvent.next(task);
    this.activeNameTask = this.activeNameTask.concat(task.name + ',');
    this.txActiveNameTaskEvent.next(this.activeNameTask);
  }
}
