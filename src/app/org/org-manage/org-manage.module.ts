import {NgModule} from '@angular/core';
import {OrgComponent} from "../org.component";
import {GloableModule} from "../../gloable.module";

@NgModule({
  imports: [
    GloableModule,

  ],
  declarations: [OrgComponent],
  exports: [
    OrgComponent
  ]
})
export class OrgManageModule {
}
