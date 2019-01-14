import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FuseSharedModule } from '@fuse/shared.module';


import { EmployeeComponent } from './employee.component';

const routes = [
    {
        path     : '**',
        component: EmployeeComponent
    }
];

@NgModule({
    declarations: [
        EmployeeComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,

        NgxDatatableModule,

        FuseSharedModule,

        
    ]
})
export class EmployeeModule
{
}
