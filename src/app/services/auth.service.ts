import { Injectable } from '@angular/core';
/* import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'; */


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  constructor(
    //private http: Http
  ) { }

  

/*   registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post('http://localhost:3000/',user,{headers: headers})
    .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post('http://localhost:3000/',user,{headers: headers})
    .map(res => res.json());
  } */
}
