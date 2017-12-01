import {Injectable} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import {Router} from "@angular/router";

@Injectable()
export class HttpService {

  constructor(private messageService: NzMessageService, private router: Router) {
  }

  dealHttpResponse(data) {
    //成功关闭登录框
    if (data.code == 1000) {
      return true;
    } else if (data.code == 1002) {//超时跳转到登录
      this.messageService.create('error', data.message);
      this.router.navigateByUrl('/login');
    } else {
      this.messageService.create('error', data.message);
    }
    return false;
  }
}
