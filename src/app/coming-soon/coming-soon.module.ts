import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';

import { ComingSoonComponent } from 'app/coming-soon/coming-soon.component';

const routes = [
    {
        path     : '**',
        component: ComingSoonComponent
    }
];

@NgModule({
    declarations: [
        ComingSoonComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        FuseSharedModule,
        FuseCountdownModule
    ]
})
export class ComingSoonModule
{
}
