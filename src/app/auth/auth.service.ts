import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {Observable, throwError} from 'rxjs';
import {DataService} from './login/Data.service';
import {catchError, retry} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  apiURL = 'http://localhost:3000';
  user: User;
  email = '';
  roles: any = {};
  route = '' ;
   constructor(public  afAuth: AngularFireAuth, public  router: Router, private http: HttpClient) {
     this.getRequest().subscribe((data: {}) => {
       this.roles = data;
       localStorage.setItem('Roles', JSON.stringify(this.roles));
     });

     this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.email = this.user.email;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
   get  isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    this.user = user;
    if (user !== null){this.email = this.user.email;}

    const  roles  =  JSON.parse(localStorage.getItem('Roles'));
    if (user === null) {return false; }
    this.route =  roles[user.email];

    return true;
  }

  private s: any;
  async  login(email: string, password: string) {
    this.getRole(email);
    try {
      await  this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.email = email;
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
  async getRole(email: string) {
    return this.getRequest().subscribe((data: {}) => {
      this.route = data[email];
    });
  }

  getRequest(): Observable<DataService> {
    return this.http.get<DataService>(this.apiURL + '/Data')
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
