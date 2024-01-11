import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  constructor(private http: HttpClient) { }


  user(data: any): Observable<any> {
    return this.http.post("http://localhost:8080/create",data);
   
  }
  getUser( ):Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/allusers");
  }
}
