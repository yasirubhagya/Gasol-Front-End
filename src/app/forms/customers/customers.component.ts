import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort,MatTableDataSource} from '@angular/material';
import { CustomersTableItem,CustomersTableDataSource } from './customers-table-datasource';

@Component({
  selector: 'customers-table',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<CustomersTableItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['customerid', 'companyname','threshold','phoneno','address','actions'];
  constructor() {
    // Create 100 users
    const EXAMPLE_DATA: CustomersTableItem[] = [
      {customerid:1, companyname: 'Jayarathna',phoneno:'+94246844',address:'address 1',threshold:256},
      {customerid:2, companyname: 'CakeLabs',phoneno:'+9455444',address:'address 2',threshold:456}
    
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
