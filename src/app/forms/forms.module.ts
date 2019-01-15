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
import { formsComponent } from 'app/forms/forms.component';
import {EmployeesComponent} from './employees/employees.component';
import {CustomersComponent} from './customers/customers.component';
import {FuelTypeComponent} from './fueltype/fueltype.component';

const routes = [
    {
        path        : '**',
        component: formsComponent

    }
    
    
];

@NgModule({
    declarations: [
        formsComponent,
        EmployeesComponent,
        CustomersComponent,
        FuelTypeComponent,
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
export class FormsModule
{
}
