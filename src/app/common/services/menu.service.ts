import {Injectable} from '@angular/core';
import {Menu} from "../model/menu";

@Injectable()
export class MenuService {

  constructor() {
  }

  //转换为层级结构
  private array2Nodes(nodesArray) {
    let i, l,
      key = "id",
      parentKey = "pId",
      childKey = "children";
    if (!key || key == "" || !nodesArray) return [];

    if (nodesArray instanceof Array) {
      let r = [];
      let tmpMap = {};
      for (i = 0, l = nodesArray.length; i < l; i++) {
        tmpMap[nodesArray[i][key]] = nodesArray[i];
      }
      for (i = 0, l = nodesArray.length; i < l; i++) {
        if (tmpMap[nodesArray[i][parentKey]] && nodesArray[i][key] != nodesArray[i][parentKey]) {
          if (!tmpMap[nodesArray[i][parentKey]][childKey])
            tmpMap[nodesArray[i][parentKey]][childKey] = [];
          tmpMap[nodesArray[i][parentKey]][childKey].push(nodesArray[i]);
        } else {
          r.push(nodesArray[i]);
        }
      }
      return r;
    } else {
      return [nodesArray];
    }
  }

  getMenus() {
    let menuList = [
      new Menu(1, null, '系统权限管理', 'anticon anticon-lock', ''),
      new Menu(2, 1, '机构管理', 'anticon anticon-team', 'org'),
      new Menu(3, 1, '用户管理', 'anticon anticon-user', 'users'),
      new Menu(4, 1, '角色管理', 'anticon anticon-idcard', 'roles'),
      new Menu(5, 1, '资源管理', 'anticon anticon-database', 'resources'),
    ];
    return this.array2Nodes(menuList);
  }

}
