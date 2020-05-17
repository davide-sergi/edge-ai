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
exports.DebugWatchExpression = void 0;
var React = require("react");
var dialogs_1 = require("@theia/core/lib/browser/dialogs");
var debug_console_items_1 = require("../console/debug-console-items");
var DebugWatchExpression = /** @class */ (function (_super) {
    __extends(DebugWatchExpression, _super);
    function DebugWatchExpression(options) {
        var _this = _super.call(this, options.expression, options.session) || this;
        _this.options = options;
        _this.setValueRef = function (valueRef) { return _this.valueRef = valueRef || undefined; };
        _this.id = options.id;
        return _this;
    }
    DebugWatchExpression.prototype.evaluate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.evaluate.call(this, 'watch')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DebugWatchExpression.prototype.setResult = function (body) {
        // overridden to ignore error
        _super.prototype.setResult.call(this, body);
        this.options.onDidChange();
    };
    DebugWatchExpression.prototype.render = function () {
        return React.createElement("div", { className: 'theia-debug-console-variable' },
            React.createElement("span", { title: this.type || this._expression, className: 'name' },
                this._expression,
                ": "),
            React.createElement("span", { title: this._value, ref: this.setValueRef }, this._value));
    };
    DebugWatchExpression.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var input, newValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = new dialogs_1.SingleTextInputDialog({
                            title: 'Edit Watch Expression',
                            initialValue: this.expression
                        });
                        return [4 /*yield*/, input.open()];
                    case 1:
                        newValue = _a.sent();
                        if (!(newValue !== undefined)) return [3 /*break*/, 3];
                        this._expression = newValue;
                        return [4 /*yield*/, this.evaluate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(DebugWatchExpression.prototype, "supportCopyValue", {
        get: function () {
            return !!this.valueRef && document.queryCommandSupported('copy');
        },
        enumerable: false,
        configurable: true
    });
    DebugWatchExpression.prototype.copyValue = function () {
        var selection = document.getSelection();
        if (this.valueRef && selection) {
            selection.selectAllChildren(this.valueRef);
            document.execCommand('copy');
        }
    };
    return DebugWatchExpression;
}(debug_console_items_1.ExpressionItem));
exports.DebugWatchExpression = DebugWatchExpression;
//# sourceMappingURL=debug-watch-expression.js.map