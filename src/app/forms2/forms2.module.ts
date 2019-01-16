import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, 
         MatInputModule,MatTableModule, 
         MatPaginatorModule, MatSortModule,
         MatIconModule,MatCardModule,
         MatExpansionModule,MatSelectModule,
         MatDatepickerModule
        } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { forms2Component } from './forms2.component';

import {EmployeesComponent} from './employees/employees.component';
import {CustomersComponent} from './customers/customers.component';
import {FuelTypeComponent} from './fueltype/fueltype.component';
import {VehiclesComponent} from './vehicles/vehicles.component';

const routes = [
    {
        path        : '**',
        component: forms2Component

    }
    
    
];

@NgModule({
    declarations: [
        forms2Component,
        EmployeesComponent,
        CustomersComponent,
        FuelTypeComponent,
        VehiclesComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        FuseSharedModule,
        NgxDatatableModule,
        FuseCountdownModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule,
        MatSelectModule,
        MatDatepickerModule
    ]
})
export class Forms2Module
{
}
