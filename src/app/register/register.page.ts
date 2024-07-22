import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { UsuarioI } from '../common/models/usuarios.models';
import { FirestoreService } from '../common/services/firestore.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage {
  usuario: UsuarioI[] = [];
  usuarioExistente: boolean = false;

  nuevoUsuario: UsuarioI;
  cargando: boolean = false;

  constructor(private firestoreService: FirestoreService) {
    this.initUsuario();
  }

  initUsuario() {
    this.nuevoUsuario = {
      usuario: null,
      correo: null,
      contrasenha: null
    }
  }

  async guardar(){
    this.cargando = true;

    const existe = await this.firestoreService.documentExists('Usuario', this.nuevoUsuario.usuario);
    if (existe) {
      this.usuarioExistente = true;
    } else {
      this.usuarioExistente = false;
      await this.firestoreService.createDocumentID(this.nuevoUsuario, 'Usuario', this.nuevoUsuario.usuario);
      window.location.href = '/successful-onb';
    }

    this.cargando = false;
  }

  onUsuarioChange() {
    this.usuarioExistente = false;
  }
}