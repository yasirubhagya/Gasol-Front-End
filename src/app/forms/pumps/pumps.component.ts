import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {DbService} from '../../services/db.service';

interface PumpsTableItem {
  PumpID:Number,
  TankID: Number,
  Label:String
}

@Component({
  selector: 'pump-table',
  templateUrl: './pumps.component.html',
  styleUrls: ['./pumps.component.scss']
})
export class PumpsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<PumpsTableItem >;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['PumpID', 'TankID', 'Label','actions'];

  temppumpItem: PumpsTableItem ;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    
    this.temppumpItem = { PumpID: 0, TankID: 0, Label: ''};
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
    this.dbconn.getPumps().subscribe(res => {
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

  insertItem(pumpItem: PumpsTableItem ) {
    this.dbconn.insertPumps(pumpItem).subscribe(res => {
      this.dbconn.getPumps().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.temppumpItem = { PumpID: 0, TankID: 0, Label: ''};
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: PumpsTableItem ) {
    this.temppumpItem = { PumpID:dataRow.PumpID, TankID: dataRow.TankID, Label:dataRow.Label};
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: PumpsTableItem ) {

    this.dbconn.updatePumps(dataRow).subscribe(res => {
      this.dbconn.getPumps().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.temppumpItem = { PumpID: 0, TankID: 0, Label: ''};
        this.isexpanded = false;
        this.updateMod = false;
      });
    });
  }

  deleteItem(dataRow: PumpsTableItem ) {
    this.dbconn.deletePumps(dataRow).subscribe(res => {
      this.dbconn.getPumps().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.temppumpItem = { PumpID: 0, TankID: 0, Label: ''};
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.temppumpItem = { PumpID: 0, TankID: 0, Label: ''};
    this.isexpanded = false;
    this.updateMod = false;
  }



}

