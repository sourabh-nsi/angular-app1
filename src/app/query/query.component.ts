import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  queries: Observable<any[]>;

  constructor(private db: AngularFirestore, private afauth: AngularFireAuth) {
    console.log(this.afauth.auth.currentUser);
    this.queries = db.collection('query').valueChanges();
   }

  ngOnInit() {
  }

}
