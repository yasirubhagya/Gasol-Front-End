import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FuelTypeTableItem, FuelTypeTableDataSource } from './fueltype-table-datasource';

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
  displayedColumns = ['fuelid', 'name', 'sellingprice', 'commission','actions'];
  constructor() {
    // Create 100 users
    const EXAMPLE_DATA: FuelTypeTableItem[] = [
      { fuelid: 1, name: 'petrol', sellingprice: 149, commission: 1.2 },
      { fuelid: 2, name: 'Diesl', sellingprice: 120, commission: 1.0 }

    ];

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(EXAMPLE_DATA);
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

}
