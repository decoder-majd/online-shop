import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import {catchError, retry} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  apiURL = 'http://localhost:3000';

  constructor(private  authService: AuthService, private http: HttpClient , private router: Router) { }

  ngOnInit() {
    console.log(this.authService.route);
    if (this.authService.user !== null) {
      this.router.navigate([this.authService.route]);
    }
  }

}
