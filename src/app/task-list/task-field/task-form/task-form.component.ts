import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../model/itask';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TaskTableService} from '../../task-table/services/task-table.service';
import {ServiceRxTxService} from '../../../services/service-rx-tx.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit, AfterViewInit {

  @Input() task: Itask;
  realPrice: number;
  form: FormGroup;
  activeTask: string[];
  attempt:number;
  saveprice:number;
  status: boolean = true;
  constructor(private formBuilder: FormBuilder,
              private taskTS: TaskTableService,
              private _service: ServiceRxTxService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      answer: ''
    });
    this.realPrice = this.task.price * 2;

    if(this.taskTS.username != undefined) {
      this.activeTask = this.taskTS.username.activeTask.filter((name) => (name.slice(0, -2) == this.task.name));
      this.attempt = parseInt(this.activeTask[0].slice(-1));
      this.realPrice /= Math.pow(2,this.attempt-1);
    }
  }
  ngAfterViewInit(){
    console.log(this.task);
  }
  Submit() {
    this.CheckAnswer(this.form.value.answer);
  }
  CheckAnswer(answer: string){
    if(answer == this.task.answer){
      this.saveprice = this.task.price;
      this.task.price = this.realPrice;
      this._service.resolveTaskEvent.next(this.task); // тут типа отправка в сайдбар выполнено
      this.task.price = this.saveprice;
      this.status =false;
    }else{
      this.realPrice /= 2;
      this.attempt +=1;
    }
    if(this.attempt > 3){
      this._service.failTaskEvent.next(this.task);
      // тут типа отправка в сайдбар завалено
      this.status = false;
    }
  }
  //тут должна быть фукция отправки
}
