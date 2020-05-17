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
exports.PreferencesContribution = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var browser_2 = require("@theia/core/lib/browser");
var os_1 = require("@theia/core/lib/common/os");
var common_1 = require("@theia/filesystem/lib/common");
var browser_3 = require("@theia/editor/lib/browser");
var uri_1 = require("@theia/core/lib/common/uri");
var preference_widget_1 = require("./views/preference-widget");
var preference_event_service_1 = require("./util/preference-event-service");
var workspace_preference_provider_1 = require("./workspace-preference-provider");
var user_preference_provider_1 = require("./user-preference-provider");
var preference_types_1 = require("./util/preference-types");
var clipboard_service_1 = require("@theia/core/lib/browser/clipboard-service");
var PreferencesContribution = /** @class */ (function (_super) {
    __extends(PreferencesContribution, _super);
    function PreferencesContribution() {
        var _this = _super.call(this, {
            widgetId: preference_widget_1.PreferencesWidget.ID,
            widgetName: preference_widget_1.PreferencesWidget.LABEL,
            defaultWidgetOptions: {
                area: 'main',
            },
        }) || this;
        _this.preferencesScope = preference_types_1.Preference.DEFAULT_SCOPE;
        return _this;
    }
    PreferencesContribution.prototype.init = function () {
        var _this = this;
        this.preferencesEventService.onTabScopeSelected.event(function (e) { return __awaiter(_this, void 0, void 0, function () {
            var widget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.widget];
                    case 1:
                        widget = _a.sent();
                        this.preferencesScope = e;
                        widget.preferenceScope = this.preferencesScope;
                        return [2 /*return*/];
                }
            });
        }); });
    };
    PreferencesContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        commands.registerCommand(browser_1.CommonCommands.OPEN_PREFERENCES, {
            execute: function () { return _this.openView({ reveal: true }); },
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR, {
            isEnabled: function () { return true; },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); },
            execute: function (preferenceNode) {
                _this.openPreferencesJSON(preferenceNode);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.COPY_JSON_NAME, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                _this.clipboardService.writeText(id);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.COPY_JSON_VALUE, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                var jsonString = "\"" + id + "\": " + JSON.stringify(value);
                _this.clipboardService.writeText(jsonString);
            }
        });
        commands.registerCommand(preference_types_1.PreferencesCommands.RESET_PREFERENCE, {
            isEnabled: preference_types_1.Preference.EditorCommandArgs.is,
            isVisible: preference_types_1.Preference.EditorCommandArgs.is,
            execute: function (_a) {
                var id = _a.id, value = _a.value;
                _this.preferenceValueRetrievalService.set(id, undefined, Number(_this.preferencesScope.scope), _this.preferencesScope.uri);
            }
        });
    };
    PreferencesContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.FILE_SETTINGS_SUBMENU_OPEN, {
            commandId: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            label: browser_1.CommonCommands.OPEN_PREFERENCES.label,
            order: 'a10',
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_CONTEXT_MENU, {
            commandId: preference_types_1.PreferencesCommands.RESET_PREFERENCE.id,
            label: preference_types_1.PreferencesCommands.RESET_PREFERENCE.label,
            order: 'a'
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_COPY_ACTIONS, {
            commandId: preference_types_1.PreferencesCommands.COPY_JSON_VALUE.id,
            label: preference_types_1.PreferencesCommands.COPY_JSON_VALUE.label,
            order: 'b'
        });
        menus.registerMenuAction(preference_types_1.PreferenceMenus.PREFERENCE_EDITOR_COPY_ACTIONS, {
            commandId: preference_types_1.PreferencesCommands.COPY_JSON_NAME.id,
            label: preference_types_1.PreferencesCommands.COPY_JSON_NAME.label,
            order: 'c'
        });
    };
    PreferencesContribution.prototype.registerKeybindings = function (keybindings) {
        if (os_1.isOSX && !browser_2.isFirefox) {
            keybindings.registerKeybinding({
                command: browser_1.CommonCommands.OPEN_PREFERENCES.id,
                keybinding: 'cmd+,'
            });
        }
        keybindings.registerKeybinding({
            command: browser_1.CommonCommands.OPEN_PREFERENCES.id,
            keybinding: 'ctrl+,',
        });
    };
    PreferencesContribution.prototype.registerToolbarItems = function (toolbar) {
        toolbar.registerItem({
            id: preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id,
            command: preference_types_1.PreferencesCommands.OPEN_PREFERENCES_JSON_TOOLBAR.id,
            tooltip: 'Open Preferences in JSON',
            priority: 0,
        });
    };
    PreferencesContribution.prototype.openPreferencesJSON = function (preferenceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var wasOpenedFromEditor, _a, scope, activeScopeIsFolder, uri, preferenceId, currentPreferenceValue, key, valueInCurrentScope, jsonEditorWidget, jsonUriToOpen, text, index, numReturns;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        wasOpenedFromEditor = preferenceNode.constructor.name !== 'PreferencesWidget';
                        _a = this.preferencesScope, scope = _a.scope, activeScopeIsFolder = _a.activeScopeIsFolder, uri = _a.uri;
                        preferenceId = wasOpenedFromEditor ? preferenceNode.id : '';
                        // when opening from toolbar, widget is passed as arg by default (we don't need this info)
                        if (wasOpenedFromEditor) {
                            currentPreferenceValue = preferenceNode.preference.values;
                            key = preference_types_1.Preference.LookupKeys[Number(scope)];
                            valueInCurrentScope = currentPreferenceValue[key] === undefined ? currentPreferenceValue.defaultValue : currentPreferenceValue[key];
                            this.preferenceValueRetrievalService.set(preferenceId, valueInCurrentScope, Number(scope), uri);
                        }
                        return [4 /*yield*/, this.getPreferencesJSONUri(scope, activeScopeIsFolder, uri)];
                    case 1:
                        jsonUriToOpen = _b.sent();
                        if (!jsonUriToOpen) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.editorManager.open(jsonUriToOpen)];
                    case 2:
                        jsonEditorWidget = _b.sent();
                        if (wasOpenedFromEditor) {
                            text = jsonEditorWidget.editor.document.getText();
                            if (preferenceId) {
                                index = text.match(preferenceId).index;
                                numReturns = text.slice(0, index).match(new RegExp('\n', 'g')).length;
                                jsonEditorWidget.editor.cursor = { line: numReturns, character: 4 + preferenceId.length + 4 };
                            }
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PreferencesContribution.prototype.getPreferencesJSONUri = function (scope, activeScopeIsFolder, uri) {
        return __awaiter(this, void 0, void 0, function () {
            var scopeNumber, wsURI, wsURIString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scopeNumber = Number(scope);
                        if (!(browser_1.PreferenceScope.User === scopeNumber)) return [3 /*break*/, 1];
                        return [2 /*return*/, user_preference_provider_1.USER_PREFERENCE_URI];
                    case 1:
                        if (!(browser_1.PreferenceScope.Workspace === scopeNumber)) return [3 /*break*/, 7];
                        if (!(activeScopeIsFolder === 'true')) return [3 /*break*/, 2];
                        return [2 /*return*/, this.getOrCreateSettingsFile(uri)];
                    case 2:
                        wsURI = this.workspacePreferenceProvider.getConfigUri();
                        if (!wsURI) return [3 /*break*/, 6];
                        wsURIString = wsURI.toString();
                        return [4 /*yield*/, this.filesystem.exists(wsURIString)];
                    case 3:
                        if (!!(_a.sent())) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.filesystem.createFile(wsURIString)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, new uri_1.default(wsURIString)];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        if (browser_1.PreferenceScope.Folder === scopeNumber) {
                            return [2 /*return*/, this.getOrCreateSettingsFile(uri)];
                        }
                        _a.label = 8;
                    case 8: return [2 /*return*/, undefined];
                }
            });
        });
    };
    PreferencesContribution.prototype.getOrCreateSettingsFile = function (folderURI) {
        return __awaiter(this, void 0, void 0, function () {
            var folderSettingsURI, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        folderSettingsURI = folderURI + "/.theia/settings.json";
                        _a = folderSettingsURI;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.filesystem.exists(folderSettingsURI)];
                    case 1:
                        _a = !(_b.sent());
                        _b.label = 2;
                    case 2:
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.filesystem.createFile(folderSettingsURI)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, new uri_1.default(folderSettingsURI)];
                }
            });
        });
    };
    /**
     * Determine if the current widget is the PreferencesWidget.
     */
    PreferencesContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof preference_widget_1.PreferencesWidget && widget.id === preference_widget_1.PreferencesWidget.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesContribution.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(common_1.FileSystem),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "filesystem", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceProvider),
        inversify_1.named(browser_1.PreferenceScope.Workspace),
        __metadata("design:type", workspace_preference_provider_1.WorkspacePreferenceProvider)
    ], PreferencesContribution.prototype, "workspacePreferenceProvider", void 0);
    __decorate([
        inversify_1.inject(browser_3.EditorManager),
        __metadata("design:type", browser_3.EditorManager)
    ], PreferencesContribution.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "preferenceValueRetrievalService", void 0);
    __decorate([
        inversify_1.inject(clipboard_service_1.ClipboardService),
        __metadata("design:type", Object)
    ], PreferencesContribution.prototype, "clipboardService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesContribution.prototype, "init", null);
    PreferencesContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], PreferencesContribution);
    return PreferencesContribution;
}(browser_1.AbstractViewContribution));
exports.PreferencesContribution = PreferencesContribution;
//# sourceMappingURL=preference-contribution.js.map