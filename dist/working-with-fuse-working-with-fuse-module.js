(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["working-with-fuse-working-with-fuse-module"],{

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Directory Structure</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            Fuse has a fairly simple directory structure. All source code that you will need stays inside the\r\n            <b>/src</b> folder.\r\n        </p>\r\n\r\n        <p>\r\n            Once you build your app, a <b>/dist</b> folder will appear at the root which will contain the built app. You\r\n            can simply upload the contents of it to your server to start running your app.\r\n        </p>\r\n\r\n        <div class=\"main-title\">Source directory (/src)</div>\r\n\r\n        <p>\r\n            The source folder has the general Angular CLI project structure along with an additional folder called\r\n            <b>/@fuse</b> which contains the core elements of the Fuse.\r\n        </p>\r\n\r\n        <p class=\"message-box warning\">\r\n            We recommend you not to touch <b>/@fuse</b> directory to easily update Fuse in the future.\r\n        </p>\r\n\r\n        <div class=\"section-title\">/app</div>\r\n\r\n        <p>\r\n            This folder contains the <b>AppComponent</b> along with the following directories. Everything that being\r\n            contained inside these folders are belong to your app and you can edit them however you like while\r\n            building your app:\r\n        </p>\r\n\r\n        <ul>\r\n            <li>\r\n                <b>/fake-db</b>: The fake database data files for Fuse apps.\r\n            </li>\r\n            <li>\r\n                <b>/fuse-config</b>: The main config file for configuring the Fuse template.\r\n            </li>\r\n            <li>\r\n                <b>/layout</b>: Contains the template layout components.\r\n            </li>\r\n            <li>\r\n                <b>/main</b>: Example Fuse apps and ready to use pages and page layouts.\r\n            </li>\r\n            <li>\r\n                <b>/navigation</b>: The main navigation data.\r\n            </li>\r\n            <li>\r\n                <b>/store</b>: Ngrx-Mail app related store files.\r\n            </li>\r\n\r\n        </ul>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DocsWorkingWithFuseDirectoryStructureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseDirectoryStructureComponent", function() { return DocsWorkingWithFuseDirectoryStructureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseDirectoryStructureComponent = /** @class */ (function () {
    function DocsWorkingWithFuseDirectoryStructureComponent() {
    }
    DocsWorkingWithFuseDirectoryStructureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-directory-structure',
            template: __webpack_require__(/*! ./directory-structure.component.html */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.html"),
            styles: [__webpack_require__(/*! ./directory-structure.component.scss */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseDirectoryStructureComponent);
    return DocsWorkingWithFuseDirectoryStructureComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24 h-160\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n            <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n                <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n                <span class=\"secondary-text\">Components</span>\r\n            </div>\r\n            <div class=\"h2 mt-16\">Multi Language</div>\r\n        </div>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            Fuse uses <a class=\"link\" href=\"https://github.com/ngx-translate/core\" target=\"_blank\">ngx-translate</a>\r\n            module and supports multiple languages and translations.\r\n        </p>\r\n\r\n        <p class=\"message-box warning\">\r\n            Since not everybody need multi-language setup for their apps, we decided NOT to put translations everywhere.\r\n            If you want to see the translations in action, visit <a class=\"link\" [routerLink]=\"'/apps/mail'\">\r\n            Mail</a> app and then change the language from the <b>Toolbar.</b>\r\n            <br><br>\r\n            Mail app is the only app that has translations for demonstration purposes. You can look at its source code\r\n            to see the usage.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Usage</div>\r\n        <p>In order to use the translations, create your translation file within the module you want to use\r\n            the translations. For example, for the Mail app, create <code>i18n/en.ts</code> file inside the\r\n            <code>apps/mail</code> folder.\r\n        </p>\r\n        <p>\r\n            The structure of the translation file is important and it must define the language id along with the\r\n            translation data:\r\n        </p>\r\n\r\n        <p class=\"py-8\">\r\n            <fuse-highlight lang=\"typescript\">\r\n                <textarea #source>\r\n                    // i18n/en.ts\r\n                    export const locale = {\r\n                        lang: 'en',\r\n                        data: {\r\n                            'MAIL': {\r\n                             'COMPOSE': 'COMPOSE'\r\n                            }\r\n                        }\r\n                    };\r\n\r\n                    // i18n/tr.ts\r\n                    export const locale = {\r\n                        lang: 'tr',\r\n                        data: {\r\n                            'MAIL': {\r\n                             'COMPOSE': 'YENİ E-POSTA'\r\n                            }\r\n                        }\r\n                    };\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </p>\r\n\r\n        <p>\r\n            After you create your translation files, open the <code>*.component.ts</code> file for the module you\r\n            want to have translations, and register your translation file. For this example, we will use the\r\n            <code>mail.component.ts</code> file:\r\n        </p>\r\n\r\n        <fuse-highlight lang=\"typescript\">\r\n            <textarea #source>\r\n                // Your imports\r\n                import { ... } from '..';\r\n\r\n                // Import the locale files\r\n                import { locale as english } from './i18n/en';\r\n                import { locale as turkish } from './i18n/tr';\r\n\r\n                @Component({\r\n                    selector : 'mail',\r\n                    templateUrl: './mail.component.html',\r\n                    styleUrls : ['./mail.component.scss']\r\n                })\r\n                export class MailComponent\r\n                {\r\n                    constructor(private translationLoader: FuseTranslationLoaderService)\r\n                {\r\n                    this.translationLoader.loadTranslations(english, turkish);\r\n                }\r\n\r\n                ...\r\n                }\r\n            </textarea>\r\n        </fuse-highlight>\r\n\r\n        <div class=\"section-title\">Changing the language</div>\r\n\r\n        <p>\r\n            Changing the current language can happen instantly. Simply call the <code>use</code> method from the\r\n            translate service:\r\n        </p>\r\n\r\n        <fuse-highlight lang=\"typescript\">\r\n            <textarea #source>\r\n                import { TranslateService } from '@ngx-translate/core';\r\n\r\n                constructor(private translate: TranslateService) {}\r\n\r\n                setLanguage()\r\n                {\r\n                    // Use the selected language for translations\r\n                    this.translate.use('tr');\r\n                }\r\n            </textarea>\r\n        </fuse-highlight>\r\n\r\n        <p>\r\n            More detailed usage of the translation service can be found in the <code>toolbar.component.ts</code>\r\n            file.\r\n        </p>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DocsWorkingWithFuseMultiLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseMultiLanguageComponent", function() { return DocsWorkingWithFuseMultiLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseMultiLanguageComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function DocsWorkingWithFuseMultiLanguageComponent() {
    }
    DocsWorkingWithFuseMultiLanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-multi-language',
            template: __webpack_require__(/*! ./multi-language.component.html */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.html"),
            styles: [__webpack_require__(/*! ./multi-language.component.scss */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseMultiLanguageComponent);
    return DocsWorkingWithFuseMultiLanguageComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Page Layouts</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            One of the strong sides of the Fuse is its Page layouts. Every single app, pre-built page and even this\r\n            documentation pages uses the Fuse's page layouts.\r\n        </p>\r\n\r\n        <p>\r\n            Simply, page layouts are pre-built layouts with a demo content which you can simply copy/paste and start\r\n            building your own page or app based on it. Because page layouts, it's very easy to replicate any page style\r\n            that you can find in Fuse, without needing to remove all the demo functionality from them.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Identifying a Page Layout</div>\r\n\r\n        <p>\r\n            You can easily identify the layout that particular page or app using by simply looking at its main html\r\n            file. The very top wrapper div will tell you everything you need to know:\r\n        </p>\r\n\r\n        <fuse-highlight lang=\"html\" class=\"source-code\">\r\n            <textarea #source hidden=\"hidden\">\r\n                <div class=\"page-layout carded left-sidebar\">\r\n                    ...\r\n                </div>\r\n            </textarea>\r\n        </fuse-highlight>\r\n\r\n        <p>\r\n            The above example is using the <b>carded</b> style page with a <b>left sidebar</b> setup which can be found\r\n            in <b>/ui/page-layouts/carded/left-sidebar-1</b> directory.\r\n        </p>\r\n\r\n        <p class=\"message-box info\">\r\n            The numbers in the folder names represents the scrolling style of that particular page layout. For example,\r\n            <b>left-sidebar-1</b> has the exact same layout with <b>left-sidebar-2</b> but the former one uses\r\n            a single scrollbar while the latter one uses separate scrollbars for its content and its sidebar.\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DocsWorkingWithFusePageLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFusePageLayoutsComponent", function() { return DocsWorkingWithFusePageLayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFusePageLayoutsComponent = /** @class */ (function () {
    function DocsWorkingWithFusePageLayoutsComponent() {
    }
    DocsWorkingWithFusePageLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-page-layouts',
            template: __webpack_require__(/*! ./page-layouts.component.html */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.html"),
            styles: [__webpack_require__(/*! ./page-layouts.component.scss */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFusePageLayoutsComponent);
    return DocsWorkingWithFusePageLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Production</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <!-- BUILD -->\r\n        <div class=\"section-title\">Build</div>\r\n\r\n        <p>\r\n            The following command builds the application into an output directory\r\n        </p>\r\n\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng build\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n\r\n        <p>\r\n            The build artifacts will be stored in the <b>/dist</b> directory. All commands that build or serve your\r\n            project, will delete the output directory.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Bundling & Tree-Shaking (AoT)</div>\r\n\r\n        <p>\r\n            To build your app with AoT (Ahead of Time) compiler, use the following command:\r\n        </p>\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng build --prod\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <p>\r\n            or if you want to serve with AoT, use the following:\r\n        </p>\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng serve --prod\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <p>\r\n            This will make use of <b>uglifying</b> and <b>tree-shaking</b> functionality while serving the app from\r\n            the memory.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Alternative AoT compiler</div>\r\n\r\n        <p>\r\n            If you happen to stumble upon an error while running the\r\n        </p>\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng build --prod\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <p>\r\n            command, there is an alternative one that you can use. The following command will run the <b>ng build\r\n            --prod</b> command with an increased memory size so your app can be built:\r\n        </p>\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    npm run build-prod\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <!-- / BUILD -->\r\n\r\n        <!--  TESTS -->\r\n        <div class=\"section-title\">Running unit tests</div>\r\n\r\n        <div class=\"mt-24\">\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng test\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <p>\r\n            Tests will execute after a build is executed via\r\n            <a href=\"http://karma-runner.github.io/0.13/index.html\" target=\"_blank\">Karma</a>, and it will automatically\r\n            watch your files for changes.\r\n        </p>\r\n        <p>\r\n            You can run tests a single time via\r\n            <span class=\"text-boxed\">--watch=false</span>\r\n            or\r\n            <span class=\"text-boxed\">--single-run</span>\r\n        </p>\r\n        <!-- / TESTS -->\r\n\r\n        <!--  E2E TESTS -->\r\n        <div class=\"section-title\">Running end-to-end tests</div>\r\n        <div class=\"mt-24\">\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng e2e\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <p>\r\n            Before running the tests make sure you are serving the app via\r\n            <span class=\"text-boxed\">ng serve.</span>\r\n\r\n            End-to-end tests are run via <a href=\"https://angular.github.io/protractor/\"\r\n                                            target=\"_blank\">Protractor.</a>\r\n        </p>\r\n        <!-- / E2E TESTS -->\r\n\r\n        <p class=\"mt-32\">\r\n            For more information about angular-cli commands, check the <a href=\"https://github.com/angular/angular-cli\"\r\n                                                                          target=\"_blank\">angular-cli</a>.\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/production/production.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/production/production.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DocsWorkingWithFuseProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseProductionComponent", function() { return DocsWorkingWithFuseProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseProductionComponent = /** @class */ (function () {
    function DocsWorkingWithFuseProductionComponent() {
    }
    DocsWorkingWithFuseProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-production',
            template: __webpack_require__(/*! ./production.component.html */ "./src/app/main/documentation/working-with-fuse/production/production.component.html"),
            styles: [__webpack_require__(/*! ./production.component.scss */ "./src/app/main/documentation/working-with-fuse/production/production.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseProductionComponent);
    return DocsWorkingWithFuseProductionComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Server</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <!-- SERVER -->\r\n        <div class=\"section-title\">Server</div>\r\n        <p>\r\n            While still in your work folder, run the following command in the console application:\r\n        </p>\r\n\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng serve\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n\r\n        <p>\r\n            And that's it. Angular CLI will take care everything and start the Fuse.\r\n        </p>\r\n\r\n        <p>\r\n            You can check out your console application to get further information about the server. By default, it\r\n            will run on <b>http://localhost:4200</b> but it might change depending on your setup.\r\n        </p>\r\n\r\n        <p>\r\n            Also, there are other commands available in Fuse which may help you in your development. To see the complete\r\n            list of available npm commands, check the\r\n            <span class=\"text-boxed\">package.json</span>\r\n            file.\r\n        </p>\r\n        <!-- / SERVER -->\r\n\r\n        <!-- RELOADING THE SERVER -->\r\n        <div class=\"section-title\">Reloading the Server</div>\r\n        <p>\r\n            The\r\n            <span class=\"text-boxed\">ng serve</span>\r\n            command will watch your files and reload the page for you as you make changes.\r\n            But for some reason, if you need to manually restart the server, you can do it by pressing <b>Ctrl +\r\n            C</b> on your keyboard while in the console application and then run the following command once again:\r\n        </p>\r\n        <div>\r\n            <fuse-highlight lang=\"bash\" class=\"source-code\" fxFlex=\"100%\">\r\n                <textarea #source hidden=\"hidden\">\r\n                    ng serve\r\n                </textarea>\r\n            </fuse-highlight>\r\n        </div>\r\n        <!-- / RELOADING THE SERVER -->\r\n\r\n        <p>\r\n            For more information about angular-cli commands, check the\r\n            <a href=\"https://github.com/angular/angular-cli\" target=\"_blank\">angular-cli</a>.\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/server/server.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/server/server.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DocsWorkingWithFuseServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseServerComponent", function() { return DocsWorkingWithFuseServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseServerComponent = /** @class */ (function () {
    function DocsWorkingWithFuseServerComponent() {
    }
    DocsWorkingWithFuseServerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-server',
            template: __webpack_require__(/*! ./server.component.html */ "./src/app/main/documentation/working-with-fuse/server/server.component.html"),
            styles: [__webpack_require__(/*! ./server.component.scss */ "./src/app/main/documentation/working-with-fuse/server/server.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseServerComponent);
    return DocsWorkingWithFuseServerComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Theme Layouts</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            Fuse comes with variety of different Theme Layouts which you can see and try them from the configuration\r\n            sidebar (Click on the animated, spinning cog button from the right side of your screen). These layouts are\r\n            accessible from <b>/src/app/layouts</b> directory and you can modify them however you like.\r\n        </p>\r\n\r\n        <p>\r\n            Each layout has its own options. Those options allow you to configure the layout elements such as Toolbar,\r\n            Footer and Navbar.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Directory Structure</div>\r\n\r\n        <p>\r\n            Inside the <b>/layouts</b> directory, you will find the following structure:\r\n        </p>\r\n\r\n        <ul>\r\n            <li>\r\n                <b>/components</b>: Contains the layout elements such as Toolbar, Footer and Navbar.\r\n            </li>\r\n            <li>\r\n                <b>/vertical</b>: Contains the layout styles with vertical navigation option.\r\n            </li>\r\n            <li>\r\n                <b>/horizontal</b>: Contains the layout styles with horizontal navigation option.\r\n            </li>\r\n        </ul>\r\n\r\n        <p class=\"message-box info\">\r\n            Each layout loads the layout elements from <b>/components</b> directory. That means, any modifications\r\n            you will make to those elements, will be avilable acrosss the layouts.\r\n        </p>\r\n\r\n        <div class=\"section-title\">Configuring the Layout</div>\r\n\r\n        <p>\r\n            Fuse has a powerful layout system which allows you to configure and use a different layout per route. Each\r\n            route can have its own layout configuration meaning that it's very easy to have pages like login page where\r\n            there isn't any toolbar or navbar showing, without leaving the Fuse.\r\n        </p>\r\n\r\n        <p>\r\n            You can get more information about the <b>Fuse Config Service</b> and its usage from\r\n            <a routerLink=\"/documentation/services/config\">Config</a> documantation page.\r\n        </p>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DocsWorkingWithFuseThemeLayoutsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseThemeLayoutsComponent", function() { return DocsWorkingWithFuseThemeLayoutsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseThemeLayoutsComponent = /** @class */ (function () {
    function DocsWorkingWithFuseThemeLayoutsComponent() {
    }
    DocsWorkingWithFuseThemeLayoutsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-theme-layouts',
            template: __webpack_require__(/*! ./theme-layouts.component.html */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.html"),
            styles: [__webpack_require__(/*! ./theme-layouts.component.scss */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseThemeLayoutsComponent);
    return DocsWorkingWithFuseThemeLayoutsComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-layout simple fullwidth docs\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n\r\n        <div class=\"black-fg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"secondary-text s-18\">home</mat-icon>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Documentation</span>\r\n            <mat-icon class=\"secondary-text s-16\">chevron_right</mat-icon>\r\n            <span class=\"secondary-text\">Working with Fuse</span>\r\n        </div>\r\n\r\n        <div class=\"h2 mt-16\">Updating Fuse</div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <p>\r\n            Due to the nature of apps, we cannot give any set instructions for updating Fuse. It heavily depends on your\r\n            project and it's up to you to update your code. However, there are couple points that we want to put forward\r\n            which might help you to keep Fuse updated.\r\n        </p>\r\n\r\n        <ul>\r\n            <li>\r\n                The most important one is not to touch the <b>/@fuse</b> directory but sometimes that is going to be\r\n                inevitable and in those cases, try to keep the modifications minimal.\r\n            </li>\r\n\r\n            <li>\r\n                Usually Angular and Angular Material libraries do some breaking changes and force our hands to change\r\n                things. In those cases, it's always good to check their official Changelogs to see what they did.\r\n                Usually they provide clear instructions and even helper tools to update your code.\r\n            </li>\r\n\r\n            <li>\r\n                Before starting your new project, <a href=\"http://www.withinpixels.com/themes/fuse-github\"\r\n                                                     target=\"_blank\">join our Github repo</a>, fork it and build your\r\n                app on top of that fork. This way, in the future, you can easily merge the changes from the main repo\r\n                onto your fork. This will require merging a lot of changes manually, but it's the best way to keep the\r\n                Fuse updated.\r\n            </li>\r\n        </ul>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: DocsWorkingWithFuseUpdatingFuseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsWorkingWithFuseUpdatingFuseComponent", function() { return DocsWorkingWithFuseUpdatingFuseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocsWorkingWithFuseUpdatingFuseComponent = /** @class */ (function () {
    function DocsWorkingWithFuseUpdatingFuseComponent() {
    }
    DocsWorkingWithFuseUpdatingFuseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'docs-working-with-fuse-updating-fuse',
            template: __webpack_require__(/*! ./updating-fuse.component.html */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.html"),
            styles: [__webpack_require__(/*! ./updating-fuse.component.scss */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DocsWorkingWithFuseUpdatingFuseComponent);
    return DocsWorkingWithFuseUpdatingFuseComponent;
}());



/***/ }),

/***/ "./src/app/main/documentation/working-with-fuse/working-with-fuse.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/documentation/working-with-fuse/working-with-fuse.module.ts ***!
  \**********************************************************************************/
/*! exports provided: WorkingWithFuseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingWithFuseModule", function() { return WorkingWithFuseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/server/server.component */ "./src/app/main/documentation/working-with-fuse/server/server.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/production/production.component */ "./src/app/main/documentation/working-with-fuse/production/production.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/directory-structure/directory-structure.component */ "./src/app/main/documentation/working-with-fuse/directory-structure/directory-structure.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component */ "./src/app/main/documentation/working-with-fuse/updating-fuse/updating-fuse.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/multi-language/multi-language.component */ "./src/app/main/documentation/working-with-fuse/multi-language/multi-language.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component */ "./src/app/main/documentation/working-with-fuse/theme-layouts/theme-layouts.component.ts");
/* harmony import */ var app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/documentation/working-with-fuse/page-layouts/page-layouts.component */ "./src/app/main/documentation/working-with-fuse/page-layouts/page-layouts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: 'server',
        component: app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__["DocsWorkingWithFuseServerComponent"]
    },
    {
        path: 'production',
        component: app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__["DocsWorkingWithFuseProductionComponent"]
    },
    {
        path: 'directory-structure',
        component: app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__["DocsWorkingWithFuseDirectoryStructureComponent"]
    },
    {
        path: 'updating-fuse',
        component: app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__["DocsWorkingWithFuseUpdatingFuseComponent"]
    },
    {
        path: 'multi-language',
        component: app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__["DocsWorkingWithFuseMultiLanguageComponent"]
    },
    {
        path: 'theme-layouts',
        component: app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_10__["DocsWorkingWithFuseThemeLayoutsComponent"]
    },
    {
        path: 'page-layouts',
        component: app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_11__["DocsWorkingWithFusePageLayoutsComponent"]
    }
];
var WorkingWithFuseModule = /** @class */ (function () {
    function WorkingWithFuseModule() {
    }
    WorkingWithFuseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_documentation_working_with_fuse_server_server_component__WEBPACK_IMPORTED_MODULE_5__["DocsWorkingWithFuseServerComponent"],
                app_main_documentation_working_with_fuse_production_production_component__WEBPACK_IMPORTED_MODULE_6__["DocsWorkingWithFuseProductionComponent"],
                app_main_documentation_working_with_fuse_directory_structure_directory_structure_component__WEBPACK_IMPORTED_MODULE_7__["DocsWorkingWithFuseDirectoryStructureComponent"],
                app_main_documentation_working_with_fuse_updating_fuse_updating_fuse_component__WEBPACK_IMPORTED_MODULE_8__["DocsWorkingWithFuseUpdatingFuseComponent"],
                app_main_documentation_working_with_fuse_multi_language_multi_language_component__WEBPACK_IMPORTED_MODULE_9__["DocsWorkingWithFuseMultiLanguageComponent"],
                app_main_documentation_working_with_fuse_theme_layouts_theme_layouts_component__WEBPACK_IMPORTED_MODULE_10__["DocsWorkingWithFuseThemeLayoutsComponent"],
                app_main_documentation_working_with_fuse_page_layouts_page_layouts_component__WEBPACK_IMPORTED_MODULE_11__["DocsWorkingWithFusePageLayoutsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseHighlightModule"]
            ]
        })
    ], WorkingWithFuseModule);
    return WorkingWithFuseModule;
}());



/***/ })

}]);
//# sourceMappingURL=working-with-fuse-working-with-fuse-module.js.map