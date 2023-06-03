import { Component } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public firestore: AngularFirestoreModule) {}

}
