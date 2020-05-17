(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "../../packages/navigator/lib/browser/index.js":
/*!********************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/navigator/lib/browser/index.js ***!
  \********************************************************************************************************/
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
__exportStar(__webpack_require__(/*! ./navigator-model */ "../../packages/navigator/lib/browser/navigator-model.js"), exports);
__exportStar(__webpack_require__(/*! ./navigator-widget */ "../../packages/navigator/lib/browser/navigator-widget.js"), exports);
__exportStar(__webpack_require__(/*! ./navigator-decorator-service */ "../../packages/navigator/lib/browser/navigator-decorator-service.js"), exports);


/***/ }),

/***/ "../../packages/navigator/lib/browser/navigator-decorator-service.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/navigator/lib/browser/navigator-decorator-service.js ***!
  \******************************************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigatorDecoratorService = exports.NavigatorTreeDecorator = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var contribution_provider_1 = __webpack_require__(/*! @theia/core/lib/common/contribution-provider */ "../../packages/core/lib/common/contribution-provider.js");
var tree_decorator_1 = __webpack_require__(/*! @theia/core/lib/browser/tree/tree-decorator */ "../../packages/core/lib/browser/tree/tree-decorator.js");
/**
 * Symbol for all decorators that would like to contribute into the navigator.
 */
exports.NavigatorTreeDecorator = Symbol('NavigatorTreeDecorator');
/**
 * Decorator service for the navigator.
 */
var NavigatorDecoratorService = /** @class */ (function (_super) {
    __extends(NavigatorDecoratorService, _super);
    function NavigatorDecoratorService(contributions) {
        var _this = _super.call(this, contributions.getContributions()) || this;
        _this.contributions = contributions;
        return _this;
    }
    NavigatorDecoratorService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.NavigatorTreeDecorator)),
        __metadata("design:paramtypes", [Object])
    ], NavigatorDecoratorService);
    return NavigatorDecoratorService;
}(tree_decorator_1.AbstractTreeDecoratorService));
exports.NavigatorDecoratorService = NavigatorDecoratorService;


/***/ }),

/***/ "../../packages/scm/lib/browser/dirty-diff/content-lines.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/dirty-diff/content-lines.js ***!
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
exports.ContentLines = void 0;
var ContentLines;
(function (ContentLines) {
    var NL = '\n'.charCodeAt(0);
    var CR = '\r'.charCodeAt(0);
    function fromString(content) {
        var computeLineStarts = function (s) {
            var result = [0];
            for (var i = 0; i < s.length; i++) {
                var chr = s.charCodeAt(i);
                if (chr === CR) {
                    if (i + 1 < s.length && s.charCodeAt(i + 1) === NL) {
                        result[result.length] = i + 2;
                        i++;
                    }
                    else {
                        result[result.length] = i + 1;
                    }
                }
                else if (chr === NL) {
                    result[result.length] = i + 1;
                }
            }
            return result;
        };
        var lineStarts = computeLineStarts(content);
        return {
            length: lineStarts.length,
            getLineContent: function (line) {
                if (line >= lineStarts.length) {
                    throw new Error('line index out of bounds');
                }
                var start = lineStarts[line];
                var end = (line === lineStarts.length - 1) ? undefined : lineStarts[line + 1] - 1;
                if (!!end && content.charCodeAt(end - 1) === CR) {
                    end--; // ignore CR at the end
                }
                var lineContent = content.substring(start, end);
                return lineContent;
            }
        };
    }
    ContentLines.fromString = fromString;
    function arrayLike(lines) {
        return new Proxy(lines, getProxyHandler());
    }
    ContentLines.arrayLike = arrayLike;
    function getProxyHandler() {
        return {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            get: function (target, p) {
                switch (p) {
                    case 'prototype':
                        return undefined;
                    case 'length':
                        return target.length;
                    case 'slice':
                        return function (start, end) {
                            if (start !== undefined) {
                                return [start, (end !== undefined ? end - 1 : target.length - 1)];
                            }
                            return [0, target.length - 1];
                        };
                    case Symbol.iterator:
                        return function () {
                            var i;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        i = 0;
                                        _a.label = 1;
                                    case 1:
                                        if (!(i < target.length)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, target.getLineContent(i)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        i++;
                                        return [3 /*break*/, 1];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        };
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var index = Number.parseInt(p);
                if (Number.isInteger(index)) {
                    if (index >= 0 && index < target.length) {
                        var value = target.getLineContent(index);
                        if (value === undefined) {
                            console.log(target);
                        }
                        return value;
                    }
                    else {
                        return undefined;
                    }
                }
                throw new Error("get " + String(p) + " not implemented");
            }
        };
    }
})(ContentLines = exports.ContentLines || (exports.ContentLines = {}));


/***/ }),

