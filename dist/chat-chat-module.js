(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"big-circle mat-elevation-z1 app-logo\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n         [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n\r\n        <mat-icon class=\"s-64 s-mat-128 mat-accent\">chat</mat-icon>\r\n\r\n    </div>\r\n\r\n    <span class=\"app-title my-24\" [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">Chat App</span>\r\n\r\n    <span fxHide fxShow.gt-md class=\"app-message\" [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n        Select contact to start the chat!..\r\n    </span>\r\n\r\n    <button mat-raised-button fxHide.gt-md fuseMatSidenavToggler=\"chat-left-sidenav\">\r\n        Select contact to start the chat!..\r\n    </button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: flex;\n  flex: 1;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8)); }\n:host .big-circle {\n    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8));\n    border-radius: 50%;\n    width: 300px;\n    height: 300px;\n    line-height: 300px;\n    text-align: center; }\n@media (max-width: 959px) {\n      :host .big-circle {\n        width: 160px;\n        height: 160px;\n        line-height: 160px; } }\n:host .app-title {\n    font-weight: 500;\n    font-size: 32px; }\n:host .secondary-text {\n    font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-start/chat-start.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-start/chat-start.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatStartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatStartComponent", function() { return ChatStartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatStartComponent = /** @class */ (function () {
    function ChatStartComponent() {
    }
    ChatStartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-start',
            template: __webpack_require__(/*! ./chat-start.component.html */ "./src/app/main/apps/chat/chat-start/chat-start.component.html"),
            styles: [__webpack_require__(/*! ./chat-start.component.scss */ "./src/app/main/apps/chat/chat-start/chat-start.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], ChatStartComponent);
    return ChatStartComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CHAT -->\r\n<div class=\"chat\" fxFlex fxLayout=\"column\">\r\n\r\n    <!-- CHAT TOOLBAR -->\r\n    <mat-toolbar class=\"chat-toolbar\">\r\n\r\n        <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <!-- RESPONSIVE CHATS BUTTON-->\r\n                <button mat-icon-button fxHide.gt-md class=\"responsive-chats-button mr-16\"\r\n                        fuseMatSidenavToggler=\"chat-left-sidenav\"\r\n                        aria-label=\"chats button\">\r\n                    <mat-icon>chat</mat-icon>\r\n                </button>\r\n                <!-- / RESPONSIVE CHATS BUTTON-->\r\n\r\n                <!-- CHAT CONTACT-->\r\n                <div class=\"chat-contact\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n                     fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\r\n\r\n                    <div class=\"avatar-wrapper\">\r\n\r\n                        <img [src]=\"contact.avatar\"\r\n                             class=\"avatar\"\r\n                             alt=\"{{contact.name}}\"/>\r\n\r\n                        <mat-icon class=\"s-16 status\"\r\n                                  [ngClass]=\"contact.status\">\r\n                        </mat-icon>\r\n                    </div>\r\n\r\n                    <div class=\"chat-contact-name\">\r\n                        {{contact.name}}\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / CHAT CONTACT-->\r\n            </div>\r\n\r\n            <div>\r\n                <button mat-icon-button [matMenuTriggerFor]=\"contactMenu\" aria-label=\"more\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n\r\n                <mat-menu #contactMenu=\"matMenu\">\r\n                    <button mat-menu-item fuseMatSidenavToggler=\"chat-right-sidenav\" (click)=\"selectContact()\">\r\n                        Contact Info\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n\r\n        </div>\r\n    </mat-toolbar>\r\n    <!-- / CHAT TOOLBAR -->\r\n\r\n    <!-- CHAT CONTENT -->\r\n    <div id=\"chat-content\" fxFlex fusePerfectScrollbar>\r\n\r\n        <!-- CHAT MESSAGES -->\r\n        <div class=\"chat-messages\">\r\n\r\n            <!-- MESSAGE -->\r\n            <div fxLayout=\"row\" *ngFor=\"let message of dialog\" class=\"message-row\"\r\n                 [ngClass]=\"{'user' :message.who === user.id}\">\r\n\r\n                <img *ngIf=\"message.who === contact.id\"\r\n                     src=\"{{contact.avatar}}\"\r\n                     class=\"avatar\"\r\n                     alt=\"{{contact.name}}\"/>\r\n\r\n                <img *ngIf=\"message.who ===user.id\" class=\"avatar\" src=\"{{user.avatar}}\">\r\n\r\n                <div class=\"bubble\">\r\n                    <div class=\"message\">{{message.message}}</div>\r\n                    <div class=\"time secondary-text\">{{message.time | date:'medium'}}</div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- / MESSAGE -->\r\n\r\n        </div>\r\n        <!-- CHAT MESSAGES -->\r\n\r\n    </div>\r\n    <!-- / CHAT CONTENT -->\r\n\r\n    <!-- CHAT FOOTER -->\r\n    <div class=\"chat-footer\" fxFlex=\"1 0 auto\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n        <!-- REPLY FORM -->\r\n        <form #replyForm=\"ngForm\"\r\n              (ngSubmit)=\"reply()\"\r\n              (keyup.enter)=\"reply()\"\r\n              fxFlex class=\"reply-form\"\r\n              fxLayout=\"row\"\r\n              fxLayoutAlign=\"start center\">\r\n\r\n            <mat-form-field fxFlex floatLabel=\"never\">\r\n                <textarea matInput #replyInput placeholder=\"Type and hit enter to send message\"\r\n                          ngModel name=\"message\"></textarea>\r\n            </mat-form-field>\r\n\r\n            <button mat-fab type=\"submit\" aria-label=\"Send message\">\r\n                <mat-icon>send</mat-icon>\r\n            </button>\r\n\r\n        </form>\r\n        <!-- / REPLY FORM -->\r\n\r\n    </div>\r\n    <!-- / CHAT FOOTER-->\r\n\r\n</div>\r\n<!-- / CHAT -->\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex: 1 0 auto;\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8));\n  overflow: hidden;\n  max-width: 100%; }\n  :host .chat .chat-toolbar {\n    min-height: 64px;\n    background-color: #F3F4F5;\n    color: rgba(0, 0, 0, 0.87);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n  :host .chat .chat-toolbar .responsive-chats-button {\n      padding: 0; }\n  :host .chat .chat-toolbar .chat-contact {\n      cursor: pointer; }\n  :host .chat .chat-toolbar .chat-contact .avatar {\n        margin-right: 16px; }\n  :host .chat #chat-content {\n    background: transparent;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n  :host .chat #chat-content .message-row {\n      padding: 16px; }\n  :host .chat #chat-content .message-row .bubble {\n        position: relative;\n        padding: 6px 7px 8px 9px;\n        background-color: #FFF;\n        box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n        border-radius: 6px; }\n  :host .chat #chat-content .message-row .bubble:before {\n          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADGUExURQAAAP////b29vn5+f///wAAAP///wAAAAAAAP///9ra2v////j4+PHx8fv7++Hh4fHx8f////////////////39/QAAAP////////z8/P////39/f39/fz8/P////////////z8/P////////////z8/P////////////v7+/Hx8f///9bW1vz8/K2trf////39/f39/WJiYgAAAExMTFtbWwAAAN3d3cjIyPr6+vX19QAAAO7u7vz8/NTU1Ofn5zMzM////zGPlXsAAABBdFJOUwAcm/kREh4CCDWL1SneR6TfAQffhMYK/A5nRrLWfRc5DW2ih5f+19Kn+9v4g/1LCJuXHwQUKgahcXS6DNnlDMMKKzPoTgAAAKBJREFUKM+V08USwmAQA+C/0NIWd3d3d8/7vxTMcIPkQK7f7CG7s8bQAOY/SCuwFYQU1P+eiCqIK2gpWCmoCrAgoKQgJ8CHgIqAMjg0MxxSQ3DogEMWFBZtUPAHYGB1CyDQWE6AH7BrfXzlAxGAQhECTGAmwN1Okz0Gb/LW4fEItIfrOfNELMh3tck7u+PhcT2zQ7l77/K8iY8yJwV3BeYFqpc/uSyPGdAAAAAASUVORK5CYII=);\n          content: '';\n          position: absolute;\n          left: -11px;\n          bottom: 3px;\n          width: 12px;\n          height: 19px;\n          background-position: 50% 50%;\n          background-repeat: no-repeat;\n          background-size: contain; }\n  :host .chat #chat-content .message-row .bubble .message {\n          white-space: pre-wrap; }\n  :host .chat #chat-content .message-row .bubble .time {\n          font-size: 11px;\n          margin-top: 8px;\n          text-align: right; }\n  :host .chat #chat-content .message-row.contact .avatar {\n        margin: 0 16px 0 0; }\n  :host .chat #chat-content .message-row.user {\n        align-items: flex-end; }\n  :host .chat #chat-content .message-row.user .avatar {\n          order: 2;\n          margin: 0 0 0 16px; }\n  :host .chat #chat-content .message-row.user .bubble {\n          margin-left: auto;\n          background-color: #E8F5E9;\n          border: 1px solid #DFEBE0;\n          order: 1; }\n  :host .chat #chat-content .message-row.user .bubble:before {\n            right: -11px;\n            left: auto;\n            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD2UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRsXAAAANzwzNPmxNrtyau5oIWRedDkwNntyczgwdfpyJ+/n97wzsLWtNjsytvwzczfvtPmxau6nNjqxtrtyio1KtzwzNjryAAAANzwzgAAANzwzK7Aor/Us9Lnw8vevAAAAMzevtbpxrvMrX+IdwAAAEROOi45Lr3MrZGjf9LoxX+MctnqydLkwhgYGMzfv9vuyQAAANzwzNvuy9zxy7vMu7XGqNvtzKKykwAAANruzKq6nLnMriQkGMXXuL3PsNjsySgzKAAAANLkw83fvd3vy9z4xtzwzRpFmIEAAABQdFJOUwAXChEGBAMBAgwhDvJ7k0YqMc0Zmwj6apf2kjU0+dkw/swh/CP9j2Wr2gndvaYeBRoxQg6gUPt/FaHJGdTj9A9k7XQLeE6iFcN12xkSt9r4NKizowAAAMFJREFUKM+V0sdywlAMBVDbMX7PQCihQ+iQ0HsJvfem/P/PwBIzugu0PXNnNNJVyPmhsIPhhoB2COwIGuLdhAcl3AhCBoBoHUC6BCBbA0C/EkBFB5D/FjxQwQYg1RI8UKINgDoSAPUlAPqUAMgfAEBfXsEDBV0+Hogi4Zhg4THj9YwHoqEBYOrgYTI3GVgMNn8r+Qq94k9yZNosW/3Hy9VuTjWfHkOX6367bGZUU7de66ieHZrO1OGg8Z1WTgYAFLgD5S1PCkzo1B0AAAAASUVORK5CYII=); }\n  :host .chat .chat-footer {\n    min-height: 72px;\n    max-height: 96px;\n    background-color: #F3F4F5;\n    color: rgba(0, 0, 0, 0.87);\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    padding: 8px 8px 8px 16px; }\n  :host .chat .chat-footer .reply-form mat-form-field {\n      margin: 0;\n      padding-right: 16px; }\n  :host .chat .chat-footer .reply-form mat-form-field textarea {\n        max-height: 80px;\n        transition: height 200ms ease;\n        overflow: auto;\n        -webkit-overflow-scrolling: touch; }\n  :host .chat .chat-footer .reply-form mat-form-field textarea.grow {\n          height: 80px; }\n  :host .chat .chat-footer .reply-form mat-form-field .mat-errors-spacer {\n        display: none; }\n  :host .chat .chat-footer .reply-form .mat-button {\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat-view/chat-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/apps/chat/chat-view/chat-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewComponent", function() { return ChatViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatViewComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatViewComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this._chatService.onChatSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (chatData) {
            if (chatData) {
                _this.selectedChat = chatData;
                _this.contact = chatData.contact;
                _this.dialog = chatData.dialog;
                _this.readyToReply();
            }
        });
    };
    /**
     * After view init
     */
    ChatViewComponent.prototype.ngAfterViewInit = function () {
        this.replyInput = this.replyInputField.first.nativeElement;
        this.readyToReply();
    };
    /**
     * On destroy
     */
    ChatViewComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Select contact
     */
    ChatViewComponent.prototype.selectContact = function () {
        this._chatService.selectContact(this.contact);
    };
    /**
     * Ready to reply
     */
    ChatViewComponent.prototype.readyToReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyForm.reset();
            _this.focusReplyInput();
            _this.scrollToBottom();
        });
    };
    /**
     * Focus to the reply input
     */
    ChatViewComponent.prototype.focusReplyInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyInput.focus();
        });
    };
    /**
     * Scroll to the bottom
     *
     * @param {number} speed
     */
    ChatViewComponent.prototype.scrollToBottom = function (speed) {
        var _this = this;
        speed = speed || 400;
        if (this.directiveScroll) {
            this.directiveScroll.update();
            setTimeout(function () {
                _this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    };
    /**
     * Reply
     */
    ChatViewComponent.prototype.reply = function () {
        var _this = this;
        // Message
        var message = {
            who: this.user.id,
            message: this.replyForm.form.value.message,
            time: new Date().toISOString()
        };
        // Add the message to the chat
        this.dialog.push(message);
        // Update the server
        this._chatService.updateDialog(this.selectedChat.chatId, this.dialog).then(function (response) {
            _this.readyToReply();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__["FusePerfectScrollbarDirective"]),
        __metadata("design:type", _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__["FusePerfectScrollbarDirective"])
    ], ChatViewComponent.prototype, "directiveScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('replyInput'),
        __metadata("design:type", Object)
    ], ChatViewComponent.prototype, "replyInputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('replyForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ChatViewComponent.prototype, "replyForm", void 0);
    ChatViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-view',
            template: __webpack_require__(/*! ./chat-view.component.html */ "./src/app/main/apps/chat/chat-view/chat-view.component.html"),
            styles: [__webpack_require__(/*! ./chat-view.component.scss */ "./src/app/main/apps/chat/chat-view/chat-view.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]])
    ], ChatViewComponent);
    return ChatViewComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.html":
/*!****************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"chat\" class=\"page-layout carded fullwidth\">\r\n\r\n    <!-- TOP BACKGROUND -->\r\n    <div class=\"top-bg mat-accent-bg\"></div>\r\n    <!-- / TOP BACKGROUND -->\r\n\r\n    <!-- CENTER -->\r\n    <div class=\"center\">\r\n\r\n        <!-- CONTENT CARD -->\r\n        <div class=\"content-card\">\r\n\r\n            <mat-sidenav-container>\r\n\r\n                <!-- LEFT SIDENAV -->\r\n                <mat-sidenav class=\"sidenav\" position=\"start\" opened=\"true\" mode=\"side\"\r\n                             fuseMatSidenavHelper=\"chat-left-sidenav\" mat-is-locked-open=\"gt-md\">\r\n                    <chat-left-sidenav></chat-left-sidenav>\r\n                </mat-sidenav>\r\n                <!-- / LEFT SIDENAV -->\r\n\r\n                <!-- CONTENT -->\r\n                <chat-start *ngIf=\"!selectedChat\"></chat-start>\r\n\r\n                <chat-view *ngIf=\"selectedChat\"></chat-view>\r\n                <!-- / CONTENT -->\r\n\r\n                <!-- RIGHT SIDENAV -->\r\n                <mat-sidenav class=\"sidenav\" position=\"end\" opened=\"false\" mode=\"over\"\r\n                             fuseMatSidenavHelper=\"chat-right-sidenav\">\r\n                    <chat-right-sidenav></chat-right-sidenav>\r\n                </mat-sidenav>\r\n                <!-- / RIGHT SIDENAV -->\r\n\r\n            </mat-sidenav-container>\r\n\r\n        </div>\r\n        <!-- / CONTENT CARD -->\r\n\r\n    </div>\r\n    <!-- / CENTER -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.scss":
/*!****************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#chat {\n  display: flex;\n  flex: 1; }\n#chat .center {\n    padding: 32px !important;\n    max-width: 1400px;\n    margin: 0 auto; }\n@media (max-width: 1279px) {\n      #chat .center {\n        padding: 0 !important; } }\n#chat .center .content-card {\n      display: flex;\n      flex: 1;\n      position: relative;\n      background: url(\"/assets/images/patterns/rain-grey.png\") repeat; }\n#chat .center .content-card .mat-sidenav-container {\n        display: flex;\n        flex: 1;\n        width: 100%;\n        background: transparent; }\n#chat .center .content-card .mat-sidenav-container > .mat-sidenav-content,\n        #chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n          display: flex;\n          flex: 1 1 auto;\n          min-height: 100%;\n          height: auto; }\n#chat .center .content-card .mat-sidenav-container > .mat-drawer-content {\n          max-width: 100%; }\n#chat .center .content-card .mat-sidenav-container mat-sidenav {\n          display: flex;\n          flex-direction: column;\n          width: 400px;\n          max-width: 90%;\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0.37);\n          overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/chat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main/apps/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onChatSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (chatData) {
            _this.selectedChat = chatData;
        });
    };
    /**
     * On destroy
     */
    ChatComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/main/apps/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/main/apps/chat/chat.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.module.ts":
/*!***********************************************!*\
  !*** ./src/app/main/apps/chat/chat.module.ts ***!
  \***********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
/* harmony import */ var app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/main/apps/chat/chat.component */ "./src/app/main/apps/chat/chat.component.ts");
/* harmony import */ var app_main_apps_chat_chat_start_chat_start_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/chat/chat-start/chat-start.component */ "./src/app/main/apps/chat/chat-start/chat-start.component.ts");
/* harmony import */ var app_main_apps_chat_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/main/apps/chat/chat-view/chat-view.component */ "./src/app/main/apps/chat/chat-view/chat-view.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_chats_chats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/chats/chats.component */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/user/user.component */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_left_left_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/left/left.component */ "./src/app/main/apps/chat/sidenavs/left/left.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_right_right_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/right/right.component */ "./src/app/main/apps/chat/sidenavs/right/right.component.ts");
/* harmony import */ var app_main_apps_chat_sidenavs_right_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/main/apps/chat/sidenavs/right/contact/contact.component */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '**',
        component: app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
        children: [],
        resolve: {
            chat: app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
        }
    }
];
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                app_main_apps_chat_chat_component__WEBPACK_IMPORTED_MODULE_5__["ChatComponent"],
                app_main_apps_chat_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_7__["ChatViewComponent"],
                app_main_apps_chat_chat_start_chat_start_component__WEBPACK_IMPORTED_MODULE_6__["ChatStartComponent"],
                app_main_apps_chat_sidenavs_left_chats_chats_component__WEBPACK_IMPORTED_MODULE_8__["ChatChatsSidenavComponent"],
                app_main_apps_chat_sidenavs_left_user_user_component__WEBPACK_IMPORTED_MODULE_9__["ChatUserSidenavComponent"],
                app_main_apps_chat_sidenavs_left_left_component__WEBPACK_IMPORTED_MODULE_10__["ChatLeftSidenavComponent"],
                app_main_apps_chat_sidenavs_right_right_component__WEBPACK_IMPORTED_MODULE_11__["ChatRightSidenavComponent"],
                app_main_apps_chat_sidenavs_right_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ChatContactSidenavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/chat.service.ts":
