import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Itask} from '../model/itask';

@Injectable({
  providedIn: 'root'
})
export class ServiceRxTxService {
  activateTaskEvent: Subject<any>= new Subject();

  activateTask(task: Itask){
    this.activateTaskEvent.next(task);
  }
}
