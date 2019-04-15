import { Injectable } from '@angular/core';
import {Itopic} from '../../../model/itopic';

@Injectable({
  providedIn: 'root'
})
export class TaskTableService {

  getData(): Itopic[] {
    return [
      {
      name: "kek",
      tasks: [
      {
        name: 'Первая',
        price: 100,
        content: 'кккк',
        answer: ''
      },
      {
        name: 'Вторая',
        price: 200,
        content: 'кккк',
        answer: ''
      },
      {
        name: 'Третья',
        price: 300,
        content: 'ккккк',
        answer: ''
      },
      {
        name: 'Четвертая',
        price: 400,
        content: 'кккк',
        answer: ''
      },
      {
        name: 'Пятая',
        price: 500,
        content: 'кккк',
        answer: ''
      },]
      },
      {
        name: "kek1",
        tasks: [
          {
            name: 'Первая',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek2",
        tasks: [
          {
            name: 'Первая',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek3",
        tasks: [
          {
            name: 'Первая',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      },
      {
        name: "kek44242",
        tasks: [
          {
            name: 'Первая',
            price: 100,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Вторая',
            price: 200,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Третья',
            price: 300,
            content: 'ккккк',
            answer: ''
          },
          {
            name: 'Четвертая',
            price: 400,
            content: 'кккк',
            answer: ''
          },
          {
            name: 'Пятая',
            price: 500,
            content: 'кккк',
            answer: ''
          },]
      }
    ]
  }
}
