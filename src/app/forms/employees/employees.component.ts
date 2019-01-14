import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmployeesTableDataSource } from './employees-table-datasource';

@Component({
  selector: 'employees-table',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmployeesTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nic', 'firstname','lastname','dateofbirth','phoneno','gender','address','levelid'];

  ngOnInit() {
    this.dataSource = new EmployeesTableDataSource(this.paginator, this.sort);
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

}
