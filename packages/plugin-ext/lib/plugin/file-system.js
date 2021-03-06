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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemExtImpl = void 0;
var vscode_uri_1 = require("vscode-uri");
var plugin_api_rpc_1 = require("../common/plugin-api-rpc");
var uri_components_1 = require("../common/uri-components");
var types_impl_1 = require("./types-impl");
var in_plugin_filesystem_proxy_1 = require("./in-plugin-filesystem-proxy");
var FileSystemExtImpl = /** @class */ (function () {
    function FileSystemExtImpl(rpc) {
        this.usedSchemes = new Set();
        this.fsProviders = new Map();
        this.handlePool = 0;
        this.proxy = rpc.getProxy(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.FILE_SYSTEM_MAIN);
        this.usedSchemes.add(uri_components_1.Schemes.FILE);
        this.usedSchemes.add(uri_components_1.Schemes.UNTITLED);
        this.usedSchemes.add(uri_components_1.Schemes.VSCODE);
        this.usedSchemes.add(uri_components_1.Schemes.IN_MEMORY);
        this.usedSchemes.add(uri_components_1.Schemes.INTERNAL);
        this.usedSchemes.add(uri_components_1.Schemes.HTTP);
        this.usedSchemes.add(uri_components_1.Schemes.HTTPS);
        this.usedSchemes.add(uri_components_1.Schemes.MAILTO);
        this.usedSchemes.add(uri_components_1.Schemes.DATA);
        this.usedSchemes.add(uri_components_1.Schemes.COMMAND);
        this.fileSystem = new in_plugin_filesystem_proxy_1.InPluginFileSystemProxy(this.proxy);
    }
    Object.defineProperty(FileSystemExtImpl.prototype, "fs", {
        get: function () {
            return this.fileSystem;
        },
        enumerable: false,
        configurable: true
    });
    FileSystemExtImpl.prototype.registerFileSystemProvider = function (scheme, provider) {
        var _this = this;
        if (this.usedSchemes.has(scheme)) {
            throw new Error("A provider for the scheme '" + scheme + "' is already registered");
        }
        var handle = this.handlePool++;
        this.usedSchemes.add(scheme);
        this.fsProviders.set(handle, provider);
        this.proxy.$registerFileSystemProvider(handle, scheme);
        return new types_impl_1.Disposable(function () {
            _this.usedSchemes.delete(scheme);
            _this.fsProviders.delete(handle);
            _this.proxy.$unregisterProvider(handle);
        });
    };
    FileSystemExtImpl.prototype.checkProviderExists = function (handle) {
        if (!this.fsProviders.has(handle)) {
            var err = new Error();
            err.name = 'ENOPRO';
            err.message = 'no provider';
            throw err;
        }
    };
    // forwarding calls
    FileSystemExtImpl.prototype.$readFile = function (handle, resource, options) {
        this.checkProviderExists(handle);
        return Promise.resolve(this.fsProviders.get(handle).readFile(vscode_uri_1.URI.revive(resource))).then(function (data) {
            var buffer = Buffer.isBuffer(data) ? data : Buffer.from(data.buffer, data.byteOffset, data.byteLength);
            var encoding = options === null ? undefined : options && options.encoding;
            return buffer.toString(encoding);
        });
    };
    FileSystemExtImpl.prototype.$writeFile = function (handle, resource, content, options) {
        this.checkProviderExists(handle);
        var uri = vscode_uri_1.URI.revive(resource);
        var encoding = options === null ? undefined : options && options.encoding;
        var buffer = Buffer.from(content, encoding);
        var opts = { create: true, overwrite: true };
        return Promise.resolve(this.fsProviders.get(handle).writeFile(uri, buffer, opts));
    };
    return FileSystemExtImpl;
}());
exports.FileSystemExtImpl = FileSystemExtImpl;
//# sourceMappingURL=file-system.js.map