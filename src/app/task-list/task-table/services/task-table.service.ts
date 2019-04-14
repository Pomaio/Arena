import { Injectable } from '@angular/core';
import {Itask} from '../../../model/itask';

@Injectable({
  providedIn: 'root'
})
export class TaskTableService {

  getData(): Itask[] {
    return [
      {
        title: 'Первая',
        price: 100,
        content: 'кккк',
        answer: ''
      },
      {
        title: 'Вторая',
        price: 200,
        content: 'кккк',
        answer: ''
      },
      {
        title: 'Третья',
        price: 300,
        content: 'ккккк',
        answer: ''
      },
      {
        title: 'Четвертая',
        price: 400,
        content: 'кккк',
        answer: ''
      },
      {
        title: 'Пятая',
        price: 500,
        content: 'кккк',
        answer: ''
      },
    ];
  }
}
