import { Component } from '@angular/core';
import { Route } from '../model/route';
import { RouteService } from '../service/route.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  submitted = false;
  route : Route= 
  {

    Source : '',
    Destination :' '
  }

  constructor(private routeservice: RouteService){ }




  search() : void{

    const data = {
      Source : this.route.Source,
      Destinaion: this.route.Destination
    }

    this.routeservice. addRoute(data) 
    .subscribe({
     next:(res:any) => {
     console.log(res);
     this.submitted = true;
     },
     error: (e:any)=>  console.error(e)
    });
  }




}
