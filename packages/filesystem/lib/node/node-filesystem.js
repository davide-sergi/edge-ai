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
exports.FileSystemNode = exports.FileSystemNodeOptions = void 0;
var mv = require("mv");
var trash = require("trash");
var paths = require("path");
var fs = require("fs-extra");
var uuid_1 = require("uuid");
var os = require("os");
var touch = require("touch");
var drivelist = require("drivelist");
var inversify_1 = require("inversify");
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var uri_1 = require("@theia/core/lib/common/uri");
var lsp_types_1 = require("@theia/core/lib/common/lsp-types");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var filesystem_1 = require("../common/filesystem");
var iconv = require("iconv-lite");
var encoding_util_1 = require("./encoding-util");
var FileSystemNodeOptions = /** @class */ (function () {
    function FileSystemNodeOptions() {
    }
    FileSystemNodeOptions.DEFAULT = {
        encoding: 'utf8',
        overwrite: false,
        recursive: true,
        moveToTrash: true
    };
    FileSystemNodeOptions = __decorate([
        inversify_1.injectable()
    ], FileSystemNodeOptions);
    return FileSystemNodeOptions;
}());
exports.FileSystemNodeOptions = FileSystemNodeOptions;
var FileSystemNode = /** @class */ (function () {
    function FileSystemNode(options) {
        if (options === void 0) { options = FileSystemNodeOptions.DEFAULT; }
        this.options = options;
    }
    FileSystemNode.prototype.setClient = function (client) {
        this.client = client;
    };
    FileSystemNode.prototype.getFileStat = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var uri_, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri_ = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(uri_, 1)];
                    case 1:
                        stat = _a.sent();
                        return [2 /*return*/, stat];
                }
            });
        });
    };
    FileSystemNode.prototype.exists = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fs.pathExists(file_uri_1.FileUri.fsPath(new uri_1.default(uri)))];
            });
        });
    };
    FileSystemNode.prototype.resolveContent = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, contentBuffer, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(uri, 'Cannot resolve the content.');
                        }
                        return [4 /*yield*/, this.doGetEncoding(options)];
                    case 2:
                        encoding = _a.sent();
                        return [4 /*yield*/, fs.readFile(file_uri_1.FileUri.fsPath(_uri))];
                    case 3:
                        contentBuffer = _a.sent();
                        content = iconv.decode(contentBuffer, encoding);
                        return [2 /*return*/, { stat: stat, content: content }];
                }
            });
        });
    };
    FileSystemNode.prototype.setContent = function (file, content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, encodedContent, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(file.uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(file.uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
                        }
                        return [4 /*yield*/, this.isInSync(file, stat)];
                    case 2:
                        if (!(_a.sent())) {
                            throw this.createOutOfSyncError(file, stat);
                        }
                        return [4 /*yield*/, this.doGetEncoding(options)];
                    case 3:
                        encoding = _a.sent();
                        encodedContent = iconv.encode(content, encoding);
                        return [4 /*yield*/, fs.writeFile(file_uri_1.FileUri.fsPath(_uri), encodedContent)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 5:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
                }
            });
        });
    };
    FileSystemNode.prototype.updateContent = function (file, contentChanges, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, encoding, contentBuffer, content, newContent, writeEncoding, encodedNewContent, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(file.uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(file.uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(file.uri, 'Cannot set the content.');
                        }
                        if (!this.checkInSync(file, stat)) {
                            throw this.createOutOfSyncError(file, stat);
                        }
                        if (contentChanges.length === 0 && !(options && options.overwriteEncoding)) {
                            return [2 /*return*/, stat];
                        }
                        return [4 /*yield*/, this.doGetEncoding(options)];
                    case 2:
                        encoding = _a.sent();
                        return [4 /*yield*/, fs.readFile(file_uri_1.FileUri.fsPath(_uri))];
                    case 3:
                        contentBuffer = _a.sent();
                        content = iconv.decode(contentBuffer, encoding);
                        newContent = this.applyContentChanges(content, contentChanges);
                        writeEncoding = options && options.overwriteEncoding ? options.overwriteEncoding : encoding;
                        encodedNewContent = iconv.encode(newContent, writeEncoding);
                        return [4 /*yield*/, fs.writeFile(file_uri_1.FileUri.fsPath(_uri), encodedNewContent)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 5:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(file.uri, 'Error occurred while writing file content.');
                }
            });
        });
    };
    FileSystemNode.prototype.applyContentChanges = function (content, contentChanges) {
        var e_1, _a;
        var document = vscode_languageserver_types_1.TextDocument.create('', '', 1, content);
        try {
            for (var contentChanges_1 = __values(contentChanges), contentChanges_1_1 = contentChanges_1.next(); !contentChanges_1_1.done; contentChanges_1_1 = contentChanges_1.next()) {
                var change = contentChanges_1_1.value;
                var newContent = void 0;
                if (lsp_types_1.TextDocumentContentChangeDelta.is(change)) {
                    var start = document.offsetAt(change.range.start);
                    var end = document.offsetAt(change.range.end);
                    newContent = document.getText().substr(0, start) + change.text + document.getText().substr(end);
                }
                else {
                    newContent = change.text;
                }
                document = vscode_languageserver_types_1.TextDocument.create(document.uri, document.languageId, document.version, newContent);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (contentChanges_1_1 && !contentChanges_1_1.done && (_a = contentChanges_1.return)) _a.call(contentChanges_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return document.getText();
    };
    FileSystemNode.prototype.isInSync = function (file, stat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.checkInSync(file, stat)) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, this.client ? this.client.shouldOverwrite(file, stat) : false];
            });
        });
    };
    FileSystemNode.prototype.checkInSync = function (file, stat) {
        return stat.lastModification === file.lastModification && stat.size === file.size;
    };
    FileSystemNode.prototype.createOutOfSyncError = function (file, stat) {
        return filesystem_1.FileSystemError.FileIsOutOfSync(file, stat);
    };
    FileSystemNode.prototype.move = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var result, failed, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.client) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.willMove(sourceUri, targetUri)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        failed = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 9]);
                        return [4 /*yield*/, this.doMove(sourceUri, targetUri, options)];
                    case 4:
                        result = _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        e_2 = _a.sent();
                        failed = true;
                        throw e_2;
                    case 6:
                        if (!this.client) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.client.didMove(sourceUri, targetUri, failed)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, result];
                }
            });
        });
    };
    FileSystemNode.prototype.doMove = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _sourceUri, _targetUri, _a, sourceStat, targetStat, overwrite, _b, sourceMightHaveChildren, targetMightHaveChildren, now, newStat, newStat;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _sourceUri = new uri_1.default(sourceUri);
                        _targetUri = new uri_1.default(targetUri);
                        return [4 /*yield*/, Promise.all([this.doGetStat(_sourceUri, 1), this.doGetStat(_targetUri, 1), this.doGetOverwrite(options)])];
                    case 1:
                        _a = __read.apply(void 0, [_c.sent(), 3]), sourceStat = _a[0], targetStat = _a[1], overwrite = _a[2];
                        if (!sourceStat) {
                            throw filesystem_1.FileSystemError.FileNotFound(sourceUri);
                        }
                        if (targetStat && !overwrite) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
                        }
                        // Different types. Files <-> Directory.
                        if (targetStat && sourceStat.isDirectory !== targetStat.isDirectory) {
                            if (targetStat.isDirectory) {
                                throw filesystem_1.FileSystemError.FileIsDirectory(targetStat.uri, "Cannot move '" + sourceStat.uri + "' file to an existing location.");
                            }
                            throw filesystem_1.FileSystemError.FileNotDirectory(targetStat.uri, "Cannot move '" + sourceStat.uri + "' directory to an existing location.");
                        }
                        return [4 /*yield*/, Promise.all([this.mayHaveChildren(_sourceUri), this.mayHaveChildren(_targetUri)])];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 2]), sourceMightHaveChildren = _b[0], targetMightHaveChildren = _b[1];
                        if (!(overwrite && targetStat && targetStat.isDirectory && sourceStat.isDirectory && !sourceMightHaveChildren && !targetMightHaveChildren)) return [3 /*break*/, 6];
                        now = Date.now() / 1000;
                        return [4 /*yield*/, fs.utimes(file_uri_1.FileUri.fsPath(_targetUri), now, now)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, fs.rmdir(file_uri_1.FileUri.fsPath(_sourceUri))];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.doGetStat(_targetUri, 1)];
                    case 5:
                        newStat = _c.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(targetUri, "Error occurred when moving resource from '" + sourceUri + "' to '" + targetUri + "'.");
                    case 6:
                        if (!(overwrite && targetStat && targetStat.isDirectory && sourceStat.isDirectory && !targetMightHaveChildren && sourceMightHaveChildren)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.copy(sourceUri, targetUri, { overwrite: overwrite })];
                    case 7:
                        newStat = _c.sent();
                        return [4 /*yield*/, this.delete(sourceUri)];
                    case 8:
                        _c.sent();
                        return [2 /*return*/, newStat];
                    case 9: return [2 /*return*/, new Promise(function (resolve, reject) {
                            mv(file_uri_1.FileUri.fsPath(_sourceUri), file_uri_1.FileUri.fsPath(_targetUri), { mkdirp: true, clobber: overwrite }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (error) {
                                                reject(error);
                                                return [2 /*return*/];
                                            }
                                            _a = resolve;
                                            return [4 /*yield*/, this.doGetStat(_targetUri, 1)];
                                        case 1:
                                            _a.apply(void 0, [_b.sent()]);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        })];
                }
            });
        });
    };
    FileSystemNode.prototype.copy = function (sourceUri, targetUri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _sourceUri, _targetUri, _a, sourceStat, targetStat, overwrite, recursive, newStat;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _sourceUri = new uri_1.default(sourceUri);
                        _targetUri = new uri_1.default(targetUri);
                        return [4 /*yield*/, Promise.all([
                                this.doGetStat(_sourceUri, 0),
                                this.doGetStat(_targetUri, 0),
                                this.doGetOverwrite(options),
                                this.doGetRecursive(options)
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 4]), sourceStat = _a[0], targetStat = _a[1], overwrite = _a[2], recursive = _a[3];
                        if (!sourceStat) {
                            throw filesystem_1.FileSystemError.FileNotFound(sourceUri);
                        }
                        if (targetStat && !overwrite) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, "Did you set the 'overwrite' flag to true?");
                        }
                        if (targetStat && targetStat.uri === sourceStat.uri) {
                            throw filesystem_1.FileSystemError.FileExists(targetUri, 'Cannot perform copy, source and destination are the same.');
                        }
                        return [4 /*yield*/, fs.copy(file_uri_1.FileUri.fsPath(_sourceUri), file_uri_1.FileUri.fsPath(_targetUri), { overwrite: overwrite, recursive: recursive })];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.doGetStat(_targetUri, 1)];
                    case 3:
                        newStat = _b.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(targetUri, "Error occurred while copying " + sourceUri + " to " + targetUri + ".");
                }
            });
        });
    };
    FileSystemNode.prototype.createFile = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, parentUri, _a, stat, parentStat, content, encoding, encodedNewContent, newStat;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        parentUri = _uri.parent;
                        return [4 /*yield*/, Promise.all([this.doGetStat(_uri, 0), this.doGetStat(parentUri, 0)])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), stat = _a[0], parentStat = _a[1];
                        if (stat) {
                            throw filesystem_1.FileSystemError.FileExists(uri, 'Error occurred while creating the file.');
                        }
                        if (!!parentStat) return [3 /*break*/, 3];
                        return [4 /*yield*/, fs.mkdirs(file_uri_1.FileUri.fsPath(parentUri))];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [4 /*yield*/, this.doGetContent(options)];
                    case 4:
                        content = _b.sent();
                        return [4 /*yield*/, this.doGetEncoding(options)];
                    case 5:
                        encoding = _b.sent();
                        encodedNewContent = iconv.encode(content, encoding);
                        return [4 /*yield*/, fs.writeFile(file_uri_1.FileUri.fsPath(_uri), encodedNewContent)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 7:
                        newStat = _b.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(uri, 'Error occurred while creating the file.');
                }
            });
        });
    };
    FileSystemNode.prototype.createFolder = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, newStat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (stat) {
                            if (stat.isDirectory) {
                                return [2 /*return*/, stat];
                            }
                            throw filesystem_1.FileSystemError.FileExists(uri, 'Error occurred while creating the directory: path is a file.');
                        }
                        return [4 /*yield*/, fs.mkdirs(file_uri_1.FileUri.fsPath(_uri))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.doGetStat(_uri, 1)];
                    case 3:
                        newStat = _a.sent();
                        if (newStat) {
                            return [2 /*return*/, newStat];
                        }
                        throw filesystem_1.FileSystemError.FileNotFound(uri, 'Error occurred while creating the directory.');
                }
            });
        });
    };
    FileSystemNode.prototype.touchFile = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            return [2 /*return*/, this.createFile(uri)];
                        }
                        else {
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    touch(file_uri_1.FileUri.fsPath(_uri), function (error) { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    if (error) {
                                                        reject(error);
                                                        return [2 /*return*/];
                                                    }
                                                    _a = resolve;
                                                    return [4 /*yield*/, this.doGetStat(_uri, 1)];
                                                case 1:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.delete = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var failed, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.client) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.willDelete(uri)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        failed = false;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 6, 9]);
                        return [4 /*yield*/, this.doDelete(uri, options)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        e_3 = _a.sent();
                        failed = true;
                        throw e_3;
                    case 6:
                        if (!this.client) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.client.didDelete(uri, failed)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.doDelete = function (uri, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, moveToTrash, filePath_1, outputRootPath_1, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        return [4 /*yield*/, this.doGetMoveToTrash(options)];
                    case 2:
                        moveToTrash = _a.sent();
                        if (!moveToTrash) return [3 /*break*/, 3];
                        return [2 /*return*/, trash([file_uri_1.FileUri.fsPath(_uri)])];
                    case 3:
                        filePath_1 = file_uri_1.FileUri.fsPath(_uri);
                        outputRootPath_1 = paths.join(os.tmpdir(), uuid_1.v4());
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return mv(filePath_1, outputRootPath_1, { mkdirp: true, clobber: true }, function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (error) {
                                        reject(error);
                                        return [2 /*return*/];
                                    }
                                    resolve(undefined);
                                    return [2 /*return*/];
                                });
                            }); }); })];
                    case 5:
                        _a.sent();
                        // There is no reason for the promise returned by this function not to resolve
                        // as soon as the move is complete.  Clearing up the temporary files can be
                        // done in the background.
                        fs.remove(outputRootPath_1);
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        return [2 /*return*/, fs.remove(filePath_1)];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.getEncoding = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _a.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(uri, 'Cannot get the encoding.');
                        }
                        return [2 /*return*/, this.options.encoding];
                }
            });
        });
    };
    FileSystemNode.prototype.guessEncoding = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var _uri, stat, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _uri = new uri_1.default(uri);
                        return [4 /*yield*/, this.doGetStat(_uri, 0)];
                    case 1:
                        stat = _c.sent();
                        if (!stat) {
                            throw filesystem_1.FileSystemError.FileNotFound(uri);
                        }
                        if (stat.isDirectory) {
                            throw filesystem_1.FileSystemError.FileIsDirectory(uri, 'Cannot guess the encoding.');
                        }
                        _b = (_a = encoding_util_1.EncodingUtil).guessEncodingByBuffer;
                        return [4 /*yield*/, fs.readFile(file_uri_1.FileUri.fsPath(_uri))];
                    case 2: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    FileSystemNode.prototype.getRoots = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cwdRoot, rootUri, root;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cwdRoot = paths.parse(process.cwd()).root;
                        rootUri = file_uri_1.FileUri.create(cwdRoot);
                        return [4 /*yield*/, this.doGetStat(rootUri, 1)];
                    case 1:
                        root = _a.sent();
                        if (root) {
                            return [2 /*return*/, [root]];
                        }
                        return [2 /*return*/, []];
                }
            });
        });
    };
    FileSystemNode.prototype.getCurrentUserHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getFileStat(file_uri_1.FileUri.create(os.homedir()).toString())];
            });
        });
    };
    FileSystemNode.prototype.getDrives = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            drivelist.list(function (error, drives) {
                if (error) {
                    reject(error);
                    return;
                }
                var uris = drives
                    .map(function (drive) { return drive.mountpoints; })
                    .reduce(function (prev, curr) { return prev.concat(curr); }, [])
                    .map(function (mountpoint) { return mountpoint.path; })
                    .filter(_this.filterMountpointPath.bind(_this))
                    .map(function (path) { return file_uri_1.FileUri.create(path); })
                    .map(function (uri) { return uri.toString(); });
                resolve(uris);
            });
        });
    };
    /**
     * Filters hidden and system partitions.
     */
    FileSystemNode.prototype.filterMountpointPath = function (path) {
        // OS X: This is your sleep-image. When your Mac goes to sleep it writes the contents of its memory to the hard disk. (https://bit.ly/2R6cztl)
        if (path === '/private/var/vm') {
            return false;
        }
        // Ubuntu: This system partition is simply the boot partition created when the computers mother board runs UEFI rather than BIOS. (https://bit.ly/2N5duHr)
        if (path === '/boot/efi') {
            return false;
        }
        return true;
    };
    FileSystemNode.prototype.dispose = function () {
        // NOOP
    };
    FileSystemNode.prototype.access = function (uri, mode) {
        if (mode === void 0) { mode = filesystem_1.FileAccess.Constants.F_OK; }
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.access(file_uri_1.FileUri.fsPath(uri), mode)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/, true];
                    case 2:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.getFsPath = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!uri.startsWith('file:/')) {
                    return [2 /*return*/, undefined];
                }
                else {
                    return [2 /*return*/, file_uri_1.FileUri.fsPath(uri)];
                }
                return [2 /*return*/];
            });
        });
    };
    FileSystemNode.prototype.doGetStat = function (uri, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var stats, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, fs.stat(file_uri_1.FileUri.fsPath(uri))];
                    case 1:
                        stats = _a.sent();
                        if (stats.isDirectory()) {
                            return [2 /*return*/, this.doCreateDirectoryStat(uri, stats, depth)];
                        }
                        return [2 /*return*/, this.doCreateFileStat(uri, stats)];
                    case 2:
                        error_2 = _a.sent();
                        if (isErrnoException(error_2)) {
                            if (error_2.code === 'ENOENT' || error_2.code === 'EACCES' || error_2.code === 'EBUSY' || error_2.code === 'EPERM') {
                                return [2 /*return*/, undefined];
                            }
                        }
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.doCreateFileStat = function (uri, stat) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        uri: uri.toString(),
                        lastModification: stat.mtime.getTime(),
                        isDirectory: false,
                        size: stat.size
                    }];
            });
        });
    };
    FileSystemNode.prototype.doCreateDirectoryStat = function (uri, stat, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var children, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(depth > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.doGetChildren(uri, depth)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = [];
                        _b.label = 3;
                    case 3:
                        children = _a;
                        return [2 /*return*/, {
                                uri: uri.toString(),
                                lastModification: stat.mtime.getTime(),
                                isDirectory: true,
                                children: children
                            }];
                }
            });
        });
    };
    FileSystemNode.prototype.doGetChildren = function (uri, depth) {
        return __awaiter(this, void 0, void 0, function () {
            var files, children;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fs.readdir(file_uri_1.FileUri.fsPath(uri))];
                    case 1:
                        files = _a.sent();
                        return [4 /*yield*/, Promise.all(files.map(function (fileName) { return uri.resolve(fileName); }).map(function (childUri) { return _this.doGetStat(childUri, depth - 1); }))];
                    case 2:
                        children = _a.sent();
                        return [2 /*return*/, children.filter(notEmpty)];
                }
            });
        });
    };
    /**
     * Return `true` if it's possible for this URI to have children.
     * It might not be possible to be certain because of permission problems or other filesystem errors.
     */
    FileSystemNode.prototype.mayHaveChildren = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var rootStat, _a, stat, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.doGetStat(uri, 0)];
                    case 1:
                        rootStat = _c.sent();
                        if (rootStat === undefined) {
                            return [2 /*return*/, true];
                        }
                        /* Not a directory.  */
                        if (rootStat !== undefined && rootStat.isDirectory === false) {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        _a = _c.sent();
                        return [2 /*return*/, true];
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.doGetStat(uri, 1)];
                    case 4:
                        stat = _c.sent();
                        if (stat !== undefined && stat.children !== undefined) {
                            return [2 /*return*/, stat.children.length > 0];
                        }
                        else {
                            return [2 /*return*/, true];
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        _b = _c.sent();
                        return [2 /*return*/, true];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    FileSystemNode.prototype.doGetEncoding = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, option && typeof (option.encoding) !== 'undefined'
                        ? option.encoding
                        : this.options.encoding];
            });
        });
    };
    FileSystemNode.prototype.doGetOverwrite = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, option && typeof (option.overwrite) !== 'undefined'
                        ? option.overwrite
                        : this.options.overwrite];
            });
        });
    };
    FileSystemNode.prototype.doGetRecursive = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, option && typeof (option.recursive) !== 'undefined'
                        ? option.recursive
                        : this.options.recursive];
            });
        });
    };
    FileSystemNode.prototype.doGetMoveToTrash = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, option && typeof (option.moveToTrash) !== 'undefined'
                        ? option.moveToTrash
                        : this.options.moveToTrash];
            });
        });
    };
    FileSystemNode.prototype.doGetContent = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (option && option.content) || ''];
            });
        });
    };
    FileSystemNode = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(FileSystemNodeOptions)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [FileSystemNodeOptions])
    ], FileSystemNode);
    return FileSystemNode;
}());
exports.FileSystemNode = FileSystemNode;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isErrnoException(error) {
    return error.code !== undefined && error.errno !== undefined;
}
function notEmpty(value) {
    return value !== undefined;
}
//# sourceMappingURL=node-filesystem.js.map