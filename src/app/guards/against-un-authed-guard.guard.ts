import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, tap} from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AgainstUnAuthedGuardGuard implements CanActivate {

  constructor(private router:Router,
              private afAuth:AngularFireAuth,
              private authService:AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
      )
  }

}
