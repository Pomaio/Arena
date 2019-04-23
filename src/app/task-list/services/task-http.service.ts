import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Itopic} from '../../model/itopic';

const BASE_URL = 'https://aren-f.firebaseio.com';
interface IDto {
  [id: string]: Itopic;
}

@Injectable({
  providedIn: 'root'
})
export class TaskHttpService {

  constructor(private http: HttpClient) { }

  getTable(): Observable<Itopic[]> {
    return this.http
      .get<IDto>(`${BASE_URL}/tasks.json`)
      .pipe(
        map(data =>
          Object.entries(data).map(([id, table]) => ({id, ...table})),
        ),
      );
  }

}
