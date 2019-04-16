import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Iuser} from '../model/iuser';

@Injectable()

export class Transmit{
  invokeEvent: Subject<any>= new Subject();

  callToAuth(user: Iuser){
    this.invokeEvent.next(user);}
}

