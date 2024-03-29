"use strict";
/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
exports.QuickOpenWorkspace = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var env_variables_1 = require("@theia/core/lib/common/env-variables");
var workspace_service_1 = require("./workspace-service");
var common_1 = require("../common");
var workspace_preferences_1 = require("./workspace-preferences");
var uri_1 = require("@theia/core/lib/common/uri");
var common_2 = require("@theia/filesystem/lib/common");
var moment = require("moment");
var QuickOpenWorkspace = /** @class */ (function () {
    function QuickOpenWorkspace() {
    }
    QuickOpenWorkspace.prototype.open = function (workspaces) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, homeDirUri, tempWorkspaceFile, home, _b, _loop_1, this_1, workspaces_1, workspaces_1_1, workspace, e_1_1;
            var e_1, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.items = [];
                        return [4 /*yield*/, Promise.all([
                                this.fileSystem.getCurrentUserHome(),
                                common_1.getTemporaryWorkspaceFileUri(this.envServer)
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_d.sent(), 2]), homeDirUri = _a[0], tempWorkspaceFile = _a[1];
                        if (!homeDirUri) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.fileSystem.getFsPath(homeDirUri.uri)];
                    case 2:
                        _b = _d.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _b = undefined;
                        _d.label = 4;
                    case 4:
                        home = _b;
                        return [4 /*yield*/, this.preferences.ready];
                    case 5:
                        _d.sent();
                        if (!workspaces.length) {
                            this.items.push(new browser_1.QuickOpenGroupItem({
                                label: 'No Recent Workspaces',
                                run: function (mode) { return false; }
                            }));
                        }
                        _loop_1 = function (workspace) {
                            var uri, stat, icon, iconClass;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        uri = new uri_1.default(workspace);
                                        return [4 /*yield*/, this_1.fileSystem.getFileStat(workspace)];
                                    case 1:
                                        stat = _a.sent();
                                        if (!stat ||
                                            !this_1.preferences['workspace.supportMultiRootWorkspace'] && !stat.isDirectory) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        if (uri.toString() === tempWorkspaceFile.toString()) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        icon = this_1.labelProvider.getIcon(stat);
                                        iconClass = icon === '' ? undefined : icon + ' file-icon';
                                        this_1.items.push(new browser_1.QuickOpenGroupItem({
                                            label: uri.path.base,
                                            description: (home) ? common_2.FileSystemUtils.tildifyPath(uri.path.toString(), home) : uri.path.toString(),
                                            groupLabel: "last modified " + moment(stat.lastModification).fromNow(),
                                            iconClass: iconClass,
                                            run: function (mode) {
                                                if (mode !== browser_1.QuickOpenMode.OPEN) {
                                                    return false;
                                                }
                                                var current = _this.workspaceService.workspace;
                                                var uriToOpen = new uri_1.default(workspace);
                                                if ((current && current.uri !== workspace) || !current) {
                                                    _this.workspaceService.open(uriToOpen);
                                                }
                                                return true;
                                            },
                                        }));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 11, 12, 13]);
                        workspaces_1 = __values(workspaces), workspaces_1_1 = workspaces_1.next();
                        _d.label = 7;
                    case 7:
                        if (!!workspaces_1_1.done) return [3 /*break*/, 10];
                        workspace = workspaces_1_1.value;
                        return [5 /*yield**/, _loop_1(workspace)];
                    case 8:
                        _d.sent();
                        _d.label = 9;
                    case 9:
                        workspaces_1_1 = workspaces_1.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (workspaces_1_1 && !workspaces_1_1.done && (_c = workspaces_1.return)) _c.call(workspaces_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        this.quickOpenService.open(this, {
                            placeholder: 'Type the name of the workspace you want to open',
                            fuzzyMatchLabel: true,
                            fuzzySort: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    QuickOpenWorkspace.prototype.onType = function (lookFor, acceptor) {
        acceptor(this.items);
    };
    QuickOpenWorkspace.prototype.select = function () {
        var _this = this;
        this.items = [];
        this.opened = this.workspaceService.opened;
        this.workspaceService.recentWorkspaces().then(function (workspaceRoots) {
            if (workspaceRoots) {
                _this.open(workspaceRoots);
            }
        });
    };
    __decorate([
        inversify_1.inject(browser_1.QuickOpenService),
        __metadata("design:type", browser_1.QuickOpenService)
    ], QuickOpenWorkspace.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(workspace_service_1.WorkspaceService),
        __metadata("design:type", workspace_service_1.WorkspaceService)
    ], QuickOpenWorkspace.prototype, "workspaceService", void 0);
    __decorate([
        inversify_1.inject(common_2.FileSystem),
        __metadata("design:type", Object)
    ], QuickOpenWorkspace.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], QuickOpenWorkspace.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(workspace_preferences_1.WorkspacePreferences),
        __metadata("design:type", Object)
    ], QuickOpenWorkspace.prototype, "preferences", void 0);
    __decorate([
        inversify_1.inject(env_variables_1.EnvVariablesServer),
        __metadata("design:type", Object)
    ], QuickOpenWorkspace.prototype, "envServer", void 0);
    QuickOpenWorkspace = __decorate([
        inversify_1.injectable()
    ], QuickOpenWorkspace);
    return QuickOpenWorkspace;
}());
exports.QuickOpenWorkspace = QuickOpenWorkspace;
//# sourceMappingURL=quick-open-workspace.js.map