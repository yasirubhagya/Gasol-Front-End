import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import {DbService} from '../../services/db.service';

interface ExpenditureTableItem {
  ID:Number;
  Name: string;
  Types:String;
  Price: Number;
}

@Component({
  selector: 'expenditure-table',
  templateUrl: './expenditure.component.html',
  styleUrls: ['./expenditure.component.scss']
})
export class ExpenditureComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ExpenditureTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
 displayedColumns = ['ID', 'Name', 'Types','Price','actions'];

  tempExpenditureItem: ExpenditureTableItem;
  isexpanded = false;
  updateMod = false;

  constructor(private dbconn: DbService) {
    // Create 100 users
   
    this.tempExpenditureItem = { ID: 0, Name: '', Types: '',Price:0 };
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
    this.dbconn.getExpenditure().subscribe(res => {
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

  insertItem(expItem: ExpenditureTableItem) {
    this.dbconn.insertExpenditure(expItem).subscribe(res => {
      this.dbconn.getExpenditure().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempExpenditureItem = { ID: 0, Name: '', Types: '',Price:0 };
        this.isexpanded = false;
      });
    });


  }

  enableUpdateMod(dataRow: ExpenditureTableItem) {
    this.tempExpenditureItem = { ID:dataRow.ID, Name: dataRow.Name, Types: dataRow.Types,Price:dataRow.Price };
    this.updateMod = true;
    this.isexpanded = true;
  }

  updateItem(dataRow: ExpenditureTableItem) {

    this.dbconn.updateExpenditure(dataRow).subscribe(res => {
      this.dbconn.getExpenditure().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempExpenditureItem = { ID: 0, Name: '', Types: '',Price:0 };
        this.isexpanded = false;
        this.updateMod = false;
      });
    });

    console.log(dataRow);
  }

  deleteItem(dataRow: ExpenditureTableItem) {
    this.dbconn.deleteExpenditure(dataRow).subscribe(res => {
      this.dbconn.getExpenditure().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource._updateChangeSubscription();
        this.tempExpenditureItem = { ID: 0, Name: '', Types: '',Price:0 };
        this.isexpanded = false;
      });
    });

  }

  cancel() {
    this.tempExpenditureItem = { ID: 0, Name: '', Types: '',Price:0 };
    this.isexpanded = false;
    this.updateMod = false;
  }



}

