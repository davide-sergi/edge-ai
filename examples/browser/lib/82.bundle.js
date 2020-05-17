(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "../../node_modules/base64-arraybuffer/lib/base64-arraybuffer.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/base64-arraybuffer/lib/base64-arraybuffer.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function(){
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function(arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
    i, len = bytes.length, base64 = "";

    for (i = 0; i < len; i+=3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
      base64 += chars[bytes[i + 2] & 63];
    }

    if ((len % 3) === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode =  function(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return arraybuffer;
  };
})();

if (!global) global = {};
(global['theia'] = global['theia'] || {})['base64-arraybuffer/lib/base64-arraybuffer'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../packages/console/src/browser/style/index.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/src/browser/style/index.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-console-content {\n    font-size: var(--theia-code-font-size);\n    line-height: var(--theia-code-line-height);\n    font-family: var(--theia-code-font-family);\n}\n\n.theia-console-input {\n    padding-left: 20px;\n    border-top: var(--theia-panel-border-width) solid var(--theia-panel-border);\n    height: calc(var(--theia-content-line-height)*2);\n    display: flex;\n    align-items: center;\n}\n\n.theia-console-input:before {\n    left: 8px;\n    top: 3px;\n\tposition: absolute;\n    content: '\\276F';\n\tline-height: 18px;\n}\n\n.theia-console-error {\n    color: var(--theia-errorForeground);\n}\n\n.theia-console-warning {\n    color: var(--theia-editorWarning-foreground);\n}\n\n.theia-console-ansi-console-item {\n    white-space: pre-wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../packages/console/lib/browser/console-contribution.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/lib/browser/console-contribution.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleCommandHandler = exports.ConsoleContribution = exports.ConsoleContextMenu = exports.ConsoleCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var console_manager_1 = __webpack_require__(/*! ./console-manager */ "../../packages/console/lib/browser/console-manager.js");
var console_keybinding_contexts_1 = __webpack_require__(/*! ./console-keybinding-contexts */ "../../packages/console/lib/browser/console-keybinding-contexts.js");
var console_content_widget_1 = __webpack_require__(/*! ./console-content-widget */ "../../packages/console/lib/browser/console-content-widget.js");
var ConsoleCommands;
(function (ConsoleCommands) {
    ConsoleCommands.SELECT_ALL = {
        id: 'console.selectAll'
    };
    ConsoleCommands.COLLAPSE_ALL = {
        id: 'console.collapseAll'
    };
    ConsoleCommands.CLEAR = {
        id: 'console.clear'
    };
    ConsoleCommands.EXECUTE = {
        id: 'console.execute'
    };
    ConsoleCommands.NAVIGATE_BACK = {
        id: 'console.navigatePrevious'
    };
    ConsoleCommands.NAVIGATE_FORWARD = {
        id: 'console.navigateNext'
    };
})(ConsoleCommands = exports.ConsoleCommands || (exports.ConsoleCommands = {}));
var ConsoleContextMenu;
(function (ConsoleContextMenu) {
    ConsoleContextMenu.CLIPBOARD = __spread(console_content_widget_1.ConsoleContentWidget.CONTEXT_MENU, ['1_clipboard']);
    ConsoleContextMenu.CLEAR = __spread(console_content_widget_1.ConsoleContentWidget.CONTEXT_MENU, ['2_clear']);
})(ConsoleContextMenu = exports.ConsoleContextMenu || (exports.ConsoleContextMenu = {}));
var ConsoleContribution = /** @class */ (function () {
    function ConsoleContribution() {
    }
    ConsoleContribution.prototype.initialize = function () { };
    ConsoleContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(ConsoleCommands.SELECT_ALL, this.newCommandHandler(function (console) { return console.selectAll(); }));
        commands.registerCommand(ConsoleCommands.COLLAPSE_ALL, this.newCommandHandler(function (console) { return console.collapseAll(); }));
        commands.registerCommand(ConsoleCommands.CLEAR, this.newCommandHandler(function (console) { return console.clear(); }));
        commands.registerCommand(ConsoleCommands.EXECUTE, this.newCommandHandler(function (console) { return console.execute(); }));
        commands.registerCommand(ConsoleCommands.NAVIGATE_BACK, this.newCommandHandler(function (console) { return console.navigateBack(); }));
        commands.registerCommand(ConsoleCommands.NAVIGATE_FORWARD, this.newCommandHandler(function (console) { return console.navigateForward(); }));
    };
    ConsoleContribution.prototype.registerKeybindings = function (keybindings) {
        keybindings.registerKeybinding({
            command: ConsoleCommands.SELECT_ALL.id,
            keybinding: 'ctrlcmd+a',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleContentFocus
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.EXECUTE.id,
            keybinding: 'enter',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleInputFocus
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.NAVIGATE_BACK.id,
            keybinding: 'up',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleNavigationBackEnabled
        });
        keybindings.registerKeybinding({
            command: ConsoleCommands.NAVIGATE_FORWARD.id,
            keybinding: 'down',
            context: console_keybinding_contexts_1.ConsoleKeybindingContexts.consoleNavigationForwardEnabled
        });
    };
    ConsoleContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: browser_1.CommonCommands.COPY.id,
            label: 'Copy',
            order: 'a1',
        });
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: ConsoleCommands.SELECT_ALL.id,
            label: 'Select All',
            order: 'a2'
        });
        menus.registerMenuAction(ConsoleContextMenu.CLIPBOARD, {
            commandId: ConsoleCommands.COLLAPSE_ALL.id,
            label: 'Collapse All',
            order: 'a3'
        });
        menus.registerMenuAction(ConsoleContextMenu.CLEAR, {
            commandId: ConsoleCommands.CLEAR.id,
            label: 'Clear Console'
        });
    };
    ConsoleContribution.prototype.newCommandHandler = function (execute) {
        return new ConsoleCommandHandler(this.manager, execute);
    };
    __decorate([
        inversify_1.inject(console_manager_1.ConsoleManager),
        __metadata("design:type", console_manager_1.ConsoleManager)
    ], ConsoleContribution.prototype, "manager", void 0);
    ConsoleContribution = __decorate([
        inversify_1.injectable()
    ], ConsoleContribution);
    return ConsoleContribution;
}());
exports.ConsoleContribution = ConsoleContribution;
var ConsoleCommandHandler = /** @class */ (function () {
    function ConsoleCommandHandler(manager, doExecute) {
        this.manager = manager;
        this.doExecute = doExecute;
    }
    ConsoleCommandHandler.prototype.isEnabled = function () {
        return !!this.manager.currentConsole;
    };
    ConsoleCommandHandler.prototype.isVisible = function () {
        return !!this.manager.currentConsole;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ConsoleCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentConsole = this.manager.currentConsole;
        if (currentConsole) {
            return this.doExecute.apply(this, __spread([currentConsole], args));
        }
    };
    return ConsoleCommandHandler;
}());
exports.ConsoleCommandHandler = ConsoleCommandHandler;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/console/lib/browser/console-contribution'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/console/lib/browser/console-frontend-module.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/lib/browser/console-frontend-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var console_contribution_1 = __webpack_require__(/*! ./console-contribution */ "../../packages/console/lib/browser/console-contribution.js");
var console_manager_1 = __webpack_require__(/*! ./console-manager */ "../../packages/console/lib/browser/console-manager.js");
var console_keybinding_contexts_1 = __webpack_require__(/*! ./console-keybinding-contexts */ "../../packages/console/lib/browser/console-keybinding-contexts.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../../packages/console/src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(console_manager_1.ConsoleManager).toSelf().inSingletonScope();
    bind(browser_1.KeybindingContext).to(console_keybinding_contexts_1.ConsoleInputFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(console_keybinding_contexts_1.ConsoleContentFocusContext).inSingletonScope();
    bind(browser_1.KeybindingContext).to(console_keybinding_contexts_1.ConsoleNavigationBackEnabled).inSingletonScope();
    bind(browser_1.KeybindingContext).to(console_keybinding_contexts_1.ConsoleNavigationForwardEnabled).inSingletonScope();
    bind(console_contribution_1.ConsoleContribution).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(console_contribution_1.ConsoleContribution);
    bind(core_1.CommandContribution).toService(console_contribution_1.ConsoleContribution);
    bind(browser_1.KeybindingContribution).toService(console_contribution_1.ConsoleContribution);
    bind(core_1.MenuContribution).toService(console_contribution_1.ConsoleContribution);
});

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/console/lib/browser/console-frontend-module'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/console/lib/browser/console-keybinding-contexts.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/lib/browser/console-keybinding-contexts.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.ConsoleNavigationForwardEnabled = exports.ConsoleNavigationBackEnabled = exports.ConsoleContentFocusContext = exports.ConsoleInputFocusContext = exports.ConsoleKeybindingContexts = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var console_manager_1 = __webpack_require__(/*! ./console-manager */ "../../packages/console/lib/browser/console-manager.js");
var ConsoleKeybindingContexts;
(function (ConsoleKeybindingContexts) {
    /**
     * ID of a keybinding context that is enabled when the console content has the focus.
     */
    ConsoleKeybindingContexts.consoleContentFocus = 'consoleContentFocus';
    /**
     * ID of a keybinding context that is enabled when the console input has the focus.
     */
    ConsoleKeybindingContexts.consoleInputFocus = 'consoleInputFocus';
    /**
     * ID of a keybinding context that is enabled when the console history navigation back is enabled.
     */
    ConsoleKeybindingContexts.consoleNavigationBackEnabled = 'consoleNavigationBackEnabled';
    /**
     * ID of a keybinding context that is enabled when the console history navigation forward is enabled.
     */
    ConsoleKeybindingContexts.consoleNavigationForwardEnabled = 'consoleNavigationForwardEnabled';
})(ConsoleKeybindingContexts = exports.ConsoleKeybindingContexts || (exports.ConsoleKeybindingContexts = {}));
var ConsoleInputFocusContext = /** @class */ (function () {
    function ConsoleInputFocusContext() {
        this.id = ConsoleKeybindingContexts.consoleInputFocus;
    }
    ConsoleInputFocusContext.prototype.isEnabled = function () {
        var console = this.manager.activeConsole;
        return !!console && this.isConsoleEnabled(console);
    };
    ConsoleInputFocusContext.prototype.isConsoleEnabled = function (console) {
        return console.hasInputFocus();
    };
    __decorate([
        inversify_1.inject(console_manager_1.ConsoleManager),
        __metadata("design:type", console_manager_1.ConsoleManager)
    ], ConsoleInputFocusContext.prototype, "manager", void 0);
    ConsoleInputFocusContext = __decorate([
        inversify_1.injectable()
    ], ConsoleInputFocusContext);
    return ConsoleInputFocusContext;
}());
exports.ConsoleInputFocusContext = ConsoleInputFocusContext;
var ConsoleContentFocusContext = /** @class */ (function (_super) {
    __extends(ConsoleContentFocusContext, _super);
    function ConsoleContentFocusContext() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleContentFocus;
        return _this;
    }
    ConsoleContentFocusContext.prototype.isConsoleEnabled = function (console) {
        return !console.input.isFocused();
    };
    ConsoleContentFocusContext = __decorate([
        inversify_1.injectable()
    ], ConsoleContentFocusContext);
    return ConsoleContentFocusContext;
}(ConsoleInputFocusContext));
exports.ConsoleContentFocusContext = ConsoleContentFocusContext;
var ConsoleNavigationBackEnabled = /** @class */ (function (_super) {
    __extends(ConsoleNavigationBackEnabled, _super);
    function ConsoleNavigationBackEnabled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleNavigationBackEnabled;
        return _this;
    }
    ConsoleNavigationBackEnabled.prototype.isConsoleEnabled = function (console) {
        if (!_super.prototype.isConsoleEnabled.call(this, console)) {
            return false;
        }
        var editor = console.input.getControl();
        return editor.getPosition().equals({ lineNumber: 1, column: 1 });
    };
    ConsoleNavigationBackEnabled = __decorate([
        inversify_1.injectable()
    ], ConsoleNavigationBackEnabled);
    return ConsoleNavigationBackEnabled;
}(ConsoleInputFocusContext));
exports.ConsoleNavigationBackEnabled = ConsoleNavigationBackEnabled;
var ConsoleNavigationForwardEnabled = /** @class */ (function (_super) {
    __extends(ConsoleNavigationForwardEnabled, _super);
    function ConsoleNavigationForwardEnabled() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = ConsoleKeybindingContexts.consoleNavigationForwardEnabled;
        return _this;
    }
    ConsoleNavigationForwardEnabled.prototype.isConsoleEnabled = function (console) {
        if (!_super.prototype.isConsoleEnabled.call(this, console)) {
            return false;
        }
        var editor = console.input.getControl();
        var model = console.input.getControl().getModel();
        var lineNumber = model.getLineCount();
        var column = model.getLineMaxColumn(lineNumber);
        return editor.getPosition().equals({ lineNumber: lineNumber, column: column });
    };
    ConsoleNavigationForwardEnabled = __decorate([
        inversify_1.injectable()
    ], ConsoleNavigationForwardEnabled);
    return ConsoleNavigationForwardEnabled;
}(ConsoleInputFocusContext));
exports.ConsoleNavigationForwardEnabled = ConsoleNavigationForwardEnabled;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/console/lib/browser/console-keybinding-contexts'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/console/lib/browser/console-manager.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/lib/browser/console-manager.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
exports.ConsoleManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var console_widget_1 = __webpack_require__(/*! ./console-widget */ "../../packages/console/lib/browser/console-widget.js");
var ConsoleManager = /** @class */ (function () {
    function ConsoleManager() {
    }
    Object.defineProperty(ConsoleManager.prototype, "activeConsole", {
        get: function () {
            var widget = this.shell.activeWidget;
            return widget instanceof console_widget_1.ConsoleWidget ? widget : undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConsoleManager.prototype, "currentConsole", {
        get: function () {
            var widget = this.shell.currentWidget;
            return widget instanceof console_widget_1.ConsoleWidget ? widget : undefined;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(browser_1.ApplicationShell),
        __metadata("design:type", browser_1.ApplicationShell)
    ], ConsoleManager.prototype, "shell", void 0);
    ConsoleManager = __decorate([
        inversify_1.injectable()
    ], ConsoleManager);
    return ConsoleManager;
}());
exports.ConsoleManager = ConsoleManager;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/console/lib/browser/console-manager'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/console/src/browser/style/index.css":
/*!*************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/console/src/browser/style/index.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../packages/console/src/browser/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../packages/core/lib/common/severity.js":
/*!*****************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/core/lib/common/severity.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
exports.Severity = void 0;
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../../node_modules/vscode-languageserver-types/lib/esm/main.js");
var Severity;
(function (Severity) {
    Severity[Severity["Ignore"] = 0] = "Ignore";
    Severity[Severity["Error"] = 1] = "Error";
    Severity[Severity["Warning"] = 2] = "Warning";
    Severity[Severity["Info"] = 3] = "Info";
    Severity[Severity["Log"] = 4] = "Log";
})(Severity = exports.Severity || (exports.Severity = {}));
(function (Severity) {
    var error = 'Errors';
    var warning = 'Warnings';
    var info = 'Info';
    var log = 'Log';
    var ignore = 'All';
    function fromValue(value) {
        value = value && value.toLowerCase();
        if (!value) {
            return Severity.Ignore;
        }
        if (['error', 'errors'].indexOf(value) !== -1) {
            return Severity.Error;
        }
        if (['warn', 'warning', 'warnings'].indexOf(value) !== -1) {
            return Severity.Warning;
        }
        if (value === 'info') {
            return Severity.Info;
        }
        if (value === 'log') {
            return Severity.Log;
        }
        return Severity.Ignore;
    }
    Severity.fromValue = fromValue;
    function toDiagnosticSeverity(value) {
        switch (value) {
            case Severity.Ignore:
                return vscode_languageserver_types_1.DiagnosticSeverity.Hint;
            case Severity.Info:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Log:
                return vscode_languageserver_types_1.DiagnosticSeverity.Information;
            case Severity.Warning:
                return vscode_languageserver_types_1.DiagnosticSeverity.Warning;
            case Severity.Error:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
            default:
                return vscode_languageserver_types_1.DiagnosticSeverity.Error;
        }
    }
    Severity.toDiagnosticSeverity = toDiagnosticSeverity;
    function toString(severity) {
        switch (severity) {
            case Severity.Error:
                return error;
            case Severity.Warning:
                return warning;
            case Severity.Info:
                return info;
            case Severity.Log:
                return log;
            default:
                return ignore;
        }
    }
    Severity.toString = toString;
    function toArray() {
        return [ignore, error, warning, info, log];
    }
    Severity.toArray = toArray;
})(Severity = exports.Severity || (exports.Severity = {}));

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/core/lib/common/severity'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=82.bundle.js.map