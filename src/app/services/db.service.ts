

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
    Fuel_ID: Number,
    Label:String
  }


  interface PumpsTableItem {
    PumpID:Number,
    TankID: Number,
    Label:String
  }

  interface ChequeDpTableItem{
    ItemID:Number,
    ChequeID:Number,
    CompanyName:String,
    Amount:Number,
    ReceivedDate:Date,
    ExpireDate:Date,
    Incoming_Outgoing:boolean
  }
  
  interface FillingRecordsTableItem{
    InvoiceID:Number,
    CustomerID:Number,
    VehicleNumber:String,
    OrderNumber:String,
    FillingDate:Date,
    Amount:Number,
    Price:Number,
  }

  interface ExpenditureTableItem {
    ID:Number;
    Name: string;
    Types:String;
    Price: Number;
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
    return this.http.get<TankTableItem[]>('https://gasoldb.herokuapp.com/api/forms/tank/get_all');
  }

  insertTanks(tank:TankTableItem){
    return this.http.post<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/tank/insert',tank);
  }
  updateTanks(tank:TankTableItem){
    return this.http.post<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/tank/update',tank);
  }

  deleteTanks(tank:TankTableItem){
    return this.http.delete<TankTableItem>('https://gasoldb.herokuapp.com/api/forms/tank/delete/'+tank.TankID);
  }
  
  getPumps(){
    return this.http.get<PumpsTableItem[]>('https://gasoldb.herokuapp.com/api/forms/pump/get_all');
  }

  insertPumps(pump:PumpsTableItem){
    return this.http.post<PumpsTableItem>('https://gasoldb.herokuapp.com/api/forms/pump/insert',pump);
  }
  updatePumps(pump:PumpsTableItem){
    return this.http.post<PumpsTableItem>('https://gasoldb.herokuapp.com/api/forms/pump/update',pump);
  }

  deletePumps(pump:PumpsTableItem){
    return this.http.delete<PumpsTableItem>('https://gasoldb.herokuapp.com/api/forms/pump/delete/'+pump.PumpID);
  }


  getChequeDp(){
    return this.http.get<ChequeDpTableItem[]>('https://gasoldb.herokuapp.com/api/forms/cheque/get_all');
  }

  insertChequeDp(chequeDp:ChequeDpTableItem){
    return this.http.post<ChequeDpTableItem>('https://gasoldb.herokuapp.com/api/forms/cheque/insert',chequeDp);
  }
  updateChequeDp(chequeDp:ChequeDpTableItem){
    return this.http.post<ChequeDpTableItem>('https://gasoldb.herokuapp.com/api/forms/cheque/update',chequeDp);
  }

  deleteChequeDp(chequeDp:ChequeDpTableItem){
    return this.http.delete<ChequeDpTableItem>('https://gasoldb.herokuapp.com/api/forms/cheque/delete/'+chequeDp.ChequeID);
  }

  getFillingRecords(){
    return this.http.get<FillingRecordsTableItem[]>('https://gasoldb.herokuapp.com/api/forms/fillingRecords/get_all');
  }

  insertFillingRecords(filling:FillingRecordsTableItem){
    return this.http.post<FillingRecordsTableItem>('https://gasoldb.herokuapp.com/api/forms/fillingRecords/insert',filling);
  }
  updateFillingRecords(filling:FillingRecordsTableItem){
    return this.http.post<FillingRecordsTableItem>('https://gasoldb.herokuapp.com/api/forms/fillingRecords/update',filling);
  }

  deleteFillingRecords(filling:FillingRecordsTableItem){
    return this.http.delete<FillingRecordsTableItem>('https://gasoldb.herokuapp.com/api/forms/fillingRecords/delete/'+filling.InvoiceID);
  }

  getExpenditure(){
    return this.http.get<ExpenditureTableItem[]>('https://gasoldb.herokuapp.com/api/forms/otherExpenditures/get_all');
  }

  insertExpenditure(expen:ExpenditureTableItem){
    return this.http.post<ExpenditureTableItem>('https://gasoldb.herokuapp.com/api/forms/otherExpenditures/insert',expen);
  }
  updateExpenditure(expen:ExpenditureTableItem){
    return this.http.post<ExpenditureTableItem>('https://gasoldb.herokuapp.com/api/forms/otherExpenditures/update',expen);
  }

  deleteExpenditure(expen:ExpenditureTableItem){
    return this.http.delete<ExpenditureTableItem>('https://gasoldb.herokuapp.com/api/forms/otherExpenditures/delete/'+expen.ID);
  }



}
