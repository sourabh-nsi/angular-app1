import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AccountService]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private accountService: AccountService, private router: Router) { 
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  userLogin(){
    if(this.email && this.password){
      this.accountService.login(this.email, this.password)
        .then(data => {
          this.writeUserSession(data);
          this.router.navigate(['home']);
        })
        .catch(err => {
          alert(err.message);
        });
    }
    else{
      alert('Please check you email and password');
    }
  }

  googleLogin(){
    this.accountService.googleLogin()
      .then(data => {
        this.writeUserSession(data);
        this.router.navigate(['home']);
      })
      .catch(err => {
        alert(err.message);
      });
  }

  writeUserSession(user){
    console.log(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
