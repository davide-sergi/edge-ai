"use strict";
/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ActionMenuNode = exports.CompositeMenuNode = exports.MenuModelRegistry = exports.MenuContribution = exports.MAIN_MENU_BAR = exports.MenuAction = void 0;
var inversify_1 = require("inversify");
var command_1 = require("./command");
var contribution_provider_1 = require("./contribution-provider");
var MenuAction;
(function (MenuAction) {
    /* Determine whether object is a MenuAction */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function is(arg) {
        return !!arg && arg === Object(arg) && 'commandId' in arg;
    }
    MenuAction.is = is;
})(MenuAction = exports.MenuAction || (exports.MenuAction = {}));
exports.MAIN_MENU_BAR = ['menubar'];
exports.MenuContribution = Symbol('MenuContribution');
var MenuModelRegistry = /** @class */ (function () {
    function MenuModelRegistry(contributions, commands) {
        this.contributions = contributions;
        this.commands = commands;
        this.root = new CompositeMenuNode('');
    }
    MenuModelRegistry.prototype.onStart = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.contributions.getContributions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contrib = _c.value;
                contrib.registerMenus(this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    MenuModelRegistry.prototype.registerMenuAction = function (menuPath, item) {
        var parent = this.findGroup(menuPath);
        var actionNode = new ActionMenuNode(item, this.commands);
        return parent.addNode(actionNode);
    };
    MenuModelRegistry.prototype.registerSubmenu = function (menuPath, label, options) {
        if (menuPath.length === 0) {
            throw new Error('The sub menu path cannot be empty.');
        }
        var index = menuPath.length - 1;
        var menuId = menuPath[index];
        var groupPath = index === 0 ? [] : menuPath.slice(0, index);
        var parent = this.findGroup(groupPath);
        var groupNode = this.findSubMenu(parent, menuId);
        if (!groupNode) {
            groupNode = new CompositeMenuNode(menuId, label, options ? options.iconClass : undefined);
            return parent.addNode(groupNode);
        }
        else {
            if (!groupNode.label) {
                groupNode.label = label;
            }
            else if (groupNode.label !== label) {
                throw new Error("The group '" + menuPath.join('/') + "' already has a different label.");
            }
            if (!groupNode.iconClass && options) {
                groupNode.iconClass = options.iconClass;
            }
            return { dispose: function () { } };
        }
    };
    MenuModelRegistry.prototype.unregisterMenuAction = function (itemOrCommandOrId, menuPath) {
        var id = MenuAction.is(itemOrCommandOrId) ? itemOrCommandOrId.commandId
            : command_1.Command.is(itemOrCommandOrId) ? itemOrCommandOrId.id
                : itemOrCommandOrId;
        if (menuPath) {
            var parent_1 = this.findGroup(menuPath);
            parent_1.removeNode(id);
            return;
        }
        // Recurse all menus, removing any menus matching the id
        var recurse = function (root) {
            root.children.forEach(function (node) {
                if (node instanceof CompositeMenuNode) {
                    node.removeNode(id);
                    recurse(node);
                }
            });
        };
        recurse(this.root);
    };
    MenuModelRegistry.prototype.findGroup = function (menuPath) {
        var e_2, _a;
        var currentMenu = this.root;
        try {
            for (var menuPath_1 = __values(menuPath), menuPath_1_1 = menuPath_1.next(); !menuPath_1_1.done; menuPath_1_1 = menuPath_1.next()) {
                var segment = menuPath_1_1.value;
                currentMenu = this.findSubMenu(currentMenu, segment);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (menuPath_1_1 && !menuPath_1_1.done && (_a = menuPath_1.return)) _a.call(menuPath_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return currentMenu;
    };
    MenuModelRegistry.prototype.findSubMenu = function (current, menuId) {
        var sub = current.children.find(function (e) { return e.id === menuId; });
        if (sub instanceof CompositeMenuNode) {
            return sub;
        }
        if (sub) {
            throw new Error("'" + menuId + "' is not a menu group.");
        }
        var newSub = new CompositeMenuNode(menuId);
        current.addNode(newSub);
        return newSub;
    };
    MenuModelRegistry.prototype.getMenu = function (menuPath) {
        if (menuPath === void 0) { menuPath = []; }
        return this.findGroup(menuPath);
    };
    MenuModelRegistry = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(contribution_provider_1.ContributionProvider)), __param(0, inversify_1.named(exports.MenuContribution)),
        __param(1, inversify_1.inject(command_1.CommandRegistry)),
        __metadata("design:paramtypes", [Object, command_1.CommandRegistry])
    ], MenuModelRegistry);
    return MenuModelRegistry;
}());
exports.MenuModelRegistry = MenuModelRegistry;
var CompositeMenuNode = /** @class */ (function () {
    function CompositeMenuNode(id, label, iconClass) {
        this.id = id;
        this.label = label;
        this.iconClass = iconClass;
        this._children = [];
    }
    Object.defineProperty(CompositeMenuNode.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    CompositeMenuNode.prototype.addNode = function (node) {
        var _this = this;
        this._children.push(node);
        this._children.sort(function (m1, m2) {
            // The navigation group is special as it will always be sorted to the top/beginning of a menu.
            if (CompositeMenuNode.isNavigationGroup(m1)) {
                return -1;
            }
            if (CompositeMenuNode.isNavigationGroup(m2)) {
                return 1;
            }
            if (m1.sortString < m2.sortString) {
                return -1;
            }
            else if (m1.sortString > m2.sortString) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return {
            dispose: function () {
                var idx = _this._children.indexOf(node);
                if (idx >= 0) {
                    _this._children.splice(idx, 1);
                }
            }
        };
    };
    CompositeMenuNode.prototype.removeNode = function (id) {
        var node = this._children.find(function (n) { return n.id === id; });
        if (node) {
            var idx = this._children.indexOf(node);
            if (idx >= 0) {
                this._children.splice(idx, 1);
            }
        }
    };
    Object.defineProperty(CompositeMenuNode.prototype, "sortString", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CompositeMenuNode.prototype, "isSubmenu", {
        get: function () {
            return this.label !== undefined;
        },
        enumerable: false,
        configurable: true
    });
    CompositeMenuNode.isNavigationGroup = function (node) {
        return node instanceof CompositeMenuNode && node.id === 'navigation';
    };
    return CompositeMenuNode;
}());
exports.CompositeMenuNode = CompositeMenuNode;
var ActionMenuNode = /** @class */ (function () {
    function ActionMenuNode(action, commands) {
        this.action = action;
        this.commands = commands;
        if (action.alt) {
            this.altNode = new ActionMenuNode({ commandId: action.alt }, commands);
        }
    }
    Object.defineProperty(ActionMenuNode.prototype, "id", {
        get: function () {
            return this.action.commandId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "label", {
        get: function () {
            if (this.action.label) {
                return this.action.label;
            }
            var cmd = this.commands.getCommand(this.action.commandId);
            if (!cmd) {
                throw new Error("A command with id '" + this.action.commandId + "' does not exist.");
            }
            return cmd.label || cmd.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "icon", {
        get: function () {
            if (this.action.icon) {
                return this.action.icon;
            }
            var command = this.commands.getCommand(this.action.commandId);
            return command && command.iconClass;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ActionMenuNode.prototype, "sortString", {
        get: function () {
            return this.action.order || this.label;
        },
        enumerable: false,
        configurable: true
    });
    return ActionMenuNode;
}());
exports.ActionMenuNode = ActionMenuNode;
//# sourceMappingURL=menu.js.map