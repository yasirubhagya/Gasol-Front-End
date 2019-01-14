import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { formsComponent } from 'app/forms/forms.component';


  

const routes = [
   
    {
        path        : 'datatable',
        loadChildren: './components-third-party/components-third-party.module#ComponentsThirdPartyModule'

    },
    {
        path        : 'employee',
        loadChildren: './employee/employee.module#EmployeeModule'

    }
    ,{
        path        : 'cheques',
        loadChildren: './cheques/cheques.module#ChequesModule'

    },
    {
        path        : 'meterreadings',
        loadChildren: './meterreadings/meterreadings.module#MeterreadingsModule'

    }

    
];

@NgModule({
    declarations: [
        formsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FuseSharedModule,
        NgxDatatableModule,
        FuseCountdownModule   
    ]
})
export class FormsModule
{
}
