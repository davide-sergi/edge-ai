(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "../../packages/plugin-ext/lib/common/disposable-util.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/disposable-util.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/errors.js":
/*!*********************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/errors.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.disposed = exports.readonly = exports.illegalArgument = void 0;
function illegalArgument(message) {
    if (message) {
        return new Error("Illegal argument: " + message);
    }
    else {
        return new Error('Illegal argument');
    }
}
exports.illegalArgument = illegalArgument;
function readonly(name) {
    if (name) {
        return new Error("readonly property '" + name + " cannot be changed'");
    }
    else {
        return new Error('readonly property cannot be changed');
    }
}
exports.readonly = readonly;
function disposed(what) {
    var result = new Error(what + " has been disposed");
    result.name = 'DISPOSED';
    return result;
}
exports.disposed = disposed;


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/paths-util.js":
/*!*************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/paths-util.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.normalize = exports.relative = exports.resolve = void 0;
// file copied from https://github.com/wjordan/browser-path/blob/master/src/node_path.ts
// Original license:
/*
====

Copyright (c) 2015 John Vilk and other contributors.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

====
*/
var paths_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector/paths */ "../../packages/languages/lib/common/language-selector/paths.js");
var replaceRegex = new RegExp('//+', 'g');
function resolve() {
    var e_1, _a;
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    var processed = [];
    try {
        for (var paths_2 = __values(paths), paths_2_1 = paths_2.next(); !paths_2_1.done; paths_2_1 = paths_2.next()) {
            var p = paths_2_1.value;
            if (typeof p !== 'string') {
                throw new TypeError('Invalid argument type to path.join: ' + (typeof p));
            }
            else if (p !== '') {
                if (p.charAt(0) === paths_1.sep) {
                    processed = [];
                }
                processed.push(p);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (paths_2_1 && !paths_2_1.done && (_a = paths_2.return)) _a.call(paths_2);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var resolved = normalize(processed.join(paths_1.sep));
    if (resolved.length > 1 && resolved.charAt(resolved.length - 1) === paths_1.sep) {
        return resolved.substr(0, resolved.length - 1);
    }
    return resolved;
}
exports.resolve = resolve;
function relative(from, to) {
    var i;
    from = resolve(from);
    to = resolve(to);
    var fromSegments = from.split(paths_1.sep);
    var toSegments = to.split(paths_1.sep);
    toSegments.shift();
    fromSegments.shift();
    var upCount = 0;
    var downSegments = [];
    for (i = 0; i < fromSegments.length; i++) {
        var seg = fromSegments[i];
        if (seg === toSegments[i]) {
            continue;
        }
        upCount = fromSegments.length - i;
        break;
    }
    downSegments = toSegments.slice(i);
    if (fromSegments.length === 1 && fromSegments[0] === '') {
        upCount = 0;
    }
    if (upCount > fromSegments.length) {
        upCount = fromSegments.length;
    }
    var rv = '';
    for (i = 0; i < upCount; i++) {
        rv += '../';
    }
    rv += downSegments.join(paths_1.sep);
    if (rv.length > 1 && rv.charAt(rv.length - 1) === paths_1.sep) {
        rv = rv.substr(0, rv.length - 1);
    }
    return rv;
}
exports.relative = relative;
function normalize(p) {
    var e_2, _a;
    if (p === '') {
        p = '.';
    }
    var absolute = p.charAt(0) === paths_1.sep;
    p = removeDuplicateSeparators(p);
    var components = p.split(paths_1.sep);
    var goodComponents = [];
    try {
        for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
            var c = components_1_1.value;
            if (c === '.') {
                continue;
            }
            else if (c === '..' && (absolute || (!absolute && goodComponents.length > 0 && goodComponents[0] !== '..'))) {
                goodComponents.pop();
            }
            else {
                goodComponents.push(c);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    if (!absolute && goodComponents.length < 2) {
        switch (goodComponents.length) {
            case 1:
                if (goodComponents[0] === '') {
                    goodComponents.unshift('.');
                }
                break;
            default:
                goodComponents.push('.');
        }
    }
    p = goodComponents.join(paths_1.sep);
    if (absolute && p.charAt(0) !== paths_1.sep) {
        p = paths_1.sep + p;
    }
    return p;
}
exports.normalize = normalize;
function removeDuplicateSeparators(p) {
    p = p.replace(replaceRegex, paths_1.sep);
    return p;
}


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-api-rpc-model.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-api-rpc-model.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.FoldingRangeKind = exports.SymbolTag = exports.SymbolKind = exports.DocumentHighlightKind = exports.MarkerTag = exports.MarkerSeverity = exports.IdObject = exports.CompletionItemKind = exports.CompletionItemInsertTextRule = exports.CompletionTriggerKind = void 0;
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
var CompletionItemInsertTextRule;
(function (CompletionItemInsertTextRule) {
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["KeepWhitespace"] = 1] = "KeepWhitespace";
    CompletionItemInsertTextRule[CompletionItemInsertTextRule["InsertAsSnippet"] = 4] = "InsertAsSnippet";
})(CompletionItemInsertTextRule = exports.CompletionItemInsertTextRule || (exports.CompletionItemInsertTextRule = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Method"] = 0] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 1] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 2] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 3] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 4] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 5] = "Class";
    CompletionItemKind[CompletionItemKind["Struct"] = 6] = "Struct";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Event"] = 10] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 11] = "Operator";
    CompletionItemKind[CompletionItemKind["Unit"] = 12] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 13] = "Value";
    CompletionItemKind[CompletionItemKind["Constant"] = 14] = "Constant";
    CompletionItemKind[CompletionItemKind["Enum"] = 15] = "Enum";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 16] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Keyword"] = 17] = "Keyword";
    CompletionItemKind[CompletionItemKind["Text"] = 18] = "Text";
    CompletionItemKind[CompletionItemKind["Color"] = 19] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 20] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 21] = "Reference";
    CompletionItemKind[CompletionItemKind["Customcolor"] = 22] = "Customcolor";
    CompletionItemKind[CompletionItemKind["Folder"] = 23] = "Folder";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
    CompletionItemKind[CompletionItemKind["Snippet"] = 25] = "Snippet";
})(CompletionItemKind = exports.CompletionItemKind || (exports.CompletionItemKind = {}));
var IdObject = /** @class */ (function () {
    function IdObject() {
    }
    return IdObject;
}());
exports.IdObject = IdObject;
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity = exports.MarkerSeverity || (exports.MarkerSeverity = {}));
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag = exports.MarkerTag || (exports.MarkerTag = {}));
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind = exports.DocumentHighlightKind || (exports.DocumentHighlightKind = {}));
var SymbolKind;
(function (SymbolKind) {
    SymbolKind[SymbolKind["File"] = 0] = "File";
    SymbolKind[SymbolKind["Module"] = 1] = "Module";
    SymbolKind[SymbolKind["Namespace"] = 2] = "Namespace";
    SymbolKind[SymbolKind["Package"] = 3] = "Package";
    SymbolKind[SymbolKind["Class"] = 4] = "Class";
    SymbolKind[SymbolKind["Method"] = 5] = "Method";
    SymbolKind[SymbolKind["Property"] = 6] = "Property";
    SymbolKind[SymbolKind["Field"] = 7] = "Field";
    SymbolKind[SymbolKind["Constructor"] = 8] = "Constructor";
    SymbolKind[SymbolKind["Enum"] = 9] = "Enum";
    SymbolKind[SymbolKind["Interface"] = 10] = "Interface";
    SymbolKind[SymbolKind["Function"] = 11] = "Function";
    SymbolKind[SymbolKind["Variable"] = 12] = "Variable";
    SymbolKind[SymbolKind["Constant"] = 13] = "Constant";
    SymbolKind[SymbolKind["String"] = 14] = "String";
    SymbolKind[SymbolKind["Number"] = 15] = "Number";
    SymbolKind[SymbolKind["Boolean"] = 16] = "Boolean";
    SymbolKind[SymbolKind["Array"] = 17] = "Array";
    SymbolKind[SymbolKind["Object"] = 18] = "Object";
    SymbolKind[SymbolKind["Key"] = 19] = "Key";
    SymbolKind[SymbolKind["Null"] = 20] = "Null";
    SymbolKind[SymbolKind["EnumMember"] = 21] = "EnumMember";
    SymbolKind[SymbolKind["Struct"] = 22] = "Struct";
    SymbolKind[SymbolKind["Event"] = 23] = "Event";
    SymbolKind[SymbolKind["Operator"] = 24] = "Operator";
    SymbolKind[SymbolKind["TypeParameter"] = 25] = "TypeParameter";
})(SymbolKind = exports.SymbolKind || (exports.SymbolKind = {}));
var SymbolTag;
(function (SymbolTag) {
    SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag = exports.SymbolTag || (exports.SymbolTag = {}));
var FoldingRangeKind = /** @class */ (function () {
    function FoldingRangeKind(value) {
        this.value = value;
    }
    FoldingRangeKind.Comment = new FoldingRangeKind('comment');
    FoldingRangeKind.Imports = new FoldingRangeKind('imports');
    FoldingRangeKind.Region = new FoldingRangeKind('region');
    return FoldingRangeKind;
}());
exports.FoldingRangeKind = FoldingRangeKind;


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-api-rpc.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.MAIN_RPC_CONTEXT = exports.PLUGIN_RPC_CONTEXT = exports.OutputChannelRegistryFactory = exports.LanguagesMainFactory = exports.ResourceTextEditDto = exports.TrackedRangeStickiness = exports.TextEditorRevealType = exports.EditorPosition = exports.ScmCommandArg = exports.TreeViewItemCollapsibleState = exports.TreeViewSelection = exports.MainMessageType = exports.emptyPlugin = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var rpc_protocol_1 = __webpack_require__(/*! ./rpc-protocol */ "../../packages/plugin-ext/lib/common/rpc-protocol.js");
exports.emptyPlugin = {
    lifecycle: {
        startMethod: 'empty',
        stopMethod: 'empty'
    },
    model: {
        id: 'emptyPlugin',
        name: 'emptyPlugin',
        publisher: 'Theia',
        version: 'empty',
        displayName: 'empty',
        description: 'empty',
        engine: {
            type: 'empty',
            version: 'empty'
        },
        packagePath: 'empty',
        packageUri: 'empty',
        entryPoint: {}
    },
    pluginPath: 'empty',
    pluginFolder: 'empty',
    rawModel: {
        name: 'emptyPlugin',
        publisher: 'Theia',
        version: 'empty',
        displayName: 'empty',
        description: 'empty',
        engines: {
            type: 'empty',
            version: 'empty'
        },
        packagePath: 'empty'
    }
};
var MainMessageType;
(function (MainMessageType) {
    MainMessageType[MainMessageType["Error"] = 0] = "Error";
    MainMessageType[MainMessageType["Warning"] = 1] = "Warning";
    MainMessageType[MainMessageType["Info"] = 2] = "Info";
})(MainMessageType = exports.MainMessageType || (exports.MainMessageType = {}));
var TreeViewSelection;
(function (TreeViewSelection) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'treeViewId' in arg && 'treeItemId' in arg;
    }
    TreeViewSelection.is = is;
})(TreeViewSelection = exports.TreeViewSelection || (exports.TreeViewSelection = {}));
/**
 * Collapsible state of the tree item
 */
var TreeViewItemCollapsibleState;
(function (TreeViewItemCollapsibleState) {
    /**
     * Determines an item can be neither collapsed nor expanded. Implies it has no children.
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["None"] = 0] = "None";
    /**
     * Determines an item is collapsed
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["Collapsed"] = 1] = "Collapsed";
    /**
     * Determines an item is expanded
     */
    TreeViewItemCollapsibleState[TreeViewItemCollapsibleState["Expanded"] = 2] = "Expanded";
})(TreeViewItemCollapsibleState = exports.TreeViewItemCollapsibleState || (exports.TreeViewItemCollapsibleState = {}));
var ScmCommandArg;
(function (ScmCommandArg) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'sourceControlHandle' in arg;
    }
    ScmCommandArg.is = is;
})(ScmCommandArg = exports.ScmCommandArg || (exports.ScmCommandArg = {}));
var EditorPosition;
(function (EditorPosition) {
    EditorPosition[EditorPosition["ONE"] = 0] = "ONE";
    EditorPosition[EditorPosition["TWO"] = 1] = "TWO";
    EditorPosition[EditorPosition["THREE"] = 2] = "THREE";
    EditorPosition[EditorPosition["FOUR"] = 3] = "FOUR";
    EditorPosition[EditorPosition["FIVE"] = 4] = "FIVE";
    EditorPosition[EditorPosition["SIX"] = 5] = "SIX";
    EditorPosition[EditorPosition["SEVEN"] = 6] = "SEVEN";
    EditorPosition[EditorPosition["EIGHT"] = 7] = "EIGHT";
    EditorPosition[EditorPosition["NINE"] = 8] = "NINE";
})(EditorPosition = exports.EditorPosition || (exports.EditorPosition = {}));
var TextEditorRevealType;
(function (TextEditorRevealType) {
    TextEditorRevealType[TextEditorRevealType["Default"] = 0] = "Default";
    TextEditorRevealType[TextEditorRevealType["InCenter"] = 1] = "InCenter";
    TextEditorRevealType[TextEditorRevealType["InCenterIfOutsideViewport"] = 2] = "InCenterIfOutsideViewport";
    TextEditorRevealType[TextEditorRevealType["AtTop"] = 3] = "AtTop";
})(TextEditorRevealType = exports.TextEditorRevealType || (exports.TextEditorRevealType = {}));
/**
 * Describes the behavior of decorations when typing/editing near their edges.
 */
