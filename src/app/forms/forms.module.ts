import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';

import { formsComponent } from 'app/forms/forms.component';

const routes = [
    {
        path     : '**',
        component: formsComponent
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
        FuseCountdownModule
    ]
})
export class FormsModule
{
}
