import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
//import { DatabaseInitializationService } from '../database.init.service';

@Component({
  selector: 'app-home',
  templateUrl: 'welcome.html',
  styleUrls: ['welcome.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor(/*private dbServiceInit: DatabaseInitializationService*/) {}

  /*async ngOnInit() {
    await this.dbServiceInit.initDb();
  }*/
}