var TrackedRangeStickiness;
(function (TrackedRangeStickiness) {
    TrackedRangeStickiness[TrackedRangeStickiness["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
    TrackedRangeStickiness[TrackedRangeStickiness["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness = exports.TrackedRangeStickiness || (exports.TrackedRangeStickiness = {}));
var ResourceTextEditDto;
(function (ResourceTextEditDto) {
    function is(arg) {
        return !!arg && typeof arg === 'object' && 'resource' in arg && 'edits' in arg;
    }
    ResourceTextEditDto.is = is;
})(ResourceTextEditDto = exports.ResourceTextEditDto || (exports.ResourceTextEditDto = {}));
exports.LanguagesMainFactory = Symbol('LanguagesMainFactory');
exports.OutputChannelRegistryFactory = Symbol('OutputChannelRegistryFactory');
exports.PLUGIN_RPC_CONTEXT = {
    COMMAND_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('CommandRegistryMain'),
    QUICK_OPEN_MAIN: rpc_protocol_1.createProxyIdentifier('QuickOpenMain'),
    DIALOGS_MAIN: rpc_protocol_1.createProxyIdentifier('DialogsMain'),
    WORKSPACE_MAIN: rpc_protocol_1.createProxyIdentifier('WorkspaceMain'),
    MESSAGE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('MessageRegistryMain'),
    TEXT_EDITORS_MAIN: rpc_protocol_1.createProxyIdentifier('TextEditorsMain'),
    DOCUMENTS_MAIN: rpc_protocol_1.createProxyIdentifier('DocumentsMain'),
    STATUS_BAR_MESSAGE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('StatusBarMessageRegistryMain'),
    ENV_MAIN: rpc_protocol_1.createProxyIdentifier('EnvMain'),
    NOTIFICATION_MAIN: rpc_protocol_1.createProxyIdentifier('NotificationMain'),
    TERMINAL_MAIN: rpc_protocol_1.createProxyIdentifier('TerminalServiceMain'),
    TREE_VIEWS_MAIN: rpc_protocol_1.createProxyIdentifier('TreeViewsMain'),
    PREFERENCE_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('PreferenceRegistryMain'),
    OUTPUT_CHANNEL_REGISTRY_MAIN: rpc_protocol_1.createProxyIdentifier('OutputChannelRegistryMain'),
    LANGUAGES_MAIN: rpc_protocol_1.createProxyIdentifier('LanguagesMain'),
    CONNECTION_MAIN: rpc_protocol_1.createProxyIdentifier('ConnectionMain'),
    WEBVIEWS_MAIN: rpc_protocol_1.createProxyIdentifier('WebviewsMain'),
    STORAGE_MAIN: rpc_protocol_1.createProxyIdentifier('StorageMain'),
    TASKS_MAIN: rpc_protocol_1.createProxyIdentifier('TasksMain'),
    LANGUAGES_CONTRIBUTION_MAIN: rpc_protocol_1.createProxyIdentifier('LanguagesContributionMain'),
    DEBUG_MAIN: rpc_protocol_1.createProxyIdentifier('DebugMain'),
    FILE_SYSTEM_MAIN: rpc_protocol_1.createProxyIdentifier('FileSystemMain'),
    SCM_MAIN: rpc_protocol_1.createProxyIdentifier('ScmMain'),
    DECORATIONS_MAIN: rpc_protocol_1.createProxyIdentifier('DecorationsMain'),
    WINDOW_MAIN: rpc_protocol_1.createProxyIdentifier('WindowMain'),
    CLIPBOARD_MAIN: rpc_protocol_1.createProxyIdentifier('ClipboardMain')
};
exports.MAIN_RPC_CONTEXT = {
    HOSTED_PLUGIN_MANAGER_EXT: rpc_protocol_1.createProxyIdentifier('PluginManagerExt'),
    COMMAND_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('CommandRegistryExt'),
    QUICK_OPEN_EXT: rpc_protocol_1.createProxyIdentifier('QuickOpenExt'),
    WINDOW_STATE_EXT: rpc_protocol_1.createProxyIdentifier('WindowStateExt'),
    NOTIFICATION_EXT: rpc_protocol_1.createProxyIdentifier('NotificationExt'),
    WORKSPACE_EXT: rpc_protocol_1.createProxyIdentifier('WorkspaceExt'),
    TEXT_EDITORS_EXT: rpc_protocol_1.createProxyIdentifier('TextEditorsExt'),
    EDITORS_AND_DOCUMENTS_EXT: rpc_protocol_1.createProxyIdentifier('EditorsAndDocumentsExt'),
    DOCUMENTS_EXT: rpc_protocol_1.createProxyIdentifier('DocumentsExt'),
    TERMINAL_EXT: rpc_protocol_1.createProxyIdentifier('TerminalServiceExt'),
    OUTPUT_CHANNEL_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('OutputChannelRegistryExt'),
    TREE_VIEWS_EXT: rpc_protocol_1.createProxyIdentifier('TreeViewsExt'),
    PREFERENCE_REGISTRY_EXT: rpc_protocol_1.createProxyIdentifier('PreferenceRegistryExt'),
    LANGUAGES_EXT: rpc_protocol_1.createProxyIdentifier('LanguagesExt'),
    CONNECTION_EXT: rpc_protocol_1.createProxyIdentifier('ConnectionExt'),
    WEBVIEWS_EXT: rpc_protocol_1.createProxyIdentifier('WebviewsExt'),
    STORAGE_EXT: rpc_protocol_1.createProxyIdentifier('StorageExt'),
    TASKS_EXT: rpc_protocol_1.createProxyIdentifier('TasksExt'),
    LANGUAGES_CONTRIBUTION_EXT: rpc_protocol_1.createProxyIdentifier('LanguagesContributionExt'),
    DEBUG_EXT: rpc_protocol_1.createProxyIdentifier('DebugExt'),
    FILE_SYSTEM_EXT: rpc_protocol_1.createProxyIdentifier('FileSystemExt'),
    SCM_EXT: rpc_protocol_1.createProxyIdentifier('ScmExt'),
    DECORATIONS_EXT: rpc_protocol_1.createProxyIdentifier('DecorationsExt')
};


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-ext-api-contribution.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-ext-api-contribution.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MainPluginApiProvider = exports.ExtPluginApiProvider = void 0;
exports.ExtPluginApiProvider = 'extPluginApi';
exports.MainPluginApiProvider = Symbol('mainPluginApi');


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/plugin-protocol.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/plugin-protocol.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/rpc-protocol.js":
/*!***************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/rpc-protocol.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
// copied from https://github.com/Microsoft/vscode/blob/master/src/vs/workbench/services/extensions/node/rpcProtocol.ts
// with small modifications
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
exports.transformErrorForSerialization = exports.RPCProtocolImpl = exports.ConnectionClosedError = exports.createProxyIdentifier = exports.ProxyIdentifier = exports.RPCProtocol = void 0;
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var promise_util_1 = __webpack_require__(/*! @theia/core/lib/common/promise-util */ "../../packages/core/lib/common/promise-util.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var vscode_languageserver_protocol_1 = __webpack_require__(/*! vscode-languageserver-protocol */ "../../node_modules/vscode-languageserver-protocol/lib/main.js");
var types_impl_1 = __webpack_require__(/*! ../plugin/types-impl */ "../../packages/plugin-ext/lib/plugin/types-impl.js");
exports.RPCProtocol = Symbol('RPCProtocol');
var ProxyIdentifier = /** @class */ (function () {
    function ProxyIdentifier(isMain, id) {
        this.isMain = isMain;
        // TODO this is nasty, rewrite this
        this.id = id.toString();
    }
    return ProxyIdentifier;
}());
exports.ProxyIdentifier = ProxyIdentifier;
function createProxyIdentifier(identifier) {
    return new ProxyIdentifier(false, identifier);
}
exports.createProxyIdentifier = createProxyIdentifier;
var ConnectionClosedError;
(function (ConnectionClosedError) {
    var code = 'RPC_PROTOCOL_CLOSED';
    function create(message) {
        if (message === void 0) { message = 'connection is closed'; }
        return Object.assign(new Error(message), { code: code });
    }
    ConnectionClosedError.create = create;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(error) {
        return !!error && typeof error === 'object' && 'code' in error && error['code'] === code;
    }
    ConnectionClosedError.is = is;
})(ConnectionClosedError = exports.ConnectionClosedError || (exports.ConnectionClosedError = {}));
var RPCProtocolImpl = /** @class */ (function () {
    function RPCProtocolImpl(connection, remoteHostID) {
        var _this = this;
        this.remoteHostID = remoteHostID;
        this.locals = new Map();
        this.proxies = new Map();
        this.lastMessageId = 0;
        this.cancellationTokenSources = new Map();
        this.pendingRPCReplies = new Map();
        this.toDispose = new disposable_1.DisposableCollection(disposable_1.Disposable.create(function () { }));
        this.toDispose.push(this.multiplexor = new RPCMultiplexer(connection, function (msg) { return _this.receiveOneMessage(msg); }, remoteHostID));
        this.toDispose.push(disposable_1.Disposable.create(function () {
            var e_1, _a;
            _this.proxies.clear();
            try {
                for (var _b = __values(_this.pendingRPCReplies.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var reply = _c.value;
                    reply.reject(ConnectionClosedError.create());
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.pendingRPCReplies.clear();
        }));
    }
    Object.defineProperty(RPCProtocolImpl.prototype, "isDisposed", {
        get: function () {
            return this.toDispose.disposed;
        },
        enumerable: false,
        configurable: true
    });
    RPCProtocolImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    RPCProtocolImpl.prototype.getProxy = function (proxyId) {
        if (this.isDisposed) {
            throw ConnectionClosedError.create();
        }
        var proxy = this.proxies.get(proxyId.id);
        if (!proxy) {
            proxy = this.createProxy(proxyId.id);
            this.proxies.set(proxyId.id, proxy);
        }
        return proxy;
    };
    RPCProtocolImpl.prototype.set = function (identifier, instance) {
        var _this = this;
        if (this.isDisposed) {
            throw ConnectionClosedError.create();
        }
        this.locals.set(identifier.id, instance);
        if (disposable_1.Disposable.is(instance)) {
            this.toDispose.push(instance);
        }
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.locals.delete(identifier.id); }));
        return instance;
    };
    RPCProtocolImpl.prototype.createProxy = function (proxyId) {
        var _this = this;
        var handler = {
            get: function (target, name) {
                if (!target[name] && name.charCodeAt(0) === 36 /* CharCode.DollarSign */) {
                    target[name] = function () {
                        var myArgs = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            myArgs[_i] = arguments[_i];
                        }
                        return _this.remoteCall(proxyId, name, myArgs);
                    };
                }
                return target[name];
            }
        };
        return new Proxy(Object.create(null), handler);
    };
    RPCProtocolImpl.prototype.remoteCall = function (proxyId, methodName, args) {
        var _this = this;
        if (this.isDisposed) {
            return Promise.reject(ConnectionClosedError.create());
        }
        var cancellationToken = args.length && vscode_languageserver_protocol_1.CancellationToken.is(args[args.length - 1]) ? args.pop() : undefined;
        if (cancellationToken && cancellationToken.isCancellationRequested) {
            return Promise.reject(canceled());
        }
        var callId = String(++this.lastMessageId);
        var result = new promise_util_1.Deferred();
        if (cancellationToken) {
            args.push('add.cancellation.token');
            cancellationToken.onCancellationRequested(function () {
                return _this.multiplexor.send(MessageFactory.cancel(callId, _this.messageToSendHostId));
            });
        }
        this.pendingRPCReplies.set(callId, result);
        this.multiplexor.send(MessageFactory.request(callId, proxyId, methodName, args, this.messageToSendHostId));
        return result.promise;
    };
    RPCProtocolImpl.prototype.receiveOneMessage = function (rawmsg) {
        if (this.isDisposed) {
            return;
        }
        var msg = JSON.parse(rawmsg, ObjectsTransferrer.reviver);
        // handle message that sets the Host ID
        if (msg.setHostID) {
            this.messageToSendHostId = msg.setHostID;
            return;
        }
        // skip message if not matching host
        if (this.remoteHostID && msg.hostID && this.remoteHostID !== msg.hostID) {
            return;
        }
        switch (msg.type) {
            case 1 /* Request */:
                this.receiveRequest(msg);
                break;
            case 2 /* Reply */:
                this.receiveReply(msg);
                break;
            case 3 /* ReplyErr */:
                this.receiveReplyErr(msg);
                break;
            case 4 /* Cancel */:
                this.receiveCancel(msg);
                break;
        }
    };
    RPCProtocolImpl.prototype.receiveCancel = function (msg) {
        var cancellationTokenSource = this.cancellationTokenSources.get(msg.id);
        if (cancellationTokenSource) {
            cancellationTokenSource.cancel();
        }
    };
    RPCProtocolImpl.prototype.receiveRequest = function (msg) {
        var _this = this;
        var callId = msg.id;
        var proxyId = msg.proxyId;
        // convert `null` to `undefined`, since we don't use `null` in internal plugin APIs
        var args = msg.args.map(function (arg) { return arg === null ? undefined : arg; }); // eslint-disable-line no-null/no-null
        var addToken = args.length && args[args.length - 1] === 'add.cancellation.token' ? args.pop() : false;
        if (addToken) {
            var tokenSource = new vscode_languageserver_protocol_1.CancellationTokenSource();
            this.cancellationTokenSources.set(callId, tokenSource);
            args.push(tokenSource.token);
        }
        var invocation = this.invokeHandler(proxyId, msg.method, args);
        invocation.then(function (result) {
            _this.cancellationTokenSources.delete(callId);
            _this.multiplexor.send(MessageFactory.replyOK(callId, result, _this.messageToSendHostId));
        }, function (error) {
            _this.cancellationTokenSources.delete(callId);
            _this.multiplexor.send(MessageFactory.replyErr(callId, error, _this.messageToSendHostId));
        });
    };
    RPCProtocolImpl.prototype.receiveReply = function (msg) {
        var callId = msg.id;
        var pendingReply = this.pendingRPCReplies.get(callId);
        if (!pendingReply) {
            return;
        }
        this.pendingRPCReplies.delete(callId);
        pendingReply.resolve(msg.res);
    };
    RPCProtocolImpl.prototype.receiveReplyErr = function (msg) {
        var callId = msg.id;
        var pendingReply = this.pendingRPCReplies.get(callId);
        if (!pendingReply) {
            return;
        }
        this.pendingRPCReplies.delete(callId);
        var err = undefined;
        if (msg.err && msg.err.$isError) {
            err = new Error();
            err.name = msg.err.name;
            err.message = msg.err.message;
            err.stack = msg.err.stack;
        }
        pendingReply.reject(err);
    };
    RPCProtocolImpl.prototype.invokeHandler = function (proxyId, methodName, args) {
        try {
            return Promise.resolve(this.doInvokeHandler(proxyId, methodName, args));
        }
        catch (err) {
            return Promise.reject(err);
        }
    };
    RPCProtocolImpl.prototype.doInvokeHandler = function (proxyId, methodName, args) {
        var actor = this.locals.get(proxyId);
        if (!actor) {
            throw new Error('Unknown actor ' + proxyId);
        }
        var method = actor[methodName];
        if (typeof method !== 'function') {
            throw new Error('Unknown method ' + methodName + ' on actor ' + proxyId);
        }
        return method.apply(actor, args);
    };
    return RPCProtocolImpl;
}());
exports.RPCProtocolImpl = RPCProtocolImpl;
function canceled() {
    var error = new Error('Canceled');
    error.name = error.message;
    return error;
}
/**
 * Sends/Receives multiple messages in one go:
 *  - multiple messages to be sent from one stack get sent in bulk at `process.nextTick`.
 *  - each incoming message is handled in a separate `process.nextTick`.
 */
var RPCMultiplexer = /** @class */ (function () {
    function RPCMultiplexer(connection, onMessage, remoteHostId) {
        var _this = this;
        this.toDispose = new disposable_1.DisposableCollection();
        this.connection = connection;
        this.sendAccumulatedBound = this.sendAccumulated.bind(this);
        this.toDispose.push(disposable_1.Disposable.create(function () { return _this.messagesToSend = []; }));
        this.toDispose.push(this.connection.onMessage(function (data) {
            var len = data.length;
            for (var i = 0; i < len; i++) {
                onMessage(data[i]);
            }
        }));
        this.messagesToSend = [];
        if (remoteHostId) {
            this.send("{\"setHostID\":\"" + remoteHostId + "\"}");
        }
    }
    RPCMultiplexer.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    RPCMultiplexer.prototype.sendAccumulated = function () {
        var tmp = this.messagesToSend;
        this.messagesToSend = [];
        this.connection.send(tmp);
    };
    RPCMultiplexer.prototype.send = function (msg) {
        if (this.toDispose.disposed) {
            throw ConnectionClosedError.create();
        }
        if (this.messagesToSend.length === 0) {
            if (typeof setImmediate !== 'undefined') {
                setImmediate(this.sendAccumulatedBound);
            }
            else {
                setTimeout(this.sendAccumulatedBound, 0);
            }
        }
        this.messagesToSend.push(msg);
    };
    return RPCMultiplexer;
}());
var MessageFactory = /** @class */ (function () {
    function MessageFactory() {
    }
    MessageFactory.cancel = function (req, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        return "{" + prefix + "\"type\":" + 4 /* Cancel */ + ",\"id\":\"" + req + "\"}";
    };
    MessageFactory.request = function (req, rpcId, method, args, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        return "{" + prefix + "\"type\":" + 1 /* Request */ + ",\"id\":\"" + req + "\",\"proxyId\":\"" + rpcId + "\",\"method\":\"" + method + "\",\"args\":" + JSON.stringify(args, ObjectsTransferrer.replacer) + "}";
    };
    MessageFactory.replyOK = function (req, res, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        if (typeof res === 'undefined') {
            return "{" + prefix + "\"type\":" + 2 /* Reply */ + ",\"id\":\"" + req + "\"}";
        }
        return "{" + prefix + "\"type\":" + 2 /* Reply */ + ",\"id\":\"" + req + "\",\"res\":" + JSON.stringify(res, ObjectsTransferrer.replacer) + "}";
    };
    MessageFactory.replyErr = function (req, err, messageToSendHostId) {
        var prefix = '';
        if (messageToSendHostId) {
            prefix = "\"hostID\":\"" + messageToSendHostId + "\",";
        }
        err = typeof err === 'string' ? new Error(err) : err;
        if (err instanceof Error) {
            return "{" + prefix + "\"type\":" + 3 /* ReplyErr */ + ",\"id\":\"" + req + "\",\"err\":" + JSON.stringify(transformErrorForSerialization(err)) + "}";
        }
        return "{" + prefix + "\"type\":" + 3 /* ReplyErr */ + ",\"id\":\"" + req + "\",\"err\":null}";
    };
    return MessageFactory;
}());
/**
 * These functions are responsible for correct transferring objects via rpc channel.
 *
 * To reach that some specific kind of objects is converted to json in some custom way
 * and then, after receiving, revived to objects again,
 * so there is feeling that object was transferred via rpc channel.
 *
 * To distinguish between regular and altered objects, field $type is added to altered ones.
 * Also value of that field specifies kind of the object.
 */
var ObjectsTransferrer;
(function (ObjectsTransferrer) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function replacer(key, value) {
        if (value instanceof uri_1.default) {
            return {
                $type: SerializedObjectType.THEIA_URI,
                data: value.toString()
            };
        }
        else if (value instanceof types_impl_1.Range) {
            var range = value;
            var serializedValue = {
                start: {
                    line: range.start.line,
                    character: range.start.character
                },
                end: {
                    line: range.end.line,
                    character: range.end.character
                }
            };
            return {
                $type: SerializedObjectType.THEIA_RANGE,
                data: JSON.stringify(serializedValue)
            };
        }
        else if (value && value['$mid'] === 1) {
            // Given value is VSCode URI
            // We cannot use instanceof here because VSCode URI has toJSON method which is invoked before this replacer.
            var uri = vscode_uri_1.URI.revive(value);
            return {
                $type: SerializedObjectType.VSCODE_URI,
                data: uri.toString()
            };
        }
        return value;
    }
    ObjectsTransferrer.replacer = replacer;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function reviver(key, value) {
        if (isSerializedObject(value)) {
            switch (value.$type) {
                case SerializedObjectType.THEIA_URI:
                    return new uri_1.default(value.data);
                case SerializedObjectType.VSCODE_URI:
                    return vscode_uri_1.URI.parse(value.data);
                case SerializedObjectType.THEIA_RANGE:
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    var obj = JSON.parse(value.data);
                    var start = new types_impl_1.Position(obj.start.line, obj.start.character);
                    var end = new types_impl_1.Position(obj.end.line, obj.end.character);
                    return new types_impl_1.Range(start, end);
            }
        }
        return value;
    }
    ObjectsTransferrer.reviver = reviver;
})(ObjectsTransferrer || (ObjectsTransferrer = {}));
var SerializedObjectType;
(function (SerializedObjectType) {
    SerializedObjectType[SerializedObjectType["THEIA_URI"] = 0] = "THEIA_URI";
    SerializedObjectType[SerializedObjectType["VSCODE_URI"] = 1] = "VSCODE_URI";
    SerializedObjectType[SerializedObjectType["THEIA_RANGE"] = 2] = "THEIA_RANGE";
})(SerializedObjectType || (SerializedObjectType = {}));
function isSerializedObject(obj) {
    return obj && obj.$type !== undefined && obj.data !== undefined;
}
var CancelMessage = /** @class */ (function () {
    function CancelMessage() {
    }
    return CancelMessage;
}());
var RequestMessage = /** @class */ (function () {
    function RequestMessage() {
    }
    return RequestMessage;
}());
var ReplyMessage = /** @class */ (function () {
    function ReplyMessage() {
    }
    return ReplyMessage;
}());
var ReplyErrMessage = /** @class */ (function () {
    function ReplyErrMessage() {
    }
    return ReplyErrMessage;
}());
function transformErrorForSerialization(error) {
    if (error instanceof Error) {
        var name_1 = error.name, message = error.message;
        var stack = error.stacktrace || error.stack;
        return {
            $isError: true,
            name: name_1,
            message: message,
            stack: stack
        };
    }
    // return as is
    return error;
}
exports.transformErrorForSerialization = transformErrorForSerialization;


/***/ }),

/***/ "../../packages/plugin-ext/lib/common/uri-components.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/common/uri-components.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/documents-main.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/documents-main.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/editor/untitled-resource.js":
/*!*********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/editor/untitled-resource.js ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/menus/menus-contribution-handler.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/plugin-shared-style.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/plugin-shared-style.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/scm-main.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/scm-main.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/plugin-view-widget.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/plugin-view-widget.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/tree-view-widget.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/tree-view-widget.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/view/view-context-key-service.js":
/*!**************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/view/view-context-key-service.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-environment.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-environment.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-preferences.js":
/*!************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-preferences.js ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-resource-cache.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-resource-cache.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview-theme-data-provider.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/browser/webview/webview.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/browser/webview/webview.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/main/common/webview-protocol.js":
/*!************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/main/common/webview-protocol.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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


/***/ }),

