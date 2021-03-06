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
require("../../../src/main/style/status-bar.css");
require("../../../src/main/browser/style/index.css");
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var common_1 = require("@theia/core/lib/common");
var messaging_1 = require("@theia/core/lib/browser/messaging");
var hosted_plugin_1 = require("../../hosted/browser/hosted-plugin");
var hosted_plugin_watcher_1 = require("../../hosted/browser/hosted-plugin-watcher");
var commands_1 = require("./commands");
var plugin_frontend_contribution_1 = require("./plugin-frontend-contribution");
var plugin_protocol_1 = require("../../common/plugin-protocol");
var modal_notification_1 = require("./dialogs/modal-notification");
var plugin_ext_widget_1 = require("./plugin-ext-widget");
var plugin_frontend_view_contribution_1 = require("./plugin-frontend-view-contribution");
var plugin_ext_deploy_command_1 = require("./plugin-ext-deploy-command");
var text_editor_model_service_1 = require("./text-editor-model-service");
var untitled_resource_1 = require("./editor/untitled-resource");
var menus_contribution_handler_1 = require("./menus/menus-contribution-handler");
var plugin_contribution_handler_1 = require("./plugin-contribution-handler");
var plugin_view_registry_1 = require("./view/plugin-view-registry");
var workspace_main_1 = require("./workspace-main");
var plugin_ext_api_contribution_1 = require("../../common/plugin-ext-api-contribution");
var plugin_paths_protocol_1 = require("../common/plugin-paths-protocol");
var keybindings_contribution_handler_1 = require("./keybindings/keybindings-contribution-handler");
var language_client_provider_1 = require("@theia/languages/lib/browser/language-client-provider");
var plugin_language_client_provider_1 = require("./language-provider/plugin-language-client-provider");
var language_client_contribution_provider_impl_1 = require("./language-provider/language-client-contribution-provider-impl");
var language_client_contribution_provider_1 = require("./language-provider/language-client-contribution-provider");
var debug_session_contribution_1 = require("@theia/debug/lib/browser/debug-session-contribution");
var plugin_debug_session_contribution_registry_1 = require("./debug/plugin-debug-session-contribution-registry");
var plugin_debug_service_1 = require("./debug/plugin-debug-service");
var debug_service_1 = require("@theia/debug/lib/common/debug-service");
var plugin_shared_style_1 = require("./plugin-shared-style");
var file_system_main_1 = require("./file-system-main");
var selection_provider_command_1 = require("./selection-provider-command");
var view_column_service_1 = require("./view-column-service");
var view_context_key_service_1 = require("./view/view-context-key-service");
var plugin_view_widget_1 = require("./view/plugin-view-widget");
var tree_view_widget_1 = require("./view/tree-view-widget");
var rpc_protocol_1 = require("../../common/rpc-protocol");
var common_2 = require("../../common");
var languages_main_1 = require("./languages-main");
var output_channel_registry_main_1 = require("./output-channel-registry-main");
var in_plugin_filesystem_watcher_manager_1 = require("./in-plugin-filesystem-watcher-manager");
var webview_1 = require("./webview/webview");
var webview_environment_1 = require("./webview/webview-environment");
var webview_theme_data_provider_1 = require("./webview/webview-theme-data-provider");
var webview_preferences_1 = require("./webview/webview-preferences");
var webview_protocol_1 = require("../common/webview-protocol");
var webview_resource_cache_1 = require("./webview/webview-resource-cache");
var plugin_icon_theme_service_1 = require("./plugin-icon-theme-service");
var plugin_tree_view_node_label_provider_1 = require("./view/plugin-tree-view-node-label-provider");
exports.default = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    bind(languages_main_1.LanguagesMainImpl).toSelf().inTransientScope();
    bind(common_2.LanguagesMainFactory).toFactory(function (context) { return function (rpc) {
        var child = context.container.createChild();
        child.bind(rpc_protocol_1.RPCProtocol).toConstantValue(rpc);
        return child.get(languages_main_1.LanguagesMainImpl);
    }; });
    bind(output_channel_registry_main_1.OutputChannelRegistryMainImpl).toSelf().inTransientScope();
    bind(common_2.OutputChannelRegistryFactory).toFactory(function (context) { return function () {
        var child = context.container.createChild();
        return child.get(output_channel_registry_main_1.OutputChannelRegistryMainImpl);
    }; });
    bind(modal_notification_1.ModalNotification).toSelf().inSingletonScope();
    bind(hosted_plugin_1.HostedPluginSupport).toSelf().inSingletonScope();
    bind(hosted_plugin_watcher_1.HostedPluginWatcher).toSelf().inSingletonScope();
    bind(selection_provider_command_1.SelectionProviderCommandContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(selection_provider_command_1.SelectionProviderCommandContribution);
    bind(commands_1.OpenUriCommandHandler).toSelf().inSingletonScope();
    bind(plugin_frontend_contribution_1.PluginApiFrontendContribution).toSelf().inSingletonScope();
    bind(common_1.CommandContribution).toService(plugin_frontend_contribution_1.PluginApiFrontendContribution);
    bind(text_editor_model_service_1.EditorModelService).toSelf().inSingletonScope();
    bind(untitled_resource_1.UntitledResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(untitled_resource_1.UntitledResourceResolver);
    bind(browser_1.FrontendApplicationContribution).toDynamicValue(function (ctx) { return ({
        onStart: function () {
            ctx.container.get(hosted_plugin_1.HostedPluginSupport).onStart(ctx.container);
        }
    }); });
    bind(plugin_protocol_1.HostedPluginServer).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        var hostedWatcher = ctx.container.get(hosted_plugin_watcher_1.HostedPluginWatcher);
        return connection.createProxy(plugin_protocol_1.hostedServicePath, hostedWatcher.getHostedPluginClient());
    }).inSingletonScope();
    bind(plugin_paths_protocol_1.PluginPathsService).toDynamicValue(function (ctx) {
        var connection = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return connection.createProxy(plugin_paths_protocol_1.pluginPathsServicePath);
    }).inSingletonScope();
    browser_1.bindViewContribution(bind, plugin_frontend_view_contribution_1.PluginFrontendViewContribution);
    bind(plugin_ext_widget_1.PluginWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: plugin_frontend_view_contribution_1.PluginFrontendViewContribution.PLUGINS_WIDGET_FACTORY_ID,
        createWidget: function () { return ctx.container.get(plugin_ext_widget_1.PluginWidget); }
    }); });
    bind(plugin_ext_deploy_command_1.PluginExtDeployCommandService).toSelf().inSingletonScope();
    bind(plugin_protocol_1.PluginServer).toDynamicValue(function (ctx) {
        var provider = ctx.container.get(messaging_1.WebSocketConnectionProvider);
        return provider.createProxy(plugin_protocol_1.pluginServerJsonRpcPath);
    }).inSingletonScope();
    bind(view_context_key_service_1.ViewContextKeyService).toSelf().inSingletonScope();
    bind(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_tree_view_node_label_provider_1.PluginTreeViewNodeLabelProvider);
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_DATA_FACTORY_ID,
            createWidget: function (identifier) {
                var child = browser_1.createTreeContainer(container, {
                    contextMenuPath: tree_view_widget_1.VIEW_ITEM_CONTEXT_MENU,
                    globalSelection: true
                });
                child.bind(tree_view_widget_1.TreeViewWidgetIdentifier).toConstantValue(identifier);
                child.bind(tree_view_widget_1.PluginTree).toSelf();
                child.rebind(browser_1.TreeImpl).toService(tree_view_widget_1.PluginTree);
                child.bind(tree_view_widget_1.PluginTreeModel).toSelf();
                child.rebind(browser_1.TreeModelImpl).toService(tree_view_widget_1.PluginTreeModel);
                child.bind(tree_view_widget_1.TreeViewWidget).toSelf();
                child.rebind(browser_1.TreeWidget).toService(tree_view_widget_1.TreeViewWidget);
                return child.get(browser_1.TreeWidget);
            }
        });
    }).inSingletonScope();
    webview_preferences_1.bindWebviewPreferences(bind);
    bind(webview_environment_1.WebviewEnvironment).toSelf().inSingletonScope();
    bind(webview_theme_data_provider_1.WebviewThemeDataProvider).toSelf().inSingletonScope();
    bind(webview_protocol_1.WebviewResourceLoader).toDynamicValue(function (ctx) {
        return messaging_1.WebSocketConnectionProvider.createProxy(ctx.container, webview_protocol_1.WebviewResourceLoaderPath);
    }).inSingletonScope();
    bind(webview_resource_cache_1.WebviewResourceCache).toSelf().inSingletonScope();
    bind(webview_1.WebviewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: webview_1.WebviewWidget.FACTORY_ID,
            createWidget: function (identifier) { return __awaiter(void 0, void 0, void 0, function () {
                var externalEndpoint, endpoint, child;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, container.get(webview_environment_1.WebviewEnvironment).externalEndpoint()];
                        case 1:
                            externalEndpoint = _a.sent();
                            endpoint = externalEndpoint.replace('{{uuid}}', identifier.id);
                            if (endpoint[endpoint.length - 1] === '/') {
                                endpoint = endpoint.slice(0, endpoint.length - 1);
                            }
                            child = container.createChild();
                            child.bind(webview_1.WebviewWidgetIdentifier).toConstantValue(identifier);
                            child.bind(webview_1.WebviewWidgetExternalEndpoint).toConstantValue(endpoint);
                            return [2 /*return*/, child.get(webview_1.WebviewWidget)];
                    }
                });
            }); }
        });
    }).inSingletonScope();
    bind(plugin_view_widget_1.PluginViewWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_FACTORY_ID,
            createWidget: function (identifier) {
                var child = container.createChild();
                child.bind(plugin_view_widget_1.PluginViewWidgetIdentifier).toConstantValue(identifier);
                return child.get(plugin_view_widget_1.PluginViewWidget);
            }
        });
    }).inSingletonScope();
    bind(browser_1.WidgetFactory).toDynamicValue(function (_a) {
        var container = _a.container;
        return ({
            id: plugin_view_registry_1.PLUGIN_VIEW_CONTAINER_FACTORY_ID,
            createWidget: function (identifier) {
                return container.get(browser_1.ViewContainer.Factory)(identifier);
            }
        });
    }).inSingletonScope();
    bind(plugin_shared_style_1.PluginSharedStyle).toSelf().inSingletonScope();
    bind(plugin_view_registry_1.PluginViewRegistry).toSelf().inSingletonScope();
    bind(browser_1.FrontendApplicationContribution).toService(plugin_view_registry_1.PluginViewRegistry);
    bind(plugin_icon_theme_service_1.PluginIconThemeFactory).toFactory(function (_a) {
        var container = _a.container;
        return function (definition) {
            var child = container.createChild();
            child.bind(plugin_icon_theme_service_1.PluginIconThemeDefinition).toConstantValue(definition);
            child.bind(plugin_icon_theme_service_1.PluginIconTheme).toSelf().inSingletonScope();
            return child.get(plugin_icon_theme_service_1.PluginIconTheme);
        };
    });
    bind(plugin_icon_theme_service_1.PluginIconThemeService).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(plugin_icon_theme_service_1.PluginIconThemeService);
    bind(menus_contribution_handler_1.MenusContributionPointHandler).toSelf().inSingletonScope();
    bind(keybindings_contribution_handler_1.KeybindingsContributionPointHandler).toSelf().inSingletonScope();
    bind(plugin_contribution_handler_1.PluginContributionHandler).toSelf().inSingletonScope();
    bind(in_plugin_filesystem_watcher_manager_1.InPluginFileSystemWatcherManager).toSelf().inSingletonScope();
    bind(workspace_main_1.TextContentResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(workspace_main_1.TextContentResourceResolver);
    bind(file_system_main_1.FSResourceResolver).toSelf().inSingletonScope();
    bind(common_1.ResourceResolver).toService(file_system_main_1.FSResourceResolver);
    common_1.bindContributionProvider(bind, plugin_ext_api_contribution_1.MainPluginApiProvider);
    bind(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl).toSelf().inSingletonScope();
    bind(language_client_contribution_provider_1.LanguageClientContributionProvider).toService(language_client_contribution_provider_impl_1.LanguageClientContributionProviderImpl);
    bind(plugin_language_client_provider_1.LanguageClientProviderImpl).toSelf().inSingletonScope();
    rebind(language_client_provider_1.LanguageClientProvider).toService(plugin_language_client_provider_1.LanguageClientProviderImpl);
    bind(plugin_debug_service_1.PluginDebugService).toSelf().inSingletonScope();
    rebind(debug_service_1.DebugService).toService(plugin_debug_service_1.PluginDebugService);
    bind(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry).toSelf().inSingletonScope();
    rebind(debug_session_contribution_1.DebugSessionContributionRegistry).toService(plugin_debug_session_contribution_registry_1.PluginDebugSessionContributionRegistry);
    bind(view_column_service_1.ViewColumnService).toSelf().inSingletonScope();
});
//# sourceMappingURL=plugin-ext-frontend-module.js.map