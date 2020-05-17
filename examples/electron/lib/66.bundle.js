(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/index.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/markdown/style/index.css ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!./markdown.css */ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/markdown.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../../node_modules/css-loader!./tomorrow.css */ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/tomorrow.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/markdown.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/markdown/style/markdown.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n.markdown-preview {\n\tfont-family: var(--theia-ui-font-family);\n\tfont-size: 14px;\n\tpadding: 0 26px;\n\tline-height: var(--theia-content-line-height);\n\tword-wrap: break-word;\n}\n\n.markdown-preview:focus {\n    outline: 0;\n    box-shadow: none;\n}\n\n.markdown-preview .line {\n\tposition: relative;\n}\n\n.markdown-preview .line:hover:before {\n\tcontent: \"\";\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tleft: -12px;\n\theight: 100%;\n}\n\n.markdown-preview li.line:hover:before {\n\tleft: -30px;\n}\n\n.markdown-preview .line:hover:before {\n\tborder-left: 3px solid var(--theia-editor-foreground);\n}\n\n.markdown-preview .line .line:hover:before {\n\tborder-left: none;\n}\n\n.markdown-preview img {\n\tmax-width: 100%;\n\tmax-height: 100%;\n}\n\n.markdown-preview a {\n\ttext-decoration: none;\n}\n\n.markdown-preview a:hover {\n\ttext-decoration: underline;\n}\n\n.markdown-preview a:focus,\n.markdown-preview input:focus,\n.markdown-preview select:focus,\n.markdown-preview textarea:focus {\n\toutline: 1px solid -webkit-focus-ring-color;\n\toutline-offset: -1px;\n}\n\n.markdown-preview hr {\n\tborder: 0;\n\theight: 2px;\n\tborder-bottom: 2px solid;\n}\n\n.markdown-preview h1 {\n\tpadding-bottom: 0.3em;\n\tline-height: 1.2;\n\tborder-bottom-width: 1px;\n\tborder-bottom-style: solid;\n}\n\n.markdown-preview h1, h2, h3 {\n\tfont-weight: normal;\n}\n\n.markdown-preview h1 code,\n.markdown-preview h2 code,\n.markdown-preview h3 code,\n.markdown-preview h4 code,\n.markdown-preview h5 code,\n.markdown-preview h6 code {\n\tfont-size: inherit;\n\tline-height: auto;\n}\n\n.markdown-preview table {\n\tborder-collapse: collapse;\n}\n\n.markdown-preview table > thead > tr > th {\n\ttext-align: left;\n\tborder-bottom: 1px solid;\n    border-color: rgba(255, 255, 255, 0.69);\n}\n\n.theia-light .markdown-preview table > thead > tr > th {\n\tborder-color: rgba(0, 0, 0, 0.69);\n}\n\n.markdown-preview table > thead > tr > th,\n.markdown-preview table > thead > tr > td,\n.markdown-preview table > tbody > tr > th,\n.markdown-preview table > tbody > tr > td {\n\tpadding: 5px 10px;\n}\n\n.markdown-preview table > tbody > tr + tr > td {\n\tborder-top: 1px solid;\n}\n\n.markdown-preview blockquote {\n\tmargin: 0 7px 0 5px;\n\tpadding: 0 16px 0 10px;\n\tborder-left: 5px solid;\n\tbackground: var(--theia-textBlockQuote-background);\n\tborder-color: var(--theia-textBlockQuote-border);\n}\n\n.markdown-preview code {\n\tfont-family: var(--theia-code-font-family);\n\tfont-size: var(--theia-code-font-size);\n\tline-height: var(--theia-code-line-height);\n\tcolor: var(--md-orange-800);\n}\n\n.markdown-preview.wordWrap pre {\n\twhite-space: pre-wrap;\n}\n\n.markdown-preview pre:not(.hljs),\n.markdown-preview pre.hljs code > div {\n\tpadding: 16px;\n\tborder-radius: 3px;\n\toverflow: auto;\n}\n\n.markdown-preview,\n.markdown-preview pre code {\n\tcolor: var(--theia-editor-foreground);\n\ttab-size: 4;\n}\n\n/** Theming */\n\n.theia-light .markdown-preview pre {\n\tbackground-color: rgba(220, 220, 220, 0.4);\n}\n\n.theia-dark .markdown-preview pre {\n\tbackground-color: rgba(10, 10, 10, 0.4);\n}\n\n.theia-high-contrast .markdown-preview pre {\n\tbackground-color: rgb(0, 0, 0);\n}\n\n.vscode-high-contrast .markdown-preview h1 {\n\tborder-color: rgb(0, 0, 0);\n}\n\n.theia-light .markdown-preview table > thead > tr > th {\n\tborder-color: rgba(0, 0, 0, 0.69);\n}\n\n.theia-dark .markdown-preview table > thead > tr > th {\n\tborder-color: rgba(255, 255, 255, 0.69);\n}\n\n.theia-light .markdown-preview h1,\n.theia-light .markdown-preview hr,\n.theia-light .markdown-preview table > tbody > tr + tr > td {\n\tborder-color: rgba(0, 0, 0, 0.18);\n}\n\n.theia-dark .markdown-preview h1,\n.theia-dark .markdown-preview hr,\n.theia-dark .markdown-preview table > tbody > tr + tr > td {\n\tborder-color: rgba(255, 255, 255, 0.18);\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/tomorrow.css":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/markdown/style/tomorrow.css ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n/* Tomorrow Theme */\n/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Original theme - Copyright (C) 2013 Chris Kempson http://chriskempson.com\n/* released under the MIT License */\n/* https://github.com/chriskempson/tomorrow-theme */\n\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n/* Copied from https://github.com/microsoft/vscode/blob/08537497eecd3172390194693d3d7c0ec8f52b70/extensions/markdown-language-features/media/tomorrow.css\n * with modifications.\n */\n\n/* This theme is used to style the output of the highlight.js library which is\n * licensed under the BSD-3-Clause. See https://github.com/highlightjs/highlight.js/blob/master/LICENSE\n */\n\n/* Tomorrow Comment */\n.theia-preview-widget .hljs-comment,\n.theia-preview-widget .hljs-quote {\n\tcolor: #8e908c;\n}\n\n/* Tomorrow Red */\n.theia-preview-widget .hljs-variable,\n.theia-preview-widget .hljs-template-variable,\n.theia-preview-widget .hljs-tag,\n.theia-preview-widget .hljs-name,\n.theia-preview-widget .hljs-selector-id,\n.theia-preview-widget .hljs-selector-class,\n.theia-preview-widget .hljs-regexp,\n.theia-preview-widget .hljs-deletion {\n\tcolor: #c82829;\n}\n\n/* Tomorrow Orange */\n.theia-preview-widget .hljs-number,\n.theia-preview-widget .hljs-built_in,\n.theia-preview-widget .hljs-builtin-name,\n.theia-preview-widget .hljs-literal,\n.theia-preview-widget .hljs-type,\n.theia-preview-widget .hljs-params,\n.theia-preview-widget .hljs-meta,\n.theia-preview-widget .hljs-link {\n\tcolor: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.theia-preview-widget .hljs-attribute {\n\tcolor: #eab700;\n}\n\n/* Tomorrow Green */\n.theia-preview-widget .hljs-string,\n.theia-preview-widget .hljs-symbol,\n.theia-preview-widget .hljs-bullet,\n.theia-preview-widget .hljs-addition {\n\tcolor: #718c00;\n}\n\n/* Tomorrow Blue */\n.theia-preview-widget .hljs-title,\n.theia-preview-widget .hljs-section {\n\tcolor: #4271ae;\n}\n\n/* Tomorrow Purple */\n.theia-preview-widget .hljs-keyword,\n.theia-preview-widget .hljs-selector-tag {\n\tcolor: #8959a8;\n}\n\n.theia-preview-widget .hljs {\n\tdisplay: block;\n\toverflow-x: auto;\n\tcolor: #4d4d4c;\n\tpadding: 0.5em;\n}\n\n.theia-preview-widget .hljs-emphasis {\n\tfont-style: italic;\n}\n\n.theia-preview-widget .hljs-strong {\n\tfont-weight: bold;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/style/index.css":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/style/index.css ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!./preview-widget.css */ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/style/preview-widget.css"), "");

// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n", ""]);

// exports


/***/ }),