/*!************************************************!*\
  !*** ./src/app/main/apps/chat/chat.service.ts ***!
  \************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    function ChatService(_httpClient) {
        this._httpClient = _httpClient;
        // Set the defaults
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLeftSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onRightSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ChatService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getChats(),
                _this.getUser()
            ]).then(function (_a) {
                var contacts = _a[0], chats = _a[1], user = _a[2];
                _this.contacts = contacts;
                _this.chats = chats;
                _this.user = user;
                resolve();
            }, reject);
        });
    };
    /**
     * Get chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChat = function (contactId) {
        var _this = this;
        var chatItem = this.user.chatList.find(function (item) {
            return item.contactId === contactId;
        });
        // Create new chat, if it's not created yet.
        if (!chatItem) {
            this.createNewChat(contactId).then(function (newChats) {
                _this.getChat(contactId);
            });
            return;
        }
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-chats/' + chatItem.id)
                .subscribe(function (response) {
                var chat = response;
                var chatContact = _this.contacts.find(function (contact) {
                    return contact.id === contactId;
                });
                var chatData = {
                    chatId: chat.id,
                    dialog: chat.dialog,
                    contact: chatContact
                };
                _this.onChatSelected.next(__assign({}, chatData));
            }, reject);
        });
    };
    /**
     * Create new chat
     *
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.createNewChat = function (contactId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contact = _this.contacts.find(function (item) {
                return item.id === contactId;
            });
            var chatId = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].generateGUID();
            var chat = {
                id: chatId,
                dialog: []
            };
            var chatListItem = {
                contactId: contactId,
                id: chatId,
                lastMessageTime: '2017-02-18T10:30:18.931Z',
                name: contact.name,
                unread: null
            };
            // Add new chat list item to the user's chat list
            _this.user.chatList.push(chatListItem);
            // Post the created chat
            _this._httpClient.post('api/chat-chats', __assign({}, chat))
                .subscribe(function (response) {
                // Post the new the user data
                _this._httpClient.post('api/chat-user/' + _this.user.id, _this.user)
                    .subscribe(function (newUserData) {
                    // Update the user data from server
                    _this.getUser().then(function (updatedUser) {
                        _this.onUserUpdated.next(updatedUser);
                        resolve(updatedUser);
                    });
                });
            }, reject);
        });
    };
    /**
     * Select contact
     *
     * @param contact
     */
    ChatService.prototype.selectContact = function (contact) {
        this.onContactSelected.next(contact);
    };
    /**
     * Set user status
     *
     * @param status
     */
    ChatService.prototype.setUserStatus = function (status) {
        this.user.status = status;
    };
    /**
     * Update user data
     *
     * @param userData
     */
    ChatService.prototype.updateUserData = function (userData) {
        var _this = this;
        this._httpClient.post('api/chat-user/' + this.user.id, userData)
            .subscribe(function (response) {
            _this.user = userData;
        });
    };
    /**
     * Update the chat dialog
     *
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    ChatService.prototype.updateDialog = function (chatId, dialog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = {
                id: chatId,
                dialog: dialog
            };
            _this._httpClient.post('api/chat-chats/' + chatId, newData)
                .subscribe(function (updatedChat) {
                resolve(updatedChat);
            }, reject);
        });
    };
    /**
     * Get contacts
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-contacts')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get chats
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-chats')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get user
     *
     * @returns {Promise<any>}
     */
    ChatService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._httpClient.get('api/chat-user')
                .subscribe(function (response) {
                resolve(response[0]);
            }, reject);
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\r\n<div class=\"sidenav-header\">\r\n    <!-- CHATS TOOLBAR -->\r\n    <mat-toolbar>\r\n\r\n        <!-- TOOLBAR TOP -->\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <!-- USER AVATAR WRAPPER -->\r\n            <div class=\"avatar-wrapper\">\r\n\r\n                <!-- USER AVATAR -->\r\n                <img (click)=\"changeLeftSidenavView('user')\"\r\n                     src=\"{{user.avatar}}\"\r\n                     class=\"mat-avatar avatar\"\r\n                     alt=\"{{user.name}}\"/>\r\n                <!-- / USER AVATAR -->\r\n\r\n                <mat-icon class=\"s-16 status\" [ngClass]=\"user.status\"\r\n                          [matMenuTriggerFor]=\"userStatusMenu\"></mat-icon>\r\n\r\n                <!-- USER STATUS -->\r\n                <mat-menu id=\"user-status-menu\" #userStatusMenu=\"matMenu\">\r\n\r\n                    <button mat-menu-item (click)=\"setUserStatus('online')\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16 status online\"></mat-icon>\r\n                            <span>Online</span>\r\n                        </div>\r\n                    </button>\r\n\r\n                    <button mat-menu-item (click)=\"setUserStatus('away')\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16 status away\"></mat-icon>\r\n                            <span>Away</span>\r\n                        </div>\r\n                    </button>\r\n\r\n                    <button mat-menu-item (click)=\"setUserStatus('do-not-disturb')\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16 status do-not-disturb\"></mat-icon>\r\n                            <span>Do not disturb</span>\r\n                        </div>\r\n                    </button>\r\n\r\n                    <button mat-menu-item (click)=\"setUserStatus('offline')\">\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16 status offline\"></mat-icon>\r\n                            <span>Offline</span>\r\n                        </div>\r\n                    </button>\r\n                </mat-menu>\r\n                <!-- / USER STATUS -->\r\n\r\n            </div>\r\n            <!-- / USER AVATAR -->\r\n\r\n            <div>\r\n                <button mat-icon-button\r\n                        [matMenuTriggerFor]=\"userMenu\"\r\n                        aria-label=\"more\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n                <mat-menu #userMenu=\"matMenu\">\r\n                    <button mat-menu-item (click)=\"changeLeftSidenavView('user')\">\r\n                        Profile\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"logout()\">\r\n                        Logout\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR TOP -->\r\n\r\n        <!-- TOOLBAR BOTTOM -->\r\n        <mat-toolbar-row>\r\n\r\n            <!-- SEARCH -->\r\n            <div class=\"search-wrapper\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                <div class=\"search\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <mat-icon>search</mat-icon>\r\n\r\n                    <input [(ngModel)]=\"searchText\" type=\"text\" placeholder=\"Search or start new chat\" fxFlex>\r\n\r\n                </div>\r\n            </div>\r\n            <!-- / SEARCH -->\r\n\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR BOTTOM -->\r\n\r\n    </mat-toolbar>\r\n    <!-- / CHATS TOOLBAR -->\r\n\r\n</div>\r\n<!-- / SIDENAV HEADER -->\r\n\r\n<!-- SIDENAV CONTENT -->\r\n<div class=\"sidenav-content\" fusePerfectScrollbar fxFlex>\r\n\r\n    <!-- CHATS CONTENT -->\r\n    <div *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\r\n\r\n        <!-- CHATS LIST-->\r\n        <div class=\"chat-list\" fxLayout=\"column\">\r\n\r\n            <div matSubheader *ngIf=\"(user.chatList | filter: searchText).length > 0\">\r\n                Chats\r\n            </div>\r\n\r\n            <button mat-button class=\"contact\"\r\n                    *ngFor=\"let chat of user.chatList | filter: searchText\"\r\n                    (click)=\"getChat(chat.contactId)\" ngClass=\"{'unread':contact.unread}\"\r\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\" fxLayoutAlign=\"center center\">\r\n                        <img [src]=\"contacts |getById:chat.contactId:'avatar'\"\r\n                             class=\"avatar\"\r\n                             alt=\"{{contacts |getById:chat.contactId:'name'}}\"/>\r\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contacts |getById:chat.contactId:'status'\"></mat-icon>\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxFlex>\r\n\r\n                        <div class=\"\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                            <div class=\"contact-name\">{{contacts |getById:chat.contactId:'name'}}</div>\r\n                        </div>\r\n\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\"center end\">\r\n                            <div class=\"contact-last-message-time\">\r\n                                {{chat.lastMessageTime | date}}\r\n                            </div>\r\n                            <div *ngIf=\"chat.unread\" class=\"unread-message-count mat-accent-bg\">{{chat.unread}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </button>\r\n\r\n        </div>\r\n        <!-- / CHATS LIST-->\r\n\r\n        <!-- CONTACTS LIST-->\r\n        <div class=\"contact-list\" fxLayout=\"column\">\r\n\r\n            <div matSubheader *ngIf=\"(contacts| filter: searchText).length > 0\">\r\n                Contacts\r\n            </div>\r\n\r\n            <button mat-button class=\"contact\"\r\n                    *ngFor=\"let contact of contacts| filter: searchText\"\r\n                    (click)=\"getChat(contact.id)\"\r\n                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"avatar-wrapper\" fxFlex=\"0 1 auto\">\r\n                        <img src=\"{{contact.avatar}}\" class=\"mat-avatar avatar\" alt=\"{{contact.name}}\"/>\r\n                        <mat-icon class=\"s-16 status\" [ngClass]=\"contact.status\"></mat-icon>\r\n                    </div>\r\n\r\n                    <div class=\"\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\r\n                        <div class=\"contact-name\">{{contact.name}}</div>\r\n                        <p class=\"contact-mood\">{{contact.mood}}</p>\r\n                    </div>\r\n                </div>\r\n            </button>\r\n        </div>\r\n        <!-- / CONTACTS LIST-->\r\n\r\n        <!-- NO RESULTS MESSAGE -->\r\n        <div *ngIf=\"(contacts| filter: searchText).length === 0\" class=\"no-results-message\">\r\n            No results..\r\n        </div>\r\n        <!-- NO RESULTS MESSAGE-->\r\n\r\n    </div>\r\n    <!-- / CHATS CONTENT -->\r\n\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: flex;\n  flex: 1;\n  flex-direction: column; }\n:host .sidenav-header mat-toolbar {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n:host .sidenav-header mat-toolbar .avatar-wrapper .avatar, :host .sidenav-header mat-toolbar .avatar-wrapper .status {\n      cursor: pointer; }\n:host .sidenav-header mat-toolbar .search {\n      height: 36px;\n      line-height: 36px;\n      padding: 8px;\n      background: #FFFFFF;\n      font-size: 13px;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n:host .sidenav-header mat-toolbar .search .icon {\n        margin: 0;\n        color: rgba(0, 0, 0, 0.54); }\n:host .sidenav-header mat-toolbar .search input {\n        padding-left: 12px;\n        height: 36px;\n        color: rgba(0, 0, 0, 0.54);\n        border: none; }\n:host .sidenav-content {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch; }\n:host .sidenav-content .contact-list .mat-subheader, :host .sidenav-content .chat-list .mat-subheader {\n      padding-left: 16px;\n      font-size: 20px;\n      font-weight: 300;\n      height: 88px;\n      line-height: 88px;\n      color: #039be5; }\n:host .sidenav-content .contact-list .contact, :host .sidenav-content .chat-list .contact {\n      white-space: normal;\n      text-align: left;\n      letter-spacing: .010em;\n      min-height: 88px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n      padding: 16px;\n      font-weight: 400; }\n:host .sidenav-content .contact-list .contact .avatar-wrapper .avatar, :host .sidenav-content .chat-list .contact .avatar-wrapper .avatar {\n        margin-right: 16px; }\n:host .sidenav-content .contact-list .contact .contact-name, :host .sidenav-content .chat-list .contact .contact-name {\n        font-size: 16px;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n:host .sidenav-content .contact-list .contact .contact-last-message, :host .sidenav-content .chat-list .contact .contact-last-message {\n        line-height: 1.6em;\n        margin: 0;\n        font-weight: 500;\n        color: rgba(0, 0, 0, 0.54); }\n:host .sidenav-content .contact-list .contact .contact-mood, :host .sidenav-content .chat-list .contact .contact-mood {\n        line-height: normal;\n        margin-top: 0; }\n:host .sidenav-content .contact-list .contact .unread-message-count, :host .sidenav-content .chat-list .contact .unread-message-count {\n        border-radius: 50%;\n        text-align: center;\n        width: 24px;\n        height: 24px;\n        line-height: 24px; }\n:host .sidenav-content .no-results-message {\n      position: absolute;\n      width: 100%;\n      height: 88px;\n      padding: 16px;\n      background: #FFFFFF;\n      font-size: 15px;\n      font-weight: 400; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/chats/chats.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatChatsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatChatsSidenavComponent", function() { return ChatChatsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service */ "./src/@fuse/directives/fuse-mat-sidenav/fuse-mat-sidenav.service.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChatChatsSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     * @param {FuseMatSidenavHelperService} _fuseMatSidenavHelperService
     * @param {ObservableMedia} _observableMedia
     */
    function ChatChatsSidenavComponent(_chatService, _fuseMatSidenavHelperService, _observableMedia) {
        this._chatService = _chatService;
        this._fuseMatSidenavHelperService = _fuseMatSidenavHelperService;
        this._observableMedia = _observableMedia;
        // Set the defaults
        this.chatSearch = {
            name: ''
        };
        this.searchText = '';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatChatsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this.chats = this._chatService.chats;
        this.contacts = this._chatService.contacts;
        this._chatService.onChatsUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (updatedChats) {
            _this.chats = updatedChats;
        });
        this._chatService.onUserUpdated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (updatedUser) {
            _this.user = updatedUser;
        });
    };
    /**
     * On destroy
     */
    ChatChatsSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Get chat
     *
     * @param contact
     */
    ChatChatsSidenavComponent.prototype.getChat = function (contact) {
        this._chatService.getChat(contact);
        if (!this._observableMedia.isActive('gt-md')) {
            this._fuseMatSidenavHelperService.getSidenav('chat-left-sidenav').toggle();
        }
    };
    /**
     * Set user status
     *
     * @param status
     */
    ChatChatsSidenavComponent.prototype.setUserStatus = function (status) {
        this._chatService.setUserStatus(status);
    };
    /**
     * Change left sidenav view
     *
     * @param view
     */
    ChatChatsSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this._chatService.onLeftSidenavViewChanged.next(view);
    };
    /**
     * Logout
     */
    ChatChatsSidenavComponent.prototype.logout = function () {
        console.log('logout triggered');
    };
    ChatChatsSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-chats-sidenav',
            template: __webpack_require__(/*! ./chats.component.html */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.html"),
            styles: [__webpack_require__(/*! ./chats.component.scss */ "./src/app/main/apps/chat/sidenavs/left/chats/chats.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"],
            _fuse_directives_fuse_mat_sidenav_fuse_mat_sidenav_service__WEBPACK_IMPORTED_MODULE_5__["FuseMatSidenavHelperService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], ChatChatsSidenavComponent);
    return ChatChatsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.html":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\r\n    <chat-chats-sidenav class=\"view\"\r\n                        *ngSwitchCase=\"'chats'\"\r\n                        [@slideInRight]>\r\n    </chat-chats-sidenav>\r\n\r\n    <chat-user-sidenav class=\"view\"\r\n                       *ngSwitchCase=\"'user'\"\r\n                       [@slideInLeft]\r\n                       fusePerfectScrollbar>\r\n    </chat-user-sidenav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  :host .views {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  :host .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/left.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/left.component.ts ***!
  \****************************************************************/
/*! exports provided: ChatLeftSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatLeftSidenavComponent", function() { return ChatLeftSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatLeftSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatLeftSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the defaults
        this.view = 'chats';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatLeftSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onLeftSidenavViewChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (view) {
            _this.view = view;
        });
    };
    /**
     * On destroy
     */
    ChatLeftSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatLeftSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-left-sidenav',
            template: __webpack_require__(/*! ./left.component.html */ "./src/app/main/apps/chat/sidenavs/left/left.component.html"),
            styles: [__webpack_require__(/*! ./left.component.scss */ "./src/app/main/apps/chat/sidenavs/left/left.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatLeftSidenavComponent);
    return ChatLeftSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\r\n<div class=\"sidenav-header\">\r\n\r\n    <!-- USER TOOLBAR -->\r\n    <mat-toolbar class=\"mat-accent-bg\">\r\n\r\n        <!-- TOOLBAR TOP -->\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <button mat-icon-button (click)=\"changeLeftSidenavView('chats')\" aria-label=\"back\">\r\n                <mat-icon>arrow_back</mat-icon>\r\n            </button>\r\n\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR TOP -->\r\n\r\n        <!-- TOOLBAR BOTTOM -->\r\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n            <img [src]=\"user.avatar\" class=\"avatar user-avatar huge\" alt=\"{{user.name}}\"/>\r\n            <div class=\"user-name my-8\">{{user.name}}</div>\r\n\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR BOTTOM -->\r\n\r\n    </mat-toolbar>\r\n    <!-- / USER TOOLBAR -->\r\n</div>\r\n\r\n<!-- SIDENAV CONTENT -->\r\n<div class=\"sidenav-content p-16\" fxFlex>\r\n\r\n    <!-- USER MOOD -->\r\n    <mat-card>\r\n\r\n        <form [formGroup]=\"userForm\" fxLayout=\"column\">\r\n\r\n            <mat-form-field class=\"mb-24\" fxFlex=\"0 1 auto\">\r\n                <textarea matInput placeholder=\"Mood\" name=\"mood\"\r\n                          formControlName=\"mood\" rows=\"3\"></textarea>\r\n            </mat-form-field>\r\n\r\n            <mat-radio-group formControlName=\"status\" fxLayout=\"column\">\r\n\r\n                <mat-radio-button value=\"online\" class=\"py-8\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"status online mr-8\"></mat-icon>\r\n                        <span class=\"mat-h4 m-0\">Online</span>\r\n                    </div>\r\n                </mat-radio-button>\r\n\r\n                <mat-radio-button value=\"away\" class=\"py-8\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"status away mr-8\"></mat-icon>\r\n                        <span class=\"mat-h4 m-0\">Away</span>\r\n                    </div>\r\n                </mat-radio-button>\r\n\r\n                <mat-radio-button value=\"do-not-disturb\" class=\"py-8\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"status do-not-disturb mr-8\"></mat-icon>\r\n                        <span class=\"mat-h4 m-0\">Do not disturb</span>\r\n                    </div>\r\n                </mat-radio-button>\r\n\r\n                <mat-radio-button value=\"offline\" class=\"py-8\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"status offline mr-8\"></mat-icon>\r\n                        <span class=\"mat-h4 m-0\">Offline</span>\r\n                    </div>\r\n                </mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n        </form>\r\n    </mat-card>\r\n    <!-- / USER MOOD -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host mat-toolbar .toolbar-bottom {\n    height: 240px; }\n@media (max-width: 1279px) {\n      :host mat-toolbar .toolbar-bottom {\n        height: 180px; } }\n:host .sidenav-content {\n    background: whitesmoke; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/left/user/user.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/left/user/user.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatUserSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatUserSidenavComponent", function() { return ChatUserSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatUserSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatUserSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatUserSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this._chatService.user;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            mood: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.mood),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.status)
        });
        this.userForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._unsubscribeAll), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (data) {
            _this.user.mood = data.mood;
            _this.user.status = data.status;
            _this._chatService.updateUserData(_this.user);
        });
    };
    /**
     * On destroy
     */
    ChatUserSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
    /**
     * Change left sidenav view
     *
     * @param view
     */
    ChatUserSidenavComponent.prototype.changeLeftSidenavView = function (view) {
        this._chatService.onLeftSidenavViewChanged.next(view);
    };
    ChatUserSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-user-sidenav',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/main/apps/chat/sidenavs/left/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatUserSidenavComponent);
    return ChatUserSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\r\n<div class=\"sidenav-header\" *ngIf=\"contact\">\r\n\r\n    <!-- CONTACT TOOLBAR -->\r\n    <mat-toolbar class=\"mat-accent-bg\">\r\n\r\n        <!-- TOOLBAR TOP -->\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <div>Contact Info</div>\r\n\r\n            <button mat-icon-button fuseMatSidenavToggler=\"chat-right-sidenav\" aria-label=\"close\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR TOP -->\r\n\r\n        <!-- TOOLBAR BOTTOM -->\r\n        <mat-toolbar-row class=\"toolbar-bottom\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <img [src]=\"contact.avatar\" class=\"avatar contact-avatar huge\" alt=\"{{contact.name}}\"/>\r\n            <div class=\"contact-name my-8\">{{contact.name}}</div>\r\n        </mat-toolbar-row>\r\n        <!-- / TOOLBAR BOTTOM -->\r\n\r\n    </mat-toolbar>\r\n    <!-- / CONTACT TOOLBAR -->\r\n</div>\r\n\r\n<!-- SIDENAV CONTENT -->\r\n<div class=\"sidenav-content p-16\" fxFlex *ngIf=\"contact\">\r\n\r\n    <!-- CONTACT MOOD -->\r\n    <mat-card>\r\n\r\n        <mat-form-field class=\"w-100-p\">\r\n            <textarea matInput placeholder=\"Mood\" name=\"mood\"\r\n                      [value]=\"contact.mood\" rows=\"3\" disabled>\r\n            </textarea>\r\n        </mat-form-field>\r\n\r\n    </mat-card>\r\n    <!-- / CONTACT MOOD -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n:host mat-toolbar .toolbar-bottom {\n    height: 240px; }\n@media (max-width: 1279px) {\n      :host mat-toolbar .toolbar-bottom {\n        height: 180px; } }\n:host .sidenav-content {\n    background: whitesmoke; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/contact/contact.component.ts ***!
  \****************************************************************************/
