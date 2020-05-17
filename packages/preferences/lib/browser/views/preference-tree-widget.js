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
exports.PreferencesTreeWidget = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var preference_configurations_1 = require("@theia/core/lib/browser/preferences/preference-configurations");
var React = require("react");
var preference_event_service_1 = require("../util/preference-event-service");
var preferences_decorator_1 = require("../preferences-decorator");
var preference_tree_provider_1 = require("../preference-tree-provider");
var PreferencesTreeWidget = /** @class */ (function (_super) {
    __extends(PreferencesTreeWidget, _super);
    function PreferencesTreeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shouldFireSelectionEvents = true;
        return _this;
    }
    PreferencesTreeWidget_1 = PreferencesTreeWidget;
    PreferencesTreeWidget.prototype.init = function () {
        var _this = this;
        _super.prototype.init.call(this);
        this.preferencesEventService.onDisplayChanged.event(function () { return _this.updateDisplay(); });
        this.preferencesEventService.onEditorScroll.event(function (e) {
            _this.handleEditorScroll(e.firstVisibleChildId);
        });
        this.id = PreferencesTreeWidget_1.ID;
    };
    PreferencesTreeWidget.prototype.handleEditorScroll = function (firstVisibleChildId) {
        this.shouldFireSelectionEvents = false;
        if (firstVisibleChildId !== this.firstVisibleLeafNodeID) {
            var _a = this.getAncestorsForVisibleNode(firstVisibleChildId), selectionAncestor = _a.selectionAncestor, expansionAncestor = _a.expansionAncestor;
            this.firstVisibleLeafNodeID = firstVisibleChildId;
            this.model.expandNode(expansionAncestor);
            this.collapseAllExcept(expansionAncestor);
            this.model.selectNode(selectionAncestor);
        }
        this.shouldFireSelectionEvents = true;
    };
    PreferencesTreeWidget.prototype.collapseAllExcept = function (openNode) {
        var _this = this;
        var children = this.model.root.children;
        children.forEach(function (child) {
            if (child !== openNode && child.expanded) {
                _this.model.collapseNode(child);
            }
        });
    };
    PreferencesTreeWidget.prototype.getAncestorsForVisibleNode = function (visibleNodeID) {
        var isNonLeafNode = visibleNodeID.endsWith('-id');
        var isSubgroupNode = isNonLeafNode && visibleNodeID.includes('.');
        var expansionAncestor;
        var selectionAncestor;
        if (isSubgroupNode) {
            selectionAncestor = this.model.getNode(visibleNodeID);
            expansionAncestor = selectionAncestor.parent;
        }
        else if (isNonLeafNode) {
            selectionAncestor = this.model.getNode(visibleNodeID);
            expansionAncestor = selectionAncestor;
        }
        else {
            var labels = visibleNodeID.split('.');
            var hasSubgroupAncestor = labels.length > 2;
            var expansionAncestorID = labels[0] + "-id";
            expansionAncestor = this.model.getNode(expansionAncestorID);
            if (hasSubgroupAncestor) {
                var subgroupID = labels.slice(0, 2).join('.') + '-id';
                selectionAncestor = this.model.getNode(subgroupID);
            }
            else {
                // The last selectable child that precedes the visible item alphabetically
                selectionAncestor = __spread(expansionAncestor.children).reverse().find(function (child) { return child.visible && child.id < visibleNodeID; }) || expansionAncestor;
            }
        }
        return { selectionAncestor: selectionAncestor, expansionAncestor: expansionAncestor };
    };
    PreferencesTreeWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        this.updateDisplay();
        this.model.onSelectionChanged(function (previousAndCurrentSelectedNodes) { return _this.fireEditorScrollForNewSelection(previousAndCurrentSelectedNodes); });
        _super.prototype.onAfterAttach.call(this, msg);
    };
    PreferencesTreeWidget.prototype.updateDisplay = function () {
        var _this = this;
        if (this.preferenceTreeProvider) {
            this.model.root = this.preferenceTreeProvider.currentTree;
            var nodes = Object.keys(this.preferenceTreeProvider.propertyList)
                .map(function (propertyName) {
                var _a;
                return (_a = {}, _a[propertyName] = _this.preferenceTreeProvider.propertyList[propertyName], _a);
            });
            this.decorator.fireDidChangeDecorations(nodes);
            this.update();
        }
    };
    PreferencesTreeWidget.prototype.fireEditorScrollForNewSelection = function (previousAndCurrentSelectedNodes) {
        if (this.shouldFireSelectionEvents) {
            var _a = __read(previousAndCurrentSelectedNodes, 1), currentSelectedNode = _a[0];
            this.firstVisibleLeafNodeID = currentSelectedNode.id;
            this.preferencesEventService.onNavTreeSelection.fire({ nodeID: currentSelectedNode.id });
        }
    };
    PreferencesTreeWidget.prototype.renderNode = function (node, props) {
        if (!browser_1.TreeNode.isVisible(node)) {
            return undefined;
        }
        var attributes = this.createNodeAttributes(node, props);
        var printedNameWithVisibleChildren = node.name && this.preferenceTreeProvider.isFiltered
            ? node.name + " (" + this.calculateVisibleLeaves(node) + ")"
            : node.name;
        var content = React.createElement("div", { className: browser_1.TREE_NODE_CONTENT_CLASS },
            this.renderExpansionToggle(node, props),
            this.renderCaption(__assign(__assign({}, node), { name: printedNameWithVisibleChildren }), props));
        return React.createElement('div', attributes, content);
    };
    PreferencesTreeWidget.prototype.calculateVisibleLeaves = function (node) {
        var _this = this;
        var visibleLeaves = 0;
        // The check for node.name prevents recursion at the level of `root`.
        if (node.children) {
            node.children.forEach(function (child) {
                visibleLeaves += _this.calculateVisibleLeaves(child);
            });
        }
        if (node.leaves) {
            node.leaves.forEach(function (leaf) {
                if (leaf.visible) {
                    visibleLeaves++;
                }
                ;
            });
        }
        return visibleLeaves;
    };
    PreferencesTreeWidget.prototype.renderExpansionToggle = function (node, props) {
        if (node.children && node.children.every(function (child) { return !child.visible; })) {
            return React.createElement("div", { className: 'preferences-tree-spacer' });
        }
        return _super.prototype.renderExpansionToggle.call(this, node, props);
    };
    var PreferencesTreeWidget_1;
    PreferencesTreeWidget.ID = 'preferences.tree';
    __decorate([
        inversify_1.inject(browser_1.PreferenceService),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "preferenceService", void 0);
    __decorate([
        inversify_1.inject(preferences_decorator_1.PreferencesDecorator),
        __metadata("design:type", preferences_decorator_1.PreferencesDecorator)
    ], PreferencesTreeWidget.prototype, "decorator", void 0);
    __decorate([
        inversify_1.inject(preference_configurations_1.PreferenceConfigurations),
        __metadata("design:type", preference_configurations_1.PreferenceConfigurations)
    ], PreferencesTreeWidget.prototype, "preferenceConfigs", void 0);
    __decorate([
        inversify_1.inject(preference_tree_provider_1.PreferencesTreeProvider),
        __metadata("design:type", preference_tree_provider_1.PreferencesTreeProvider)
    ], PreferencesTreeWidget.prototype, "preferenceTreeProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeModel),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "model", void 0);
    __decorate([
        inversify_1.inject(browser_1.TreeProps),
        __metadata("design:type", Object)
    ], PreferencesTreeWidget.prototype, "treeProps", void 0);
    __decorate([
        inversify_1.inject(browser_1.ContextMenuRenderer),
        __metadata("design:type", browser_1.ContextMenuRenderer)
    ], PreferencesTreeWidget.prototype, "contextMenuRenderer", void 0);
    __decorate([
        inversify_1.inject(preference_event_service_1.PreferencesEventService),
        __metadata("design:type", preference_event_service_1.PreferencesEventService)
    ], PreferencesTreeWidget.prototype, "preferencesEventService", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PreferencesTreeWidget.prototype, "init", null);
    PreferencesTreeWidget = PreferencesTreeWidget_1 = __decorate([
        inversify_1.injectable()
    ], PreferencesTreeWidget);
    return PreferencesTreeWidget;
}(browser_1.TreeWidget));
exports.PreferencesTreeWidget = PreferencesTreeWidget;
//# sourceMappingURL=preference-tree-widget.js.map