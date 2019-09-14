import {Injectable, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import {RestApiService} from '../shared/rest-api.service';
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
  route = 'login';
  private s: any;
  constructor(public  afAuth: AngularFireAuth, public  router: Router, private http: HttpClient) {
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