/*! exports provided: ChatContactSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatContactSidenavComponent", function() { return ChatContactSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatContactSidenavComponent = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {ChatService} _chatService
     */
    function ChatContactSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatContactSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onContactSelected
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (contact) {
            _this.contact = contact;
        });
    };
    /**
     * On destroy
     */
    ChatContactSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatContactSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-contact-sidenav',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/main/apps/chat/sidenavs/right/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatContactSidenavComponent);
    return ChatContactSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"view\" class=\"views\">\r\n\r\n    <chat-contact-sidenav class=\"view\"\r\n                          *ngSwitchCase=\"'contact'\"\r\n                          [@slideInRight]\r\n                          fusePerfectScrollbar>\r\n    </chat-contact-sidenav>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n  :host .views {\n    display: flex;\n    flex-direction: column;\n    height: 100%; }\n  :host .views .view {\n      position: absolute;\n      height: 100%;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0; }\n"

/***/ }),

/***/ "./src/app/main/apps/chat/sidenavs/right/right.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/apps/chat/sidenavs/right/right.component.ts ***!
  \******************************************************************/
/*! exports provided: ChatRightSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRightSidenavComponent", function() { return ChatRightSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main/apps/chat/chat.service */ "./src/app/main/apps/chat/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatRightSidenavComponent = /** @class */ (function () {
    function ChatRightSidenavComponent(_chatService) {
        this._chatService = _chatService;
        // Set the defaults
        this.view = 'contact';
        // Set the private defaults
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
    /**
     * On init
     */
    ChatRightSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.onRightSidenavViewChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._unsubscribeAll))
            .subscribe(function (view) {
            _this.view = view;
        });
    };
    /**
     * On destroy
     */
    ChatRightSidenavComponent.prototype.ngOnDestroy = function () {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    };
    ChatRightSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'chat-right-sidenav',
            template: __webpack_require__(/*! ./right.component.html */ "./src/app/main/apps/chat/sidenavs/right/right.component.html"),
            styles: [__webpack_require__(/*! ./right.component.scss */ "./src/app/main/apps/chat/sidenavs/right/right.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [app_main_apps_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], ChatRightSidenavComponent);
    return ChatRightSidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map