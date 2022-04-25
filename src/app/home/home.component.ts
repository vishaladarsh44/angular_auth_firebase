import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() isLogout= new EventEmitter<void>()

  constructor(public firebaseservice:FirebaseService) { }

  ngOnInit(): void {

  }

  logout(){
    this.firebaseservice.logout() 
    this.isLogout.emit()
  }

  
}
