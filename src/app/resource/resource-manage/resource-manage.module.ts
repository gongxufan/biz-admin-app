import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ResourceComponent} from "../resource.component";
import {GloableModule} from "../../gloable.module";
import {PermsGuard} from "../../common/provider/perms.guard";


const ROUTES = [
  {
    path: 'resources',
    component: ResourceComponent,
    canActivate: [PermsGuard],
    data: {
      title: '资源管理',
      url: 'resources'
    }
  },
];

@NgModule({
  declarations: [
    ResourceComponent
  ],
  imports: [
    GloableModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ResourceManageModule { }
