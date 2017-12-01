import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {HttpService} from "../common/services/http.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //分页参数
  _current = 1;
  _pageSize = 10;
  _total = 1;
  //过度动画
  _loading = true;
  //全选
  _allChecked = false;

  //操作按钮
  _disabledButton = true;
  _indeterminate = false;

  _operating = [false,false,false];
  _checkedNumber = 0;

  //数据源，通过ajax动态更新
  _dataSet = [];

  constructor(private userService: UserService, private httpService: HttpService,private messageService: NzMessageService,) {
  }

  ngOnInit() {
    this._refreshData();
  }


  //刷新checkbox状态
  _refreshCheckStatus() {
    const allChecked = this._dataSet.every(value => value.checked === true);
    const allUnChecked = this._dataSet.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);

    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  }

  //page pageSize改变重新加载数据
  _refreshData(reset = false) {
    if (reset) {
      this._current = 1;
    }
    this._loading = true;

    //调用用户接口
    this.userService.getUser(this._current, this._pageSize).subscribe(res => {
      if (this.httpService.dealHttpResponse(res)) {
        let data = res.data;
        this._loading = false;
        this._total = data.total;
        this._dataSet = data.userList;
        this._checkAll(false);
      }
    });
  };

  //全选或者反选
  _checkAll(value) {
    if (value) {
      this._dataSet.forEach(data => {
        data.checked = true;
      });
    } else {
      this._dataSet.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshCheckStatus();
  };

  //分配角色
  signRole() {
    this._operating[0] = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshData();
      this._operating[0] = false;
    }, 1000);
  };

  //添加用户
  addUser() {
    this._operating[1] = true;
    this.userService.addUser(null).subscribe(data=>{
     if(this.httpService.dealHttpResponse(data)){
       this.messageService.create('info',data.message);
       this._dataSet.forEach(value => value.checked = false);
       this._refreshData();
       this._operating[1] = false;
     }
    });
  }

  //删除用户
  delUser() {
    this._operating[2] = true;
    this.userService.delUser(null).subscribe(data=>{
      if(this.httpService.dealHttpResponse(data)){
        this.messageService.create('info',data.message);
        this._dataSet.forEach(value => value.checked = false);
        this._refreshData();
        this._operating[2] = false;
      }
    })
  }

}
