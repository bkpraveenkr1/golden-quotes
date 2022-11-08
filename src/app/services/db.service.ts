import { Injectable } from '@angular/core';
import 'firebase/firestore'
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';
import * as M from 'materialize-css';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private authService:AuthService) { }
  async saveQuote(quote:any){
    console.log(quote)
    try {
      const docRef = await addDoc(collection(getFirestore(), 'quotes'), {
        text:quote,
        by:this.authService.getUid()
        
      });
      M.toast({html: 'Quote Added',classes:"green"})
    } catch (e) {
      M.toast({html: 'Error creating quote',classes:"red"})

    }
  }

  async getAllQuotes(){
    //return firebase.firestore().collection('quotes').get()
    return await getDocs(collection(getFirestore(), 'quotes'));
  }
  
}