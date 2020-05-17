"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpPluginApi = void 0;
var command_registry_main_1 = require("./command-registry-main");
var preference_registry_main_1 = require("./preference-registry-main");
var quick_open_main_1 = require("./quick-open-main");
var plugin_api_rpc_1 = require("../../common/plugin-api-rpc");
var message_registry_main_1 = require("./message-registry-main");
var window_state_main_1 = require("./window-state-main");
var workspace_main_1 = require("./workspace-main");
var status_bar_message_registry_main_1 = require("./status-bar-message-registry-main");
var env_main_1 = require("./env-main");
var editors_and_documents_main_1 = require("./editors-and-documents-main");
var terminal_main_1 = require("./terminal-main");
var dialogs_main_1 = require("./dialogs-main");
var tree_views_main_1 = require("./view/tree-views-main");
var notification_main_1 = require("./notification-main");
var connection_main_1 = require("./connection-main");
var webviews_main_1 = require("./webviews-main");
var tasks_main_1 = require("./tasks-main");
var plugin_storage_1 = require("./plugin-storage");
var languages_contribution_main_1 = require("./languages-contribution-main");
var debug_main_1 = require("./debug/debug-main");
var file_system_main_1 = require("./file-system-main");
var scm_main_1 = require("./scm-main");
var decorations_main_1 = require("./decorations/decorations-main");
var clipboard_main_1 = require("./clipboard-main");
var documents_main_1 = require("./documents-main");
var text_editors_main_1 = require("./text-editors-main");
var browser_1 = require("@theia/editor/lib/browser");
var text_editor_model_service_1 = require("./text-editor-model-service");
var opener_service_1 = require("@theia/core/lib/browser/opener-service");
var application_shell_1 = require("@theia/core/lib/browser/shell/application-shell");
var monaco_bulk_edit_service_1 = require("@theia/monaco/lib/browser/monaco-bulk-edit-service");
var monaco_editor_service_1 = require("@theia/monaco/lib/browser/monaco-editor-service");
var untitled_resource_1 = require("./editor/untitled-resource");
var browser_2 = require("@theia/filesystem/lib/browser");
function setUpPluginApi(rpc, container) {
    var commandRegistryMain = new command_registry_main_1.CommandRegistryMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.COMMAND_REGISTRY_MAIN, commandRegistryMain);
    var quickOpenMain = new quick_open_main_1.QuickOpenMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.QUICK_OPEN_MAIN, quickOpenMain);
    var workspaceMain = new workspace_main_1.WorkspaceMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WORKSPACE_MAIN, workspaceMain);
    var dialogsMain = new dialogs_main_1.DialogsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DIALOGS_MAIN, dialogsMain);
    var messageRegistryMain = new message_registry_main_1.MessageRegistryMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.MESSAGE_REGISTRY_MAIN, messageRegistryMain);
    var preferenceRegistryMain = new preference_registry_main_1.PreferenceRegistryMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.PREFERENCE_REGISTRY_MAIN, preferenceRegistryMain);
    var editorsAndDocuments = new editors_and_documents_main_1.EditorsAndDocumentsMain(rpc, container);
    var modelService = container.get(text_editor_model_service_1.EditorModelService);
    var editorManager = container.get(browser_1.EditorManager);
    var openerService = container.get(opener_service_1.OpenerService);
    var shell = container.get(application_shell_1.ApplicationShell);
    var untitledResourceResolver = container.get(untitled_resource_1.UntitledResourceResolver);
    var fileResourceResolver = container.get(browser_2.FileResourceResolver);
    var documentsMain = new documents_main_1.DocumentsMainImpl(editorsAndDocuments, modelService, rpc, editorManager, openerService, shell, untitledResourceResolver, fileResourceResolver);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DOCUMENTS_MAIN, documentsMain);
    var bulkEditService = container.get(monaco_bulk_edit_service_1.MonacoBulkEditService);
    var monacoEditorService = container.get(monaco_editor_service_1.MonacoEditorService);
    var editorsMain = new text_editors_main_1.TextEditorsMainImpl(editorsAndDocuments, rpc, bulkEditService, monacoEditorService);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TEXT_EDITORS_MAIN, editorsMain);
    // start listening only after all clients are subscribed to events
    editorsAndDocuments.listen();
    var statusBarMessageRegistryMain = new status_bar_message_registry_main_1.StatusBarMessageRegistryMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.STATUS_BAR_MESSAGE_REGISTRY_MAIN, statusBarMessageRegistryMain);
    var envMain = new env_main_1.EnvMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.ENV_MAIN, envMain);
    var notificationMain = new notification_main_1.NotificationMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.NOTIFICATION_MAIN, notificationMain);
    var terminalMain = new terminal_main_1.TerminalServiceMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TERMINAL_MAIN, terminalMain);
    var treeViewsMain = new tree_views_main_1.TreeViewsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TREE_VIEWS_MAIN, treeViewsMain);
    var outputChannelRegistryFactory = container.get(plugin_api_rpc_1.OutputChannelRegistryFactory);
    var outputChannelRegistryMain = outputChannelRegistryFactory();
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.OUTPUT_CHANNEL_REGISTRY_MAIN, outputChannelRegistryMain);
    var languagesMainFactory = container.get(plugin_api_rpc_1.LanguagesMainFactory);
    var languagesMain = languagesMainFactory(rpc);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.LANGUAGES_MAIN, languagesMain);
    var webviewsMain = new webviews_main_1.WebviewsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WEBVIEWS_MAIN, webviewsMain);
    var storageMain = new plugin_storage_1.StorageMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.STORAGE_MAIN, storageMain);
    var connectionMain = new connection_main_1.ConnectionMainImpl(rpc);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.CONNECTION_MAIN, connectionMain);
    var tasksMain = new tasks_main_1.TasksMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.TASKS_MAIN, tasksMain);
    var languagesContribution = new languages_contribution_main_1.LanguagesContributionMainImpl(rpc, container, connectionMain);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.LANGUAGES_CONTRIBUTION_MAIN, languagesContribution);
    var debugMain = new debug_main_1.DebugMainImpl(rpc, connectionMain, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DEBUG_MAIN, debugMain);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.FILE_SYSTEM_MAIN, new file_system_main_1.FileSystemMainImpl(rpc, container));
    var scmMain = new scm_main_1.ScmMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.SCM_MAIN, scmMain);
    var decorationsMain = new decorations_main_1.DecorationsMainImpl(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.DECORATIONS_MAIN, decorationsMain);
    var windowMain = new window_state_main_1.WindowStateMain(rpc, container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.WINDOW_MAIN, windowMain);
    var clipboardMain = new clipboard_main_1.ClipboardMainImpl(container);
    rpc.set(plugin_api_rpc_1.PLUGIN_RPC_CONTEXT.CLIPBOARD_MAIN, clipboardMain);
}
exports.setUpPluginApi = setUpPluginApi;
//# sourceMappingURL=main-context.js.map