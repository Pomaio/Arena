import { Component, OnInit } from '@angular/core';
import {Iuser} from '../model/iuser';
import {AutorisationService} from '../autorisation/services/autorisation.service';
import {ServiceRxTxService} from '../services/service-rx-tx.service';
import {AutorisationHttpService} from '../autorisation/services/autorisation-http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  User: Iuser;
  deAuth: boolean = false;
  nameActive:string = '';

  constructor(private autservice: AutorisationService,
              private autorisationHttpService: AutorisationHttpService,
              private  _service: ServiceRxTxService) {

  this.autservice.invokeEvent.subscribe(user => {
    this.User = user;
    this.deAuth=false;
  });
  this._service.txActiveNameTaskEvent.subscribe((name) => {
      this.nameActive = name;
      this.User.activeTask = name;
    this.autorisationHttpService.changeUser(this.User).subscribe( user=>{});
  })

  }

  ngOnInit() {}

  deAut() {
    this.deAuth = true;
  }
}
