import {Component, Input, OnInit} from '@angular/core';
import {Itask} from '../../../model/itask';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task: Itask;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      answer: ['']
    });
  }
  Submit(element) {
    console.log(this.form.value);
  }
}
