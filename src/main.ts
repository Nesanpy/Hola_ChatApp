import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({"projectId":"hola-chatapp-2df4d","appId":"1:330998031370:web:09a1a8a8e8d8923448abf3","databaseURL":"https://hola-chatapp-2df4d-default-rtdb.firebaseio.com","storageBucket":"hola-chatapp-2df4d.appspot.com","apiKey":"AIzaSyDuf_RR1MZxMqd0L0kCJ_hpX93zSJppEus","authDomain":"hola-chatapp-2df4d.firebaseapp.com","messagingSenderId":"330998031370"})),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"hola-chatapp-2df4d","appId":"1:330998031370:web:09a1a8a8e8d8923448abf3","databaseURL":"https://hola-chatapp-2df4d-default-rtdb.firebaseio.com","storageBucket":"hola-chatapp-2df4d.appspot.com","apiKey":"AIzaSyDuf_RR1MZxMqd0L0kCJ_hpX93zSJppEus","authDomain":"hola-chatapp-2df4d.firebaseapp.com","messagingSenderId":"330998031370"})),
    provideDatabase(() => getDatabase()),
  ],
});