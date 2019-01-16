import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DbService } from '../../services/db.service'

interface InhandTableItem{
  TankrID:Number,
  Date:Date,
  Inhand:Number,
  Recieved:Number,
  Total:Number,
  Meter_Reading_Start:Number,
  Meter_Reading_End:Number,
  Total_Reamaining:Number,
  Balance:Number
}

@Component({
  selector: 'Inhand-table',
  templateUrl: './Inhand.component.html',
  styleUrls: ['./Inhand.component.scss']
})
export class InhandComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private dataSource: MatTableDataSource<InhandTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['CustomerID', 'CompanyName', 'Threshold', 'PhoneNumber', 'Address', 'actions'];

   tempInhandItem: InhandTableItem;
   isexpanded = false;
   updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    
    this.tempInhandItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
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

  insertItem(cusItem: InhandTableItem) {
    this.dbconn.insertCustomer(cusItem).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempInhandItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: InhandTableItem) {
    this.tempInhandItem = { CustomerID: dataRow.CustomerID, CompanyName: dataRow.CompanyName, Threshold: dataRow.Threshold, PhoneNumber: dataRow.PhoneNumber, Address: dataRow.Address };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: InhandTableItem) {

    this.dbconn.updateCustomer(dataRow).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempInhandItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: InhandTableItem) {
    this.dbconn.deleteCustomer(dataRow).subscribe(res => {
      this.dbconn.getCustomers().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempInhandItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempInhandItem = { CustomerID: 0, CompanyName: '', Threshold: 0, PhoneNumber: '', Address: '' };
    this.isexpanded = false;
    this.updateMod = false;
  }



}
