import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from "../services/login.service";

/**
 *加入权限校验ｉ
 */
@Injectable()
export class PermsGuard implements CanActivate {
  constructor(private router: Router,private loginService:LoginService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //this.router.navigateByUrl('/login');
    return true;
  }

}
