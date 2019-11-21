(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<app-audio-player></app-audio-player>\n\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/audio-player/audio-player.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/audio-player/audio-player.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<mat-sidenav-container>\n  <article>\n    <mat-toolbar [class]=\"'mat-h1'\">\n        Audio Player - {{ (stateService.playerState$ | async).audioTitle }}\n    </mat-toolbar>\n  </article>\n\n  <article [id]=\"'play-list'\">\n    <app-play-list></app-play-list>\n  </article>\n\n  <article [id]=\"'playing-info'\">\n    <p color = \"accent\" [ngClass]=\"['track-info', 'mat-h2']\">\n      <span [id]=\"'audio-name'\">{{ (stateService.playerState$ | async).audioTitle }}</span>\n      <span [class]=\"'fill-remaining-space'\"></span>\n      <span [id]=\"'audio-times'\">\n        {{ (stateService.playerState$ | async).currentTime | date:'mm:ss' }} / {{ (stateService.playerState$ | async).duration | date:'mm:ss' }}\n      </span>\n    </p>\n\n    <div [id]=\"'progress-bar-container'\">\n      <mat-progress-bar [id]=\"'progress-bar-background'\" mode=\"determinate\" value=\"{{(getProgress())}}\">\n      </mat-progress-bar>\n      <div [id]=\"'progress-bar'\" style=\"display:none;\"><mat-icon color=\"accent\">album</mat-icon></div>\n    </div>\n  </article>\n\n  <article [ngClass]=\"['controls']\">\n    <app-player-controls\n      *ngFor=\"let control of playerState.controlList\"\n      [control]=\"control\"\n      [ngClass]=\"{'play-pause': control.name === 'play' || control.name === 'pause'}\"\n      (click)=\"handleClickControl(control.name)\">\n    </app-player-controls>\n  </article>\n</mat-sidenav-container>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/play-list/play-list.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/play-list/play-list.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"play-list\">\n  <mat-nav-list>\n    <mat-list-item @show-hide *ngFor=\"let audio of playList; let i = index\"\n    id=\"audio{{i}}\" title=\"{{ audio.credits }}\">\n      <h2 matLine>{{ audio.audioTitle }}</h2>\n      <p matLine accent>Artist: {{ audio.artist }}</p>\n      <a mat-icon-button href=\"/play/{{i}}\">\n        <mat-icon color = \"accent\">play_arrow</mat-icon>\n      </a>\n      <a mat-icon-button href=\"/edit/{{i}}\">\n        <mat-icon color = \"accent\">edit</mat-icon>\n      </a>\n      <a mat-icon-button href=\"/delete/{{i}}\">\n        <mat-icon color = \"warn\">delete_forever</mat-icon>\n        </a>\n    </mat-list-item>\n  </mat-nav-list>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/player-controls/player-controls.component.html": 
        /*!*******************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/player-controls/player-controls.component.html ***!
          \*******************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button @show-hide mat-icon-button color = \"accent\"\n  *ngIf=\"playerState.isPlaying && control.name !== 'play' || !playerState.isPlaying && control.name !== 'pause'\"\n  [ngClass]=\"['md-48']\"\n  [ngClass]=\"{'playing': playerState.isPlaying, 'paused': !playerState.isPlaying}\">\n  <mat-icon [ngClass]=\"['material-icons', control.name, 'md-48']\">{{ control.materialIcon }}</mat-icon>\n</button>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'angular-player';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio-player/audio-player.module */ "./src/app/audio-player/audio-player.module.ts");
            /* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/shared/material/material.module.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _audio_player_audio_player_module__WEBPACK_IMPORTED_MODULE_5__["AudioPlayerModule"],
                        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
                    ],
                    exports: [
                        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/audio-player/audio-player.module.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/audio-player/audio-player.module.ts ***!
          \*****************************************************/
        /*! exports provided: AudioPlayerModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerModule", function () { return AudioPlayerModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "./src/app/audio-player/audio-player/audio-player.component.ts");
            /* harmony import */ var _player_controls_player_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player-controls/player-controls.component */ "./src/app/audio-player/player-controls/player-controls.component.ts");
            /* harmony import */ var _play_list_play_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./play-list/play-list.component */ "./src/app/audio-player/play-list/play-list.component.ts");
            /* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
            var AudioPlayerModule = /** @class */ (function () {
                function AudioPlayerModule() {
                }
                return AudioPlayerModule;
            }());
            AudioPlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_3__["AudioPlayerComponent"], _player_controls_player_controls_component__WEBPACK_IMPORTED_MODULE_4__["PlayerControlsComponent"], _play_list_play_list_component__WEBPACK_IMPORTED_MODULE_5__["PlayListComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
                    ],
                    exports: [
                        _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_3__["AudioPlayerComponent"]
                    ]
                })
            ], AudioPlayerModule);
            /***/ 
        }),
        /***/ "./src/app/audio-player/audio-player/audio-player.component.scss": 
        /*!***********************************************************************!*\
          !*** ./src/app/audio-player/audio-player/audio-player.component.scss ***!
          \***********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("app-audio-player {\n  text-align: center;\n}\n\narticle.controls {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 50px;\n  overflow: hidden;\n  left: 0;\n  right: 0;\n  margin: 20px auto;\n  display: grid;\n  grid-template-columns: repeat(3, 60px);\n  grid-template-areas: \"back play-pause next\";\n  grid-column-gap: 5px;\n  text-align: center;\n}\n\napp-player-controls.play-pause {\n  grid-column: play-pause;\n  grid-row: 1;\n}\n\narticle#playing-info {\n  margin: 20px;\n  color: #69F0AE;\n}\n\n.track-info {\n  display: flex;\n  margin: auto;\n}\n\n#progress-bar-container {\n  position: relative;\n  height: 20px;\n}\n\n#progress-bar-background {\n  position: absolute;\n  top: 10px;\n}\n\n#progress-bar {\n  position: absolute;\n  width: 40%;\n  top: 0;\n}\n\n#progress-bar mat-icon {\n  position: absolute;\n  right: -12px;\n}\n\n.fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWxtb3NxdWVyYS9qcy1wcm9qZWN0cy9hdWRpby1wbGF5ZXItbm9kZS1hbmd1bGFyL2FuZ3VsYXItcGxheWVyL3NyYy9hcHAvYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcGF1bG1vc3F1ZXJhL2pzLXByb2plY3RzL2F1ZGlvLXBsYXllci1ub2RlLWFuZ3VsYXIvYW5ndWxhci1wbGF5ZXIvc3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7QUNERjs7QURJQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGNFekJjO0FEd0JoQjs7QURJQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtBQ0VGOztBRERFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEQUE7RUFDRTttREFBQTtFQUVBLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLXBsYXllci9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xuXG5hcHAtYXVkaW8tcGxheWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5hcnRpY2xlLmNvbnRyb2xzIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgNjBweCk7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiYmFjayBwbGF5LXBhdXNlIG5leHRcIjtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYXBwLXBsYXllci1jb250cm9scy5wbGF5LXBhdXNlIHtcbiAgZ3JpZC1jb2x1bW46IHBsYXktcGF1c2U7XG4gIGdyaWQtcm93OiAxO1xufVxuXG5hcnRpY2xlI3BsYXlpbmctaW5mbyB7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICRhY2NlbnRfY29sb3I7XG59XG5cbi50cmFjay1pbmZve1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87XG59XG4jcHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuI3Byb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG4jcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDAlO1xuICB0b3A6IDA7XG4gIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0xMnB4O1xuICB9XG59XG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIiwiYXBwLWF1ZGlvLXBsYXllciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYXJ0aWNsZS5jb250cm9scyB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDYwcHgpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImJhY2sgcGxheS1wYXVzZSBuZXh0XCI7XG4gIGdyaWQtY29sdW1uLWdhcDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmFwcC1wbGF5ZXItY29udHJvbHMucGxheS1wYXVzZSB7XG4gIGdyaWQtY29sdW1uOiBwbGF5LXBhdXNlO1xuICBncmlkLXJvdzogMTtcbn1cblxuYXJ0aWNsZSNwbGF5aW5nLWluZm8ge1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjNjlGMEFFO1xufVxuXG4udHJhY2staW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuI3Byb2dyZXNzLWJhci1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjBweDtcbn1cblxuI3Byb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG5cbiNwcm9ncmVzcy1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MCU7XG4gIHRvcDogMDtcbn1cbiNwcm9ncmVzcy1iYXIgbWF0LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTJweDtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LlxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn0iLCJcbiRwcmltYXJ5X2NvbG9yIDogIzdCMUZBMjtcbiRhY2NlbnRfY29sb3IgOiAjNjlGMEFFO1xuJHdhcm5fY29sb3IgOiAjRjQ0MzM2O1xuXG4kYm9yZGVyX3JhZGl1c19kZWZhdWx0OiA1cHg7XG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/audio-player/audio-player/audio-player.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/audio-player/audio-player/audio-player.component.ts ***!
          \*********************************************************************/
        /*! exports provided: AudioPlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function () { return AudioPlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/player-state.service */ "./src/app/audio-player/services/player-state.service.ts");
            /* harmony import */ var _services_play_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/play-list.service */ "./src/app/audio-player/services/play-list.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AudioPlayerComponent = /** @class */ (function () {
                function AudioPlayerComponent(playerStateService, playListService) {
                    var _this = this;
                    this.audioPlayer = new Audio();
                    this.playList = [];
                    this.stateService = playerStateService;
                    this.playListService = playListService;
                    this.audioPlayer.addEventListener('timeupdate', function (event) {
                        _this.updateCurrentTime();
                    });
                }
                AudioPlayerComponent.prototype.getProgress = function () {
                    return 100 * this.playerState.currentTime / this.playerState.duration;
                };
                AudioPlayerComponent.prototype.updateCurrentTime = function () {
                    this.stateService.updateCurrentTime(this.audioPlayer.currentTime);
                    return this.playerState.currentTime ?
                        Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.playerState.currentTime, 'mm:ss', 'en-US') :
                        '--:--';
                };
                AudioPlayerComponent.prototype.playerStart = function (index) {
                    if (!index) {
                        index = 0;
                    }
                    var isPlayStarted = this.audioPlayer.currentTime > 0;
                    if (!isPlayStarted) {
                        this.audioPlayer.playbackRate = 1;
                        this.audioPlayer.volume = 0.3;
                    }
                    var hasAudioChanged = this.playerState.currentAudio !== index;
                    if (hasAudioChanged) {
                        this.stateService.updateCurrentAudio(this.playList[index], index);
                        this.audioPlayer.src = this.playList[index].sourceURL;
                    }
                    this.playerState.isPlaying = true;
                    this.audioPlayer.play();
                    console.log('PLaying now: ', this.playerState.audioTitle);
                };
                AudioPlayerComponent.prototype.playerPause = function () {
                    this.playerState.isPlaying = false;
                    this.audioPlayer.pause();
                    this.audioPlayer.playbackRate = 1;
                };
                AudioPlayerComponent.prototype.fforware = function () {
                    console.log('Forware called...');
                    this.audioPlayer.playbackRate = 5;
                };
                AudioPlayerComponent.prototype.fbackward = function () {
                    console.log('Backware called...');
                    this.audioPlayer.playbackRate = -5;
                };
                AudioPlayerComponent.prototype.stepNext = function () {
                    if (this.playerState.currentAudio === this.playList.length - 1) {
                        console.log('Not allowed!! This is the last audio...');
                    }
                    else {
                        var index = this.playerState.currentAudio + 1;
                        if (this.playerState.isPlaying) {
                            this.playerStart(index);
                        }
                        else {
                            this.stateService.updateCurrentAudio(this.playList[index], index);
                        }
                    }
                };
                AudioPlayerComponent.prototype.stepPrev = function () {
                    if (this.playerState.currentAudio === 0) {
                        console.log('Not allowed!! This is the first audio...');
                    }
                    else {
                        var index = this.playerState.currentAudio - 1;
                        if (this.playerState.isPlaying) {
                            this.playerStart(index);
                        }
                        else {
                            this.stateService.updateCurrentAudio(this.playList[index], index);
                        }
                    }
                };
                AudioPlayerComponent.prototype.timeUpdate = function () {
                    console.log(this.playerState.currentTime, this.audioPlayer);
                    this.stateService.updateCurrentTime(this.audioPlayer.currentTime);
                };
                AudioPlayerComponent.prototype.handleClickControl = function (control) {
                    switch (control) {
                        case 'play':
                            if (this.playerState.isPlaying) {
                                break;
                            }
                            this.playerStart(this.playerState.currentAudio);
                            break;
                        case 'pause':
                            if (!this.playerState.isPlaying) {
                                break;
                            }
                            this.playerPause();
                            break;
                        case 'step-forward':
                            this.stepNext();
                            break;
                        case 'step-backward':
                            this.stepPrev();
                            break;
                        case 'backward':
                            this.fbackward();
                            break;
                        case 'forward':
                            this.fforware();
                            break;
                    }
                };
                AudioPlayerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.playerState$ = this.stateService.getState();
                    this.playerStateSubscription = this.playerState$.subscribe(function (state) {
                        _this.playerState = state;
                    });
                    this.playList$ = this.playListService.getPlayList$();
                    this.playListSubscription = this.playList$.subscribe(function (list) {
                        _this.playList = list;
                    });
                };
                AudioPlayerComponent.prototype.ngOnDestroy = function () {
                    this.playListSubscription.unsubscribe();
                    this.playerStateSubscription.unsubscribe();
                };
                return AudioPlayerComponent;
            }());
            AudioPlayerComponent.ctorParameters = function () { return [
                { type: _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__["PlayerStateService"] },
                { type: _services_play_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayListService"] }
            ]; };
            AudioPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-audio-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audio-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/audio-player/audio-player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audio-player.component.scss */ "./src/app/audio-player/audio-player/audio-player.component.scss")).default]
                })
            ], AudioPlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/audio-player/play-list/play-list.component.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/audio-player/play-list/play-list.component.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLXBsYXllci9wbGF5LWxpc3QvcGxheS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/audio-player/play-list/play-list.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/audio-player/play-list/play-list.component.ts ***!
          \***************************************************************/
        /*! exports provided: PlayListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListComponent", function () { return PlayListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-state.service */ "./src/app/audio-player/services/player-state.service.ts");
            /* harmony import */ var _services_play_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/play-list.service */ "./src/app/audio-player/services/play-list.service.ts");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var PlayListComponent = /** @class */ (function () {
                function PlayListComponent(stateService, playListService) {
                    this.playList = [];
                    this.stateService = stateService;
                    this.playListService = playListService;
                }
                PlayListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.playerState$ = this.stateService.getState();
                    this.playerStateSubscription = this.playerState$.subscribe(function (state) {
                        _this.playerState = state;
                        // this.playList = this.playerState.playList;
                    });
                    this.playList$ = this.playListService.getPlayList$();
                    this.playListSubscription = this.playList$.subscribe(function (list) {
                        _this.playList = list;
                    });
                };
                PlayListComponent.prototype.ngOnDestroy = function () {
                    this.playListSubscription.unsubscribe();
                    this.playerStateSubscription.unsubscribe();
                };
                return PlayListComponent;
            }());
            PlayListComponent.ctorParameters = function () { return [
                { type: _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__["PlayerStateService"] },
                { type: _services_play_list_service__WEBPACK_IMPORTED_MODULE_3__["PlayListService"] }
            ]; };
            PlayListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-play-list',
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('show-hide', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s 2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    opacity: 1
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    opacity: 1
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s 1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                                    opacity: 0
                                }))
                            ]),
                        ]),
                    ],
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./play-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/play-list/play-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./play-list.component.scss */ "./src/app/audio-player/play-list/play-list.component.scss")).default]
                })
            ], PlayListComponent);
            /***/ 
        }),
        /***/ "./src/app/audio-player/player-controls/player-controls.component.scss": 
        /*!*****************************************************************************!*\
          !*** ./src/app/audio-player/player-controls/player-controls.component.scss ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".md-48 {\n  font-size: 48px !important;\n  height: 48px !important;\n  width: 48px !important;\n  line-height: 48px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWxtb3NxdWVyYS9qcy1wcm9qZWN0cy9hdWRpby1wbGF5ZXItbm9kZS1hbmd1bGFyL2FuZ3VsYXItcGxheWVyL3NyYy9hcHAvYXVkaW8tcGxheWVyL3BsYXllci1jb250cm9scy9wbGF5ZXItY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1ZGlvLXBsYXllci9wbGF5ZXItY29udHJvbHMvcGxheWVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsMEJBSE07RUFJTix1QkFKTTtFQUtOLHNCQUxNO0VBTU4sNEJBTk07QUNLUiIsImZpbGUiOiJzcmMvYXBwL2F1ZGlvLXBsYXllci9wbGF5ZXItY29udHJvbHMvcGxheWVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1kLTQ4OiA0OHB4ICFpbXBvcnRhbnQ7XG5cbi5tZC00OCB7XG4gIGZvbnQtc2l6ZTogJG1kLTQ4O1xuICBoZWlnaHQ6ICRtZC00ODtcbiAgd2lkdGg6ICRtZC00ODtcbiAgbGluZS1oZWlnaHQ6ICRtZC00ODtcbn1cbiIsIi5tZC00OCB7XG4gIGZvbnQtc2l6ZTogNDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDQ4cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/audio-player/player-controls/player-controls.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/audio-player/player-controls/player-controls.component.ts ***!
          \***************************************************************************/
        /*! exports provided: PlayerControlsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerControlsComponent", function () { return PlayerControlsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player-state.service */ "./src/app/audio-player/services/player-state.service.ts");
            /* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
            var PlayerControlsComponent = /** @class */ (function () {
                function PlayerControlsComponent(stateService) {
                    this.playerState = stateService.playerState;
                }
                PlayerControlsComponent.prototype.ngOnInit = function () {
                };
                PlayerControlsComponent.prototype.ngOnDestroy = function () {
                };
                return PlayerControlsComponent;
            }());
            PlayerControlsComponent.ctorParameters = function () { return [
                { type: _services_player_state_service__WEBPACK_IMPORTED_MODULE_2__["PlayerStateService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PlayerControlsComponent.prototype, "control", void 0);
            PlayerControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-player-controls',
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('show-hide', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s 0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1
                                }))
                            ]),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 1
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s 0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                                    opacity: 0
                                }))
                            ]),
                        ]),
                    ],
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-controls.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audio-player/player-controls/player-controls.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-controls.component.scss */ "./src/app/audio-player/player-controls/player-controls.component.scss")).default]
                })
            ], PlayerControlsComponent);
            /***/ 
        }),
        /***/ "./src/app/audio-player/services/play-list.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/audio-player/services/play-list.service.ts ***!
          \************************************************************/
        /*! exports provided: PlayListService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListService", function () { return PlayListService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var staticPlayList = [
                {
                    sourceURL: './assets/bensound-allthat.mp3',
                    duration: 146000,
                    audioTitle: 'All that',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-beyondtheline.mp3',
                    duration: 186000,
                    audioTitle: 'Beyond the line',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-happyrock.mp3',
                    duration: 105000,
                    audioTitle: 'Happy rock',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-highoctane.mp3',
                    duration: 155000,
                    audioTitle: 'High Octane',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-hipjazz.mp3',
                    duration: 164000,
                    audioTitle: 'Hip Jazz',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-jazzcomedy.mp3',
                    duration: 193000,
                    audioTitle: 'Jazz Comedy',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-punky.mp3',
                    duration: 126000,
                    audioTitle: 'Punky',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                },
                {
                    sourceURL: './assets/bensound-rumble.mp3',
                    duration: 154000,
                    audioTitle: 'Rumble',
                    artist: 'Benjamin Tissot',
                    credits: 'Music from www.bensound.com'
                }
            ];
            var PlayListService = /** @class */ (function () {
                function PlayListService() {
                    this.playList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    this.updatePlayList(staticPlayList);
                }
                PlayListService.prototype.getPlayList$ = function () {
                    return this.playList$.asObservable();
                };
                PlayListService.prototype.updatePlayList = function (newPlayList) {
                    this.playList = newPlayList;
                    this.playList$.next(this.playList);
                };
                PlayListService.prototype.addAudio = function (audio) {
                    this.playList.push(audio);
                    this.playList$.next(this.playList);
                };
                PlayListService.prototype.getAudio = function (index) {
                    return this.playList$[index];
                };
                return PlayListService;
            }());
            PlayListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PlayListService);
            /***/ 
        }),
        /***/ "./src/app/audio-player/services/player-state.service.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/audio-player/services/player-state.service.ts ***!
          \***************************************************************/
        /*! exports provided: PlayerStateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStateService", function () { return PlayerStateService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var staticControls = [
                { name: 'step-backward', materialIcon: 'skip_previous' },
                { name: 'play', materialIcon: 'play_circle_outline' },
                { name: 'pause', materialIcon: 'pause_circle_outline' },
                { name: 'step-forward', materialIcon: 'skip_next' }
            ];
            var PlayerStateService = /** @class */ (function () {
                function PlayerStateService() {
                    this._playerState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({
                        controlList: staticControls,
                        currentAudio: null,
                        currentTime: 0,
                        duration: 0,
                        audioTitle: '... Nothing is playing right now ...',
                        isPlaying: false
                    });
                }
                Object.defineProperty(PlayerStateService.prototype, "playerState$", {
                    get: function () {
                        return this._playerState$;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PlayerStateService.prototype, "playerState", {
                    get: function () {
                        return this._playerState$.getValue();
                    },
                    set: function (newState) {
                        this._playerState$.next(newState);
                    },
                    enumerable: true,
                    configurable: true
                });
                PlayerStateService.prototype.updateCurrentTime = function (newTime) {
                    this._playerState$.value.currentTime = newTime * 1000;
                };
                PlayerStateService.prototype.getCurrentAudio = function () {
                    return this._playerState$.value.currentAudio;
                };
                PlayerStateService.prototype.updateCurrentAudio = function (audio, currentAudio) {
                    this._playerState$.value.currentAudio = currentAudio;
                    this._playerState$.value.audioTitle = audio.audioTitle;
                    this._playerState$.value.duration = audio.duration;
                };
                PlayerStateService.prototype.getState = function () {
                    return this._playerState$.asObservable();
                };
                return PlayerStateService;
            }());
            PlayerStateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PlayerStateService);
            /***/ 
        }),
        /***/ "./src/app/shared/material/material.module.ts": 
        /*!****************************************************!*\
          !*** ./src/app/shared/material/material.module.ts ***!
          \****************************************************/
        /*! exports provided: MaterialModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function () { return MaterialModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
            /* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
            /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
            /* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
            /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
            /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
            var MaterialModule = /** @class */ (function () {
                function MaterialModule() {
                }
                return MaterialModule;
            }());
            MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                        _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]
                    ],
                    exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"]]
                })
            ], MaterialModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /home/paulmosquera/js-projects/audio-player-node-angular/angular-player/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map