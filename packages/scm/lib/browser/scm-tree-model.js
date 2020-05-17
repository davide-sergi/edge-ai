"use strict";
/********************************************************************************
 * Copyright (C) 2020 Arm and others.
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
exports.ScmTreeModel = exports.ScmFileChangeNode = exports.ScmFileChangeFolderNode = exports.ScmFileChangeGroupNode = exports.ScmTreeModelProps = void 0;
var inversify_1 = require("inversify");
var disposable_1 = require("@theia/core/lib/common/disposable");
var tree_1 = require("@theia/core/lib/browser/tree");
var uri_1 = require("@theia/core/lib/common/uri");
exports.ScmTreeModelProps = Symbol('ScmTreeModelProps');
var ScmFileChangeGroupNode;
(function (ScmFileChangeGroupNode) {
    function is(node) {
        return 'groupId' in node && 'children' in node
            && !ScmFileChangeFolderNode.is(node);
    }
    ScmFileChangeGroupNode.is = is;
})(ScmFileChangeGroupNode = exports.ScmFileChangeGroupNode || (exports.ScmFileChangeGroupNode = {}));
var ScmFileChangeFolderNode;
(function (ScmFileChangeFolderNode) {
    function is(node) {
        return 'groupId' in node && 'sourceUri' in node && 'path' in node && 'children' in node;
    }
    ScmFileChangeFolderNode.is = is;
})(ScmFileChangeFolderNode = exports.ScmFileChangeFolderNode || (exports.ScmFileChangeFolderNode = {}));
var ScmFileChangeNode;
(function (ScmFileChangeNode) {
    function is(node) {
        return 'sourceUri' in node
            && !ScmFileChangeFolderNode.is(node);
    }
    ScmFileChangeNode.is = is;
})(ScmFileChangeNode = exports.ScmFileChangeNode || (exports.ScmFileChangeNode = {}));
var ScmTreeModel = /** @class */ (function (_super) {
    __extends(ScmTreeModel, _super);
    function ScmTreeModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toDisposeOnRepositoryChange = new disposable_1.DisposableCollection();
        _this._viewMode = 'list';
        _this.compareNodes = function (a, b) { return _this.doCompareNodes(a, b); };
        return _this;
    }
    Object.defineProperty(ScmTreeModel.prototype, "languageId", {
        get: function () {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmTreeModel.prototype, "viewMode", {
        get: function () {
            return this._viewMode;
        },
        set: function (id) {
            var e_1, _a;
            var oldSelection = this.selectedNodes;
            this._viewMode = id;
            if (this._provider) {
                this.root = this.createTree();
                try {
                    for (var oldSelection_1 = __values(oldSelection), oldSelection_1_1 = oldSelection_1.next(); !oldSelection_1_1.done; oldSelection_1_1 = oldSelection_1.next()) {
                        var oldSelectedNode = oldSelection_1_1.value;
                        var newNode = this.getNode(oldSelectedNode.id);
                        if (tree_1.SelectableTreeNode.is(newNode)) {
                            this.revealNode(newNode); // this call can run asynchronously
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (oldSelection_1_1 && !oldSelection_1_1.done && (_a = oldSelection_1.return)) _a.call(oldSelection_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScmTreeModel.prototype, "repository", {
        set: function (repository) {
            var _this = this;
            this.toDisposeOnRepositoryChange.dispose();
            if (repository) {
                this._provider = repository.provider;
                if (this._provider) {
                    this.toDisposeOnRepositoryChange.push(this._provider.onDidChange(function () {
                        _this.root = _this.createTree();
                    }));
                }
            }
            else {
                this._provider = undefined;
            }
            this.root = this.createTree();
        },
        enumerable: false,
        configurable: true
    });
    ScmTreeModel.prototype.createTree = function () {
        var _this = this;
        if (!this._provider) {
            return;
        }
        var root = {
            id: 'file-change-tree-root',
            parent: undefined,
            visible: false,
            rootUri: this._provider.rootUri,
            children: []
        };
        var groups = this._provider.groups;
        var groupNodes = groups
            .filter(function (group) { return !!group.resources.length || !group.hideWhenEmpty; })
            .map(function (group) { return _this.toGroupNode(group, root); });
        root.children = groupNodes;
        return root;
    };
    ScmTreeModel.prototype.toGroupNode = function (group, parent) {
        var _this = this;
        var groupNode = {
            id: "" + group.id,
            groupId: group.id,
            groupLabel: group.label,
            parent: parent,
            children: [],
            expanded: true,
        };
        switch (this._viewMode) {
            case 'list':
                groupNode.children = group.resources.map(function (fileChange) { return _this.toFileChangeNode(fileChange, groupNode); });
                break;
            case 'tree':
                var rootUri_1 = group.provider.rootUri;
                if (rootUri_1) {
                    var resourcePaths = group.resources.map(function (resource) {
                        var relativePath = new uri_1.default(rootUri_1).relative(resource.sourceUri);
                        var pathParts = relativePath ? relativePath.toString().split('/') : [];
                        return { resource: resource, pathParts: pathParts };
                    });
                    groupNode.children = this.buildFileChangeTree(resourcePaths, 0, group.resources.length, 0, groupNode);
                }
                break;
        }
        return groupNode;
    };
    ScmTreeModel.prototype.buildFileChangeTree = function (resources, start, end, level, parent) {
        var result = [];
        var folderStart = start;
        while (folderStart < end) {
            var firstFileChange = resources[folderStart];
            if (level === firstFileChange.pathParts.length - 1) {
                result.push(this.toFileChangeNode(firstFileChange.resource, parent));
                folderStart++;
            }
            else {
                var index = folderStart + 1;
                while (index < end) {
                    if (resources[index].pathParts[level] !== firstFileChange.pathParts[level]) {
                        break;
                    }
                    index++;
                }
                var folderEnd = index;
                var nestingThreshold = this.props.nestingThreshold || 1;
                if (folderEnd - folderStart < nestingThreshold) {
                    // Inline these (i.e. do not create another level in the tree)
                    for (var i = folderStart; i < folderEnd; i++) {
                        result.push(this.toFileChangeNode(resources[i].resource, parent));
                    }
                }
                else {
                    var firstFileParts = firstFileChange.pathParts;
                    var lastFileParts = resources[folderEnd - 1].pathParts;
                    // Multiple files with first folder.
                    // See if more folder levels match and include those if so.
                    var thisLevel = level + 1;
                    while (thisLevel < firstFileParts.length - 1 && thisLevel < lastFileParts.length - 1 && firstFileParts[thisLevel] === lastFileParts[thisLevel]) {
                        thisLevel++;
                    }
                    var nodeRelativePath = firstFileParts.slice(level, thisLevel).join('/');
                    result.push(this.toFileChangeFolderNode(resources, folderStart, folderEnd, thisLevel, nodeRelativePath, parent));
                }
                folderStart = folderEnd;
            }
        }
        ;
        return result.sort(this.compareNodes);
    };
    ScmTreeModel.prototype.doCompareNodes = function (a, b) {
        var isFolderA = ScmFileChangeFolderNode.is(a);
        var isFolderB = ScmFileChangeFolderNode.is(b);
        if (isFolderA && !isFolderB) {
            return -1;
        }
        if (isFolderB && !isFolderA) {
            return 1;
        }
        return a.sourceUri.localeCompare(b.sourceUri);
    };
    ScmTreeModel.prototype.toFileChangeFolderNode = function (resources, start, end, level, nodeRelativePath, parent) {
        var rootUri = this.getRoot(parent).rootUri;
        var parentPath = rootUri;
        if (ScmFileChangeFolderNode.is(parent)) {
            parentPath = parent.sourceUri;
        }
        var sourceUri = new uri_1.default(parentPath).resolve(nodeRelativePath);
        var defaultExpansion = this.props.defaultExpansion ? (this.props.defaultExpansion === 'expanded') : true;
        var id = parent.groupId + ":" + String(sourceUri);
        var oldNode = this.getNode(id);
        var folderNode = {
            id: id,
            groupId: parent.groupId,
            path: nodeRelativePath,
            sourceUri: String(sourceUri),
            children: [],
            parent: parent,
            expanded: tree_1.ExpandableTreeNode.is(oldNode) ? oldNode.expanded : defaultExpansion,
            selected: tree_1.SelectableTreeNode.is(oldNode) && oldNode.selected,
        };
        folderNode.children = this.buildFileChangeTree(resources, start, end, level, folderNode);
        return folderNode;
    };
    ScmTreeModel.prototype.getRoot = function (node) {
        var parent = node.parent;
        while (ScmFileChangeGroupNode.is(parent) && ScmFileChangeFolderNode.is(parent)) {
            parent = parent.parent;
        }
        return parent;
    };
    ScmTreeModel.prototype.toFileChangeNode = function (resource, parent) {
        var id = resource.group.id + ":" + String(resource.sourceUri);
        var oldNode = this.getNode(id);
        var node = {
            id: id,
            sourceUri: String(resource.sourceUri),
            decorations: resource.decorations,
            parent: parent,
            selected: tree_1.SelectableTreeNode.is(oldNode) && oldNode.selected,
        };
        if (node.selected) {
            this.selectionService.addSelection(node);
        }
        return node;
    };
    ScmTreeModel.prototype.revealNode = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var parentNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(ScmFileChangeFolderNode.is(node) || ScmFileChangeNode.is(node))) return [3 /*break*/, 3];
                        parentNode = node.parent;
                        if (!tree_1.ExpandableTreeNode.is(parentNode)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.revealNode(parentNode)];
                    case 1:
                        _a.sent();
                        if (!!parentNode.expanded) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.expandNode(parentNode)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ScmTreeModel.prototype.storeState = function () {
        return __assign(__assign({}, _super.prototype.storeState.call(this)), { mode: this.viewMode });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ScmTreeModel.prototype.restoreState = function (oldState) {
        _super.prototype.restoreState.call(this, oldState);
        this.viewMode = oldState.mode === 'tree' ? 'tree' : 'list';
    };
    __decorate([
        inversify_1.inject(tree_1.TreeProps),
        __metadata("design:type", Object)
    ], ScmTreeModel.prototype, "props", void 0);
    ScmTreeModel = __decorate([
        inversify_1.injectable()
    ], ScmTreeModel);
    return ScmTreeModel;
}(tree_1.TreeModelImpl));
exports.ScmTreeModel = ScmTreeModel;
//# sourceMappingURL=scm-tree-model.js.map