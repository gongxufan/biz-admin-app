import {Routes} from "@angular/router";
import {LoginComponent} from "../components/login/login.component";
import {PermsGuard} from "../provider/perms.guard";
import {OrgComponent} from "../../org/org.component";

/**
 * 系统路由和菜单配置
 */
export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/org',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: '用户登录',
      url: 'login',
    }
  },
  {
    path: 'org',
    component: OrgComponent,
    canActivate: [PermsGuard],
    data: {
      title: '机构管理',
      url: 'org'
    }
  },
  {
    path: 'users',
    loadChildren: 'app/user/user-manage/user-manage.module#UserManageModule'
  },
  {
    path: 'roles',
    loadChildren: 'app/role/role-manage/role-manage.module#RoleManageModule'
  },
  {
    path: 'resources',
    loadChildren: 'app/resource/resource-manage/resource-manage.module#ResourceManageModule'
  },

];
