import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) { }
  
  saveQuery(name, email, phone, query) {
    return new Promise((resolve, reject) => {
      const itemRef = this.db.collection('query');
      const newQuery: any = { 'name': name, 'email': email, 'phone': phone, 'query': query};
      itemRef.add(newQuery)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
