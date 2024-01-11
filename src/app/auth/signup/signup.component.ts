import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  
  username : string='';
  password : string='';
  email : string='';
  contact : any='';

  signup(){
    console.log(this.username+" "+this.password+" "+this.email+" "+this.contact)
  }

  ngOnInit(): void {
    
  }
}
