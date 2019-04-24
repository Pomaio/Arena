import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../../model/itask';
import {ServiceRxTxService} from '../../../../services/service-rx-tx.service';
import {TaskTableService} from '../../services/task-table.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, AfterViewInit{

  @Input() task: Itask;
  activeElement: any;
  amountactiveElement: number = 0;
  statusWork: boolean = true;

  constructor(private _service: ServiceRxTxService,
              private taskTS: TaskTableService) {
    this.taskTS.statusTask.subscribe(amount => {
      this.amountactiveElement = amount.length;
    });
    this._service.paintedTaskResolve.subscribe( (name) => {
      if(this.task.name == name){
        this.paintTask(this.task,"complete");
      }
    });
    this._service.paintedTaskFail.subscribe( (name) => {
      if(this.task.name == name){
        this.paintTask(this.task,"fail");
      }
    });
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
    if(this.taskTS.username != undefined) {
      if(this.taskTS.username.activeTask != undefined &&
        this.taskTS.username.activeTask.some((name) => (name.slice(0, -2) == this.task.name))){
          this.activateTask(this.task);
          this.taskTS.txTasktoField.next(this.task);
      }
      if(this.taskTS.username.completeTask != undefined &&
        this.taskTS.username.completeTask.some((name) => (name == this.task.name))){
        this.paintTask(this.task,"complete");
        this.statusWork = false;
      }
      if(this.taskTS.username.failTask != undefined &&
        this.taskTS.username.failTask.some((name) => (name == this.task.name))){
        this.paintTask(this.task,"fail");
        this.statusWork = false;
      }
    }
  }
  onClick() {
    if(this.amountactiveElement < 3 && this.statusWork) {
        this.activateTask(this.task);
        this._service.activateTask(this.task);
      }
  }
  activateTask(task: Itask){
      this.activeElement = document.getElementById(task.name);
      this.activeElement.className = 'active';
      this.statusWork = false;
  }

  paintTask(task: Itask,status: string) {
    this.activeElement = document.getElementById(task.name);
    this.activeElement.className = (status === "complete")? 'resolve': 'reject';
    this.statusWork = false;
  }
}
