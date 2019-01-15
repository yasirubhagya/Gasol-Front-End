

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

  interface CustomerTableItem{
    CustomerID:Number,
    CompanyName:String,
    Threshold:Number,
    PhoneNumber:String,
    Address:String
  }

  interface VehiclesTableItem{
    VehicleNumber:String,
    CompanyID:Number,
    FuelID:Number
  }

  interface FuelTypeTableItem {
    FuelID:Number;
    Name: string;
    Commision:Number;
    Price: Number;
  }

  interface TankTableItem {
    TankID:Number,
    Capacity: Number,
    Resovoir:Number,
    FuelID: Number,
    Label:String
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

  getCustomers(){
    return this.http.get<CustomerTableItem[]>('https://gasoldb.herokuapp.com/api/forms/customer/get_all');
  }

  insertCustomer(cus:CustomerTableItem){
    return this.http.post<CustomerTableItem>('https://gasoldb.herokuapp.com/api/forms/customer/insert',cus);
  }
  updateCustomer(cus:CustomerTableItem){
    return this.http.post<CustomerTableItem>('https://gasoldb.herokuapp.com/api/forms/customer/update',cus);
  }

  deleteCustomer(cus:CustomerTableItem){
    return this.http.delete<CustomerTableItem>('https://gasoldb.herokuapp.com/api/forms/customer/delete/'+cus.CustomerID);
  }


  getVehicles(){
    return this.http.get<VehiclesTableItem[]>('https://gasoldb.herokuapp.com/api/forms/vehicle/get_all');
  }

  insertVehicles(veh:VehiclesTableItem){
    return this.http.post<VehiclesTableItem>('https://gasoldb.herokuapp.com/api/forms/vehicle/insert',veh);
  }
  updateVehicles(veh:VehiclesTableItem){
    return this.http.post<VehiclesTableItem>('https://gasoldb.herokuapp.com/api/forms/vehicle/update',veh);
  }

  deleteVehicles(veh:VehiclesTableItem){
    return this.http.delete<VehiclesTableItem>('https://gasoldb.herokuapp.com/api/forms/vehicle/delete/'+veh.VehicleNumber);
  }
  
  getFuelTypes(){
    return this.http.get<FuelTypeTableItem[]>('https://gasoldb.herokuapp.com/api/forms/fuel_type/get_all');
  }

  insertFuelTypes(fuel:FuelTypeTableItem){
    return this.http.post<FuelTypeTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/insert',fuel);
  }
  updateFuelTypes(fuel:FuelTypeTableItem){
    return this.http.post<FuelTypeTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/update',fuel);
  }

  deleteFuelTypes(fuel:FuelTypeTableItem){
    return this.http.delete<FuelTypeTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/delete/'+fuel.FuelID);
  }


  getTanks(){
    return this.http.get<TankTableItem[]>('https://gasoldb.herokuapp.com/api/forms/fuel_type/get_all');
  }

  insertTanks(tank:TankTableItem){
    return this.http.post<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/insert',tank);
  }
  updateTanks(tank:TankTableItem){
    return this.http.post<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/update',tank);
  }

  deleteTanks(tank:TankTableItem){
    return this.http.delete<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/fuel_type/delete/'+tank.TankID);
  }



}
