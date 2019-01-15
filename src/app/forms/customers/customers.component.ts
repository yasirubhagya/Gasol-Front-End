import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DbService } from '../../services/db.service'

interface CustomerTableItem{
  CustomerID:Number,
  CompanyName:String,
  Threshold:Number,
  PhoneNumber:String,
  Address:String
}

@Component({
  selector: 'customers-table',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<CustomerTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['CustomerID', 'CompanyName', 'Threshold', 'PhoneNumber', 'Address', 'actions'];

  tempCustomerItem: CustomerTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    let EXAMPLE_DATA: CustomerTableItem[] = [];
    this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
    this.dbconn.getCustomers().subscribe(res => {
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

  insertItem(cusItem: CustomerTableItem) {
    this.dbconn.insertCustomer(cusItem).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: CustomerTableItem) {
    this.tempCustomerItem = { CustomerID: dataRow.CustomerID, CompanyName: dataRow.CompanyName, Threshold: dataRow.Threshold, PhoneNumber: dataRow.PhoneNumber, Address: dataRow.Address };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: CustomerTableItem) {

    this.dbconn.updateCustomer(dataRow).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: CustomerTableItem) {
    this.dbconn.deleteCustomer(dataRow).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
    this.isexpanded = false;
    this.updateMod = false;
  }



}
