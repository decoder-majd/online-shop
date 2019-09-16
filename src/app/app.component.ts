import {Component, Injectable, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthService]
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'online-shop';
constructor(private authService: AuthService) {}
  ngOnInit(): void {
firebase.initializeApp({
  apiKey: 'AIzaSyCpgS0gQ4Sjqd5ef1BoN7JxWsdoAW_3VnQ',
  authDomain: 'finalproject-68f0b'
});

  }
}
