import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgainstUnAuthedGuardGuard implements CanActivate {

  constructor(private router:Router,) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    /*
    return this.authService.UserData
      .pipe(
        map(user=>user!==null),
        tap(value => {
          if (!value){
            this.router.navigateByUrl('/login').then();
            return value;
          }else {
            return value
          }
        })
      )*/
  }

}
