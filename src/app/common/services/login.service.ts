import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {catchError} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class LoginService {

  constructor(private  httpClient: HttpClient) {
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  login(username, password): Observable<any> {
    return this.httpClient.post("/api/ajaxLogin",
      {username: username, password: password})
      .pipe(catchError(this.handleError('login', 'fail')));
  }
}
