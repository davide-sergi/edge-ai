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
exports.FileResourceResolver = exports.FileResource = exports.FileResourceVersion = void 0;
var inversify_1 = require("inversify");
var resource_1 = require("@theia/core/lib/common/resource");
var disposable_1 = require("@theia/core/lib/common/disposable");
var event_1 = require("@theia/core/lib/common/event");
var filesystem_1 = require("../common/filesystem");
var filesystem_watcher_1 = require("./filesystem-watcher");
var FileResourceVersion;
(function (FileResourceVersion) {
    function is(version) {
        return !!version && 'stat' in version && filesystem_1.FileStat.is(version['stat']);
    }
    FileResourceVersion.is = is;
})(FileResourceVersion = exports.FileResourceVersion || (exports.FileResourceVersion = {}));
var FileResource = /** @class */ (function () {
    function FileResource(uri, fileSystem, fileSystemWatcher) {
        this.uri = uri;
        this.fileSystem = fileSystem;
        this.fileSystemWatcher = fileSystemWatcher;
        this.toDispose = new disposable_1.DisposableCollection();
        this.onDidChangeContentsEmitter = new event_1.Emitter();
        this.onDidChangeContents = this.onDidChangeContentsEmitter.event;
        this.uriString = this.uri.toString();
        this.toDispose.push(this.onDidChangeContentsEmitter);
    }
    Object.defineProperty(FileResource.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    FileResource.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stat, _a, _b, e_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.getFileStat()];
                    case 1:
                        stat = _c.sent();
                        if (stat && stat.isDirectory) {
                            throw new Error('The given uri is a directory: ' + this.uriString);
                        }
                        this.toDispose.push(this.fileSystemWatcher.onFilesChanged(function (event) {
                            if (filesystem_watcher_1.FileChangeEvent.isAffected(event, _this.uri)) {
                                _this.sync();
                            }
                        }));
                        this.toDispose.push(this.fileSystemWatcher.onDidDelete(function (event) {
                            if (event.uri.isEqualOrParent(_this.uri)) {
                                _this.sync();
                            }
                        }));
                        this.toDispose.push(this.fileSystemWatcher.onDidMove(function (event) {
                            if (event.sourceUri.isEqualOrParent(_this.uri) || event.targetUri.isEqualOrParent(_this.uri)) {
                                _this.sync();
                            }
                        }));
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        _b = (_a = this.toDispose).push;
                        return [4 /*yield*/, this.fileSystemWatcher.watchFileChanges(this.uri)];
                    case 3:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _c.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileResource.prototype.readContents = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, stat, content, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fileSystem.resolveContent(this.uriString, options)];
                    case 1:
                        _a = _b.sent(), stat = _a.stat, content = _a.content;
                        this._version = { stat: stat };
                        return [2 /*return*/, content];
                    case 2:
                        e_2 = _b.sent();
                        if (filesystem_1.FileSystemError.FileNotFound.is(e_2)) {
                            this._version = undefined;
                            throw resource_1.ResourceError.NotFound(__assign(__assign({}, e_2.toJson()), { data: {
                                    uri: this.uri
                                } }));
                        }
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.saveContents = function (content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var resolvedOptions, stat, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        resolvedOptions = options;
                        if (options && options.overwriteEncoding) {
                            resolvedOptions = __assign(__assign({}, options), { encoding: options.overwriteEncoding });
                            delete resolvedOptions.overwriteEncoding;
                        }
                        return [4 /*yield*/, this.doSaveContents(content, resolvedOptions)];
                    case 1:
                        stat = _a.sent();
                        this._version = { stat: stat };
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        if (filesystem_1.FileSystemError.FileIsOutOfSync.is(e_3)) {
                            throw resource_1.ResourceError.OutOfSync(__assign(__assign({}, e_3.toJson()), { data: { uri: this.uri } }));
                        }
                        throw e_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.doSaveContents = function (content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var version, stat, _a, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        version = options && options.version || this._version;
                        _a = FileResourceVersion.is(version) && version.stat;
                        if (_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getFileStat()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        stat = _a;
                        if (!stat) return [3 /*break*/, 6];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.fileSystem.setContent(stat, content, options)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5:
                        e_4 = _b.sent();
                        if (!filesystem_1.FileSystemError.FileNotFound.is(e_4)) {
                            throw e_4;
                        }
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, this.fileSystem.createFile(this.uriString, __assign({ content: content }, options))];
                }
            });
        });
    };
    FileResource.prototype.saveContentChanges = function (changes, options) {
        return __awaiter(this, void 0, void 0, function () {
            var version, currentStat, stat, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        version = options && options.version || this._version;
                        currentStat = FileResourceVersion.is(version) && version.stat;
                        if (!currentStat) {
                            throw resource_1.ResourceError.NotFound({ message: 'has not been read yet', data: { uri: this.uri } });
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fileSystem.updateContent(currentStat, changes, options)];
                    case 2:
                        stat = _a.sent();
                        this._version = { stat: stat };
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        if (filesystem_1.FileSystemError.FileNotFound.is(e_5)) {
                            throw resource_1.ResourceError.NotFound(__assign(__assign({}, e_5.toJson()), { data: { uri: this.uri } }));
                        }
                        if (filesystem_1.FileSystemError.FileIsOutOfSync.is(e_5)) {
                            throw resource_1.ResourceError.OutOfSync(__assign(__assign({}, e_5.toJson()), { data: { uri: this.uri } }));
                        }
                        throw e_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.guessEncoding = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fileSystem.guessEncoding(this.uriString)];
            });
        });
    };
    FileResource.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isInSync(this.version && this.version.stat)];
                    case 1:
                        if (_a.sent()) {
                            return [2 /*return*/];
                        }
                        this.onDidChangeContentsEmitter.fire(undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    FileResource.prototype.isInSync = function (current) {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFileStat()];
                    case 1:
                        stat = _a.sent();
                        if (!current) {
                            return [2 /*return*/, !stat];
                        }
                        return [2 /*return*/, !!stat && current.lastModification >= stat.lastModification];
                }
            });
        });
    };
    FileResource.prototype.getFileStat = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fileSystem.exists(this.uriString)];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/, undefined];
                        }
                        try {
                            return [2 /*return*/, this.fileSystem.getFileStat(this.uriString)];
                        }
                        catch (_b) {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return FileResource;
}());
exports.FileResource = FileResource;
var FileResourceResolver = /** @class */ (function () {
    function FileResourceResolver() {
    }
    FileResourceResolver.prototype.resolve = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            var resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (uri.scheme !== 'file') {
                            throw new Error('The given uri is not file uri: ' + uri);
                        }
                        resource = new FileResource(uri, this.fileSystem, this.fileSystemWatcher);
                        return [4 /*yield*/, resource.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, resource];
                }
            });
        });
    };
    __decorate([
        inversify_1.inject(filesystem_1.FileSystem),
        __metadata("design:type", Object)
    ], FileResourceResolver.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], FileResourceResolver.prototype, "fileSystemWatcher", void 0);
    FileResourceResolver = __decorate([
        inversify_1.injectable()
    ], FileResourceResolver);
    return FileResourceResolver;
}());
exports.FileResourceResolver = FileResourceResolver;
//# sourceMappingURL=file-resource.js.map