import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(public fireauth:AngularFireAuth ) { }

  async signin(email: string , password:string ){
    await this.fireauth.signInWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn == true;
      localStorage.setItem('user' , JSON.stringify(res.user))
    })
  } 
  async signup(email: string , password:string ){
    await this.fireauth.createUserWithEmailAndPassword(email,password)
    .then(res => {
      this.isLoggedIn == true;
      localStorage.setItem('user' , JSON.stringify(res.user))
    })
  } 
  async logout( ){
    this.fireauth.signOut()
      localStorage.removeItem('user')
  } 
}
