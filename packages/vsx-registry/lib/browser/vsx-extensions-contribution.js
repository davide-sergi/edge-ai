"use strict";
/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSXExtensionsContribution = exports.VSXExtensionsCommands = void 0;
var inversify_1 = require("inversify");
var view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
var vsx_extensions_view_container_1 = require("./vsx-extensions-view-container");
var vsx_extensions_model_1 = require("./vsx-extensions-model");
var color_registry_1 = require("@theia/core/lib/browser/color-registry");
var VSXExtensionsCommands;
(function (VSXExtensionsCommands) {
    VSXExtensionsCommands.CLEAR_ALL = {
        id: 'vsxExtensions.clearAll',
        category: 'Extensions',
        label: 'Clear Search Results',
        iconClass: 'clear-all'
    };
})(VSXExtensionsCommands = exports.VSXExtensionsCommands || (exports.VSXExtensionsCommands = {}));
var VSXExtensionsContribution = /** @class */ (function (_super) {
    __extends(VSXExtensionsContribution, _super);
    function VSXExtensionsContribution() {
        return _super.call(this, {
            widgetId: vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID,
            widgetName: vsx_extensions_view_container_1.VSXExtensionsViewContainer.LABEL,
            defaultWidgetOptions: {
                area: 'left',
                rank: 500
            },
            toggleCommandId: 'vsxExtensions.toggle',
            toggleKeybinding: 'ctrlcmd+shift+x'
        }) || this;
    }
    VSXExtensionsContribution.prototype.registerCommands = function (commands) {
        var _this = this;
        _super.prototype.registerCommands.call(this, commands);
        commands.registerCommand(VSXExtensionsCommands.CLEAR_ALL, {
            execute: function (w) { return _this.withWidget(w, function () { return _this.model.search.query = ''; }); },
            isEnabled: function (w) { return _this.withWidget(w, function () { return !!_this.model.search.query; }); },
            isVisible: function (w) { return _this.withWidget(w, function () { return true; }); }
        });
    };
    VSXExtensionsContribution.prototype.registerToolbarItems = function (registry) {
        registry.registerItem({
            id: VSXExtensionsCommands.CLEAR_ALL.id,
            command: VSXExtensionsCommands.CLEAR_ALL.id,
            tooltip: VSXExtensionsCommands.CLEAR_ALL.label,
            priority: 1,
            onDidChange: this.model.onDidChange
        });
    };
    VSXExtensionsContribution.prototype.registerColors = function (colors) {
        // VS Code colors should be aligned with https://code.visualstudio.com/api/references/theme-color#extensions
        colors.register({
            id: 'extensionButton.prominentBackground', defaults: {
                dark: '#327e36',
                light: '#327e36'
            }, description: 'Button background color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentForeground', defaults: {
                dark: color_registry_1.Color.white,
                light: color_registry_1.Color.white
            }, description: 'Button foreground color for actions extension that stand out (e.g. install button).'
        }, {
            id: 'extensionButton.prominentHoverBackground', defaults: {
                dark: '#28632b',
                light: '#28632b'
            }, description: 'Button background hover color for actions extension that stand out (e.g. install button).'
        });
    };
    VSXExtensionsContribution.prototype.withWidget = function (widget, fn) {
        if (widget === void 0) { widget = this.tryGetWidget(); }
        if (widget instanceof vsx_extensions_view_container_1.VSXExtensionsViewContainer && widget.id === vsx_extensions_view_container_1.VSXExtensionsViewContainer.ID) {
            return fn(widget);
        }
        return false;
    };
    __decorate([
        inversify_1.inject(vsx_extensions_model_1.VSXExtensionsModel),
        __metadata("design:type", vsx_extensions_model_1.VSXExtensionsModel)
    ], VSXExtensionsContribution.prototype, "model", void 0);
    VSXExtensionsContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], VSXExtensionsContribution);
    return VSXExtensionsContribution;
}(view_contribution_1.AbstractViewContribution));
exports.VSXExtensionsContribution = VSXExtensionsContribution;
//# sourceMappingURL=vsx-extensions-contribution.js.map