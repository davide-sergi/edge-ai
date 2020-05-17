(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "../../packages/plugin-ext/lib/common/disposable-util.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/disposable-util.js ***!
  \******************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.dispose = void 0;
function dispose(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (Array.isArray(first)) {
        first.forEach(function (d) { return d && d.dispose(); });
        return [];
    }
    else if (rest.length === 0) {
        if (first) {
            first.dispose();
            return first;
        }
        return undefined;
    }
    else {
        dispose(first);
        dispose(rest);
        return [];
    }
}
exports.dispose = dispose;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/common/disposable-util'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/common/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/index.js ***!
  \********************************************************************************************************/
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
// Here we expose types from @theia/plugin, so it becomes a direct dependency
__exportStar(__webpack_require__(/*! ./plugin-protocol */ "../../packages/plugin-ext/lib/common/plugin-protocol.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js"), exports);
__exportStar(__webpack_require__(/*! ./plugin-ext-api-contribution */ "../../packages/plugin-ext/lib/common/plugin-ext-api-contribution.js"), exports);

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/common'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-ext-api-contribution.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-ext-api-contribution.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPluginApiProvider = exports.ExtPluginApiProvider = void 0;
exports.ExtPluginApiProvider = 'extPluginApi';
exports.MainPluginApiProvider = Symbol('mainPluginApi');

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/common/plugin-ext-api-contribution'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-protocol.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-protocol.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginHostEnvironmentVariable = exports.ServerPluginRunner = exports.PluginServer = exports.pluginServerJsonRpcPath = exports.HostedPluginServer = exports.PluginDeployerHandler = exports.HostedPluginClient = exports.buildFrontendModuleName = exports.getPluginId = exports.MetadataProcessor = exports.PluginType = exports.PluginDeployerEntryType = exports.PluginDeployerParticipant = exports.PluginDeployer = exports.PluginDeployerFileHandler = exports.PluginDeployerDirectoryHandler = exports.PluginDeployerResolver = exports.PluginScanner = exports.PluginPackage = exports.hostedServicePath = void 0;
exports.hostedServicePath = '/services/hostedPlugin';
var PluginPackage;
(function (PluginPackage) {
    function toPluginUrl(pck, relativePath) {
        return "hostedPlugin/" + getPluginId(pck) + "/" + encodeURIComponent(relativePath);
    }
    PluginPackage.toPluginUrl = toPluginUrl;
})(PluginPackage = exports.PluginPackage || (exports.PluginPackage = {}));
exports.PluginScanner = Symbol('PluginScanner');
/**
 * A plugin resolver is handling how to resolve a plugin link into a local resource.
 */
exports.PluginDeployerResolver = Symbol('PluginDeployerResolver');
exports.PluginDeployerDirectoryHandler = Symbol('PluginDeployerDirectoryHandler');
exports.PluginDeployerFileHandler = Symbol('PluginDeployerFileHandler');
exports.PluginDeployer = Symbol('PluginDeployer');
exports.PluginDeployerParticipant = Symbol('PluginDeployerParticipant');
var PluginDeployerEntryType;
(function (PluginDeployerEntryType) {
    PluginDeployerEntryType[PluginDeployerEntryType["FRONTEND"] = 0] = "FRONTEND";
    PluginDeployerEntryType[PluginDeployerEntryType["BACKEND"] = 1] = "BACKEND";
})(PluginDeployerEntryType = exports.PluginDeployerEntryType || (exports.PluginDeployerEntryType = {}));
/**
 * Whether a plugin installed by a user or system.
 */
var PluginType;
(function (PluginType) {
    PluginType[PluginType["System"] = 0] = "System";
    PluginType[PluginType["User"] = 1] = "User";
})(PluginType = exports.PluginType || (exports.PluginType = {}));
;
exports.MetadataProcessor = Symbol('MetadataProcessor');
function getPluginId(plugin) {
    return (plugin.publisher + "_" + plugin.name).replace(/\W/g, '_');
}
exports.getPluginId = getPluginId;
function buildFrontendModuleName(plugin) {
    return (plugin.publisher + "_" + plugin.name).replace(/\W/g, '_');
}
exports.buildFrontendModuleName = buildFrontendModuleName;
exports.HostedPluginClient = Symbol('HostedPluginClient');
exports.PluginDeployerHandler = Symbol('PluginDeployerHandler');
exports.HostedPluginServer = Symbol('HostedPluginServer');
/**
 * The JSON-RPC workspace interface.
 */
exports.pluginServerJsonRpcPath = '/services/plugin-ext';
exports.PluginServer = Symbol('PluginServer');
exports.ServerPluginRunner = Symbol('ServerPluginRunner');
exports.PluginHostEnvironmentVariable = Symbol('PluginHostEnvironmentVariable');

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/common/plugin-protocol'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/common/uri-components.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/uri-components.js ***!
  \*****************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.theiaUritoUriComponents = exports.Schemes = void 0;
// some well known URI schemas
var Schemes;
(function (Schemes) {
    Schemes.FILE = 'file';
    Schemes.UNTITLED = 'untitled';
    Schemes.HTTP = 'http';
    Schemes.HTTPS = 'https';
    Schemes.MAILTO = 'mailto';
    Schemes.DATA = 'data';
    /**
     * A schema is used for models that exist in memory
     * only and that have no correspondence on a server or such.
     */
    Schemes.IN_MEMORY = 'inmemory';
    /** A schema is used for settings files. */
    Schemes.VSCODE = 'vscode';
    /** A schema is used for internal private files. */
    Schemes.INTERNAL = 'private';
    Schemes.COMMAND = 'command';
})(Schemes = exports.Schemes || (exports.Schemes = {}));
function theiaUritoUriComponents(uri) {
    return {
        scheme: uri.scheme,
        authority: uri.authority,
        path: uri.path.toString(),
        query: uri.query,
        fragment: uri.fragment
    };
}
exports.theiaUritoUriComponents = theiaUritoUriComponents;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/common/uri-components'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/documents-main.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/documents-main.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
exports.DocumentsMainImpl = exports.ModelReferenceCollection = void 0;
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
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var disposable_util_1 = __webpack_require__(/*! ../../common/disposable-util */ "../../packages/plugin-ext/lib/common/disposable-util.js");
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var ModelReferenceCollection = /** @class */ (function () {
    function ModelReferenceCollection(maxAge, maxLength) {
        if (maxAge === void 0) { maxAge = 1000 * 60 * 3; }
        if (maxLength === void 0) { maxLength = 1024 * 1024 * 80; }
        this.maxAge = maxAge;
        this.maxLength = maxLength;
        this.data = new Array();
        this.length = 0;
    }
    ModelReferenceCollection.prototype.dispose = function () {
        this.data = disposable_util_1.dispose(this.data) || [];
    };
    ModelReferenceCollection.prototype.add = function (ref) {
        var length = ref.object.textEditorModel.getValueLength();
        var handle = setTimeout(_dispose, this.maxAge);
        var entry = { length: length, dispose: _dispose };
        var self = this;
        function _dispose() {
            var idx = self.data.indexOf(entry);
            if (idx >= 0) {
                self.length -= length;
                ref.dispose();
                clearTimeout(handle);
                self.data.splice(idx, 1);
            }
        }
        ;
        this.data.push(entry);
        this.length += length;
        this.cleanup();
    };
    ModelReferenceCollection.prototype.cleanup = function () {
        while (this.length > this.maxLength) {
            this.data[0].dispose();
        }
    };
    return ModelReferenceCollection;
}());
exports.ModelReferenceCollection = ModelReferenceCollection;
var DocumentsMainImpl = /** @class */ (function () {
    function DocumentsMainImpl(editorsAndDocuments, modelService, rpc, editorManager, openerService, shell, untitledResourceResolver, fileResourceResolver) {
        var _this = this;
        this.modelService = modelService;
        this.editorManager = editorManager;
        this.openerService = openerService;
        this.shell = shell;
        this.untitledResourceResolver = untitledResourceResolver;
        this.fileResourceResolver = fileResourceResolver;
        this.syncedModels = new Map();
        this.modelReferenceCache = new ModelReferenceCollection();
        this.saveTimeout = 1750;
        this.toDispose = new core_1.DisposableCollection(this.modelReferenceCache);
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.DOCUMENTS_EXT);
        this.toDispose.push(editorsAndDocuments);
        this.toDispose.push(editorsAndDocuments.onDocumentAdd(function (documents) { return documents.forEach(_this.onModelAdded, _this); }));
        this.toDispose.push(editorsAndDocuments.onDocumentRemove(function (documents) { return documents.forEach(_this.onModelRemoved, _this); }));
        this.toDispose.push(modelService.onModelModeChanged(this.onModelChanged, this));
        this.toDispose.push(modelService.onModelSaved(function (m) {
            _this.proxy.$acceptModelSaved(m.textEditorModel.uri);
        }));
        this.toDispose.push(modelService.onModelWillSave(function (onWillSaveModelEvent) {
            onWillSaveModelEvent.waitUntil(new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var edits, editOperations, edits_1, edits_1_1, edit, range, text;
                var e_1, _a;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            setTimeout(function () { return reject(new Error("Aborted onWillSaveTextDocument-event after " + _this.saveTimeout + "ms")); }, this.saveTimeout);
                            return [4 /*yield*/, this.proxy.$acceptModelWillSave(onWillSaveModelEvent.model.textEditorModel.uri, onWillSaveModelEvent.reason, this.saveTimeout)];
                        case 1:
                            edits = _b.sent();
                            editOperations = [];
                            try {
                                for (edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                                    edit = edits_1_1.value;
                                    range = edit.range, text = edit.text;
                                    if (!range && !text) {
                                        continue;
                                    }
                                    if (range && range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn && !edit.text) {
                                        continue;
                                    }
                                    editOperations.push({
                                        range: range ? monaco.Range.lift(range) : onWillSaveModelEvent.model.textEditorModel.getFullModelRange(),
                                        /* eslint-disable-next-line no-null/no-null */
                                        text: text || null,
                                        forceMoveMarkers: edit.forceMoveMarkers
                                    });
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            resolve(editOperations);
                            return [2 /*return*/];
                    }
                });
            }); }));
        }));
        this.toDispose.push(modelService.onModelDirtyChanged(function (m) {
            _this.proxy.$acceptDirtyStateChanged(m.textEditorModel.uri, m.dirty);
        }));
    }
    DocumentsMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    DocumentsMainImpl.prototype.onModelChanged = function (event) {
        var modelUrl = event.model.textEditorModel.uri;
        if (this.syncedModels.has(modelUrl.toString())) {
            this.proxy.$acceptModelModeChanged(modelUrl, event.oldModeId, event.model.languageId);
        }
    };
    DocumentsMainImpl.prototype.onModelAdded = function (model) {
        var _this = this;
        var modelUri = model.textEditorModel.uri;
        var key = modelUri.toString();
        var toDispose = new core_1.DisposableCollection(model.textEditorModel.onDidChangeContent(function (e) {
            return _this.proxy.$acceptModelChanged(modelUri, {
                eol: e.eol,
                versionId: e.versionId,
                changes: e.changes.map(function (c) {
                    return ({
                        text: c.text,
                        range: c.range,
                        rangeLength: c.rangeLength,
                        rangeOffset: c.rangeOffset
                    });
                })
            }, model.dirty);
        }), core_1.Disposable.create(function () { return _this.syncedModels.delete(key); }));
        this.syncedModels.set(key, toDispose);
        this.toDispose.push(toDispose);
    };
    DocumentsMainImpl.prototype.onModelRemoved = function (url) {
        var model = this.syncedModels.get(url.toString());
        if (model) {
            model.dispose();
        }
    };
    DocumentsMainImpl.prototype.$tryCreateDocument = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var language, content, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        language = options && options.language;
                        content = options && options.content;
                        return [4 /*yield*/, this.untitledResourceResolver.createUntitledResource(this.fileResourceResolver, content, language)];
                    case 1:
                        resource = _a.sent();
                        return [2 /*return*/, monaco.Uri.parse(resource.uri.toString())];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryShowDocument = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var editorOptions, uriArg, opener_1, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        editorOptions = DocumentsMainImpl.toEditorOpenerOptions(this.shell, options);
                        uriArg = new uri_1.default(vscode_uri_1.URI.revive(uri));
                        return [4 /*yield*/, this.openerService.getOpener(uriArg, editorOptions)];
                    case 1:
                        opener_1 = _a.sent();
                        return [4 /*yield*/, opener_1.open(uriArg, editorOptions)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error(err_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$trySaveDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(new uri_1.default(vscode_uri_1.URI.revive(uri)))];
                    case 1:
                        widget = _a.sent();
                        if (!widget) return [3 /*break*/, 3];
                        return [4 /*yield*/, browser_1.Saveable.save(widget)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryOpenDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modelService.createModelReference(new uri_1.default(vscode_uri_1.URI.revive(uri)))];
                    case 1:
                        ref = _a.sent();
                        if (ref.object) {
                            this.modelReferenceCache.add(ref);
                            return [2 /*return*/, true];
                        }
                        else {
                            ref.dispose();
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    DocumentsMainImpl.prototype.$tryCloseDocument = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorManager.getByUri(new uri_1.default(vscode_uri_1.URI.revive(uri)))];
                    case 1:
                        widget = _a.sent();
                        if (!widget) return [3 /*break*/, 3];
                        return [4 /*yield*/, browser_1.Saveable.save(widget)];
                    case 2:
                        _a.sent();
                        widget.close();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                }
            });
        });
    };
    DocumentsMainImpl.toEditorOpenerOptions = function (shell, options) {
        if (!options) {
            return undefined;
        }
        var range;
        if (options.selection) {
            var selection = options.selection;
            range = {
                start: { line: selection.startLineNumber - 1, character: selection.startColumn - 1 },
                end: { line: selection.endLineNumber - 1, character: selection.endColumn - 1 }
            };
        }
        /* fall back to side group -> split relative to the active widget */
        var widgetOptions = { mode: 'split-right' };
        var viewColumn = options.viewColumn;
        if (viewColumn === undefined || viewColumn === -1) {
            /* active group -> skip (default behaviour) */
            widgetOptions = undefined;
        }
        else if (viewColumn > 0) {
            var tabBars = shell.mainAreaTabBars;
            // convert to zero-based index
            var tabBar = tabBars[viewColumn - 1];
            if (tabBar && tabBar.currentTitle) {
                widgetOptions = { ref: tabBar.currentTitle.owner };
            }
        }
        return {
            selection: range,
            mode: options.preserveFocus ? 'reveal' : 'activate',
            preview: options.preview,
            widgetOptions: widgetOptions
        };
    };
    return DocumentsMainImpl;
}());
exports.DocumentsMainImpl = DocumentsMainImpl;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/documents-main'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/editor/untitled-resource.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/editor/untitled-resource.js ***!
  \*********************************************************************************************************************************/
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
exports.createUntitledURI = exports.UntitledResource = exports.UntitledResourceResolver = void 0;
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var uri_components_1 = __webpack_require__(/*! ../../../common/uri-components */ "../../packages/plugin-ext/lib/common/uri-components.js");
var browser_1 = __webpack_require__(/*! @theia/filesystem/lib/browser */ "../../packages/filesystem/lib/browser/index.js");
var index = 0;
var UntitledResourceResolver = /** @class */ (function () {
    function UntitledResourceResolver() {
        this.resources = new Map();
    }
    UntitledResourceResolver.prototype.resolve = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var untitledResource;
            return __generator(this, function (_a) {
                if (uri.scheme !== uri_components_1.Schemes.UNTITLED) {
                    throw new Error('The given uri is not untitled file uri: ' + uri);
                }
                else {
                    untitledResource = this.resources.get(uri.toString());
                    if (!untitledResource) {
                        return [2 /*return*/, this.createUntitledResource(this.fileResourceResolver, '', '', uri)];
                    }
                    else {
                        return [2 /*return*/, untitledResource];
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResourceResolver.prototype.createUntitledResource = function (fileResourceResolver, content, language, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var extension, _a, _b, lang;
            var e_1, _c;
            return __generator(this, function (_d) {
                if (language) {
                    try {
                        for (_a = __values(monaco.languages.getLanguages()), _b = _a.next(); !_b.done; _b = _a.next()) {
                            lang = _b.value;
                            if (lang.id === language) {
                                if (lang.extensions) {
                                    extension = lang.extensions[0];
                                    break;
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/, new UntitledResource(this.resources, uri ? uri : new uri_1.default().withScheme(uri_components_1.Schemes.UNTITLED).withPath("/Untitled-" + index++ + (extension ? extension : '')), fileResourceResolver, content)];
            });
        });
    };
    __decorate([
        inversify_1.inject(browser_1.FileResourceResolver),
        __metadata("design:type", browser_1.FileResourceResolver)
    ], UntitledResourceResolver.prototype, "fileResourceResolver", void 0);
    UntitledResourceResolver = __decorate([
        inversify_1.injectable()
    ], UntitledResourceResolver);
    return UntitledResourceResolver;
}());
exports.UntitledResourceResolver = UntitledResourceResolver;
var UntitledResource = /** @class */ (function () {
    function UntitledResource(resources, uri, fileResourceResolver, content) {
        this.resources = resources;
        this.uri = uri;
        this.fileResourceResolver = fileResourceResolver;
        this.content = content;
        this.onDidChangeContentsEmitter = new event_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
        this.resources.set(this.uri.toString(), this);
    }
    UntitledResource.prototype.dispose = function () {
        this.resources.delete(this.uri.toString());
        this.onDidChangeContentsEmitter.dispose();
        if (this.fileResource) {
            this.fileResource.dispose();
        }
    };
    UntitledResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.fileResource) {
                    return [2 /*return*/, this.fileResource.readContents(options)];
                }
                else if (this.content) {
                    return [2 /*return*/, this.content];
                }
                else {
                    return [2 /*return*/, ''];
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResource.prototype.saveContents = function (content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.fileResource) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.fileResourceResolver.resolve(new uri_1.default(this.uri.path.toString()))];
                    case 1:
                        _a.fileResource = _b.sent();
                        if (this.fileResource.onDidChangeContents) {
                            this.fileResource.onDidChangeContents(function () { return _this.fireDidChangeContents(); });
                        }
                        _b.label = 2;
                    case 2: return [4 /*yield*/, this.fileResource.saveContents(content, options)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UntitledResource.prototype.saveContentChanges = function (changes, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.fileResource) {
                            throw new Error('FileResource is not available for: ' + this.uri.path.toString());
                        }
                        return [4 /*yield*/, this.fileResource.saveContentChanges(changes, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UntitledResource.prototype.guessEncoding = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.fileResource) {
                    return [2 /*return*/, this.fileResource.guessEncoding()];
                }
                return [2 /*return*/];
            });
        });
    };
    UntitledResource.prototype.fireDidChangeContents = function () {
        this.onDidChangeContentsEmitter.fire(undefined);
    };
    Object.defineProperty(UntitledResource.prototype, "version", {
        get: function () {
            if (this.fileResource) {
                return this.fileResource.version;
            }
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    return UntitledResource;
}());
exports.UntitledResource = UntitledResource;
function createUntitledURI(language) {
    var e_2, _a;
    var extension;
    if (language) {
        try {
            for (var _b = __values(monaco.languages.getLanguages()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lang = _c.value;
                if (lang.id === language) {
                    if (lang.extensions) {
                        extension = lang.extensions[0];
                        break;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return new uri_1.default().withScheme(uri_components_1.Schemes.UNTITLED).withPath("/Untitled-" + index++ + (extension ? extension : ''));
}
exports.createUntitledURI = createUntitledURI;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/editor/untitled-resource'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js ***!
  \*****************************************************************************************************************************************/
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
exports.MenusContributionPointHandler = exports.CodeEditorWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var tab_bar_toolbar_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/tab-bar-toolbar */ "../../packages/core/lib/browser/shell/tab-bar-toolbar.js");
var navigator_contribution_1 = __webpack_require__(/*! @theia/navigator/lib/browser/navigator-contribution */ "../../packages/navigator/lib/browser/navigator-contribution.js");
var quick_command_service_1 = __webpack_require__(/*! @theia/core/lib/browser/quick-open/quick-command-service */ "../../packages/core/lib/browser/quick-open/quick-command-service.js");
var tree_view_widget_1 = __webpack_require__(/*! ../view/tree-view-widget */ "../../packages/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var common_2 = __webpack_require__(/*! ../../../common */ "../../packages/plugin-ext/lib/common/index.js");
var debug_stack_frames_widget_1 = __webpack_require__(/*! @theia/debug/lib/browser/view/debug-stack-frames-widget */ "../../packages/debug/lib/browser/view/debug-stack-frames-widget.js");
var debug_threads_widget_1 = __webpack_require__(/*! @theia/debug/lib/browser/view/debug-threads-widget */ "../../packages/debug/lib/browser/view/debug-threads-widget.js");
var tree_widget_selection_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-widget-selection */ "../../packages/core/lib/browser/tree/tree-widget-selection.js");
var scm_widget_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-widget */ "../../packages/scm/lib/browser/scm-widget.js");
var scm_tree_widget_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-tree-widget */ "../../packages/scm/lib/browser/scm-tree-widget.js");
var scm_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var scm_repository_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-repository */ "../../packages/scm/lib/browser/scm-repository.js");
var scm_main_1 = __webpack_require__(/*! ../scm-main */ "../../packages/plugin-ext/lib/main/browser/scm-main.js");
var resource_context_key_1 = __webpack_require__(/*! @theia/core/lib/browser/resource-context-key */ "../../packages/core/lib/browser/resource-context-key.js");
var plugin_view_widget_1 = __webpack_require__(/*! ../view/plugin-view-widget */ "../../packages/plugin-ext/lib/main/browser/view/plugin-view-widget.js");
var view_context_key_service_1 = __webpack_require__(/*! ../view/view-context-key-service */ "../../packages/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var webview_1 = __webpack_require__(/*! ../webview/webview */ "../../packages/plugin-ext/lib/main/browser/webview/webview.js");
var navigatable_1 = __webpack_require__(/*! @theia/core/lib/browser/navigatable */ "../../packages/core/lib/browser/navigatable.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../../packages/core/lib/browser/context-key-service.js");
var CodeEditorWidget;
(function (CodeEditorWidget) {
    function is(arg) {
        return arg instanceof browser_1.EditorWidget || arg instanceof webview_1.WebviewWidget;
    }
    CodeEditorWidget.is = is;
    function getResourceUri(editor) {
        var resourceUri = navigatable_1.Navigatable.is(editor) && editor.getResourceUri();
        return resourceUri ? resourceUri['codeUri'] : undefined;
    }
    CodeEditorWidget.getResourceUri = getResourceUri;
})(CodeEditorWidget = exports.CodeEditorWidget || (exports.CodeEditorWidget = {}));
var MenusContributionPointHandler = /** @class */ (function () {
    function MenusContributionPointHandler() {
    }
    MenusContributionPointHandler_1 = MenusContributionPointHandler;
    MenusContributionPointHandler.prototype.handle = function (plugin) {
        var _this = this;
        var allMenus = plugin.contributes && plugin.contributes.menus;
        if (!allMenus) {
            return core_1.Disposable.NULL;
        }
        var toDispose = new core_1.DisposableCollection();
        var _loop_1 = function (location_1) {
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g, e_8, _h, e_9, _j, e_10, _k;
            if (location_1 === 'commandPalette') {
                try {
                    for (var _l = (e_1 = void 0, __values(allMenus[location_1])), _m = _l.next(); !_m.done; _m = _l.next()) {
                        var menu = _m.value;
                        if (menu.when) {
                            toDispose.push(this_1.quickCommandService.pushCommandContext(menu.command, menu.when));
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_m && !_m.done && (_a = _l.return)) _a.call(_l);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (location_1 === 'editor/title') {
                var _loop_2 = function (action) {
                    toDispose.push(this_1.registerTitleAction(location_1, action, {
                        execute: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.executeCommand(action.command, CodeEditorWidget.getResourceUri(widget)); },
                        isEnabled: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.isEnabled(action.command, CodeEditorWidget.getResourceUri(widget)); },
                        isVisible: function (widget) { return CodeEditorWidget.is(widget) && _this.commands.isVisible(action.command, CodeEditorWidget.getResourceUri(widget)); }
                    }));
                };
                try {
                    for (var _o = (e_2 = void 0, __values(allMenus[location_1])), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var action = _p.value;
                        _loop_2(action);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_b = _o.return)) _b.call(_o);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else if (location_1 === 'view/title') {
                var _loop_3 = function (action) {
                    toDispose.push(this_1.registerTitleAction(location_1, __assign(__assign({}, action), { when: undefined }), {
                        execute: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget && _this.commands.executeCommand(action.command); },
                        isEnabled: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget &&
                            _this.viewContextKeys.with({ view: widget.options.viewId }, function () {
                                return _this.commands.isEnabled(action.command) && _this.viewContextKeys.match(action.when);
                            }); },
                        isVisible: function (widget) { return widget instanceof plugin_view_widget_1.PluginViewWidget &&
                            _this.viewContextKeys.with({ view: widget.options.viewId }, function () {
                                return _this.commands.isVisible(action.command) && _this.viewContextKeys.match(action.when);
                            }); }
                    }));
                };
                try {
                    for (var _q = (e_3 = void 0, __values(allMenus[location_1])), _r = _q.next(); !_r.done; _r = _q.next()) {
                        var action = _r.value;
                        _loop_3(action);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_r && !_r.done && (_c = _q.return)) _c.call(_q);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            else if (location_1 === 'view/item/context') {
                try {
                    for (var _s = (e_4 = void 0, __values(allMenus[location_1])), _t = _s.next(); !_t.done; _t = _s.next()) {
                        var menu = _t.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? tree_view_widget_1.VIEW_ITEM_INLINE_MENU : tree_view_widget_1.VIEW_ITEM_CONTEXT_MENU;
                        toDispose.push(this_1.registerTreeMenuAction(menuPath, menu));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_t && !_t.done && (_d = _s.return)) _d.call(_s);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
            else if (location_1 === 'scm/title') {
                try {
                    for (var _u = (e_5 = void 0, __values(allMenus[location_1])), _v = _u.next(); !_v.done; _v = _u.next()) {
                        var action = _v.value;
                        toDispose.push(this_1.registerScmTitleAction(location_1, action));
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_v && !_v.done && (_e = _u.return)) _e.call(_u);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            }
            else if (location_1 === 'scm/resourceGroup/context') {
                try {
                    for (var _w = (e_6 = void 0, __values(allMenus[location_1])), _x = _w.next(); !_x.done; _x = _w.next()) {
                        var menu = _x.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? scm_tree_widget_1.ScmTreeWidget.RESOURCE_GROUP_INLINE_MENU : scm_tree_widget_1.ScmTreeWidget.RESOURCE_GROUP_CONTEXT_MENU;
                        toDispose.push(this_1.registerScmMenuAction(menuPath, menu));
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_x && !_x.done && (_f = _w.return)) _f.call(_w);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            else if (location_1 === 'scm/resourceFolder/context') {
                try {
                    for (var _y = (e_7 = void 0, __values(allMenus[location_1])), _z = _y.next(); !_z.done; _z = _y.next()) {
                        var menu = _z.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? scm_tree_widget_1.ScmTreeWidget.RESOURCE_FOLDER_INLINE_MENU : scm_tree_widget_1.ScmTreeWidget.RESOURCE_FOLDER_CONTEXT_MENU;
                        toDispose.push(this_1.registerScmMenuAction(menuPath, menu));
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_z && !_z.done && (_g = _y.return)) _g.call(_y);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            else if (location_1 === 'scm/resourceState/context') {
                try {
                    for (var _0 = (e_8 = void 0, __values(allMenus[location_1])), _1 = _0.next(); !_1.done; _1 = _0.next()) {
                        var menu = _1.value;
                        var inline = menu.group && /^inline/.test(menu.group) || false;
                        var menuPath = inline ? scm_tree_widget_1.ScmTreeWidget.RESOURCE_INLINE_MENU : scm_tree_widget_1.ScmTreeWidget.RESOURCE_CONTEXT_MENU;
                        toDispose.push(this_1.registerScmMenuAction(menuPath, menu));
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_1 && !_1.done && (_h = _0.return)) _h.call(_0);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
            else if (location_1 === 'debug/callstack/context') {
                try {
                    for (var _2 = (e_9 = void 0, __values(allMenus[location_1])), _3 = _2.next(); !_3.done; _3 = _2.next()) {
                        var menu = _3.value;
                        try {
                            for (var _4 = (e_10 = void 0, __values([debug_stack_frames_widget_1.DebugStackFramesWidget.CONTEXT_MENU, debug_threads_widget_1.DebugThreadsWidget.CONTEXT_MENU])), _5 = _4.next(); !_5.done; _5 = _4.next()) {
                                var menuPath = _5.value;
                                toDispose.push(this_1.registerMenuAction(menuPath, menu, function (command) { return ({
                                    execute: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.executeCommand(command, args[0]);
                                    },
                                    isEnabled: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.isEnabled(command, args[0]);
                                    },
                                    isVisible: function () {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        return _this.commands.isVisible(command, args[0]);
                                    }
                                }); }));
                            }
                        }
                        catch (e_10_1) { e_10 = { error: e_10_1 }; }
                        finally {
                            try {
                                if (_5 && !_5.done && (_k = _4.return)) _k.call(_4);
                            }
                            finally { if (e_10) throw e_10.error; }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (_3 && !_3.done && (_j = _2.return)) _j.call(_2);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
            else if (allMenus.hasOwnProperty(location_1)) {
                var menuPaths_1 = MenusContributionPointHandler_1.parseMenuPaths(location_1);
                if (!menuPaths_1.length) {
                    this_1.logger.warn("'" + plugin.metadata.model.id + "' plugin contributes items to a menu with invalid identifier: " + location_1);
                    return "continue";
                }
                var menus = allMenus[location_1];
                menus.forEach(function (menu) {
                    var e_11, _a;
                    try {
                        for (var menuPaths_2 = (e_11 = void 0, __values(menuPaths_1)), menuPaths_2_1 = menuPaths_2.next(); !menuPaths_2_1.done; menuPaths_2_1 = menuPaths_2.next()) {
                            var menuPath = menuPaths_2_1.value;
                            toDispose.push(_this.registerGlobalMenuAction(menuPath, menu));
                        }
                    }
                    catch (e_11_1) { e_11 = { error: e_11_1 }; }
                    finally {
                        try {
                            if (menuPaths_2_1 && !menuPaths_2_1.done && (_a = menuPaths_2.return)) _a.call(menuPaths_2);
                        }
                        finally { if (e_11) throw e_11.error; }
                    }
                });
            }
        };
        var this_1 = this;
        for (var location_1 in allMenus) {
            _loop_1(location_1);
        }
        return toDispose;
    };
    MenusContributionPointHandler.parseMenuPaths = function (value) {
        switch (value) {
            case 'editor/context': return [browser_1.EDITOR_CONTEXT_MENU];
            case 'explorer/context': return [navigator_contribution_1.NAVIGATOR_CONTEXT_MENU];
        }
        return [];
    };
    MenusContributionPointHandler.prototype.registerTreeMenuAction = function (menuPath, menu) {
        var _this = this;
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).executeCommand.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            },
            isEnabled: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isEnabled.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            },
            isVisible: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isVisible.apply(_a, __spread([command], _this.toTreeArgs.apply(_this, __spread(args))));
            }
        }); });
    };
    MenusContributionPointHandler.prototype.toTreeArgs = function () {
        var e_12, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var treeArgs = [];
        try {
            for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                var arg = args_1_1.value;
                if (common_2.TreeViewSelection.is(arg)) {
                    treeArgs.push(arg);
                }
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return treeArgs;
    };
    MenusContributionPointHandler.prototype.registerTitleAction = function (location, action, handler) {
        var _this = this;
        var toDispose = new core_1.DisposableCollection();
        var id = this.createSyntheticCommandId(action.command, { prefix: "__plugin." + location.replace('/', '.') + ".action." });
        var command = { id: id };
        toDispose.push(this.commands.registerCommand(command, handler));
        var when = action.when;
        var whenKeys = when && this.contextKeyService.parseKeys(when);
        var onDidChange;
        if (whenKeys && whenKeys.size) {
            var onDidChangeEmitter_1 = new event_1.Emitter();
            toDispose.push(onDidChangeEmitter_1);
            onDidChange = onDidChangeEmitter_1.event;
            this.contextKeyService.onDidChange.maxListeners = this.contextKeyService.onDidChange.maxListeners + 1;
            toDispose.push(this.contextKeyService.onDidChange(function (event) {
                if (event.affects(whenKeys)) {
                    onDidChangeEmitter_1.fire(undefined);
                }
            }));
            toDispose.push(core_1.Disposable.create(function () {
                _this.contextKeyService.onDidChange.maxListeners = _this.contextKeyService.onDidChange.maxListeners - 1;
            }));
        }
        // handle group and priority
        // if group is empty or white space is will be set to navigation
        // ' ' => ['navigation', 0]
        // 'navigation@1' => ['navigation', 1]
        // '1_rest-client@2' => ['1_rest-client', 2]
        // if priority is not a number it will be set to 0
        // navigation@test => ['navigation', 0]
        var _a = __read((action.group || 'navigation').split('@'), 2), group = _a[0], sort = _a[1];
        var item = { id: id, command: id, group: group.trim() || 'navigation', priority: ~~sort || undefined, when: when, onDidChange: onDidChange };
        toDispose.push(this.tabBarToolbar.registerItem(item));
        toDispose.push(this.onDidRegisterCommand(action.command, function (pluginCommand) {
            command.category = pluginCommand.category;
            item.tooltip = pluginCommand.label;
            if (group === 'navigation') {
                command.iconClass = pluginCommand.iconClass;
            }
        }));
        return toDispose;
    };
    MenusContributionPointHandler.prototype.registerScmTitleAction = function (location, action) {
        var _this = this;
        var selectedRepository = function () { return _this.toScmArgs(_this.scmService.selectedRepository); };
        return this.registerTitleAction(location, action, {
            execute: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.executeCommand(action.command, selectedRepository()); },
            isEnabled: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.isEnabled(action.command, selectedRepository()); },
            isVisible: function (widget) { return widget instanceof scm_widget_1.ScmWidget && _this.commands.isVisible(action.command, selectedRepository()); }
        });
    };
    MenusContributionPointHandler.prototype.registerScmMenuAction = function (menuPath, menu) {
        var _this = this;
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).executeCommand.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            },
            isEnabled: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isEnabled.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            },
            isVisible: function () {
                var _a;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.commands).isVisible.apply(_a, __spread([command], _this.toScmArgs.apply(_this, __spread(args))));
            }
        }); });
    };
    MenusContributionPointHandler.prototype.toScmArgs = function () {
        var e_13, _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var scmArgs = [];
        try {
            for (var args_2 = __values(args), args_2_1 = args_2.next(); !args_2_1.done; args_2_1 = args_2.next()) {
                var arg = args_2_1.value;
                var scmArg = this.toScmArg(arg);
                if (scmArg) {
                    scmArgs.push(scmArg);
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (args_2_1 && !args_2_1.done && (_a = args_2.return)) _a.call(args_2);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return scmArgs;
    };
    MenusContributionPointHandler.prototype.toScmArg = function (arg) {
        if (arg instanceof scm_repository_1.ScmRepository && arg.provider instanceof scm_main_1.PluginScmProvider) {
            return {
                sourceControlHandle: arg.provider.handle
            };
        }
        if (arg instanceof scm_main_1.PluginScmResourceGroup) {
            return {
                sourceControlHandle: arg.provider.handle,
                resourceGroupHandle: arg.handle
            };
        }
        if (arg instanceof scm_main_1.PluginScmResource) {
            return {
                sourceControlHandle: arg.group.provider.handle,
                resourceGroupHandle: arg.group.handle,
                resourceStateHandle: arg.handle
            };
        }
    };
    MenusContributionPointHandler.prototype.registerGlobalMenuAction = function (menuPath, menu) {
        var _this = this;
        var selectedResource = function () {
            var selection = _this.selectionService.selection;
            if (tree_widget_selection_1.TreeWidgetSelection.is(selection) && selection.source instanceof tree_view_widget_1.TreeViewWidget && selection[0]) {
                return selection.source.toTreeViewSelection(selection[0]);
            }
            var uri = _this.resourceContextKey.get();
            return uri ? uri['codeUri'] : undefined;
        };
        return this.registerMenuAction(menuPath, menu, function (command) { return ({
            execute: function () { return _this.commands.executeCommand(command, selectedResource()); },
            isEnabled: function () { return _this.commands.isEnabled(command, selectedResource()); },
            isVisible: function () { return _this.commands.isVisible(command, selectedResource()); }
        }); });
    };
    MenusContributionPointHandler.prototype.registerMenuAction = function (menuPath, menu, handler) {
        var toDispose = new core_1.DisposableCollection();
        var commandId = this.createSyntheticCommandId(menu.command, { prefix: '__plugin.menu.action.' });
        var command = { id: commandId };
        toDispose.push(this.commands.registerCommand(command, handler(menu.command)));
        toDispose.push(this.quickCommandService.pushCommandContext(commandId, 'false'));
        var altId;
        if (menu.alt) {
            altId = this.createSyntheticCommandId(menu.alt, { prefix: '__plugin.menu.action.' });
            var alt_1 = { id: altId };
            toDispose.push(this.commands.registerCommand(alt_1, handler(menu.alt)));
            toDispose.push(this.quickCommandService.pushCommandContext(altId, 'false'));
            toDispose.push(this.onDidRegisterCommand(menu.alt, function (pluginCommand) {
                alt_1.category = pluginCommand.category;
                alt_1.label = pluginCommand.label;
                if (inline) {
                    alt_1.iconClass = pluginCommand.iconClass;
                }
            }));
        }
        var when = menu.when;
        var _a = __read((menu.group || '').split('@'), 2), _b = _a[0], group = _b === void 0 ? '' : _b, _c = _a[1], order = _c === void 0 ? undefined : _c;
        var action = { commandId: commandId, alt: altId, order: order, when: when };
        var inline = /^inline/.test(group);
        menuPath = inline ? menuPath : __spread(menuPath, [group]);
        toDispose.push(this.menuRegistry.registerMenuAction(menuPath, action));
        toDispose.push(this.onDidRegisterCommand(menu.command, function (pluginCommand) {
            command.category = pluginCommand.category;
            command.label = pluginCommand.label;
            if (inline) {
                command.iconClass = pluginCommand.iconClass;
            }
        }));
        return toDispose;
    };
    MenusContributionPointHandler.prototype.createSyntheticCommandId = function (command, _a) {
        var prefix = _a.prefix;
        var id = prefix + command;
        var index = 0;
        while (this.commands.getCommand(id)) {
            id = prefix + command + ':' + index;
            index++;
        }
        return id;
    };
    MenusContributionPointHandler.prototype.onDidRegisterCommand = function (id, cb) {
        var _this = this;
        var command = this.commands.getCommand(id);
        if (command) {
            cb(command);
            return core_1.Disposable.NULL;
        }
        var toDispose = new core_1.DisposableCollection();
        // Registering a menu action requires the related command to be already registered.
        // But Theia plugin registers the commands dynamically via the Commands API.
        // Let's wait for ~2 sec. It should be enough to finish registering all the contributed commands.
        // FIXME: remove this workaround (timer) once the https://github.com/theia-ide/theia/issues/3344 is fixed
        var handle = setTimeout(function () { return toDispose.push(_this.onDidRegisterCommand(id, cb)); }, 2000);
        toDispose.push(core_1.Disposable.create(function () { return clearTimeout(handle); }));
        return toDispose;
    };
    var MenusContributionPointHandler_1;
    __decorate([
        inversify_1.inject(common_1.MenuModelRegistry),
        __metadata("design:type", common_1.MenuModelRegistry)
    ], MenusContributionPointHandler.prototype, "menuRegistry", void 0);
    __decorate([
        inversify_1.inject(core_1.CommandRegistry),
        __metadata("design:type", core_1.CommandRegistry)
    ], MenusContributionPointHandler.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(core_1.ILogger),
        __metadata("design:type", Object)
    ], MenusContributionPointHandler.prototype, "logger", void 0);
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], MenusContributionPointHandler.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(quick_command_service_1.QuickCommandService),
        __metadata("design:type", quick_command_service_1.QuickCommandService)
    ], MenusContributionPointHandler.prototype, "quickCommandService", void 0);
    __decorate([
        inversify_1.inject(tab_bar_toolbar_1.TabBarToolbarRegistry),
        __metadata("design:type", tab_bar_toolbar_1.TabBarToolbarRegistry)
    ], MenusContributionPointHandler.prototype, "tabBarToolbar", void 0);
    __decorate([
        inversify_1.inject(core_1.SelectionService),
        __metadata("design:type", core_1.SelectionService)
    ], MenusContributionPointHandler.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(resource_context_key_1.ResourceContextKey),
        __metadata("design:type", resource_context_key_1.ResourceContextKey)
    ], MenusContributionPointHandler.prototype, "resourceContextKey", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], MenusContributionPointHandler.prototype, "viewContextKeys", void 0);
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], MenusContributionPointHandler.prototype, "contextKeyService", void 0);
    MenusContributionPointHandler = MenusContributionPointHandler_1 = __decorate([
        inversify_1.injectable()
    ], MenusContributionPointHandler);
    return MenusContributionPointHandler;
}());
exports.MenusContributionPointHandler = MenusContributionPointHandler;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/menus/menus-contribution-handler'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/plugin-shared-style.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/plugin-shared-style.js ***!
  \****************************************************************************************************************************/
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
exports.PluginSharedStyle = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../../packages/core/lib/browser/theming.js");
var reference_1 = __webpack_require__(/*! @theia/core/lib/common/reference */ "../../packages/core/lib/common/reference.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../../packages/core/lib/browser/endpoint.js");
var PluginSharedStyle = /** @class */ (function () {
    function PluginSharedStyle() {
        var _this = this;
        this.rules = [];
        this.toUpdate = new disposable_1.DisposableCollection();
        this.icons = new reference_1.SyncReferenceCollection(function (key) { return _this.createPluginIcon(key); });
        this.iconSequence = 0;
        this.update();
        theming_1.ThemeService.get().onThemeChange(function () { return _this.update(); });
    }
    PluginSharedStyle_1 = PluginSharedStyle;
    PluginSharedStyle.prototype.update = function () {
        var e_1, _a;
        this.toUpdate.dispose();
        var style = this.style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'screen';
        document.getElementsByTagName('head')[0].appendChild(style);
        this.toUpdate.push(disposable_1.Disposable.create(function () {
            return document.getElementsByTagName('head')[0].removeChild(style);
        }));
        try {
            for (var _b = __values(this.rules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var rule = _c.value;
                this.doInsertRule(rule);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    PluginSharedStyle.prototype.insertRule = function (selector, body) {
        var _this = this;
        var rule = { selector: selector, body: body };
        this.rules.push(rule);
        this.doInsertRule(rule);
        return disposable_1.Disposable.create(function () {
            var index = _this.rules.indexOf(rule);
            if (index !== -1) {
                _this.rules.splice(index, 1);
                _this.deleteRule(selector);
            }
        });
    };
    PluginSharedStyle.prototype.doInsertRule = function (_a) {
        var selector = _a.selector, body = _a.body;
        var sheet = this.style.sheet;
        var cssBody = body(theming_1.ThemeService.get().getCurrentTheme());
        sheet.insertRule(selector + ' {\n' + cssBody + '\n}', 0);
    };
    PluginSharedStyle.prototype.deleteRule = function (selector) {
        var sheet = this.style.sheet;
        var rules = sheet.rules || sheet.cssRules || [];
        for (var i = rules.length - 1; i >= 0; i--) {
            var rule = rules[i];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (rule.selectorText.indexOf(selector) !== -1) {
                sheet.deleteRule(i);
            }
        }
    };
    PluginSharedStyle.prototype.toIconClass = function (url, _a) {
        var size = (_a === void 0 ? { size: 16 } : _a).size;
        return this.icons.acquire({ url: url, size: size });
    };
    PluginSharedStyle.prototype.createPluginIcon = function (key) {
        var iconUrl = key.url;
        var size = key.size;
        var darkIconUrl = PluginSharedStyle_1.toExternalIconUrl("" + (typeof iconUrl === 'object' ? iconUrl.dark : iconUrl));
        var lightIconUrl = PluginSharedStyle_1.toExternalIconUrl("" + (typeof iconUrl === 'object' ? iconUrl.light : iconUrl));
        var iconClass = 'plugin-icon-' + this.iconSequence++;
        var toDispose = new disposable_1.DisposableCollection();
        toDispose.push(this.insertRule('.' + iconClass, function (theme) { return "\n                display: inline-block;\n                background-position: 2px;\n                width: " + size + "px;\n                height: " + size + "px;\n                background: no-repeat url(\"" + (theme.type === 'light' ? lightIconUrl : darkIconUrl) + "\");\n                background-size: " + size + "px;\n            "; }));
        return {
            iconClass: iconClass,
            dispose: function () { return toDispose.dispose(); }
        };
    };
    PluginSharedStyle.toExternalIconUrl = function (iconUrl) {
        if (iconUrl.startsWith('hostedPlugin/')) {
            return new endpoint_1.Endpoint({ path: iconUrl }).getRestUrl().toString();
        }
        return iconUrl;
    };
    var PluginSharedStyle_1;
    PluginSharedStyle = PluginSharedStyle_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginSharedStyle);
    return PluginSharedStyle;
}());
exports.PluginSharedStyle = PluginSharedStyle;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/plugin-shared-style'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/scm-main.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/scm-main.js ***!
  \*****************************************************************************************************************/
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
exports.PluginScmResource = exports.PluginScmResourceGroup = exports.PluginScmProvider = exports.ScmMainImpl = void 0;
var plugin_api_rpc_1 = __webpack_require__(/*! ../../common/plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js");
var scm_service_1 = __webpack_require__(/*! @theia/scm/lib/browser/scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var cancellation_1 = __webpack_require__(/*! @theia/core/lib/common/cancellation */ "../../packages/core/lib/common/cancellation.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../../packages/core/lib/browser/color-registry.js");
var ScmMainImpl = /** @class */ (function () {
    function ScmMainImpl(rpc, container) {
        var _this = this;
        this.scmRepositoryMap = new Map();
        this.toDispose = new disposable_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.SCM_EXT);
        this.scmService = container.get(scm_service_1.ScmService);
        this.colors = container.get(color_registry_1.ColorRegistry);
        this.toDispose.push(this.scmService.onDidChangeSelectedRepository(function (repository) { return _this.updateSelectedRepository(repository); }));
    }
    ScmMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    ScmMainImpl.prototype.updateSelectedRepository = function (repository) {
        var sourceControlHandle = repository ? this.getSourceControlHandle(repository) : undefined;
        if (sourceControlHandle !== undefined) {
            this.proxy.$setSourceControlSelection(sourceControlHandle, true);
        }
        if (this.lastSelectedSourceControlHandle !== undefined && this.lastSelectedSourceControlHandle !== sourceControlHandle) {
            this.proxy.$setSourceControlSelection(this.lastSelectedSourceControlHandle, false);
        }
        this.lastSelectedSourceControlHandle = sourceControlHandle;
    };
    ScmMainImpl.prototype.getSourceControlHandle = function (repository) {
        var _this = this;
        return Array.from(this.scmRepositoryMap.keys()).find(function (key) {
            var scmRepository = _this.scmRepositoryMap.get(key);
            return scmRepository !== undefined && scmRepository.provider.rootUri === repository.provider.rootUri;
        });
    };
    ScmMainImpl.prototype.$registerSourceControl = function (sourceControlHandle, id, label, rootUri) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, repository;
            var _this = this;
            return __generator(this, function (_a) {
                provider = new PluginScmProvider(this.proxy, sourceControlHandle, id, label, rootUri, this.colors);
                repository = this.scmService.registerScmProvider(provider);
                repository.input.onDidChange(function () {
                    return _this.proxy.$updateInputBox(sourceControlHandle, repository.input.value);
                });
                this.scmRepositoryMap.set(sourceControlHandle, repository);
                if (this.scmService.repositories.length === 1) {
                    this.updateSelectedRepository(repository);
                }
                this.toDispose.push(disposable_1.Disposable.create(function () { return _this.$unregisterSourceControl(sourceControlHandle); }));
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateSourceControl = function (sourceControlHandle, features) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateSourceControl(features);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$unregisterSourceControl = function (sourceControlHandle) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.dispose();
                    this.scmRepositoryMap.delete(sourceControlHandle);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$setInputBoxPlaceholder = function (sourceControlHandle, placeholder) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.input.placeholder = placeholder;
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$setInputBoxValue = function (sourceControlHandle, value) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    repository.input.value = value;
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$registerGroup = function (sourceControlHandle, groupHandle, id, label) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.registerGroup(groupHandle, id, label);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$unregisterGroup = function (sourceControlHandle, groupHandle) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.unregisterGroup(groupHandle);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateGroup = function (sourceControlHandle, groupHandle, features) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroup(groupHandle, features);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateGroupLabel = function (sourceControlHandle, groupHandle, label) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroupLabel(groupHandle, label);
                }
                return [2 /*return*/];
            });
        });
    };
    ScmMainImpl.prototype.$updateResourceState = function (sourceControlHandle, groupHandle, resources) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, provider;
            return __generator(this, function (_a) {
                repository = this.scmRepositoryMap.get(sourceControlHandle);
                if (repository) {
                    provider = repository.provider;
                    provider.updateGroupResourceStates(sourceControlHandle, groupHandle, resources);
                }
                return [2 /*return*/];
            });
        });
    };
    return ScmMainImpl;
}());
exports.ScmMainImpl = ScmMainImpl;
var PluginScmProvider = /** @class */ (function () {
    function PluginScmProvider(proxy, handle, id, label, rootUri, colors) {
        this.proxy = proxy;
        this.handle = handle;
        this.id = id;
        this.label = label;
        this.rootUri = rootUri;
        this.colors = colors;
        this.onDidChangeEmitter = new event_1.Emitter();
        this.onDidChangeCommitTemplateEmitter = new event_1.Emitter();
        this.onDidChangeStatusBarCommandsEmitter = new event_1.Emitter();
        this.features = {};
        this.groupsMap = new Map();
        this.disposableCollection = new disposable_1.DisposableCollection();
        this.disposableCollection.push(this.onDidChangeEmitter);
        this.disposableCollection.push(this.onDidChangeCommitTemplateEmitter);
        this.disposableCollection.push(this.onDidChangeStatusBarCommandsEmitter);
    }
    PluginScmProvider.prototype.fireDidChange = function () {
        this.onDidChangeEmitter.fire(undefined);
    };
    Object.defineProperty(PluginScmProvider.prototype, "groups", {
        get: function () {
            return Array.from(this.groupsMap.values());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "commitTemplate", {
        get: function () {
            return this.features.commitTemplate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "acceptInputCommand", {
        get: function () {
            var command = this.features.acceptInputCommand;
            if (command) {
                var scmCommand = command;
                scmCommand.command = command.id;
                return command;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "statusBarCommands", {
        get: function () {
            var commands = this.features.statusBarCommands;
            if (commands) {
                return commands.map(function (command) {
                    var scmCommand = command;
                    scmCommand.command = command.id;
                    return scmCommand;
                });
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "count", {
        get: function () {
            return this.features.count;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChangeCommitTemplate", {
        get: function () {
            return this.onDidChangeCommitTemplateEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChangeStatusBarCommands", {
        get: function () {
            return this.onDidChangeStatusBarCommandsEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmProvider.prototype, "onDidChange", {
        get: function () {
            return this.onDidChangeEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    PluginScmProvider.prototype.dispose = function () {
        this.disposableCollection.dispose();
    };
    PluginScmProvider.prototype.updateSourceControl = function (features) {
        if (features.acceptInputCommand) {
            this.features.acceptInputCommand = features.acceptInputCommand;
        }
        if (features.commitTemplate) {
            this.features.commitTemplate = features.commitTemplate;
        }
        if (features.count) {
            this.features.count = features.count;
        }
        if (features.hasQuickDiffProvider !== undefined) {
            this.features.hasQuickDiffProvider = features.hasQuickDiffProvider;
        }
        if (features.statusBarCommands) {
            this.features.statusBarCommands = features.statusBarCommands;
        }
        this.fireDidChange();
        if (features.commitTemplate) {
            this.onDidChangeCommitTemplateEmitter.fire(features.commitTemplate);
        }
        if (features.statusBarCommands) {
            this.onDidChangeStatusBarCommandsEmitter.fire(features.statusBarCommands);
        }
    };
    PluginScmProvider.prototype.getOriginalResource = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.features.hasQuickDiffProvider) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.proxy.$provideOriginalResource(this.handle, uri.toString(), cancellation_1.CancellationToken.None)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            return [2 /*return*/, new uri_1.default(result.path)];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PluginScmProvider.prototype.registerGroup = function (groupHandle, id, label) {
        var group = new PluginScmResourceGroup(groupHandle, this, { hideWhenEmpty: undefined }, label, id);
        this.groupsMap.set(groupHandle, group);
        this.fireDidChange();
    };
    PluginScmProvider.prototype.unregisterGroup = function (groupHandle) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.dispose();
            this.groupsMap.delete(groupHandle);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroup = function (groupHandle, features) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.updateGroup(features);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroupLabel = function (groupHandle, label) {
        var group = this.groupsMap.get(groupHandle);
        if (group) {
            group.updateGroupLabel(label);
            this.fireDidChange();
        }
    };
    PluginScmProvider.prototype.updateGroupResourceStates = function (sourceControlHandle, groupHandle, resources) {
        return __awaiter(this, void 0, void 0, function () {
            var group, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        group = this.groupsMap.get(groupHandle);
                        if (!group) return [3 /*break*/, 2];
                        _b = (_a = group).updateResources;
                        return [4 /*yield*/, Promise.all(resources.map(function (resource) { return __awaiter(_this, void 0, void 0, function () {
                                var resourceUri, scmDecorations, decorations, colorVariable;
                                return __generator(this, function (_a) {
                                    resourceUri = new uri_1.default(resource.resourceUri);
                                    decorations = resource.decorations;
                                    if (decorations) {
                                        colorVariable = resource.colorId && this.colors.toCssVariableName(resource.colorId);
                                        scmDecorations = {
                                            tooltip: decorations.tooltip,
                                            letter: resource.letter,
                                            color: colorVariable && "var(" + colorVariable + ")"
                                        };
                                    }
                                    return [2 /*return*/, new PluginScmResource(this.proxy, resource.handle, group, resourceUri, group, scmDecorations)];
                                });
                            }); }))];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        this.fireDidChange();
                        _c.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    return PluginScmProvider;
}());
exports.PluginScmProvider = PluginScmProvider;
var PluginScmResourceGroup = /** @class */ (function () {
    function PluginScmResourceGroup(handle, provider, features, label, id) {
        this.handle = handle;
        this.provider = provider;
        this.features = features;
        this.label = label;
        this.id = id;
        this._resources = [];
    }
    Object.defineProperty(PluginScmResourceGroup.prototype, "resources", {
        get: function () {
            return this._resources;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginScmResourceGroup.prototype, "hideWhenEmpty", {
        get: function () {
            return this.features.hideWhenEmpty;
        },
        enumerable: false,
        configurable: true
    });
    PluginScmResourceGroup.prototype.updateGroup = function (features) {
        this.features = features;
    };
    PluginScmResourceGroup.prototype.updateGroupLabel = function (label) {
        this.label = label;
    };
    PluginScmResourceGroup.prototype.updateResources = function (resources) {
        this._resources = resources;
    };
    PluginScmResourceGroup.prototype.dispose = function () { };
    return PluginScmResourceGroup;
}());
exports.PluginScmResourceGroup = PluginScmResourceGroup;
var PluginScmResource = /** @class */ (function () {
    function PluginScmResource(proxy, handle, group, sourceUri, resourceGroup, decorations) {
        this.proxy = proxy;
        this.handle = handle;
        this.group = group;
        this.sourceUri = sourceUri;
        this.resourceGroup = resourceGroup;
        this.decorations = decorations;
    }
    PluginScmResource.prototype.open = function () {
        return this.proxy.$executeResourceCommand(this.group.provider.handle, this.group.handle, this.handle);
    };
    return PluginScmResource;
}());
exports.PluginScmResource = PluginScmResource;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/scm-main'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/plugin-view-widget.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/plugin-view-widget.js ***!
  \********************************************************************************************************************************/
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
exports.PluginViewWidget = exports.PluginViewWidgetIdentifier = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var widgets_1 = __webpack_require__(/*! @phosphor/widgets */ "../../node_modules/@phosphor/widgets/lib/index.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../../packages/core/lib/common/menu.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../../packages/core/lib/common/command.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "../../packages/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var tree_view_widget_1 = __webpack_require__(/*! ./tree-view-widget */ "../../packages/plugin-ext/lib/main/browser/view/tree-view-widget.js");
var PluginViewWidgetIdentifier = /** @class */ (function () {
    function PluginViewWidgetIdentifier() {
    }
    PluginViewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], PluginViewWidgetIdentifier);
    return PluginViewWidgetIdentifier;
}());
exports.PluginViewWidgetIdentifier = PluginViewWidgetIdentifier;
var PluginViewWidget = /** @class */ (function (_super) {
    __extends(PluginViewWidget, _super);
    function PluginViewWidget() {
        var _this = _super.call(this) || this;
        _this._suppressUpdateViewVisibility = false;
        _this.updatingViewVisibility = false;
        _this.node.tabIndex = -1;
        _this.node.style.height = '100%';
        return _this;
    }
    PluginViewWidget.prototype.init = function () {
        this.id = this.options.id;
    };
    PluginViewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        var widget = this.widgets[0];
        if (widget) {
            widget.activate();
            this.updateWidgetMessage();
        }
        else {
            this.node.focus();
        }
    };
    PluginViewWidget.prototype.storeState = function () {
        return {
            label: this.title.label,
            message: this.message,
            widgets: this.widgets
        };
    };
    PluginViewWidget.prototype.restoreState = function (state) {
        var e_1, _a;
        this.title.label = state.label;
        this.message = state.message;
        try {
            for (var _b = __values(state.widgets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var widget = _c.value;
                this.addWidget(widget);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Object.defineProperty(PluginViewWidget.prototype, "suppressUpdateViewVisibility", {
        set: function (suppressUpdateViewVisibility) {
            this._suppressUpdateViewVisibility = !this.updatingViewVisibility && suppressUpdateViewVisibility;
        },
        enumerable: false,
        configurable: true
    });
    PluginViewWidget.prototype.updateViewVisibility = function (cb) {
        if (this._suppressUpdateViewVisibility) {
            return;
        }
        try {
            this.updatingViewVisibility = true;
            cb();
        }
        finally {
            this.updatingViewVisibility = false;
        }
    };
    Object.defineProperty(PluginViewWidget.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
            this.updateWidgetMessage();
        },
        enumerable: false,
        configurable: true
    });
    PluginViewWidget.prototype.updateWidgetMessage = function () {
        var widget = this.widgets[0];
        if (widget) {
            if (widget instanceof tree_view_widget_1.TreeViewWidget) {
                widget.message = this._message;
            }
        }
    };
    PluginViewWidget.prototype.addWidget = function (widget) {
        _super.prototype.addWidget.call(this, widget);
        this.updateWidgetMessage();
    };
    PluginViewWidget.prototype.insertWidget = function (index, widget) {
        _super.prototype.insertWidget.call(this, index, widget);
        this.updateWidgetMessage();
    };
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], PluginViewWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], PluginViewWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], PluginViewWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(PluginViewWidgetIdentifier),
        __metadata("design:type", PluginViewWidgetIdentifier)
    ], PluginViewWidget.prototype, "options", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PluginViewWidget.prototype, "init", null);
    PluginViewWidget = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PluginViewWidget);
    return PluginViewWidget;
}(widgets_1.Panel));
exports.PluginViewWidget = PluginViewWidget;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/view/plugin-view-widget'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/tree-view-widget.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/tree-view-widget.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/********************************************************************************
 * Copyright (C) 2018-2019 Red Hat, Inc. and others.
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
exports.TreeViewWidget = exports.PluginTreeModel = exports.PluginTree = exports.TreeViewWidgetIdentifier = exports.CompositeTreeViewNode = exports.TreeViewNode = exports.VIEW_ITEM_INLINE_MENU = exports.VIEW_ITEM_CONTEXT_MENU = exports.TREE_NODE_HYPERLINK = void 0;
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../../../common/plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../../packages/core/lib/common/menu.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var plugin_shared_style_1 = __webpack_require__(/*! ../plugin-shared-style */ "../../packages/plugin-ext/lib/main/browser/plugin-shared-style.js");
var view_context_key_service_1 = __webpack_require__(/*! ./view-context-key-service */ "../../packages/plugin-ext/lib/main/browser/view/view-context-key-service.js");
var widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/widget */ "../../packages/core/lib/browser/widgets/widget.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../../packages/core/lib/common/command.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var message_service_1 = __webpack_require__(/*! @theia/core/lib/common/message-service */ "../../packages/core/lib/common/message-service.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
exports.TREE_NODE_HYPERLINK = 'theia-TreeNodeHyperlink';
exports.VIEW_ITEM_CONTEXT_MENU = ['view-item-context-menu'];
exports.VIEW_ITEM_INLINE_MENU = ['view-item-inline-menu'];
var TreeViewNode;
(function (TreeViewNode) {
    function is(arg) {
        return !!arg && browser_1.SelectableTreeNode.is(arg) && !browser_1.ExpandableTreeNode.is(arg) && !browser_1.CompositeTreeNode.is(arg);
    }
    TreeViewNode.is = is;
})(TreeViewNode = exports.TreeViewNode || (exports.TreeViewNode = {}));
var CompositeTreeViewNode;
(function (CompositeTreeViewNode) {
    function is(arg) {
        return !!arg && browser_1.SelectableTreeNode.is(arg) && browser_1.ExpandableTreeNode.is(arg) && browser_1.CompositeTreeNode.is(arg);
    }
    CompositeTreeViewNode.is = is;
})(CompositeTreeViewNode = exports.CompositeTreeViewNode || (exports.CompositeTreeViewNode = {}));
var TreeViewWidgetIdentifier = /** @class */ (function () {
    function TreeViewWidgetIdentifier() {
    }
    TreeViewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], TreeViewWidgetIdentifier);
    return TreeViewWidgetIdentifier;
}());
exports.TreeViewWidgetIdentifier = TreeViewWidgetIdentifier;
var PluginTree = /** @class */ (function (_super) {
    __extends(PluginTree, _super);
    function PluginTree() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PluginTree.prototype, "proxy", {
        set: function (proxy) {
            this._proxy = proxy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginTree.prototype, "viewInfo", {
        set: function (viewInfo) {
            this._viewInfo = viewInfo;
        },
        enumerable: false,
        configurable: true
    });
    PluginTree.prototype.resolveChildren = function (parent) {
        return __awaiter(this, void 0, void 0, function () {
            var children;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._proxy) {
                            return [2 /*return*/, _super.prototype.resolveChildren.call(this, parent)];
                        }
                        return [4 /*yield*/, this.fetchChildren(this._proxy, parent)];
                    case 1:
                        children = _a.sent();
                        return [2 /*return*/, children.map(function (value) { return _this.createTreeNode(value, parent); })];
                }
            });
        });
    };
    PluginTree.prototype.fetchChildren = function (proxy, parent) {
        return __awaiter(this, void 0, void 0, function () {
            var children, e_1, label;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, proxy.$getChildren(this.identifier.id, parent.id)];
                    case 1:
                        children = _a.sent();
                        return [2 /*return*/, children || []];
                    case 2:
                        e_1 = _a.sent();
                        if (e_1) {
                            console.error("Failed to fetch children for '" + this.identifier.id + "'", e_1);
                            label = this._viewInfo ? this._viewInfo.name : this.identifier.id;
                            this.notification.error(label + ": " + e_1.message);
                        }
                        return [2 /*return*/, []];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PluginTree.prototype.createTreeNode = function (item, parent) {
        var icon = this.toIconClass(item);
        var resourceUri = item.resourceUri && vscode_uri_1.URI.revive(item.resourceUri).toString();
        var themeIconId = item.themeIconId ? item.themeIconId : item.collapsibleState !== plugin_api_rpc_1.TreeViewItemCollapsibleState.None ? 'folder' : 'file';
        var update = {
            name: item.label,
            icon: icon,
            description: item.description,
            themeIconId: themeIconId,
            resourceUri: resourceUri,
            tooltip: item.tooltip,
            contextValue: item.contextValue
        };
        var node = this.getNode(item.id);
        if (item.collapsibleState !== undefined && item.collapsibleState !== plugin_api_rpc_1.TreeViewItemCollapsibleState.None) {
            if (CompositeTreeViewNode.is(node)) {
                return Object.assign(node, update);
            }
            return Object.assign({
                id: item.id,
                parent: parent,
                visible: true,
                selected: false,
                expanded: plugin_api_rpc_1.TreeViewItemCollapsibleState.Expanded === item.collapsibleState,
                children: []
            }, update);
        }
        if (TreeViewNode.is(node)) {
            return Object.assign(node, update, { command: item.command });
        }
        return Object.assign({
            id: item.id,
            parent: parent,
            visible: true,
            selected: false,
            command: item.command
        }, update);
    };
    PluginTree.prototype.toIconClass = function (item) {
        if (item.icon) {
            return 'fa ' + item.icon;
        }
        if (item.iconUrl) {
            var reference = this.sharedStyle.toIconClass(item.iconUrl);
            this.toDispose.push(reference);
            return reference.object.iconClass;
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], PluginTree.prototype, "sharedStyle", void 0);
    __decorate([
        inversify_1.inject(TreeViewWidgetIdentifier),
        __metadata("design:type", TreeViewWidgetIdentifier)
    ], PluginTree.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], PluginTree.prototype, "notification", void 0);
    PluginTree = __decorate([
        inversify_1.injectable()
    ], PluginTree);
    return PluginTree;
}(browser_1.TreeImpl));
exports.PluginTree = PluginTree;
var PluginTreeModel = /** @class */ (function (_super) {
    __extends(PluginTreeModel, _super);
    function PluginTreeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PluginTreeModel.prototype, "proxy", {
        set: function (proxy) {
            this.tree.proxy = proxy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginTreeModel.prototype, "viewInfo", {
        set: function (viewInfo) {
            this.tree.viewInfo = viewInfo;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(PluginTree),
        __metadata("design:type", PluginTree)
    ], PluginTreeModel.prototype, "tree", void 0);
    PluginTreeModel = __decorate([
        inversify_1.injectable()
    ], PluginTreeModel);
    return PluginTreeModel;
}(browser_1.TreeModelImpl));
exports.PluginTreeModel = PluginTreeModel;
var TreeViewWidget = /** @class */ (function (_super) {
    __extends(TreeViewWidget, _super);
    function TreeViewWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._contextSelection = false;
        _this.onDidChangeVisibilityEmitter = new event_1.Emitter();
        _this.onDidChangeVisibility = _this.onDidChangeVisibilityEmitter.event;
        return _this;
    }
    TreeViewWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        this.id = this.identifier.id;
        this.addClass('theia-tree-view');
        this.node.style.height = '100%';
        this.toDispose.push(this.onDidChangeVisibilityEmitter);
    };
    TreeViewWidget.prototype.renderIcon = function (node, props) {
        var icon = this.toNodeIcon(node);
        if (icon) {
            return React.createElement("div", { className: icon + ' theia-tree-view-icon' });
        }
        return undefined;
    };
    TreeViewWidget.prototype.renderCaption = function (node, props) {
        var classes = [browser_1.TREE_NODE_SEGMENT_CLASS];
        if (!this.hasTrailingSuffixes(node)) {
            classes.push(browser_1.TREE_NODE_SEGMENT_GROW_CLASS);
        }
        var className = classes.join(' ');
        var title = node.tooltip ||
            (node.resourceUri && this.labelProvider.getLongName(new uri_1.default(node.resourceUri)))
            || this.toNodeName(node);
        var attrs = this.decorateCaption(node, {
            className: className,
            id: node.id,
            title: title
        });
        var children = this.getCaption(node);
        return React.createElement.apply(React, __spread(['div', attrs], children));
    };
    TreeViewWidget.prototype.getCaption = function (node) {
        var nodes = [];
        var name = this.toNodeName(node) || '';
        var description = this.toNodeDescription(node);
        var work = name;
        var regex = /\[([^\[]+)\]\(([^\)]+)\)/g;
        var matchResult = work.match(regex);
        if (matchResult) {
            matchResult.forEach(function (match, index) {
                nodes.push(React.createElement("span", { key: "m" + index }, work.substring(0, work.indexOf(match))));
                var execResult = regex.exec(name);
                nodes.push(React.createElement("a", { key: "l" + index, href: execResult[2], target: '_blank', className: exports.TREE_NODE_HYPERLINK, onClick: function (e) { return e.stopPropagation(); } }, execResult[1]));
                work = work.substring(work.indexOf(match) + match.length);
            });
        }
        return React.createElement("div", { className: 'noWrapInfo' },
            nodes,
            work && React.createElement("span", null, work),
            description && React.createElement("span", { className: 'theia-tree-view-description' }, description));
    };
    TreeViewWidget.prototype.renderTailDecorations = function (node, props) {
        var _this = this;
        if (this.model.selectedNodes.every(function (selected) { return selected.id !== node.id; }) && node.id !== this.hoverNodeId) {
            return false;
        }
        return this.contextKeys.with({ view: this.id, viewItem: node.contextValue }, function () {
            var menu = _this.menus.getMenu(exports.VIEW_ITEM_INLINE_MENU);
            var arg = _this.toTreeViewSelection(node);
            return React.createElement(React.Fragment, null, menu.children.map(function (item, index) { return item instanceof menu_1.ActionMenuNode && _this.renderInlineCommand(item, index, arg); }));
        });
    };
    TreeViewWidget.prototype.toTreeViewSelection = function (node) {
        return { treeViewId: this.id, treeItemId: node.id };
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TreeViewWidget.prototype.renderInlineCommand = function (node, index, arg) {
        var _this = this;
        var icon = node.icon;
        if (!icon || !this.commands.isVisible(node.action.commandId, arg) || !this.contextKeys.match(node.action.when)) {
            return false;
        }
        var className = [browser_1.TREE_NODE_SEGMENT_CLASS, browser_1.TREE_NODE_TAIL_CLASS, icon, 'theia-tree-view-inline-action'].join(' ');
        return React.createElement("div", { key: index, className: className, title: node.label, onClick: function (e) {
                e.stopPropagation();
                _this.commands.executeCommand(node.action.commandId, arg);
            } });
    };
    TreeViewWidget.prototype.setHoverNodeId = function (hoverNodeId) {
        this.hoverNodeId = hoverNodeId;
        this.update();
    };
    TreeViewWidget.prototype.createNodeAttributes = function (node, props) {
        var _this = this;
        return __assign(__assign({}, _super.prototype.createNodeAttributes.call(this, node, props)), { onMouseOver: function () { return _this.setHoverNodeId(node.id); }, onMouseOut: function () { return _this.setHoverNodeId(undefined); } });
    };
    TreeViewWidget.prototype.toContextMenuArgs = function (node) {
        return [this.toTreeViewSelection(node)];
    };
    TreeViewWidget.prototype.setFlag = function (flag) {
        _super.prototype.setFlag.call(this, flag);
        if (flag === widget_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    TreeViewWidget.prototype.clearFlag = function (flag) {
        _super.prototype.clearFlag.call(this, flag);
        if (flag === widget_1.Widget.Flag.IsVisible) {
            this.onDidChangeVisibilityEmitter.fire(this.isVisible);
        }
    };
    TreeViewWidget.prototype.handleEnter = function (event) {
        _super.prototype.handleEnter.call(this, event);
        this.tryExecuteCommand();
    };
    TreeViewWidget.prototype.handleClickEvent = function (node, event) {
        _super.prototype.handleClickEvent.call(this, node, event);
        this.tryExecuteCommand(node);
    };
    // execute TreeItem.command if present
    TreeViewWidget.prototype.tryExecuteCommand = function (node) {
        var e_2, _a, _b;
        var treeNodes = (node ? [node] : this.model.selectedNodes);
        try {
            for (var treeNodes_1 = __values(treeNodes), treeNodes_1_1 = treeNodes_1.next(); !treeNodes_1_1.done; treeNodes_1_1 = treeNodes_1.next()) {
                var treeNode = treeNodes_1_1.value;
                if (treeNode && treeNode.command) {
                    (_b = this.commands).executeCommand.apply(_b, __spread([treeNode.command.id], (treeNode.command.arguments || [])));
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (treeNodes_1_1 && !treeNodes_1_1.done && (_a = treeNodes_1.return)) _a.call(treeNodes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(TreeViewWidget.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (message) {
            this._message = message;
            this.update();
        },
        enumerable: false,
        configurable: true
    });
    TreeViewWidget.prototype.render = function () {
        return React.createElement('div', this.createContainerAttributes(), this.renderSearchInfo(), this.renderTree(this.model));
    };
    TreeViewWidget.prototype.renderSearchInfo = function () {
        if (this._message) {
            return React.createElement("div", { className: 'theia-TreeViewInfo' }, this._message);
        }
        return undefined;
    };
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], TreeViewWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], TreeViewWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(view_context_key_service_1.ViewContextKeyService),
        __metadata("design:type", view_context_key_service_1.ViewContextKeyService)
    ], TreeViewWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(TreeViewWidgetIdentifier),
        __metadata("design:type", TreeViewWidgetIdentifier)
    ], TreeViewWidget.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(PluginTreeModel),
        __metadata("design:type", PluginTreeModel)
    ], TreeViewWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TreeViewWidget.prototype, "init", null);
    TreeViewWidget = __decorate([
        inversify_1.injectable()
    ], TreeViewWidget);
    return TreeViewWidget;
}(browser_1.TreeWidget));
exports.TreeViewWidget = TreeViewWidget;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/view/tree-view-widget'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/view-context-key-service.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/view-context-key-service.js ***!
  \**************************************************************************************************************************************/
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
exports.ViewContextKeyService = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var context_key_service_1 = __webpack_require__(/*! @theia/core/lib/browser/context-key-service */ "../../packages/core/lib/browser/context-key-service.js");
var ViewContextKeyService = /** @class */ (function () {
    function ViewContextKeyService() {
    }
    Object.defineProperty(ViewContextKeyService.prototype, "view", {
        get: function () {
            return this._view;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "viewItem", {
        get: function () {
            return this._viewItem;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "activeViewlet", {
        /**
         * Viewlet is a tab in the left area in VS Code. Active means visible in this context.
         *
         * In VS Code there can be only one visible viewlet at any time.
         * It is not true for Theia, since views can be layed-out again to different areas.
         * So only last visible view will be an active viewlet.
         */
        get: function () {
            return this._activeViewlet;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "activePanel", {
        /**
         * Panel is a tab in the bottom area in VS Code. Active means visible in this context.
         *
         * In VS Code there can be only one visible panel at any time.
         * It is not true for Theia, since views can be layed-out again to different areas.
         * So only last visible view will be an active panel.
         */
        get: function () {
            return this._activePanel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewContextKeyService.prototype, "focusedView", {
        get: function () {
            return this._focusedView;
        },
        enumerable: false,
        configurable: true
    });
    ViewContextKeyService.prototype.init = function () {
        this._view = this.contextKeyService.createKey('view', '');
        this._viewItem = this.contextKeyService.createKey('viewItem', '');
        this._activeViewlet = this.contextKeyService.createKey('activeViewlet', '');
        this._activePanel = this.contextKeyService.createKey('activePanel', '');
        this._focusedView = this.contextKeyService.createKey('focusedView', '');
    };
    ViewContextKeyService.prototype.match = function (expression) {
        return !expression || this.contextKeyService.match(expression);
    };
    ViewContextKeyService.prototype.with = function (input, cb) {
        var view = this.view.get();
        var viewItem = this.viewItem.get();
        this.view.set(input.view);
        this.viewItem.set(input.viewItem);
        try {
            return cb();
        }
        finally {
            this.view.set(view);
            this.viewItem.set(viewItem);
        }
    };
    __decorate([
        inversify_1.inject(context_key_service_1.ContextKeyService),
        __metadata("design:type", context_key_service_1.ContextKeyService)
    ], ViewContextKeyService.prototype, "contextKeyService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ViewContextKeyService.prototype, "init", null);
    ViewContextKeyService = __decorate([
        inversify_1.injectable()
    ], ViewContextKeyService);
    return ViewContextKeyService;
}());
exports.ViewContextKeyService = ViewContextKeyService;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/view/view-context-key-service'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-environment.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-environment.js ***!
  \************************************************************************************************************************************/
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
exports.WebviewEnvironment = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../../packages/core/lib/browser/endpoint.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
var env_variables_1 = __webpack_require__(/*! @theia/core/lib/common/env-variables */ "../../packages/core/lib/common/env-variables/index.js");
var webview_protocol_1 = __webpack_require__(/*! ../../common/webview-protocol */ "../../packages/plugin-ext/lib/main/common/webview-protocol.js");
var WebviewEnvironment = /** @class */ (function () {
    function WebviewEnvironment() {
        this.externalEndpointHost = new promise_util_1.Deferred();
    }
    WebviewEnvironment.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var variable, value, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.environments.getValue(webview_protocol_1.WebviewExternalEndpoint.pattern)];
                    case 1:
                        variable = _a.sent();
                        value = variable && variable.value || webview_protocol_1.WebviewExternalEndpoint.defaultPattern;
                        this.externalEndpointHost.resolve(value.replace('{{hostname}}', window.location.host || 'localhost'));
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.externalEndpointHost.reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebviewEnvironment.prototype.externalEndpointUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointHost.promise];
                    case 1:
                        host = _a.sent();
                        return [2 /*return*/, new endpoint_1.Endpoint({
                                host: host,
                                path: '/webview'
                            }).getRestUrl()];
                }
            });
        });
    };
    WebviewEnvironment.prototype.externalEndpoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).toString(true)];
                }
            });
        });
    };
    WebviewEnvironment.prototype.resourceRoot = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).resolve('theia-resource/{{resource}}').toString(true)];
                }
            });
        });
    };
    WebviewEnvironment.prototype.cspSource = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalEndpointUrl()];
                    case 1: return [2 /*return*/, (_a.sent()).withPath('').withQuery('').withFragment('').toString(true).replace('{{uuid}}', '*')];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], WebviewEnvironment.prototype, "environments", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], WebviewEnvironment.prototype, "init", null);
    WebviewEnvironment = __decorate([
        inversify_1.injectable()
    ], WebviewEnvironment);
    return WebviewEnvironment;
}());
exports.WebviewEnvironment = WebviewEnvironment;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/webview/webview-environment'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-preferences.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-preferences.js ***!
  \************************************************************************************************************************************/
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
exports.bindWebviewPreferences = exports.createWebviewPreferences = exports.WebviewPreferences = exports.WebviewConfigSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../../packages/core/lib/browser/preferences/index.js");
exports.WebviewConfigSchema = {
    'type': 'object',
    'properties': {
        'webview.trace': {
            'type': 'string',
            'enum': ['off', 'on', 'verbose'],
            'description': 'Controls communication tracing with webviews.',
            'default': 'off'
        }
    }
};
exports.WebviewPreferences = Symbol('WebviewPreferences');
function createWebviewPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.WebviewConfigSchema);
}
exports.createWebviewPreferences = createWebviewPreferences;
function bindWebviewPreferences(bind) {
    bind(exports.WebviewPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createWebviewPreferences(preferences);
    });
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.WebviewConfigSchema });
}
exports.bindWebviewPreferences = bindWebviewPreferences;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/webview/webview-preferences'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-resource-cache.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-resource-cache.js ***!
  \***************************************************************************************************************************************/
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
exports.WebviewResourceCache = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
/**
 * Browser based cache of webview resources across all instances.
 */
