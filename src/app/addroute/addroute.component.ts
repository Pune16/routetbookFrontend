import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-addroute',
  templateUrl: './addroute.component.html',
  styleUrls: ['./addroute.component.css'],



})

export class AddrouteComponent {
  submitted = false;
  user : User= 
  {
    userId: undefined,
    username: '',
    password: '',
    email: '',
    isadmin: false,
    contact: undefined
  }
 
 
 
 
  constructor(private userservice: UserService){ }
 
  addUser(): void{
  
   const data = {
   username : this.user.username,
   password : this.user.password,
   email : this.user.email,
   isadmin : this.user.isadmin,
   contact : this.user.contact,
   userId :this.user.userId
 };
 
 this.userservice. user(data) 
  .subscribe({
   next:(res:any) => {
   console.log(res);
   this.submitted = true;
   },
   error: (e:any)=>  console.error(e)
  });
 }
 }

