/*import { Injectable } from '@angular/core';
import { DatabaseInitializationService } from './database.init.service';
import { Statement, Database } from 'sql.js';

@Injectable({
  providedIn: 'root'
})
export class BrowserDatabaseService {
  private db: Database | undefined;

  constructor(private dbInitService: DatabaseInitializationService) {
    this.dbInitService.initDb().then(() => {
        this.db = this.dbInitService.getDatabase();
        if (!this.db) {
          throw new Error('La base de datos no está inicializada.');
        }
      });
    }

    async addUser(usuario: string, correo: string, contrasenha: string) {
        const insertQuery = `INSERT INTO usuario (usuario, correo, contrasenha) VALUES (?, ?, ?)`;
        this.db?.run(insertQuery, [usuario, correo, contrasenha]);
    }

    async usuarioExiste(username: string): Promise<boolean> {
    const query = `SELECT COUNT(*) AS count FROM usuario WHERE usuario = ?`;
    const stmt: Statement | undefined = this.db?.prepare(query);

    if (!stmt) {
      throw new Error('No se pudo preparar la consulta SQL.');
    }

    try {
      const result = stmt.get([username]);
      if (!result || typeof result[0] !== 'number') {
        return false;
      }
      const count = result[0] as number;
      return count > 0;
    } catch (error) {
      console.error('Error al verificar la existencia del usuario:', error);
      throw new Error('Error al verificar la existencia del usuario.');
    }
  }
}*/