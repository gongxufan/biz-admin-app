import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {UserComponent} from "../user.component";
import {PermsGuard} from "../../common/provider/perms.guard";

const ROUTES = [
  {
    path: 'users',
    component: UserComponent,
    canActivate: [PermsGuard],
    data: {
      title: '用户管理',
      url: 'users',
    }

  },
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
