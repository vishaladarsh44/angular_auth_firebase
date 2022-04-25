import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  public emailsignup="";
  public passwordsignup="";
  public emailsignin="";
  public passwordsignin="";
  title = 'angular-auth';
  IssignIn=false;
  constructor(
    public firebaseservice:FirebaseService
  ){}
  ngOnInit(): void {
    if(localStorage.getItem('user') !== null)
    this.IssignIn = true
    else
    this.IssignIn =false
    // this.firebaseservice.signin,
    // this.firebaseservice.signup
  }

  async onsignup(email: string , password:string ){
    await this.firebaseservice.signup(email,password)
    if(this.firebaseservice.isLoggedIn)
    this.IssignIn=true;
  }
  async onsignin(email: string , password:string ){
    await this.firebaseservice.signin(email,password)
    if(this.firebaseservice.isLoggedIn)
    this.IssignIn=true;
  }
  handlelogout(){
    this.IssignIn=false;
  }
}