/***/ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/style/preview-widget.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/style/preview-widget.css ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-preview-widget {\n\toverflow-y: auto;\n    overflow-x: hidden;\n}\n\n.theia-preview-widget .scrollBeyondLastLine {\n\tmargin-bottom: calc(100vh - var(--theia-content-line-height));\n}\n\n.theia-preview-widget:focus {\n    outline: 0;\n    box-shadow: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../packages/preview/lib/browser/markdown/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/markdown/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./markdown-preview-handler */ "../../packages/preview/lib/browser/markdown/markdown-preview-handler.js"), exports);


/***/ }),

/***/ "../../packages/preview/lib/browser/markdown/markdown-preview-handler.js":
/*!**********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/markdown/markdown-preview-handler.js ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.MarkdownPreviewHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var path_1 = __webpack_require__(/*! @theia/core/lib/common/path */ "../../packages/core/lib/common/path.js");
var hljs = __webpack_require__(/*! highlight.js */ "../../node_modules/highlight.js/lib/index.js");
var markdownit = __webpack_require__(/*! markdown-it */ "../../node_modules/markdown-it/index.js");
var anchor = __webpack_require__(/*! markdown-it-anchor */ "../../node_modules/markdown-it-anchor/index.js");
var preview_uri_1 = __webpack_require__(/*! ../preview-uri */ "../../packages/preview/lib/browser/preview-uri.js");
var preview_handler_1 = __webpack_require__(/*! ../preview-handler */ "../../packages/preview/lib/browser/preview-handler.js");
var preview_link_normalizer_1 = __webpack_require__(/*! ../preview-link-normalizer */ "../../packages/preview/lib/browser/preview-link-normalizer.js");
var MarkdownPreviewHandler = /** @class */ (function () {
    function MarkdownPreviewHandler() {
        this.iconClass = 'markdown-icon file-icon';
        this.contentClass = 'markdown-preview';
    }
    MarkdownPreviewHandler.prototype.canHandle = function (uri) {
        return uri.scheme === 'file'
            && (uri.path.ext.toLowerCase() === '.md' ||
                uri.path.ext.toLowerCase() === '.markdown') ? 500 : 0;
    };
    MarkdownPreviewHandler.prototype.renderContent = function (params) {
        var content = params.content;
        var renderedContent = this.getEngine().render(content, params);
        var contentElement = document.createElement('div');
        contentElement.classList.add(this.contentClass);
        contentElement.innerHTML = renderedContent;
        this.addLinkClickedListener(contentElement, params);
        return contentElement;
    };
    MarkdownPreviewHandler.prototype.addLinkClickedListener = function (contentElement, params) {
        var _this = this;
        contentElement.addEventListener('click', function (event) {
            var candidate = (event.target || event.srcElement);
            var link = _this.findLink(candidate, contentElement);
            if (link) {
                event.preventDefault();
                if (link.startsWith('#')) {
                    _this.revealFragment(contentElement, link);
                }
                else {
                    var preview = !(common_1.isOSX ? event.metaKey : event.ctrlKey);
                    var uri = _this.resolveUri(link, params.originUri, preview);
                    _this.openLink(uri, params.originUri);
                }
            }
        });
    };
    MarkdownPreviewHandler.prototype.findLink = function (element, container) {
        var candidate = element;
        while (candidate.tagName !== 'A') {
            if (candidate === container) {
                return;
            }
            candidate = candidate.parentElement;
            if (!candidate) {
                return;
            }
        }
        return candidate.getAttribute('href') || undefined;
    };
    MarkdownPreviewHandler.prototype.openLink = function (uri, originUri) {
        return __awaiter(this, void 0, void 0, function () {
            var opener;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openerService.getOpener(uri)];
                    case 1:
                        opener = _a.sent();
                        opener.open(uri, { originUri: originUri });
                        return [2 /*return*/];
                }
            });
        });
    };
    MarkdownPreviewHandler.prototype.resolveUri = function (link, uri, preview) {
        var linkURI = new uri_1.default(link);
        // URIs are always absolute, check link as a path whether it is relative
        if (!new path_1.Path(link).isAbsolute && linkURI.scheme === uri.scheme &&
            (!linkURI.authority || linkURI.authority === uri.authority)) {
            // get a relative path from URI by trimming leading `/`
            var relativePath = linkURI.path.toString().substring(1);
            var resolvedUri = uri.parent.resolve(relativePath).withFragment(linkURI.fragment).withQuery(linkURI.query);
            return preview ? preview_uri_1.PreviewUri.encode(resolvedUri) : resolvedUri;
        }
        return linkURI;
    };
    MarkdownPreviewHandler.prototype.revealFragment = function (contentElement, fragment) {
        var elementToReveal = this.findElementForFragment(contentElement, fragment);
        if (!elementToReveal) {
            return;
        }
        elementToReveal.scrollIntoView();
    };
    MarkdownPreviewHandler.prototype.findElementForFragment = function (content, link) {
        var fragment = link.startsWith('#') ? link.substring(1) : link;
        var filter = {
            acceptNode: function (node) {
                if (node instanceof HTMLHeadingElement) {
                    if (node.tagName.toLowerCase().startsWith('h') && node.id === fragment) {
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_SKIP;
            }
        };
        var treeWalker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT, filter, false);
        if (treeWalker.nextNode()) {
            var element = treeWalker.currentNode;
            return element;
        }
        return undefined;
    };
    MarkdownPreviewHandler.prototype.findElementForSourceLine = function (content, sourceLine) {
        var markedElements = content.getElementsByClassName('line');
        var matchedElement;
        for (var i = 0; i < markedElements.length; i++) {
            var element = markedElements[i];
            var line = Number.parseInt(element.getAttribute('data-line') || '0');
            if (line > sourceLine) {
                break;
            }
            matchedElement = element;
        }
        return matchedElement;
    };
    MarkdownPreviewHandler.prototype.getSourceLineForOffset = function (content, offset) {
        var lineElements = this.getLineElementsAtOffset(content, offset);
        if (lineElements.length < 1) {
            return undefined;
        }
        var firstLineNumber = this.getLineNumberFromAttribute(lineElements[0]);
        if (firstLineNumber === undefined) {
            return undefined;
        }
        if (lineElements.length === 1) {
            return firstLineNumber;
        }
        var secondLineNumber = this.getLineNumberFromAttribute(lineElements[1]);
        if (secondLineNumber === undefined) {
            return firstLineNumber;
        }
        var y1 = lineElements[0].offsetTop;
        var y2 = lineElements[1].offsetTop;
        var dY = (offset - y1) / (y2 - y1);
        var dL = (secondLineNumber - firstLineNumber) * dY;
        var line = firstLineNumber + Math.floor(dL);
        return line;
    };
    /**
     * returns two significant line elements for the given offset.
     */
    MarkdownPreviewHandler.prototype.getLineElementsAtOffset = function (content, offset) {
        var skipNext = false;
        var filter = {
            acceptNode: function (node) {
                if (node instanceof HTMLElement) {
                    if (node.classList.contains('line')) {
                        if (skipNext) {
                            return NodeFilter.FILTER_SKIP;
                        }
                        if (node.offsetTop > offset) {
                            skipNext = true;
                        }
                        return NodeFilter.FILTER_ACCEPT;
                    }
                    return NodeFilter.FILTER_SKIP;
                }
                return NodeFilter.FILTER_REJECT;
            }
        };
        var treeWalker = document.createTreeWalker(content, NodeFilter.SHOW_ELEMENT, filter, false);
        var lineElements = [];
        while (treeWalker.nextNode()) {
            var element = treeWalker.currentNode;
            lineElements.push(element);
        }
        return lineElements.slice(-2);
    };
    MarkdownPreviewHandler.prototype.getLineNumberFromAttribute = function (element) {
        var attribute = element.getAttribute('data-line');
        return attribute ? Number.parseInt(attribute) : undefined;
    };
    MarkdownPreviewHandler.prototype.getEngine = function () {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!this.engine) {
            var engine_1 = this.engine = markdownit({
                html: true,
                linkify: true,
                highlight: function (str, lang) {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return '<pre class="hljs"><code><div>' + hljs.highlight(lang, str, true).value + '</div></code></pre>';
                        }
                        catch (_a) { }
                    }
                    return '<pre class="hljs"><code><div>' + engine_1.utils.escapeHtml(str) + '</div></code></pre>';
                }
            });
            var renderers = ['heading_open', 'paragraph_open', 'list_item_open', 'blockquote_open', 'code_block', 'image', 'fence'];
            var _loop_1 = function (renderer) {
                var originalRenderer = engine_1.renderer.rules[renderer];
                engine_1.renderer.rules[renderer] = function (tokens, index, options, env, self) {
                    var token = tokens[index];
                    if (token.map) {
                        var line = token.map[0];
                        token.attrJoin('class', 'line');
                        token.attrSet('data-line', line.toString());
                    }
                    return (originalRenderer)
                        // tslint:disable-next-line:no-void-expression
                        ? originalRenderer(tokens, index, options, env, self)
                        : self.renderToken(tokens, index, options);
                };
            };
            try {
                for (var renderers_1 = __values(renderers), renderers_1_1 = renderers_1.next(); !renderers_1_1.done; renderers_1_1 = renderers_1.next()) {
                    var renderer = renderers_1_1.value;
                    _loop_1(renderer);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (renderers_1_1 && !renderers_1_1.done && (_a = renderers_1.return)) _a.call(renderers_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var originalImageRenderer_1 = engine_1.renderer.rules['image'];
            engine_1.renderer.rules['image'] = function (tokens, index, options, env, self) {
                if (preview_handler_1.RenderContentParams.is(env)) {
                    var documentUri = env.originUri;
                    var token = tokens[index];
                    if (token.attrs) {
                        var srcAttr = token.attrs.find(function (a) { return a[0] === 'src'; });
                        if (srcAttr) {
                            var href = srcAttr[1];
                            srcAttr[1] = _this.linkNormalizer.normalizeLink(documentUri, href);
                        }
                    }
                }
                // tslint:disable-next-line:no-void-expression
                return originalImageRenderer_1(tokens, index, options, env, self);
            };
            var domParser_1 = new DOMParser();
            var parseDOM_1 = function (html) {
                return domParser_1.parseFromString(html, 'text/html').getElementsByTagName('body')[0];
            };
            var modifyDOM_1 = function (body, tag, procedure) {
                var elements = body.getElementsByTagName(tag);
                for (var i = 0; i < elements.length; i++) {
                    var element = elements.item(i);
                    if (element) {
                        procedure(element);
                    }
                }
            };
            var normalizeAllImgSrcInHTML_1 = function (html, normalizeLink) {
                var body = parseDOM_1(html);
                modifyDOM_1(body, 'img', function (img) {
                    var src = img.getAttributeNode('src');
                    if (src) {
                        src.nodeValue = normalizeLink(src.nodeValue || '');
                    }
                });
                return body.innerHTML;
            };
            var _loop_2 = function (name_1) {
                var originalRenderer = engine_1.renderer.rules[name_1];
                engine_1.renderer.rules[name_1] = function (tokens, index, options, env, self) {
                    var currentToken = tokens[index];
                    var content = currentToken.content;
                    if (content.includes('<img') && preview_handler_1.RenderContentParams.is(env)) {
                        var documentUri_1 = env.originUri;
                        currentToken.content = normalizeAllImgSrcInHTML_1(content, function (link) { return _this.linkNormalizer.normalizeLink(documentUri_1, link); });
                    }
                    // tslint:disable-next-line:no-void-expression
                    return originalRenderer(tokens, index, options, env, self);
                };
            };
            try {
                for (var _c = __values(['html_block', 'html_inline']), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var name_1 = _d.value;
                    _loop_2(name_1);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
            anchor(engine_1, {});
        }
        return this.engine;
    };
    __decorate([
        inversify_1.inject(browser_1.OpenerService),
        __metadata("design:type", Object)
    ], MarkdownPreviewHandler.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(preview_link_normalizer_1.PreviewLinkNormalizer),
        __metadata("design:type", preview_link_normalizer_1.PreviewLinkNormalizer)
    ], MarkdownPreviewHandler.prototype, "linkNormalizer", void 0);
    MarkdownPreviewHandler = __decorate([
        inversify_1.injectable()
    ], MarkdownPreviewHandler);
    return MarkdownPreviewHandler;
}());
exports.MarkdownPreviewHandler = MarkdownPreviewHandler;


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-contribution.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-contribution.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.PreviewContribution = exports.PreviewCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var preview_widget_1 = __webpack_require__(/*! ./preview-widget */ "../../packages/preview/lib/browser/preview-widget.js");
var preview_handler_1 = __webpack_require__(/*! ./preview-handler */ "../../packages/preview/lib/browser/preview-handler.js");
var preview_uri_1 = __webpack_require__(/*! ./preview-uri */ "../../packages/preview/lib/browser/preview-uri.js");
var preview_preferences_1 = __webpack_require__(/*! ./preview-preferences */ "../../packages/preview/lib/browser/preview-preferences.js");
var debounce = __webpack_require__(/*! lodash.debounce */ "../../node_modules/lodash.debounce/index.js");
var PreviewCommands;
(function (PreviewCommands) {
    /**
     * No `label`. Otherwise, it would show up in the `Command Palette` and we already have the `Preview` open handler.
     * See in (`WorkspaceCommandContribution`)[https://bit.ly/2DncrSD].
     */
    PreviewCommands.OPEN = {
        id: 'preview:open',
        label: 'Open Preview',
        iconClass: 'theia-open-preview-icon'
    };
    PreviewCommands.OPEN_SOURCE = {
        id: 'preview.open.source',
        iconClass: 'theia-open-file-icon'
    };
})(PreviewCommands = exports.PreviewCommands || (exports.PreviewCommands = {}));
var PreviewContribution = /** @class */ (function (_super) {
    __extends(PreviewContribution, _super);
    // eslint-disable-next-line max-len
    function PreviewContribution() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = preview_uri_1.PreviewUri.id;
        _this.label = 'Preview';
        _this.synchronizedUris = new Set();
        _this.scrollSyncLockOn = undefined;
        return _this;
    }
    PreviewContribution.prototype.onStart = function () {
        var _this = this;
        this.onCreated(function (previewWidget) {
            _this.registerOpenOnDoubleClick(previewWidget);
            _this.registerEditorAndPreviewSync(previewWidget);
        });
        this.editorManager.onCreated(function (editorWidget) {
            _this.registerEditorAndPreviewSync(editorWidget);
        });
    };
    PreviewContribution.prototype.lockScrollSync = function (on, delay) {
        if (delay === void 0) { delay = 50; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.scrollSyncLockOn = on;
                if (this.scrollSyncLockTimeout) {
                    window.clearTimeout(this.scrollSyncLockTimeout);
                }
                this.scrollSyncLockTimeout = window.setTimeout(function () {
                    _this.scrollSyncLockOn = undefined;
                }, delay);
                return [2 /*return*/];
            });
        });
    };
    PreviewContribution.prototype.registerEditorAndPreviewSync = function (source) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, editorWidget, previewWidget, syncDisposables, editor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(source instanceof browser_2.EditorWidget)) return [3 /*break*/, 2];
                        editorWidget = source;
                        uri = editorWidget.editor.uri.toString();
                        return [4 /*yield*/, this.getWidget(editorWidget.editor.uri)];
                    case 1:
                        previewWidget = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        previewWidget = source;
                        uri = previewWidget.getUri().toString();
                        return [4 /*yield*/, this.editorManager.getByUri(previewWidget.getUri())];
                    case 3:
                        editorWidget = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (!previewWidget || !editorWidget || !uri) {
                            return [2 /*return*/];
                        }
                        if (this.synchronizedUris.has(uri)) {
                            return [2 /*return*/];
                        }
                        syncDisposables = new common_1.DisposableCollection();
                        previewWidget.disposed.connect(function () { return syncDisposables.dispose(); });
                        editorWidget.disposed.connect(function () { return syncDisposables.dispose(); });
                        editor = editorWidget.editor;
                        syncDisposables.push(editor.onScrollChanged(debounce(function () {
                            if (_this.scrollSyncLockOn === 'editor') {
                                // avoid recursive scroll synchronization
                                return;
                            }
                            _this.lockScrollSync('preview');
                            var range = editor.getVisibleRanges();
                            if (range.length > 0) {
                                _this.revealSourceLineInPreview(previewWidget, range[0].start);
                            }
                        }), 100));
                        syncDisposables.push(this.synchronizeScrollToEditor(previewWidget, editor));
                        this.synchronizedUris.add(uri);
                        syncDisposables.push(common_1.Disposable.create(function () { return _this.synchronizedUris.delete(uri); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewContribution.prototype.revealSourceLineInPreview = function (previewWidget, position) {
        previewWidget.revealForSourceLine(position.line);
    };
    PreviewContribution.prototype.synchronizeScrollToEditor = function (previewWidget, editor) {
        var _this = this;
        return previewWidget.onDidScroll(function (sourceLine) {
            if (_this.scrollSyncLockOn === 'preview') {
                // avoid recursive scroll synchronization
                return;
            }
            var line = Math.floor(sourceLine);
            _this.lockScrollSync('editor'); // avoid recursive scroll synchronization
            editor.revealRange({
                start: {
                    line: line,
                    character: 0
                },
                end: {
                    line: line + 1,
                    character: 0
                }
            }, { at: 'top' });
        });
    };
    PreviewContribution.prototype.registerOpenOnDoubleClick = function (ref) {
        var _this = this;
        var disposable = ref.onDidDoubleClick(function (location) { return __awaiter(_this, void 0, void 0, function () {
            var editor;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openSource(ref)];
                    case 1:
                        editor = (_a.sent()).editor;
                        editor.revealPosition(location.range.start);
                        editor.selection = location.range;
                        ref.revealForSourceLine(location.range.start.line);
                        return [2 /*return*/];
                }
            });
        }); });
        ref.disposed.connect(function () { return disposable.dispose(); });
    };
    PreviewContribution.prototype.canHandle = function (uri) {
        if (!this.previewHandlerProvider.canHandle(uri)) {
            return 0;
        }
        var editorPriority = this.editorManager.canHandle(uri);
        if (editorPriority === 0) {
            return 200;
        }
        if (preview_uri_1.PreviewUri.match(uri)) {
            return editorPriority * 2;
        }
        return editorPriority * (this.openByDefault ? 2 : 0.5);
    };
    Object.defineProperty(PreviewContribution.prototype, "openByDefault", {
        get: function () {
            return this.preferences['preview.openByDefault'];
        },
        enumerable: false,
        configurable: true
    });
    PreviewContribution.prototype.open = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveOpenerOptions(options)];
                    case 1:
                        resolvedOptions = _a.sent();
                        return [2 /*return*/, _super.prototype.open.call(this, uri, resolvedOptions)];
                }
            });
        });
    };
    PreviewContribution.prototype.serializeUri = function (uri) {
        return _super.prototype.serializeUri.call(this, preview_uri_1.PreviewUri.decode(uri));
    };
    PreviewContribution.prototype.resolveOpenerOptions = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var resolved, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolved = __assign({ mode: 'activate' }, options);
                        if (!resolved.originUri) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getWidget(resolved.originUri)];
                    case 1:
                        ref = _a.sent();
                        if (ref) {
                            resolved.widgetOptions = __assign(__assign({}, resolved.widgetOptions), { ref: ref });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, resolved];
                }
            });
        });
    };
    PreviewContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(PreviewCommands.OPEN, {
            execute: function (widget) { return _this.openForEditor(widget); },
            isEnabled: function (widget) { return _this.canHandleEditorUri(widget); },
            isVisible: function (widget) { return _this.canHandleEditorUri(widget); }
        });
        registry.registerCommand(PreviewCommands.OPEN_SOURCE, {
            execute: function (widget) { return _this.openSource(widget); },
            isEnabled: function (widget) { return widget instanceof preview_widget_1.PreviewWidget; },
            isVisible: function (widget) { return widget instanceof preview_widget_1.PreviewWidget; }
        });
    };
    PreviewContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_2.EditorContextMenu.NAVIGATION, {
            commandId: PreviewCommands.OPEN.id
        });
    };
    PreviewContribution.prototype.registerToolbarItems = function (registry) {
        registry.registerItem({
            id: PreviewCommands.OPEN.id,
            command: PreviewCommands.OPEN.id,
            tooltip: 'Open Preview to the Side'
        });
        registry.registerItem({
            id: PreviewCommands.OPEN_SOURCE.id,
            command: PreviewCommands.OPEN_SOURCE.id,
            tooltip: 'Open Source'
        });
    };
    PreviewContribution.prototype.canHandleEditorUri = function (widget) {
        var uri = this.getCurrentEditorUri(widget);
        return !!uri && this.previewHandlerProvider.canHandle(uri);
    };
    PreviewContribution.prototype.getCurrentEditorUri = function (widget) {
        var current = this.getCurrentEditor(widget);
        return current && current.editor.uri;
    };
    PreviewContribution.prototype.getCurrentEditor = function (widget) {
        var current = widget ? widget : this.editorManager.currentEditor;
        return current instanceof browser_2.EditorWidget && current || undefined;
    };
    PreviewContribution.prototype.openForEditor = function (widget) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ref = this.getCurrentEditor(widget);
                        if (!ref) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.open(ref.editor.uri, {
                                mode: 'reveal',
                                widgetOptions: { ref: ref, mode: 'open-to-right' }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewContribution.prototype.openSource = function (ref) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (ref instanceof preview_widget_1.PreviewWidget) {
                    return [2 /*return*/, this.editorManager.open(ref.uri, {
                            widgetOptions: { ref: ref, mode: 'open-to-left' }
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], PreviewContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(preview_handler_1.PreviewHandlerProvider),
        __metadata("design:type", preview_handler_1.PreviewHandlerProvider)
    ], PreviewContribution.prototype, "previewHandlerProvider", void 0);
    __decorate([
        inversify_1.inject(preview_preferences_1.PreviewPreferences),
        __metadata("design:type", Object)
    ], PreviewContribution.prototype, "preferences", void 0);
    PreviewContribution = __decorate([
        inversify_1.injectable()
        // eslint-disable-next-line max-len
    ], PreviewContribution);
    return PreviewContribution;
}(browser_1.NavigatableWidgetOpenHandler));
exports.PreviewContribution = PreviewContribution;


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-frontend-module.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-frontend-module.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../../packages/core/lib/browser/shell/tab-bar-toolbar.js");
var preview_contribution_1 = __webpack_require__(/*! ./preview-contribution */ "../../packages/preview/lib/browser/preview-contribution.js");
var preview_widget_1 = __webpack_require__(/*! ./preview-widget */ "../../packages/preview/lib/browser/preview-widget.js");
var preview_handler_1 = __webpack_require__(/*! ./preview-handler */ "../../packages/preview/lib/browser/preview-handler.js");
var preview_uri_1 = __webpack_require__(/*! ./preview-uri */ "../../packages/preview/lib/browser/preview-uri.js");
var markdown_1 = __webpack_require__(/*! ./markdown */ "../../packages/preview/lib/browser/markdown/index.js");
var preview_preferences_1 = __webpack_require__(/*! ./preview-preferences */ "../../packages/preview/lib/browser/preview-preferences.js");
var preview_link_normalizer_1 = __webpack_require__(/*! ./preview-link-normalizer */ "../../packages/preview/lib/browser/preview-link-normalizer.js");
__webpack_require__(/*! ../../src/browser/style/index.css */ "../../packages/preview/src/browser/style/index.css");
__webpack_require__(/*! ../../src/browser/markdown/style/index.css */ "../../packages/preview/src/browser/markdown/style/index.css");
exports.default = new inversify_1.ContainerModule(function (bind) {
    preview_preferences_1.bindPreviewPreferences(bind);
    bind(preview_handler_1.PreviewHandlerProvider).toSelf().inSingletonScope();
    common_1.bindContributionProvider(bind, preview_handler_1.PreviewHandler);
    bind(markdown_1.MarkdownPreviewHandler).toSelf().inSingletonScope();
    bind(preview_handler_1.PreviewHandler).toService(markdown_1.MarkdownPreviewHandler);
    bind(preview_link_normalizer_1.PreviewLinkNormalizer).toSelf().inSingletonScope();
    bind(preview_widget_1.PreviewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: preview_uri_1.PreviewUri.id,
        createWidget: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var container, resource, child;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            container = ctx.container;
                            return [4 /*yield*/, container.get(common_1.ResourceProvider)(new uri_1.default(options.uri))];
                        case 1:
                            resource = _a.sent();
                            child = container.createChild();
                            child.bind(preview_widget_1.PreviewWidgetOptions).toConstantValue({ resource: resource });
                            return [2 /*return*/, child.get(preview_widget_1.PreviewWidget)];
                    }
                });
            });
        }
    }); }).inSingletonScope();
    bind(preview_contribution_1.PreviewContribution).toSelf().inSingletonScope();
    [common_1.CommandContribution, common_1.MenuContribution, browser_1.OpenHandler, browser_1.FrontendApplicationContribution, tab_bar_toolbar_1.TabBarToolbarContribution].forEach(function (serviceIdentifier) {
        return bind(serviceIdentifier).toService(preview_contribution_1.PreviewContribution);
    });
});


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-handler.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-handler.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewHandlerProvider = exports.RenderContentParams = exports.PreviewHandler = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
exports.PreviewHandler = Symbol('PreviewHandler');
var RenderContentParams;
(function (RenderContentParams) {
    function is(params) {
        return !!params && 'content' in params && 'originUri' in params;
    }
    RenderContentParams.is = is;
})(RenderContentParams = exports.RenderContentParams || (exports.RenderContentParams = {}));
var PreviewHandlerProvider = /** @class */ (function () {
    function PreviewHandlerProvider(previewHandlerContributions) {
        this.previewHandlerContributions = previewHandlerContributions;
    }
    PreviewHandlerProvider.prototype.findContribution = function (uri) {
        var prioritized = core_1.Prioritizeable.prioritizeAllSync(this.previewHandlerContributions.getContributions(), function (contrib) {
            return contrib.canHandle(uri);
        });
        return prioritized.map(function (c) { return c.value; });
    };
    PreviewHandlerProvider.prototype.canHandle = function (uri) {
        return this.findContribution(uri).length > 0;
    };
    PreviewHandlerProvider = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(core_1.ContributionProvider)), __param(0, inversify_1.named(exports.PreviewHandler)),
        __metadata("design:paramtypes", [Object])
    ], PreviewHandlerProvider);
    return PreviewHandlerProvider;
}());
exports.PreviewHandlerProvider = PreviewHandlerProvider;


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-link-normalizer.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-link-normalizer.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewLinkNormalizer = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var location_mapper_service_1 = __webpack_require__(/*! @theia/mini-browser/lib/browser/location-mapper-service */ "../../packages/mini-browser/lib/browser/location-mapper-service.js");
var PreviewLinkNormalizer = /** @class */ (function () {
    function PreviewLinkNormalizer() {
        this.urlScheme = new RegExp('^[a-z][a-z|0-9|\+|\-|\.]*:', 'i');
    }
    PreviewLinkNormalizer.prototype.normalizeLink = function (documentUri, link) {
        try {
            if (!this.urlScheme.test(link)) {
                var location_1 = documentUri.parent.resolve(link).path.toString();
                return new location_mapper_service_1.MiniBrowserEndpoint().getRestUrl().resolve(location_1).toString();
            }
        }
        catch (_a) {
            // ignore
        }
        return link;
    };
    PreviewLinkNormalizer = __decorate([
        inversify_1.injectable()
    ], PreviewLinkNormalizer);
    return PreviewLinkNormalizer;
}());
exports.PreviewLinkNormalizer = PreviewLinkNormalizer;


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-preferences.js":
/*!********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-preferences.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.bindPreviewPreferences = exports.createPreviewPreferences = exports.PreviewPreferences = exports.PreviewConfigSchema = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
exports.PreviewConfigSchema = {
    type: 'object',
    properties: {
        'preview.openByDefault': {
            type: 'boolean',
            description: 'Open the preview instead of the editor by default.',
            default: false
        }
    }
};
exports.PreviewPreferences = Symbol('PreviewPreferences');
function createPreviewPreferences(preferences) {
    return browser_1.createPreferenceProxy(preferences, exports.PreviewConfigSchema);
}
exports.createPreviewPreferences = createPreviewPreferences;
function bindPreviewPreferences(bind) {
    bind(exports.PreviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(browser_1.PreferenceService);
        return createPreviewPreferences(preferences);
    });
    bind(browser_1.PreferenceContribution).toConstantValue({ schema: exports.PreviewConfigSchema });
}
exports.bindPreviewPreferences = bindPreviewPreferences;


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-uri.js":
/*!************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-uri.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.PreviewUri = void 0;
var PreviewUri;
(function (PreviewUri) {
    PreviewUri.id = 'code-editor-preview';
    PreviewUri.param = 'open-handler=' + PreviewUri.id;
    function match(uri) {
        return uri.query.indexOf(PreviewUri.param) !== -1;
    }
    PreviewUri.match = match;
    function encode(uri) {
        if (match(uri)) {
            return uri;
        }
        var params = [PreviewUri.param];
        if (uri.query) {
            params.push.apply(params, __spread(uri.query.split('&')));
        }
        var query = params.join('&');
        return uri.withQuery(query);
    }
    PreviewUri.encode = encode;
    function decode(uri) {
        if (!match(uri)) {
            return uri;
        }
        var query = uri.query.split('&').filter(function (p) { return p !== PreviewUri.param; }).join('&');
        return uri.withQuery(query);
    }
    PreviewUri.decode = decode;
})(PreviewUri = exports.PreviewUri || (exports.PreviewUri = {}));


/***/ }),

