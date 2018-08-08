import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AccountService]
})
export class RegistrationComponent implements OnInit {
  email: string;
  password: string;
  constructor(private accountService: AccountService, private router: Router) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }
  userRegistration(){
    if (this.email && this.password) {
      this.accountService.register(this.email, this.password)
        .then(data => {
          if(data){
            alert('Registration sucessfull, Please login');
            this.router.navigate(['']);
          }
          else{
            alert('Something went wrong. Please try again.')
          }
        })
        .catch(err => {
          alert(err.message);
        });
    }
    else {
      alert('Please check you email and password');
    }
  }
}
