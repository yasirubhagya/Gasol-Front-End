import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DbService } from '../../services/db.service'

interface FillingRecordsTableItem{
  InvoiceID:Number,
  CustomerID:Number,
  VehicleNumber:String,
  OrderNumber:String,
  FillingDate:Date,
  Amount:Number,
  Price:Number,
}

@Component({
  selector: 'fillingRecords-table',
  templateUrl: './FillingRecords.component.html',
  styleUrls: ['./FillingRecords.component.scss']
})
export class FillingRecordsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<FillingRecordsTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['InvoiceID', 'CustomerID', 'VehicleNumber','OrderNumber','FillingDate','Amount','Price','actions'];

  tempFillingRecordItem: FillingRecordsTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    let EXAMPLE_DATA: FillingRecordsTableItem[] = [];
    this.tempFillingRecordItem = { InvoiceID: 0, CustomerID: 0, VehicleNumber: '',OrderNumber:'',FillingDate:new Date(),Amount:0,Price:0 };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
    this.dbconn.getFillingRecords().subscribe(res => {
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

  insertItem(fillItem: FillingRecordsTableItem) {
    this.dbconn.insertFillingRecords(fillItem).subscribe(res => {
      this.dbconn.getFillingRecords().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFillingRecordItem = { InvoiceID: 0, CustomerID: 0, VehicleNumber: '',OrderNumber:'',FillingDate:new Date(),Amount:0,Price:0 };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: FillingRecordsTableItem) {
    this.tempFillingRecordItem = { InvoiceID: dataRow.InvoiceID, CustomerID: dataRow.CustomerID, VehicleNumber: dataRow.VehicleNumber,OrderNumber: dataRow.OrderNumber,FillingDate: dataRow.FillingDate,Amount: dataRow.Amount,Price: dataRow.Price };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: FillingRecordsTableItem) {

    this.dbconn.updateFillingRecords(dataRow).subscribe(res => {
      this.dbconn.getFillingRecords().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFillingRecordItem = { InvoiceID: 0, CustomerID: 0, VehicleNumber: '',OrderNumber:'',FillingDate:new Date(),Amount:0,Price:0 };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: FillingRecordsTableItem) {
    this.dbconn.deleteFillingRecords(dataRow).subscribe(res => {
      this.dbconn.getFillingRecords().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFillingRecordItem = { InvoiceID: 0, CustomerID: 0, VehicleNumber: '',OrderNumber:'',FillingDate:new Date(),Amount:0,Price:0 };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempFillingRecordItem = { InvoiceID: 0, CustomerID: 0, VehicleNumber: '',OrderNumber:'',FillingDate:new Date(),Amount:0,Price:0 };
    this.isexpanded = false;
    this.updateMod = false;
  }



}
