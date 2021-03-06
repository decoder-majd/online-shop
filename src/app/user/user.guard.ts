import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, Route} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {DataService} from '../auth/login/Data.service';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean| UrlTree {
    if (this.authService.isLoggedIn && this.authService.route === 'user') {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }

}
