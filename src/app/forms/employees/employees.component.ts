import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EmployeesTableDataSource, EmployeesTableItem } from './employees-table-datasource';
import { DbService } from '../../services/db.service'
@Component({
  selector: 'employees-table',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<EmployeesTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['NIC', 'FName', 'LName', 'DOB', 'PhoneNumber', 'Gender', 'Address', 'LevelId', 'actions'];

  tempEmpItem: EmployeesTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    let EXAMPLE_DATA: EmployeesTableItem[] = [];
    this.tempEmpItem = { NIC: '', FName: '', LName: '', DOB: new Date(), PhoneNumber: '', Gender: '', Address: '', LevelId: 0 };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
    this.dbconn.getEmployees().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource._updateChangeSubscription();

    });

  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  insertItem(empItem: EmployeesTableItem) {
    this.dbconn.insertEmployee(empItem).subscribe(res => {
      this.dbconn.getEmployees().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempEmpItem = { NIC: '', FName: '', LName: '', DOB: new Date(), PhoneNumber: '', Gender: '', Address: '', LevelId: 0 };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: EmployeesTableItem) {
    this.tempEmpItem = { NIC: dataRow.NIC, FName: dataRow.FName, LName: dataRow.LName, DOB: dataRow.DOB, PhoneNumber: dataRow.PhoneNumber, Gender: dataRow.Gender, Address: dataRow.Address, LevelId: dataRow.LevelId };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: EmployeesTableItem) {

    this.dbconn.updateEmployee(dataRow).subscribe(res => {
      this.dbconn.getEmployees().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempEmpItem = { NIC: '', FName: '', LName: '', DOB: new Date(), PhoneNumber: '', Gender: '', Address: '', LevelId: 0 };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: EmployeesTableItem) {
    this.dbconn.deleteEmployee(dataRow).subscribe(res => {
      this.dbconn.getEmployees().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempEmpItem = { NIC: '', FName: '', LName: '', DOB: new Date(), PhoneNumber: '', Gender: '', Address: '', LevelId: 0 };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempEmpItem = { NIC: '', FName: '', LName: '', DOB: new Date(), PhoneNumber: '', Gender: '', Address: '', LevelId: 0 };
    this.isexpanded = false;
    this.updateMod = false;
  }



}
