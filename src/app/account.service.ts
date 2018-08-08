import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afauth.auth.signInWithEmailAndPassword(email,
        password)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  googleLogin() {
    return new Promise((resolve, reject) => {
      this.afauth.auth.signInWithPopup(new auth.GoogleAuthProvider)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afauth.auth.createUserWithEmailAndPassword(email,
        password)
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  
  logout() {
    return new Promise((resolve, reject) => {
      this.afauth.auth.signOut()
        .then(data => {
          resolve('true');
        })
        .catch(err => {
          reject(err);
        });
    });
  }



}
