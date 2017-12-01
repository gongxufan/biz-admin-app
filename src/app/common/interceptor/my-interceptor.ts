import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //拦截器的对象都是不可变的，需要clone
    let header = new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8',
      //设置ajax请求头
      'X-Requested-With': 'XMLHttpRequest'
    });

    const newReq = req.clone({headers: header});
    // Pass on the cloned request instead of the original request.
    return next.handle(newReq);
  }
}