/***/ "../../packages/scm/lib/browser/dirty-diff/diff-computer.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/dirty-diff/diff-computer.js ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffComputer = void 0;
var jsdiff = __webpack_require__(/*! diff */ "../../node_modules/diff/dist/diff.js");
var DiffComputer = /** @class */ (function () {
    function DiffComputer() {
    }
    DiffComputer.prototype.computeDiff = function (previous, current) {
        var diffResult = diffArrays(previous, current);
        return diffResult;
    };
    DiffComputer.prototype.computeDirtyDiff = function (previous, current) {
        var added = [];
        var removed = [];
        var modified = [];
        var changes = this.computeDiff(previous, current);
        var lastLine = -1;
        for (var i = 0; i < changes.length; i++) {
            var change = changes[i];
            var next = changes[i + 1];
            if (change.added) {
                // case: addition
                var start = lastLine + 1;
                var end = lastLine + change.count;
                added.push({ start: start, end: end });
                lastLine = end;
            }
            else if (change.removed && next && next.added) {
                var isFirstChange = i === 0;
                var isLastChange = i === changes.length - 2;
                var isNextEmptyLine = next.value.length > 0 && current[next.value[0]].length === 0;
                var isPrevEmptyLine = change.value.length > 0 && previous[change.value[0]].length === 0;
                if (isFirstChange && isNextEmptyLine) {
                    // special case: removing at the beginning
                    removed.push(0);
                }
                else if (isFirstChange && isPrevEmptyLine) {
                    // special case: adding at the beginning
                    var start = 0;
                    var end = next.count - 1;
                    added.push({ start: start, end: end });
                    lastLine = end;
                }
                else if (isLastChange && isNextEmptyLine) {
                    removed.push(lastLine + 1 /* = empty line */);
                }
                else {
                    // default case is a modification
                    var start = lastLine + 1;
                    var end = lastLine + next.count;
                    modified.push({ start: start, end: end });
                    lastLine = end;
                }
                i++; // consume next eagerly
            }
            else if (change.removed && !(next && next.added)) {
                removed.push(Math.max(0, lastLine));
            }
            else {
                lastLine += change.count;
            }
        }
        return { added: added, removed: removed, modified: modified };
    };
    return DiffComputer;
}());
exports.DiffComputer = DiffComputer;
var ArrayDiff = /** @class */ (function (_super) {
    __extends(ArrayDiff, _super);
    function ArrayDiff() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.tokenize = function (value) {
        return value;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.join = function (value) {
        return value;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ArrayDiff.prototype.removeEmpty = function (value) {
        return value;
    };
    return ArrayDiff;
}(jsdiff.Diff));
var arrayDiff = new ArrayDiff();
/**
 * Computes diff without copying data.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function diffArrays(oldArr, newArr) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return arrayDiff.diff(oldArr, newArr);
}


/***/ }),

/***/ "../../packages/scm/lib/browser/dirty-diff/dirty-diff-decorator.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/dirty-diff/dirty-diff-decorator.js ***!
  \****************************************************************************************************************************/
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
exports.DirtyDiffDecorator = exports.DirtyDiffDecorationType = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var browser_1 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
var DirtyDiffDecorationType;
(function (DirtyDiffDecorationType) {
    DirtyDiffDecorationType["AddedLine"] = "dirty-diff-added-line";
    DirtyDiffDecorationType["RemovedLine"] = "dirty-diff-removed-line";
    DirtyDiffDecorationType["ModifiedLine"] = "dirty-diff-modified-line";
})(DirtyDiffDecorationType = exports.DirtyDiffDecorationType || (exports.DirtyDiffDecorationType = {}));
var AddedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-added-line',
    overviewRuler: {
        color: {
            id: 'editorOverviewRuler.addedForeground'
        },
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: {
            id: 'minimapGutter.addedBackground'
        },
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: true
};
var RemovedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-removed-line',
    overviewRuler: {
        color: {
            id: 'editorOverviewRuler.deletedForeground'
        },
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: {
            id: 'minimapGutter.deletedBackground'
        },
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: false
};
var ModifiedLineDecoration = {
    linesDecorationsClassName: 'dirty-diff-glyph dirty-diff-modified-line',
    overviewRuler: {
        color: {
            id: 'editorOverviewRuler.modifiedForeground'
        },
        position: browser_1.OverviewRulerLane.Left,
    },
    minimap: {
        color: {
            id: 'minimapGutter.modifiedBackground'
        },
        position: browser_1.MinimapPosition.Gutter
    },
    isWholeLine: true
};
var DirtyDiffDecorator = /** @class */ (function (_super) {
    __extends(DirtyDiffDecorator, _super);
    function DirtyDiffDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirtyDiffDecorator.prototype.applyDecorations = function (update) {
        var _this = this;
        var modifications = update.modified.map(function (range) { return _this.toDeltaDecoration(range, ModifiedLineDecoration); });
        var additions = update.added.map(function (range) { return _this.toDeltaDecoration(range, AddedLineDecoration); });
        var removals = update.removed.map(function (line) { return _this.toDeltaDecoration(line, RemovedLineDecoration); });
        var decorations = __spread(modifications, additions, removals);
        this.setDecorations(update.editor, decorations);
    };
    DirtyDiffDecorator.prototype.toDeltaDecoration = function (from, options) {
        var _a = __read((typeof from === 'number') ? [from, from] : [from.start, from.end], 2), start = _a[0], end = _a[1];
        var range = browser_1.Range.create(browser_1.Position.create(start, 0), browser_1.Position.create(end, 0));
        return { range: range, options: options };
    };
    DirtyDiffDecorator = __decorate([
        inversify_1.injectable()
    ], DirtyDiffDecorator);
    return DirtyDiffDecorator;
}(browser_1.EditorDecorator));
exports.DirtyDiffDecorator = DirtyDiffDecorator;


/***/ })

}]);
//# sourceMappingURL=39.bundle.js.map