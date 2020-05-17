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
exports.PreferencesTreeProvider = void 0;
var inversify_1 = require("inversify");
var fuzzy = require("fuzzy");
var lodash_1 = require("lodash");
var browser_1 = require("@theia/core/lib/browser");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var preference_event_service_1 = require("./util/preference-event-service");
var preference_tree_generator_1 = require("./util/preference-tree-generator");
var preference_types_1 = require("./util/preference-types");
;
var filterDefaults = {
    minLength: 1,
    baseSchemaAltered: false,
};
var PreferencesTreeProvider = /** @class */ (function () {
    function PreferencesTreeProvider() {
        var _this = this;
        this._isFiltered = false;
        this.lastSearchedLiteral = '';
        this.lastSearchedFuzzy = '';
        this.currentScope = preference_types_1.Preference.DEFAULT_SCOPE;
        this.handleUnderlyingDataChange = lodash_1.debounce(function (options, newScope) { return _this.updateUnderlyingData(options, newScope); }, 200);
    }
    PreferencesTreeProvider.prototype.init = function () {
        var _this = this;
        this.updateUnderlyingData({ baseSchemaAltered: true });
        this.schemaProvider.onDidPreferenceSchemaChanged(function () { return _this.handleUnderlyingDataChange({ baseSchemaAltered: true }); });
        this.preferencesEventService.onSearch.event(function (searchEvent) { return _this.updateDisplay(searchEvent.query); });
        this.preferencesEventService.onTabScopeSelected.event(function (scopeEvent) { return _this.handleUnderlyingDataChange({}, scopeEvent); });
    };
    PreferencesTreeProvider.prototype.updateUnderlyingData = function (options, newScope) {
        if (options.baseSchemaAltered) {
            this.baseSchema = this.schemaProvider.getCombinedSchema();
        }
        if (newScope) {
            this.currentScope = newScope;
        }
        this.updateDisplay(this.lastSearchedLiteral, options);
    };
    PreferencesTreeProvider.prototype.updateDisplay = function (term, options) {
        if (term === void 0) { term = this.lastSearchedLiteral; }
        if (options === void 0) { options = {}; }
        if (options.baseSchemaAltered) {
            this.baseTree = this.preferencesTreeGenerator.generateTree();
        }
        this._currentTree = this.filter(term, Number(this.currentScope.scope), this.baseTree, options);
        this.preferencesEventService.onDisplayChanged.fire();
    };
    PreferencesTreeProvider.prototype.filter = function (searchTerm, currentScope, tree, filterOptions) {
        if (filterOptions === void 0) { filterOptions = {}; }
        var minLength = __assign(__assign({}, filterDefaults), filterOptions).minLength;
        this.lastSearchedLiteral = searchTerm;
        this.lastSearchedFuzzy = searchTerm.replace(/\s/g, '');
        this._isFiltered = searchTerm.length >= minLength;
        return this.recurseAndSetVisible(currentScope, tree);
    };
    PreferencesTreeProvider.prototype.recurseAndSetVisible = function (scope, tree) {
        var _this = this;
        var currentNodeShouldBeVisible = false;
        if (browser_1.CompositeTreeNode.is(tree)) {
            tree.children = tree.children.map(function (child) {
                var newChild = _this.recurseAndSetVisible(scope, child);
                currentNodeShouldBeVisible = currentNodeShouldBeVisible || !!newChild.visible;
                return newChild;
            });
            if (preference_types_1.Preference.Branch.is(tree)) {
                tree.leaves = (tree.leaves || []).map(function (child) {
                    var newChild = _this.recurseAndSetVisible(scope, child);
                    currentNodeShouldBeVisible = currentNodeShouldBeVisible || !!newChild.visible;
                    return newChild;
                });
            }
        }
        else {
            currentNodeShouldBeVisible = this.schemaProvider.isValidInScope(tree.id, scope)
                && (!this._isFiltered // search too short.
                    || fuzzy.test(this.lastSearchedFuzzy, tree.id || '') // search matches preference name.
                    // search matches description. Fuzzy isn't ideal here because the score dependens on the order of discovery.
                    || (this.baseSchema.properties[tree.id].description || '').includes(this.lastSearchedLiteral));
        }
        return __assign(__assign({}, tree), { visible: currentNodeShouldBeVisible });
    };
    Object.defineProperty(PreferencesTreeProvider.prototype, "currentTree", {
        get: function () {
            return this._currentTree;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferencesTreeProvider.prototype, "propertyList", {
        get: function () {
            return this.baseSchema.properties;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PreferencesTreeProvider.prototype, "isFiltered", {
        get: function () {
            return this._isFiltered;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesTreeProvider.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.inject(browser_1.PreferenceSchemaProvider),
        __metadata("design:type", browser_1.PreferenceSchemaProvider)
    ], PreferencesTreeProvider.prototype, "schemaProvider", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesTreeProvider.prototype, "preferenceConfigs", void 0);
    __decorate([
        inversify_1.inject(preference_tree_generator_1.PreferenceTreeGenerator),
        __metadata("design:type", preference_tree_generator_1.PreferenceTreeGenerator)
    ], PreferencesTreeProvider.prototype, "preferencesTreeGenerator", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesTreeProvider.prototype, "init", null);
    PreferencesTreeProvider = __decorate([
        inversify_1.injectable()
    ], PreferencesTreeProvider);
    return PreferencesTreeProvider;
}());
exports.PreferencesTreeProvider = PreferencesTreeProvider;
//# sourceMappingURL=preference-tree-provider.js.map