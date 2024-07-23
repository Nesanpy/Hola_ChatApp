import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInfiniteScroll, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.page.html',
  styleUrls: ['./chat-rooms.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonLabel, IonAvatar, IonItem, IonList, IonInfiniteScroll, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatRoomsPage implements OnInit {
  items: string[] = [];

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Chat Grupal ${count + i}`);
    }
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  setChatTitle(title: string) {
    localStorage.setItem('chatTitle', title);
  }

}
