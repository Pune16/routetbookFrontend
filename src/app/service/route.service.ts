import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }

  addRoute(data: any): Observable<any> {
    return this.http.post("http://localhost:8080/addRoute",data);
   
  }
}


