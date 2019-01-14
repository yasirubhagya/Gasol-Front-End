import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatIconModule,MatSelectModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatTabsModule} from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';


import { MeterreadingsComponent } from './meterreadings.component';

const routes = [
    {
        path     : '**',
        component: MeterreadingsComponent
    }
];

@NgModule({
    declarations: [
        MeterreadingsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTabsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatSelectModule,
        NgxDatatableModule,
        FuseSharedModule,

        
    ]
})
export class MeterreadingsModule
{
}
