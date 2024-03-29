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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.PreferencesEditorWidget = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
var inversify_1 = require("inversify");
var React = require("react");
var vscode_jsonrpc_1 = require("vscode-jsonrpc");
var browser_1 = require("@theia/core/lib/browser");
var single_preference_display_factory_1 = require("./components/single-preference-display-factory");
var preference_types_1 = require("../util/preference-types");
var preference_event_service_1 = require("../util/preference-event-service");
var preference_tree_provider_1 = require("../preference-tree-provider");
var PreferencesEditorWidget = /** @class */ (function (_super) {
    __extends(PreferencesEditorWidget, _super);
    function PreferencesEditorWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeScope = browser_1.PreferenceScope.User;
        _this.activeURI = '';
        _this.activeScopeIsFolder = false;
        _this.scrollContainerRef = React.createRef();
        _this.hasRendered = false;
        _this._preferenceScope = preference_types_1.Preference.DEFAULT_SCOPE;
        _this.handleChangeDisplay = function () {
            // This is here to avoid using the synthetic event asynchronously
            _this.currentDisplay = _this.preferenceTreeProvider.currentTree;
            _this.properties = _this.preferenceTreeProvider.propertyList;
            _this.node.scrollTop = 0;
            _this.update();
        };
        _this.onScroll = function () {
            var scrollContainer = _this.node;
            var scrollIsTop = scrollContainer.scrollTop === 0;
            var visibleChildren = [];
            _this.addFirstVisibleChildId(scrollContainer, visibleChildren);
            if (visibleChildren.length) {
                _this.preferencesEventService.onEditorScroll.fire({
                    firstVisibleChildId: visibleChildren[0],
                    isTop: scrollIsTop
                });
            }
        };
        _this.compare = function (value) { return ({
            isBetween: function (a, b) { return ((value >= a && value <= b) || (value >= b && value <= a)); }
        }); };
        _this.handleChangeScope = function (_a) {
            var scope = _a.scope, uri = _a.uri, activeScopeIsFolder = _a.activeScopeIsFolder;
            _this.activeScope = Number(scope);
            _this.activeURI = uri;
            _this.activeScopeIsFolder = activeScopeIsFolder === 'true';
            _this.update();
        };
        return _this;
    }
    PreferencesEditorWidget_1 = PreferencesEditorWidget;
    PreferencesEditorWidget.prototype.init = function () {
        var _this = this;
        this.onRender.push(vscode_jsonrpc_1.Disposable.create(function () { return _this.hasRendered = true; }));
        this.id = PreferencesEditorWidget_1.ID;
        this.title.label = PreferencesEditorWidget_1.LABEL;
        this.preferenceValueRetrievalService.onPreferenceChanged(function (preferenceChange) {
            _this.update();
        });
        this.preferencesEventService.onDisplayChanged.event(function () { return _this.handleChangeDisplay(); });
        this.preferencesEventService.onNavTreeSelection.event(function (e) { return _this.scrollToEditorElement(e.nodeID); });
        this.currentDisplay = this.preferenceTreeProvider.currentTree;
        this.properties = this.preferenceTreeProvider.propertyList;
        this.update();
    };
    Object.defineProperty(PreferencesEditorWidget.prototype, "preferenceScope", {
        set: function (preferenceScopeDetails) {
            this._preferenceScope = preferenceScopeDetails;
            this.handleChangeScope(this._preferenceScope);
        },
        enumerable: false,
        configurable: true
    });
    PreferencesEditorWidget.prototype.callAfterFirstRender = function (callback) {
        if (this.hasRendered) {
            callback();
        }
        else {
            this.onRender.push(vscode_jsonrpc_1.Disposable.create(function () { return callback(); }));
        }
    };
    PreferencesEditorWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        this.callAfterFirstRender(function () {
            _super.prototype.onAfterAttach.call(_this, msg);
            _this.node.addEventListener('scroll', _this.onScroll);
        });
    };
    PreferencesEditorWidget.prototype.render = function () {
        var _this = this;
        var visibleCategories = this.currentDisplay.children.filter(function (category) { return category.visible; });
        return (React.createElement("div", { className: "settings-main" },
            React.createElement("div", { ref: this.scrollContainerRef, className: "settings-main-scroll-container", id: "settings-main-scroll-container" }, !!visibleCategories.length ? visibleCategories.map(function (category) { return _this.renderCategory(category); }) : this.renderNoResultMessage())));
    };
    PreferencesEditorWidget.prototype.addFirstVisibleChildId = function (container, array) {
        var children = container.children;
        for (var i = 0; i < children.length && !array.length; i++) {
            var id = children[i].getAttribute('data-id');
            if (id && this.isInView(children[i], container)) {
                array.push(id);
            }
            else if (!array.length) {
                this.addFirstVisibleChildId(children[i], array);
            }
        }
    };
    PreferencesEditorWidget.prototype.isInView = function (e, parent) {
        var scrollTop = this.node.scrollTop;
        var scrollCheckHeight = 0.7;
        return this.compare(e.offsetTop).isBetween(scrollTop, scrollTop + parent.offsetHeight) ||
            this.compare(scrollTop).isBetween(e.offsetTop, e.offsetTop + (e.offsetHeight * scrollCheckHeight));
    };
    PreferencesEditorWidget.prototype.renderCategory = function (category) {
        var _this = this;
        var children = category.children.concat(category.leaves).sort(function (a, b) { return _this.sort(a.id, b.id); });
        return category.visible && (React.createElement("ul", { className: "settings-section", key: category.id + "-editor", id: category.id + "-editor" },
            React.createElement("li", { className: "settings-section-title", "data-id": category.id }, category.name),
            children.map(function (preferenceNode) {
                if (preference_types_1.Preference.Branch.is(preferenceNode)) {
                    return _this.renderCategory(preferenceNode);
                }
                var values = _this.preferenceValueRetrievalService.inspect(preferenceNode.id, _this.activeURI);
                var preferenceNodeWithValueInAllScopes = __assign(__assign({}, preferenceNode), { preference: { data: _this.properties[preferenceNode.id], values: values } });
                return _this.singlePreferenceFactory.render(preferenceNodeWithValueInAllScopes);
            })));
    };
    PreferencesEditorWidget.prototype.renderNoResultMessage = function () {
        return React.createElement("div", { className: "settings-no-results-announcement" }, "That search query has returned no results.");
    };
    PreferencesEditorWidget.prototype.scrollToEditorElement = function (nodeID) {
        if (nodeID) {
            var el = document.getElementById(nodeID + "-editor");
            if (el) {
                el.scrollIntoView();
            }
        }
    };
    /**
     * Sort two strings.
     *
     * @param a the first string.
     * @param b the second string.
     */
    PreferencesEditorWidget.prototype.sort = function (a, b) {
        return a.localeCompare(b, undefined, { ignorePunctuation: true });
    };
    var PreferencesEditorWidget_1;
    PreferencesEditorWidget.ID = 'settings.editor';
    PreferencesEditorWidget.LABEL = 'Settings Editor';
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesEditorWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesEditorWidget.prototype, "preferenceValueRetrievalService", void 0);
    __decorate([
        inversify_1.inject(preference_tree_provider_1.PreferencesTreeProvider),
        __metadata("design:type", preference_tree_provider_1.PreferencesTreeProvider)
    ], PreferencesEditorWidget.prototype, "preferenceTreeProvider", void 0);
    __decorate([
        inversify_1.inject(single_preference_display_factory_1.SinglePreferenceDisplayFactory),
        __metadata("design:type", single_preference_display_factory_1.SinglePreferenceDisplayFactory)
    ], PreferencesEditorWidget.prototype, "singlePreferenceFactory", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesEditorWidget.prototype, "init", null);
    PreferencesEditorWidget = PreferencesEditorWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesEditorWidget);
    return PreferencesEditorWidget;
}(browser_1.ReactWidget));
exports.PreferencesEditorWidget = PreferencesEditorWidget;
//# sourceMappingURL=preference-editor-widget.js.map