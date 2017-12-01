import {Component} from '@angular/core';
import {Menu} from "./common/model/menu";
import {MenuService} from "./common/services/menu.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //滑动菜单是否收起
  _isCollapsed = false;
  //是否显示log
  _isShowLogo = true;

  menuList:Array<Menu> = [];
  constructor(private menuService :MenuService) { }

  ngOnInit() {
    this.menuList = this.menuService.getMenus();
  }
  notifyLogoState(nzCollapsed) {
    if(nzCollapsed)
      this._isShowLogo = false;
    else
      this._isShowLogo = true;
  }
}
