import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebaseconfig';
import { initializeApp } from 'firebase/app';
//import { getFirestore } from 'firebase/firestore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'golden-quotes';
  

  ngOnInit(){
    // Initialize Firebase
const app = initializeApp(firebaseConfig);


  }
}
