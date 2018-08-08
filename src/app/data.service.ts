import { Injectable } from '@angular/core';

import { AngularFireAuth } from  'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afauth: AngularFireAuth, private db: AngularFirestore) { }
}
