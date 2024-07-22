import { inject, Injectable } from '@angular/core';
import { collection, collectionData, doc, Firestore, getDoc, setDoc } from '@angular/fire/firestore';
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
}
