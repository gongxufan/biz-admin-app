import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
/**
 * 参考：
 * https://toddmotto.com/dynamic-page-titles-angular-2-router-events
 * https://angular.cn/guide/router
 */
export class BreadcrumbComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  routerPath = [];

  ngOnInit() {
    this.router.events.filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .filter((route) => route.outlet === 'primary')
      .subscribe((route) => {
        this.routerPath = [];
        //遍历当前路由树
        let pre = route.firstChild;
        if(pre.component){
          while (pre) this.routerPath.push(pre.routeConfig), pre = pre.firstChild;
          return route
        }
      });
  }

}
