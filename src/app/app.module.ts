import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import {CoreModule} from './core/core.module';
import {FormsModule} from '@angular/forms';

import {AuthService} from './auth/auth.service';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDDXHuyZI9tv1k804t1CFSX8ZUW3X4j2Ro',
  authDomain: 'store-app-b46db.firebaseapp.com',
  databaseURL: 'https://store-app-b46db.firebaseio.com',
  projectId: 'store-app-b46db',
  storageBucket: '',
  messagingSenderId: '1042422698939',
  appId: '1:1042422698939:web:4ce90687ade91bde0c6a9e'
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
