/*import { Injectable } from '@angular/core';
import * as initSqlJs from 'sql.js';
import { SqlJsStatic, Database } from 'sql.js';

@Injectable({
  providedIn: 'root'
})
export class DatabaseInitializationService {
  private SQL: SqlJsStatic | undefined;
  private db: Database | undefined;
  private dbReady: Promise<void> | null = null;

  constructor() {}

  initDb(): Promise<void> {
    if (this.dbReady) {
      return this.dbReady;
    }

    this.dbReady = new Promise(async (resolve, reject) => {
        try {
          const SQL = await initSqlJs({
            locateFile: (filename: string) => `assets/data/${filename}`
          });
          this.SQL = SQL;
          this.db = new SQL.Database();
          this.createTable();
          console.log('Base de datos SQLite creada correctamente.');
          resolve();
        } catch (error) {
          console.error('Error al inicializar la base de datos:', error);
          reject(error);
        }
      });

      return this.dbReady;
    }

  createTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS usuario (
        id INTEGER PRIMARY KEY NOT NULL,
        usuario TEXT NOT NULL UNIQUE CHECK(usuario <> ''),
        correo TEXT NOT NULL CHECK(correo <> ''),
        contrasenha TEXT NOT NULL CHECK(contrasenha <> '')
      );
    `;
    this.db?.run(createTableQuery);
  }

  getDatabase(): Database | undefined {
    return this.db;
  }
}*/