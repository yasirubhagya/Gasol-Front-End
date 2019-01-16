import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DbService } from '../../services/db.service'

interface ChequeDpTableItem{
  ItemID:Number,
  ChequeID:Number,
  CompanyName:String,
  Amount:Number,
  ReceivedDate:Date,
  ExpireDate:Date,
  Incoming_Outgoing:boolean
}

@Component({
  selector: 'customers-table',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class chequeDpComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private dataSource: MatTableDataSource<ChequeDpTableItem>
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ItemID', 'ChequeID', 'CompanyName', 'Amount', 'ReceivedDate','ExpireDate','Incoming_Outgoing', 'actions'];

   tempCustomerItem: ChequeDpTableItem;
   isexpanded = false;
   updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    
    this.tempCustomerItem = { ItemID: 0, ChequeID: 0, CompanyName: '', Amount: 0, ReceivedDate: new Date(),ExpireDate:new Date(),Incoming_Outgoing:true };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
    this.dbconn.getChequeDp().subscribe(res => {
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

  insertItem(cusItem: ChequeDpTableItem) {
    this.dbconn.insertChequeDp(cusItem).subscribe(res => {
      this.dbconn.getChequeDp().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: ChequeDpTableItem) {
    this.tempCustomerItem = { CustomerID: dataRow.CustomerID, CompanyName: dataRow.CompanyName, Threshold: dataRow.Threshold, PhoneNumber: dataRow.PhoneNumber, Address: dataRow.Address };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: ChequeDpTableItem) {

    this.dbconn.updateChequeDp(dataRow).subscribe(res => {
      this.dbconn.getChequeDp().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempCustomerItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: ChequeDpTableItem) {
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