var WebviewResourceCache = /** @class */ (function () {
    function WebviewResourceCache() {
        this.cache = new promise_util_1.Deferred();
        this.resolveCache();
    }
    WebviewResourceCache.prototype.resolveCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = this.cache).resolve;
                        return [4 /*yield*/, caches.open('webview:v1')];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _c.sent();
                        console.error('Failed to enable webview caching: ', e_1);
                        this.cache.resolve(undefined);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    WebviewResourceCache.prototype.match = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/, undefined];
                        }
                        return [4 /*yield*/, cache.match(url)];
                    case 2:
                        response = _a.sent();
                        if (!response) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, {
                                eTag: response.headers.get('ETag') || undefined,
                                body: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var buffer;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, response.arrayBuffer()];
                                            case 1:
                                                buffer = _a.sent();
                                                return [2 /*return*/, new Uint8Array(buffer)];
                                        }
                                    });
                                }); }
                            }];
                }
            });
        });
    };
    WebviewResourceCache.prototype.delete = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, cache.delete(url)];
                }
            });
        });
    };
    WebviewResourceCache.prototype.put = function (url, response) {
        return __awaiter(this, void 0, void 0, function () {
            var cache, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!response.eTag) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.cache.promise];
                    case 1:
                        cache = _a.sent();
                        if (!cache) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, response.body()];
                    case 2:
                        body = _a.sent();
                        return [4 /*yield*/, cache.put(url, new Response(body, {
                                status: 200,
                                headers: { 'ETag': response.eTag }
                            }))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebviewResourceCache = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], WebviewResourceCache);
    return WebviewResourceCache;
}());
exports.WebviewResourceCache = WebviewResourceCache;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/webview/webview-resource-cache'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js ***!
  \********************************************************************************************************************************************/
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
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/common/themeing.ts
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
exports.WebviewThemeDataProvider = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var editor_preferences_1 = __webpack_require__(/*! @theia/editor/lib/browser/editor-preferences */ "../../packages/editor/lib/browser/editor-preferences.js");
var theming_1 = __webpack_require__(/*! @theia/core/lib/browser/theming */ "../../packages/core/lib/browser/theming.js");
var color_registry_1 = __webpack_require__(/*! @theia/core/lib/browser/color-registry */ "../../packages/core/lib/browser/color-registry.js");
var color_application_contribution_1 = __webpack_require__(/*! @theia/core/lib/browser/color-application-contribution */ "../../packages/core/lib/browser/color-application-contribution.js");
var WebviewThemeDataProvider = /** @class */ (function () {
    function WebviewThemeDataProvider() {
        this.onDidChangeThemeDataEmitter = new event_1.Emitter();
        this.onDidChangeThemeData = this.onDidChangeThemeDataEmitter.event;
        this.editorStyles = new Map([
            ['editor.fontFamily', 'editor-font-family'],
            ['editor.fontWeight', 'editor-font-weight'],
            ['editor.fontSize', 'editor-font-size']
        ]);
    }
    WebviewThemeDataProvider.prototype.init = function () {
        var _this = this;
        this.colorContribution.onDidChange(function () { return _this.reset(); });
        this.editorPreferences.onPreferenceChanged(function (e) {
            if (_this.editorStyles.has(e.preferenceName)) {
                _this.reset();
            }
        });
    };
    WebviewThemeDataProvider.prototype.reset = function () {
        if (this.themeData) {
            this.themeData = undefined;
            this.onDidChangeThemeDataEmitter.fire(undefined);
        }
    };
    WebviewThemeDataProvider.prototype.getThemeData = function () {
        if (!this.themeData) {
            this.themeData = this.computeThemeData();
        }
        return this.themeData;
    };
    WebviewThemeDataProvider.prototype.computeThemeData = function () {
        var e_1, _a;
        var _this = this;
        var styles = {};
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var addStyle = function (id, rawValue) {
            if (rawValue) {
                var value = typeof rawValue === 'number' || typeof rawValue === 'string' ? rawValue : String(rawValue);
                styles[_this.colors.toCssVariableName(id).substr(2)] = value;
                styles[_this.colors.toCssVariableName(id, 'vscode').substr(2)] = value;
            }
        };
        addStyle('font-family', '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", "Ubuntu", "Droid Sans", sans-serif');
        addStyle('font-weight', 'normal');
        addStyle('font-size', '13px');
        this.editorStyles.forEach(function (value, key) { return addStyle(value, _this.editorPreferences[key]); });
        try {
            for (var _b = __values(this.colors.getColors()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var id = _c.value;
                var color = this.colors.getCurrentColor(id);
                if (color) {
                    addStyle(id, color.toString());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var activeTheme = this.getActiveTheme();
        return { styles: styles, activeTheme: activeTheme };
    };
    WebviewThemeDataProvider.prototype.getActiveTheme = function () {
        var theme = theming_1.ThemeService.get().getCurrentTheme();
        switch (theme.type) {
            case 'light': return 'vscode-light';
            case 'dark': return 'vscode-dark';
            default: return 'vscode-high-contrast';
        }
    };
    __decorate([
        inversify_1.inject(editor_preferences_1.EditorPreferences),
        __metadata("design:type", Object)
    ], WebviewThemeDataProvider.prototype, "editorPreferences", void 0);
    __decorate([
        inversify_1.inject(color_registry_1.ColorRegistry),
        __metadata("design:type", color_registry_1.ColorRegistry)
    ], WebviewThemeDataProvider.prototype, "colors", void 0);
    __decorate([
        inversify_1.inject(color_application_contribution_1.ColorApplicationContribution),
        __metadata("design:type", color_application_contribution_1.ColorApplicationContribution)
    ], WebviewThemeDataProvider.prototype, "colorContribution", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WebviewThemeDataProvider.prototype, "init", null);
    WebviewThemeDataProvider = __decorate([
        inversify_1.injectable()
    ], WebviewThemeDataProvider);
    return WebviewThemeDataProvider;
}());
exports.WebviewThemeDataProvider = WebviewThemeDataProvider;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/webview/webview-theme-data-provider'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview.js ***!
  \************************************************************************************************************************/
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
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/browser/baseWebviewElement.ts
// copied and modified from https://github.com/microsoft/vscode/blob/ba40bd16433d5a817bfae15f3b4350e18f144af4/src/vs/workbench/contrib/webview/browser/webviewElement.ts#
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
exports.WebviewWidget = exports.WebviewWidgetExternalEndpoint = exports.WebviewWidgetIdentifier = void 0;
var mime = __webpack_require__(/*! mime */ "../../node_modules/mime/index.js");
var json_1 = __webpack_require__(/*! @phosphor/coreutils/lib/json */ "../../node_modules/@phosphor/coreutils/lib/json.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var widget_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/widget */ "../../packages/core/lib/browser/widgets/widget.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var application_shell_mouse_tracker_1 = __webpack_require__(/*! @theia/core/lib/browser/shell/application-shell-mouse-tracker */ "../../packages/core/lib/browser/shell/application-shell-mouse-tracker.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
var webview_environment_1 = __webpack_require__(/*! ./webview-environment */ "../../packages/plugin-ext/lib/main/browser/webview/webview-environment.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var event_1 = __webpack_require__(/*! @theia/core/lib/common/event */ "../../packages/core/lib/common/event.js");
var opener_service_1 = __webpack_require__(/*! @theia/core/lib/browser/opener-service */ "../../packages/core/lib/browser/opener-service.js");
var keybinding_1 = __webpack_require__(/*! @theia/core/lib/browser/keybinding */ "../../packages/core/lib/browser/keybinding.js");
var uri_components_1 = __webpack_require__(/*! ../../../common/uri-components */ "../../packages/plugin-ext/lib/common/uri-components.js");
var plugin_shared_style_1 = __webpack_require__(/*! ../plugin-shared-style */ "../../packages/plugin-ext/lib/main/browser/plugin-shared-style.js");
var webview_theme_data_provider_1 = __webpack_require__(/*! ./webview-theme-data-provider */ "../../packages/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js");
var external_uri_service_1 = __webpack_require__(/*! @theia/core/lib/browser/external-uri-service */ "../../packages/core/lib/browser/external-uri-service.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../../packages/output/lib/common/output-channel.js");
var webview_preferences_1 = __webpack_require__(/*! ./webview-preferences */ "../../packages/plugin-ext/lib/main/browser/webview/webview-preferences.js");
var webview_protocol_1 = __webpack_require__(/*! ../../common/webview-protocol */ "../../packages/plugin-ext/lib/main/common/webview-protocol.js");
var webview_resource_cache_1 = __webpack_require__(/*! ./webview-resource-cache */ "../../packages/plugin-ext/lib/main/browser/webview/webview-resource-cache.js");
var endpoint_1 = __webpack_require__(/*! @theia/core/lib/browser/endpoint */ "../../packages/core/lib/browser/endpoint.js");
// Style from core
var TRANSPARENT_OVERLAY_STYLE = 'theia-transparent-overlay';
var WebviewWidgetIdentifier = /** @class */ (function () {
    function WebviewWidgetIdentifier() {
    }
    WebviewWidgetIdentifier = __decorate([
        inversify_1.injectable()
    ], WebviewWidgetIdentifier);
    return WebviewWidgetIdentifier;
}());
exports.WebviewWidgetIdentifier = WebviewWidgetIdentifier;
exports.WebviewWidgetExternalEndpoint = Symbol('WebviewWidgetExternalEndpoint');
var WebviewWidget = /** @class */ (function (_super) {
    __extends(WebviewWidget, _super);
    function WebviewWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewState = {
            visible: false,
            active: false,
            position: 0
        };
        _this.html = '';
        _this._contentOptions = {};
        _this.options = {};
        _this.ready = new promise_util_1.Deferred();
        _this.onMessageEmitter = new event_1.Emitter();
        _this.onMessage = _this.onMessageEmitter.event;
        _this.pendingMessages = [];
        _this.toHide = new disposable_1.DisposableCollection();
        _this.toDisposeOnIcon = new disposable_1.DisposableCollection();
        return _this;
    }
    WebviewWidget_1 = WebviewWidget;
    Object.defineProperty(WebviewWidget.prototype, "contentOptions", {
        get: function () {
            return this._contentOptions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebviewWidget.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: false,
        configurable: true
    });
    WebviewWidget.prototype.init = function () {
        var _this = this;
        this.node.tabIndex = 0;
        this.id = WebviewWidget_1.FACTORY_ID + ':' + this.identifier.id;
        this.title.closable = true;
        this.addClass(WebviewWidget_1.Styles.WEBVIEW);
        this.toDispose.push(this.onMessageEmitter);
        this.transparentOverlay = document.createElement('div');
        this.transparentOverlay.classList.add(TRANSPARENT_OVERLAY_STYLE);
        this.transparentOverlay.style.display = 'none';
        this.node.appendChild(this.transparentOverlay);
        this.toDispose.push(this.mouseTracker.onMousedown(function () {
            if (_this.element && _this.element.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'block';
            }
        }));
        this.toDispose.push(this.mouseTracker.onMouseup(function () {
            if (_this.element && _this.element.style.display !== 'none') {
                _this.transparentOverlay.style.display = 'none';
            }
        }));
    };
    WebviewWidget.prototype.onBeforeAttach = function (msg) {
        var _this = this;
        _super.prototype.onBeforeAttach.call(this, msg);
        this.doShow();
        // iframe has to be reloaded when moved to another DOM element
        this.toDisposeOnDetach.push(disposable_1.Disposable.create(function () { return _this.forceHide(); }));
    };
    WebviewWidget.prototype.onBeforeShow = function (msg) {
        _super.prototype.onBeforeShow.call(this, msg);
        this.doShow();
    };
    WebviewWidget.prototype.onAfterHide = function (msg) {
        _super.prototype.onAfterHide.call(this, msg);
        this.doHide();
    };
    WebviewWidget.prototype.doHide = function () {
        var _this = this;
        if (this.options.retainContextWhenHidden !== true) {
            if (this.hideTimeout === undefined) {
                // avoid removing iframe if a widget moved quickly
                this.hideTimeout = setTimeout(function () { return _this.forceHide(); }, 50);
            }
        }
    };
    WebviewWidget.prototype.forceHide = function () {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
        this.toHide.dispose();
    };
    WebviewWidget.prototype.doShow = function () {
        var _this = this;
        clearTimeout(this.hideTimeout);
        this.hideTimeout = undefined;
        if (!this.toHide.disposed) {
            return;
        }
        this.toDispose.push(this.toHide);
        var element = document.createElement('iframe');
        element.className = 'webview';
        element.sandbox.add('allow-scripts', 'allow-forms', 'allow-same-origin');
        element.setAttribute('src', this.externalEndpoint + "/index.html?id=" + this.identifier.id);
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
        this.element = element;
        this.node.appendChild(this.element);
        this.toHide.push(disposable_1.Disposable.create(function () {
            if (_this.element) {
                _this.element.remove();
                _this.element = undefined;
            }
        }));
        var oldReady = this.ready;
        var ready = new promise_util_1.Deferred();
        ready.promise.then(function () { return oldReady.resolve(); });
        this.ready = ready;
        this.toHide.push(disposable_1.Disposable.create(function () { return _this.ready = new promise_util_1.Deferred(); }));
        var subscription = this.on("webview-ready" /* webviewReady */, function () {
            subscription.dispose();
            ready.resolve();
        });
        this.toHide.push(subscription);
        this.toHide.push(this.on("onmessage" /* onmessage */, function (data) { return _this.onMessageEmitter.fire(data); }));
        this.toHide.push(this.on("did-click-link" /* didClickLink */, function (uri) { return _this.openLink(new uri_1.default(uri)); }));
        this.toHide.push(this.on("do-update-state" /* doUpdateState */, function (state) {
            _this._state = state;
        }));
        this.toHide.push(this.on("did-focus" /* didFocus */, function () {
            // emulate the webview focus without actually changing focus
            return _this.node.dispatchEvent(new FocusEvent('focus'));
        }));
        this.toHide.push(this.on("did-blur" /* didBlur */, function () {
            /* no-op: webview loses focus only if another element gains focus in the main window */
        }));
        this.toHide.push(this.on("do-reload" /* doReload */, function () { return _this.reload(); }));
        this.toHide.push(this.on("load-resource" /* loadResource */, function (entry) { return _this.loadResource(entry.path); }));
        this.toHide.push(this.on("load-localhost" /* loadLocalhost */, function (entry) {
            return _this.loadLocalhost(entry.origin);
        }));
        this.toHide.push(this.on("did-keydown" /* didKeydown */, function (data) {
            // Electron: workaround for https://github.com/electron/electron/issues/14258
            // We have to detect keyboard events in the <webview> and dispatch them to our
            // keybinding service because these events do not bubble to the parent window anymore.
            _this.keybindings.dispatchKeyDown(data, _this.element);
        }));
        this.style();
        this.toHide.push(this.themeDataProvider.onDidChangeThemeData(function () { return _this.style(); }));
        this.doUpdateContent();
        while (this.pendingMessages.length) {
            this.sendMessage(this.pendingMessages.shift());
        }
    };
    WebviewWidget.prototype.loadLocalhost = function (origin) {
        return __awaiter(this, void 0, void 0, function () {
            var redirect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRedirect(origin)];
                    case 1:
                        redirect = _a.sent();
                        return [2 /*return*/, this.doSend('did-load-localhost', { origin: origin, location: redirect })];
                }
            });
        });
    };
    WebviewWidget.prototype.getRedirect = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, localhost, _a, _b, mapping;
            var e_1, _c;
            return __generator(this, function (_d) {
                uri = new uri_1.default(url);
                localhost = this.externalUriService.parseLocalhost(uri);
                if (!localhost) {
                    return [2 /*return*/, undefined];
                }
                if (this._contentOptions.portMapping) {
                    try {
                        for (_a = __values(this._contentOptions.portMapping), _b = _a.next(); !_b.done; _b = _a.next()) {
                            mapping = _b.value;
                            if (mapping.webviewPort === localhost.port) {
                                if (mapping.webviewPort !== mapping.extensionHostPort) {
                                    return [2 /*return*/, this.toRemoteUrl(uri.withAuthority(localhost.address + ":" + mapping.extensionHostPort))];
                                }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/, this.toRemoteUrl(uri)];
            });
        });
    };
    WebviewWidget.prototype.toRemoteUrl = function (localUri) {
        return __awaiter(this, void 0, void 0, function () {
            var remoteUri, remoteUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.externalUriService.resolve(localUri)];
                    case 1:
                        remoteUri = _a.sent();
                        remoteUrl = remoteUri.toString();
                        if (remoteUrl[remoteUrl.length - 1] === '/') {
                            return [2 /*return*/, remoteUrl.slice(0, remoteUrl.length - 1)];
                        }
                        return [2 /*return*/, remoteUrl];
                }
            });
        });
    };
    WebviewWidget.prototype.setContentOptions = function (contentOptions) {
        if (json_1.JSONExt.deepEqual(this.contentOptions, contentOptions)) {
            return;
        }
        this._contentOptions = contentOptions;
        this.doUpdateContent();
    };
    WebviewWidget.prototype.setIconUrl = function (iconUrl) {
        if ((this.iconUrl && iconUrl && json_1.JSONExt.deepEqual(this.iconUrl, iconUrl)) || (this.iconUrl === iconUrl)) {
            return;
        }
        this.toDisposeOnIcon.dispose();
        this.toDispose.push(this.toDisposeOnIcon);
        this.iconUrl = iconUrl;
        if (iconUrl) {
            var darkIconUrl_1 = typeof iconUrl === 'object' ? iconUrl.dark : iconUrl;
            var lightIconUrl_1 = typeof iconUrl === 'object' ? iconUrl.light : iconUrl;
            var iconClass = "webview-" + this.identifier.id + "-file-icon";
            this.toDisposeOnIcon.push(this.sharedStyle.insertRule(".theia-webview-icon." + iconClass + "::before", function (theme) { return "background-image: url(" + (theme.type === 'light' ? lightIconUrl_1 : darkIconUrl_1) + ");"; }));
            this.title.iconClass = "theia-webview-icon " + iconClass;
        }
        else {
            this.title.iconClass = '';
        }
    };
    WebviewWidget.prototype.setHTML = function (value) {
        this.html = this.preprocessHtml(value);
        this.doUpdateContent();
    };
    WebviewWidget.prototype.preprocessHtml = function (value) {
        var _this = this;
        return value
            .replace(/(["'])(?:vscode|theia)-resource:(\/\/([^\s\/'"]+?)(?=\/))?([^\s'"]+?)(["'])/gi, function (_, startQuote, _1, scheme, path, endQuote) {
            if (scheme) {
                return "" + startQuote + _this.externalEndpoint + "/theia-resource/" + scheme + path + endQuote;
            }
            return "" + startQuote + _this.externalEndpoint + "/theia-resource/file" + path + endQuote;
        });
    };
    WebviewWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focus();
    };
    WebviewWidget.prototype.focus = function () {
        this.node.focus();
        if (this.element) {
            this.doSend('focus');
        }
    };
    WebviewWidget.prototype.reload = function () {
        this.doUpdateContent();
    };
    WebviewWidget.prototype.style = function () {
        var _a = this.themeDataProvider.getThemeData(), styles = _a.styles, activeTheme = _a.activeTheme;
        this.doSend('styles', { styles: styles, activeTheme: activeTheme });
    };
    WebviewWidget.prototype.openLink = function (link) {
        var supported = this.toSupportedLink(link);
        if (supported) {
            opener_service_1.open(this.openerService, supported);
        }
    };
    WebviewWidget.prototype.toSupportedLink = function (link) {
        var e_2, _a;
        if (WebviewWidget_1.standardSupportedLinkSchemes.has(link.scheme)) {
            var linkAsString = link.toString();
            try {
                for (var _b = __values([this.externalEndpoint + '/theia-resource', this.externalEndpoint + '/vscode-resource']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var resourceRoot = _c.value;
                    if (linkAsString.startsWith(resourceRoot + '/')) {
                        return this.normalizeRequestUri(linkAsString.substr(resourceRoot.length));
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return link;
        }
        if (!!this.contentOptions.enableCommandUris && link.scheme === uri_components_1.Schemes.COMMAND) {
            return link;
        }
        return undefined;
    };
    WebviewWidget.prototype.loadResource = function (requestPath) {
        return __awaiter(this, void 0, void 0, function () {
            var normalizedUri, cacheUrl, _loop_1, this_1, _a, _b, root, state_1, e_3_1, _c;
            var e_3, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        normalizedUri = this.normalizeRequestUri(requestPath);
                        cacheUrl = new endpoint_1.Endpoint({ path: normalizedUri.path.toString() }).getRestUrl().toString();
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 10, , 11]);
                        if (!this.contentOptions.localResourceRoots) return [3 /*break*/, 9];
                        _loop_1 = function (root) {
                            var cached, response, buffer_1, eTag, data;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!new uri_1.default(root).path.isEqualOrParent(normalizedUri.path)) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        return [4 /*yield*/, this_1.resourceCache.match(cacheUrl)];
                                    case 1:
                                        cached = _a.sent();
                                        return [4 /*yield*/, this_1.resourceLoader.load({ uri: normalizedUri.toString(), eTag: cached && cached.eTag })];
                                    case 2:
                                        response = _a.sent();
                                        if (response) {
                                            buffer_1 = response.buffer, eTag = response.eTag;
                                            cached = { body: function () { return new Uint8Array(buffer_1); }, eTag: eTag };
                                            this_1.resourceCache.put(cacheUrl, cached);
                                        }
                                        if (!cached) return [3 /*break*/, 4];
                                        return [4 /*yield*/, cached.body()];
                                    case 3:
                                        data = _a.sent();
                                        return [2 /*return*/, { value: this_1.doSend('did-load-resource', {
                                                    status: 200,
                                                    path: requestPath,
                                                    mime: mime.getType(normalizedUri.path.toString()) || 'application/octet-stream',
                                                    data: data
                                                }) }];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        _a = __values(this.contentOptions.localResourceRoots), _b = _a.next();
                        _e.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        root = _b.value;
                        return [5 /*yield**/, _loop_1(root)];
                    case 4:
                        state_1 = _e.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _e.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        _c = _e.sent();
                        return [3 /*break*/, 11];
                    case 11:
                        this.resourceCache.delete(cacheUrl);
                        return [2 /*return*/, this.doSend('did-load-resource', {
                                status: 404,
                                path: requestPath
                            })];
                }
            });
        });
    };
    WebviewWidget.prototype.normalizeRequestUri = function (requestPath) {
        var normalizedPath = decodeURIComponent(requestPath);
        var requestUri = new uri_1.default(normalizedPath.replace(/^\/(\w+)\/(.+)$/, function (_, scheme, path) { return scheme + ':/' + path; }));
        if (requestUri.scheme !== 'theia-resource' && requestUri.scheme !== 'vscode-resource') {
            return requestUri;
        }
        // Modern vscode-resources uris put the scheme of the requested resource as the authority
        if (requestUri.authority) {
            return new uri_1.default(requestUri.authority + ':' + requestUri.path);
        }
        // Old style vscode-resource uris lose the scheme of the resource which means they are unable to
        // load a mix of local and remote content properly.
        return requestUri.withScheme('file');
    };
    WebviewWidget.prototype.sendMessage = function (data) {
        if (this.element) {
            this.doSend('message', data);
        }
        else {
            this.pendingMessages.push(data);
        }
    };
    WebviewWidget.prototype.doUpdateContent = function () {
        this.doSend('content', {
            contents: this.html,
            options: this.contentOptions,
            state: this.state
        });
    };
    WebviewWidget.prototype.storeState = function () {
        return {
            viewType: this.viewType,
            title: this.title.label,
            iconUrl: this.iconUrl,
            options: this.options,
            contentOptions: this.contentOptions,
            state: this.state
        };
    };
    WebviewWidget.prototype.restoreState = function (oldState) {
        var viewType = oldState.viewType, title = oldState.title, iconUrl = oldState.iconUrl, options = oldState.options, contentOptions = oldState.contentOptions, state = oldState.state;
        this.viewType = viewType;
        this.title.label = title;
        this.setIconUrl(iconUrl);
        this.options = options;
        this._contentOptions = contentOptions;
        this._state = state;
    };
    WebviewWidget.prototype.doSend = function (channel, data) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.element) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.ready.promise];
                    case 2:
                        _a.sent();
                        this.postMessage(channel, data);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    WebviewWidget.prototype.postMessage = function (channel, data) {
        if (this.element) {
            this.trace('out', channel, data);
            this.element.contentWindow.postMessage({ channel: channel, args: data }, '*');
        }
    };
    WebviewWidget.prototype.on = function (channel, handler) {
        var _this = this;
        var listener = function (e) {
            if (!e || !e.data || e.data.target !== _this.identifier.id) {
                return;
            }
            if (e.data.channel === channel) {
                _this.trace('in', e.data.channel, e.data.data);
                handler(e.data.data);
            }
        };
        window.addEventListener('message', listener);
        return disposable_1.Disposable.create(function () {
            return window.removeEventListener('message', listener);
        });
    };
    WebviewWidget.prototype.trace = function (kind, channel, data) {
        var value = this.preferences['webview.trace'];
        if (value === 'off') {
            return;
        }
        var output = this.outputManager.getChannel('webviews');
        output.append('\n' + this.identifier.id);
        output.append(kind === 'out' ? ' => ' : ' <= ');
        output.append(channel);
        if (value === 'verbose') {
            if (data) {
                output.append('\n' + JSON.stringify(data, undefined, 2));
            }
        }
    };
    var WebviewWidget_1;
    WebviewWidget.standardSupportedLinkSchemes = new Set([
        uri_components_1.Schemes.HTTP,
        uri_components_1.Schemes.HTTPS,
        uri_components_1.Schemes.MAILTO,
        uri_components_1.Schemes.VSCODE
    ]);
    WebviewWidget.FACTORY_ID = 'plugin-webview';
    __decorate([
        inversify_1.inject(WebviewWidgetIdentifier),
        __metadata("design:type", WebviewWidgetIdentifier)
    ], WebviewWidget.prototype, "identifier", void 0);
    __decorate([
        inversify_1.inject(exports.WebviewWidgetExternalEndpoint),
        __metadata("design:type", String)
    ], WebviewWidget.prototype, "externalEndpoint", void 0);
    __decorate([
        inversify_1.inject(application_shell_mouse_tracker_1.ApplicationShellMouseTracker),
        __metadata("design:type", application_shell_mouse_tracker_1.ApplicationShellMouseTracker)
    ], WebviewWidget.prototype, "mouseTracker", void 0);
    __decorate([
        inversify_1.inject(webview_environment_1.WebviewEnvironment),
        __metadata("design:type", webview_environment_1.WebviewEnvironment)
    ], WebviewWidget.prototype, "environment", void 0);
    __decorate([
        inversify_1.inject(opener_service_1.OpenerService),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "openerService", void 0);
    __decorate([
        inversify_1.inject(keybinding_1.KeybindingRegistry),
        __metadata("design:type", keybinding_1.KeybindingRegistry)
    ], WebviewWidget.prototype, "keybindings", void 0);
    __decorate([
        inversify_1.inject(plugin_shared_style_1.PluginSharedStyle),
        __metadata("design:type", plugin_shared_style_1.PluginSharedStyle)
    ], WebviewWidget.prototype, "sharedStyle", void 0);
    __decorate([
        inversify_1.inject(webview_theme_data_provider_1.WebviewThemeDataProvider),
        __metadata("design:type", webview_theme_data_provider_1.WebviewThemeDataProvider)
    ], WebviewWidget.prototype, "themeDataProvider", void 0);
    __decorate([
        inversify_1.inject(external_uri_service_1.ExternalUriService),
        __metadata("design:type", external_uri_service_1.ExternalUriService)
    ], WebviewWidget.prototype, "externalUriService", void 0);
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], WebviewWidget.prototype, "outputManager", void 0);
    __decorate([
        inversify_1.inject(webview_preferences_1.WebviewPreferences),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(webview_protocol_1.WebviewResourceLoader),
        __metadata("design:type", Object)
    ], WebviewWidget.prototype, "resourceLoader", void 0);
    __decorate([
        inversify_1.inject(webview_resource_cache_1.WebviewResourceCache),
        __metadata("design:type", webview_resource_cache_1.WebviewResourceCache)
    ], WebviewWidget.prototype, "resourceCache", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], WebviewWidget.prototype, "init", null);
    WebviewWidget = WebviewWidget_1 = __decorate([
        inversify_1.injectable()
    ], WebviewWidget);
    return WebviewWidget;
}(widget_1.BaseWidget));
exports.WebviewWidget = WebviewWidget;
(function (WebviewWidget) {
    var Styles;
    (function (Styles) {
        Styles.WEBVIEW = 'theia-webview';
    })(Styles = WebviewWidget.Styles || (WebviewWidget.Styles = {}));
})(WebviewWidget = exports.WebviewWidget || (exports.WebviewWidget = {}));
exports.WebviewWidget = WebviewWidget;

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/browser/webview/webview'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/plugin-ext/lib/main/common/webview-protocol.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/common/webview-protocol.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebviewResourceLoaderPath = exports.WebviewResourceLoader = exports.WebviewExternalEndpoint = void 0;
/**
 * Each webview should be deployed on a unique origin (https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
 * to ensure isolation from browser shared state as cookies, local storage and so on.
 *
 * Use `THEIA_WEBVIEW_EXTERNAL_ENDPOINT` to customize the hostname pattern of a origin.
 * By default is `{{uuid}}.webview.{{hostname}}`. Where `{{uuid}}` is a placeholder for a webview global id.
 */
var WebviewExternalEndpoint;
(function (WebviewExternalEndpoint) {
    WebviewExternalEndpoint.pattern = 'THEIA_WEBVIEW_EXTERNAL_ENDPOINT';
    WebviewExternalEndpoint.defaultPattern = '{{uuid}}.webview.{{hostname}}';
})(WebviewExternalEndpoint = exports.WebviewExternalEndpoint || (exports.WebviewExternalEndpoint = {}));
exports.WebviewResourceLoader = Symbol('WebviewResourceLoader');
exports.WebviewResourceLoaderPath = '/services/webview-resource-loader';

if (!global) global = {};
(global['theia'] = global['theia'] || {})['@theia/plugin-ext/lib/main/common/webview-protocol'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=49.bundle.js.map