"use strict";
/********************************************************************************
 * Copyright (C) 2020 Ericsson and others.
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
exports.PreferencesWidget = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var preference_types_1 = require("../util/preference-types");
var preference_editor_widget_1 = require("./preference-editor-widget");
var preference_tree_widget_1 = require("./preference-tree-widget");
var preference_searchbar_widget_1 = require("./preference-searchbar-widget");
var preference_scope_tabbar_widget_1 = require("./preference-scope-tabbar-widget");
var PreferencesWidget = /** @class */ (function (_super) {
    __extends(PreferencesWidget, _super);
    function PreferencesWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._preferenceScope = preference_types_1.Preference.DEFAULT_SCOPE;
        return _this;
    }
    PreferencesWidget_1 = PreferencesWidget;
    Object.defineProperty(PreferencesWidget.prototype, "preferenceScope", {
        get: function () {
            return this._preferenceScope;
        },
        set: function (preferenceScopeDetails) {
            this._preferenceScope = preferenceScopeDetails;
            this.editorWidget.preferenceScope = this._preferenceScope;
        },
        enumerable: false,
        configurable: true
    });
    PreferencesWidget.prototype.onResize = function (msg) {
        _super.prototype.onResize.call(this, msg);
        if (msg.width < 600 && this.treeWidget && !this.treeWidget.isHidden) {
            this.treeWidget.hide();
            this.editorWidget.addClass('full-pane');
        }
        else if (msg.width >= 600 && this.treeWidget && this.treeWidget.isHidden) {
            this.treeWidget.show();
            this.editorWidget.removeClass('full-pane');
        }
    };
    PreferencesWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.searchbarWidget.focus();
    };
    PreferencesWidget.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.id = PreferencesWidget_1.ID;
                        this.title.label = PreferencesWidget_1.LABEL;
                        this.title.closable = true;
                        this.addClass('theia-settings-container');
                        this.title.iconClass = 'fa fa-sliders';
                        _a = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_searchbar_widget_1.PreferencesSearchbarWidget.ID)];
                    case 1:
                        _a.searchbarWidget = _e.sent();
                        this.searchbarWidget.addClass('preferences-searchbar-widget');
                        this.addWidget(this.searchbarWidget);
                        _b = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_scope_tabbar_widget_1.PreferencesScopeTabBar.ID)];
                    case 2:
                        _b.tabBarWidget = _e.sent();
                        this.tabBarWidget.addClass('preferences-tabbar-widget');
                        this.addWidget(this.tabBarWidget);
                        _c = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_tree_widget_1.PreferencesTreeWidget.ID)];
                    case 3:
                        _c.treeWidget = _e.sent();
                        this.treeWidget.addClass('preferences-tree-widget');
                        this.addWidget(this.treeWidget);
                        _d = this;
                        return [4 /*yield*/, this.manager.getOrCreateWidget(preference_editor_widget_1.PreferencesEditorWidget.ID)];
                    case 4:
                        _d.editorWidget = _e.sent();
                        this.editorWidget.addClass('preferences-editor-widget');
                        this.addWidget(this.editorWidget);
                        this.update();
                        return [2 /*return*/];
                }
            });
        });
    };
    var PreferencesWidget_1;
    /**
     * The widget `id`.
     */
    PreferencesWidget.ID = 'settings_widget';
    /**
     * The widget `label` which is used for display purposes.
     */
    PreferencesWidget.LABEL = 'Preferences';
    PreferencesWidget.COMMAND_LABEL = 'Open Preferences';
    __decorate([
        inversify_1.inject(preference_editor_widget_1.PreferencesEditorWidget),
        __metadata("design:type", preference_editor_widget_1.PreferencesEditorWidget)
    ], PreferencesWidget.prototype, "editorWidget", void 0);
    __decorate([
        inversify_1.inject(preference_tree_widget_1.PreferencesTreeWidget),
        __metadata("design:type", preference_tree_widget_1.PreferencesTreeWidget)
    ], PreferencesWidget.prototype, "treeWidget", void 0);
    __decorate([
        inversify_1.inject(preference_searchbar_widget_1.PreferencesSearchbarWidget),
        __metadata("design:type", preference_searchbar_widget_1.PreferencesSearchbarWidget)
    ], PreferencesWidget.prototype, "searchbarWidget", void 0);
    __decorate([
        inversify_1.inject(preference_scope_tabbar_widget_1.PreferencesScopeTabBar),
        __metadata("design:type", preference_scope_tabbar_widget_1.PreferencesScopeTabBar)
    ], PreferencesWidget.prototype, "tabBarWidget", void 0);
    __decorate([
        inversify_1.inject(browser_1.WidgetManager),
        __metadata("design:type", browser_1.WidgetManager)
    ], PreferencesWidget.prototype, "manager", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], PreferencesWidget.prototype, "init", null);
    PreferencesWidget = PreferencesWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesWidget);
    return PreferencesWidget;
}(browser_1.Panel));
exports.PreferencesWidget = PreferencesWidget;
//# sourceMappingURL=preference-widget.js.map