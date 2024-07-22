import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
//import { BrowserDatabaseService } from '../database.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  usuario: string = '';
  correo: string = '';
  contrasenha: string = '';
  usuarioExistente: boolean = false;

  constructor(/*private dbService: BrowserDatabaseService*/) { }

  ngOnInit() {
  }

  /*async registrarUsuario() {
    try {
        const existeUsuario = await this.dbService.usuarioExiste(this.usuario);
        if (existeUsuario) {
            console.error('El usuario ingresado ya existe:', this.usuario);
            this.usuarioExistente = true;
        } else {
            await this.dbService.addUser(this.usuario, this.correo, this.contrasenha);
            console.log('Usuario registrado:', this.usuario);
            //window.location.href = '/successful-onb';
        }
    } catch (error: any) {
        console.error('Error al insertar usuario:', error);
    }
  }*/

  onUsuarioChange() {
    this.usuarioExistente = false;
  }
}