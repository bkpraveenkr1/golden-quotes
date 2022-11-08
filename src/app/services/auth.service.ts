import { Injectable } from '@angular/core';
import * as M from 'materialize-css';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userID?:string;
  constructor(private router:Router) { }
  
  getUid(){
    return this.userID
  }
  isAuthenticated(){
    const uid = localStorage.getItem('userID')
    if(uid) this.userID = uid
    return uid ? true : false
  }
  register(email:string,password:string){
    const auth = getAuth();
          createUserWithEmailAndPassword(auth,email,password)
          .then((userdetails:any)=>{
            console.log(userdetails)
            this.userID = userdetails.user.email
            localStorage.setItem('userID', userdetails.user.email)
            M.toast({html: 'User saved successfully',classes:"green"})
            this.router.navigate(['/login'])
          }).catch((err)=>{
            console.log(err)
            M.toast({html: 'Error saving user',classes:"red"})
          })
  }
  login(email:any,password:any){
    const auth = getAuth();

          signInWithEmailAndPassword(auth,email,password)
          .then((userdetails:any)=>{
            this.userID = userdetails.user.email
            localStorage.setItem('userID', userdetails.user.email)
            M.toast({html: 'User signed successfully',classes:"green"})
            this.router.navigate(['/home'])
          }).catch((err)=>{
            console.log(err)
            M.toast({html: 'Error logging in',classes:"red"})
          })
  }
  logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.userID = undefined;
      localStorage.removeItem('userID')
      this.router.navigate(['/'])
      M.toast({html: 'User Logout successfully',classes:"green"})

    }).catch((error) => {
      // An error happened.
      console.log('error')

    });
  }
}

