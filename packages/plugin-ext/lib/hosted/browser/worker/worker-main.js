"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
var event_1 = require("@theia/core/lib/common/event");
var rpc_protocol_1 = require("../../../common/rpc-protocol");
var plugin_manager_1 = require("../../../plugin/plugin-manager");
var plugin_api_rpc_1 = require("../../../common/plugin-api-rpc");
var plugin_context_1 = require("../../../plugin/plugin-context");
var plugin_protocol_1 = require("../../../common/plugin-protocol");
var preference_registry_1 = require("../../../plugin/preference-registry");
var debug_stub_1 = require("./debug-stub");
var editors_and_documents_1 = require("../../../plugin/editors-and-documents");
var workspace_1 = require("../../../plugin/workspace");
var message_registry_1 = require("../../../plugin/message-registry");
var worker_env_ext_1 = require("./worker-env-ext");
var clipboard_ext_1 = require("../../../plugin/clipboard-ext");
var plugin_storage_1 = require("../../../plugin/plugin-storage");
var webviews_1 = require("../../../plugin/webviews");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var ctx = self;
var pluginsApiImpl = new Map();
var pluginsModulesNames = new Map();
var emitter = new event_1.Emitter();
var rpc = new rpc_protocol_1.RPCProtocolImpl({
    onMessage: emitter.event,
    send: function (m) {
        ctx.postMessage(m);
    }
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
addEventListener('message', function (message) {
    emitter.fire(message.data);
});
function initialize(contextPath, pluginMetadata) {
    ctx.importScripts('/context/' + contextPath);
}
var envExt = new worker_env_ext_1.WorkerEnvExtImpl(rpc);
var storageProxy = new plugin_storage_1.KeyValueStorageProxy(rpc);
var editorsAndDocuments = new editors_and_documents_1.EditorsAndDocumentsExtImpl(rpc);
var messageRegistryExt = new message_registry_1.MessageRegistryExt(rpc);
var workspaceExt = new workspace_1.WorkspaceExtImpl(rpc, editorsAndDocuments, messageRegistryExt);
var preferenceRegistryExt = new preference_registry_1.PreferenceRegistryExtImpl(rpc, workspaceExt);
var debugExt = debug_stub_1.createDebugExtStub(rpc);
var clipboardExt = new clipboard_ext_1.ClipboardExt(rpc);
var webviewExt = new webviews_1.WebviewsExtImpl(rpc, workspaceExt);
var pluginManager = new plugin_manager_1.PluginManagerExtImpl({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    loadPlugin: function (plugin) {
        if (isElectron()) {
            ctx.importScripts(plugin.pluginPath);
        }
        else {
            ctx.importScripts('/hostedPlugin/' + plugin_protocol_1.getPluginId(plugin.model) + '/' + plugin.pluginPath);
        }
        if (plugin.lifecycle.frontendModuleName) {
            if (!ctx[plugin.lifecycle.frontendModuleName]) {
                console.error("WebWorker: Cannot start plugin \"" + plugin.model.name + "\". Frontend plugin not found: \"" + plugin.lifecycle.frontendModuleName + "\"");
                return;
            }
            return ctx[plugin.lifecycle.frontendModuleName];
        }
    },
    init: function (rawPluginData) {
        var e_1, _a;
        var result = [];
        var foreign = [];
        try {
            for (var rawPluginData_1 = __values(rawPluginData), rawPluginData_1_1 = rawPluginData_1.next(); !rawPluginData_1_1.done; rawPluginData_1_1 = rawPluginData_1.next()) {
                var plg = rawPluginData_1_1.value;
                var pluginModel = plg.model;
                var pluginLifecycle = plg.lifecycle;
                if (pluginModel.entryPoint.frontend) {
                    var frontendInitPath = pluginLifecycle.frontendInitPath;
                    if (frontendInitPath) {
                        initialize(frontendInitPath, plg);
                    }
                    else {
                        frontendInitPath = '';
                    }
                    var plugin = {
                        pluginPath: pluginModel.entryPoint.frontend,
                        pluginFolder: pluginModel.packagePath,
                        model: pluginModel,
                        lifecycle: pluginLifecycle,
                        get rawModel() {
                            throw new Error('not supported');
                        }
                    };
                    result.push(plugin);
                    var apiImpl = apiFactory(plugin);
                    pluginsApiImpl.set(plugin.model.id, apiImpl);
                    pluginsModulesNames.set(plugin.lifecycle.frontendModuleName, plugin);
                }
                else {
                    foreign.push({
                        pluginPath: pluginModel.entryPoint.backend,
                        pluginFolder: pluginModel.packagePath,
                        model: pluginModel,
                        lifecycle: pluginLifecycle,
                        get rawModel() {
                            throw new Error('not supported');
                        }
                    });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (rawPluginData_1_1 && !rawPluginData_1_1.done && (_a = rawPluginData_1.return)) _a.call(rawPluginData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return [result, foreign];
    },
    initExtApi: function (extApi) {
        var e_2, _a;
        try {
            for (var extApi_1 = __values(extApi), extApi_1_1 = extApi_1.next(); !extApi_1_1.done; extApi_1_1 = extApi_1.next()) {
                var api = extApi_1_1.value;
                try {
                    if (api.frontendExtApi) {
                        ctx.importScripts(api.frontendExtApi.initPath);
                        ctx[api.frontendExtApi.initVariable][api.frontendExtApi.initFunction](rpc, pluginsModulesNames);
                    }
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (extApi_1_1 && !extApi_1_1.done && (_a = extApi_1.return)) _a.call(extApi_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}, envExt, storageProxy, preferenceRegistryExt, webviewExt, rpc);
var apiFactory = plugin_context_1.createAPIFactory(rpc, pluginManager, envExt, debugExt, preferenceRegistryExt, editorsAndDocuments, workspaceExt, messageRegistryExt, clipboardExt, webviewExt);
var defaultApi;
var handler = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get: function (target, name) {
        var plugin = pluginsModulesNames.get(name);
        if (plugin) {
            var apiImpl = pluginsApiImpl.get(plugin.model.id);
            return apiImpl;
        }
        if (!defaultApi) {
            defaultApi = apiFactory(plugin_api_rpc_1.emptyPlugin);
        }
        return defaultApi;
    }
};
ctx['theia'] = new Proxy(Object.create(null), handler);
rpc.set(plugin_api_rpc_1.MAIN_RPC_CONTEXT.HOSTED_PLUGIN_MANAGER_EXT, pluginManager);
rpc.set(plugin_api_rpc_1.MAIN_RPC_CONTEXT.EDITORS_AND_DOCUMENTS_EXT, editorsAndDocuments);
rpc.set(plugin_api_rpc_1.MAIN_RPC_CONTEXT.WORKSPACE_EXT, workspaceExt);
rpc.set(plugin_api_rpc_1.MAIN_RPC_CONTEXT.PREFERENCE_REGISTRY_EXT, preferenceRegistryExt);
rpc.set(plugin_api_rpc_1.MAIN_RPC_CONTEXT.WEBVIEWS_EXT, webviewExt);
function isElectron() {
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }
    return false;
}
//# sourceMappingURL=worker-main.js.map