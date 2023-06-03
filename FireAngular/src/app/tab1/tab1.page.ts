import { Component } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  items: Observable<any[]> //mode asynchron

  constructor(public firestore: AngularFirestoreModule) {

this.items=this.firestore.collection("Items").valueChanges();
  }

}
