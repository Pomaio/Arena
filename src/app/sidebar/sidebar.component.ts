import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Iuser} from '../model/iuser';
import {AutorisationService} from '../autorisation/services/autorisation.service';
import {ServiceRxTxService} from '../services/service-rx-tx.service';
import {AutorisationHttpService} from '../autorisation/services/autorisation-http.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit  {

  User: Iuser;
  deAuth: boolean = false;
  statusload: boolean = true;
  activeElement: any;
  classActiveElement: string = 'card bg-secondary mb-3';

  constructor(private autservice: AutorisationService,
              private autorisationHttpService: AutorisationHttpService,
              private  _service: ServiceRxTxService,
              private auth: AuthService) {
  this.autservice.loaderEvent.subscribe((status) => {
    this.statusload = status;
    this.switchLoader(status);
  });
  this.autservice.invokeEvent.subscribe(user => {
    this.User = user;
    this.deAuth = false;
    this._service.txUser.next(this.User);
    this.statusload=true;
    this.switchLoader(true);
    this.changeAutStatus(true);
  });

  this._service.txActiveNameTaskEvent.subscribe((name) => {
      if(this.User) { // костыль
        if(this.User.activeTask != undefined){
          this.User.activeTask.push(name);
        } else { this.User.activeTask = [name]}
        this.autorisationHttpService.changeUser(this.User).subscribe();
        this._service.txUser.next(this.User);
      }
  });
  this._service.resolveTaskEvent.subscribe((task) => {
    if(this.User.completeTask != undefined){
      this.User.completeTask.push(task.name);
    } else { this.User.completeTask = [task.name]}
    this.User.points += task.price;
    this.User.activeTask = this.User.activeTask.filter((name) => {return (task.name != name.slice(0, -2));});
    this._service.paintedTaskResolve.next(task.name);
    this.autorisationHttpService.changeUser(this.User).subscribe();
    this._service.txUser.next(this.User);
  });
  this._service.failTaskEvent.subscribe((task) => {
    if(this.User.failTask != undefined){
      this.User.failTask.push(task.name);
    } else { this.User.failTask = [task.name]}
    this.User.activeTask = this.User.activeTask.filter((name) => {return (task.name != name.slice(0, -2));});
    this._service.paintedTaskFail.next(task.name);
    this.autorisationHttpService.changeUser(this.User).subscribe();
    this._service.txUser.next(this.User);
  })
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    this.changeAutStatus(false);
  }
  deAut() {
    this.deAuth = true;
    this.changeAutStatus(false);
  }
  changeAutStatus(status: boolean){
    this.auth._user.next(status);
  }
  switchLoader(status: boolean){
    this.activeElement = document.getElementById("loader");
    this.activeElement.className = (status !== true) ? this.classActiveElement : this.classActiveElement+' loaderOFF';
  }
}
