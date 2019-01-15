import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {DbService} from '../../services/db.service';

interface FuelTypeTableItem {
  FuelID:Number;
  Name: string;
  Commision:Number;
  Price: Number;
}

@Component({
  selector: 'fueltype-table',
  templateUrl: './fueltype.component.html',
  styleUrls: ['./fueltype.component.scss']
})
export class FuelTypeComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<FuelTypeTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 private displayedColumns = ['FuelID', 'Name', 'Commision','Price','actions'];

 private tempFuelItem: FuelTypeTableItem;
 private isexpanded = false;
 private updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    let EXAMPLE_DATA: FuelTypeTableItem[] = [];
    this.tempFuelItem = { FuelID: 0, Name: '', Commision: 0,Price:0 };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
    this.dbconn.getFuelTypes().subscribe(res => {
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

  insertItem(fuelItem: FuelTypeTableItem) {
    this.dbconn.insertFuelTypes(fuelItem).subscribe(res => {
      this.dbconn.getFuelTypes().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFuelItem = { FuelID: 0, Name: '', Commision: 0,Price:0 };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: FuelTypeTableItem) {
    this.tempFuelItem = { FuelID: dataRow.FuelID, Name: dataRow.Name, Commision: dataRow.Commision,Price:dataRow.Price};
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: FuelTypeTableItem) {

    this.dbconn.updateFuelTypes(dataRow).subscribe(res => {
      this.dbconn.getFuelTypes().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFuelItem = { FuelID: 0, Name: '', Commision: 0,Price:0 };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: FuelTypeTableItem) {
    this.dbconn.deleteFuelTypes(dataRow).subscribe(res => {
      this.dbconn.getFuelTypes().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempFuelItem = { FuelID: 0, Name: '', Commision: 0,Price:0 };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempFuelItem = { FuelID: 0, Name: '', Commision: 0,Price:0 };
    this.isexpanded = false;
    this.updateMod = false;
  }



}

