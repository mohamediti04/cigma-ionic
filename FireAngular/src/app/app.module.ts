
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
  ,AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

export const firebaseConfig =  {

  apiKey : "*************************",

  authDomain : "************.firebaseapp.com",

  databaseUrl : "https://**************.firebaseio.com",

  projectId:"***********************",

  storageBucket : "******************",

  messagingSenderId : "*******************",

  appId : "*************************"

};
