import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';
import {AppComponent} from 'app/app.component';
import { FakeDbService } from 'app/fake-db/fake-db.service';
import { LayoutModule } from 'app/layout/layout.module';


const appRoutes: Routes = [
   
    {
        path        : 'analytics',
        loadChildren: './analytics/analytics.module#AnalyticsDashboardModule'

    },
    {
        path        : 'project',
        loadChildren: './project/project.module#ProjectDashboardModule'

    },
    {
        path        : 'forms',
        loadChildren: './forms/forms.module#FormsModule'

    },
    {
        path        : 'forms2',
        loadChildren: './forms2/forms2.module#Forms2Module'

    },
    {
        path        : 'forms3',
        loadChildren: './forms3/forms3.module#Forms3Module'

    },
    {
        path        : 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'

    },
    {
        path        : 'coming-soon',
        loadChildren: './coming-soon/coming-soon.module#ComingSoonModule'

    },
    {
        path        : 'faq',
        loadChildren: './faq/faq.module#FaqModule'

    },
    {
        path        : 'knowledge-base',
        loadChildren: './knowledge-base/knowledge-base.module#KnowledgeBaseModule'

    },
    {
        path        : 'change-log',
        loadChildren: './changelog/changelog.module#changelogModule'

    },
    {
        path        : 'auth',
        loadChildren: './authentication/login/login.module#LoginModule'
    },
    {
        path        : 'reg',
        loadChildren: './authentication/register/register.module#RegisterModule'
    },
    {
        path      : '**',
        redirectTo: 'auth/login'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay             : 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        
    ],
    
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
    
}
