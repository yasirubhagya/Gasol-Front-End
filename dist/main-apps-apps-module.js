(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-apps-apps-module"],{

/***/ "./src/app/main/apps/apps.module.ts":
/*!******************************************!*\
  !*** ./src/app/main/apps/apps.module.ts ***!
  \******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#AnalyticsDashboardModule'
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#ProjectDashboardModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#MailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#MailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#ChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#EcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#AcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#TodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FileManagerModule'
    },
    {
        path: 'contacts',
        loadChildren: './contacts/contacts.module#ContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#ScrumboardModule'
    }
];
var AppsModule = /** @class */ (function () {
    function AppsModule() {
    }
    AppsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ]
        })
    ], AppsModule);
    return AppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-apps-apps-module.js.map