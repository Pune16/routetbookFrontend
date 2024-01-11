import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

email: string = '';
password: string='';
role : string='';

  roles: String[] = [];



constructor(){
  this.roles = [
    'admin',
    'user'
  ]
}


  ngOnInit(): void {
  }   
signin(){
console.log(this.email+" "+this.password+" "+this.role)

}


}
