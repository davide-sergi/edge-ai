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
var assert = require("assert");
var reference_1 = require("./reference");
describe('reference', function () {
    it('dispose a single reference', function () { return __awaiter(void 0, void 0, void 0, function () {
        var expectation, references, reference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expectation = { disposed: false };
                    references = new reference_1.ReferenceCollection(function (key) { return ({
                        key: key, dispose: function () {
                            expectation.disposed = true;
                        }
                    }); });
                    assert.ok(!references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [4 /*yield*/, references.acquire('a')];
                case 1:
                    reference = _a.sent();
                    assert.ok(references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), ['a']);
                    reference.dispose();
                    assert.ok(!references.has('a'));
                    assert.ok(expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [2 /*return*/];
            }
        });
    }); });
    it('dispose 2 references', function () { return __awaiter(void 0, void 0, void 0, function () {
        var expectation, references, reference, reference2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expectation = { disposed: false };
                    references = new reference_1.ReferenceCollection(function (key) { return ({
                        key: key, dispose: function () {
                            expectation.disposed = true;
                        }
                    }); });
                    assert.ok(!references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [4 /*yield*/, references.acquire('a')];
                case 1:
                    reference = _a.sent();
                    return [4 /*yield*/, references.acquire('a')];
                case 2:
                    reference2 = _a.sent();
                    assert.ok(references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), ['a']);
                    reference.dispose();
                    assert.ok(references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), ['a']);
                    reference2.dispose();
                    assert.ok(!references.has('a'));
                    assert.ok(expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [2 /*return*/];
            }
        });
    }); });
    it('dispose an object with 2 references', function () { return __awaiter(void 0, void 0, void 0, function () {
        var expectation, references, reference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expectation = { disposed: false };
                    references = new reference_1.ReferenceCollection(function (key) { return ({
                        key: key, dispose: function () {
                            expectation.disposed = true;
                        }
                    }); });
                    assert.ok(!references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [4 /*yield*/, references.acquire('a')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, references.acquire('a')];
                case 2:
                    reference = _a.sent();
                    assert.ok(references.has('a'));
                    assert.ok(!expectation.disposed);
                    assert.deepEqual(references.keys(), ['a']);
                    reference.object.dispose();
                    assert.ok(!references.has('a'));
                    assert.ok(expectation.disposed);
                    assert.deepEqual(references.keys(), []);
                    return [2 /*return*/];
            }
        });
    }); });
    it("shouldn't call onWillDispose event on create", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expectation, references, reference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    expectation = { disposed: false };
                    references = new reference_1.ReferenceCollection(function (key) { return ({
                        key: key, dispose: function () {
                        }
                    }); });
                    assert.ok(!references.has('a'));
                    assert.ok(!expectation.disposed);
                    references.onWillDispose(function (e) {
                        expectation.disposed = true;
                    });
                    return [4 /*yield*/, references.acquire('a')];
                case 1:
                    _a.sent();
                    assert.ok(!expectation.disposed);
                    return [4 /*yield*/, references.acquire('a')];
                case 2:
                    reference = _a.sent();
                    reference.object.dispose();
                    assert.ok(expectation.disposed);
                    return [2 /*return*/];
            }
        });
    }); });
    it('the same object should be provided by an async factory for the same key', function () { return __awaiter(void 0, void 0, void 0, function () {
        var references, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    references = new reference_1.ReferenceCollection(function (key) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, ({
                                    key: key, dispose: function () {
                                    }
                                })];
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(__spread(Array(10).keys()).map(function () { return references.acquire('a'); }))];
                case 1:
                    result = _a.sent();
                    result.forEach(function (v) { return assert.ok(result[0].object === v.object); });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not dispose an object if a reference is pending', function () { return __awaiter(void 0, void 0, void 0, function () {
        var disposed, references, reference, pendingReference;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    disposed = false;
                    references = new reference_1.ReferenceCollection(function (key) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, ({
                                    key: key, dispose: function () {
                                        disposed = true;
                                    }
                                })];
                        });
                    }); });
                    assert.ok(!disposed);
                    return [4 /*yield*/, references.acquire('a')];
                case 1:
                    reference = _a.sent();
                    pendingReference = references.acquire('a');
                    reference.dispose();
                    assert.ok(!disposed);
                    return [4 /*yield*/, pendingReference];
                case 2:
                    reference = _a.sent();
                    reference.dispose();
                    assert.ok(disposed);
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=reference.spec.js.map