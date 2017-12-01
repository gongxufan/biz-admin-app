import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ROUTES} from "./common/model/routes";

/**
 * ng generate module app-routing --flat --module=app
 */


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
