import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../model/itask';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TaskTableService} from '../../task-table/services/task-table.service';

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
  status: boolean = true;
  constructor(private formBuilder: FormBuilder,  private taskTS: TaskTableService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      answer: ''
    });
    this.realPrice = this.task.price * 2;

    if(this.taskTS.username != undefined) {
      this.activeTask = this.taskTS.username.activeTask.filter((name) => (name.slice(0, -2) == this.task.name));
      this.attempt = parseInt(this.activeTask[0].slice(-1));
    }
  }
  ngAfterViewInit(){

  }
  Submit() {
    this.CheckAnswer(this.form.value.answer);
  }
  CheckAnswer(answer: string){
    if(answer == this.task.answer){
      console.log("красава");
      // тут типа отправка в сайдбар выполнено
      this.status =false;
    }else{
      this.realPrice /= 2;
      this.attempt +=1;
      console.log("no");
    }
    if(this.attempt > 3){
      // тут типа отправка в сайдбар завалено
      this.status = false;
    }
  }
  //тут должна быть фукция отправки
}
