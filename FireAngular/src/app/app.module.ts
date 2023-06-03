
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseConfig = {

  apiKey: "AIzaSyA_AxPb38H6PGKZpYB6hIJItogD5i7Bf9g",

  authDomain: "angulrfire-c4798.firebaseapp.com",

  databaseURL: "https://angulrfire-c4798-default-rtdb.firebaseio.com",

  projectId: "angulrfire-c4798",

  storageBucket: "angulrfire-c4798.appspot.com",

  messagingSenderId: "693189337537",

  appId: "1:693189337537:web:033d3038536783767b0f40",

  measurementId: "G-V2LFW8TX4M"

}
export class AppModule {}