/***/ "../../packages/preview/lib/browser/preview-widget.js":
/*!***************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/lib/browser/preview-widget.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.PreviewWidget = exports.PreviewWidgetOptions = exports.PREVIEW_WIDGET_CLASS = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var browser_2 = __webpack_require__(/*! @theia/languages/lib/browser */ "../../packages/languages/lib/browser/index.js");
var preview_handler_1 = __webpack_require__(/*! ./preview-handler */ "../../packages/preview/lib/browser/preview-handler.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../../packages/core/lib/browser/theming.js");
var browser_3 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
var throttle = __webpack_require__(/*! lodash.throttle */ "../../node_modules/lodash.throttle/index.js");
exports.PREVIEW_WIDGET_CLASS = 'theia-preview-widget';
var DEFAULT_ICON = 'fa fa-eye';
var widgetCounter = 0;
exports.PreviewWidgetOptions = Symbol('PreviewWidgetOptions');
var PreviewWidget = /** @class */ (function (_super) {
    __extends(PreviewWidget, _super);
    function PreviewWidget(options, previewHandlerProvider, themeService, workspace, editorPreferences) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.previewHandlerProvider = previewHandlerProvider;
        _this.themeService = themeService;
        _this.workspace = workspace;
        _this.editorPreferences = editorPreferences;
        _this.firstUpdate = undefined;
        _this.onDidScrollEmitter = new common_1.Emitter();
        _this.onDidDoubleClickEmitter = new common_1.Emitter();
        _this.preventScrollNotification = false;
        _this.previousContent = '';
        _this.internalRevealForSourceLine = throttle(function (sourceLine) {
            if (!_this.previewHandler || !_this.previewHandler.findElementForSourceLine) {
                return;
            }
            var elementToReveal = _this.previewHandler.findElementForSourceLine(_this.node, sourceLine);
            if (elementToReveal) {
                _this.preventScrollNotification = true;
                elementToReveal.scrollIntoView();
                window.setTimeout(function () {
                    _this.preventScrollNotification = false;
                }, 50);
            }
        }, 50);
        _this.resource = _this.options.resource;
        _this.uri = _this.resource.uri;
        _this.id = 'preview-widget-' + widgetCounter++;
        _this.title.closable = true;
        _this.title.label = "Preview " + _this.uri.path.base;
        _this.title.caption = _this.title.label;
        _this.title.closable = true;
        _this.toDispose.push(_this.onDidScrollEmitter);
        _this.toDispose.push(_this.onDidDoubleClickEmitter);
        _this.addClass(exports.PREVIEW_WIDGET_CLASS);
        _this.node.tabIndex = 0;
        var previewHandler = _this.previewHandler = _this.previewHandlerProvider.findContribution(_this.uri)[0];
        if (!previewHandler) {
            return _this;
        }
        _this.title.iconClass = previewHandler.iconClass || DEFAULT_ICON;
        _this.initialize();
        return _this;
    }
    PreviewWidget.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var updateIfAffected;
            var _this = this;
            return __generator(this, function (_a) {
                this.scrollBeyondLastLine = !!this.editorPreferences['editor.scrollBeyondLastLine'];
                this.toDispose.push(this.editorPreferences.onPreferenceChanged(function (e) {
                    if (e.preferenceName === 'editor.scrollBeyondLastLine') {
                        _this.scrollBeyondLastLine = !!e.newValue;
                        _this.forceUpdate();
                    }
                }));
                this.toDispose.push(this.resource);
                if (this.resource.onDidChangeContents) {
                    this.toDispose.push(this.resource.onDidChangeContents(function () { return _this.update(); }));
                }
                updateIfAffected = function (affectedUri) {
                    if (!affectedUri || affectedUri === _this.uri.toString()) {
                        _this.update();
                    }
                };
                this.toDispose.push(this.workspace.onDidOpenTextDocument(function (document) { return updateIfAffected(document.uri); }));
                this.toDispose.push(this.workspace.onDidChangeTextDocument(function (params) { return updateIfAffected(params.textDocument.uri); }));
                this.toDispose.push(this.workspace.onDidCloseTextDocument(function (document) { return updateIfAffected(document.uri); }));
                this.toDispose.push(this.themeService.onThemeChange(function () { return _this.update(); }));
                this.firstUpdate = function () {
                    _this.revealFragment(_this.uri);
                };
                this.update();
                return [2 /*return*/];
            });
        });
    };
    PreviewWidget.prototype.onBeforeAttach = function (msg) {
        _super.prototype.onBeforeAttach.call(this, msg);
        this.toDispose.push(this.startScrollSync());
        this.toDispose.push(this.startDoubleClickListener());
    };
    PreviewWidget.prototype.startScrollSync = function () {
        var _this = this;
        return browser_1.addEventListener(this.node, 'scroll', throttle(function (event) {
            if (_this.preventScrollNotification) {
                return;
            }
            var scrollTop = _this.node.scrollTop;
            _this.didScroll(scrollTop);
        }, 50));
    };
    PreviewWidget.prototype.startDoubleClickListener = function () {
        var _this = this;
        return browser_1.addEventListener(this.node, 'dblclick', function (event) {
            if (!(event.target instanceof HTMLElement)) {
                return;
            }
            var target = event.target;
            var node = target;
            while (node && node instanceof HTMLElement) {
                if (node.tagName === 'A') {
                    return;
                }
                node = node.parentElement;
            }
            var offsetParent = target.offsetParent;
            var offset = offsetParent.classList.contains(exports.PREVIEW_WIDGET_CLASS) ? target.offsetTop : offsetParent.offsetTop;
            _this.didDoubleClick(offset);
        });
    };
    PreviewWidget.prototype.getUri = function () {
        return this.uri;
    };
    PreviewWidget.prototype.getResourceUri = function () {
        return this.uri;
    };
    PreviewWidget.prototype.createMoveToUri = function (resourceUri) {
        return this.uri.withPath(resourceUri.path);
    };
    PreviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.node.focus();
        this.update();
    };
    PreviewWidget.prototype.onUpdateRequest = function (msg) {
        _super.prototype.onUpdateRequest.call(this, msg);
        this.performUpdate();
    };
    PreviewWidget.prototype.forceUpdate = function () {
        this.previousContent = '';
        this.update();
    };
    PreviewWidget.prototype.performUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var uri, document, content, _a, contentElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.resource) {
                            return [2 /*return*/];
                        }
                        uri = this.resource.uri;
                        document = this.workspace.textDocuments.find(function (d) { return d.uri === uri.toString(); });
                        if (!document) return [3 /*break*/, 1];
                        _a = document.getText();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.resource.readContents()];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        content = _a;
                        if (content === this.previousContent) {
                            return [2 /*return*/];
                        }
                        this.previousContent = content;
                        return [4 /*yield*/, this.render(content, uri)];
                    case 4:
                        contentElement = _b.sent();
                        this.node.innerHTML = '';
                        if (contentElement) {
                            if (this.scrollBeyondLastLine) {
                                contentElement.classList.add('scrollBeyondLastLine');
                            }
                            this.node.appendChild(contentElement);
                            if (this.firstUpdate) {
                                this.firstUpdate();
                                this.firstUpdate = undefined;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewWidget.prototype.render = function (content, originUri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.previewHandler || !this.resource) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, this.previewHandler.renderContent({ content: content, originUri: originUri })];
            });
        });
    };
    PreviewWidget.prototype.revealFragment = function (uri) {
        var _this = this;
        if (uri.fragment === '' || !this.previewHandler || !this.previewHandler.findElementForFragment) {
            return;
        }
        var elementToReveal = this.previewHandler.findElementForFragment(this.node, uri.fragment);
        if (elementToReveal) {
            this.preventScrollNotification = true;
            elementToReveal.scrollIntoView();
            window.setTimeout(function () {
                _this.preventScrollNotification = false;
            }, 50);
        }
    };
    PreviewWidget.prototype.revealForSourceLine = function (sourceLine) {
        this.internalRevealForSourceLine(sourceLine);
    };
    Object.defineProperty(PreviewWidget.prototype, "onDidScroll", {
        get: function () {
            return this.onDidScrollEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    PreviewWidget.prototype.fireDidScrollToSourceLine = function (line) {
        this.onDidScrollEmitter.fire(line);
    };
    PreviewWidget.prototype.didScroll = function (scrollTop) {
        if (!this.previewHandler || !this.previewHandler.getSourceLineForOffset) {
            return;
        }
        var offset = scrollTop;
        var line = this.previewHandler.getSourceLineForOffset(this.node, offset);
        if (line) {
            this.fireDidScrollToSourceLine(line);
        }
    };
    Object.defineProperty(PreviewWidget.prototype, "onDidDoubleClick", {
        get: function () {
            return this.onDidDoubleClickEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    PreviewWidget.prototype.fireDidDoubleClickToSourceLine = function (line) {
        if (!this.resource) {
            return;
        }
        this.onDidDoubleClickEmitter.fire({
            uri: this.resource.uri.toString(),
            range: browser_2.Range.create({ line: line, character: 0 }, { line: line, character: 0 })
        });
    };
    PreviewWidget.prototype.didDoubleClick = function (offsetTop) {
        if (!this.previewHandler || !this.previewHandler.getSourceLineForOffset) {
            return;
        }
        var line = this.previewHandler.getSourceLineForOffset(this.node, offsetTop) || 0;
        this.fireDidDoubleClickToSourceLine(line);
    };
    PreviewWidget = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(exports.PreviewWidgetOptions)),
        __param(1, inversify_1.inject(preview_handler_1.PreviewHandlerProvider)),
        __param(2, inversify_1.inject(theming_1.ThemeService)),
        __param(3, inversify_1.inject(browser_2.Workspace)),
        __param(4, inversify_1.inject(browser_3.EditorPreferences)),
        __metadata("design:paramtypes", [Object, preview_handler_1.PreviewHandlerProvider,
            theming_1.ThemeService, Object, Object])
    ], PreviewWidget);
    return PreviewWidget;
}(browser_1.BaseWidget));
exports.PreviewWidget = PreviewWidget;


/***/ }),

/***/ "../../packages/preview/src/browser/markdown/style/index.css":
/*!**********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/markdown/style/index.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/markdown/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../../packages/preview/src/browser/style/index.css":
/*!*************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/preview/src/browser/style/index.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./index.css */ "../../node_modules/css-loader/index.js!../../packages/preview/src/browser/style/index.css");

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
//# sourceMappingURL=66.bundle.js.map