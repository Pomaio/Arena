import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from '../../model/iuser';
import {map} from 'rxjs/operators';

const BASE_URL = 'https://aren-f.firebaseio.com';
interface IuserDto {
  [id: string]: Iuser;
}

@Injectable()
export class AutorisationHttpService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<Iuser[]> {
    return this.http
      .get<IuserDto>(`${BASE_URL}/user.json`)
      .pipe(
        map(data =>
          Object.entries(data).map(([id, user]) => ({id, ...user})),
          ),
      );
  }

  addUser(newUser: Iuser): Observable<string> {
    return this.http
      .post<{name: string}>(`${BASE_URL}/user.json`, newUser)
      .pipe(
        map(({name}) => name)
      );
  }
}
