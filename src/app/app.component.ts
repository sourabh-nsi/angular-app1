import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Query Management';
  currentUser;
  constructor(private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser == null || !this.currentUser) {
      this.router.navigate(['login']);
    }
  }
}
