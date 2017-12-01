import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {User} from "../common/model/user";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UserService{

  constructor(private httpClient: HttpClient) {
  }

  getUser(pageNow, pageSize): Observable<any> {
    let userList = [];
    return this.httpClient.post('/api/users', {});
  }

  addUser(user:User): Observable<any>{
    return this.httpClient.post('/api/users/add',user);
  }

  delUser(id): Observable<any>{
    return this.httpClient.post('/api/users/delete', {});
  }
}
