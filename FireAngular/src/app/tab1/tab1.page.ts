import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection  } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemsCollection : AngularFirestoreCollection<any>
  items: Observable<any[]> //mode asynchron

  constructor(public firestore: AngularFirestore) {


    this.itemsCollection = this.firestore.collection<any>('Items')

    this.items = this.itemsCollection.valueChanges();
     }

}
