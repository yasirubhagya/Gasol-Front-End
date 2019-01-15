import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule,MatTableModule, MatPaginatorModule, MatSortModule,MatIconModule,MatCardModule,MatToolbarModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { forms3Component } from './forms3.component';

const routes = [
    {
        path        : '**',
        component: forms3Component

    }
    
    
];

@NgModule({
    declarations: [
        forms3Component,
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
        MatToolbarModule
    ]
})
export class Forms3Module
{
}
