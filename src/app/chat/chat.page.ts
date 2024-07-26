import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, Platform, IonSpinner } from '@ionic/angular/standalone';
import { Keyboard } from '@capacitor/keyboard';
import { Observable } from 'rxjs';
import { FirestoreService } from '../common/services/firestore.service';
import { waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {

  chatTitle: string = 'Chat Grupal';
  keyboardVisible: boolean = false;
  mensaje: string = '';
  mensajes$: Observable<any[]>;
  cargando: boolean = false;

  constructor(private platform: Platform, private firestoreService: FirestoreService) { }

  ngOnInit() {
    const storedTitle = localStorage.getItem('chatTitle');
    if (storedTitle) {
      this.chatTitle = storedTitle;
    }
    this.cargarMensajes();

    if (this.platform.is('hybrid')) {
      Keyboard.addListener('keyboardDidShow', (info) => {
        this.keyboardVisible = true;
        document.body.style.setProperty('--keyboard-offset', `${info.keyboardHeight}px`);
      });

      Keyboard.addListener('keyboardDidHide', () => {
        this.keyboardVisible = false;
        document.body.style.setProperty('--keyboard-offset', `0px`);
      });
    }
  }

  async cargarMensajes() {
    this.cargando = true;
    await sleep(250);
    try {
      this.mensajes$ = this.firestoreService.getMessages(this.chatTitle);
    } catch (error) {
      console.error('Error al cargar mensajes', error);
    }
    this.cargando = false;
  }

  ngOnDestroy() {
    if (this.platform.is('hybrid')) {
      Keyboard.removeAllListeners();
    }
  }

  sendMessage(): void {
    if (this.mensaje.trim()) {
      this.firestoreService.sendMessage(this.chatTitle, this.mensaje)
        .then(() => {
          this.mensaje = '';
        })
        .catch(error => {
          console.error('Error al enviar el mensaje:', error);
        });
    }
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}