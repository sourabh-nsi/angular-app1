import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service'; 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name:string;
  email:string;
  phone:string;
  query:string;
  constructor(private queryService: QueryService) {
    this.formReset();
   }

  ngOnInit() {
  }

  formReset(){
    this.name = '';
    this.email = '';
    this.phone = '';
    this.query = '';
  }
  postQuery() {
    if(this.name && this.email && this.phone && this.query){
      this.queryService.saveQuery(this.name, this.email, this.phone, this.query)
        .then(data => {
          alert('Your query has been posted successfully.');
          this.formReset();
        })
        .catch(err => {
          alert(err.message);
        });
    }
    else{
      alert('Please check query form.')
    }
  }
}
