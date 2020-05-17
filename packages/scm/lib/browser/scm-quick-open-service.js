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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScmQuickOpenService = void 0;
var inversify_1 = require("inversify");
var quick_open_model_1 = require("@theia/core/lib/browser/quick-open/quick-open-model");
var quick_open_service_1 = require("@theia/core/lib/browser/quick-open/quick-open-service");
var message_service_1 = require("@theia/core/lib/common/message-service");
var uri_1 = require("@theia/core/lib/common/uri");
var common_1 = require("@theia/filesystem/lib/common");
var scm_service_1 = require("./scm-service");
var ScmQuickOpenService = /** @class */ (function () {
    function ScmQuickOpenService() {
    }
    ScmQuickOpenService.prototype.changeRepository = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repositories, items;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repositories = this.scmService.repositories;
                        if (!(repositories.length > 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(repositories.map(function (repository) { return __awaiter(_this, void 0, void 0, function () {
                                var uri, execute, toLabel, fsPath, toDescription;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            uri = new uri_1.default(repository.provider.rootUri);
                                            execute = function () {
                                                _this.scmService.selectedRepository = repository;
                                            };
                                            toLabel = function () { return uri.path.base; };
                                            return [4 /*yield*/, this.fileSystem.getFsPath(uri.toString())];
                                        case 1:
                                            fsPath = _a.sent();
                                            toDescription = function () { return fsPath; };
                                            return [2 /*return*/, new ScmQuickOpenItem(repository, execute, toLabel, toDescription)];
                                    }
                                });
                            }); }))];
                    case 1:
                        items = _a.sent();
                        this.open(items, 'Select repository to work with:');
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmQuickOpenService.prototype.open = function (items, placeholder) {
        this.quickOpenService.open(this.getModel(Array.isArray(items) ? items : [items]), this.getOptions(placeholder));
    };
    ScmQuickOpenService.prototype.getModel = function (items) {
        return {
            onType: function (lookFor, acceptor) {
                acceptor(Array.isArray(items) ? items : [items]);
            }
        };
    };
    ScmQuickOpenService.prototype.getOptions = function (placeholder, fuzzyMatchLabel, onClose) {
        if (fuzzyMatchLabel === void 0) { fuzzyMatchLabel = true; }
        if (onClose === void 0) { onClose = function () { }; }
        return quick_open_service_1.QuickOpenOptions.resolve({
            placeholder: placeholder,
            fuzzyMatchLabel: fuzzyMatchLabel,
            fuzzySort: false,
            onClose: onClose
        });
    };
    __decorate([
        inversify_1.inject(quick_open_service_1.QuickOpenService),
        __metadata("design:type", quick_open_service_1.QuickOpenService)
    ], ScmQuickOpenService.prototype, "quickOpenService", void 0);
    __decorate([
        inversify_1.inject(message_service_1.MessageService),
        __metadata("design:type", message_service_1.MessageService)
    ], ScmQuickOpenService.prototype, "messageService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], ScmQuickOpenService.prototype, "fileSystem", void 0);
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmQuickOpenService.prototype, "scmService", void 0);
    ScmQuickOpenService = __decorate([
        inversify_1.injectable()
    ], ScmQuickOpenService);
    return ScmQuickOpenService;
}());
exports.ScmQuickOpenService = ScmQuickOpenService;
var ScmQuickOpenItem = /** @class */ (function (_super) {
    __extends(ScmQuickOpenItem, _super);
    function ScmQuickOpenItem(ref, execute, toLabel, toDescription) {
        if (toLabel === void 0) { toLabel = function () { return "" + ref; }; }
        if (toDescription === void 0) { toDescription = function () { return undefined; }; }
        var _this = _super.call(this) || this;
        _this.ref = ref;
        _this.execute = execute;
        _this.toLabel = toLabel;
        _this.toDescription = toDescription;
        return _this;
    }
    ScmQuickOpenItem.prototype.run = function (mode) {
        if (mode !== quick_open_model_1.QuickOpenMode.OPEN) {
            return false;
        }
        this.execute(this);
        return true;
    };
    ScmQuickOpenItem.prototype.getLabel = function () {
        return this.toLabel(this);
    };
    ScmQuickOpenItem.prototype.getDescription = function () {
        return this.toDescription(this);
    };
    return ScmQuickOpenItem;
}(quick_open_model_1.QuickOpenItem));
//# sourceMappingURL=scm-quick-open-service.js.map