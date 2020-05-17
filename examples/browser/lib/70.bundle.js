(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "../../node_modules/css-loader/index.js!../../packages/vsx-registry/src/browser/style/index.css":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/src/browser/style/index.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/url/escape.js */ "../../node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2020 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n:root {\n  --theia-vsx-extension-icon-size: calc(var(--theia-ui-icon-font-size)*3);\n  --theia-vsx-extension-editor-icon-size: calc(var(--theia-vsx-extension-icon-size)*3);\n}\n\n.theia-vsx-extensions-icon {\n    -webkit-mask: url(" + escape(__webpack_require__(/*! ./extensions.svg */ "../../packages/vsx-registry/src/browser/style/extensions.svg")) + ");\n    mask: url(" + escape(__webpack_require__(/*! ./extensions.svg */ "../../packages/vsx-registry/src/browser/style/extensions.svg")) + ");\n}\n\n.theia-vsx-extensions {\n    height: 100%;\n}\n\n.theia-vsx-extension,\n.theia-vsx-extensions-view-container .part > .body {\n    min-height: calc(var(--theia-content-line-height)*3)\n}\n\n.theia-vsx-extensions-search-bar {\n    padding: var(--theia-ui-padding);\n    display: flex;\n    align-content: center;\n}\n\n.theia-vsx-extensions-search-bar .theia-input {\n    line-height: var(--theia-content-line-height);\n    flex: 1;\n    padding-top: calc(var(--theia-ui-padding)/2);\n    padding-bottom: calc(var(--theia-ui-padding)/2);\n}\n\n.theia-vsx-extension {\n    display: flex;\n    flex-direction: row;\n    line-height: calc(var(--theia-content-line-height)*17/22);\n    align-items: center;\n}\n\n.theia-vsx-extension-icon {\n    height: var(--theia-vsx-extension-icon-size);\n    width: var(--theia-vsx-extension-icon-size);\n    align-self: center;\n    padding-right: calc(var(--theia-ui-padding)*2.5);\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.theia-vsx-extension-icon.placeholder {\n    background-size: var(--theia-vsx-extension-icon-size);\n    background-repeat: no-repeat;\n    background-image: url(" + escape(__webpack_require__(/*! ./defaultIcon.png */ "../../packages/vsx-registry/src/browser/style/defaultIcon.png")) + ");\n}\n\n.theia-vsx-extension-content {\n    display: flex;\n    flex-direction: column;\n    width: calc(100% - var(--theia-vsx-extension-icon-size) - var(--theia-ui-padding)*2.5);\n}\n\n.theia-vsx-extension-content .title {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-content .title .name {\n    font-weight: bold;\n}\n\n.theia-vsx-extension-content .title .version,\n.theia-vsx-extension-content .title .stat {\n    opacity: .85;\n    font-size: 80%;\n}\n\n.theia-vsx-extension-content .title .stat .average-rating > i {\n    color: #ff8e00;\n}\n\n.theia-vsx-extension-editor .download-count > i,\n.theia-vsx-extension-content .title .stat .average-rating > i,\n.theia-vsx-extension-content .title .stat .download-count > i {\n    padding-right: calc(var(--theia-ui-padding)/2);\n}\n\n.theia-vsx-extension-content .title .stat .average-rating,\n.theia-vsx-extension-content .title .stat .download-count {\n    padding-left: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-description {\n    padding-right: calc(var(--theia-ui-padding)*2);\n}\n\n.theia-vsx-extension-publisher {\n    font-weight: 600;\n    font-size: 90%;\n}\n\n.theia-vsx-extension-action-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.theia-vsx-extension-action-bar .action {\n    font-size: 80%;\n    min-width: auto !important;\n    padding: 2px var(--theia-ui-padding) !important;\n    margin-top: 2px;\n}\n\n/* Editor Section */\n\n.theia-vsx-extension-editor {\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n    padding: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-editor .header {\n    display: flex;\n    padding: calc(var(--theia-ui-padding)*3) calc(var(--theia-ui-padding)*3) calc(var(--theia-ui-padding)*2);\n    overflow: hidden;\n    flex-shrink: 0;\n}\n\n.theia-vsx-extension-editor .body {\n    flex: 1;\n}\n\n.theia-vsx-extension-editor .header .icon-container {\n    height: var(--theia-vsx-extension-editor-icon-size);\n    width: var(--theia-vsx-extension-editor-icon-size);\n    align-self: center;\n    padding-right: calc(var(--theia-ui-padding)*2.5);\n    flex-shrink: 0;\n    object-fit: contain;\n}\n\n.theia-vsx-extension-editor .header .icon-container.placeholder {\n    background-size: var(--theia-vsx-extension-editor-icon-size);\n    background-repeat: no-repeat;\n    background-image: url(" + escape(__webpack_require__(/*! ./defaultIcon.png */ "../../packages/vsx-registry/src/browser/style/defaultIcon.png")) + ");\n}\n\n.theia-vsx-extension-editor .header .details {\n    overflow: hidden;\n    user-select: text;\n    -webkit-user-select: text;\n}\n\n.theia-vsx-extension-editor .header .details .title,\n.theia-vsx-extension-editor .header .details .subtitle {\n    display: flex;\n    align-items: center;\n}\n\n.theia-vsx-extension-editor .header .details .title .name {\n    flex: 0;\n    font-size: calc(var(--theia-ui-font-size1)*2);\n    font-weight: 600;\n    white-space: nowrap;\n    cursor: pointer;\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier {\n    margin-left: calc(var(--theia-ui-padding)*5/3);\n    opacity: .6;\n    background: hsla(0,0%,68%,.31);\n    user-select: text;\n    -webkit-user-select: text;\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-editor .header .details .title .preview {\n    background: #d63f26;\n}\n\n.vs .theia-vsx-extension-editor .header .details .title .preview {\n    color: white;\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier,\n.theia-vsx-extension-editor .header .details .title .preview,\n.theia-vsx-extension-editor .header .details .title .builtin {\n    line-height: var(--theia-code-line-height);\n}\n\n.theia-vsx-extension-editor .header .details .title .identifier,\n.theia-vsx-extension-editor .header .details .title .preview {\n    padding: calc(var(--theia-ui-padding)*2/3);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    border-radius: calc(var(--theia-ui-padding)*2/3);\n}\n\n\n.theia-vsx-extension-editor .header .details .title .preview,\n.theia-vsx-extension-editor .header .details .title .builtin {\n    font-size: var(--theia-ui-font-size0);\n    font-style: italic;\n    margin-left: calc(var(--theia-ui-padding)*5/3);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle {\n    padding-top: var(--theia-ui-padding);\n    white-space: nowrap;\n}\n\n.theia-vsx-extension-editor .header .details .subtitle > span {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    line-height: var(--theia-content-line-height);\n    height: var(--theia-content-line-height);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle > span:not(:first-child):not(:empty) {\n    border-left: 1px solid hsla(0,0%,50%,.7);\n    padding-left: calc(var(--theia-ui-padding)*2);\n    margin-left: calc(var(--theia-ui-padding)*2);\n    font-weight: 500;\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .publisher {\n    font-size: var(--theia-ui-font-size3);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .publisher .namespace-access,\n.theia-vsx-extension-editor .header .details .subtitle .download-count::before {\n    padding-right: var(--theia-ui-padding);\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .average-rating > i {\n    color: #ff8e00;\n}\n\n.theia-vsx-extension-editor .header .details .subtitle .average-rating > i:not(:first-child) {\n    padding-left: calc(var(--theia-ui-padding)/2);\n}\n\n\n.theia-vsx-extension-editor .header .details .description {\n    margin-top: calc(var(--theia-ui-padding)*5/3);\n}\n\n.theia-vsx-extension-editor .action {\n    font-weight: 600;\n    margin-top: calc(var(--theia-ui-padding)*5/3);\n    margin-left: 0px;\n    padding: 1px var(--theia-ui-padding);\n}\n\n/** Theming */\n\n.theia-vsx-extension-editor .action.prominent,\n.theia-vsx-extension-action-bar .action.prominent {\n    color: var(--theia-extensionButton-prominentForeground);\n    background-color: var(--theia-extensionButton-prominentBackground);\n}\n\n.theia-vsx-extension-editor .action.prominent:hover,\n.theia-vsx-extension-action-bar .action.prominent:hover {\n    background-color: var(--theia-extensionButton-prominentHoverBackground);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extension-editor-manager.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extension-editor-manager.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSXExtensionEditorManager = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var vsx_extension_uri_1 = __webpack_require__(/*! ../common/vsx-extension-uri */ "../../packages/vsx-registry/lib/common/vsx-extension-uri.js");
var vsx_extension_editor_1 = __webpack_require__(/*! ./vsx-extension-editor */ "../../packages/vsx-registry/lib/browser/vsx-extension-editor.js");
var VSXExtensionEditorManager = /** @class */ (function (_super) {
    __extends(VSXExtensionEditorManager, _super);
    function VSXExtensionEditorManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = vsx_extension_editor_1.VSXExtensionEditor.ID;
        return _this;
    }
    VSXExtensionEditorManager.prototype.canHandle = function (uri) {
        var id = vsx_extension_uri_1.VSXExtensionUri.toId(uri);
        return !!id ? 500 : 0;
    };
    VSXExtensionEditorManager.prototype.createWidgetOptions = function (uri) {
        var id = vsx_extension_uri_1.VSXExtensionUri.toId(uri);
        if (!id) {
            throw new Error('Invalid URI: ' + uri.toString());
        }
        return { id: id };
    };
    VSXExtensionEditorManager = __decorate([
        inversify_1.injectable()
    ], VSXExtensionEditorManager);
    return VSXExtensionEditorManager;
}(browser_1.WidgetOpenHandler));
exports.VSXExtensionEditorManager = VSXExtensionEditorManager;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extension-editor-manager'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extension-editor.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extension-editor.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionEditor = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../../packages/vsx-registry/lib/browser/vsx-extension.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionEditor = /** @class */ (function (_super) {
    __extends(VSXExtensionEditor, _super);
    function VSXExtensionEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionEditor_1 = VSXExtensionEditor;
    VSXExtensionEditor.prototype.init = function () {
        var _this = this;
        this.addClass('theia-vsx-extension-editor');
        this.id = VSXExtensionEditor_1.ID + ':' + this.extension.id;
        this.title.closable = true;
        this.updateTitle();
        this.title.iconClass = 'fa fa-puzzle-piece';
        this.node.tabIndex = -1;
        this.update();
        this.toDispose.push(this.model.onDidChange(function () { return _this.update(); }));
    };
    VSXExtensionEditor.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
    };
    VSXExtensionEditor.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.updateTitle();
    };
    VSXExtensionEditor.prototype.updateTitle = function () {
        var label = 'Extension: ' + (this.extension.displayName || this.extension.name);
        this.title.label = label;
        this.title.caption = label;
    };
    VSXExtensionEditor.prototype.render = function () {
        return this.extension.renderEditor();
    };
    var VSXExtensionEditor_1;
    VSXExtensionEditor.ID = 'vsx-extension-editor';
    __decorate([
        inversify_1.inject(vsx_extension_1.VSXExtension),
        __metadata("design:type", vsx_extension_1.VSXExtension)
    ], VSXExtensionEditor.prototype, "extension", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionEditor.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionEditor.prototype, "init", null);
    VSXExtensionEditor = VSXExtensionEditor_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionEditor);
    return VSXExtensionEditor;
}(browser_1.ReactWidget));
exports.VSXExtensionEditor = VSXExtensionEditor;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extension-editor'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extension.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extension.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionEditorComponent = exports.VSXExtensionComponent = exports.AbstractVSXExtensionComponent = exports.VSXExtension = exports.VSXExtensionFactory = exports.VSXExtensionOptions = exports.VSXExtensionData = void 0;
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../../packages/core/lib/browser/opener-service.js");
var hosted_plugin_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin */ "../../packages/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var plugin_protocol_1 = __webpack_require__(/*! @theia/plugin-ext/lib/common/plugin-protocol */ "../../packages/plugin-ext/lib/common/plugin-protocol.js");
var vsx_extension_uri_1 = __webpack_require__(/*! ../common/vsx-extension-uri */ "../../packages/vsx-registry/lib/common/vsx-extension-uri.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../../packages/core/lib/common/progress-service.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../../packages/core/lib/browser/endpoint.js");
var vsx_environment_1 = __webpack_require__(/*! ../common/vsx-environment */ "../../packages/vsx-registry/lib/common/vsx-environment.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var VSXExtensionData = /** @class */ (function () {
    function VSXExtensionData() {
    }
    VSXExtensionData.KEYS = new Set([
        'version',
        'iconUrl',
        'publisher',
        'name',
        'displayName',
        'description',
        'averageRating',
        'downloadCount',
        'readmeUrl',
        'licenseUrl',
        'repository',
        'license',
        'readme',
        'preview',
        'namespaceAccess',
        'publishedBy'
    ]);
    VSXExtensionData = __decorate([
        inversify_1.injectable()
    ], VSXExtensionData);
    return VSXExtensionData;
}());
exports.VSXExtensionData = VSXExtensionData;
var VSXExtensionOptions = /** @class */ (function () {
    function VSXExtensionOptions() {
    }
    VSXExtensionOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionOptions);
    return VSXExtensionOptions;
}());
exports.VSXExtensionOptions = VSXExtensionOptions;
exports.VSXExtensionFactory = Symbol('VSXExtensionFactory');
var VSXExtension = /** @class */ (function () {
    function VSXExtension() {
        this.data = {};
        this._busy = 0;
    }
    Object.defineProperty(VSXExtension.prototype, "uri", {
        get: function () {
            return vsx_extension_uri_1.VSXExtensionUri.toUri(this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "id", {
        get: function () {
            return this.options.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "visible", {
        get: function () {
            return !!this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "plugin", {
        get: function () {
            return this.pluginSupport.getPlugin(this.id);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "installed", {
        get: function () {
            return !!this.plugin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "builtin", {
        get: function () {
            var plugin = this.plugin;
            var type = plugin && plugin.type;
            return type === plugin_protocol_1.PluginType.System;
        },
        enumerable: false,
        configurable: true
    });
    VSXExtension.prototype.update = function (data) {
        var e_1, _a, _b;
        try {
            for (var _c = __values(VSXExtensionData.KEYS), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                if (key in data) {
                    Object.assign(this.data, (_b = {}, _b[key] = data[key], _b));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    VSXExtension.prototype.getData = function (key) {
        var plugin = this.plugin;
        var model = plugin && plugin.metadata.model;
        if (model && key in model) {
            return model[key];
        }
        return this.data[key];
    };
    Object.defineProperty(VSXExtension.prototype, "iconUrl", {
        get: function () {
            var plugin = this.plugin;
            var iconUrl = plugin && plugin.metadata.model.iconUrl;
            if (iconUrl) {
                return new endpoint_1.Endpoint({ path: iconUrl }).getRestUrl().toString();
            }
            return this.data['iconUrl'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "publisher", {
        get: function () {
            return this.getData('publisher');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "name", {
        get: function () {
            return this.getData('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "displayName", {
        get: function () {
            return this.getData('displayName') || this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "description", {
        get: function () {
            return this.getData('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "version", {
        get: function () {
            return this.getData('version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "averageRating", {
        get: function () {
            return this.getData('averageRating');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "downloadCount", {
        get: function () {
            return this.getData('downloadCount');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "readmeUrl", {
        get: function () {
            var plugin = this.plugin;
            var readmeUrl = plugin && plugin.metadata.model.readmeUrl;
            if (readmeUrl) {
                return new endpoint_1.Endpoint({ path: readmeUrl }).getRestUrl().toString();
            }
            return this.data['readmeUrl'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "licenseUrl", {
        get: function () {
            var plugin = this.plugin;
            var licenseUrl = plugin && plugin.metadata.model.licenseUrl;
            if (licenseUrl) {
                return new endpoint_1.Endpoint({ path: licenseUrl }).getRestUrl().toString();
            }
            return this.data['licenseUrl'];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "repository", {
        get: function () {
            return this.getData('repository');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "license", {
        get: function () {
            return this.getData('license');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "readme", {
        get: function () {
            return this.getData('readme');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "preview", {
        get: function () {
            return this.getData('preview');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "namespaceAccess", {
        get: function () {
            return this.getData('namespaceAccess');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "publishedBy", {
        get: function () {
            return this.getData('publishedBy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtension.prototype, "busy", {
        get: function () {
            return !!this._busy;
        },
        enumerable: false,
        configurable: true
    });
    VSXExtension.prototype.install = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._busy++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.progressService.withProgress("\"Installing '" + this.id + "' extension...", 'extensions', function () {
                                return _this.pluginServer.deploy(_this.uri.toString());
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._busy--;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.uninstall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._busy++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, this.progressService.withProgress("Uninstalling '" + this.id + "' extension...", 'extensions', function () {
                                return _this.pluginServer.undeploy(_this.id);
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this._busy--;
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.open = function (options) {
        if (options === void 0) { options = { mode: 'reveal' }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.doOpen(this.uri, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.doOpen = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, opener_service_1.open(this.openerService, uri, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtension.prototype.render = function () {
        return React.createElement(VSXExtensionComponent, { extension: this });
    };
    VSXExtension.prototype.renderEditor = function () {
        return React.createElement(VSXExtensionEditorComponent, { extension: this });
    };
    __decorate([
        inversify_1.inject(VSXExtensionOptions),
        __metadata("design:type", VSXExtensionOptions)
    ], VSXExtension.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], VSXExtension.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], VSXExtension.prototype, "pluginSupport", void 0);
    __decorate([
        inversify_1.inject(plugin_protocol_1.PluginServer),
        __metadata("design:type", Object)
    ], VSXExtension.prototype, "pluginServer", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], VSXExtension.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(vsx_environment_1.VSXEnvironment),
        __metadata("design:type", vsx_environment_1.VSXEnvironment)
    ], VSXExtension.prototype, "environment", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtension.prototype, "search", void 0);
    VSXExtension = __decorate([
        inversify_1.injectable()
    ], VSXExtension);
    return VSXExtension;
}());
exports.VSXExtension = VSXExtension;
var AbstractVSXExtensionComponent = /** @class */ (function (_super) {
    __extends(AbstractVSXExtensionComponent, _super);
    function AbstractVSXExtensionComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.install = function () { return __awaiter(_this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.forceUpdate();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        pending = this.props.extension.install();
                        this.forceUpdate();
                        return [4 /*yield*/, pending];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.forceUpdate();
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.uninstall = function () { return __awaiter(_this, void 0, void 0, function () {
            var pending;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, , 2, 3]);
                        pending = this.props.extension.uninstall();
                        this.forceUpdate();
                        return [4 /*yield*/, pending];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.forceUpdate();
                        return [7 /*endfinally*/];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    AbstractVSXExtensionComponent.prototype.renderAction = function () {
        var extension = this.props.extension;
        var builtin = extension.builtin, busy = extension.busy, installed = extension.installed;
        if (builtin) {
            return undefined;
        }
        if (busy) {
            if (installed) {
                return React.createElement("button", { className: "theia-button action theia-mod-disabled" }, "Uninstalling");
            }
            return React.createElement("button", { className: "theia-button action prominent theia-mod-disabled" }, "Installing");
        }
        if (installed) {
            return React.createElement("button", { className: "theia-button action", onClick: this.uninstall }, "Uninstall");
        }
        return React.createElement("button", { className: "theia-button prominent action", onClick: this.install }, "Install");
    };
    return AbstractVSXExtensionComponent;
}(React.Component));
exports.AbstractVSXExtensionComponent = AbstractVSXExtensionComponent;
var downloadFormatter = new Intl.NumberFormat();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var downloadCompactFormatter = new Intl.NumberFormat(undefined, { notation: 'compact', compactDisplay: 'short' });
var VSXExtensionComponent = /** @class */ (function (_super) {
    __extends(VSXExtensionComponent, _super);
    function VSXExtensionComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionComponent.prototype.render = function () {
        var _a = this.props.extension, iconUrl = _a.iconUrl, publisher = _a.publisher, displayName = _a.displayName, description = _a.description, version = _a.version, downloadCount = _a.downloadCount, averageRating = _a.averageRating;
        return React.createElement("div", { className: 'theia-vsx-extension' },
            iconUrl ?
                React.createElement("img", { className: 'theia-vsx-extension-icon', src: iconUrl }) :
                React.createElement("div", { className: 'theia-vsx-extension-icon placeholder' }),
            React.createElement("div", { className: 'theia-vsx-extension-content' },
                React.createElement("div", { className: 'title' },
                    React.createElement("div", { className: 'noWrapInfo' },
                        React.createElement("span", { className: 'name' }, displayName),
                        " ",
                        React.createElement("span", { className: 'version' }, version)),
                    React.createElement("div", { className: 'stat' },
                        !!downloadCount && React.createElement("span", { className: 'download-count' },
                            React.createElement("i", { className: 'fa fa-download' }),
                            downloadCompactFormatter.format(downloadCount)),
                        !!averageRating && React.createElement("span", { className: 'average-rating' },
                            React.createElement("i", { className: 'fa fa-star' }),
                            averageRating.toFixed(1)))),
                React.createElement("div", { className: 'noWrapInfo theia-vsx-extension-description' }, description),
                React.createElement("div", { className: 'theia-vsx-extension-action-bar' },
                    React.createElement("span", { className: 'noWrapInfo theia-vsx-extension-publisher' }, publisher),
                    this.renderAction())));
    };
    return VSXExtensionComponent;
}(AbstractVSXExtensionComponent));
exports.VSXExtensionComponent = VSXExtensionComponent;
var VSXExtensionEditorComponent = /** @class */ (function (_super) {
    __extends(VSXExtensionEditorComponent, _super);
    function VSXExtensionEditorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // TODO replace with webview
        _this.openLink = function (event) {
            if (!_this.body) {
                return;
            }
            var target = event.nativeEvent.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }
            var node = target;
            while (node.tagName.toLowerCase() !== 'a') {
                if (node === _this.body) {
                    return;
                }
                if (!(node.parentElement instanceof HTMLElement)) {
                    return;
                }
                node = node.parentElement;
            }
            var href = node.getAttribute('href');
            if (href && !href.startsWith('#')) {
                event.preventDefault();
                _this.props.extension.doOpen(new uri_1.default(href));
            }
        };
        _this.openExtension = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        e.preventDefault();
                        extension = this.props.extension;
                        return [4 /*yield*/, extension.environment.getRegistryUri()];
                    case 1:
                        uri = _a.sent();
                        extension.doOpen(uri.resolve('extension/' + extension.id.replace('.', '/')));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.searchPublisher = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            if (extension.publisher) {
                extension.search.query = extension.publisher;
            }
        };
        _this.openPublishedBy = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, homepage;
            return __generator(this, function (_a) {
                e.stopPropagation();
                e.preventDefault();
                extension = this.props.extension;
                homepage = extension.publishedBy && extension.publishedBy.homepage;
                if (homepage) {
                    extension.doOpen(new uri_1.default(homepage));
                }
                return [2 /*return*/];
            });
        }); };
        _this.openAverageRating = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var extension, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.stopPropagation();
                        e.preventDefault();
                        extension = this.props.extension;
                        return [4 /*yield*/, extension.environment.getRegistryUri()];
                    case 1:
                        uri = _a.sent();
                        extension.doOpen(uri.resolve('extension/' + extension.id.replace('.', '/') + '/reviews'));
                        return [2 /*return*/];
                }
            });
        }); };
        _this.openRepository = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            if (extension.repository) {
                extension.doOpen(new uri_1.default(extension.repository));
            }
        };
        _this.openLicense = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var extension = _this.props.extension;
            var licenseUrl = extension.licenseUrl;
            if (licenseUrl) {
                extension.doOpen(new uri_1.default(licenseUrl));
            }
        };
        return _this;
    }
    VSXExtensionEditorComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props.extension, builtin = _a.builtin, preview = _a.preview, id = _a.id, iconUrl = _a.iconUrl, publisher = _a.publisher, displayName = _a.displayName, description = _a.description, averageRating = _a.averageRating, downloadCount = _a.downloadCount, repository = _a.repository, license = _a.license, readme = _a.readme;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: 'header' },
                iconUrl ?
                    React.createElement("img", { className: 'icon-container', src: iconUrl }) :
                    React.createElement("div", { className: 'icon-container placeholder' }),
                React.createElement("div", { className: 'details' },
                    React.createElement("div", { className: 'title' },
                        React.createElement("span", { title: 'Extension name', className: 'name', onClick: this.openExtension }, displayName),
                        React.createElement("span", { title: 'Extension identifier', className: 'identifier' }, id),
                        preview && React.createElement("span", { className: 'preview' }, "Preview"),
                        builtin && React.createElement("span", { className: 'builtin' }, "Built-in")),
                    React.createElement("div", { className: 'subtitle' },
                        React.createElement("span", { title: 'Publisher name', className: 'publisher', onClick: this.searchPublisher },
                            this.renderNamespaceAccess(),
                            publisher),
                        !!downloadCount && React.createElement("span", { className: 'download-count', onClick: this.openExtension },
                            React.createElement("i", { className: "fa fa-download" }),
                            downloadFormatter.format(downloadCount)),
                        averageRating !== undefined && React.createElement("span", { className: 'average-rating', onClick: this.openAverageRating }, this.renderStars()),
                        repository && React.createElement("span", { className: 'repository', onClick: this.openRepository }, "Repository"),
                        license && React.createElement("span", { className: 'license', onClick: this.openLicense }, license)),
                    React.createElement("div", { className: 'description noWrapInfo' }, description),
                    this.renderAction())),
            readme && React.createElement("div", { className: 'body', ref: function (body) { return _this.body = (body || undefined); }, onClick: this.openLink, dangerouslySetInnerHTML: { __html: readme } }));
    };
    VSXExtensionEditorComponent.prototype.renderNamespaceAccess = function () {
        var _a = this.props.extension, publisher = _a.publisher, namespaceAccess = _a.namespaceAccess, publishedBy = _a.publishedBy;
        if (namespaceAccess === undefined) {
            return undefined;
        }
        var tooltip = publishedBy ? " Published by \"" + publishedBy.loginName + "\"." : '';
        var icon;
        if (namespaceAccess === 'public') {
            icon = 'globe';
            tooltip = "Everyone can publish to \"" + publisher + "\" namespace." + tooltip;
        }
        else {
            icon = 'shield';
            tooltip = "Only verified owners can publish to \"" + publisher + "\" namespace." + tooltip;
        }
        return React.createElement("i", { className: "fa fa-" + icon + " namespace-access", title: tooltip, onClick: this.openPublishedBy });
    };
    VSXExtensionEditorComponent.prototype.renderStars = function () {
        var rating = this.props.extension.averageRating || 0;
        var renderStarAt = function (position) { return position <= rating ?
            React.createElement("i", { className: 'fa fa-star' }) :
            position > rating && position - rating < 1 ?
                React.createElement("i", { className: 'fa fa-star-half-o' }) :
                React.createElement("i", { className: 'fa fa-star-o' }); };
        return React.createElement(React.Fragment, null,
            renderStarAt(1),
            renderStarAt(2),
            renderStarAt(3),
            renderStarAt(4),
            renderStarAt(5));
    };
    return VSXExtensionEditorComponent;
}(AbstractVSXExtensionComponent));
exports.VSXExtensionEditorComponent = VSXExtensionEditorComponent;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extension'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-contribution.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-contribution.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsContribution = exports.VSXExtensionsCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var view_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/view-contribution */ "../../packages/core/lib/browser/shell/view-contribution.js");
var vsx_extensions_view_container_1 = __webpack_require__(/*! ./vsx-extensions-view-container */ "../../packages/vsx-registry/lib/browser/vsx-extensions-view-container.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../../packages/core/lib/browser/color-registry.js");
var VSXExtensionsCommands;
(function (VSXExtensionsCommands) {
    VSXExtensionsCommands.CLEAR_ALL = {
        id: 'vsxExtensions.clearAll',
        category: 'Extensions',
        label: 'Clear Search Results',
        iconClass: 'clear-all'
    };
})(VSXExtensionsCommands = exports.VSXExtensionsCommands || (exports.VSXExtensionsCommands = {}));
var VSXExtensionsContribution = /** @class */ (function (_super) {
    __extends(VSXExtensionsContribution, _super);
    function VSXExtensionsContribution() {
        return _super.call(this, {
            widgetId: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
            widgetName: vsx_extensions_view_container_1.VSXExtensionsViewContainer.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            },
            toggleCommandId: 'vsxExtensions.toggle',
            toggleKeybinding: 'ctrlcmd+shift+x'
        }) || this;
    }
    VSXExtensionsContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(VSXExtensionsCommands.CLEAR_ALL, {
            execute: function (w) { return _this.withWidget(w, function () { return _this.model.search.query = ''; }); },
            isEnabled: function (w) { return _this.withWidget(w, function () { return !!_this.model.search.query; }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
        });
    };
    VSXExtensionsContribution.prototype.registerToolbarItems = function (registry) {
        registry.registerItem({
            id: VSXExtensionsCommands.CLEAR_ALL.id,
            command: VSXExtensionsCommands.CLEAR_ALL.id,
            tooltip: VSXExtensionsCommands.CLEAR_ALL.label,
            priority: 1,
            onDidChange: this.model.onDidChange
        });
    };
    VSXExtensionsContribution.prototype.registerColors = function (colors) {
        // VS Code colors should be aligned with https://code.visualstudio.com/api/references/theme-color#extensions
        colors.register({
            id: 'extensionButton.prominentBackground', defaults: {
                dark: '#327e36',
                light: '#327e36'
            }, description: 'Button background color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentForeground', defaults: {
                dark: color_registry_1.Color.white,
                light: color_registry_1.Color.white
            }, description: 'Button foreground color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentHoverBackground', defaults: {
                dark: '#28632b',
                light: '#28632b'
            }, description: 'Button background hover color for actions extension that stand out (e.g. install button).'
        });
    };
    VSXExtensionsContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof vsx_extensions_view_container_1.VSXExtensionsViewContainer && widget.id === vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsContribution.prototype, "model", void 0);
    VSXExtensionsContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VSXExtensionsContribution);
    return VSXExtensionsContribution;
}(view_contribution_1.AbstractViewContribution));
exports.VSXExtensionsContribution = VSXExtensionsContribution;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-contribution'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-model.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsModel = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var p_debounce_1 = __webpack_require__(/*! p-debounce */ "../../node_modules/p-debounce/index.js");
var showdown = __webpack_require__(/*! showdown */ "../../node_modules/showdown/dist/showdown.js");
var sanitize = __webpack_require__(/*! sanitize-html */ "../../node_modules/sanitize-html/dist/sanitize-html.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../../packages/core/lib/common/cancellation.js");
var vsx_registry_api_1 = __webpack_require__(/*! ../common/vsx-registry-api */ "../../packages/vsx-registry/lib/common/vsx-registry-api.js");
var hosted_plugin_1 = __webpack_require__(/*! @theia/plugin-ext/lib/hosted/browser/hosted-plugin */ "../../packages/plugin-ext/lib/hosted/browser/hosted-plugin.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../../packages/vsx-registry/lib/browser/vsx-extension.js");
var progress_service_1 = __webpack_require__(/*! @theia/core/lib/common/progress-service */ "../../packages/core/lib/common/progress-service.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
var VSXExtensionsModel = /** @class */ (function () {
    function VSXExtensionsModel() {
        var _this = this;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChange = this.onDidChangeEmitter.event;
        this.initialized = new promise_util_1.Deferred();
        /**
         * single source of all extensions
         */
        this.extensions = new Map();
        this._installed = new Set();
        this._searchResult = new Set();
        this.searchCancellationTokenSource = new cancellation_1.CancellationTokenSource();
        this.updateSearchResult = p_debounce_1.default(function () {
            _this.searchCancellationTokenSource.cancel();
            _this.searchCancellationTokenSource = new cancellation_1.CancellationTokenSource();
            var query = _this.search.query;
            return _this.doUpdateSearchResult({ query: query }, _this.searchCancellationTokenSource.token);
        }, 150);
    }
    VSXExtensionsModel.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.initInstalled(),
                            this.initSearchResult()
                        ])];
                    case 1:
                        _a.sent();
                        this.initialized.resolve();
                        return [2 /*return*/];
                }
            });
        });
    };
    VSXExtensionsModel.prototype.initInstalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pluginSupport.willStart];
                    case 1:
                        _a.sent();
                        this.pluginSupport.onDidChangePlugins(function () { return _this.updateInstalled(); });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.updateInstalled()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    VSXExtensionsModel.prototype.initSearchResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.search.onDidChangeQuery(function () { return _this.updateSearchResult(); });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.updateSearchResult()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(VSXExtensionsModel.prototype, "installed", {
        get: function () {
            return this._installed.values();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSXExtensionsModel.prototype, "searchResult", {
        get: function () {
            return this._searchResult.values();
        },
        enumerable: false,
        configurable: true
    });
    VSXExtensionsModel.prototype.getExtension = function (id) {
        return this.extensions.get(id);
    };
    VSXExtensionsModel.prototype.setExtension = function (id) {
        var extension = this.extensions.get(id);
        if (!extension) {
            extension = this.extensionFactory({ id: id });
            this.extensions.set(id, extension);
        }
        return extension;
    };
    VSXExtensionsModel.prototype.doChange = function (task, token) {
        var _this = this;
        if (token === void 0) { token = cancellation_1.CancellationToken.None; }
        return this.progressService.withProgress('', 'extensions', function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (token && token.isCancellationRequested) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, task()];
                    case 1:
                        result = _a.sent();
                        if (token && token.isCancellationRequested) {
                            return [2 /*return*/, undefined];
                        }
                        this.onDidChangeEmitter.fire(undefined);
                        return [2 /*return*/, result];
                }
            });
        }); });
    };
    VSXExtensionsModel.prototype.doUpdateSearchResult = function (param, token) {
        var _this = this;
        return this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
            var result, searchResult, _a, _b, data, id;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.api.search(param)];
                    case 1:
                        result = _d.sent();
                        if (token.isCancellationRequested) {
                            return [2 /*return*/];
                        }
                        searchResult = new Set();
                        try {
                            for (_a = __values(result.extensions), _b = _a.next(); !_b.done; _b = _a.next()) {
                                data = _b.value;
                                id = data.namespace.toLowerCase() + '.' + data.name.toLowerCase();
                                this.setExtension(id).update(Object.assign(data, {
                                    publisher: data.namespace,
                                    downloadUrl: data.files.download,
                                    iconUrl: data.files.icon,
                                    readmeUrl: data.files.readme,
                                    licenseUrl: data.files.license,
                                }));
                                searchResult.add(id);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        this._searchResult = searchResult;
                        return [2 /*return*/];
                }
            });
        }); }, token);
    };
    VSXExtensionsModel.prototype.updateInstalled = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
                        var plugins, installed, refreshing, plugins_1, plugins_1_1, plugin, id, extension, _a, _b, id, installedSorted;
                        var e_4, _c, e_5, _d;
                        var _this = this;
                        return __generator(this, function (_e) {
                            plugins = this.pluginSupport.plugins;
                            installed = new Set();
                            refreshing = [];
                            try {
                                for (plugins_1 = __values(plugins), plugins_1_1 = plugins_1.next(); !plugins_1_1.done; plugins_1_1 = plugins_1.next()) {
                                    plugin = plugins_1_1.value;
                                    if (plugin.model.engine.type === 'vscode') {
                                        id = plugin.model.id;
                                        this._installed.delete(id);
                                        extension = this.setExtension(id);
                                        installed.add(extension.id);
                                        refreshing.push(this.refresh(id));
                                    }
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (plugins_1_1 && !plugins_1_1.done && (_c = plugins_1.return)) _c.call(plugins_1);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                            try {
                                for (_a = __values(this._installed), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    id = _b.value;
                                    refreshing.push(this.refresh(id));
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                            Promise.all(refreshing);
                            installedSorted = Array.from(installed).sort(function (a, b) { return _this.compareExtensions(a, b); });
                            this._installed = new Set(installedSorted.values());
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    VSXExtensionsModel.prototype.resolve = function (id) {
        var _this = this;
        return this.doChange(function () { return __awaiter(_this, void 0, void 0, function () {
            var extension, rawReadme, readme, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initialized.promise];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.refresh(id)];
                    case 2:
                        extension = _a.sent();
                        if (!extension) {
                            throw new Error("Failed to resolve " + id + " extension.");
                        }
                        if (!extension.readmeUrl) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.api.fetchText(extension.readmeUrl)];
                    case 4:
                        rawReadme = _a.sent();
                        readme = this.compileReadme(rawReadme);
                        extension.update({ readme: readme });
                        return [3 /*break*/, 6];
                    case 5:
                        e_6 = _a.sent();
                        if (!vsx_registry_api_1.VSXResponseError.is(e_6) || e_6.statusCode !== 404) {
                            console.error("[" + id + "]: failed to compile readme, reason:", e_6);
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, extension];
                }
            });
        }); });
    };
    VSXExtensionsModel.prototype.compileReadme = function (readmeMarkdown) {
        var markdownConverter = new showdown.Converter({
            noHeaderId: true,
            strikethrough: true,
            headerLevelStart: 2
        });
        var readmeHtml = markdownConverter.makeHtml(readmeMarkdown);
        return sanitize(readmeHtml, {
            allowedTags: sanitize.defaults.allowedTags.concat(['h1', 'h2', 'img'])
        });
    };
    VSXExtensionsModel.prototype.refresh = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data, extension, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.api.getExtension(id)];
                    case 1:
                        data = _a.sent();
                        if (data.error) {
                            return [2 /*return*/, this.onDidFailRefresh(id, data.error)];
                        }
                        extension = this.setExtension(id);
                        extension.update(Object.assign(data, {
                            publisher: data.namespace,
                            downloadUrl: data.files.download,
                            iconUrl: data.files.icon,
                            readmeUrl: data.files.readme,
                            licenseUrl: data.files.license,
                        }));
                        return [2 /*return*/, extension];
                    case 2:
                        e_7 = _a.sent();
                        return [2 /*return*/, this.onDidFailRefresh(id, e_7)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsModel.prototype.onDidFailRefresh = function (id, error) {
        var cached = this.getExtension(id);
        if (cached && cached.installed) {
            return cached;
        }
        console.error("[" + id + "]: failed to refresh, reason:", error);
        return undefined;
    };
    /**
     * Compare two extensions based on their display name, and publisher if applicable.
     * @param a the first extension id for comparison.
     * @param b the second extension id for comparison.
     */
    VSXExtensionsModel.prototype.compareExtensions = function (a, b) {
        var extensionA = this.getExtension(a);
        var extensionB = this.getExtension(b);
        if (!extensionA || !extensionB) {
            return 0;
        }
        if (extensionA.displayName && extensionB.displayName) {
            return extensionA.displayName.localeCompare(extensionB.displayName);
        }
        if (extensionA.publisher && extensionB.publisher) {
            return extensionA.publisher.localeCompare(extensionB.publisher);
        }
        return 0;
    };
    __decorate([
        inversify_1.inject(vsx_registry_api_1.VSXRegistryAPI),
        __metadata("design:type", vsx_registry_api_1.VSXRegistryAPI)
    ], VSXExtensionsModel.prototype, "api", void 0);
    __decorate([
        inversify_1.inject(hosted_plugin_1.HostedPluginSupport),
        __metadata("design:type", hosted_plugin_1.HostedPluginSupport)
    ], VSXExtensionsModel.prototype, "pluginSupport", void 0);
    __decorate([
        inversify_1.inject(vsx_extension_1.VSXExtensionFactory),
        __metadata("design:type", Function)
    ], VSXExtensionsModel.prototype, "extensionFactory", void 0);
    __decorate([
        inversify_1.inject(progress_service_1.ProgressService),
        __metadata("design:type", progress_service_1.ProgressService)
    ], VSXExtensionsModel.prototype, "progressService", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtensionsModel.prototype, "search", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VSXExtensionsModel.prototype, "init", null);
    VSXExtensionsModel = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsModel);
    return VSXExtensionsModel;
}());
exports.VSXExtensionsModel = VSXExtensionsModel;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-model'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-bar.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-search-bar.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsSearchBar = void 0;
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets */ "../../packages/core/lib/browser/widgets/index.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-model.js");
var VSXExtensionsSearchBar = /** @class */ (function (_super) {
    __extends(VSXExtensionsSearchBar, _super);
    function VSXExtensionsSearchBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.updateQuery = function (e) { return _this.model.query = e.target.value; };
        return _this;
    }
    VSXExtensionsSearchBar.prototype.init = function () {
        var _this = this;
        this.id = 'vsx-extensions-search-bar';
        this.addClass('theia-vsx-extensions-search-bar');
        this.model.onDidChangeQuery(function () { return _this.update(); });
    };
    VSXExtensionsSearchBar.prototype.render = function () {
        var _this = this;
        return React.createElement("input", { type: 'text', ref: function (input) { return _this.input = input || undefined; }, value: this.model.query, className: 'theia-input', placeholder: 'Search Extensions in Open VSX Registry', onChange: this.updateQuery });
    };
    VSXExtensionsSearchBar.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        if (this.input) {
            this.input.focus();
        }
    };
    VSXExtensionsSearchBar.prototype.onAfterAttach = function (msg) {
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    __decorate([
        inversify_1.inject(vsx_extensions_search_model_1.VSXExtensionsSearchModel),
        __metadata("design:type", vsx_extensions_search_model_1.VSXExtensionsSearchModel)
    ], VSXExtensionsSearchBar.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsSearchBar.prototype, "init", null);
    VSXExtensionsSearchBar = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSearchBar);
    return VSXExtensionsSearchBar;
}(widgets_1.ReactWidget));
exports.VSXExtensionsSearchBar = VSXExtensionsSearchBar;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-search-bar'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-model.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-search-model.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsSearchModel = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var VSXExtensionsSearchModel = /** @class */ (function () {
    function VSXExtensionsSearchModel() {
        this.onDidChangeQueryEmitter = new event_1.Emitter();
        this.onDidChangeQuery = this.onDidChangeQueryEmitter.event;
        this._query = '';
    }
    Object.defineProperty(VSXExtensionsSearchModel.prototype, "query", {
        get: function () {
            return this._query;
        },
        set: function (query) {
            if (this._query === query) {
                return;
            }
            this._query = query;
            this.onDidChangeQueryEmitter.fire(this._query);
        },
        enumerable: false,
        configurable: true
    });
    VSXExtensionsSearchModel = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSearchModel);
    return VSXExtensionsSearchModel;
}());
exports.VSXExtensionsSearchModel = VSXExtensionsSearchModel;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-search-model'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-source.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-source.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsSource = exports.VSXExtensionsSourceOptions = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../../packages/core/lib/browser/source-tree/index.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionsSourceOptions = /** @class */ (function () {
    function VSXExtensionsSourceOptions() {
    }
    VSXExtensionsSourceOptions.INSTALLED = 'installed';
    VSXExtensionsSourceOptions.BUILT_IN = 'builtin';
    VSXExtensionsSourceOptions.SEARCH_RESULT = 'searchResult';
    VSXExtensionsSourceOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSourceOptions);
    return VSXExtensionsSourceOptions;
}());
exports.VSXExtensionsSourceOptions = VSXExtensionsSourceOptions;
var VSXExtensionsSource = /** @class */ (function (_super) {
    __extends(VSXExtensionsSource, _super);
    function VSXExtensionsSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsSource.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.fireDidChange();
                this.toDispose.push(this.model.onDidChange(function () { return _this.fireDidChange(); }));
                return [2 /*return*/];
            });
        });
    };
    VSXExtensionsSource.prototype.getElements = function () {
        var _a, _b, id, extension, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 8, 9, 10]);
                    _a = __values(this.doGetElements()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3 /*break*/, 7];
                    id = _b.value;
                    extension = this.model.getExtension(id);
                    if (!extension) {
                        return [3 /*break*/, 6];
                    }
                    if (!(this.options.id === VSXExtensionsSourceOptions.BUILT_IN)) return [3 /*break*/, 4];
                    if (!extension.builtin) return [3 /*break*/, 3];
                    return [4 /*yield*/, extension];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3: return [3 /*break*/, 6];
                case 4:
                    if (!!extension.builtin) return [3 /*break*/, 6];
                    return [4 /*yield*/, extension];
                case 5:
                    _d.sent();
                    _d.label = 6;
                case 6:
                    _b = _a.next();
                    return [3 /*break*/, 1];
                case 7: return [3 /*break*/, 10];
                case 8:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 10];
                case 9:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 10: return [2 /*return*/];
            }
        });
    };
    VSXExtensionsSource.prototype.doGetElements = function () {
        if (this.options.id === VSXExtensionsSourceOptions.SEARCH_RESULT) {
            return this.model.searchResult;
        }
        return this.model.installed;
    };
    __decorate([
        inversify_1.inject(VSXExtensionsSourceOptions),
        __metadata("design:type", VSXExtensionsSourceOptions)
    ], VSXExtensionsSource.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsSource.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], VSXExtensionsSource.prototype, "init", null);
    VSXExtensionsSource = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsSource);
    return VSXExtensionsSource;
}(source_tree_1.TreeSource));
exports.VSXExtensionsSource = VSXExtensionsSource;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-source'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-view-container.js":
/*!***********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-view-container.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
 *******************************************************************************‚*/
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
exports.VSXExtensionsViewContainer = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var vsx_extensions_search_bar_1 = __webpack_require__(/*! ./vsx-extensions-search-bar */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-bar.js");
var vsx_extensions_widget_1 = __webpack_require__(/*! ./vsx-extensions-widget */ "../../packages/vsx-registry/lib/browser/vsx-extensions-widget.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js");
var VSXExtensionsViewContainer = /** @class */ (function (_super) {
    __extends(VSXExtensionsViewContainer, _super);
    function VSXExtensionsViewContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentMode = VSXExtensionsViewContainer_1.InitialMode;
        _this.lastModeState = new Map();
        return _this;
    }
    VSXExtensionsViewContainer_1 = VSXExtensionsViewContainer;
    VSXExtensionsViewContainer.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = VSXExtensionsViewContainer_1.ID;
        this.addClass('theia-vsx-extensions-view-container');
        this.setTitleOptions({
            label: VSXExtensionsViewContainer_1.LABEL,
            iconClass: 'theia-vsx-extensions-icon',
            closeable: true
        });
    };
    VSXExtensionsViewContainer.prototype.onActivateRequest = function (msg) {
        this.searchBar.activate();
    };
    VSXExtensionsViewContainer.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        this.updateMode();
        this.toDisposeOnDetach.push(this.model.search.onDidChangeQuery(function () { return _this.updateMode(); }));
    };
    VSXExtensionsViewContainer.prototype.configureLayout = function (layout) {
        layout.addWidget(this.searchBar);
        _super.prototype.configureLayout.call(this, layout);
    };
    VSXExtensionsViewContainer.prototype.updateMode = function () {
        var e_1, _a;
        var currentMode = !this.model.search.query ? VSXExtensionsViewContainer_1.DefaultMode : VSXExtensionsViewContainer_1.SearchResultMode;
        if (currentMode === this.currentMode) {
            return;
        }
        if (this.currentMode !== VSXExtensionsViewContainer_1.InitialMode) {
            this.lastModeState.set(this.currentMode, _super.prototype.doStoreState.call(this));
        }
        this.currentMode = currentMode;
        var lastState = this.lastModeState.get(currentMode);
        if (lastState) {
            _super.prototype.doRestoreState.call(this, lastState);
        }
        else {
            try {
                for (var _b = __values(this.getParts()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var part = _c.value;
                    this.applyModeToPart(part);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (this.currentMode === VSXExtensionsViewContainer_1.SearchResultMode) {
            var searchPart = this.getParts().find(function (part) { return part.wrapped.id === vsx_extensions_widget_1.VSXExtensionsWidget.SEARCH_RESULT_ID; });
            if (searchPart) {
                searchPart.collapsed = false;
                searchPart.show();
            }
        }
    };
    VSXExtensionsViewContainer.prototype.registerPart = function (part) {
        _super.prototype.registerPart.call(this, part);
        this.applyModeToPart(part);
    };
    VSXExtensionsViewContainer.prototype.applyModeToPart = function (part) {
        var partMode = (part.wrapped.id === vsx_extensions_widget_1.VSXExtensionsWidget.SEARCH_RESULT_ID ? VSXExtensionsViewContainer_1.SearchResultMode : VSXExtensionsViewContainer_1.DefaultMode);
        if (this.currentMode === partMode) {
            part.show();
        }
        else {
            part.hide();
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsViewContainer.prototype.doStoreState = function () {
        var e_2, _a;
        var modes = {};
        try {
            for (var _b = __values(this.lastModeState.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var mode = _c.value;
                modes[mode] = this.lastModeState.get(mode);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return {
            query: this.model.search.query,
            modes: modes
        };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VSXExtensionsViewContainer.prototype.doRestoreState = function (state) {
        // eslint-disable-next-line guard-for-in
        for (var key in state.modes) {
            var mode = Number(key);
            var modeState = state.modes[mode];
            if (modeState) {
                this.lastModeState.set(mode, modeState);
            }
        }
        this.model.search.query = state.query;
    };
    var VSXExtensionsViewContainer_1;
    VSXExtensionsViewContainer.ID = 'vsx-extensions-view-container';
    VSXExtensionsViewContainer.LABEL = 'Extensions';
    __decorate([
        inversify_1.inject(vsx_extensions_search_bar_1.VSXExtensionsSearchBar),
        __metadata("design:type", vsx_extensions_search_bar_1.VSXExtensionsSearchBar)
    ], VSXExtensionsViewContainer.prototype, "searchBar", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsViewContainer.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsViewContainer.prototype, "init", null);
    VSXExtensionsViewContainer = VSXExtensionsViewContainer_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsViewContainer);
    return VSXExtensionsViewContainer;
}(browser_1.ViewContainer));
exports.VSXExtensionsViewContainer = VSXExtensionsViewContainer;
(function (VSXExtensionsViewContainer) {
    VSXExtensionsViewContainer.InitialMode = 0;
    VSXExtensionsViewContainer.DefaultMode = 1;
    VSXExtensionsViewContainer.SearchResultMode = 2;
})(VSXExtensionsViewContainer = exports.VSXExtensionsViewContainer || (exports.VSXExtensionsViewContainer = {}));
exports.VSXExtensionsViewContainer = VSXExtensionsViewContainer;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-view-container'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-extensions-widget.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-extensions-widget.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionsWidget = exports.VSXExtensionsWidgetOptions = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var source_tree_1 = __webpack_require__(/*! @theia/core/lib/browser/source-tree */ "../../packages/core/lib/browser/source-tree/index.js");
var vsx_extensions_source_1 = __webpack_require__(/*! ./vsx-extensions-source */ "../../packages/vsx-registry/lib/browser/vsx-extensions-source.js");
var VSXExtensionsWidgetOptions = /** @class */ (function (_super) {
    __extends(VSXExtensionsWidgetOptions, _super);
    function VSXExtensionsWidgetOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsWidgetOptions = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsWidgetOptions);
    return VSXExtensionsWidgetOptions;
}(vsx_extensions_source_1.VSXExtensionsSourceOptions));
exports.VSXExtensionsWidgetOptions = VSXExtensionsWidgetOptions;
var VSXExtensionsWidget = /** @class */ (function (_super) {
    __extends(VSXExtensionsWidget, _super);
    function VSXExtensionsWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSXExtensionsWidget_1 = VSXExtensionsWidget;
    VSXExtensionsWidget.createWidget = function (parent, options) {
        var child = source_tree_1.SourceTreeWidget.createContainer(parent, {
            virtualized: false,
            scrollIfActive: true
        });
        child.bind(vsx_extensions_source_1.VSXExtensionsSourceOptions).toConstantValue(options);
        child.bind(vsx_extensions_source_1.VSXExtensionsSource).toSelf();
        child.unbind(source_tree_1.SourceTreeWidget);
        child.bind(VSXExtensionsWidgetOptions).toConstantValue(options);
        child.bind(VSXExtensionsWidget_1).toSelf();
        return child.get(VSXExtensionsWidget_1);
    };
    VSXExtensionsWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.addClass('theia-vsx-extensions');
        this.id = VSXExtensionsWidget_1.ID + ':' + this.options.id;
        var title = this.computeTitle();
        this.title.label = title;
        this.title.caption = title;
        this.toDispose.push(this.extensionsSource);
        this.source = this.extensionsSource;
    };
    VSXExtensionsWidget.prototype.computeTitle = function () {
        if (this.id === VSXExtensionsWidget_1.INSTALLED_ID) {
            return 'Installed';
        }
        if (this.id === VSXExtensionsWidget_1.BUILT_IN_ID) {
            return 'Built-in';
        }
        return 'Open VSX Registry';
    };
    var VSXExtensionsWidget_1;
    VSXExtensionsWidget.ID = 'vsx-extensions';
    VSXExtensionsWidget.INSTALLED_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.INSTALLED;
    VSXExtensionsWidget.SEARCH_RESULT_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.SEARCH_RESULT;
    VSXExtensionsWidget.BUILT_IN_ID = VSXExtensionsWidget_1.ID + ':' + vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN;
    __decorate([
        inversify_1.inject(VSXExtensionsWidgetOptions),
        __metadata("design:type", VSXExtensionsWidgetOptions)
    ], VSXExtensionsWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.inject(vsx_extensions_source_1.VSXExtensionsSource),
        __metadata("design:type", vsx_extensions_source_1.VSXExtensionsSource)
    ], VSXExtensionsWidget.prototype, "extensionsSource", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], VSXExtensionsWidget.prototype, "init", null);
    VSXExtensionsWidget = VSXExtensionsWidget_1 = __decorate([
        inversify_1.injectable()
    ], VSXExtensionsWidget);
    return VSXExtensionsWidget;
}(source_tree_1.SourceTreeWidget));
exports.VSXExtensionsWidget = VSXExtensionsWidget;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-extensions-widget'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/browser/vsx-registry-frontend-module.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/browser/vsx-registry-frontend-module.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
__webpack_require__(/*! ../../src/browser/style/index.css */ "../../packages/vsx-registry/src/browser/style/index.css");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var vsx_extensions_view_container_1 = __webpack_require__(/*! ./vsx-extensions-view-container */ "../../packages/vsx-registry/lib/browser/vsx-extensions-view-container.js");
var vsx_extensions_contribution_1 = __webpack_require__(/*! ./vsx-extensions-contribution */ "../../packages/vsx-registry/lib/browser/vsx-extensions-contribution.js");
var vsx_extensions_search_bar_1 = __webpack_require__(/*! ./vsx-extensions-search-bar */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-bar.js");
var vsx_registry_api_1 = __webpack_require__(/*! ../common/vsx-registry-api */ "../../packages/vsx-registry/lib/common/vsx-registry-api.js");
var vsx_extensions_model_1 = __webpack_require__(/*! ./vsx-extensions-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-model.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "../../packages/core/lib/browser/color-application-contribution.js");
var vsx_extensions_widget_1 = __webpack_require__(/*! ./vsx-extensions-widget */ "../../packages/vsx-registry/lib/browser/vsx-extensions-widget.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../../packages/core/lib/browser/shell/tab-bar-toolbar.js");
var vsx_extension_1 = __webpack_require__(/*! ./vsx-extension */ "../../packages/vsx-registry/lib/browser/vsx-extension.js");
var vsx_extension_editor_1 = __webpack_require__(/*! ./vsx-extension-editor */ "../../packages/vsx-registry/lib/browser/vsx-extension-editor.js");
var vsx_extension_editor_manager_1 = __webpack_require__(/*! ./vsx-extension-editor-manager */ "../../packages/vsx-registry/lib/browser/vsx-extension-editor-manager.js");
var vsx_extensions_source_1 = __webpack_require__(/*! ./vsx-extensions-source */ "../../packages/vsx-registry/lib/browser/vsx-extensions-source.js");
var vsx_environment_1 = __webpack_require__(/*! ../common/vsx-environment */ "../../packages/vsx-registry/lib/common/vsx-environment.js");
var vsx_extensions_search_model_1 = __webpack_require__(/*! ./vsx-extensions-search-model */ "../../packages/vsx-registry/lib/browser/vsx-extensions-search-model.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(vsx_environment_1.VSXEnvironment).toSelf().inRequestScope();
    bind(vsx_registry_api_1.VSXRegistryAPI).toSelf().inSingletonScope();
    bind(vsx_extension_1.VSXExtension).toSelf();
    bind(vsx_extension_1.VSXExtensionFactory).toFactory(function (ctx) { return function (option) {
        var child = ctx.container.createChild();
        child.bind(vsx_extension_1.VSXExtensionOptions).toConstantValue(option);
        return child.get(vsx_extension_1.VSXExtension);
    }; });
    bind(vsx_extensions_model_1.VSXExtensionsModel).toSelf().inSingletonScope();
    bind(vsx_extension_editor_1.VSXExtensionEditor).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: vsx_extension_editor_1.VSXExtensionEditor.ID,
        createWidget: function (options) { return __awaiter(void 0, void 0, void 0, function () {
            var extension, child;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ctx.container.get(vsx_extensions_model_1.VSXExtensionsModel).resolve(options.id)];
                    case 1:
                        extension = _a.sent();
                        child = ctx.container.createChild();
                        child.bind(vsx_extension_1.VSXExtension).toConstantValue(extension);
                        return [2 /*return*/, child.get(vsx_extension_editor_1.VSXExtensionEditor)];
                }
            });
        }); }
    }); }).inSingletonScope();
    bind(vsx_extension_editor_manager_1.VSXExtensionEditorManager).toSelf().inSingletonScope();
    bind(browser_1.OpenHandler).toService(vsx_extension_editor_manager_1.VSXExtensionEditorManager);
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: vsx_extensions_widget_1.VSXExtensionsWidget.ID,
            createWidget: function (options) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/, vsx_extensions_widget_1.VSXExtensionsWidget.createWidget(container, options)];
            }); }); }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
        createWidget: function () { return __awaiter(void 0, void 0, void 0, function () {
            var child, viewContainer, widgetManager, _a, _b, id, widget, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        child = ctx.container.createChild();
                        child.bind(browser_1.ViewContainerIdentifier).toConstantValue({
                            id: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
                            progressLocationId: 'extensions'
                        });
                        child.bind(vsx_extensions_view_container_1.VSXExtensionsViewContainer).toSelf();
                        viewContainer = child.get(vsx_extensions_view_container_1.VSXExtensionsViewContainer);
                        widgetManager = child.get(browser_1.WidgetManager);
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values([vsx_extensions_source_1.VSXExtensionsSourceOptions.SEARCH_RESULT, vsx_extensions_source_1.VSXExtensionsSourceOptions.INSTALLED, vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN]), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        id = _b.value;
                        return [4 /*yield*/, widgetManager.getOrCreateWidget(vsx_extensions_widget_1.VSXExtensionsWidget.ID, { id: id })];
                    case 3:
                        widget = _d.sent();
                        viewContainer.addWidget(widget, {
                            initiallyCollapsed: id === vsx_extensions_source_1.VSXExtensionsSourceOptions.BUILT_IN
                        });
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, viewContainer];
                }
            });
        }); }
    }); }).inSingletonScope();
    bind(vsx_extensions_search_model_1.VSXExtensionsSearchModel).toSelf().inSingletonScope();
    bind(vsx_extensions_search_bar_1.VSXExtensionsSearchBar).toSelf().inSingletonScope();
    browser_1.bindViewContribution(bind, vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(browser_1.FrontendApplicationContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(color_application_contribution_1.ColorContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(vsx_extensions_contribution_1.VSXExtensionsContribution);
});

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/browser/vsx-registry-frontend-module'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/common/vsx-environment.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/common/vsx-environment.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXEnvironment = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../../packages/core/lib/common/env-variables/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var VSXEnvironment = /** @class */ (function () {
    function VSXEnvironment() {
    }
    VSXEnvironment.prototype.getRegistryUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vsxRegistryUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this._registryUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.environments.getValue('VSX_REGISTRY_URL')];
                    case 1:
                        vsxRegistryUrl = _a.sent();
                        this._registryUri = new uri_1.default(vsxRegistryUrl && vsxRegistryUrl.value || 'https://open-vsx.org');
                        _a.label = 2;
                    case 2: return [2 /*return*/, this._registryUri];
                }
            });
        });
    };
    VSXEnvironment.prototype.getRegistryApiUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registryUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegistryUri()];
                    case 1:
                        registryUri = _a.sent();
                        return [2 /*return*/, registryUri.resolve('api')];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], VSXEnvironment.prototype, "environments", void 0);
    VSXEnvironment = __decorate([
        inversify_1.injectable()
    ], VSXEnvironment);
    return VSXEnvironment;
}());
exports.VSXEnvironment = VSXEnvironment;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/common/vsx-environment'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/common/vsx-extension-uri.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/common/vsx-extension-uri.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXExtensionUri = void 0;
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var VSXExtensionUri;
(function (VSXExtensionUri) {
    function toUri(id) {
        return new uri_1.default("vscode:extension/" + id);
    }
    VSXExtensionUri.toUri = toUri;
    function toId(uri) {
        if (uri.scheme === 'vscode' && uri.path.dir.toString() === 'extension') {
            return uri.path.base;
        }
        return undefined;
    }
    VSXExtensionUri.toId = toId;
})(VSXExtensionUri = exports.VSXExtensionUri || (exports.VSXExtensionUri = {}));

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/common/vsx-extension-uri'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/lib/common/vsx-registry-api.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/lib/common/vsx-registry-api.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
exports.VSXRegistryAPI = exports.VSXResponseError = void 0;
var bent = __webpack_require__(/*! bent */ "../../node_modules/bent/src/browser.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var vsx_environment_1 = __webpack_require__(/*! ./vsx-environment */ "../../packages/vsx-registry/lib/common/vsx-environment.js");
var fetchText = bent('GET', 'string', 200);
var fetchJson = bent('GET', 'json', 200);
var VSXResponseError;
(function (VSXResponseError) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(error) {
        return !!error && typeof error === 'object'
            && 'statusCode' in error && typeof error['statusCode'] === 'number';
    }
    VSXResponseError.is = is;
})(VSXResponseError = exports.VSXResponseError || (exports.VSXResponseError = {}));
var VSXRegistryAPI = /** @class */ (function () {
    function VSXRegistryAPI() {
    }
    VSXRegistryAPI.prototype.search = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUri, searchUri, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.environment.getRegistryApiUri()];
                    case 1:
                        apiUri = _a.sent();
                        searchUri = apiUri.resolve('-/search').toString();
                        if (param) {
                            query = '';
                            if (param.query) {
                                query += 'query=' + encodeURIComponent(param.query);
                            }
                            if (param.category) {
                                query += 'category=' + encodeURIComponent(param.category);
                            }
                            if (param.size) {
                                query += 'size=' + param.size;
                            }
                            if (param.offset) {
                                query += 'offset=' + param.offset;
                            }
                            if (query) {
                                searchUri += '?' + query;
                            }
                        }
                        return [2 /*return*/, this.fetchJson(searchUri)];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.getExtension = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var apiUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.environment.getRegistryApiUri()];
                    case 1:
                        apiUri = _a.sent();
                        return [2 /*return*/, this.fetchJson(apiUri.resolve(id.replace('.', '/')).toString())];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.fetchJson = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchJson(url)];
                    case 1:
                        result = _a.sent();
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return [2 /*return*/, result];
                }
            });
        });
    };
    VSXRegistryAPI.prototype.fetchText = function (url) {
        return fetchText(url);
    };
    __decorate([
        inversify_1.inject(vsx_environment_1.VSXEnvironment),
        __metadata("design:type", vsx_environment_1.VSXEnvironment)
    ], VSXRegistryAPI.prototype, "environment", void 0);
    VSXRegistryAPI = __decorate([
        inversify_1.injectable()
    ], VSXRegistryAPI);
    return VSXRegistryAPI;
}());
exports.VSXRegistryAPI = VSXRegistryAPI;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/vsx-registry/lib/common/vsx-registry-api'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/vsx-registry/src/browser/style/defaultIcon.png":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/src/browser/style/defaultIcon.png ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc40ddb3b11b95bbf1a577d599c9ff19.png";

/***/ }),

/***/ "../../packages/vsx-registry/src/browser/style/extensions.svg":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/src/browser/style/extensions.svg ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PCEtLUNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLi0tPgo8IS0tQ29weXJpZ2h0IChDKSAyMDE5IFR5cGVGb3ggYW5kIG90aGVycy4tLT4KPCEtLUxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uLS0+CjxzdmcgZmlsbD0iI0Y2RjZGNiIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI4IDI4IiB3aWR0aD0iMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0Y2RjZGNiI+PHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBkPSJtMyAzaDEwdjRoLTZ2NiAyIDZoNnY0aC0xMHptMTggMTJ2NmgtNnY0aDEwdi0xMHptNC0ydi0xMGgtMTB2NGgzdi0xaDR2NGgtMXYzeiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0ibTkgOWgxMHYxMGgtMTB6Ii8+PC9nPjwvc3ZnPgo="

/***/ }),

/***/ "../../packages/vsx-registry/src/browser/style/index.css":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/vsx-registry/src/browser/style/index.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../packages/vsx-registry/src/browser/style/index.css");

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
//# sourceMappingURL=70.bundle.js.map