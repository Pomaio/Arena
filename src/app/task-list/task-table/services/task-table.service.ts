import { Injectable } from '@angular/core';
import {Itopic} from '../../../model/itopic';
import {Iuser} from '../../../model/iuser';
import {Subject} from 'rxjs';

@Injectable()

export class TaskTableService {

  username: Iuser;
  txEvent: Subject<any>= new Subject();
  statusTask: Subject<any>= new Subject();
  txTasktoField: Subject<any>= new Subject();

  constructor(){
    this.txEvent.subscribe(username =>{
      this.username = username;
      if(this.username.activeTask != undefined) {
        this.statusTask.next(this.username.activeTask);}
    })
  }

  getData(): Itopic[] {
    return [
      {
        name: "kek",
        tasks: [
          {
            name: 'Первая1',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая1',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья1',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая1',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая1',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek1",
        tasks: [
          {
            name: 'Первая2',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая2',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья2',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая2',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая2',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek2",
        tasks: [
          {
            name: 'Первая3',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая3',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья3',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая3',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая3',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek3",
        tasks: [
          {
            name: 'Первая4',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая4',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья4',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая4',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая4',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek44242",
        tasks: [
          {
            name: 'Первая5',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая5',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья5',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая5',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая5',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      }
    ];
  }
}
