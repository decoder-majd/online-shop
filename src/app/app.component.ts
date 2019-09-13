import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'online-shop';

  ngOnInit(): void {
firebase.initializeApp({
  apiKey: 'AIzaSyCpgS0gQ4Sjqd5ef1BoN7JxWsdoAW_3VnQ',
  authDomain: 'finalproject-68f0b'
});
  }
}
