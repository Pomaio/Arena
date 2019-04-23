import { Component, OnInit } from '@angular/core';
import {Iuser} from '../model/iuser';
import {AutorisationService} from '../autorisation/services/autorisation.service';
import {ServiceRxTxService} from '../services/service-rx-tx.service';
import {AutorisationHttpService} from '../autorisation/services/autorisation-http.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  User: Iuser;
  deAuth: boolean = false;

  constructor(private autservice: AutorisationService,
              private autorisationHttpService: AutorisationHttpService,
              private  _service: ServiceRxTxService) {

  this.autservice.invokeEvent.subscribe(user => {
    this.User = user;
    this.deAuth=false;
    this._service.txUser.next(this.User);

  });

  this._service.txActiveNameTaskEvent.subscribe((name) => {
      if(this.User) { // костыль

        if(this.User.activeTask != undefined){
          this.User.activeTask.push(name);
        } else { this.User.activeTask = [name]}
        this.autorisationHttpService.changeUser(this.User).subscribe();
        this._service.txUser.next(this.User);
      }
  })

  }

  ngOnInit() {}

  deAut() {
    this.deAuth = true;
  }
}
