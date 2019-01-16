import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DbService } from '../../services/db.service'

interface VehiclesTableItem{
  VehicleNumber:String,
  CompanyID:Number,
  FuelID:Number
}

@Component({
  selector: 'vehicle-table',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<VehiclesTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['VehicleNumber', 'CompanyID', 'FuelID','actions'];

  tempVehicleItem: VehiclesTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
    let EXAMPLE_DATA: VehiclesTableItem[] = [];
    this.tempVehicleItem = { VehicleNumber: '', CompanyID: 0, FuelID: 0 };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
    this.dbconn.getVehicles().subscribe(res => {
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

  insertItem(cusItem: VehiclesTableItem) {
    this.dbconn.insertVehicles(cusItem).subscribe(res => {
      this.dbconn.getVehicles().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempVehicleItem = { VehicleNumber: '', CompanyID: 0, FuelID: 0 };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: VehiclesTableItem) {
    this.tempVehicleItem = { VehicleNumber: dataRow.VehicleNumber, CompanyID: dataRow.CompanyID, FuelID: dataRow.FuelID };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: VehiclesTableItem) {

    this.dbconn.updateVehicles(dataRow).subscribe(res => {
      this.dbconn.getVehicles().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempVehicleItem = { VehicleNumber: '', CompanyID: 0, FuelID: 0 };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: VehiclesTableItem) {
    this.dbconn.deleteVehicles(dataRow).subscribe(res => {
      this.dbconn.getVehicles().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempVehicleItem = { VehicleNumber: '', CompanyID: 0, FuelID: 0 };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempVehicleItem = { VehicleNumber: '', CompanyID: 0, FuelID: 0 };
    this.isexpanded = false;
    this.updateMod = false;
  }



}
