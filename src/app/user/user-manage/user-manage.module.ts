import {NgModule} from '@angular/core';
import {UserComponent} from "../user.component";
import {UserRoutingModule} from "./user-routing.module";
import {UserService} from "../user.service";
import {GloableModule} from "../../gloable.module";

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    GloableModule,
    UserRoutingModule,
  ],
  providers:[
    UserService
  ]

})
export class UserManageModule { }
