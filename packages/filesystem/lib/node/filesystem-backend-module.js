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
exports.bindFileSystemWatcherServer = exports.bindFileSystem = void 0;
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var node_filesystem_1 = require("./node-filesystem");
var common_2 = require("../common");
var filesystem_watcher_protocol_1 = require("../common/filesystem-watcher-protocol");
var filesystem_watcher_client_1 = require("./filesystem-watcher-client");
var nsfw_filesystem_watcher_1 = require("./nsfw-watcher/nsfw-filesystem-watcher");
var messaging_service_1 = require("@theia/core/lib/node/messaging/messaging-service");
var node_file_upload_service_1 = require("./node-file-upload-service");
var SINGLE_THREADED = process.argv.indexOf('--no-cluster') !== -1;
function bindFileSystem(bind, props) {
    bind(node_filesystem_1.FileSystemNode).toSelf().inSingletonScope().onActivation(function (context, fs) {
        if (props && props.onFileSystemActivation) {
            props.onFileSystemActivation(context, fs);
        }
        return fs;
    });
    bind(common_2.FileSystem).toService(node_filesystem_1.FileSystemNode);
}
exports.bindFileSystem = bindFileSystem;
function bindFileSystemWatcherServer(bind, _a) {
    var singleThreaded = (_a === void 0 ? { singleThreaded: SINGLE_THREADED } : _a).singleThreaded;
    if (singleThreaded) {
        bind(filesystem_watcher_protocol_1.FileSystemWatcherServer).toDynamicValue(function (ctx) {
            var logger = ctx.container.get(common_1.ILogger);
            return new nsfw_filesystem_watcher_1.NsfwFileSystemWatcherServer({
                info: function (message) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return logger.info.apply(logger, __spread([message], args));
                },
                error: function (message) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return logger.error.apply(logger, __spread([message], args));
                }
            });
        });
    }
    else {
        bind(filesystem_watcher_client_1.FileSystemWatcherServerClient).toSelf();
        bind(filesystem_watcher_protocol_1.FileSystemWatcherServer).toService(filesystem_watcher_client_1.FileSystemWatcherServerClient);
    }
}
exports.bindFileSystemWatcherServer = bindFileSystemWatcherServer;
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(common_2.DispatchingFileSystemClient).toSelf().inSingletonScope();
    bindFileSystem(bind, {
        onFileSystemActivation: function (_a, fs) {
            var container = _a.container;
            fs.setClient(container.get(common_2.DispatchingFileSystemClient));
            fs.setClient = function () {
                throw new Error('use DispatchingFileSystemClient');
            };
        }
    });
    bind(common_1.ConnectionHandler).toDynamicValue(function (_a) {
        var container = _a.container;
        return new common_1.JsonRpcConnectionHandler(common_2.fileSystemPath, function (client) {
            var dispatching = container.get(common_2.DispatchingFileSystemClient);
            dispatching.clients.add(client);
            client.onDidCloseConnection(function () { return dispatching.clients.delete(client); });
            return container.get(common_2.FileSystem);
        });
    }).inSingletonScope();
    bindFileSystemWatcherServer(bind);
    bind(common_1.ConnectionHandler).toDynamicValue(function (ctx) {
        return new common_1.JsonRpcConnectionHandler(filesystem_watcher_protocol_1.fileSystemWatcherPath, function (client) {
            var server = ctx.container.get(filesystem_watcher_protocol_1.FileSystemWatcherServer);
            server.setClient(client);
            client.onDidCloseConnection(function () { return server.dispose(); });
            return server;
        });
    }).inSingletonScope();
    bind(node_file_upload_service_1.NodeFileUploadService).toSelf().inSingletonScope();
    bind(messaging_service_1.MessagingService.Contribution).toService(node_file_upload_service_1.NodeFileUploadService);
});
//# sourceMappingURL=filesystem-backend-module.js.map