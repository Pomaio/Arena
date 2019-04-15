import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from '../../model/iuser';
import {map} from 'rxjs/operators';

const BASE_URL = 'https://aren-f.firebaseio.com';

@Injectable()
export class AutorisationHttpService {

  constructor(private http: HttpClient) { }

  getPurchases() {
    this.http.get(`${BASE_URL}/purchases.json`).subscribe(() => {});
  }
  addUsers(newUser: Iuser): Observable<string> {
    return this.http
      .post<{name: string}>(`${BASE_URL}/users.json`, newUser)
      .pipe(
        map(({name}) => name)
      );
  }
}
