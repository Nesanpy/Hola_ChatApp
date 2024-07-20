import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-succesful-onb',
  templateUrl: './successful-onb.page.html',
  styleUrls: ['./successful-onb.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SuccesfulOnbPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
