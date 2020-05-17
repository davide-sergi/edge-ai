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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreferencesSearchbarWidget = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var React = require("react");
var lodash_1 = require("lodash");
var browser_2 = require("@theia/languages/lib/browser");
var preference_event_service_1 = require("../util/preference-event-service");
var PreferencesSearchbarWidget = /** @class */ (function (_super) {
    __extends(PreferencesSearchbarWidget, _super);
    function PreferencesSearchbarWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.searchbarRef = React.createRef();
        _this.handleSearch = function (e) {
            _this.search(e.target.value);
        };
        _this.search = lodash_1.debounce(function (value) {
            _this.preferencesEventService.onSearch.fire({ query: value });
            _this.update();
        }, 200);
        return _this;
    }
    PreferencesSearchbarWidget_1 = PreferencesSearchbarWidget;
    PreferencesSearchbarWidget.prototype.init = function () {
        var _this = this;
        this.onRender.push(browser_2.Disposable.create(function () { return _this.focus(); }));
        this.id = PreferencesSearchbarWidget_1.ID;
        this.title.label = PreferencesSearchbarWidget_1.LABEL;
        this.update();
    };
    PreferencesSearchbarWidget.prototype.focus = function () {
        if (this.searchbarRef.current) {
            this.searchbarRef.current.focus();
        }
    };
    PreferencesSearchbarWidget.prototype.render = function () {
        return (React.createElement("div", { className: 'settings-header' },
            React.createElement("div", { className: "settings-search-container" },
                React.createElement("input", { type: "text", placeholder: "Search Settings", className: "settings-search-input theia-input", onChange: this.handleSearch, ref: this.searchbarRef }))));
    };
    var PreferencesSearchbarWidget_1;
    PreferencesSearchbarWidget.ID = 'settings.header';
    PreferencesSearchbarWidget.LABEL = 'Settings Header';
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesSearchbarWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesSearchbarWidget.prototype, "init", null);
    PreferencesSearchbarWidget = PreferencesSearchbarWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesSearchbarWidget);
    return PreferencesSearchbarWidget;
}(browser_1.ReactWidget));
exports.PreferencesSearchbarWidget = PreferencesSearchbarWidget;
//# sourceMappingURL=preference-searchbar-widget.js.map