/***/ "../../packages/plugin-ext/lib/plugin/markdown-string.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/plugin/markdown-string.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
exports.isMarkdownString = exports.MarkdownString = void 0;
var MarkdownString = /** @class */ (function () {
    function MarkdownString(value) {
        this.value = value || '';
    }
    MarkdownString.prototype.appendText = function (value) {
        // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
        this.value += value.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&');
        return this;
    };
    MarkdownString.prototype.appendMarkdown = function (value) {
        this.value += value;
        return this;
    };
    MarkdownString.prototype.appendCodeblock = function (code, language) {
        if (language === void 0) { language = ''; }
        this.value += '\n```';
        this.value += language;
        this.value += '\n';
        this.value += code;
        this.value += '\n```\n';
        return this;
    };
    return MarkdownString;
}());
exports.MarkdownString = MarkdownString;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isMarkdownString(thing) {
    if (thing instanceof MarkdownString) {
        return true;
    }
    else if (thing && typeof thing === 'object') {
        return typeof thing.value === 'string'
            && (typeof thing.isTrusted === 'boolean' || thing.isTrusted === undefined);
    }
    return false;
}
exports.isMarkdownString = isMarkdownString;


/***/ }),

/***/ "../../packages/plugin-ext/lib/plugin/type-converters.js":
/*!******************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/plugin/type-converters.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginToPluginInfo = exports.pathOrURIToURI = exports.ThemableDecorationAttachmentRenderOptions = exports.ThemableDecorationRenderOptions = exports.DecorationRangeBehavior = exports.DecorationRenderOptions = exports.quickPickItemToPickOpenItem = exports.fromColorPresentation = exports.toColor = exports.fromColor = exports.fromFoldingRangeKind = exports.fromFoldingRange = exports.fromSelectionRange = exports.toSymbolInformation = exports.fromSymbolInformation = exports.getShellExecutionOptions = exports.getShellArgs = exports.getShellExecution = exports.getProcessExecution = exports.fromShellExecution = exports.fromProcessExecution = exports.toTask = exports.fromTask = exports.toWorkspaceFolder = exports.toCallHierarchyOutgoingCall = exports.toCallHierarchyIncomingCall = exports.toCallHierarchyItem = exports.fromCallHierarchyItem = exports.toLocation = exports.isModelCallHierarchyOutgoingCall = exports.isModelCallHierarchyIncomingCall = exports.isModelCallHierarchyItem = exports.isUriComponents = exports.isModelRange = exports.isModelLocation = exports.toSymbolTag = exports.fromSymbolTag = exports.toDocumentSymbol = exports.fromDocumentSymbol = exports.SymbolKind = exports.fromWorkspaceEdit = exports.SignatureHelp = exports.SignatureInformation = exports.ParameterInformation = exports.fromDocumentHighlight = exports.fromDocumentHighlightKind = exports.fromDocumentLink = exports.fromDefinitionLink = exports.fromLocation = exports.fromHover = exports.convertDiagnosticToMarkerData = exports.fromLanguageSelector = exports.fromTextEdit = exports.toCompletionItemKind = exports.fromCompletionItemKind = exports.fromGlobPattern = exports.fromDocumentSelector = exports.toMarkdown = exports.fromMarkdown = exports.fromManyMarkdown = exports.fromRangeOrRangeWithMessage = exports.isDecorationOptionsArr = exports.toPosition = exports.fromPosition = exports.fromRange = exports.toRange = exports.fromSelection = exports.toSelection = exports.toWebviewPanelShowOptions = exports.fromViewColumn = exports.toViewColumn = void 0;
var vscode_languageserver_types_1 = __webpack_require__(/*! vscode-languageserver-types */ "../../node_modules/vscode-languageserver-types/lib/esm/main.js");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var rpc = __webpack_require__(/*! ../common/plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js");
var plugin_api_rpc_1 = __webpack_require__(/*! ../common/plugin-api-rpc */ "../../packages/plugin-ext/lib/common/plugin-api-rpc.js");
var model = __webpack_require__(/*! ../common/plugin-api-rpc-model */ "../../packages/plugin-ext/lib/common/plugin-api-rpc-model.js");
var markdown_string_1 = __webpack_require__(/*! ./markdown-string */ "../../packages/plugin-ext/lib/plugin/markdown-string.js");
var types = __webpack_require__(/*! ./types-impl */ "../../packages/plugin-ext/lib/plugin/types-impl.js");
var SIDE_GROUP = -2;
var ACTIVE_GROUP = -1;
function toViewColumn(ep) {
    if (typeof ep !== 'number') {
        return undefined;
    }
    if (ep === plugin_api_rpc_1.EditorPosition.ONE) {
        return types.ViewColumn.One;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.TWO) {
        return types.ViewColumn.Two;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.THREE) {
        return types.ViewColumn.Three;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.FOUR) {
        return types.ViewColumn.Four;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.FIVE) {
        return types.ViewColumn.Five;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.SIX) {
        return types.ViewColumn.Six;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.SEVEN) {
        return types.ViewColumn.Seven;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.EIGHT) {
        return types.ViewColumn.Eight;
    }
    else if (ep === plugin_api_rpc_1.EditorPosition.NINE) {
        return types.ViewColumn.Nine;
    }
    return undefined;
}
exports.toViewColumn = toViewColumn;
function fromViewColumn(column) {
    if (typeof column === 'number' && column >= types.ViewColumn.One) {
        return column - 1;
    }
    if (column === types.ViewColumn.Beside) {
        return SIDE_GROUP;
    }
    return ACTIVE_GROUP;
}
exports.fromViewColumn = fromViewColumn;
function toWebviewPanelShowOptions(options) {
    if (typeof options === 'object') {
        var showOptions = options;
        return {
            area: showOptions.area ? showOptions.area : types.WebviewPanelTargetArea.Main,
            viewColumn: showOptions.viewColumn ? fromViewColumn(showOptions.viewColumn) : undefined,
            preserveFocus: showOptions.preserveFocus ? showOptions.preserveFocus : false
        };
    }
    return {
        area: types.WebviewPanelTargetArea.Main,
        viewColumn: fromViewColumn(options),
        preserveFocus: false
    };
}
exports.toWebviewPanelShowOptions = toWebviewPanelShowOptions;
function toSelection(selection) {
    var selectionStartLineNumber = selection.selectionStartLineNumber, selectionStartColumn = selection.selectionStartColumn, positionLineNumber = selection.positionLineNumber, positionColumn = selection.positionColumn;
    var start = new types.Position(selectionStartLineNumber - 1, selectionStartColumn - 1);
    var end = new types.Position(positionLineNumber - 1, positionColumn - 1);
    return new types.Selection(start, end);
}
exports.toSelection = toSelection;
function fromSelection(selection) {
    var active = selection.active, anchor = selection.anchor;
    return {
        selectionStartLineNumber: anchor.line + 1,
        selectionStartColumn: anchor.character + 1,
        positionLineNumber: active.line + 1,
        positionColumn: active.character + 1
    };
}
exports.fromSelection = fromSelection;
function toRange(range) {
    // if (!range) {
    //     return undefined;
    // }
    var startLineNumber = range.startLineNumber, startColumn = range.startColumn, endLineNumber = range.endLineNumber, endColumn = range.endColumn;
    return new types.Range(startLineNumber - 1, startColumn - 1, endLineNumber - 1, endColumn - 1);
}
exports.toRange = toRange;
function fromRange(range) {
    if (!range) {
        return undefined;
    }
    var start = range.start, end = range.end;
    return {
        startLineNumber: start.line + 1,
        startColumn: start.character + 1,
        endLineNumber: end.line + 1,
        endColumn: end.character + 1
    };
}
exports.fromRange = fromRange;
function fromPosition(position) {
    return { lineNumber: position.line + 1, column: position.character + 1 };
}
exports.fromPosition = fromPosition;
function toPosition(position) {
    return new types.Position(position.lineNumber - 1, position.column - 1);
}
exports.toPosition = toPosition;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isDecorationOptions(something) {
    return (typeof something.range !== 'undefined');
}
function isDecorationOptionsArr(something) {
    if (something.length === 0) {
        return true;
    }
    return isDecorationOptions(something[0]) ? true : false;
}
exports.isDecorationOptionsArr = isDecorationOptionsArr;
function fromRangeOrRangeWithMessage(ranges) {
    if (isDecorationOptionsArr(ranges)) {
        return ranges.map(function (r) {
            var hoverMessage;
            if (Array.isArray(r.hoverMessage)) {
                hoverMessage = fromManyMarkdown(r.hoverMessage);
            }
            else if (r.hoverMessage) {
                hoverMessage = fromMarkdown(r.hoverMessage);
            }
            else {
                hoverMessage = undefined;
            }
            return {
                range: fromRange(r.range),
                hoverMessage: hoverMessage,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                renderOptions: r.renderOptions
            };
        });
    }
    else {
        return ranges.map(function (r) {
            return ({
                range: fromRange(r)
            });
        });
    }
}
exports.fromRangeOrRangeWithMessage = fromRangeOrRangeWithMessage;
function fromManyMarkdown(markup) {
    return markup.map(fromMarkdown);
}
exports.fromManyMarkdown = fromManyMarkdown;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCodeblock(thing) {
    return thing && typeof thing === 'object'
        && typeof thing.language === 'string'
        && typeof thing.value === 'string';
}
function fromMarkdown(markup) {
    if (isCodeblock(markup)) {
        var language = markup.language, value = markup.value;
        return { value: '```' + language + '\n' + value + '\n```\n' };
    }
    else if (markdown_string_1.isMarkdownString(markup)) {
        return markup;
    }
    else if (typeof markup === 'string') {
        return { value: markup };
    }
    else {
        return { value: '' };
    }
}
exports.fromMarkdown = fromMarkdown;
function toMarkdown(value) {
    var ret = new markdown_string_1.MarkdownString(value.value);
    ret.isTrusted = value.isTrusted;
    return ret;
}
exports.toMarkdown = toMarkdown;
function fromDocumentSelector(selector) {
    if (!selector) {
        return undefined;
    }
    else if (Array.isArray(selector)) {
        return selector.map(fromDocumentSelector);
    }
    else if (typeof selector === 'string') {
        return selector;
    }
    else {
        return {
            language: selector.language,
            scheme: selector.scheme,
            pattern: fromGlobPattern(selector.pattern)
        };
    }
}
exports.fromDocumentSelector = fromDocumentSelector;
function fromGlobPattern(pattern) {
    if (typeof pattern === 'string') {
        return pattern;
    }
    if (isRelativePattern(pattern)) {
        return new types.RelativePattern(pattern.base, pattern.pattern);
    }
    return pattern;
}
exports.fromGlobPattern = fromGlobPattern;
function isRelativePattern(obj) {
    var rp = obj;
    return rp && typeof rp.base === 'string' && typeof rp.pattern === 'string';
}
function fromCompletionItemKind(kind) {
    switch (kind) {
        case types.CompletionItemKind.Method: return model.CompletionItemKind.Method;
        case types.CompletionItemKind.Function: return model.CompletionItemKind.Function;
        case types.CompletionItemKind.Constructor: return model.CompletionItemKind.Constructor;
        case types.CompletionItemKind.Field: return model.CompletionItemKind.Field;
        case types.CompletionItemKind.Variable: return model.CompletionItemKind.Variable;
        case types.CompletionItemKind.Class: return model.CompletionItemKind.Class;
        case types.CompletionItemKind.Interface: return model.CompletionItemKind.Interface;
        case types.CompletionItemKind.Struct: return model.CompletionItemKind.Struct;
        case types.CompletionItemKind.Module: return model.CompletionItemKind.Module;
        case types.CompletionItemKind.Property: return model.CompletionItemKind.Property;
        case types.CompletionItemKind.Unit: return model.CompletionItemKind.Unit;
        case types.CompletionItemKind.Value: return model.CompletionItemKind.Value;
        case types.CompletionItemKind.Constant: return model.CompletionItemKind.Constant;
        case types.CompletionItemKind.Enum: return model.CompletionItemKind.Enum;
        case types.CompletionItemKind.EnumMember: return model.CompletionItemKind.EnumMember;
        case types.CompletionItemKind.Keyword: return model.CompletionItemKind.Keyword;
        case types.CompletionItemKind.Snippet: return model.CompletionItemKind.Snippet;
        case types.CompletionItemKind.Text: return model.CompletionItemKind.Text;
        case types.CompletionItemKind.Color: return model.CompletionItemKind.Color;
        case types.CompletionItemKind.File: return model.CompletionItemKind.File;
        case types.CompletionItemKind.Reference: return model.CompletionItemKind.Reference;
        case types.CompletionItemKind.Folder: return model.CompletionItemKind.Folder;
        case types.CompletionItemKind.Event: return model.CompletionItemKind.Event;
        case types.CompletionItemKind.Operator: return model.CompletionItemKind.Operator;
        case types.CompletionItemKind.TypeParameter: return model.CompletionItemKind.TypeParameter;
    }
    return model.CompletionItemKind.Property;
}
exports.fromCompletionItemKind = fromCompletionItemKind;
function toCompletionItemKind(kind) {
    switch (kind) {
        case model.CompletionItemKind.Method: return types.CompletionItemKind.Method;
        case model.CompletionItemKind.Function: return types.CompletionItemKind.Function;
        case model.CompletionItemKind.Constructor: return types.CompletionItemKind.Constructor;
        case model.CompletionItemKind.Field: return types.CompletionItemKind.Field;
        case model.CompletionItemKind.Variable: return types.CompletionItemKind.Variable;
        case model.CompletionItemKind.Class: return types.CompletionItemKind.Class;
        case model.CompletionItemKind.Interface: return types.CompletionItemKind.Interface;
        case model.CompletionItemKind.Struct: return types.CompletionItemKind.Struct;
        case model.CompletionItemKind.Module: return types.CompletionItemKind.Module;
        case model.CompletionItemKind.Property: return types.CompletionItemKind.Property;
        case model.CompletionItemKind.Unit: return types.CompletionItemKind.Unit;
        case model.CompletionItemKind.Value: return types.CompletionItemKind.Value;
        case model.CompletionItemKind.Constant: return types.CompletionItemKind.Constant;
        case model.CompletionItemKind.Enum: return types.CompletionItemKind.Enum;
        case model.CompletionItemKind.EnumMember: return types.CompletionItemKind.EnumMember;
        case model.CompletionItemKind.Keyword: return types.CompletionItemKind.Keyword;
        case model.CompletionItemKind.Snippet: return types.CompletionItemKind.Snippet;
        case model.CompletionItemKind.Text: return types.CompletionItemKind.Text;
        case model.CompletionItemKind.Color: return types.CompletionItemKind.Color;
        case model.CompletionItemKind.File: return types.CompletionItemKind.File;
        case model.CompletionItemKind.Reference: return types.CompletionItemKind.Reference;
        case model.CompletionItemKind.Folder: return types.CompletionItemKind.Folder;
        case model.CompletionItemKind.Event: return types.CompletionItemKind.Event;
        case model.CompletionItemKind.Operator: return types.CompletionItemKind.Operator;
        case model.CompletionItemKind.TypeParameter: return types.CompletionItemKind.TypeParameter;
    }
    return types.CompletionItemKind.Property;
}
exports.toCompletionItemKind = toCompletionItemKind;
function fromTextEdit(edit) {
    return {
        text: edit.newText,
        range: fromRange(edit.range)
    };
}
exports.fromTextEdit = fromTextEdit;
function fromLanguageSelector(selector) {
    if (!selector) {
        return undefined;
    }
    else if (Array.isArray(selector)) {
        return selector.map(fromLanguageSelector);
    }
    else if (typeof selector === 'string') {
        return selector;
    }
    else {
        return {
            language: selector.language,
            scheme: selector.scheme,
            pattern: fromGlobPattern(selector.pattern)
        };
    }
}
exports.fromLanguageSelector = fromLanguageSelector;
function convertDiagnosticToMarkerData(diagnostic) {
    return {
        code: convertCode(diagnostic.code),
        severity: convertSeverity(diagnostic.severity),
        message: diagnostic.message,
        source: diagnostic.source,
        startLineNumber: diagnostic.range.start.line + 1,
        startColumn: diagnostic.range.start.character + 1,
        endLineNumber: diagnostic.range.end.line + 1,
        endColumn: diagnostic.range.end.character + 1,
        relatedInformation: convertRelatedInformation(diagnostic.relatedInformation),
        tags: convertTags(diagnostic.tags)
    };
}
exports.convertDiagnosticToMarkerData = convertDiagnosticToMarkerData;
function convertCode(code) {
    if (typeof code === 'number') {
        return String(code);
    }
    else {
        return code;
    }
}
function convertSeverity(severity) {
    switch (severity) {
        case types.DiagnosticSeverity.Error: return types.MarkerSeverity.Error;
        case types.DiagnosticSeverity.Warning: return types.MarkerSeverity.Warning;
        case types.DiagnosticSeverity.Information: return types.MarkerSeverity.Info;
        case types.DiagnosticSeverity.Hint: return types.MarkerSeverity.Hint;
    }
}
function convertRelatedInformation(diagnosticsRelatedInformation) {
    var e_1, _a;
    if (!diagnosticsRelatedInformation) {
        return undefined;
    }
    var relatedInformation = [];
    try {
        for (var diagnosticsRelatedInformation_1 = __values(diagnosticsRelatedInformation), diagnosticsRelatedInformation_1_1 = diagnosticsRelatedInformation_1.next(); !diagnosticsRelatedInformation_1_1.done; diagnosticsRelatedInformation_1_1 = diagnosticsRelatedInformation_1.next()) {
            var item = diagnosticsRelatedInformation_1_1.value;
            relatedInformation.push({
                resource: item.location.uri.toString(),
                message: item.message,
                startLineNumber: item.location.range.start.line + 1,
                startColumn: item.location.range.start.character + 1,
                endLineNumber: item.location.range.end.line + 1,
                endColumn: item.location.range.end.character + 1
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (diagnosticsRelatedInformation_1_1 && !diagnosticsRelatedInformation_1_1.done && (_a = diagnosticsRelatedInformation_1.return)) _a.call(diagnosticsRelatedInformation_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return relatedInformation;
}
function convertTags(tags) {
    var e_2, _a;
    if (!tags) {
        return undefined;
    }
    var markerTags = [];
    try {
        for (var tags_1 = __values(tags), tags_1_1 = tags_1.next(); !tags_1_1.done; tags_1_1 = tags_1.next()) {
            var tag = tags_1_1.value;
            switch (tag) {
                case types.DiagnosticTag.Unnecessary: markerTags.push(types.MarkerTag.Unnecessary);
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (tags_1_1 && !tags_1_1.done && (_a = tags_1.return)) _a.call(tags_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return markerTags;
}
function fromHover(hover) {
    return {
        range: fromRange(hover.range),
        contents: fromManyMarkdown(hover.contents)
    };
}
exports.fromHover = fromHover;
function fromLocation(location) {
    return {
        uri: location.uri,
        range: fromRange(location.range)
    };
}
exports.fromLocation = fromLocation;
function fromDefinitionLink(definitionLink) {
    return {
        uri: definitionLink.targetUri,
        range: fromRange(definitionLink.targetRange),
        originSelectionRange: definitionLink.originSelectionRange ? fromRange(definitionLink.originSelectionRange) : undefined,
        targetSelectionRange: definitionLink.targetSelectionRange ? fromRange(definitionLink.targetSelectionRange) : undefined
    };
}
exports.fromDefinitionLink = fromDefinitionLink;
function fromDocumentLink(definitionLink) {
    return {
        range: fromRange(definitionLink.range),
        url: definitionLink.target && definitionLink.target.toString()
    };
}
exports.fromDocumentLink = fromDocumentLink;
function fromDocumentHighlightKind(kind) {
    switch (kind) {
        case types.DocumentHighlightKind.Text: return model.DocumentHighlightKind.Text;
        case types.DocumentHighlightKind.Read: return model.DocumentHighlightKind.Read;
        case types.DocumentHighlightKind.Write: return model.DocumentHighlightKind.Write;
    }
    return model.DocumentHighlightKind.Text;
}
exports.fromDocumentHighlightKind = fromDocumentHighlightKind;
function fromDocumentHighlight(documentHighlight) {
    return {
        range: fromRange(documentHighlight.range),
        kind: fromDocumentHighlightKind(documentHighlight.kind)
    };
}
exports.fromDocumentHighlight = fromDocumentHighlight;
var ParameterInformation;
(function (ParameterInformation) {
    function from(info) {
        return {
            label: info.label,
            documentation: info.documentation ? fromMarkdown(info.documentation) : undefined
        };
    }
    ParameterInformation.from = from;
    function to(info) {
        return {
            label: info.label,
            documentation: markdown_string_1.isMarkdownString(info.documentation) ? toMarkdown(info.documentation) : info.documentation
        };
    }
    ParameterInformation.to = to;
})(ParameterInformation = exports.ParameterInformation || (exports.ParameterInformation = {}));
var SignatureInformation;
(function (SignatureInformation) {
    function from(info) {
        return {
            label: info.label,
            documentation: info.documentation ? fromMarkdown(info.documentation) : undefined,
            parameters: info.parameters && info.parameters.map(ParameterInformation.from)
        };
    }
    SignatureInformation.from = from;
    function to(info) {
        return {
            label: info.label,
            documentation: markdown_string_1.isMarkdownString(info.documentation) ? toMarkdown(info.documentation) : info.documentation,
            parameters: info.parameters && info.parameters.map(ParameterInformation.to)
        };
    }
    SignatureInformation.to = to;
})(SignatureInformation = exports.SignatureInformation || (exports.SignatureInformation = {}));
var SignatureHelp;
(function (SignatureHelp) {
    function from(id, help) {
        return {
            id: id,
            activeSignature: help.activeSignature,
            activeParameter: help.activeParameter,
            signatures: help.signatures && help.signatures.map(SignatureInformation.from)
        };
    }
    SignatureHelp.from = from;
    function to(help) {
        return {
            activeSignature: help.activeSignature,
            activeParameter: help.activeParameter,
            signatures: help.signatures && help.signatures.map(SignatureInformation.to)
        };
    }
    SignatureHelp.to = to;
})(SignatureHelp = exports.SignatureHelp || (exports.SignatureHelp = {}));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromWorkspaceEdit(value, documents) {
    var e_3, _a;
    var result = {
        edits: []
    };
    try {
        for (var _b = __values(value._allEntries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var entry = _c.value;
            var _d = __read(entry, 2), uri = _d[0], uriOrEdits = _d[1];
            if (Array.isArray(uriOrEdits)) {
                // text edits
                var doc = documents ? documents.getDocument(uri.toString()) : undefined;
                result.edits.push({ resource: uri, modelVersionId: doc && doc.version, edits: uriOrEdits.map(fromTextEdit) });
            }
            else {
                // resource edits
                result.edits.push({ oldUri: uri, newUri: uriOrEdits, options: entry[2] });
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
exports.fromWorkspaceEdit = fromWorkspaceEdit;
var SymbolKind;
(function (SymbolKind) {
    var fromMapping = Object.create(null);
    fromMapping[model.SymbolKind.File] = model.SymbolKind.File;
    fromMapping[model.SymbolKind.Module] = model.SymbolKind.Module;
    fromMapping[model.SymbolKind.Namespace] = model.SymbolKind.Namespace;
    fromMapping[model.SymbolKind.Package] = model.SymbolKind.Package;
    fromMapping[model.SymbolKind.Class] = model.SymbolKind.Class;
    fromMapping[model.SymbolKind.Method] = model.SymbolKind.Method;
    fromMapping[model.SymbolKind.Property] = model.SymbolKind.Property;
    fromMapping[model.SymbolKind.Field] = model.SymbolKind.Field;
    fromMapping[model.SymbolKind.Constructor] = model.SymbolKind.Constructor;
    fromMapping[model.SymbolKind.Enum] = model.SymbolKind.Enum;
    fromMapping[model.SymbolKind.Interface] = model.SymbolKind.Interface;
    fromMapping[model.SymbolKind.Function] = model.SymbolKind.Function;
    fromMapping[model.SymbolKind.Variable] = model.SymbolKind.Variable;
    fromMapping[model.SymbolKind.Constant] = model.SymbolKind.Constant;
    fromMapping[model.SymbolKind.String] = model.SymbolKind.String;
    fromMapping[model.SymbolKind.Number] = model.SymbolKind.Number;
    fromMapping[model.SymbolKind.Boolean] = model.SymbolKind.Boolean;
    fromMapping[model.SymbolKind.Array] = model.SymbolKind.Array;
    fromMapping[model.SymbolKind.Object] = model.SymbolKind.Object;
    fromMapping[model.SymbolKind.Key] = model.SymbolKind.Key;
    fromMapping[model.SymbolKind.Null] = model.SymbolKind.Null;
    fromMapping[model.SymbolKind.EnumMember] = model.SymbolKind.EnumMember;
    fromMapping[model.SymbolKind.Struct] = model.SymbolKind.Struct;
    fromMapping[model.SymbolKind.Event] = model.SymbolKind.Event;
    fromMapping[model.SymbolKind.Operator] = model.SymbolKind.Operator;
    fromMapping[model.SymbolKind.TypeParameter] = model.SymbolKind.TypeParameter;
    function fromSymbolKind(kind) {
        return fromMapping[kind] || model.SymbolKind.Property;
    }
    SymbolKind.fromSymbolKind = fromSymbolKind;
    function toSymbolKind(kind) {
        for (var k in fromMapping) {
            if (fromMapping[k] === kind) {
                return Number(k);
            }
        }
        return model.SymbolKind.Property;
    }
    SymbolKind.toSymbolKind = toSymbolKind;
})(SymbolKind = exports.SymbolKind || (exports.SymbolKind = {}));
function fromDocumentSymbol(info) {
    var result = {
        name: info.name,
        detail: info.detail,
        range: fromRange(info.range),
        tags: info.tags ? info.tags.map(fromSymbolTag) : [],
        selectionRange: fromRange(info.selectionRange),
        kind: SymbolKind.fromSymbolKind(info.kind)
    };
    if (info.children) {
        result.children = info.children.map(fromDocumentSymbol);
    }
    return result;
}
exports.fromDocumentSymbol = fromDocumentSymbol;
function toDocumentSymbol(symbol) {
    return {
        name: symbol.name,
        detail: symbol.detail,
        range: toRange(symbol.range),
        tags: symbol.tags && symbol.tags.length > 0 ? symbol.tags.map(toSymbolTag) : [],
        selectionRange: toRange(symbol.selectionRange),
        children: symbol.children ? symbol.children.map(toDocumentSymbol) : [],
        kind: SymbolKind.toSymbolKind(symbol.kind)
    };
}
exports.toDocumentSymbol = toDocumentSymbol;
function fromSymbolTag(kind) {
    switch (kind) {
        case types.SymbolTag.Deprecated: return model.SymbolTag.Deprecated;
    }
}
exports.fromSymbolTag = fromSymbolTag;
function toSymbolTag(kind) {
    switch (kind) {
        case model.SymbolTag.Deprecated: return types.SymbolTag.Deprecated;
    }
}
exports.toSymbolTag = toSymbolTag;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelLocation(thing) {
    if (!thing) {
        return false;
    }
    return isModelRange(thing.range) &&
        isUriComponents(thing.uri);
}
exports.isModelLocation = isModelLocation;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelRange(thing) {
    if (!thing) {
        return false;
    }
    return (('startLineNumber' in thing) && typeof thing.startLineNumber === 'number') &&
        (('startColumn' in thing) && typeof thing.startColumn === 'number') &&
        (('endLineNumber' in thing) && typeof thing.endLineNumber === 'number') &&
        (('endColumn' in thing) && typeof thing.endColumn === 'number');
}
exports.isModelRange = isModelRange;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isUriComponents(thing) {
    if (!thing) {
        return false;
    }
    return (('scheme' in thing) && typeof thing.scheme === 'string') &&
        (('path' in thing) && typeof thing.path === 'string') &&
        (('query' in thing) && typeof thing.query === 'string') &&
        (('fragment' in thing) && typeof thing.fragment === 'string');
}
exports.isUriComponents = isUriComponents;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyItem(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyItem = isModelCallHierarchyItem;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyIncomingCall(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyIncomingCall = isModelCallHierarchyIncomingCall;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isModelCallHierarchyOutgoingCall(thing) {
    if (!thing) {
        return false;
    }
    return false;
}
exports.isModelCallHierarchyOutgoingCall = isModelCallHierarchyOutgoingCall;
function toLocation(value) {
    return new types.Location(vscode_uri_1.URI.revive(value.uri), toRange(value.range));
}
exports.toLocation = toLocation;
function fromCallHierarchyItem(item) {
    return {
        kind: SymbolKind.fromSymbolKind(item.kind),
        name: item.name,
        detail: item.detail,
        uri: item.uri,
        range: fromRange(item.range),
        selectionRange: fromRange(item.selectionRange)
    };
}
exports.fromCallHierarchyItem = fromCallHierarchyItem;
function toCallHierarchyItem(value) {
    return new types.CallHierarchyItem(SymbolKind.toSymbolKind(value.kind), value.name, value.detail ? value.detail : '', vscode_uri_1.URI.revive(value.uri), toRange(value.range), toRange(value.selectionRange));
}
exports.toCallHierarchyItem = toCallHierarchyItem;
function toCallHierarchyIncomingCall(value) {
    return new types.CallHierarchyIncomingCall(toCallHierarchyItem(value.from), value.fromRanges && value.fromRanges.map(toRange));
}
exports.toCallHierarchyIncomingCall = toCallHierarchyIncomingCall;
function toCallHierarchyOutgoingCall(value) {
    return new types.CallHierarchyOutgoingCall(toCallHierarchyItem(value.to), value.fromRanges && value.fromRanges.map(toRange));
}
exports.toCallHierarchyOutgoingCall = toCallHierarchyOutgoingCall;
function toWorkspaceFolder(folder) {
    return {
        uri: vscode_uri_1.URI.revive(folder.uri),
        name: folder.name,
        index: folder.index
    };
}
exports.toWorkspaceFolder = toWorkspaceFolder;
function fromTask(task) {
    if (!task) {
        return undefined;
    }
    var taskDto = {};
    taskDto.label = task.name;
    taskDto.source = task.source;
    if (typeof task.scope === 'object') {
        taskDto.scope = task.scope.uri.toString();
    }
    else if (typeof task.scope === 'number') {
        taskDto.scope = task.scope;
    }
    var taskDefinition = task.definition;
    if (!taskDefinition) {
        return taskDto;
    }
    taskDto.type = taskDefinition.type;
    var type = taskDefinition.type, properties = __rest(taskDefinition, ["type"]);
    for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
            taskDto[key] = properties[key];
        }
    }
    var execution = task.execution;
    if (!execution) {
        return taskDto;
    }
    if (taskDefinition.type === 'shell' || types.ShellExecution.is(execution)) {
        return fromShellExecution(execution, taskDto);
    }
    if (taskDefinition.type === 'process' || types.ProcessExecution.is(execution)) {
        return fromProcessExecution(execution, taskDto);
    }
    return taskDto;
}
exports.fromTask = fromTask;
function toTask(taskDto) {
    if (!taskDto) {
        throw new Error('Task should be provided for converting');
    }
    var type = taskDto.type, label = taskDto.label, source = taskDto.source, scope = taskDto.scope, command = taskDto.command, args = taskDto.args, options = taskDto.options, windows = taskDto.windows, properties = __rest(taskDto, ["type", "label", "source", "scope", "command", "args", "options", "windows"]);
    var result = {};
    result.name = label;
    result.source = source;
    if (typeof scope === 'string') {
        var uri = vscode_uri_1.URI.parse(scope);
        result.scope = {
            uri: uri,
            name: uri.toString(),
            index: 0
        };
    }
    else {
        result.scope = scope;
    }
    var taskType = type;
    var taskDefinition = {
        type: taskType
    };
    result.definition = taskDefinition;
    if (taskType === 'process') {
        result.execution = getProcessExecution(taskDto);
    }
    var execution = { command: command, args: args, options: options };
    if (taskType === 'shell' || types.ShellExecution.is(execution)) {
        result.execution = getShellExecution(taskDto);
    }
    if (!properties) {
        return result;
    }
    for (var key in properties) {
        if (properties.hasOwnProperty(key)) {
            taskDefinition[key] = properties[key];
        }
    }
    return result;
}
exports.toTask = toTask;
function fromProcessExecution(execution, taskDto) {
    taskDto.command = execution.process;
    taskDto.args = execution.args;
    var options = execution.options;
    if (options) {
        taskDto.options = options;
    }
    return taskDto;
}
exports.fromProcessExecution = fromProcessExecution;
function fromShellExecution(execution, taskDto) {
    var options = execution.options;
    if (options) {
        taskDto.options = getShellExecutionOptions(options);
    }
    var commandLine = execution.commandLine;
    if (commandLine) {
        taskDto.command = commandLine;
        return taskDto;
    }
    var command = execution.command;
    if (typeof command === 'string') {
        taskDto.command = command;
        taskDto.args = getShellArgs(execution.args);
        return taskDto;
    }
    else {
        throw new Error('Converting ShellQuotedString command is not implemented');
    }
}
exports.fromShellExecution = fromShellExecution;
function getProcessExecution(taskDto) {
    return new types.ProcessExecution(taskDto.command, taskDto.args || [], taskDto.options || {});
}
exports.getProcessExecution = getProcessExecution;
function getShellExecution(taskDto) {
    if (taskDto.command && Array.isArray(taskDto.args) && taskDto.args.length !== 0) {
        return new types.ShellExecution(taskDto.command, taskDto.args, taskDto.options || {});
    }
    return new types.ShellExecution(taskDto.command || taskDto.commandLine, taskDto.options || {});
}
exports.getShellExecution = getShellExecution;
function getShellArgs(args) {
    if (!args || args.length === 0) {
        return [];
    }
    var element = args[0];
    if (typeof element === 'string') {
        return args;
    }
    var result = [];
    var shellQuotedArgs = args;
    shellQuotedArgs.forEach(function (arg) {
        result.push(arg.value);
    });
    return result;
}
exports.getShellArgs = getShellArgs;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getShellExecutionOptions(options) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var result = {};
    var env = options.env;
    if (env) {
        result['env'] = env;
    }
    var executable = options.executable;
    if (executable) {
        result['executable'] = executable;
    }
    var shellQuoting = options.shellQuoting;
    if (shellQuoting) {
        result['shellQuoting'] = shellQuoting;
    }
    var shellArgs = options.shellArgs;
    if (shellArgs) {
        result['shellArgs'] = shellArgs;
    }
    var cwd = options.cwd;
    if (cwd) {
        Object.assign(result, { cwd: cwd });
    }
    return result;
}
exports.getShellExecutionOptions = getShellExecutionOptions;
function fromSymbolInformation(symbolInformation) {
    if (!symbolInformation) {
        return undefined;
    }
    if (symbolInformation.location && symbolInformation.location.range) {
        var p1 = vscode_languageserver_types_1.Position.create(symbolInformation.location.range.start.line, symbolInformation.location.range.start.character);
        var p2 = vscode_languageserver_types_1.Position.create(symbolInformation.location.range.end.line, symbolInformation.location.range.end.character);
        return vscode_languageserver_types_1.SymbolInformation.create(symbolInformation.name, symbolInformation.kind++, vscode_languageserver_types_1.Range.create(p1, p2), symbolInformation.location.uri.toString(), symbolInformation.containerName);
    }
    return {
        name: symbolInformation.name,
        containerName: symbolInformation.containerName,
        kind: symbolInformation.kind++,
        location: {
            uri: symbolInformation.location.uri.toString()
        }
    };
}
exports.fromSymbolInformation = fromSymbolInformation;
function toSymbolInformation(symbolInformation) {
    if (!symbolInformation) {
        return undefined;
    }
    return {
        name: symbolInformation.name,
        containerName: symbolInformation.containerName,
        kind: symbolInformation.kind,
        location: {
            uri: vscode_uri_1.URI.parse(symbolInformation.location.uri),
            range: symbolInformation.location.range
        }
    };
}
exports.toSymbolInformation = toSymbolInformation;
function fromSelectionRange(selectionRange) {
    return { range: fromRange(selectionRange.range) };
}
exports.fromSelectionRange = fromSelectionRange;
function fromFoldingRange(foldingRange) {
    var range = {
        start: foldingRange.start + 1,
        end: foldingRange.end + 1
    };
    if (foldingRange.kind) {
        range.kind = fromFoldingRangeKind(foldingRange.kind);
    }
    return range;
}
exports.fromFoldingRange = fromFoldingRange;
function fromFoldingRangeKind(kind) {
    if (kind) {
        switch (kind) {
            case types.FoldingRangeKind.Comment:
                return model.FoldingRangeKind.Comment;
            case types.FoldingRangeKind.Imports:
                return model.FoldingRangeKind.Imports;
            case types.FoldingRangeKind.Region:
                return model.FoldingRangeKind.Region;
        }
    }
    return undefined;
}
exports.fromFoldingRangeKind = fromFoldingRangeKind;
function fromColor(color) {
    return [color.red, color.green, color.blue, color.alpha];
}
exports.fromColor = fromColor;
function toColor(color) {
    return new types.Color(color[0], color[1], color[2], color[3]);
}
exports.toColor = toColor;
function fromColorPresentation(colorPresentation) {
    return {
        label: colorPresentation.label,
        textEdit: colorPresentation.textEdit ? fromTextEdit(colorPresentation.textEdit) : undefined,
        additionalTextEdits: colorPresentation.additionalTextEdits ? colorPresentation.additionalTextEdits.map(function (value) { return fromTextEdit(value); }) : undefined
    };
}
exports.fromColorPresentation = fromColorPresentation;
function quickPickItemToPickOpenItem(items) {
    var pickItems = [];
    for (var handle = 0; handle < items.length; handle++) {
        var item = items[handle];
        var label = void 0;
        var description = void 0;
        var detail = void 0;
        var picked = void 0;
        var groupLabel = void 0;
        var showBorder = void 0;
        if (typeof item === 'string') {
            label = item;
        }
        else {
            (label = item.label, description = item.description, detail = item.detail, picked = item.picked, groupLabel = item.groupLabel, showBorder = item.showBorder);
        }
        pickItems.push({
            label: label,
            description: description,
            handle: handle,
            detail: detail,
            picked: picked,
            groupLabel: groupLabel,
            showBorder: showBorder
        });
    }
    return pickItems;
}
exports.quickPickItemToPickOpenItem = quickPickItemToPickOpenItem;
var DecorationRenderOptions;
(function (DecorationRenderOptions) {
    function from(options) {
        return {
            isWholeLine: options.isWholeLine,
            rangeBehavior: options.rangeBehavior ? DecorationRangeBehavior.from(options.rangeBehavior) : undefined,
            overviewRulerLane: options.overviewRulerLane,
            light: options.light ? ThemableDecorationRenderOptions.from(options.light) : undefined,
            dark: options.dark ? ThemableDecorationRenderOptions.from(options.dark) : undefined,
            backgroundColor: options.backgroundColor,
            outline: options.outline,
            outlineColor: options.outlineColor,
            outlineStyle: options.outlineStyle,
            outlineWidth: options.outlineWidth,
            border: options.border,
            borderColor: options.borderColor,
            borderRadius: options.borderRadius,
            borderSpacing: options.borderSpacing,
            borderStyle: options.borderStyle,
            borderWidth: options.borderWidth,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            cursor: options.cursor,
            color: options.color,
            opacity: options.opacity,
            letterSpacing: options.letterSpacing,
            gutterIconPath: options.gutterIconPath ? pathOrURIToURI(options.gutterIconPath) : undefined,
            gutterIconSize: options.gutterIconSize,
            overviewRulerColor: options.overviewRulerColor,
            before: options.before ? ThemableDecorationAttachmentRenderOptions.from(options.before) : undefined,
            after: options.after ? ThemableDecorationAttachmentRenderOptions.from(options.after) : undefined,
        };
    }
    DecorationRenderOptions.from = from;
})(DecorationRenderOptions = exports.DecorationRenderOptions || (exports.DecorationRenderOptions = {}));
var DecorationRangeBehavior;
(function (DecorationRangeBehavior) {
    function from(value) {
        if (typeof value === 'undefined') {
            return value;
        }
        switch (value) {
            case types.DecorationRangeBehavior.OpenOpen:
                return rpc.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges;
            case types.DecorationRangeBehavior.ClosedClosed:
                return rpc.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges;
            case types.DecorationRangeBehavior.OpenClosed:
                return rpc.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore;
            case types.DecorationRangeBehavior.ClosedOpen:
                return rpc.TrackedRangeStickiness.GrowsOnlyWhenTypingAfter;
        }
    }
    DecorationRangeBehavior.from = from;
})(DecorationRangeBehavior = exports.DecorationRangeBehavior || (exports.DecorationRangeBehavior = {}));
var ThemableDecorationRenderOptions;
(function (ThemableDecorationRenderOptions) {
    function from(options) {
        if (typeof options === 'undefined') {
            return options;
        }
        return {
            backgroundColor: options.backgroundColor,
            outline: options.outline,
            outlineColor: options.outlineColor,
            outlineStyle: options.outlineStyle,
            outlineWidth: options.outlineWidth,
            border: options.border,
            borderColor: options.borderColor,
            borderRadius: options.borderRadius,
            borderSpacing: options.borderSpacing,
            borderStyle: options.borderStyle,
            borderWidth: options.borderWidth,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            cursor: options.cursor,
            color: options.color,
            opacity: options.opacity,
            letterSpacing: options.letterSpacing,
            gutterIconPath: options.gutterIconPath ? pathOrURIToURI(options.gutterIconPath) : undefined,
            gutterIconSize: options.gutterIconSize,
            overviewRulerColor: options.overviewRulerColor,
            before: options.before ? ThemableDecorationAttachmentRenderOptions.from(options.before) : undefined,
            after: options.after ? ThemableDecorationAttachmentRenderOptions.from(options.after) : undefined,
        };
    }
    ThemableDecorationRenderOptions.from = from;
})(ThemableDecorationRenderOptions = exports.ThemableDecorationRenderOptions || (exports.ThemableDecorationRenderOptions = {}));
var ThemableDecorationAttachmentRenderOptions;
(function (ThemableDecorationAttachmentRenderOptions) {
    function from(options) {
        if (typeof options === 'undefined') {
            return options;
        }
        return {
            contentText: options.contentText,
            contentIconPath: options.contentIconPath ? pathOrURIToURI(options.contentIconPath) : undefined,
            border: options.border,
            borderColor: options.borderColor,
            fontStyle: options.fontStyle,
            fontWeight: options.fontWeight,
            textDecoration: options.textDecoration,
            color: options.color,
            backgroundColor: options.backgroundColor,
            margin: options.margin,
            width: options.width,
            height: options.height,
        };
    }
    ThemableDecorationAttachmentRenderOptions.from = from;
})(ThemableDecorationAttachmentRenderOptions = exports.ThemableDecorationAttachmentRenderOptions || (exports.ThemableDecorationAttachmentRenderOptions = {}));
function pathOrURIToURI(value) {
    if (typeof value === 'undefined') {
        return value;
    }
    if (typeof value === 'string') {
        return vscode_uri_1.URI.file(value);
    }
    else {
        return value;
    }
}
exports.pathOrURIToURI = pathOrURIToURI;
function pluginToPluginInfo(plugin) {
    return {
        id: plugin.model.id,
        name: plugin.model.name
    };
}
exports.pluginToPluginInfo = pluginToPluginInfo;


/***/ }),

/***/ "../../packages/plugin-ext/lib/plugin/types-impl.js":
/*!*************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/plugin-ext/lib/plugin/types-impl.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
// copied from https://github.com/microsoft/vscode/blob/1.37.0/src/vs/workbench/api/common/extHostTypes.ts
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Microsoft Corporation. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallHierarchyOutgoingCall = exports.CallHierarchyIncomingCall = exports.CallHierarchyItem = exports.WebviewPanelTargetArea = exports.OperatingSystem = exports.SelectionRange = exports.FoldingRangeKind = exports.FoldingRange = exports.ColorFormat = exports.ColorPresentation = exports.ColorInformation = exports.Color = exports.FunctionBreakpoint = exports.SourceBreakpoint = exports.Breakpoint = exports.LogLevel = exports.DebugAdapterServer = exports.DebugAdapterExecutable = exports.Task = exports.TaskScope = exports.TaskGroup = exports.ShellExecution = exports.TaskRevealKind = exports.TaskPanelKind = exports.ShellQuoting = exports.ProcessExecution = exports.ProgressLocation = exports.Progress = exports.ProgressOptions = exports.FileType = exports.FileSystemError = exports.CommentMode = exports.QuickInputButtons = exports.CommentThreadCollapsibleState = exports.FileChangeType = exports.DocumentSymbol = exports.SymbolInformation = exports.SymbolTag = exports.TreeItemCollapsibleState = exports.TreeItem = exports.WorkspaceEdit = exports.CodeAction = exports.TextDocumentSaveReason = exports.CodeActionKind = exports.CodeActionTrigger = exports.CodeLens = exports.DocumentLink = exports.DocumentHighlight = exports.DocumentHighlightKind = exports.Hover = exports.SignatureHelp = exports.SignatureHelpTriggerKind = exports.SignatureInformation = exports.ParameterInformation = exports.MarkerTag = exports.MarkerSeverity = exports.Diagnostic = exports.DiagnosticTag = exports.Location = exports.DiagnosticRelatedInformation = exports.DiagnosticSeverity = exports.CompletionList = exports.CompletionItem = exports.CompletionItemKind = exports.CompletionTriggerKind = exports.TextEdit = exports.IndentAction = exports.RelativePattern = exports.ConfigurationTarget = exports.OverviewRulerLane = exports.DecorationRangeBehavior = exports.TextEditorRevealType = exports.ThemeIcon = exports.ThemeColor = exports.SnippetString = exports.EndOfLine = exports.Selection = exports.Range = exports.Position = exports.TextEditorSelectionChangeKind = exports.ViewColumn = exports.TextEditorLineNumbersStyle = exports.StatusBarAlignment = exports.Disposable = void 0;
/* eslint-disable no-null/no-null */
var uuid_1 = __webpack_require__(/*! @phosphor/coreutils/lib/uuid */ "../../node_modules/@phosphor/coreutils/lib/uuid.js");
var errors_1 = __webpack_require__(/*! ../common/errors */ "../../packages/plugin-ext/lib/common/errors.js");
var crypto = __webpack_require__(/*! crypto */ "crypto");
var vscode_uri_1 = __webpack_require__(/*! vscode-uri */ "../../node_modules/vscode-uri/lib/esm/index.js");
var paths_util_1 = __webpack_require__(/*! ../common/paths-util */ "../../packages/plugin-ext/lib/common/paths-util.js");
var strings_1 = __webpack_require__(/*! @theia/languages/lib/common/language-selector/strings */ "../../packages/languages/lib/common/language-selector/strings.js");
var markdown_string_1 = __webpack_require__(/*! ./markdown-string */ "../../packages/plugin-ext/lib/plugin/markdown-string.js");
var plugin_api_rpc_model_1 = __webpack_require__(/*! ../common/plugin-api-rpc-model */ "../../packages/plugin-ext/lib/common/plugin-api-rpc-model.js");
var Disposable = /** @class */ (function () {
    function Disposable(func) {
        this.disposable = func;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Disposable.from = function () {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        return new Disposable(function () {
            var e_1, _a;
            if (disposables) {
                try {
                    for (var disposables_1 = __values(disposables), disposables_1_1 = disposables_1.next(); !disposables_1_1.done; disposables_1_1 = disposables_1.next()) {
                        var disposable = disposables_1_1.value;
                        if (disposable && typeof disposable.dispose === 'function') {
                            disposable.dispose();
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (disposables_1_1 && !disposables_1_1.done && (_a = disposables_1.return)) _a.call(disposables_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    /**
     * Dispose this object.
     */
    Disposable.prototype.dispose = function () {
        if (this.disposable) {
            this.disposable();
            this.disposable = undefined;
        }
    };
    Disposable.create = function (func) {
        return new Disposable(func);
    };
    return Disposable;
}());
exports.Disposable = Disposable;
var StatusBarAlignment;
(function (StatusBarAlignment) {
    StatusBarAlignment[StatusBarAlignment["Left"] = 1] = "Left";
    StatusBarAlignment[StatusBarAlignment["Right"] = 2] = "Right";
})(StatusBarAlignment = exports.StatusBarAlignment || (exports.StatusBarAlignment = {}));
var TextEditorLineNumbersStyle;
(function (TextEditorLineNumbersStyle) {
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["Off"] = 0] = "Off";
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["On"] = 1] = "On";
    TextEditorLineNumbersStyle[TextEditorLineNumbersStyle["Relative"] = 2] = "Relative";
})(TextEditorLineNumbersStyle = exports.TextEditorLineNumbersStyle || (exports.TextEditorLineNumbersStyle = {}));
/**
 * Denotes a column in the editor window.
 * Columns are used to show editors side by side.
 */
var ViewColumn;
(function (ViewColumn) {
    ViewColumn[ViewColumn["Active"] = -1] = "Active";
    ViewColumn[ViewColumn["Beside"] = -2] = "Beside";
    ViewColumn[ViewColumn["One"] = 1] = "One";
    ViewColumn[ViewColumn["Two"] = 2] = "Two";
    ViewColumn[ViewColumn["Three"] = 3] = "Three";
    ViewColumn[ViewColumn["Four"] = 4] = "Four";
    ViewColumn[ViewColumn["Five"] = 5] = "Five";
    ViewColumn[ViewColumn["Six"] = 6] = "Six";
    ViewColumn[ViewColumn["Seven"] = 7] = "Seven";
    ViewColumn[ViewColumn["Eight"] = 8] = "Eight";
    ViewColumn[ViewColumn["Nine"] = 9] = "Nine";
})(ViewColumn = exports.ViewColumn || (exports.ViewColumn = {}));
/**
 * Represents sources that can cause `window.onDidChangeEditorSelection`
 */
var TextEditorSelectionChangeKind;
(function (TextEditorSelectionChangeKind) {
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Keyboard"] = 1] = "Keyboard";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Mouse"] = 2] = "Mouse";
    TextEditorSelectionChangeKind[TextEditorSelectionChangeKind["Command"] = 3] = "Command";
})(TextEditorSelectionChangeKind = exports.TextEditorSelectionChangeKind || (exports.TextEditorSelectionChangeKind = {}));
(function (TextEditorSelectionChangeKind) {
    function fromValue(s) {
        switch (s) {
            case 'keyboard': return TextEditorSelectionChangeKind.Keyboard;
            case 'mouse': return TextEditorSelectionChangeKind.Mouse;
            case 'api': return TextEditorSelectionChangeKind.Command;
        }
        return undefined;
    }
    TextEditorSelectionChangeKind.fromValue = fromValue;
})(TextEditorSelectionChangeKind = exports.TextEditorSelectionChangeKind || (exports.TextEditorSelectionChangeKind = {}));
var Position = /** @class */ (function () {
    function Position(line, char) {
        if (line < 0) {
            throw new Error('line number cannot be negative');
        }
        if (char < 0) {
            throw new Error('char number cannot be negative');
        }
        this._line = line;
        this._character = char;
    }
    Object.defineProperty(Position.prototype, "line", {
        get: function () {
            return this._line;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Position.prototype, "character", {
        get: function () {
            return this._character;
        },
        enumerable: false,
        configurable: true
    });
    Position.prototype.isBefore = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character < other._character;
    };
    Position.prototype.isBeforeOrEqual = function (other) {
        if (this._line < other._line) {
            return true;
        }
        if (other._line < this._line) {
            return false;
        }
        return this._character <= other._character;
    };
    Position.prototype.isAfter = function (other) {
        return !this.isBeforeOrEqual(other);
    };
    Position.prototype.isAfterOrEqual = function (other) {
        return !this.isBefore(other);
    };
    Position.prototype.isEqual = function (other) {
        return this._line === other._line && this._character === other._character;
    };
    Position.prototype.compareTo = function (other) {
        if (this._line < other._line) {
            return -1;
        }
        else if (this._line > other.line) {
            return 1;
        }
        else {
            // equal line
            if (this._character < other._character) {
                return -1;
            }
            else if (this._character > other._character) {
                return 1;
            }
            else {
                // equal line and character
                return 0;
            }
        }
    };
    Position.prototype.translate = function (lineDeltaOrChange, characterDelta) {
        if (characterDelta === void 0) { characterDelta = 0; }
        if (lineDeltaOrChange === null || characterDelta === null) {
            throw errors_1.illegalArgument();
        }
        var lineDelta;
        if (typeof lineDeltaOrChange === 'undefined') {
            lineDelta = 0;
        }
        else if (typeof lineDeltaOrChange === 'number') {
            lineDelta = lineDeltaOrChange;
        }
        else {
            lineDelta = typeof lineDeltaOrChange.lineDelta === 'number' ? lineDeltaOrChange.lineDelta : 0;
            characterDelta = typeof lineDeltaOrChange.characterDelta === 'number' ? lineDeltaOrChange.characterDelta : 0;
        }
        if (lineDelta === 0 && characterDelta === 0) {
            return this;
        }
        return new Position(this.line + lineDelta, this.character + characterDelta);
    };
    Position.prototype.with = function (lineOrChange, character) {
        if (character === void 0) { character = this.character; }
        if (lineOrChange === null || character === null) {
            throw errors_1.illegalArgument();
        }
        var line;
        if (typeof lineOrChange === 'undefined') {
            line = this.line;
        }
        else if (typeof lineOrChange === 'number') {
            line = lineOrChange;
        }
        else {
            line = typeof lineOrChange.line === 'number' ? lineOrChange.line : this.line;
            character = typeof lineOrChange.character === 'number' ? lineOrChange.character : this.character;
        }
        if (line === this.line && character === this.character) {
            return this;
        }
        return new Position(line, character);
    };
    Position.Min = function () {
        var e_2, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var result = positions.pop();
        try {
            for (var positions_1 = __values(positions), positions_1_1 = positions_1.next(); !positions_1_1.done; positions_1_1 = positions_1.next()) {
                var p = positions_1_1.value;
                if (p.isBefore(result)) {
                    result = p;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (positions_1_1 && !positions_1_1.done && (_a = positions_1.return)) _a.call(positions_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    Position.Max = function () {
        var e_3, _a;
        var positions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            positions[_i] = arguments[_i];
        }
        var result = positions.pop();
        try {
            for (var positions_2 = __values(positions), positions_2_1 = positions_2.next(); !positions_2_1.done; positions_2_1 = positions_2.next()) {
                var p = positions_2_1.value;
                if (p.isAfter(result)) {
                    result = p;
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (positions_2_1 && !positions_2_1.done && (_a = positions_2.return)) _a.call(positions_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    Position.isPosition = function (other) {
        if (!other) {
            return false;
        }
        if (other instanceof Position) {
            return true;
        }
        var _a = other, line = _a.line, character = _a.character;
        if (typeof line === 'number' && typeof character === 'number') {
            return true;
        }
        return false;
    };
    return Position;
}());
exports.Position = Position;
var Range = /** @class */ (function () {
    function Range(startLineOrStart, startColumnOrEnd, endLine, endColumn) {
        var start = undefined;
        var end = undefined;
        if (typeof startLineOrStart === 'number' && typeof startColumnOrEnd === 'number' && typeof endLine === 'number' && typeof endColumn === 'number') {
            start = new Position(startLineOrStart, startColumnOrEnd);
            end = new Position(endLine, endColumn);
        }
        else if (startLineOrStart instanceof Position && startColumnOrEnd instanceof Position) {
            start = startLineOrStart;
            end = startColumnOrEnd;
        }
        if (!start || !end) {
            throw new Error('Invalid arguments');
        }
        if (start.isBefore(end)) {
            this._start = start;
            this._end = end;
        }
        else {
            this._start = end;
            this._end = start;
        }
    }
    Object.defineProperty(Range.prototype, "start", {
        get: function () {
            return this._start;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "end", {
        get: function () {
            return this._end;
        },
        enumerable: false,
        configurable: true
    });
    Range.prototype.contains = function (positionOrRange) {
        if (positionOrRange instanceof Range) {
            return this.contains(positionOrRange._start)
                && this.contains(positionOrRange._end);
        }
        else if (positionOrRange instanceof Position) {
            if (positionOrRange.isBefore(this._start)) {
                return false;
            }
            if (this._end.isBefore(positionOrRange)) {
                return false;
            }
            return true;
        }
        return false;
    };
    Range.prototype.isEqual = function (other) {
        return this._start.isEqual(other._start) && this._end.isEqual(other._end);
    };
    Range.prototype.intersection = function (other) {
        var start = Position.Max(other.start, this._start);
        var end = Position.Min(other.end, this._end);
        if (start.isAfter(end)) {
            // this happens when there is no overlap:
            // |-----|
            //          |----|
            return undefined;
        }
        return new Range(start, end);
    };
    Range.prototype.union = function (other) {
        if (this.contains(other)) {
            return this;
        }
        else if (other.contains(this)) {
            return other;
        }
        var start = Position.Min(other.start, this._start);
        var end = Position.Max(other.end, this.end);
        return new Range(start, end);
    };
    Object.defineProperty(Range.prototype, "isEmpty", {
        get: function () {
            return this._start.isEqual(this._end);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Range.prototype, "isSingleLine", {
        get: function () {
            return this._start.line === this._end.line;
        },
        enumerable: false,
        configurable: true
    });
    Range.prototype.with = function (startOrChange, end) {
        if (end === void 0) { end = this.end; }
        if (startOrChange === null || end === null) {
            throw errors_1.illegalArgument();
        }
        var start;
        if (!startOrChange) {
            start = this.start;
        }
        else if (Position.isPosition(startOrChange)) {
            start = startOrChange;
        }
        else {
            start = startOrChange.start || this.start;
            end = startOrChange.end || this.end;
        }
        if (start.isEqual(this._start) && end.isEqual(this.end)) {
            return this;
        }
        return new Range(start, end);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Range.isRange = function (thing) {
        if (thing instanceof Range) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Position.isPosition(thing.start)
            && Position.isPosition(thing.end);
    };
    return Range;
}());
exports.Range = Range;
var Selection = /** @class */ (function (_super) {
    __extends(Selection, _super);
    function Selection(anchorLineOrAnchor, anchorColumnOrActive, activeLine, activeColumn) {
        var _this = this;
        var anchor = undefined;
        var active = undefined;
        if (typeof anchorLineOrAnchor === 'number' && typeof anchorColumnOrActive === 'number' && typeof activeLine === 'number' && typeof activeColumn === 'number') {
            anchor = new Position(anchorLineOrAnchor, anchorColumnOrActive);
            active = new Position(activeLine, activeColumn);
        }
        else if (anchorLineOrAnchor instanceof Position && anchorColumnOrActive instanceof Position) {
            anchor = anchorLineOrAnchor;
            active = anchorColumnOrActive;
        }
        if (!anchor || !active) {
            throw new Error('Invalid arguments');
        }
        _this = _super.call(this, anchor, active) || this;
        _this._anchor = anchor;
        _this._active = active;
        return _this;
    }
    Object.defineProperty(Selection.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "anchor", {
        get: function () {
            return this._anchor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "isReversed", {
        get: function () {
            return this._anchor === this._end;
        },
        enumerable: false,
        configurable: true
    });
    return Selection;
}(Range));
exports.Selection = Selection;
var EndOfLine;
(function (EndOfLine) {
    EndOfLine[EndOfLine["LF"] = 1] = "LF";
    EndOfLine[EndOfLine["CRLF"] = 2] = "CRLF";
})(EndOfLine = exports.EndOfLine || (exports.EndOfLine = {}));
var SnippetString = /** @class */ (function () {
    function SnippetString(value) {
        this._tabstop = 1;
        this.value = value || '';
    }
    SnippetString.isSnippetString = function (thing) {
        if (thing instanceof SnippetString) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.value === 'string';
    };
    SnippetString._escape = function (value) {
        return value.replace(/\$|}|\\/g, '\\$&');
    };
    SnippetString.prototype.appendText = function (string) {
        this.value += SnippetString._escape(string);
        return this;
    };
    SnippetString.prototype.appendTabstop = function (number) {
        if (number === void 0) { number = this._tabstop++; }
        this.value += '$';
        this.value += number;
        return this;
    };
    SnippetString.prototype.appendPlaceholder = function (value, number) {
        if (number === void 0) { number = this._tabstop++; }
        if (typeof value === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            value(nested);
            this._tabstop = nested._tabstop;
            value = nested.value;
        }
        else {
            value = SnippetString._escape(value);
        }
        this.value += '${';
        this.value += number;
        this.value += ':';
        this.value += value;
        this.value += '}';
        return this;
    };
    SnippetString.prototype.appendVariable = function (name, defaultValue) {
        if (typeof defaultValue === 'function') {
            var nested = new SnippetString();
            nested._tabstop = this._tabstop;
            defaultValue(nested);
            this._tabstop = nested._tabstop;
            defaultValue = nested.value;
        }
        else if (typeof defaultValue === 'string') {
            defaultValue = defaultValue.replace(/\$|}/g, '\\$&');
        }
        this.value += '${';
        this.value += name;
        if (defaultValue) {
            this.value += ':';
            this.value += defaultValue;
        }
        this.value += '}';
        return this;
    };
    return SnippetString;
}());
exports.SnippetString = SnippetString;
var ThemeColor = /** @class */ (function () {
    function ThemeColor(id) {
        this.id = id;
    }
    return ThemeColor;
}());
exports.ThemeColor = ThemeColor;
var ThemeIcon = /** @class */ (function () {
    function ThemeIcon(id) {
        this.id = id;
    }
    ThemeIcon.File = new ThemeIcon('file');
    ThemeIcon.Folder = new ThemeIcon('folder');
    return ThemeIcon;
}());
exports.ThemeIcon = ThemeIcon;
var TextEditorRevealType;
(function (TextEditorRevealType) {
    TextEditorRevealType[TextEditorRevealType["Default"] = 0] = "Default";
    TextEditorRevealType[TextEditorRevealType["InCenter"] = 1] = "InCenter";
    TextEditorRevealType[TextEditorRevealType["InCenterIfOutsideViewport"] = 2] = "InCenterIfOutsideViewport";
    TextEditorRevealType[TextEditorRevealType["AtTop"] = 3] = "AtTop";
})(TextEditorRevealType = exports.TextEditorRevealType || (exports.TextEditorRevealType = {}));
/**
 * These values match very carefully the values of `TrackedRangeStickiness`
 */
var DecorationRangeBehavior;
(function (DecorationRangeBehavior) {
    /**
     * TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges
     */
    DecorationRangeBehavior[DecorationRangeBehavior["OpenOpen"] = 0] = "OpenOpen";
    /**
     * TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges
     */
    DecorationRangeBehavior[DecorationRangeBehavior["ClosedClosed"] = 1] = "ClosedClosed";
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
     */
    DecorationRangeBehavior[DecorationRangeBehavior["OpenClosed"] = 2] = "OpenClosed";
    /**
     * TrackedRangeStickiness.GrowsOnlyWhenTypingAfter
     */
    DecorationRangeBehavior[DecorationRangeBehavior["ClosedOpen"] = 3] = "ClosedOpen";
})(DecorationRangeBehavior = exports.DecorationRangeBehavior || (exports.DecorationRangeBehavior = {}));
/**
 * Vertical Lane in the overview ruler of the editor.
 */
var OverviewRulerLane;
(function (OverviewRulerLane) {
    OverviewRulerLane[OverviewRulerLane["Left"] = 1] = "Left";
    OverviewRulerLane[OverviewRulerLane["Center"] = 2] = "Center";
    OverviewRulerLane[OverviewRulerLane["Right"] = 4] = "Right";
    OverviewRulerLane[OverviewRulerLane["Full"] = 7] = "Full";
})(OverviewRulerLane = exports.OverviewRulerLane || (exports.OverviewRulerLane = {}));
var ConfigurationTarget;
(function (ConfigurationTarget) {
    ConfigurationTarget[ConfigurationTarget["Global"] = 1] = "Global";
    ConfigurationTarget[ConfigurationTarget["Workspace"] = 2] = "Workspace";
    ConfigurationTarget[ConfigurationTarget["WorkspaceFolder"] = 3] = "WorkspaceFolder";
    ConfigurationTarget[ConfigurationTarget["Default"] = 4] = "Default";
    ConfigurationTarget[ConfigurationTarget["Memory"] = 5] = "Memory";
})(ConfigurationTarget = exports.ConfigurationTarget || (exports.ConfigurationTarget = {}));
var RelativePattern = /** @class */ (function () {
    function RelativePattern(base, pattern) {
        this.pattern = pattern;
        if (typeof base !== 'string') {
            if (!base || !vscode_uri_1.URI.isUri(base.uri)) {
                throw errors_1.illegalArgument('base');
            }
        }
        if (typeof pattern !== 'string') {
            throw errors_1.illegalArgument('pattern');
        }
        this.base = typeof base === 'string' ? base : base.uri.fsPath;
    }
    RelativePattern.prototype.pathToRelative = function (from, to) {
        return paths_util_1.relative(from, to);
    };
    return RelativePattern;
}());
exports.RelativePattern = RelativePattern;
var IndentAction;
(function (IndentAction) {
    IndentAction[IndentAction["None"] = 0] = "None";
    IndentAction[IndentAction["Indent"] = 1] = "Indent";
    IndentAction[IndentAction["IndentOutdent"] = 2] = "IndentOutdent";
    IndentAction[IndentAction["Outdent"] = 3] = "Outdent";
})(IndentAction = exports.IndentAction || (exports.IndentAction = {}));
var TextEdit = /** @class */ (function () {
    function TextEdit(range, newText) {
        this.range = range;
        this.newText = newText;
    }
    Object.defineProperty(TextEdit.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (value) {
            if (value && !Range.isRange(value)) {
                throw errors_1.illegalArgument('range');
            }
            this._range = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newText", {
        get: function () {
            return this._newText || '';
        },
        set: function (value) {
            if (value && typeof value !== 'string') {
                throw errors_1.illegalArgument('newText');
            }
            this._newText = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextEdit.prototype, "newEol", {
        get: function () {
            return this._newEol;
        },
        set: function (value) {
            if (value && typeof value !== 'number') {
                throw errors_1.illegalArgument('newEol');
            }
            this._newEol = value;
        },
        enumerable: false,
        configurable: true
    });
    TextEdit.isTextEdit = function (thing) {
        if (thing instanceof TextEdit) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing.range)
            && typeof thing.newText === 'string';
    };
    TextEdit.replace = function (range, newText) {
        return new TextEdit(range, newText);
    };
    TextEdit.insert = function (position, newText) {
        return TextEdit.replace(new Range(position, position), newText);
    };
    TextEdit.delete = function (range) {
        return TextEdit.replace(range, '');
    };
    TextEdit.setEndOfLine = function (eol) {
        var ret = new TextEdit(undefined, undefined);
        ret.newEol = eol;
        return ret;
    };
    return TextEdit;
}());
exports.TextEdit = TextEdit;
var CompletionTriggerKind;
(function (CompletionTriggerKind) {
    CompletionTriggerKind[CompletionTriggerKind["Invoke"] = 0] = "Invoke";
    CompletionTriggerKind[CompletionTriggerKind["TriggerCharacter"] = 1] = "TriggerCharacter";
    CompletionTriggerKind[CompletionTriggerKind["TriggerForIncompleteCompletions"] = 2] = "TriggerForIncompleteCompletions";
})(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
var CompletionItemKind;
(function (CompletionItemKind) {
    CompletionItemKind[CompletionItemKind["Text"] = 0] = "Text";
    CompletionItemKind[CompletionItemKind["Method"] = 1] = "Method";
    CompletionItemKind[CompletionItemKind["Function"] = 2] = "Function";
    CompletionItemKind[CompletionItemKind["Constructor"] = 3] = "Constructor";
    CompletionItemKind[CompletionItemKind["Field"] = 4] = "Field";
    CompletionItemKind[CompletionItemKind["Variable"] = 5] = "Variable";
    CompletionItemKind[CompletionItemKind["Class"] = 6] = "Class";
    CompletionItemKind[CompletionItemKind["Interface"] = 7] = "Interface";
    CompletionItemKind[CompletionItemKind["Module"] = 8] = "Module";
    CompletionItemKind[CompletionItemKind["Property"] = 9] = "Property";
    CompletionItemKind[CompletionItemKind["Unit"] = 10] = "Unit";
    CompletionItemKind[CompletionItemKind["Value"] = 11] = "Value";
    CompletionItemKind[CompletionItemKind["Enum"] = 12] = "Enum";
    CompletionItemKind[CompletionItemKind["Keyword"] = 13] = "Keyword";
    CompletionItemKind[CompletionItemKind["Snippet"] = 14] = "Snippet";
    CompletionItemKind[CompletionItemKind["Color"] = 15] = "Color";
    CompletionItemKind[CompletionItemKind["File"] = 16] = "File";
    CompletionItemKind[CompletionItemKind["Reference"] = 17] = "Reference";
    CompletionItemKind[CompletionItemKind["Folder"] = 18] = "Folder";
    CompletionItemKind[CompletionItemKind["EnumMember"] = 19] = "EnumMember";
    CompletionItemKind[CompletionItemKind["Constant"] = 20] = "Constant";
    CompletionItemKind[CompletionItemKind["Struct"] = 21] = "Struct";
    CompletionItemKind[CompletionItemKind["Event"] = 22] = "Event";
    CompletionItemKind[CompletionItemKind["Operator"] = 23] = "Operator";
    CompletionItemKind[CompletionItemKind["TypeParameter"] = 24] = "TypeParameter";
})(CompletionItemKind = exports.CompletionItemKind || (exports.CompletionItemKind = {}));
var CompletionItem = /** @class */ (function () {
    function CompletionItem(label, kind) {
        this.label = label;
        this.kind = kind;
    }
    return CompletionItem;
}());
exports.CompletionItem = CompletionItem;
var CompletionList = /** @class */ (function () {
    function CompletionList(items, isIncomplete) {
        if (items === void 0) { items = []; }
        if (isIncomplete === void 0) { isIncomplete = false; }
        this.items = items;
        this.isIncomplete = isIncomplete;
    }
    return CompletionList;
}());
exports.CompletionList = CompletionList;
var DiagnosticSeverity;
(function (DiagnosticSeverity) {
    DiagnosticSeverity[DiagnosticSeverity["Error"] = 0] = "Error";
    DiagnosticSeverity[DiagnosticSeverity["Warning"] = 1] = "Warning";
    DiagnosticSeverity[DiagnosticSeverity["Information"] = 2] = "Information";
    DiagnosticSeverity[DiagnosticSeverity["Hint"] = 3] = "Hint";
})(DiagnosticSeverity = exports.DiagnosticSeverity || (exports.DiagnosticSeverity = {}));
var DiagnosticRelatedInformation = /** @class */ (function () {
    function DiagnosticRelatedInformation(location, message) {
        this.location = location;
        this.message = message;
    }
    return DiagnosticRelatedInformation;
}());
exports.DiagnosticRelatedInformation = DiagnosticRelatedInformation;
var Location = /** @class */ (function () {
    function Location(uri, rangeOrPosition) {
        this.uri = uri;
        if (rangeOrPosition instanceof Range) {
            this.range = rangeOrPosition;
        }
        else if (rangeOrPosition instanceof Position) {
            this.range = new Range(rangeOrPosition, rangeOrPosition);
        }
    }
    Location.isLocation = function (thing) {
        if (thing instanceof Location) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return Range.isRange(thing.range)
            && vscode_uri_1.URI.isUri(thing.uri);
    };
    return Location;
}());
exports.Location = Location;
var DiagnosticTag;
(function (DiagnosticTag) {
    DiagnosticTag[DiagnosticTag["Unnecessary"] = 1] = "Unnecessary";
})(DiagnosticTag = exports.DiagnosticTag || (exports.DiagnosticTag = {}));
var Diagnostic = /** @class */ (function () {
    function Diagnostic(range, message, severity) {
        if (severity === void 0) { severity = DiagnosticSeverity.Error; }
        this.range = range;
        this.message = message;
        this.severity = severity;
    }
    return Diagnostic;
}());
exports.Diagnostic = Diagnostic;
var MarkerSeverity;
(function (MarkerSeverity) {
    MarkerSeverity[MarkerSeverity["Hint"] = 1] = "Hint";
    MarkerSeverity[MarkerSeverity["Info"] = 2] = "Info";
    MarkerSeverity[MarkerSeverity["Warning"] = 4] = "Warning";
    MarkerSeverity[MarkerSeverity["Error"] = 8] = "Error";
})(MarkerSeverity = exports.MarkerSeverity || (exports.MarkerSeverity = {}));
var MarkerTag;
(function (MarkerTag) {
    MarkerTag[MarkerTag["Unnecessary"] = 1] = "Unnecessary";
})(MarkerTag = exports.MarkerTag || (exports.MarkerTag = {}));
var ParameterInformation = /** @class */ (function () {
    function ParameterInformation(label, documentation) {
        this.label = label;
        this.documentation = documentation;
    }
    return ParameterInformation;
}());
exports.ParameterInformation = ParameterInformation;
var SignatureInformation = /** @class */ (function () {
    function SignatureInformation(label, documentation) {
        this.label = label;
        this.documentation = documentation;
        this.parameters = [];
    }
    return SignatureInformation;
}());
exports.SignatureInformation = SignatureInformation;
var SignatureHelpTriggerKind;
(function (SignatureHelpTriggerKind) {
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["Invoke"] = 1] = "Invoke";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["TriggerCharacter"] = 2] = "TriggerCharacter";
    SignatureHelpTriggerKind[SignatureHelpTriggerKind["ContentChange"] = 3] = "ContentChange";
})(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));
var SignatureHelp = /** @class */ (function () {
    function SignatureHelp() {
        this.signatures = [];
    }
    return SignatureHelp;
}());
exports.SignatureHelp = SignatureHelp;
var Hover = /** @class */ (function () {
    function Hover(contents, range) {
        if (!contents) {
            errors_1.illegalArgument('contents must be defined');
        }
        if (Array.isArray(contents)) {
            this.contents = contents;
        }
        else if (markdown_string_1.isMarkdownString(contents)) {
            this.contents = [contents];
        }
        else {
            this.contents = [contents];
        }
        this.range = range;
    }
    return Hover;
}());
exports.Hover = Hover;
var DocumentHighlightKind;
(function (DocumentHighlightKind) {
    DocumentHighlightKind[DocumentHighlightKind["Text"] = 0] = "Text";
    DocumentHighlightKind[DocumentHighlightKind["Read"] = 1] = "Read";
    DocumentHighlightKind[DocumentHighlightKind["Write"] = 2] = "Write";
})(DocumentHighlightKind = exports.DocumentHighlightKind || (exports.DocumentHighlightKind = {}));
var DocumentHighlight = /** @class */ (function () {
    function DocumentHighlight(range, kind) {
        this.range = range;
        this.kind = kind;
    }
    return DocumentHighlight;
}());
exports.DocumentHighlight = DocumentHighlight;
var DocumentLink = /** @class */ (function () {
    function DocumentLink(range, target) {
        if (target && !(target instanceof vscode_uri_1.URI)) {
            throw errors_1.illegalArgument('target');
        }
        if (!Range.isRange(range) || range.isEmpty) {
            throw errors_1.illegalArgument('range');
        }
        this.range = range;
        this.target = target;
    }
    return DocumentLink;
}());
exports.DocumentLink = DocumentLink;
var CodeLens = /** @class */ (function () {
    function CodeLens(range, command) {
        this.range = range;
        this.command = command;
    }
    Object.defineProperty(CodeLens.prototype, "isResolved", {
        get: function () {
            return !!this.command;
        },
        enumerable: false,
        configurable: true
    });
    return CodeLens;
}());
exports.CodeLens = CodeLens;
var CodeActionTrigger;
(function (CodeActionTrigger) {
    CodeActionTrigger[CodeActionTrigger["Automatic"] = 1] = "Automatic";
    CodeActionTrigger[CodeActionTrigger["Manual"] = 2] = "Manual";
})(CodeActionTrigger = exports.CodeActionTrigger || (exports.CodeActionTrigger = {}));
var CodeActionKind = /** @class */ (function () {
    function CodeActionKind(value) {
        this.value = value;
    }
    CodeActionKind.prototype.append = function (parts) {
        return new CodeActionKind(this.value ? this.value + CodeActionKind.sep + parts : parts);
    };
    CodeActionKind.prototype.contains = function (other) {
        return this.value === other.value || strings_1.startsWithIgnoreCase(other.value, this.value + CodeActionKind.sep);
    };
    CodeActionKind.prototype.intersects = function (other) {
        return this.contains(other) || other.contains(this);
    };
    CodeActionKind.sep = '.';
    CodeActionKind.Empty = new CodeActionKind('');
    CodeActionKind.QuickFix = CodeActionKind.Empty.append('quickfix');
    CodeActionKind.Refactor = CodeActionKind.Empty.append('refactor');
    CodeActionKind.RefactorExtract = CodeActionKind.Refactor.append('extract');
    CodeActionKind.RefactorInline = CodeActionKind.Refactor.append('inline');
    CodeActionKind.RefactorRewrite = CodeActionKind.Refactor.append('rewrite');
    CodeActionKind.Source = CodeActionKind.Empty.append('source');
    CodeActionKind.SourceOrganizeImports = CodeActionKind.Source.append('organizeImports');
    CodeActionKind.SourceFixAll = CodeActionKind.Source.append('fixAll');
    return CodeActionKind;
}());
exports.CodeActionKind = CodeActionKind;
var TextDocumentSaveReason;
(function (TextDocumentSaveReason) {
    TextDocumentSaveReason[TextDocumentSaveReason["Manual"] = 1] = "Manual";
    TextDocumentSaveReason[TextDocumentSaveReason["AfterDelay"] = 2] = "AfterDelay";
    TextDocumentSaveReason[TextDocumentSaveReason["FocusOut"] = 3] = "FocusOut";
})(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
var CodeAction = /** @class */ (function () {
    function CodeAction(title, kind) {
        this.title = title;
        this.kind = kind;
    }
    return CodeAction;
}());
exports.CodeAction = CodeAction;
var WorkspaceEdit = /** @class */ (function () {
    function WorkspaceEdit() {
        this._edits = new Array();
    }
    WorkspaceEdit.prototype.renameFile = function (from, to, options) {
        this._edits.push({ _type: 1, from: from, to: to, options: options });
    };
    WorkspaceEdit.prototype.createFile = function (uri, options) {
        this._edits.push({ _type: 1, from: undefined, to: uri, options: options });
    };
    WorkspaceEdit.prototype.deleteFile = function (uri, options) {
        this._edits.push({ _type: 1, from: uri, to: undefined, options: options });
    };
    WorkspaceEdit.prototype.replace = function (uri, range, newText) {
        this._edits.push({ _type: 2, uri: uri, edit: new TextEdit(range, newText) });
    };
    WorkspaceEdit.prototype.insert = function (resource, position, newText) {
        this.replace(resource, new Range(position, position), newText);
    };
    WorkspaceEdit.prototype.delete = function (resource, range) {
        this.replace(resource, range, '');
    };
    WorkspaceEdit.prototype.has = function (uri) {
        var e_4, _a;
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edit = _c.value;
                if (edit && edit._type === 2 && edit.uri.toString() === uri.toString()) {
                    return true;
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return false;
    };
    WorkspaceEdit.prototype.set = function (uri, edits) {
        var e_5, _a;
        if (!edits) {
            // remove all text edits for `uri`
            for (var i = 0; i < this._edits.length; i++) {
                var element = this._edits[i];
                if (element && element._type === 2 && element.uri.toString() === uri.toString()) {
                    this._edits[i] = undefined;
                }
            }
            this._edits = this._edits.filter(function (e) { return !!e; });
        }
        else {
            try {
                // append edit to the end
                for (var edits_1 = __values(edits), edits_1_1 = edits_1.next(); !edits_1_1.done; edits_1_1 = edits_1.next()) {
                    var edit = edits_1_1.value;
                    if (edit) {
                        this._edits.push({ _type: 2, uri: uri, edit: edit });
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (edits_1_1 && !edits_1_1.done && (_a = edits_1.return)) _a.call(edits_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    };
    WorkspaceEdit.prototype.get = function (uri) {
        var e_6, _a;
        var res = [];
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var candidate = _c.value;
                if (candidate && candidate._type === 2 && candidate.uri.toString() === uri.toString()) {
                    res.push(candidate.edit);
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (res.length === 0) {
            return undefined;
        }
        return res;
    };
    WorkspaceEdit.prototype.entries = function () {
        var e_7, _a;
        var textEdits = new Map();
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var candidate = _c.value;
                if (candidate && candidate._type === 2) {
                    var textEdit = textEdits.get(candidate.uri.toString());
                    if (!textEdit) {
                        textEdit = [candidate.uri, []];
                        textEdits.set(candidate.uri.toString(), textEdit);
                    }
                    textEdit[1].push(candidate.edit);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var result = [];
        textEdits.forEach(function (v) { return result.push(v); });
        return result;
    };
    WorkspaceEdit.prototype._allEntries = function () {
        var e_8, _a;
        var res = [];
        try {
            for (var _b = __values(this._edits), _c = _b.next(); !_c.done; _c = _b.next()) {
                var edit = _c.value;
                if (!edit) {
                    continue;
                }
                if (edit._type === 1) {
                    res.push([edit.from, edit.to, edit.options]);
                }
                else {
                    res.push([edit.uri, [edit.edit]]);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        return res;
    };
    Object.defineProperty(WorkspaceEdit.prototype, "size", {
        get: function () {
            return this.entries().length;
        },
        enumerable: false,
        configurable: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WorkspaceEdit.prototype.toJSON = function () {
        return this.entries();
    };
    return WorkspaceEdit;
}());
exports.WorkspaceEdit = WorkspaceEdit;
var TreeItem = /** @class */ (function () {
    function TreeItem(arg1, collapsibleState) {
        if (collapsibleState === void 0) { collapsibleState = TreeItemCollapsibleState.None; }
        this.collapsibleState = collapsibleState;
        if (arg1 instanceof vscode_uri_1.URI) {
            this.resourceUri = arg1;
        }
        else {
            this.label = arg1;
        }
    }
    return TreeItem;
}());
exports.TreeItem = TreeItem;
var TreeItemCollapsibleState;
(function (TreeItemCollapsibleState) {
    TreeItemCollapsibleState[TreeItemCollapsibleState["None"] = 0] = "None";
    TreeItemCollapsibleState[TreeItemCollapsibleState["Collapsed"] = 1] = "Collapsed";
    TreeItemCollapsibleState[TreeItemCollapsibleState["Expanded"] = 2] = "Expanded";
})(TreeItemCollapsibleState = exports.TreeItemCollapsibleState || (exports.TreeItemCollapsibleState = {}));
var SymbolTag;
(function (SymbolTag) {
    SymbolTag[SymbolTag["Deprecated"] = 1] = "Deprecated";
})(SymbolTag = exports.SymbolTag || (exports.SymbolTag = {}));
var SymbolInformation = /** @class */ (function () {
    function SymbolInformation(name, kind, rangeOrContainer, locationOrUri, containerName) {
        this.name = name;
        this.kind = kind;
        this.containerName = containerName;
        if (typeof rangeOrContainer === 'string') {
            this.containerName = rangeOrContainer;
        }
        if (locationOrUri instanceof Location) {
            this.location = locationOrUri;
        }
        else if (rangeOrContainer instanceof Range) {
            this.location = new Location(locationOrUri, rangeOrContainer);
        }
        SymbolInformation.validate(this);
    }
    SymbolInformation.validate = function (candidate) {
        if (!candidate.name) {
            throw new Error('Should provide a name inside candidate field');
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    SymbolInformation.prototype.toJSON = function () {
        return {
            name: this.name,
            kind: plugin_api_rpc_model_1.SymbolKind[this.kind],
            location: this.location,
            containerName: this.containerName
        };
    };
    return SymbolInformation;
}());
exports.SymbolInformation = SymbolInformation;
var DocumentSymbol = /** @class */ (function () {
    function DocumentSymbol(name, detail, kind, range, selectionRange) {
        this.name = name;
        this.detail = detail;
        this.kind = kind;
        this.range = range;
        this.selectionRange = selectionRange;
        this.children = [];
        DocumentSymbol.validate(this);
    }
    DocumentSymbol.validate = function (candidate) {
        if (!candidate.name) {
            throw new Error('Should provide a name inside candidate field');
        }
        if (!candidate.range.contains(candidate.selectionRange)) {
            throw new Error('selectionRange must be contained in fullRange');
        }
        if (candidate.children) {
            candidate.children.forEach(DocumentSymbol.validate);
        }
    };
    return DocumentSymbol;
}());
exports.DocumentSymbol = DocumentSymbol;
var FileChangeType;
(function (FileChangeType) {
    FileChangeType[FileChangeType["Changed"] = 1] = "Changed";
    FileChangeType[FileChangeType["Created"] = 2] = "Created";
    FileChangeType[FileChangeType["Deleted"] = 3] = "Deleted";
})(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
var CommentThreadCollapsibleState;
(function (CommentThreadCollapsibleState) {
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Collapsed"] = 0] = "Collapsed";
    CommentThreadCollapsibleState[CommentThreadCollapsibleState["Expanded"] = 1] = "Expanded";
})(CommentThreadCollapsibleState = exports.CommentThreadCollapsibleState || (exports.CommentThreadCollapsibleState = {}));
var QuickInputButtons = /** @class */ (function () {
    function QuickInputButtons() {
    }
    QuickInputButtons.Back = {
        iconPath: {
            id: 'Back'
        },
        tooltip: 'Back'
    };
    return QuickInputButtons;
}());
exports.QuickInputButtons = QuickInputButtons;
var CommentMode;
(function (CommentMode) {
    CommentMode[CommentMode["Editing"] = 0] = "Editing";
    CommentMode[CommentMode["Preview"] = 1] = "Preview";
})(CommentMode = exports.CommentMode || (exports.CommentMode = {}));
var FileSystemError = /** @class */ (function (_super) {
    __extends(FileSystemError, _super);
    function FileSystemError(uriOrMessage, code, terminator) {
        var _this = _super.call(this, vscode_uri_1.URI.isUri(uriOrMessage) ? uriOrMessage.toString(true) : uriOrMessage) || this;
        _this.name = code ? code + " (FileSystemError)" : 'FileSystemError';
        if (typeof Object.setPrototypeOf === 'function') {
            Object.setPrototypeOf(_this, FileSystemError.prototype);
        }
        if (typeof Error.captureStackTrace === 'function' && typeof terminator === 'function') {
            Error.captureStackTrace(_this, terminator);
        }
        return _this;
    }
    FileSystemError.FileExists = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryExists', FileSystemError.FileExists);
    };
    FileSystemError.FileNotFound = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryNotFound', FileSystemError.FileNotFound);
    };
    FileSystemError.FileNotADirectory = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryNotADirectory', FileSystemError.FileNotADirectory);
    };
    FileSystemError.FileIsADirectory = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'EntryIsADirectory', FileSystemError.FileIsADirectory);
    };
    FileSystemError.NoPermissions = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'NoPermissions', FileSystemError.NoPermissions);
    };
    FileSystemError.Unavailable = function (messageOrUri) {
        return new FileSystemError(messageOrUri, 'Unavailable', FileSystemError.Unavailable);
    };
    return FileSystemError;
}(Error));
exports.FileSystemError = FileSystemError;
var FileType;
(function (FileType) {
    FileType[FileType["Unknown"] = 0] = "Unknown";
    FileType[FileType["File"] = 1] = "File";
    FileType[FileType["Directory"] = 2] = "Directory";
    FileType[FileType["SymbolicLink"] = 64] = "SymbolicLink";
})(FileType = exports.FileType || (exports.FileType = {}));
var ProgressOptions = /** @class */ (function () {
    function ProgressOptions(location, title, cancellable) {
        this.location = location;
    }
    return ProgressOptions;
}());
exports.ProgressOptions = ProgressOptions;
var Progress = /** @class */ (function () {
    function Progress() {
    }
    /**
     * Report a progress update.
     * @param value A progress item, like a message and/or an
     * report on how much work finished
     */
    Progress.prototype.report = function (value) {
    };
    return Progress;
}());
exports.Progress = Progress;
var ProgressLocation;
(function (ProgressLocation) {
    /**
     * Show progress for the source control viewlet, as overlay for the icon and as progress bar
     * inside the viewlet (when visible). Neither supports cancellation nor discrete progress.
     */
    ProgressLocation[ProgressLocation["SourceControl"] = 1] = "SourceControl";
    /**
     * Show progress in the status bar of the editor. Neither supports cancellation nor discrete progress.
     */
    ProgressLocation[ProgressLocation["Window"] = 10] = "Window";
    /**
     * Show progress as notification with an optional cancel button. Supports to show infinite and discrete progress.
     */
    ProgressLocation[ProgressLocation["Notification"] = 15] = "Notification";
})(ProgressLocation = exports.ProgressLocation || (exports.ProgressLocation = {}));
var ProcessExecution = /** @class */ (function () {
    function ProcessExecution(process, varg1, varg2) {
        if (typeof process !== 'string') {
            throw errors_1.illegalArgument('process');
        }
        this.executionProcess = process;
        if (varg1 !== undefined) {
            if (Array.isArray(varg1)) {
                this.arguments = varg1;
                this.executionOptions = varg2;
            }
            else {
                this.executionOptions = varg1;
            }
        }
        if (this.arguments === undefined) {
            this.arguments = [];
        }
    }
    Object.defineProperty(ProcessExecution.prototype, "process", {
        get: function () {
            return this.executionProcess;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('process');
            }
            this.executionProcess = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProcessExecution.prototype, "args", {
        get: function () {
            return this.arguments;
        },
        set: function (value) {
            if (!Array.isArray(value)) {
                value = [];
            }
            this.arguments = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProcessExecution.prototype, "options", {
        get: function () {
            return this.executionOptions;
        },
        set: function (value) {
            this.executionOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ProcessExecution.prototype.computeId = function () {
        var e_9, _a;
        var hash = crypto.createHash('md5');
        hash.update('process');
        if (this.executionProcess !== undefined) {
            hash.update(this.executionProcess);
        }
        if (this.arguments && this.arguments.length > 0) {
            try {
                for (var _b = __values(this.arguments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    hash.update(arg);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        return hash.digest('hex');
    };
    ProcessExecution.is = function (value) {
        var candidate = value;
        return candidate && !!candidate.process;
    };
    return ProcessExecution;
}());
exports.ProcessExecution = ProcessExecution;
var ShellQuoting;
(function (ShellQuoting) {
    ShellQuoting[ShellQuoting["Escape"] = 1] = "Escape";
    ShellQuoting[ShellQuoting["Strong"] = 2] = "Strong";
    ShellQuoting[ShellQuoting["Weak"] = 3] = "Weak";
})(ShellQuoting = exports.ShellQuoting || (exports.ShellQuoting = {}));
var TaskPanelKind;
(function (TaskPanelKind) {
    TaskPanelKind[TaskPanelKind["Shared"] = 1] = "Shared";
    TaskPanelKind[TaskPanelKind["Dedicated"] = 2] = "Dedicated";
    TaskPanelKind[TaskPanelKind["New"] = 3] = "New";
})(TaskPanelKind = exports.TaskPanelKind || (exports.TaskPanelKind = {}));
var TaskRevealKind;
(function (TaskRevealKind) {
    TaskRevealKind[TaskRevealKind["Always"] = 1] = "Always";
    TaskRevealKind[TaskRevealKind["Silent"] = 2] = "Silent";
    TaskRevealKind[TaskRevealKind["Never"] = 3] = "Never";
})(TaskRevealKind = exports.TaskRevealKind || (exports.TaskRevealKind = {}));
var ShellExecution = /** @class */ (function () {
    function ShellExecution(arg0, arg1, arg2) {
        if (Array.isArray(arg1) || typeof arg1 === 'string') {
            if (!arg0) {
                throw errors_1.illegalArgument('command can\'t be undefined or null');
            }
            if (typeof arg0 !== 'string' && typeof arg0.value !== 'string') {
                throw errors_1.illegalArgument('command');
            }
            this.shellCommand = arg0;
            this.arguments = arg1;
            this.shellOptions = arg2;
        }
        else {
            if (typeof arg0 !== 'string') {
                throw errors_1.illegalArgument('commandLine');
            }
            this.shellCommandLine = arg0;
            this.shellOptions = arg1;
        }
    }
    Object.defineProperty(ShellExecution.prototype, "commandLine", {
        get: function () {
            return this.shellCommandLine;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('commandLine');
            }
            this.shellCommandLine = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "command", {
        get: function () {
            return this.shellCommand;
        },
        set: function (value) {
            if (typeof value !== 'string' && typeof value.value !== 'string') {
                throw errors_1.illegalArgument('command');
            }
            this.shellCommand = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "args", {
        get: function () {
            return this.arguments;
        },
        set: function (value) {
            this.arguments = value || [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShellExecution.prototype, "options", {
        get: function () {
            return this.shellOptions;
        },
        set: function (value) {
            this.shellOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    ShellExecution.prototype.computeId = function () {
        var e_10, _a;
        var hash = crypto.createHash('md5');
        hash.update('shell');
        if (this.shellCommandLine !== undefined) {
            hash.update(this.shellCommandLine);
        }
        if (this.shellCommand !== undefined) {
            hash.update(typeof this.shellCommand === 'string' ? this.shellCommand : this.shellCommand.value);
        }
        if (this.arguments && this.arguments.length > 0) {
            try {
                for (var _b = __values(this.arguments), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var arg = _c.value;
                    hash.update(typeof arg === 'string' ? arg : arg.value);
                }
            }
            catch (e_10_1) { e_10 = { error: e_10_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_10) throw e_10.error; }
            }
        }
        return hash.digest('hex');
    };
    ShellExecution.is = function (value) {
        var candidate = value;
        return candidate && (!!candidate.commandLine || !!candidate.command);
    };
    return ShellExecution;
}());
exports.ShellExecution = ShellExecution;
var TaskGroup = /** @class */ (function () {
    function TaskGroup(id, label) {
        if (typeof id !== 'string') {
            throw errors_1.illegalArgument('id');
        }
        if (typeof label !== 'string') {
            throw errors_1.illegalArgument('name');
        }
        this.groupId = id;
    }
    TaskGroup.from = function (value) {
        switch (value) {
            case 'clean':
                return TaskGroup.Clean;
            case 'build':
                return TaskGroup.Build;
            case 'rebuild':
                return TaskGroup.Rebuild;
            case 'test':
                return TaskGroup.Test;
            default:
                return undefined;
        }
    };
    Object.defineProperty(TaskGroup.prototype, "id", {
        get: function () {
            return this.groupId;
        },
        enumerable: false,
        configurable: true
    });
    TaskGroup.Clean = new TaskGroup('clean', 'Clean');
    TaskGroup.Build = new TaskGroup('build', 'Build');
    TaskGroup.Rebuild = new TaskGroup('rebuild', 'Rebuild');
    TaskGroup.Test = new TaskGroup('test', 'Test');
    return TaskGroup;
}());
exports.TaskGroup = TaskGroup;
var TaskScope;
(function (TaskScope) {
    TaskScope[TaskScope["Global"] = 1] = "Global";
    TaskScope[TaskScope["Workspace"] = 2] = "Workspace";
})(TaskScope = exports.TaskScope || (exports.TaskScope = {}));
var Task = /** @class */ (function () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Task() {
        var _a, _b;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var taskDefinition;
        var scope;
        var name;
        var source;
        var execution;
        var problemMatchers;
        if (typeof args[1] === 'string') {
            _a = __read(args, 5), taskDefinition = _a[0], name = _a[1], source = _a[2], execution = _a[3], problemMatchers = _a[4];
        }
        else {
            _b = __read(args, 6), taskDefinition = _b[0], scope = _b[1], name = _b[2], source = _b[3], execution = _b[4], problemMatchers = _b[5];
        }
        this.definition = taskDefinition;
        this.scope = scope;
        this.name = name;
        this.source = source;
        this.execution = execution;
        if (typeof problemMatchers === 'string') {
            this.taskProblemMatchers = [problemMatchers];
            this.hasTaskProblemMatchers = true;
        }
        else if (Array.isArray(problemMatchers)) {
            this.taskProblemMatchers = problemMatchers;
            this.hasTaskProblemMatchers = true;
        }
        else {
            this.taskProblemMatchers = [];
            this.hasTaskProblemMatchers = false;
        }
        this.isTaskBackground = false;
    }
    Object.defineProperty(Task.prototype, "definition", {
        get: function () {
            return this.taskDefinition;
        },
        set: function (value) {
            if (value === undefined || value === null) {
                throw errors_1.illegalArgument('Kind can\'t be undefined or null');
            }
            this.taskDefinition = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "scope", {
        get: function () {
            return this.taskScope;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskScope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "name", {
        get: function () {
            return this.taskName;
        },
        set: function (value) {
            if (typeof value !== 'string') {
                throw errors_1.illegalArgument('name');
            }
            this.taskName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "execution", {
        get: function () {
            return this.taskExecution;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskExecution = value;
            this.updateDefinitionBasedOnExecution();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "problemMatchers", {
        get: function () {
            return this.taskProblemMatchers;
        },
        set: function (value) {
            if (!Array.isArray(value)) {
                this.taskProblemMatchers = [];
                this.hasTaskProblemMatchers = false;
                return;
            }
            this.taskProblemMatchers = value;
            this.hasTaskProblemMatchers = true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "hasProblemMatchers", {
        get: function () {
            return this.hasTaskProblemMatchers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "isBackground", {
        get: function () {
            return this.isTaskBackground;
        },
        set: function (value) {
            if (value !== true && value !== false) {
                value = false;
            }
            this.isTaskBackground = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "source", {
        get: function () {
            return this.taskSource;
        },
        set: function (value) {
            if (typeof value !== 'string' || value.length === 0) {
                throw errors_1.illegalArgument('source must be a string of length > 0');
            }
            this.taskSource = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "group", {
        get: function () {
            return this.taskGroup;
        },
        set: function (value) {
            if (value === undefined || value === null) {
                this.taskGroup = undefined;
                return;
            }
            this.taskGroup = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "presentationOptions", {
        get: function () {
            return this.taskPresentationOptions;
        },
        set: function (value) {
            if (value === null) {
                value = undefined;
            }
            this.taskPresentationOptions = value;
        },
        enumerable: false,
        configurable: true
    });
    Task.prototype.updateDefinitionBasedOnExecution = function () {
        if (this.taskExecution instanceof ProcessExecution) {
            Object.assign(this.taskDefinition, {
                type: 'process',
                id: this.taskExecution.computeId(),
                taskType: this.taskDefinition.type
            });
        }
        else if (this.taskExecution instanceof ShellExecution) {
            Object.assign(this.taskDefinition, {
                type: 'shell',
                id: this.taskExecution.computeId(),
                taskType: this.taskDefinition.type
            });
        }
    };
    return Task;
}());
exports.Task = Task;
var DebugAdapterExecutable = /** @class */ (function () {
    /**
     * Creates a description for a debug adapter based on an executable program.
     *
     * @param command The command or executable path that implements the debug adapter.
     * @param args Optional arguments to be passed to the command or executable.
     * @param options Optional options to be used when starting the command or executable.
     */
    function DebugAdapterExecutable(command, args, options) {
        this.command = command;
        this.args = args;
        this.options = options;
    }
    return DebugAdapterExecutable;
}());
exports.DebugAdapterExecutable = DebugAdapterExecutable;
/**
 * Represents a debug adapter running as a socket based server.
 */
var DebugAdapterServer = /** @class */ (function () {
    /**
     * Create a description for a debug adapter running as a socket based server.
     */
    function DebugAdapterServer(port, host) {
        this.port = port;
        this.host = host;
    }
    return DebugAdapterServer;
}());
exports.DebugAdapterServer = DebugAdapterServer;
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 1] = "Trace";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warning"] = 4] = "Warning";
    LogLevel[LogLevel["Error"] = 5] = "Error";
    LogLevel[LogLevel["Critical"] = 6] = "Critical";
    LogLevel[LogLevel["Off"] = 7] = "Off";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
/**
 * The base class of all breakpoint types.
 */
var Breakpoint = /** @class */ (function () {
    function Breakpoint(enabled, condition, hitCondition, logMessage) {
        this.enabled = enabled || false;
        this.condition = condition;
        this.hitCondition = hitCondition;
        this.logMessage = logMessage;
    }
    Object.defineProperty(Breakpoint.prototype, "id", {
        /**
         * The unique ID of the breakpoint.
         */
        get: function () {
            if (!this._id) {
                this._id = uuid_1.UUID.uuid4();
            }
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    return Breakpoint;
}());
exports.Breakpoint = Breakpoint;
/**
 * A breakpoint specified by a source location.
 */
var SourceBreakpoint = /** @class */ (function (_super) {
    __extends(SourceBreakpoint, _super);
    /**
     * Create a new breakpoint for a source location.
     */
    function SourceBreakpoint(location, enabled, condition, hitCondition, logMessage) {
        var _this = _super.call(this, enabled, condition, hitCondition, logMessage) || this;
        _this.location = location;
        return _this;
    }
    return SourceBreakpoint;
}(Breakpoint));
exports.SourceBreakpoint = SourceBreakpoint;
/**
 * A breakpoint specified by a function name.
 */
var FunctionBreakpoint = /** @class */ (function (_super) {
    __extends(FunctionBreakpoint, _super);
    /**
     * Create a new function breakpoint.
     */
    function FunctionBreakpoint(functionName, enabled, condition, hitCondition, logMessage) {
        var _this = _super.call(this, enabled, condition, hitCondition, logMessage) || this;
        _this.functionName = functionName;
        return _this;
    }
    return FunctionBreakpoint;
}(Breakpoint));
exports.FunctionBreakpoint = FunctionBreakpoint;
var Color = /** @class */ (function () {
    function Color(red, green, blue, alpha) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
    }
    return Color;
}());
exports.Color = Color;
var ColorInformation = /** @class */ (function () {
    function ColorInformation(range, color) {
        if (color && !(color instanceof Color)) {
            throw errors_1.illegalArgument('color');
        }
        if (!Range.isRange(range)) {
            throw errors_1.illegalArgument('range');
        }
        this.range = range;
        this.color = color;
    }
    return ColorInformation;
}());
exports.ColorInformation = ColorInformation;
var ColorPresentation = /** @class */ (function () {
    function ColorPresentation(label) {
        if (!label || typeof label !== 'string') {
            throw errors_1.illegalArgument('label');
        }
        this.label = label;
    }
    return ColorPresentation;
}());
exports.ColorPresentation = ColorPresentation;
var ColorFormat;
(function (ColorFormat) {
    ColorFormat[ColorFormat["RGB"] = 0] = "RGB";
    ColorFormat[ColorFormat["HEX"] = 1] = "HEX";
    ColorFormat[ColorFormat["HSL"] = 2] = "HSL";
})(ColorFormat = exports.ColorFormat || (exports.ColorFormat = {}));
var FoldingRange = /** @class */ (function () {
    function FoldingRange(start, end, kind) {
        this.start = start;
        this.end = end;
        this.kind = kind;
    }
    return FoldingRange;
}());
exports.FoldingRange = FoldingRange;
var FoldingRangeKind;
(function (FoldingRangeKind) {
    FoldingRangeKind[FoldingRangeKind["Comment"] = 1] = "Comment";
    FoldingRangeKind[FoldingRangeKind["Imports"] = 2] = "Imports";
    FoldingRangeKind[FoldingRangeKind["Region"] = 3] = "Region";
})(FoldingRangeKind = exports.FoldingRangeKind || (exports.FoldingRangeKind = {}));
var SelectionRange = /** @class */ (function () {
    function SelectionRange(range, parent) {
        this.range = range;
        this.parent = parent;
        if (parent && !parent.range.contains(this.range)) {
            throw new Error('Invalid argument: parent must contain this range');
        }
    }
    return SelectionRange;
}());
exports.SelectionRange = SelectionRange;
/**
 * Enumeration of the supported operating systems.
 */
var OperatingSystem;
(function (OperatingSystem) {
    OperatingSystem["Windows"] = "Windows";
    OperatingSystem["Linux"] = "Linux";
    OperatingSystem["OSX"] = "OSX";
})(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
/** The areas of the application shell where webview panel can reside. */
var WebviewPanelTargetArea;
(function (WebviewPanelTargetArea) {
    WebviewPanelTargetArea["Main"] = "main";
    WebviewPanelTargetArea["Left"] = "left";
    WebviewPanelTargetArea["Right"] = "right";
    WebviewPanelTargetArea["Bottom"] = "bottom";
})(WebviewPanelTargetArea = exports.WebviewPanelTargetArea || (exports.WebviewPanelTargetArea = {}));
var CallHierarchyItem = /** @class */ (function () {
    function CallHierarchyItem(kind, name, detail, uri, range, selectionRange) {
        this.kind = kind;
        this.name = name;
        this.detail = detail;
        this.uri = uri;
        this.range = range;
        this.selectionRange = selectionRange;
    }
    CallHierarchyItem.isCallHierarchyItem = function (thing) {
        if (thing instanceof CallHierarchyItem) {
            return true;
        }
        if (!thing) {
            return false;
        }
        return typeof thing.kind === 'number' &&
            typeof thing.name === 'string' &&
            vscode_uri_1.URI.isUri(thing.uri) &&
            Range.isRange(thing.range) &&
            Range.isRange(thing.selectionRange);
    };
    return CallHierarchyItem;
}());
exports.CallHierarchyItem = CallHierarchyItem;
var CallHierarchyIncomingCall = /** @class */ (function () {
    function CallHierarchyIncomingCall(item, fromRanges) {
        this.fromRanges = fromRanges;
        this.from = item;
    }
    return CallHierarchyIncomingCall;
}());
exports.CallHierarchyIncomingCall = CallHierarchyIncomingCall;
var CallHierarchyOutgoingCall = /** @class */ (function () {
    function CallHierarchyOutgoingCall(item, fromRanges) {
        this.fromRanges = fromRanges;
        this.to = item;
    }
    return CallHierarchyOutgoingCall;
}());
exports.CallHierarchyOutgoingCall = CallHierarchyOutgoingCall;


/***/ })

}]);
//# sourceMappingURL=44.bundle.js.map