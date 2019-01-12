import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatIconModule,MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseCountdownModule } from '@fuse/components';

import { ChangelogComponent } from 'app/changelog/changelog.component';

const routes = [
    {
        path     : '**',
        component: ChangelogComponent
    }
];

@NgModule({
    declarations: [
        ChangelogComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FuseSharedModule,
        FuseCountdownModule
    ]
})
export class changelogModule
{
}
