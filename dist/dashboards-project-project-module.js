(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-project-project-module"],{

/***/ "./src/app/main/apps/dashboards/project/project.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-project\" class=\"page-layout simple right-sidebar\" fxLayout=\"row\">\r\n\r\n    <!-- SIDEBAR -->\r\n    <fuse-sidebar class=\"sidebar\" name=\"project-dashboard-right-sidebar-1\" position=\"right\" lockedOpen=\"gt-md\">\r\n\r\n        <!-- SIDEBAR CONTENT -->\r\n        <div class=\"content\">\r\n\r\n            <!-- WIDGET GROUP -->\r\n            <div class=\"widget-group\" fxLayout=\"column\" fxFlex=\"100\" [@animateStagger]=\"{value:'50'}\">\r\n\r\n                <!-- NOW WIDGET -->\r\n                <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"p-0\">\r\n\r\n                    <!-- Front -->\r\n                    <div class=\"fuse-widget-front\">\r\n\r\n                        <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                            <div class=\"h3\">{{dateNow | date: 'EEEE, HH:mm:ss'}}</div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\r\n                                    <mat-icon>more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #moreMenu=\"matMenu\">\r\n                                    <button mat-menu-item aria-label=\"Flip widget\">\r\n                                        Details\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pb-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                            <div class=\"h1 secondary-text\">\r\n                                <span>{{dateNow | date: 'MMMM'}}</span>\r\n                            </div>\r\n\r\n                            <div class=\"font-size-72 line-height-88 secondary-text font-weight-400\">\r\n                                {{dateNow | date: 'd'}}\r\n                            </div>\r\n\r\n                            <div class=\"h1 secondary-text\">\r\n                                <span>{{dateNow | date: 'y'}}</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <mat-divider></mat-divider>\r\n                    </div>\r\n                    <!-- / Front -->\r\n\r\n                </fuse-widget>\r\n                <!-- / NOW WIDGET -->\r\n\r\n                <!-- WEATHER WIDGET -->\r\n                <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"p-0\">\r\n\r\n                    <!-- Front -->\r\n                    <div class=\"fuse-widget-front\">\r\n\r\n                        <div class=\"pl-16 pr-8 py-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                            <div class=\"h4\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"secondary-text mr-8\">place</mat-icon>\r\n                                {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].name}}\r\n                            </div>\r\n\r\n                            <div>\r\n                                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"more\">\r\n                                    <mat-icon class=\"secondary-text\">more_vert</mat-icon>\r\n                                </button>\r\n\r\n                                <mat-menu #moreMenu=\"matMenu\">\r\n                                    <button mat-menu-item aria-label=\"Flip widget\">\r\n                                        Details\r\n                                    </button>\r\n                                </mat-menu>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p-16 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                                <mat-icon fontSet=\"meteocons\"\r\n                                          [fontIcon]=\"widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].icon\"\r\n                                          class=\"icon s-40 secondary-text mr-16\"></mat-icon>\r\n                                <span class=\"mat-display-2 m-0 font-weight-300 secondary-text\">\r\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].temp[widgets.weatherWidget.tempUnit]}}\r\n                                </span>\r\n                                <span class=\"font-size-48 font-weight-300 hint-text text-super ml-8\">°</span>\r\n                                <span class=\"mat-display-2 mb-0 font-weight-300 hint-text ng-binding\">C</span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"grey-300-bg p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-windy\"\r\n                                          class=\"s-16 secondary-text mr-8\"></mat-icon>\r\n                                <span>\r\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].windSpeed[widgets.weatherWidget.speedUnit]}}\r\n                                </span>\r\n                                <span class=\"secondary-text ml-5\">{{widgets.weatherWidget.speedUnit}}</span>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-compass\"\r\n                                          class=\"s-16 secondary-text mr-8\"></mat-icon>\r\n                                <span>\r\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].windDirection}}\r\n                                </span>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon fontSet=\"meteocons\" fontIcon=\"icon-rainy\"\r\n                                          class=\"s-16 secondary-text mr-8\"></mat-icon>\r\n                                <span>\r\n                                    {{widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].rainProbability}}\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"py-16\">\r\n                            <div class=\"py-16 px-24\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n                                 *ngFor=\"let day of widgets.weatherWidget.locations[widgets.weatherWidget.currentLocation].next3Days\">\r\n                                <span class=\"h4\">{{day.name}}</span>\r\n                                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <mat-icon fontSet=\"meteocons\" [fontIcon]=\"day.icon\" class=\"secondary-text mr-16\"></mat-icon>\r\n                                    <span class=\"h2\">{{day.temp[widgets.weatherWidget.tempUnit]}}</span>\r\n                                    <span class=\"h2 font-weight-300 secondary-text text-super\">&deg;</span>\r\n                                    <span class=\"h2 font-weight-300 secondary-text\">\r\n                                        {{widgets.weatherWidget.tempUnit}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <mat-divider></mat-divider>\r\n\r\n                    </div>\r\n                    <!-- / Front -->\r\n\r\n                </fuse-widget>\r\n                <!-- / WEATHER WIDGET -->\r\n\r\n            </div>\r\n            <!-- / WIDGET GROUP -->\r\n\r\n        </div>\r\n        <!-- / SIDEBAR CONTENT -->\r\n\r\n    </fuse-sidebar>\r\n    <!-- / SIDEBAR -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\" fusePerfectScrollbar>\r\n\r\n        <!-- HEADER -->\r\n        <div class=\"header mat-accent-bg p-24 pb-0\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                <span class=\"mat-display-1 mb-0 welcome-message\"\r\n                      [@animate]=\"{value:'*',params:{x:'50px'}}\">Welcome back, John!\r\n                </span>\r\n\r\n                <button mat-icon-button class=\"sidebar-toggle mr-8\" fxHide.gt-md\r\n                        (click)=\"toggleSidebar('project-dashboard-right-sidebar-1')\">\r\n                    <mat-icon>menu</mat-icon>\r\n                </button>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\">\r\n\r\n                <div class=\"selected-project\">{{selectedProject.name}}</div>\r\n\r\n                <button mat-icon-button class=\"project-selector\" [matMenuTriggerFor]=\"projectsMenu\"\r\n                        aria-label=\"Select project\">\r\n                    <mat-icon>more_horiz</mat-icon>\r\n                </button>\r\n\r\n                <mat-menu #projectsMenu=\"matMenu\">\r\n                    <button mat-menu-item *ngFor=\"let project of projects\" (click)=\"selectedProject = project\">\r\n                        <span>{{project.name}}</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n        </div>\r\n        <!-- / HEADER -->\r\n\r\n        <!-- CONTENT -->\r\n        <div class=\"content\">\r\n\r\n            <mat-tab-group dynamicHeight>\r\n\r\n                <mat-tab label=\"Home\">\r\n\r\n                    <div class=\"widget-group grey-100-bg p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                         [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 1 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified font-size-16\"\r\n                                                    [(ngModel)]=\"widgets.widget1.currentRange\"\r\n                                                    aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget1.ranges | keys\"\r\n                                                        [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <button mat-icon-button fuseWidgetToggle aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"light-blue-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget1.data.count[widgets.widget1.currentRange]}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget1.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget1.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">\r\n                                        {{widgets.widget1.data.extra.count[widgets.widget1.currentRange]}}\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget1.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 1 -->\r\n\r\n                        <!-- WIDGET 2 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget2.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"red-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget2.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget2.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget2.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget2.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget2.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 2 -->\r\n\r\n                        <!-- WIDGET 3 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget3.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"orange-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget3.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget3.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget3.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget3.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget3.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 3 -->\r\n\r\n                        <!-- WIDGET 4 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxFlex.gt-md=\"25\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"pl-16 pr-8 py-16 h-52\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget4.title}}</div>\r\n\r\n                                    <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                            aria-label=\"more\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                                <div class=\"pt-8 pb-32\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                                    <div class=\"blue-grey-fg font-size-72 line-height-72\">\r\n                                        {{widgets.widget4.data.count}}\r\n                                    </div>\r\n                                    <div class=\"h3 secondary-text font-weight-500\">{{widgets.widget4.data.label}}\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"p-16 grey-50-bg border-top\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                    <span class=\"h4 secondary-text text-truncate\">\r\n                                        {{widgets.widget4.data.extra.label}}:\r\n                                    </span>\r\n                                    <span class=\"h4 ml-8\">{{widgets.widget4.data.extra.count}}</span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                            <!-- Back -->\r\n                            <div class=\"fuse-widget-back p-16 pt-32 mat-white-bg mat-elevation-z2\">\r\n                                <button mat-icon-button fuseWidgetToggle class=\"fuse-widget-flip-button\"\r\n                                        aria-label=\"Flip widget\">\r\n                                    <mat-icon class=\"s-16\">close</mat-icon>\r\n                                </button>\r\n\r\n                                <div>\r\n                                    {{widgets.widget4.detail}}\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Back -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 4 -->\r\n\r\n                        <!-- WIDGET 5 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" fxLayout=\"row\" fxFlex=\"100\"\r\n                                     class=\"widget widget5\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n\r\n                                    <div fxFlex class=\"py-16 h3\">{{widgets.widget5.title}}</div>\r\n\r\n                                    <div fxFlex=\"0 1 auto\" class=\"py-16\" fxLayout=\"row\">\r\n                                        <button mat-button class=\"px-16\"\r\n                                                *ngFor=\"let range of widgets.widget5.ranges | keys\"\r\n                                                (click)=\"widget5.currentRange = range.key\"\r\n                                                [disabled]=\"widget5.currentRange == range.key\">\r\n                                            {{range.value}}\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n\r\n                                    <div class=\"h-420 my-16\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                        <ngx-charts-bar-vertical-stacked\r\n                                            *fuseIfOnDom\r\n                                            [scheme]=\"widget5.scheme\"\r\n                                            [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\r\n                                            [gradient]=\"widget5.gradient\"\r\n                                            [xAxis]=\"widget5.xAxis\"\r\n                                            [yAxis]=\"widget5.yAxis\"\r\n                                            [legend]=\"widget5.legend\"\r\n                                            [showXAxisLabel]=\"widget5.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget5.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget5.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget5.yAxisLabel\"\r\n                                            (select)=\"widget5.onSelect($event)\">\r\n                                        </ngx-charts-bar-vertical-stacked>\r\n                                    </div>\r\n\r\n                                    <div class=\"my-16\" fxFlex=\"100\" fxLayout=\"row wrap\" fxFlex.gt-sm=\"50\">\r\n\r\n                                        <div fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxLayoutAlign=\"center\"\r\n                                             *ngFor=\"let widget of widgets.widget5.supporting | keys\"\r\n                                             class=\"mb-24\">\r\n\r\n                                            <div class=\"px-24\">\r\n                                                <div class=\"h4 secondary-text\">{{widget.value.label}}</div>\r\n                                                <div class=\"mat-display-1 m-0\">\r\n                                                    {{widget.value.count[widget5.currentRange]}}\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <div class=\"h-64\">\r\n                                                <ngx-charts-area-chart\r\n                                                    *fuseIfOnDom\r\n                                                    [results]=\"widget.value.chart[widget5.currentRange]\"\r\n                                                    [scheme]=\"widget5.supporting.scheme\"\r\n                                                    [gradient]=\"widget5.supporting.gradient\"\r\n                                                    [xAxis]=\"widget5.supporting.xAxis\"\r\n                                                    [yAxis]=\"widget5.supporting.yAxis\"\r\n                                                    [legend]=\"widget5.supporting.legend\"\r\n                                                    [showXAxisLabel]=\"widget5.supporting.showXAxisLabel\"\r\n                                                    [showYAxisLabel]=\"widget5.supporting.showYAxisLabel\"\r\n                                                    [xAxisLabel]=\"widget5.supporting.xAxisLabel\"\r\n                                                    [yAxisLabel]=\"widget5.supporting.yAxisLabel\"\r\n                                                    [curve]=\"widget5.supporting.curve\">\r\n                                                </ngx-charts-area-chart>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 5 -->\r\n\r\n                        <!-- WIDGET 6 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget6.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified\" [(ngModel)]=\"widget6.currentRange\"\r\n                                                    aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget6.ranges | keys\"\r\n                                                        [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widget6.scheme\"\r\n                                        [results]=\"widgets.widget6.mainChart[widget6.currentRange]\"\r\n                                        [legend]=\"widget6.showLegend\"\r\n                                        [explodeSlices]=\"widget6.explodeSlices\"\r\n                                        [labels]=\"widget6.labels\"\r\n                                        [doughnut]=\"widget6.doughnut\"\r\n                                        [gradient]=\"widget6.gradient\"\r\n                                        (select)=\"widget6.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                                <div class=\"py-8 mh-16 border-top\" fxLayout=\"row wrap\" fxLayoutAlign=\"start center\">\r\n\r\n                                    <div class=\"py-8 border-right\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                                         fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                        <span class=\"mat-display-1 mb-0\">\r\n                                            {{widgets.widget6.footerLeft.count[widget6.currentRange]}}\r\n                                        </span>\r\n                                        <span class=\"h4\">{{widgets.widget6.footerLeft.title}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"py-8\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"100\"\r\n                                         fxFlex.gt-sm=\"50\">\r\n                                        <span class=\"mat-display-1 mb-0\">\r\n                                            {{widgets.widget6.footerRight.count[widget6.currentRange]}}\r\n                                        </span>\r\n                                        <span class=\"h4\">{{widgets.widget6.footerRight.title}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 6 -->\r\n\r\n                        <!-- WIDGET 7 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                <div class=\"px-16 py-8 border-bottom\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget7.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select class=\"simplified\" [(ngModel)]=\"widget7.currentRange\"\r\n                                                    aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget7.ranges | keys\"\r\n                                                        [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\"\r\n                                     *ngFor=\"let event of widgets.widget7.schedule[widget7.currentRange]\">\r\n                                    <div>\r\n                                        <div class=\"h3\">{{event.title}}</div>\r\n                                        <div>\r\n                                            <span class=\"secondary-text\">{{event.time}}</span>\r\n                                            <span *ngIf=\"event.location\">, {{event.location}}</span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <button mat-icon-button aria-label=\"More information\">\r\n                                        <mat-icon>more_vert</mat-icon>\r\n                                    </button>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 7 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Budget Summary\">\r\n\r\n                    <!-- WIDGET GROUP -->\r\n                    <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                         [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 8 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"h3 px-16 py-24\">\r\n                                    {{widgets.widget8.title}}\r\n                                </div>\r\n\r\n                                <mat-divider></mat-divider>\r\n\r\n                                <div class=\"h-400\">\r\n                                    <ngx-charts-pie-chart\r\n                                        *fuseIfOnDom\r\n                                        [scheme]=\"widget8.scheme\"\r\n                                        [results]=\"widgets.widget8.mainChart\"\r\n                                        [legend]=\"widget8.legend\"\r\n                                        [explodeSlices]=\"widget8.explodeSlices\"\r\n                                        [labels]=\"widget8.labels\"\r\n                                        [doughnut]=\"widget8.doughnut\"\r\n                                        [gradient]=\"widget8.gradient\"\r\n                                        (select)=\"widget8.onSelect($event)\">\r\n                                    </ngx-charts-pie-chart>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 8 -->\r\n\r\n                        <!-- WIDGET 9 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"column\"\r\n                                     fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n                                <div class=\"px-16 py-12 border-bottom\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h3\">{{widgets.widget9.title}}</div>\r\n                                    <mat-form-field>\r\n                                        <mat-select [(ngModel)]=\"widget9.currentRange\" aria-label=\"Change range\">\r\n                                            <mat-option *ngFor=\"let range of widgets.widget9.ranges | keys\"\r\n                                                        [value]=\"range.key\">\r\n                                                {{range.value}}\r\n                                            </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.weeklySpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.weeklySpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.weeklySpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.totalSpent.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.totalSpent.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.totalSpent.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24\" fxLayout=\"column\" fxLayoutAlign=\"center\"\r\n                                     fxLayout.gt-xs=\"row\"\r\n                                     fxLayoutAlign.gt-xs=\"space-between end\">\r\n                                    <div fxFlex=\"0 1 auto\">\r\n                                        <div class=\"h4 secondary-text\">{{widgets.widget9.remaining.title}}</div>\r\n                                        <div class=\"pt-8 mat-display-1 m-0 font-weight-300 text-nowrap\">\r\n                                            <span class=\"secondary-text\">$</span>\r\n                                            <span>{{widgets.widget9.remaining.count[widget9.currentRange]}}</span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"h-52\" fxFlex>\r\n                                        <ngx-charts-area-chart\r\n                                            *fuseIfOnDom\r\n                                            [results]=\"widgets.widget9.remaining.chart[widget9.currentRange]\"\r\n                                            [scheme]=\"widget9.scheme\"\r\n                                            [gradient]=\"widget9.gradient\"\r\n                                            [xAxis]=\"widget9.xAxis\"\r\n                                            [yAxis]=\"widget9.yAxis\"\r\n                                            [legend]=\"widget9.legend\"\r\n                                            [showXAxisLabel]=\"widget9.showXAxisLabel\"\r\n                                            [showYAxisLabel]=\"widget9.showYAxisLabel\"\r\n                                            [xAxisLabel]=\"widget9.xAxisLabel\"\r\n                                            [yAxisLabel]=\"widget9.yAxisLabel\"\r\n                                            [curve]=\"widget9.curve\">\r\n                                        </ngx-charts-area-chart>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"px-16 py-24 border-top\">\r\n                                    <div class=\"h4 secondary-text\">{{widgets.widget9.totalBudget.title}}</div>\r\n                                    <div class=\"pt-8 mat-display-1 m-0 font-weight-300\">\r\n                                        <span class=\"secondary-text\">$</span>\r\n                                        <span>{{widgets.widget9.totalBudget.count}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 9 -->\r\n\r\n                        <!-- WIDGET 10 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                                     fxFlex=\"100\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                <div class=\"simple-table-container\" ms-responsive-table>\r\n                                    <div class=\" table-title\">\r\n                                        {{widgets.widget10.title}}\r\n                                    </div>\r\n\r\n                                    <table class=\"simple\">\r\n\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th *ngFor=\"let column of widgets.widget10.table.columns\">\r\n                                                    {{column.title}}\r\n                                                </th>\r\n                                            </tr>\r\n                                        </thead>\r\n\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let row of widgets.widget10.table.rows\">\r\n                                                <td *ngFor=\"let cell of row\">\r\n                                                    <span class=\"p-4\" [ngClass]=\"cell.classes\">\r\n                                                        {{cell.value}}\r\n                                                    </span>\r\n                                                    <mat-icon *ngIf=\"cell.icon\" class=\"s-16\">{{cell.icon}}\r\n                                                    </mat-icon>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 10 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n\r\n                <mat-tab label=\"Team Members\">\r\n\r\n                    <!-- WIDGET GROUP -->\r\n                    <div class=\"widget-group grey-100-bg\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                         [@animateStagger]=\"{value:'50'}\">\r\n\r\n                        <!-- WIDGET 11 -->\r\n                        <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" class=\"widget\" fxLayout=\"row\"\r\n                                     fxFlex=\"100\">\r\n\r\n                            <!-- Front -->\r\n                            <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                                <div class=\"p-24 mb-8 border-bottom\" fxLayout=\"row\"\r\n                                     fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h2\">{{widgets.widget11.title}}</div>\r\n                                    <div class=\"text-boxed red-bg white-fg m-0\">\r\n                                        {{widgets.widget11.table.rows.length}}\r\n                                        members\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <mat-table #table [dataSource]=\"widget11.dataSource\">\r\n\r\n                                    <!-- Avatar Column -->\r\n                                    <ng-container matColumnDef=\"avatar\">\r\n                                        <mat-header-cell fxFlex=\"96px\" *matHeaderCellDef></mat-header-cell>\r\n                                        <mat-cell fxFlex=\"96px\" *matCellDef=\"let contact\">\r\n                                            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\r\n                                                 [src]=\"contact.avatar\"/>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Name Column -->\r\n                                    <ng-container matColumnDef=\"name\">\r\n                                        <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\">\r\n                                            <p class=\"text-truncate font-weight-600\">{{contact.name}}\r\n                                                {{contact.lastName}}</p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Position Column -->\r\n                                    <ng-container matColumnDef=\"position\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm>Position\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n                                            <p class=\"position text-truncate\">\r\n                                                {{contact.position}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Office Column -->\r\n                                    <ng-container matColumnDef=\"office\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Office\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                            <p class=\"office text-truncate\">\r\n                                                {{contact.office}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Email Column -->\r\n                                    <ng-container matColumnDef=\"email\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm>Email\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n                                            <p class=\"email text-truncate\">\r\n                                                {{contact.email}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <!-- Phone Column -->\r\n                                    <ng-container matColumnDef=\"phone\">\r\n                                        <mat-header-cell *matHeaderCellDef fxHide fxShow.gt-md>Phone\r\n                                        </mat-header-cell>\r\n                                        <mat-cell *matCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n                                            <p class=\"phone text-truncate\">\r\n                                                {{contact.phone}}\r\n                                            </p>\r\n                                        </mat-cell>\r\n                                    </ng-container>\r\n\r\n                                    <mat-header-row\r\n                                        *matHeaderRowDef=\"widgets.widget11.table.columns\"></mat-header-row>\r\n                                    <mat-row *matRowDef=\"let contact; columns: widgets.widget11.table.columns;\">\r\n                                    </mat-row>\r\n                                </mat-table>\r\n                            </div>\r\n                            <!-- / Front -->\r\n\r\n                        </fuse-widget>\r\n                        <!-- / WIDGET 11 -->\r\n\r\n                    </div>\r\n                    <!-- / WIDGET GROUP -->\r\n\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n        </div>\r\n        <!-- / CONTENT -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#dashboard-project > .sidebar {\n  width: 280px;\n  min-width: 280px;\n  max-width: 280px; }\n\n#dashboard-project > .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px; }\n\n#dashboard-project > .center > .header .selected-project {\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n\n#dashboard-project > .center > .header .project-selector {\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n\n#dashboard-project > .center > .header .project-selector mat-icon {\n      color: #FFFFFF; }\n\n#dashboard-project > .center > .content {\n  flex: 1; }\n\n#dashboard-project > .center > .content mat-tab-group {\n    height: 100%; }\n\n#dashboard-project > .center > .content mat-tab-group .mat-tab-body-wrapper {\n      flex-grow: 1; }\n\n#dashboard-project > .center > .content .mat-tab-label-container {\n    padding: 0 24px; }\n\n#dashboard-project .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectDashboardComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardComponent", function() { return ProjectDashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.service */ "./src/app/main/apps/dashboards/project/project.service.ts");
/* harmony import */ var _fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/sidebar/sidebar.service */ "./src/@fuse/components/sidebar/sidebar.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectDashboardComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {ProjectDashboardService} _projectDashboardService
     */
    function ProjectDashboardComponent(_fuseSidebarService, _projectDashboardService) {
        var _this = this;
        this._fuseSidebarService = _fuseSidebarService;
        this._projectDashboardService = _projectDashboardService;
        this.widget5 = {};
        this.widget6 = {};
        this.widget7 = {};
        this.widget8 = {};
        this.widget9 = {};
        this.widget11 = {};
        this.dateNow = Date.now();
        /**
         * Widget 5
         */
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
            }
        };
        /**
         * Widget 6
         */
        this.widget6 = {
            currentRange: 'TW',
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: true,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 7
         */
        this.widget7 = {
            currentRange: 'T'
        };
        /**
         * Widget 8
         */
        this.widget8 = {
            legend: false,
            explodeSlices: false,
            labels: true,
            doughnut: false,
            gradient: false,
            scheme: {
                domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
            },
            onSelect: function (ev) {
                console.log(ev);
            }
        };
        /**
         * Widget 9
         */
        this.widget9 = {
            currentRange: 'TW',
            xAxis: false,
            yAxis: false,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            curve: d3_shape__WEBPACK_IMPORTED_MODULE_3__["curveBasis"]
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ProjectDashboardComponent.prototype.ngOnInit = function () {
        this.projects = this._projectDashboardService.projects;
        this.selectedProject = this.projects[0];
        this.widgets = this._projectDashboardService.widgets;
        /**
         * Widget 11
         */
        this.widget11.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
        this.widget11.dataSource = new FilesDataSource(this.widget11);
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Toggle the sidebar
     *
     * @param name
     */
    ProjectDashboardComponent.prototype.toggleSidebar = function (name) {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    };
    ProjectDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'project-dashboard',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/main/apps/dashboards/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/main/apps/dashboards/project/project.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_components_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_6__["FuseSidebarService"],
            app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectDashboardService"]])
    ], ProjectDashboardComponent);
    return ProjectDashboardComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    /**
     * Constructor
     *
     * @param _widget11
     */
    function FilesDataSource(_widget11) {
        var _this = _super.call(this) || this;
        _this._widget11 = _widget11;
        return _this;
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    FilesDataSource.prototype.connect = function () {
        return this._widget11.onContactsChanged;
    };
    /**
     * Disconnect
     */
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.module.ts ***!
  \****************************************************************/
/*! exports provided: ProjectDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardModule", function() { return ProjectDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.component */ "./src/app/main/apps/dashboards/project/project.component.ts");
/* harmony import */ var app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/dashboards/project/project.service */ "./src/app/main/apps/dashboards/project/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '**',
        component: app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDashboardComponent"],
        resolve: {
            data: app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectDashboardService"]
        }
    }
];
var ProjectDashboardModule = /** @class */ (function () {
    function ProjectDashboardModule() {
    }
    ProjectDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_dashboards_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectDashboardComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseSidebarModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_6__["FuseWidgetModule"]
            ],
            providers: [
                app_main_apps_dashboards_project_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectDashboardService"]
            ]
        })
    ], ProjectDashboardModule);
    return ProjectDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/apps/dashboards/project/project.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/dashboards/project/project.service.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDashboardService", function() { return ProjectDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectDashboardService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ProjectDashboardService(_httpClient) {
        this._httpClient = _httpClient;
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProjectDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProjects(),
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get projects
     *
     * @returns {Promise<any>}
     */
    ProjectDashboardService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get widgets
     *
     * @returns {Promise<any>}
     */
    ProjectDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/project-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    ProjectDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectDashboardService);
    return ProjectDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-project-project-module.js.map