import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FirebaseService } from './services/firebase.service';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),

    provideFirebaseApp(() => initializeApp({ 
      apiKey: "AIzaSyCb3_YiWF9e9VE7ClfToHosonwfcPPSkxQ",
      authDomain: "angular-auth-26773.firebaseapp.com",
      projectId: "angular-auth-26773",
      storageBucket: "angular-auth-26773.appspot.com",
      messagingSenderId: "689174180239",
      appId: "1:689174180239:web:a782bcc331515b44209bfa",
      measurementId: "G-0Q1SPGTYVL"
    })),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
