import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //登录框可见控制
  isVisible = true;
  //表单校验器
  validateForm: FormGroup;

  //提交登录处理
  _submitForm() {
    for (const i in this.validateForm.controls) {
      if (!this.validateForm.controls[i].valid)
        return;
    }

    //调用登录接口
    this.loginService.login(this.validateForm.value.userName, this.validateForm.value.password)
      .subscribe(data => {
        //登录成功
        if (this.httpService.dealHttpResponse(data)) {
          this.messageService.create('info', data.message);
          this.isVisible = false;
          this.router.navigateByUrl('');
        }
      });
  }

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router
              , private httpService: HttpService,private messageService: NzMessageService) {
  }

  ngOnInit() {.8
    //校验字段设置
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

}
