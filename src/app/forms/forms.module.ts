import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule,MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { formsComponent } from 'app/forms/forms.component';
import {EmployeesComponent} from './employees/employees.component';

  

const routes = [
    {
        path        : '**',
        component: formsComponent

    }
    
    
];

@NgModule({
    declarations: [
        formsComponent,
        EmployeesComponent
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
        MatSortModule
    ]
})
export class FormsModule
{
}
