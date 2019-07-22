import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _user: Subject<any>= new Subject();
  status: boolean = false;

  constructor(){
    this._user.subscribe((cond) =>{
      this.status = cond;
    })
  }

}
