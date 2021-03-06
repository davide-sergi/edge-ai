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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.FSResource = exports.FSResourceResolver = exports.FileSystemMainImpl = void 0;
var inversify_1 = require("inversify");
var vscode_uri_1 = require("vscode-uri");
var core_1 = require("@theia/core");
var resource_1 = require("@theia/core/lib/common/resource");
var uri_1 = require("@theia/core/lib/common/uri");
var plugin_api_rpc_1 = require("../../common/plugin-api-rpc");
var FileSystemMainImpl = /** @class */ (function () {
    function FileSystemMainImpl(rpc, container) {
        this.providers = new Map();
        this.toDispose = new core_1.DisposableCollection();
        this.proxy = rpc.getProxy(plugin_api_rpc_1.MAIN_RPC_CONTEXT.FILE_SYSTEM_EXT);
        this.resourceResolver = container.get(FSResourceResolver);
        this.resourceProvider = container.get(resource_1.ResourceProvider);
    }
    FileSystemMainImpl.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FileSystemMainImpl.prototype.$registerFileSystemProvider = function (handle, scheme) {
        return __awaiter(this, void 0, void 0, function () {
            var toDispose;
            var _this = this;
            return __generator(this, function (_a) {
                toDispose = new core_1.DisposableCollection(this.resourceResolver.registerResourceProvider(handle, scheme, this.proxy), core_1.Disposable.create(function () { return _this.providers.delete(handle); }));
                this.providers.set(handle, toDispose);
                this.toDispose.push(toDispose);
                return [2 /*return*/];
            });
        });
    };
    FileSystemMainImpl.prototype.$unregisterProvider = function (handle) {
        var disposable = this.providers.get(handle);
        if (disposable) {
            disposable.dispose();
        }
    };
    FileSystemMainImpl.prototype.$readFile = function (uriComponents) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponents);
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default(uri))];
                    case 1:
                        resource = _a.sent();
                        return [2 /*return*/, resource.readContents()];
                }
            });
        });
    };
    FileSystemMainImpl.prototype.$writeFile = function (uriComponents, content) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, resource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = vscode_uri_1.URI.revive(uriComponents);
                        return [4 /*yield*/, this.resourceProvider(new uri_1.default(uri))];
                    case 1:
                        resource = _a.sent();
                        if (!resource.saveContents) {
                            throw new Error("'No write operation available on the resource for URI " + uriComponents);
                        }
                        return [2 /*return*/, resource.saveContents(content)];
                }
            });
        });
    };
    return FileSystemMainImpl;
}());
exports.FileSystemMainImpl = FileSystemMainImpl;
var FSResourceResolver = /** @class */ (function () {
    function FSResourceResolver() {
        // resource providers by schemas
        this.providers = new Map();
        this.toDispose = new core_1.DisposableCollection();
    }
    FSResourceResolver.prototype.resolve = function (uri) {
        var provider = this.providers.get(uri.scheme);
        if (provider) {
            return provider.create(uri);
        }
        throw new Error("Unable to find a Resource Provider for scheme '" + uri.scheme + "'");
    };
    FSResourceResolver.prototype.dispose = function () {
        this.toDispose.dispose();
    };
    FSResourceResolver.prototype.registerResourceProvider = function (handle, scheme, proxy) {
        var _this = this;
        if (this.providers.has(scheme)) {
            throw new Error("Resource Provider for scheme '" + scheme + "' is already registered");
        }
        var provider = new FSResourceProvider(handle, proxy);
        this.providers.set(scheme, provider);
        var disposable = core_1.Disposable.create(function () {
            _this.providers.delete(scheme);
        });
        this.toDispose.push(disposable);
        return disposable;
    };
    FSResourceResolver = __decorate([
        inversify_1.injectable()
    ], FSResourceResolver);
    return FSResourceResolver;
}());
exports.FSResourceResolver = FSResourceResolver;
var FSResourceProvider = /** @class */ (function () {
    function FSResourceProvider(handle, proxy) {
        this.handle = handle;
        this.proxy = proxy;
    }
    FSResourceProvider.prototype.create = function (uri) {
        return new FSResource(this.handle, uri, this.proxy);
    };
    return FSResourceProvider;
}());
/** Resource that delegates reading/saving a content to a plugin's FileSystemProvider. */
var FSResource = /** @class */ (function () {
    function FSResource(handle, uri, proxy) {
        this.handle = handle;
        this.uri = uri;
        this.proxy = proxy;
    }
    FSResource.prototype.readContents = function (options) {
        return this.proxy.$readFile(this.handle, vscode_uri_1.URI.parse(this.uri.toString()), options);
    };
    FSResource.prototype.saveContents = function (content, options) {
        return this.proxy.$writeFile(this.handle, vscode_uri_1.URI.parse(this.uri.toString()), content, options);
    };
    FSResource.prototype.dispose = function () { };
    return FSResource;
}());
exports.FSResource = FSResource;
//# sourceMappingURL=file-system-main.js.map