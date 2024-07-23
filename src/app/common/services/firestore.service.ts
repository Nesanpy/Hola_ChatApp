import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, setDoc, query, where, getDocs, addDoc, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore = inject(Firestore);

  constructor() { }

  getCollectionChanges<tipo>(path: string){
    const itemCollection = collection(this.firestore, path);
    return collectionData(itemCollection) as Observable<tipo[]>;
  }

  createDocumentID(data: any, enlace: string, idDoc: string){
    const document = doc(this.firestore, `${enlace}/${idDoc}`);
    return setDoc(document, data);
  }
  
  async documentExists(path: string, id: string): Promise<boolean> {
    const docRef = doc(this.firestore, `${path}/${id}`);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  }

  async loginUser(correo: string, contrasenha: string): Promise<boolean> {
    try {
      const usersCollectionRef = collection(this.firestore, 'Usuario');
      const q = query(usersCollectionRef, where('correo', '==', correo));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        const userData = userDoc.data();
        if (userData && userData['contrasenha'] === contrasenha) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw new Error('Error al iniciar sesión.');
    }
  }

  async sendMessage(chatId: string, mensaje: string): Promise<void> {
    try {
      const messagesCollectionRef = collection(this.firestore, `Mensaje/${chatId}/mensajes`);
      await addDoc(messagesCollectionRef, {
        mensaje: mensaje,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      throw new Error('Error al enviar el mensaje.');
    }
  }

  getMessages(chatId: string): Observable<any[]> {
    const messagesCollectionRef = collection(this.firestore, `Mensaje/${chatId}/mensajes`);
    const messagesQuery = query(messagesCollectionRef, orderBy('timestamp', 'asc'));
    return collectionData(messagesQuery, { idField: 'id' }) as Observable<any[]>;
  }
}
