import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AutorisationHttpService} from '../autorisation/services/autorisation-http.service';
import {Iuser} from '../model/iuser';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit, AfterViewInit  {

  constructor(private autHttpSer: AutorisationHttpService,) { }

  users: Iuser[];
  activeElement: any;

  ngOnInit() {
    this.autHttpSer.getUser().subscribe(array => {
      array.forEach((user) => RateComponent.initUser(user));
      RateComponent.sortUser(array);
      this.users = array;
    });
  }
  static initUser(user: Iuser){
    if(user.failTask == undefined) user.failTask = [];
    if(user.completeTask == undefined) user.completeTask = [];
    if(user.activeTask == undefined) user.activeTask = [];
  }
  static sortUser(users: Iuser[]){
    function sort_point(first,second) {
      if (first.points < second.points) return 1;
      if (first.points > second.points) return -1;
    }

    users.sort(sort_point);
  }
  ngAfterViewInit(){
    this.activeElement = document.querySelector('tbody > tr');
    console.log(this.activeElement);
    // this.activeElement.className = "table-success"
  }
}
