

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

interface USER {
  useremail:String;
  userpassword:String;
  valid:boolean;
}

interface EmployeesTableItem {
    NIC: String,
    FName: String,
    LName: String,
    DOB:Date,
    PhoneNumber:String,
    Gender: String,
    Address: String,
    LevelId: Number
  }


@Injectable({
  providedIn: 'root'
})


export class DbService {
  
  

  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get<EmployeesTableItem[]>('https://gasoldb.herokuapp.com/api/forms/employee/get_all');
  }

  insertEmployee(emp:EmployeesTableItem){
    return this.http.post<EmployeesTableItem>('https://gasoldb.herokuapp.com/api/forms/employee/insert',emp);
  }
  updateEmployee(emp:EmployeesTableItem){
    return this.http.post<EmployeesTableItem>('https://gasoldb.herokuapp.com/api/forms/employee/update',emp);
  }

  deleteEmployee(emp:EmployeesTableItem){
    return this.http.delete<EmployeesTableItem>('https://gasoldb.herokuapp.com/api/forms/employee/delete/'+emp.NIC);
  }

}
