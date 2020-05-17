(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "../../node_modules/css-loader/index.js!../../packages/terminal/src/browser/style/terminal-search.css":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/src/browser/style/terminal-search.css ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2019 Red Hat, Inc. and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-search-terminal-widget-parent {\n    background: var(--theia-sideBar-background);\n    position: absolute;\n    margin: 0px;\n    border: var(--theia-border-width) solid transparent;\n    padding: 0px;\n    top: 1px;\n    right: 19px;\n\n    z-index: 10;\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box {\n    display: flex;\n    margin: 0px;\n    border: var(--theia-border-width) solid transparent;\n    padding: 0px;\n    align-items: center;\n    color: var(--theia-input-foreground);\n    background: var(--theia-input-background);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box input {\n    margin-left: 5px;\n    padding: 0px;\n    width: 100px;\n    height: 18px;\n    color: inherit;\n    background-color: inherit;\n    border: var(--theia-border-width) solid transparent;\n    outline: none;\n}\n\n.theia-search-terminal-widget-parent .search-elem {\n    border: var(--theia-border-width) solid transparent;\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 18px;\n    width: 18px;\n    margin: 1px;\n    opacity: 0.7;\n    outline: none;\n}\n\n.theia-search-terminal-widget-parent .search-elem:hover {\n    opacity: 1;\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box.focused {\n    border: var(--theia-border-width) solid var(--theia-focusBorder);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .search-elem.option-enabled {\n    border: var(--theia-border-width) solid var(--theia-inputOption-activeBorder);\n    background-color: var(--theia-inputOption-activeBackground);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .whole-word {\n    background-image: var(--theia-icon-whole-word);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .match-case {\n    background-image: var(--theia-icon-case-sensitive);\n}\n\n.theia-search-terminal-widget-parent .theia-search-elem-box .use-regexp {\n    background-image: var(--theia-icon-regex);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget {\n    margin: 2px;\n    display: flex;\n    align-items: center;\n    font: var(--theia-content-font-size);\n    color: var(--theia-input-foreground);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget button {\n    background-color: transparent;\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget button:focus {\n    border: var(--theia-border-width) var(--theia-focusBorder) solid;\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.close {\n    background-image: var(--theia-icon-close);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.arrow-up {\n    background-image: var(--theia-icon-arrow-up);\n}\n\n.theia-search-terminal-widget-parent .theia-search-terminal-widget .search-elem.arrow-down {\n    background-image: var(--theia-icon-arrow-down);\n}\n", ""]);

// exports


/***/ }),

/***/ "../../packages/terminal/lib/browser/base/terminal-widget.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/base/terminal-widget.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalWidgetOptions = exports.TerminalWidget = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
/**
 * Terminal UI widget.
 */
var TerminalWidget = /** @class */ (function (_super) {
    __extends(TerminalWidget, _super);
    function TerminalWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TerminalWidget;
}(browser_1.BaseWidget));
exports.TerminalWidget = TerminalWidget;
/**
 * Terminal widget options.
 */
exports.TerminalWidgetOptions = Symbol('TerminalWidgetOptions');

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/base/terminal-widget'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/search/terminal-search-widget.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/search/terminal-search-widget.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalSearchWidget = exports.TerminalSearchWidgetFactory = exports.TERMINAL_SEARCH_WIDGET_FACTORY_ID = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var react_widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/react-widget */ "../../packages/core/lib/browser/widgets/react-widget.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
__webpack_require__(/*! ../../../src/browser/style/terminal-search.css */ "../../packages/terminal/src/browser/style/terminal-search.css");
var xterm_1 = __webpack_require__(/*! xterm */ "../../node_modules/xterm/lib/xterm.js");
var xterm_addon_search_1 = __webpack_require__(/*! xterm-addon-search */ "../../node_modules/xterm-addon-search/lib/xterm-addon-search.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
exports.TERMINAL_SEARCH_WIDGET_FACTORY_ID = 'terminal-search';
exports.TerminalSearchWidgetFactory = Symbol('TerminalSearchWidgetFactory');
var TerminalSearchWidget = /** @class */ (function (_super) {
    __extends(TerminalSearchWidget, _super);
    function TerminalSearchWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchOptions = {};
        _this.onSearchInputFocus = function () {
            if (_this.searchBox) {
                _this.searchBox.classList.add('focused');
            }
        };
        _this.onSearchInputBlur = function () {
            if (_this.searchBox) {
                _this.searchBox.classList.remove('focused');
            }
        };
        _this.handleHide = function () {
            _this.hide();
        };
        _this.handleCaseSensitiveOptionClicked = function (event) {
            _this.searchOptions.caseSensitive = !_this.searchOptions.caseSensitive;
            _this.updateSearchInputBox(_this.searchOptions.caseSensitive, event.currentTarget);
        };
        _this.handleWholeWordOptionClicked = function (event) {
            _this.searchOptions.wholeWord = !_this.searchOptions.wholeWord;
            _this.updateSearchInputBox(_this.searchOptions.wholeWord, event.currentTarget);
        };
        _this.handleRegexOptionClicked = function (event) {
            _this.searchOptions.regex = !_this.searchOptions.regex;
            _this.updateSearchInputBox(_this.searchOptions.regex, event.currentTarget);
        };
        _this.onInputChanged = function (event) {
            // move to previous search result on `Shift + Enter`
            if (event && event.shiftKey && event.keyCode === browser_1.Key.ENTER.keyCode) {
                _this.search(false, 'previous');
                return;
            }
            // move to next search result on `Enter`
            if (event && event.keyCode === browser_1.Key.ENTER.keyCode) {
                _this.search(false, 'next');
                return;
            }
            _this.search(true, 'next');
        };
        _this.handleNextButtonClicked = function () {
            _this.search(false, 'next');
        };
        _this.handlePreviousButtonClicked = function () {
            _this.search(false, 'previous');
        };
        return _this;
    }
    TerminalSearchWidget.prototype.init = function () {
        this.node.classList.add('theia-search-terminal-widget-parent');
        this.searchAddon = new xterm_addon_search_1.SearchAddon();
        this.terminal.loadAddon(this.searchAddon);
        this.hide();
        this.update();
    };
    TerminalSearchWidget.prototype.render = function () {
        var _this = this;
        return React.createElement("div", { className: 'theia-search-terminal-widget' },
            React.createElement("div", { className: 'theia-search-elem-box', ref: function (searchBox) { return _this.searchBox = searchBox; } },
                React.createElement("input", { title: 'Find', type: 'text', placeholder: 'Find', ref: function (ip) { return _this.searchInput = ip; }, onKeyUp: this.onInputChanged, onFocus: this.onSearchInputFocus, onBlur: this.onSearchInputBlur }),
                React.createElement("div", { title: 'Match case', tabIndex: 0, className: 'search-elem match-case', onClick: this.handleCaseSensitiveOptionClicked }),
                React.createElement("div", { title: 'Match whole word', tabIndex: 0, className: 'search-elem whole-word', onClick: this.handleWholeWordOptionClicked }),
                React.createElement("div", { title: 'Use regular expression', tabIndex: 0, className: 'search-elem use-regexp', onClick: this.handleRegexOptionClicked })),
            React.createElement("button", { title: 'Previous match', className: 'search-elem arrow-up', onClick: this.handlePreviousButtonClicked }),
            React.createElement("button", { title: 'Next match', className: 'search-elem arrow-down', onClick: this.handleNextButtonClicked }),
            React.createElement("button", { title: 'Close', className: 'search-elem close', onClick: this.handleHide }));
    };
    TerminalSearchWidget.prototype.updateSearchInputBox = function (enable, optionElement) {
        if (enable) {
            optionElement.classList.add('option-enabled');
        }
        else {
            optionElement.classList.remove('option-enabled');
        }
        this.searchInput.focus();
    };
    TerminalSearchWidget.prototype.search = function (incremental, searchDirection) {
        if (this.searchInput) {
            this.searchOptions.incremental = incremental;
            var searchText = this.searchInput.value;
            if (searchDirection === 'next') {
                this.searchAddon.findNext(searchText, this.searchOptions);
            }
            if (searchDirection === 'previous') {
                this.searchAddon.findPrevious(searchText, this.searchOptions);
            }
        }
    };
    TerminalSearchWidget.prototype.onAfterHide = function () {
        this.terminal.focus();
    };
    TerminalSearchWidget.prototype.onAfterShow = function () {
        if (this.searchInput) {
            this.searchInput.select();
        }
    };
    __decorate([
        inversify_1.inject(xterm_1.Terminal),
        __metadata("design:type", xterm_1.Terminal)
    ], TerminalSearchWidget.prototype, "terminal", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalSearchWidget.prototype, "init", null);
    TerminalSearchWidget = __decorate([
        inversify_1.injectable()
    ], TerminalSearchWidget);
    return TerminalSearchWidget;
}(react_widget_1.ReactWidget));
exports.TerminalSearchWidget = TerminalSearchWidget;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/search/terminal-search-widget'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/terminal-contribution.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/terminal-contribution.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalContribution = void 0;
exports.TerminalContribution = Symbol('TerminalContribution');

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/terminal-contribution'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/terminal-copy-on-selection-handler.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/terminal-copy-on-selection-handler.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalCopyOnSelectionHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var TerminalCopyOnSelectionHandler = /** @class */ (function () {
    function TerminalCopyOnSelectionHandler() {
        var _this = this;
        this.copyListener = function (ev) {
            if (_this.interceptCopy && ev.clipboardData) {
                ev.clipboardData.setData('text/plain', _this.textToCopy);
                ev.preventDefault();
            }
        };
    }
    TerminalCopyOnSelectionHandler.prototype.init = function () {
        document.addEventListener('copy', this.copyListener);
    };
    TerminalCopyOnSelectionHandler.prototype.clipBoardCopyIsGranted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permissions, state, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Unfortunately Firefox doesn't support permission check `clipboard-write`, so let try to copy anyway,
                        if (browser_1.isFirefox) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        permissions = navigator.permissions;
                        return [4 /*yield*/, permissions.query({ name: 'clipboard-write' })];
                    case 2:
                        state = (_a.sent()).state;
                        if (state === 'granted') {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, false];
                }
            });
        });
    };
    TerminalCopyOnSelectionHandler.prototype.executeCommandCopy = function () {
        try {
            this.interceptCopy = true;
            document.execCommand('copy');
            this.interceptCopy = false;
        }
        catch (e) {
            // do nothing
        }
    };
    TerminalCopyOnSelectionHandler.prototype.writeToClipBoard = function () {
        return __awaiter(this, void 0, void 0, function () {
            var clipboard, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clipboard = navigator.clipboard;
                        if (!clipboard) {
                            this.executeCommandCopy();
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, clipboard.writeText(this.textToCopy)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        this.executeCommandCopy();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TerminalCopyOnSelectionHandler.prototype.copy = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var permissions, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.textToCopy = text;
                        permissions = navigator.permissions;
                        _a = permissions && permissions.query;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.clipBoardCopyIsGranted()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.writeToClipBoard()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.executeCommandCopy();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalCopyOnSelectionHandler.prototype, "init", null);
    TerminalCopyOnSelectionHandler = __decorate([
        inversify_1.injectable()
    ], TerminalCopyOnSelectionHandler);
    return TerminalCopyOnSelectionHandler;
}());
exports.TerminalCopyOnSelectionHandler = TerminalCopyOnSelectionHandler;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/terminal-copy-on-selection-handler'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/terminal-preferences.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/terminal-preferences.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {
/********************************************************************************
 * Copyright (C) 2018 Bitsler and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindTerminalPreferences = exports.createTerminalPreferences = exports.TerminalPreferences = exports.isTerminalRendererType = exports.DEFAULT_TERMINAL_RENDERER_TYPE = exports.TerminalConfigSchema = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
exports.TerminalConfigSchema = {
    type: 'object',
    properties: {
        'terminal.enableCopy': {
            type: 'boolean',
            description: 'Enable ctrl-c (cmd-c on macOS) to copy selected text',
            default: true
        },
        'terminal.enablePaste': {
            type: 'boolean',
            description: 'Enable ctrl-v (cmd-v on macOS) to paste from clipboard',
            default: true
        },
        'terminal.integrated.fontFamily': {
            type: 'string',
            description: 'Controls the font family of the terminal.',
            default: browser_2.EDITOR_FONT_DEFAULTS.fontFamily
        },
        'terminal.integrated.fontSize': {
            type: 'number',
            description: 'Controls the font size in pixels of the terminal.',
            minimum: 6,
            default: browser_2.EDITOR_FONT_DEFAULTS.fontSize
        },
        'terminal.integrated.fontWeight': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for non-bold text.',
            default: 'normal'
        },
        'terminal.integrated.fontWeightBold': {
            type: 'string',
            enum: ['normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            description: 'The font weight to use within the terminal for bold text.',
            default: 'bold'
        },
        'terminal.integrated.drawBoldTextInBrightColors': {
            description: 'Controls whether to draw bold text in bright colors.',
            type: 'boolean',
            default: true,
        },
        'terminal.integrated.letterSpacing': {
            description: 'Controls the letter spacing of the terminal, this is an integer value which represents the amount of additional pixels to add between characters.',
            type: 'number',
            default: 1
        },
        'terminal.integrated.lineHeight': {
            description: 'Controls the line height of the terminal, this number is multiplied by the terminal font size to get the actual line-height in pixels.',
            type: 'number',
            minimum: 1,
            default: 1
        },
        'terminal.integrated.scrollback': {
            description: 'Controls the maximum amount of lines the terminal keeps in its buffer.',
            type: 'number',
            default: 1000
        },
        'terminal.integrated.fastScrollSensitivity': {
            description: 'Controls the scrolling speed when pressing \'alt\'.',
            type: 'number',
            default: 5,
        },
        'terminal.integrated.rendererType': {
            description: 'Controls how the terminal is rendered.',
            type: 'string',
            enum: ['canvas', 'dom'],
            default: 'canvas'
        },
        'terminal.integrated.copyOnSelection': {
            description: 'Controls whether text selected in the terminal will be copied to the clipboard.',
            type: 'boolean',
            default: false,
        },
        'terminal.integrated.cursorBlinking': {
            description: 'Controls whether the terminal cursor blinks.',
            type: 'boolean',
            default: false
        },
        'terminal.integrated.cursorStyle': {
            description: 'Controls the style of the terminal cursor.',
            enum: ['block', 'underline', 'line'],
            default: 'block'
        },
        'terminal.integrated.cursorWidth': {
            description: 'Controls the width of the cursor when \'terminal.integrated.cursorStyle\' is set to \'line\'.',
            markdownDescription: 'Controls the width of the cursor when `#terminal.integrated.cursorStyle#` is set to `line`.',
            type: 'number',
            default: 1
        },
        'terminal.integrated.shell.windows': {
            type: ['string', 'null'],
            description: 'The path of the shell that the terminal uses on Windows. (default: C:\\Windows\\System32\\cmd.exe).',
            markdownDescription: 'The path of the shell that the terminal uses on Windows. (default: C:\\Windows\\System32\\cmd.exe).',
            default: undefined
        },
        'terminal.integrated.shell.osx': {
            type: ['string', 'null'],
            description: "The path of the shell that the terminal uses on macOS (default: " + (process.env.SHELL || '/bin/bash') + ").",
            markdownDescription: "The path of the shell that the terminal uses on macOS (default: " + (process.env.SHELL || '/bin/bash') + ").",
            default: undefined
        },
        'terminal.integrated.shell.linux': {
            type: ['string', 'null'],
            description: "The path of the shell that the terminal uses on Linux (default: " + (process.env.SHELL || '/bin/bash') + ").",
            markdownDescription: "The path of the shell that the terminal uses on Linux (default: " + (process.env.SHELL || '/bin/bash') + ").",
            default: undefined
        },
        'terminal.integrated.shellArgs.windows': {
            type: 'array',
            description: 'The command line arguments to use when on the Windows terminal.',
            markdownDescription: 'The command line arguments to use when on the Windows terminal.',
            default: []
        },
        'terminal.integrated.shellArgs.osx': {
            type: 'array',
            description: 'The command line arguments to use when on the macOS terminal.',
            markdownDescription: 'The command line arguments to use when on the macOS terminal.',
            default: [
                '-l'
            ]
        },
        'terminal.integrated.shellArgs.linux': {
            type: 'array',
            description: 'The command line arguments to use when on the Linux terminal.',
            markdownDescription: 'The command line arguments to use when on the Linux terminal.',
            default: []
        },
    }
};
exports.DEFAULT_TERMINAL_RENDERER_TYPE = 'canvas';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isTerminalRendererType(arg) {
    return typeof arg === 'string' && (arg === 'canvas' || arg === 'dom');
}
exports.isTerminalRendererType = isTerminalRendererType;
exports.TerminalPreferences = Symbol('TerminalPreferences');
function createTerminalPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.TerminalConfigSchema);
}
exports.createTerminalPreferences = createTerminalPreferences;
function bindTerminalPreferences(bind) {
    bind(exports.TerminalPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createTerminalPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.TerminalConfigSchema });
}
exports.bindTerminalPreferences = bindTerminalPreferences;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/terminal-preferences'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "../../node_modules/process/browser.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/terminal-theme-service.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/terminal-theme-service.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalThemeService = exports.terminalAnsiColorMap = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../../packages/core/lib/browser/color-registry.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../../packages/core/lib/browser/theming.js");
/**
 * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/src/vs/workbench/contrib/terminal/common/terminalColorRegistry.ts#L40
 */
exports.terminalAnsiColorMap = {
    'terminal.ansiBlack': {
        index: 0,
        defaults: {
            light: '#000000',
            dark: '#000000',
            hc: '#000000'
        }
    },
    'terminal.ansiRed': {
        index: 1,
        defaults: {
            light: '#cd3131',
            dark: '#cd3131',
            hc: '#cd0000'
        }
    },
    'terminal.ansiGreen': {
        index: 2,
        defaults: {
            light: '#00BC00',
            dark: '#0DBC79',
            hc: '#00cd00'
        }
    },
    'terminal.ansiYellow': {
        index: 3,
        defaults: {
            light: '#949800',
            dark: '#e5e510',
            hc: '#cdcd00'
        }
    },
    'terminal.ansiBlue': {
        index: 4,
        defaults: {
            light: '#0451a5',
            dark: '#2472c8',
            hc: '#0000ee'
        }
    },
    'terminal.ansiMagenta': {
        index: 5,
        defaults: {
            light: '#bc05bc',
            dark: '#bc3fbc',
            hc: '#cd00cd'
        }
    },
    'terminal.ansiCyan': {
        index: 6,
        defaults: {
            light: '#0598bc',
            dark: '#11a8cd',
            hc: '#00cdcd'
        }
    },
    'terminal.ansiWhite': {
        index: 7,
        defaults: {
            light: '#555555',
            dark: '#e5e5e5',
            hc: '#e5e5e5'
        }
    },
    'terminal.ansiBrightBlack': {
        index: 8,
        defaults: {
            light: '#666666',
            dark: '#666666',
            hc: '#7f7f7f'
        }
    },
    'terminal.ansiBrightRed': {
        index: 9,
        defaults: {
            light: '#cd3131',
            dark: '#f14c4c',
            hc: '#ff0000'
        }
    },
    'terminal.ansiBrightGreen': {
        index: 10,
        defaults: {
            light: '#14CE14',
            dark: '#23d18b',
            hc: '#00ff00'
        }
    },
    'terminal.ansiBrightYellow': {
        index: 11,
        defaults: {
            light: '#b5ba00',
            dark: '#f5f543',
            hc: '#ffff00'
        }
    },
    'terminal.ansiBrightBlue': {
        index: 12,
        defaults: {
            light: '#0451a5',
            dark: '#3b8eea',
            hc: '#5c5cff'
        }
    },
    'terminal.ansiBrightMagenta': {
        index: 13,
        defaults: {
            light: '#bc05bc',
            dark: '#d670d6',
            hc: '#ff00ff'
        }
    },
    'terminal.ansiBrightCyan': {
        index: 14,
        defaults: {
            light: '#0598bc',
            dark: '#29b8db',
            hc: '#00ffff'
        }
    },
    'terminal.ansiBrightWhite': {
        index: 15,
        defaults: {
            light: '#a5a5a5',
            dark: '#e5e5e5',
            hc: '#ffffff'
        }
    }
};
var TerminalThemeService = /** @class */ (function () {
    function TerminalThemeService() {
        this.onDidChange = theming_1.ThemeService.get().onThemeChange;
    }
    Object.defineProperty(TerminalThemeService.prototype, "theme", {
        get: function () {
            var foregroundColor = this.colorRegistry.getCurrentColor('terminal.foreground');
            var backgroundColor = this.colorRegistry.getCurrentColor('terminal.background') || this.colorRegistry.getCurrentColor('panel.background');
            var cursorColor = this.colorRegistry.getCurrentColor('terminalCursor.foreground') || foregroundColor;
            var cursorAccentColor = this.colorRegistry.getCurrentColor('terminalCursor.background') || backgroundColor;
            var selectionColor = this.colorRegistry.getCurrentColor('terminal.selectionBackground');
            var theme = {
                background: backgroundColor,
                foreground: foregroundColor,
                cursor: cursorColor,
                cursorAccent: cursorAccentColor,
                selection: selectionColor
            };
            // eslint-disable-next-line guard-for-in
            for (var id in exports.terminalAnsiColorMap) {
                var colorId = id.substring(13);
                var colorName = colorId.charAt(0).toLowerCase() + colorId.slice(1);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                theme[colorName] = this.colorRegistry.getCurrentColor(id);
            }
            return theme;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], TerminalThemeService.prototype, "colorRegistry", void 0);
    TerminalThemeService = __decorate([
        inversify_1.injectable()
    ], TerminalThemeService);
    return TerminalThemeService;
}());
exports.TerminalThemeService = TerminalThemeService;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/terminal-theme-service'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/browser/terminal-widget-impl.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/browser/terminal-widget-impl.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalWidgetImpl = exports.TERMINAL_WIDGET_FACTORY_ID = void 0;
var xterm_1 = __webpack_require__(/*! xterm */ "../../node_modules/xterm/lib/xterm.js");
var xterm_addon_fit_1 = __webpack_require__(/*! xterm-addon-fit */ "../../node_modules/xterm-addon-fit/lib/xterm-addon-fit.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/workspace/lib/browser */ "../../packages/workspace/lib/browser/index.js");
var shell_terminal_protocol_1 = __webpack_require__(/*! ../common/shell-terminal-protocol */ "../../packages/terminal/lib/common/shell-terminal-protocol.js");
var terminal_protocol_1 = __webpack_require__(/*! ../common/terminal-protocol */ "../../packages/terminal/lib/common/terminal-protocol.js");
var base_terminal_protocol_1 = __webpack_require__(/*! ../common/base-terminal-protocol */ "../../packages/terminal/lib/common/base-terminal-protocol.js");
var terminal_watcher_1 = __webpack_require__(/*! ../common/terminal-watcher */ "../../packages/terminal/lib/common/terminal-watcher.js");
var terminal_widget_1 = __webpack_require__(/*! ./base/terminal-widget */ "../../packages/terminal/lib/browser/base/terminal-widget.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
var terminal_preferences_1 = __webpack_require__(/*! ./terminal-preferences */ "../../packages/terminal/lib/browser/terminal-preferences.js");
var terminal_contribution_1 = __webpack_require__(/*! ./terminal-contribution */ "../../packages/terminal/lib/browser/terminal-contribution.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var terminal_service_1 = __webpack_require__(/*! ./base/terminal-service */ "../../packages/terminal/lib/browser/base/terminal-service.js");
var terminal_search_widget_1 = __webpack_require__(/*! ./search/terminal-search-widget */ "../../packages/terminal/lib/browser/search/terminal-search-widget.js");
var terminal_copy_on_selection_handler_1 = __webpack_require__(/*! ./terminal-copy-on-selection-handler */ "../../packages/terminal/lib/browser/terminal-copy-on-selection-handler.js");
var terminal_theme_service_1 = __webpack_require__(/*! ./terminal-theme-service */ "../../packages/terminal/lib/browser/terminal-theme-service.js");
var shell_command_builder_1 = __webpack_require__(/*! @theia/process/lib/common/shell-command-builder */ "../../packages/process/lib/common/shell-command-builder.js");
exports.TERMINAL_WIDGET_FACTORY_ID = 'terminal';
var TerminalWidgetImpl = /** @class */ (function (_super) {
    __extends(TerminalWidgetImpl, _super);
    function TerminalWidgetImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.TERMINAL = 'Terminal';
        _this.terminalKind = 'user';
        _this._terminalId = -1;
        _this.onTermDidClose = new core_1.Emitter();
        _this.restored = false;
        _this.closeOnDispose = true;
        _this.onDidOpenEmitter = new core_1.Emitter();
        _this.onDidOpen = _this.onDidOpenEmitter.event;
        _this.onDidOpenFailureEmitter = new core_1.Emitter();
        _this.onDidOpenFailure = _this.onDidOpenFailureEmitter.event;
        _this.toDisposeOnConnect = new core_1.DisposableCollection();
        _this.needsResize = true;
        // Device status code emitted by Xterm.js
        // Check: https://github.com/xtermjs/xterm.js/blob/release/3.14/src/InputHandler.ts#L1055-L1082
        _this.deviceStatusCodes = new Set(['\u001B[>0;276;0c', '\u001B[>85;95;0c', '\u001B[>83;40003;0c', '\u001B[?1;2c', '\u001B[?6c']);
        _this.termOpened = false;
        _this.initialData = '';
        return _this;
    }
    TerminalWidgetImpl.prototype.init = function () {
        var e_1, _a;
        var _this = this;
        this.setTitle(this.options.title || this.TERMINAL);
        this.title.iconClass = 'fa fa-terminal';
        if (this.options.kind) {
            this.terminalKind = this.options.kind;
        }
        if (this.options.destroyTermOnClose === true) {
            this.toDispose.push(core_1.Disposable.create(function () {
                return _this.term.dispose();
            }));
        }
        this.title.closable = true;
        this.addClass('terminal-container');
        this.term = new xterm_1.Terminal({
            cursorBlink: this.preferences['terminal.integrated.cursorBlinking'],
            cursorStyle: this.getCursorStyle(),
            cursorWidth: this.preferences['terminal.integrated.cursorWidth'],
            fontFamily: this.preferences['terminal.integrated.fontFamily'],
            fontSize: this.preferences['terminal.integrated.fontSize'],
            fontWeight: this.preferences['terminal.integrated.fontWeight'],
            fontWeightBold: this.preferences['terminal.integrated.fontWeightBold'],
            drawBoldTextInBrightColors: this.preferences['terminal.integrated.drawBoldTextInBrightColors'],
            letterSpacing: this.preferences['terminal.integrated.letterSpacing'],
            lineHeight: this.preferences['terminal.integrated.lineHeight'],
            scrollback: this.preferences['terminal.integrated.scrollback'],
            fastScrollSensitivity: this.preferences['terminal.integrated.fastScrollSensitivity'],
            rendererType: this.getTerminalRendererType(this.preferences['terminal.integrated.rendererType']),
            theme: this.themeService.theme
        });
        this.fitAddon = new xterm_addon_fit_1.FitAddon();
        this.term.loadAddon(this.fitAddon);
        this.hoverMessage = document.createElement('div');
        this.hoverMessage.textContent = 'Cmd + click to follow link';
        this.hoverMessage.style.position = 'fixed';
        // TODO use `var(--theia-editorHoverWidget-foreground) with a newer Monaco version
        this.hoverMessage.style.color = 'var(--theia-editorWidget-foreground)';
        this.hoverMessage.style.backgroundColor = 'var(--theia-editorHoverWidget-background)';
        this.hoverMessage.style.borderColor = 'var(--theia-editorHoverWidget-border)';
        this.hoverMessage.style.borderWidth = '0.5px';
        this.hoverMessage.style.borderStyle = 'solid';
        this.hoverMessage.style.padding = '5px';
        // Above the xterm.js canvas layers:
        // https://github.com/xtermjs/xterm.js/blob/ff790236c1b205469f17a21246141f512d844295/src/renderer/Renderer.ts#L41-L46
        this.hoverMessage.style.zIndex = '10';
        // Initially invisible:
        this.hoverMessage.style.display = 'none';
        this.node.appendChild(this.hoverMessage);
        this.toDispose.push(this.preferences.onPreferenceChanged(function (change) {
            var lastSeparator = change.preferenceName.lastIndexOf('.');
            if (lastSeparator > 0) {
                var preferenceName = change.preferenceName.substr(lastSeparator + 1);
                var preferenceValue = _this.preferences[change.preferenceName];
                if (preferenceName === 'rendererType') {
                    var newRendererType = _this.preferences[change.preferenceName];
                    if (newRendererType !== _this.getTerminalRendererType(newRendererType)) {
                        // given terminal renderer type is not supported or invalid
                        preferenceValue = terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
                    }
                }
                // Convert the terminal preference into a valid `xterm` option.
                if (preferenceName === 'cursorBlinking') {
                    preferenceName = 'cursorBlink';
                }
                else if (preferenceName === 'cursorStyle') {
                    preferenceValue = _this.getCursorStyle();
                }
                _this.term.setOption(preferenceName, preferenceValue);
                _this.needsResize = true;
                _this.update();
            }
        }));
        this.toDispose.push(this.themeService.onDidChange(function () { return _this.term.setOption('theme', _this.themeService.theme); }));
        this.attachCustomKeyEventHandler();
        var titleChangeListenerDispose = this.term.onTitleChange(function (title) {
            if (_this.options.useServerTitle) {
                _this.title.label = title;
            }
        });
        this.toDispose.push(titleChangeListenerDispose);
        this.toDispose.push(this.terminalWatcher.onTerminalError(function (_a) {
            var terminalId = _a.terminalId, error = _a.error;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
                _this.logger.error("The terminal process terminated. Cause: " + error);
            }
        }));
        this.toDispose.push(this.terminalWatcher.onTerminalExit(function (_a) {
            var terminalId = _a.terminalId;
            if (terminalId === _this.terminalId) {
                _this.dispose();
                _this.onTermDidClose.fire(_this);
                _this.onTermDidClose.dispose();
            }
        }));
        this.toDispose.push(this.toDisposeOnConnect);
        this.toDispose.push(this.shellTerminalServer.onDidCloseConnection(function () {
            var disposable = _this.shellTerminalServer.onDidOpenConnection(function () {
                disposable.dispose();
                _this.reconnectTerminalProcess();
            });
            _this.toDispose.push(disposable);
        }));
        this.toDispose.push(this.onTermDidClose);
        this.toDispose.push(this.onDidOpenEmitter);
        this.toDispose.push(this.onDidOpenFailureEmitter);
        var touchEndListener = function (event) {
            if (_this.node.contains(event.target)) {
                _this.lastTouchEnd = event;
            }
        };
        document.addEventListener('touchend', touchEndListener, { passive: true });
        this.onDispose(function () {
            document.removeEventListener('touchend', touchEndListener);
        });
        this.toDispose.push(this.term.onSelectionChange(function () {
            if (_this.copyOnSelection) {
                _this.copyOnSelectionHandler.copy(_this.term.getSelection());
            }
        }));
        try {
            for (var _b = __values(this.terminalContributionProvider.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                contribution.onCreate(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.searchBox = this.terminalSearchBoxFactory(this.term);
        this.toDispose.push(this.searchBox);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "kind", {
        get: function () {
            return this.terminalKind;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Get the cursor style compatible with `xterm`.
     * @returns CursorStyle
     */
    TerminalWidgetImpl.prototype.getCursorStyle = function () {
        var value = this.preferences['terminal.integrated.cursorStyle'];
        return value === 'line' ? 'bar' : value;
    };
    /**
     * Returns given renderer type if it is valid and supported or default renderer otherwise.
     *
     * @param terminalRendererType desired terminal renderer type
     */
    TerminalWidgetImpl.prototype.getTerminalRendererType = function (terminalRendererType) {
        if (terminalRendererType && terminal_preferences_1.isTerminalRendererType(terminalRendererType)) {
            return terminalRendererType;
        }
        return terminal_preferences_1.DEFAULT_TERMINAL_RENDERER_TYPE;
    };
    TerminalWidgetImpl.prototype.showHoverMessage = function (x, y, message) {
        this.hoverMessage.innerText = message;
        this.hoverMessage.style.display = 'inline';
        this.hoverMessage.style.top = y - 30 + "px";
        this.hoverMessage.style.left = x - 60 + "px";
    };
    TerminalWidgetImpl.prototype.hideHover = function () {
        this.hoverMessage.style.display = 'none';
    };
    TerminalWidgetImpl.prototype.getTerminal = function () {
        return this.term;
    };
    TerminalWidgetImpl.prototype.getSearchBox = function () {
        return this.searchBox;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "cwd", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            if (this.terminalService.getById(this.id)) {
                return this.shellTerminalServer.getCwdURI(this.terminalId)
                    .then(function (cwdUrl) { return new uri_1.default(cwdUrl); });
            }
            return Promise.resolve(new uri_1.default());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "processId", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            return this.shellTerminalServer.getProcessId(this.terminalId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "processInfo", {
        get: function () {
            if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                return Promise.reject(new Error('terminal is not started'));
            }
            return this.shellTerminalServer.getProcessInfo(this.terminalId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "terminalId", {
        get: function () {
            return this._terminalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "lastTouchEndEvent", {
        get: function () {
            return this.lastTouchEnd;
        },
        enumerable: false,
        configurable: true
    });
    TerminalWidgetImpl.prototype.onDispose = function (onDispose) {
        this.toDispose.push(core_1.Disposable.create(onDispose));
    };
    TerminalWidgetImpl.prototype.clearOutput = function () {
        this.term.clear();
    };
    TerminalWidgetImpl.prototype.hasChildProcesses = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.shellTerminalServer).hasChildProcesses;
                        return [4 /*yield*/, this.processId];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.storeState = function () {
        this.closeOnDispose = false;
        return { terminalId: this.terminalId, titleLabel: this.title.label };
    };
    TerminalWidgetImpl.prototype.restoreState = function (oldState) {
        if (this.restored === false) {
            var state = oldState;
            /* This is a workaround to issue #879 */
            this.restored = true;
            this.title.label = state.titleLabel;
            this.start(state.terminalId);
        }
    };
    /**
     * Create a new shell terminal in the back-end and attach it to a
     * new terminal widget.
     * If id is provided attach to the terminal for this id.
     */
    TerminalWidgetImpl.prototype.start = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        if (!(typeof id !== 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createTerminal()];
                    case 1:
                        _b = _c.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.attachTerminal(id)];
                    case 3:
                        _b = _c.sent();
                        _c.label = 4;
                    case 4:
                        _a._terminalId = _b;
                        this.resizeTerminalProcess();
                        this.connectTerminalProcess();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)) {
                            this.onDidOpenEmitter.fire(undefined);
                            return [2 /*return*/, this.terminalId];
                        }
                        this.onDidOpenFailureEmitter.fire(undefined);
                        throw new Error('Failed to start terminal' + (id ? " for id: " + id + "." : '.'));
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.attachTerminal = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var terminalId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.shellTerminalServer.attach(id)];
                    case 1:
                        terminalId = _a.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        this.logger.error("Error attaching to terminal id " + id + ", the terminal is most likely gone. Starting up a new terminal instead.");
                        if (this.kind === 'user') {
                            return [2 /*return*/, this.createTerminal()];
                        }
                        else {
                            return [2 /*return*/, -1];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.createTerminal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rootURI, root, _a, cols, rows, terminalId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rootURI = this.options.cwd;
                        if (!!rootURI) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.workspaceService.roots];
                    case 1:
                        root = (_b.sent())[0];
                        rootURI = root && root.uri;
                        _b.label = 2;
                    case 2:
                        _a = this.term, cols = _a.cols, rows = _a.rows;
                        return [4 /*yield*/, this.shellTerminalServer.create({
                                shellPreferences: this.shellPreferences,
                                shell: this.options.shellPath,
                                args: this.options.shellArgs,
                                env: this.options.env,
                                rootURI: rootURI,
                                cols: cols,
                                rows: rows
                            })];
                    case 3:
                        terminalId = _b.sent();
                        if (base_terminal_protocol_1.IBaseTerminalServer.validateId(terminalId)) {
                            return [2 /*return*/, terminalId];
                        }
                        throw new Error('Error creating terminal widget, see the backend error log for more information.');
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.processMessage = function (msg) {
        _super.prototype.processMessage.call(this, msg);
        switch (msg.type) {
            case 'fit-request':
                this.onFitRequest(msg);
                break;
            default:
                break;
        }
    };
    TerminalWidgetImpl.prototype.onFitRequest = function (msg) {
        _super.prototype.onFitRequest.call(this, msg);
        browser_1.MessageLoop.sendMessage(this, browser_1.Widget.ResizeMessage.UnknownSize);
    };
    TerminalWidgetImpl.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.term.focus();
    };
    TerminalWidgetImpl.prototype.onAfterShow = function (msg) {
        _super.prototype.onAfterShow.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onAfterAttach = function (msg) {
        browser_1.Widget.attach(this.searchBox, this.node);
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    TerminalWidgetImpl.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        this.needsResize = true;
        this.update();
    };
    TerminalWidgetImpl.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        if (!this.isVisible || !this.isAttached) {
            return;
        }
        this.open();
        if (this.needsResize) {
            this.resizeTerminal();
            this.needsResize = false;
            this.resizeTerminalProcess();
        }
    };
    TerminalWidgetImpl.prototype.connectTerminalProcess = function () {
        var _this = this;
        if (typeof this.terminalId !== 'number') {
            return;
        }
        this.toDisposeOnConnect.dispose();
        this.toDispose.push(this.toDisposeOnConnect);
        var waitForConnection = this.waitForConnection = new promise_util_1.Deferred();
        this.webSocketConnectionProvider.listen({
            path: terminal_protocol_1.terminalsPath + "/" + this.terminalId,
            onConnection: function (connection) {
                connection.onNotification('onData', function (data) { return _this.write(data); });
                // Excludes the device status code emitted by Xterm.js
                var sendData = function (data) {
                    if (data && !_this.deviceStatusCodes.has(data)) {
                        return connection.sendRequest('write', data);
                    }
                };
                var disposable = _this.term.onData(sendData);
                connection.onDispose(function () { return disposable.dispose(); });
                _this.toDisposeOnConnect.push(connection);
                connection.listen();
                if (waitForConnection) {
                    waitForConnection.resolve(connection);
                }
            }
        }, { reconnecting: false });
    };
    TerminalWidgetImpl.prototype.reconnectTerminalProcess = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof this.terminalId === 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.start(this.terminalId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.open = function () {
        if (this.termOpened) {
            return;
        }
        this.term.open(this.node);
        if (this.initialData) {
            this.term.write(this.initialData);
        }
        this.termOpened = true;
        this.initialData = '';
        if (browser_1.isFirefox) {
            // The software scrollbars don't work with xterm.js, so we disable the scrollbar if we are on firefox.
            if (this.term.element) {
                this.term.element.children.item(0).style.overflow = 'hidden';
            }
        }
    };
    TerminalWidgetImpl.prototype.write = function (data) {
        if (this.termOpened) {
            this.term.write(data);
        }
        else {
            this.initialData += data;
        }
    };
    TerminalWidgetImpl.prototype.sendText = function (text) {
        if (this.waitForConnection) {
            this.waitForConnection.promise.then(function (connection) {
                return connection.sendRequest('write', text);
            });
        }
    };
    TerminalWidgetImpl.prototype.executeCommand = function (commandOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.sendText;
                        _c = (_b = this.shellCommandBuilder).buildCommand;
                        return [4 /*yield*/, this.processInfo];
                    case 1:
                        _a.apply(this, [_c.apply(_b, [_d.sent(), commandOptions]) + '\n']);
                        return [2 /*return*/];
                }
            });
        });
    };
    TerminalWidgetImpl.prototype.scrollLineUp = function () {
        this.term.scrollLines(-1);
    };
    TerminalWidgetImpl.prototype.scrollLineDown = function () {
        this.term.scrollLines(1);
    };
    TerminalWidgetImpl.prototype.scrollToTop = function () {
        this.term.scrollToTop();
    };
    TerminalWidgetImpl.prototype.scrollToBottom = function () {
        this.term.scrollToBottom();
    };
    TerminalWidgetImpl.prototype.scrollPageUp = function () {
        this.term.scrollPages(-1);
    };
    TerminalWidgetImpl.prototype.scrollPageDown = function () {
        this.term.scrollPages(1);
    };
    TerminalWidgetImpl.prototype.resetTerminal = function () {
        this.term.reset();
    };
    TerminalWidgetImpl.prototype.writeLine = function (text) {
        this.term.writeln(text);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "onTerminalDidClose", {
        get: function () {
            return this.onTermDidClose.event;
        },
        enumerable: false,
        configurable: true
    });
    TerminalWidgetImpl.prototype.dispose = function () {
        /* Close the backend terminal only when explicitly closing the terminal
         * a refresh for example won't close it.  */
        if (this.closeOnDispose === true && typeof this.terminalId === 'number') {
            this.shellTerminalServer.close(this.terminalId);
            this.onTermDidClose.fire(this);
        }
        _super.prototype.dispose.call(this);
    };
    TerminalWidgetImpl.prototype.resizeTerminal = function () {
        var geo = this.fitAddon.proposeDimensions();
        var cols = geo.cols;
        var rows = geo.rows - 1; // subtract one row for margin
        this.term.resize(cols, rows);
    };
    TerminalWidgetImpl.prototype.resizeTerminalProcess = function () {
        if (!base_terminal_protocol_1.IBaseTerminalServer.validateId(this.terminalId)
            && !this.terminalService.getById(this.id)) {
            return;
        }
        var _a = this.term, cols = _a.cols, rows = _a.rows;
        this.shellTerminalServer.resize(this.terminalId, cols, rows);
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "enableCopy", {
        get: function () {
            return this.preferences['terminal.enableCopy'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "enablePaste", {
        get: function () {
            return this.preferences['terminal.enablePaste'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWidgetImpl.prototype, "shellPreferences", {
        get: function () {
            return {
                shell: {
                    Windows: this.preferences['terminal.integrated.shell.windows'],
                    Linux: this.preferences['terminal.integrated.shell.linux'],
                    OSX: this.preferences['terminal.integrated.shell.osx'],
                },
                shellArgs: {
                    Windows: this.preferences['terminal.integrated.shellArgs.windows'],
                    Linux: this.preferences['terminal.integrated.shellArgs.linux'],
                    OSX: this.preferences['terminal.integrated.shellArgs.osx'],
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    TerminalWidgetImpl.prototype.customKeyHandler = function (event) {
        var keyBindings = browser_1.KeyCode.createKeyCode(event).toString();
        var ctrlCmdCopy = (common_1.isOSX && keyBindings === 'meta+c') || (!common_1.isOSX && keyBindings === 'ctrl+c');
        var ctrlCmdPaste = (common_1.isOSX && keyBindings === 'meta+v') || (!common_1.isOSX && keyBindings === 'ctrl+v');
        if (ctrlCmdCopy && this.enableCopy && this.term.hasSelection()) {
            return false;
        }
        if (ctrlCmdPaste && this.enablePaste) {
            return false;
        }
        return true;
    };
    Object.defineProperty(TerminalWidgetImpl.prototype, "copyOnSelection", {
        get: function () {
            return this.preferences['terminal.integrated.copyOnSelection'];
        },
        enumerable: false,
        configurable: true
    });
    TerminalWidgetImpl.prototype.attachCustomKeyEventHandler = function () {
        var _this = this;
        this.term.attachCustomKeyEventHandler(function (e) { return _this.customKeyHandler(e); });
    };
    TerminalWidgetImpl.prototype.setTitle = function (title) {
        this.title.caption = title;
        this.title.label = title;
    };
    __decorate([
        inversify_1.inject(browser_2.WorkspaceService),
        __metadata("design:type", browser_2.WorkspaceService)
    ], TerminalWidgetImpl.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(browser_1.WebSocketConnectionProvider),
        __metadata("design:type", browser_1.WebSocketConnectionProvider)
    ], TerminalWidgetImpl.prototype, "webSocketConnectionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_widget_1.TerminalWidgetOptions),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(shell_terminal_protocol_1.ShellTerminalServerProxy),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "shellTerminalServer", void 0);
    __decorate([
        inversify_1.inject(terminal_watcher_1.TerminalWatcher),
        __metadata("design:type", terminal_watcher_1.TerminalWatcher)
    ], TerminalWidgetImpl.prototype, "terminalWatcher", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        inversify_1.named('terminal'),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject('terminal-dom-id'),
        __metadata("design:type", String)
    ], TerminalWidgetImpl.prototype, "id", void 0);
    __decorate([
        inversify_1.inject(terminal_preferences_1.TerminalPreferences),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(core_1.ContributionProvider),
        inversify_1.named(terminal_contribution_1.TerminalContribution),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalContributionProvider", void 0);
    __decorate([
        inversify_1.inject(terminal_service_1.TerminalService),
        __metadata("design:type", Object)
    ], TerminalWidgetImpl.prototype, "terminalService", void 0);
    __decorate([
        inversify_1.inject(terminal_search_widget_1.TerminalSearchWidgetFactory),
        __metadata("design:type", Function)
    ], TerminalWidgetImpl.prototype, "terminalSearchBoxFactory", void 0);
    __decorate([
        inversify_1.inject(terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler),
        __metadata("design:type", terminal_copy_on_selection_handler_1.TerminalCopyOnSelectionHandler)
    ], TerminalWidgetImpl.prototype, "copyOnSelectionHandler", void 0);
    __decorate([
        inversify_1.inject(terminal_theme_service_1.TerminalThemeService),
        __metadata("design:type", terminal_theme_service_1.TerminalThemeService)
    ], TerminalWidgetImpl.prototype, "themeService", void 0);
    __decorate([
        inversify_1.inject(shell_command_builder_1.ShellCommandBuilder),
        __metadata("design:type", shell_command_builder_1.ShellCommandBuilder)
    ], TerminalWidgetImpl.prototype, "shellCommandBuilder", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TerminalWidgetImpl.prototype, "init", null);
    TerminalWidgetImpl = __decorate([
        inversify_1.injectable()
    ], TerminalWidgetImpl);
    return TerminalWidgetImpl;
}(terminal_widget_1.TerminalWidget));
exports.TerminalWidgetImpl = TerminalWidgetImpl;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/browser/terminal-widget-impl'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/common/base-terminal-protocol.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/common/base-terminal-protocol.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchingBaseTerminalClient = exports.IBaseTerminalServer = void 0;
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var IBaseTerminalServer;
(function (IBaseTerminalServer) {
    function validateId(id) {
        return typeof id === 'number' && id !== -1;
    }
    IBaseTerminalServer.validateId = validateId;
})(IBaseTerminalServer = exports.IBaseTerminalServer || (exports.IBaseTerminalServer = {}));
var DispatchingBaseTerminalClient = /** @class */ (function () {
    function DispatchingBaseTerminalClient() {
        this.clients = new Set();
    }
    DispatchingBaseTerminalClient.prototype.push = function (client) {
        var _this = this;
        this.clients.add(client);
        return core_1.Disposable.create(function () { return _this.clients.delete(client); });
    };
    DispatchingBaseTerminalClient.prototype.onTerminalExitChanged = function (event) {
        this.clients.forEach(function (c) {
            try {
                c.onTerminalExitChanged(event);
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    DispatchingBaseTerminalClient.prototype.onTerminalError = function (event) {
        this.clients.forEach(function (c) {
            try {
                c.onTerminalError(event);
            }
            catch (e) {
                console.error(e);
            }
        });
    };
    return DispatchingBaseTerminalClient;
}());
exports.DispatchingBaseTerminalClient = DispatchingBaseTerminalClient;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/common/base-terminal-protocol'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/common/shell-terminal-protocol.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/common/shell-terminal-protocol.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellTerminalServerProxy = exports.shellTerminalPath = exports.IShellTerminalServer = void 0;
exports.IShellTerminalServer = Symbol('IShellTerminalServer');
exports.shellTerminalPath = '/services/shell-terminal';
;
exports.ShellTerminalServerProxy = Symbol('ShellTerminalServerProxy');

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/common/shell-terminal-protocol'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/common/terminal-protocol.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/common/terminal-protocol.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.terminalsPath = exports.terminalPath = exports.ITerminalServer = void 0;
exports.ITerminalServer = Symbol('ITerminalServer');
exports.terminalPath = '/services/terminal';
exports.terminalsPath = '/services/terminals';

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/common/terminal-protocol'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/lib/common/terminal-watcher.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/lib/common/terminal-watcher.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminalWatcher = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var TerminalWatcher = /** @class */ (function () {
    function TerminalWatcher() {
        this.onTerminalExitEmitter = new event_1.Emitter();
        this.onTerminalErrorEmitter = new event_1.Emitter();
    }
    TerminalWatcher.prototype.getTerminalClient = function () {
        var exitEmitter = this.onTerminalExitEmitter;
        var errorEmitter = this.onTerminalErrorEmitter;
        return {
            onTerminalExitChanged: function (event) {
                exitEmitter.fire(event);
            },
            onTerminalError: function (event) {
                errorEmitter.fire(event);
            }
        };
    };
    Object.defineProperty(TerminalWatcher.prototype, "onTerminalExit", {
        get: function () {
            return this.onTerminalExitEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TerminalWatcher.prototype, "onTerminalError", {
        get: function () {
            return this.onTerminalErrorEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    TerminalWatcher = __decorate([
        inversify_1.injectable()
    ], TerminalWatcher);
    return TerminalWatcher;
}());
exports.TerminalWatcher = TerminalWatcher;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/terminal/lib/common/terminal-watcher'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/terminal/src/browser/style/terminal-search.css":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/terminal/src/browser/style/terminal-search.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./terminal-search.css */ "../../node_modules/css-loader/index.js!../../packages/terminal/src/browser/style/terminal-search.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=34.bundle.js.map