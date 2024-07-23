import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonIcon, IonSpinner } from '@ionic/angular/standalone';
import { FirestoreService } from '../common/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonIcon, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage {

  correo: string = '';
  contrasenha: string = '';
  loginError: boolean = false;
  cargando: boolean = false;

  constructor( private firestoreService: FirestoreService) {}

  async login() {
    this.cargando = true;
    
    try {
      const isLoggedIn = await this.firestoreService.loginUser(this.correo, this.contrasenha);
      if (isLoggedIn) {
        console.log('Login successful');
        window.location.href = '/chat-rooms';
      } else {
        this.loginError = true;
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.loginError = true;
    }
    
    this.cargando = false;
  }

  onUsuarioChange() {
    this.loginError = false;
  }
  
}
