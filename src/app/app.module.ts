import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './auth/auth.service';
import {AngularFireModule} from '@angular/fire';
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: 'AIzaSyBssYLqH7M52PFKExBZ15v3_6Bybm8Y9jU',
  authDomain: 'testing-19954.firebaseapp.com',
  databaseURL: 'https://testing-19954.firebaseio.com',
  projectId: 'testing-19954',
  storageBucket: '',
  messagingSenderId: '378879944703',
  appId: '1:378879944703:web:48e03e577bea50c67de9ca'
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {  firebase.initializeApp(firebaseConfig);
  }
}
