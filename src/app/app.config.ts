import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    
      
      provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId": "friendlychat-2e2ba","appId": "1:327884212767:web:2ff38372c9a13cb3c6a32a","storageBucket": "friendlychat-2e2ba.firebasestorage.app", "apiKey": "AIzaSyA5UIX4kvApo5u3p_M-ljFpEpLbiyEYUvY","authDomain": "friendlychat-2e2ba.firebaseapp.com","messagingSenderId": "327884212767"})),provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
