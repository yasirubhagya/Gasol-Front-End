import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatIconModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatTabsModule} from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';


import { ChequesComponent } from './cheques.component';

const routes = [
    {
        path     : '**',
        component: ChequesComponent
    }
];

@NgModule({
    declarations: [
        ChequesComponent
    ],
    imports     : [
        RouterModule.forChild(routes),
        MatTabsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,

        NgxDatatableModule,

        FuseSharedModule,

        
    ]
})
export class ChequesModule
{
}
