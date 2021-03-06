import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DirverGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean| UrlTree {
    if (this.authService.isLoggedIn && this.authService.route === 'driver') {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }}
