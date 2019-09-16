import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, Route} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean| UrlTree {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    const  role  =  JSON.parse(localStorage.getItem('Roles'));
    if (user !== null && role !== null) {

return this.router.parseUrl(role[user.email]);
    }  else {
      return true;
 }
  }

}
