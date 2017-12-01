import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {RoleComponent} from "../role.component";
import {GloableModule} from "../../gloable.module";
import {PermsGuard} from "../../common/provider/perms.guard";

const ROUTES = [
  {
    path: 'roles',
    component: RoleComponent,
    canActivate: [PermsGuard],
    data: {
      title: '角色管理',
      url: 'org'
    }
  },
];

@NgModule({
  declarations: [
    RoleComponent
  ],
  imports: [
    GloableModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class RoleManageModule { }
