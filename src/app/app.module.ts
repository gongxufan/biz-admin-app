import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {BreadcrumbComponent} from './common/components/breadcrumb/breadcrumb.component';
import {LoginComponent} from './common/components/login/login.component';
import {GloableModule} from "./gloable.module";
import {UserManageModule} from "./user/user-manage/user-manage.module";
import {RoleManageModule} from "./role/role-manage/role-manage.module";
import {ResourceManageModule} from "./resource/resource-manage/resource-manage.module";
import {OrgManageModule} from "./org/org-manage/org-manage.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MyInterceptor} from "./common/interceptor/my-interceptor";
import {NZ_LOCALE, zhCN} from "ng-zorro-antd";


@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GloableModule,
    OrgManageModule,
    UserManageModule,
    RoleManageModule,
    ResourceManageModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    {
      provide: NZ_LOCALE,
      useValue: zhCN}
  ]
})
export class AppModule {
}
