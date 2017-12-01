import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./common/services/http.service";
import {MenuService} from "./common/services/menu.service";
import {PermsGuard} from "./common/provider/perms.guard";
import {LoginService} from "./common/services/login.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot({
      extraFontName: 'anticon',
      extraFontUrl: './assets/fonts/iconfont'
    }),
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  providers: [MenuService, PermsGuard, LoginService,HttpService],
})
export class GloableModule {
}
