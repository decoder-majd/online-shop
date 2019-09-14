import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {RestApiService} from '../shared/rest-api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  user: User;
  route = 'login';
  private s: any;
  constructor(public  afAuth: AngularFireAuth, public  router: Router, private restApi: RestApiService) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async  login(email: string, password: string) {
    this.getRole(email);
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password);

      await this.router.navigate([this.route]);
    } catch (e) {
      alert('Error!'  +  e.message);
    }
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    await this.router.navigate(['login']);
  }
  get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  }
  getRole(email: string) {
    return this.restApi.getRole().subscribe((data: {}) => {
      this.route = data[email];
    });
  }
}
