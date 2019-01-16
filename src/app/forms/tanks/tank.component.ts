import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {DbService} from '../../services/db.service';

interface TankTableItem {
  TankID:Number,
  Capacity: Number,
  Resovoir:Number,
  Fuel_ID: Number,
  Label:String
}

@Component({
  selector: 'tank-table',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss']
})
export class TankComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<TankTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['TankID', 'Capacity', 'Resovoir','Fuel_ID','Label','actions'];

  tempTankItem: TankTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    
    this.tempTankItem = { TankID: 0, Capacity:0, Resovoir: 0,Fuel_ID:0 ,Label:''};
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
    this.dbconn.getTanks().subscribe(res => {
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

  insertItem(tankItem: TankTableItem) {
    this.dbconn.insertTanks(tankItem).subscribe(res => {
      this.dbconn.getTanks().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempTankItem = { TankID: 0, Capacity:0, Resovoir: 0,Fuel_ID:0 ,Label:''};
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: TankTableItem) {
    this.tempTankItem = { TankID: dataRow.TankID, Capacity:dataRow.Capacity, Resovoir: dataRow.Resovoir,Fuel_ID:dataRow.Fuel_ID ,Label:dataRow.Label};
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: TankTableItem) {

    this.dbconn.updateTanks(dataRow).subscribe(res => {
      this.dbconn.getTanks().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempTankItem = { TankID: 0, Capacity:0, Resovoir: 0,Fuel_ID:0 ,Label:''};
        this.isexpanded = false;
        this.updateMod = false;
      });
    });
  }

  deleteItem(dataRow: TankTableItem) {
    this.dbconn.deleteTanks(dataRow).subscribe(res => {
      this.dbconn.getTanks().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempTankItem = { TankID: 0, Capacity:0, Resovoir: 0,Fuel_ID:0 ,Label:''};
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempTankItem = { TankID: 0, Capacity:0, Resovoir: 0,Fuel_ID:0 ,Label:''};
    this.isexpanded = false;
    this.updateMod = false;
  }



}

