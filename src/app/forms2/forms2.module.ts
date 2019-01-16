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

import {chequeDpComponent} from './Cheque-Deposit/chequeDP.component';
import {Cheque_RecievedComponent} from './Cheque-Recieved/Cheque-Recieved.component';
import {ExpenditureComponent} from './Expenditure/expenditure.component';
import {FillingRecordsComponent} from './FillingRecords/FillingRecords.component';
const routes = [
    {
        path        : '**',
        component: forms2Component

    }
    
    
];

@NgModule({
    declarations: [
        forms2Component,
        chequeDpComponent,
        Cheque_RecievedComponent,
        FillingRecordsComponent,
        ExpenditureComponent
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
