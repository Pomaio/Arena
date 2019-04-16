import { Component, OnInit } from '@angular/core';
import {Iuser} from '../model/iuser';
import {AutorisationService} from '../autorisation/services/autorisation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  User: Iuser ;

  constructor(private _service: AutorisationService) {

  this._service.invokeEvent.subscribe(user=>{
    this.User=user;});
  }

  ngOnInit() {}

}
