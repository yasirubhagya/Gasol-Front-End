import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

interface USER {
  useremail:String;
  userpassword:String;
  valid:boolean;
}



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  authToken: any;
  user: USER;

  constructor(private http: HttpClient) { }

  registerUser(user:USER){
    let headers = new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post<USER>('http://localhost:3000/',user);
  }

  authenticateUser(user:USER){
    let headers = new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post<USER>('https://gasoldb.herokuapp.com/api/auth/login',user);
  }
}
