(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "../../node_modules/css-loader/index.js!../../packages/scm/src/browser/style/scm-amend-component.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/node_modules/css-loader!/Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/src/browser/style/scm-amend-component.css ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/********************************************************************************\n * Copyright (C) 2018 TypeFox and others.\n *\n * This program and the accompanying materials are made available under the\n * terms of the Eclipse Public License v. 2.0 which is available at\n * http://www.eclipse.org/legal/epl-2.0.\n *\n * This Source Code may also be made available under the following Secondary\n * Licenses when the conditions for such availability set forth in the Eclipse\n * Public License v. 2.0 are satisfied: GNU General Public License, version 2\n * with the GNU Classpath Exception which is available at\n * https://www.gnu.org/software/classpath/license.html.\n *\n * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0\n ********************************************************************************/\n\n.theia-scm-commit-container {\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid var(--theia-sideBarSectionHeader-border);\n    width: 100%;\n    padding-top: 6px;\n}\n\n.theia-scm-amend-outer-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    overflow: auto;\n}\n\n.theia-scm-commit-and-button {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n}\n\n.theia-scm-commit-avatar-and-text {\n    display: flex;\n    white-space: nowrap;\n    overflow: hidden;\n    width: 100%;\n    padding-top: 2px;\n}\n\n.theia-scm-commit-avatar-and-text img {\n    width: 27px;\n}\n\n.theia-scm-commit-details {\n    display: flex;\n    flex-direction: column;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 100%;\n}\n\n.theia-scm-commit-message-avatar {\n    margin-right: 5px;\n}\n\n.theia-scm-commit-message-summary {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.theia-scm-commit-message-time {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--theia-descriptionForeground);\n    font-size: smaller;\n}\n\n.theia-scm-flex-container-center {\n    display: flex;\n    align-items: center;\n}\n\n.theia-scm-scrolling-container {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    border-top: 0;\n    border-bottom: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-amend-component.js":
/*!****************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-amend-component.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
exports.ScmAmendComponent = void 0;
__webpack_require__(/*! ../../src/browser/style/scm-amend-component.css */ "../../packages/scm/src/browser/style/scm-amend-component.css");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var TRANSITION_TIME_MS = 300;
var REPOSITORY_STORAGE_KEY = 'scmRepository';
var ScmAmendComponent = /** @class */ (function (_super) {
    __extends(ScmAmendComponent, _super);
    function ScmAmendComponent(props) {
        var _this = _super.call(this, props) || this;
        /**
         * a hint on how to animate an update, set by certain user action handlers
         * and used when updating the view based on a repository change
         */
        _this.transitionHint = 'none';
        _this.lastCommitHeight = 0;
        _this.lastCommitScrollRef = function (instance) {
            if (instance && _this.lastCommitHeight === 0) {
                _this.lastCommitHeight = instance.getBoundingClientRect().height;
            }
        };
        _this.toDisposeOnUnmount = new core_1.DisposableCollection();
        /**
         * This function will update the 'model' (lastCommit, amendingCommits) only
         * when the repository sees the last commit change.
         * 'render' can be called at any time, so be sure we don't update any 'model'
         * fields until we actually start the transition.
         */
        _this.amend = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        this.transitionHint = 'amend';
                        return [4 /*yield*/, this.resetAndSetMessage('HEAD~', 'HEAD')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.unamend = function () { return __awaiter(_this, void 0, void 0, function () {
            var commitToRestore, oldestAmendCommit, commitToUseForMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.transition.state !== 'none' && this.transitionHint !== 'none') {
                            return [2 /*return*/];
                        }
                        commitToRestore = (this.state.amendingCommits.length >= 1)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 1]
                            : undefined;
                        oldestAmendCommit = (this.state.amendingCommits.length >= 2)
                            ? this.state.amendingCommits[this.state.amendingCommits.length - 2]
                            : undefined;
                        if (!commitToRestore) return [3 /*break*/, 2];
                        commitToUseForMessage = oldestAmendCommit
                            ? oldestAmendCommit.commit.id
                            : undefined;
                        this.transitionHint = 'unamend';
                        return [4 /*yield*/, this.resetAndSetMessage(commitToRestore.commit.id, commitToUseForMessage)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.unamendAll = function () { return _this.doUnamendAll(); };
        _this.clearAmending = function () { return _this.doClearAmending(); };
        _this.state = {
            transition: { state: 'none' },
            amendingCommits: [],
            lastCommit: undefined
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmAmendComponent.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastCommit, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.toDisposeOnUnmount.push(core_1.Disposable.create(function () { }));
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        lastCommit = _c.sent();
                        _a = this.setState;
                        _b = {};
                        return [4 /*yield*/, this.buildAmendingList(lastCommit ? lastCommit.commit : undefined)];
                    case 2:
                        _a.apply(this, [(_b.amendingCommits = _c.sent(), _b.lastCommit = lastCommit, _b)]);
                        if (this.toDisposeOnUnmount.disposed) {
                            return [2 /*return*/];
                        }
                        this.toDisposeOnUnmount.push(this.props.repository.provider.onDidChange(function () { return _this.fetchStatusAndSetState(); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    ScmAmendComponent.prototype.fetchStatusAndSetState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, nextCommit, amendingCommits, direction, serializedState, serializedState, transitionData_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.getLastCommit()];
                    case 1:
                        nextCommit = _a.sent();
                        if (!(nextCommit && this.state.lastCommit && nextCommit.commit.id === this.state.lastCommit.commit.id)) return [3 /*break*/, 2];
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(nextCommit === undefined && this.state.lastCommit === undefined)) return [3 /*break*/, 3];
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.transitionHint === 'none')) return [3 /*break*/, 5];
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repository,
                        // perhaps the user committed, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        return [4 /*yield*/, this.clearAmendingCommits()];
                    case 4:
                        // If the 'last' commit changes, but we are not expecting an 'amend'
                        // or 'unamend' to occur, then we clear out the list of amended commits.
                        // This is because an unexpected change has happened to the repository,
                        // perhaps the user committed, merged, or something.  The amended commits
                        // will no longer be valid.
                        // Note that there may or may not have been a previous lastCommit (if the
                        // repository was previously empty with no initial commit then lastCommit
                        // will be undefined).  Either way we clear the amending commits.
                        _a.sent();
                        // There is a change to the last commit, but no transition hint so
                        // the view just updates without transition.
                        this.setState({ amendingCommits: [], lastCommit: nextCommit });
                        return [3 /*break*/, 6];
                    case 5:
                        amendingCommits = this.state.amendingCommits.concat([]);
                        direction = this.transitionHint === 'amend' ? 'up' : 'down';
                        switch (this.transitionHint) {
                            case 'amend':
                                if (this.state.lastCommit) {
                                    amendingCommits.push(this.state.lastCommit);
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                            case 'unamend':
                                amendingCommits.pop();
                                if (amendingCommits.length === 0) {
                                    this.props.storageService.setData(storageKey, undefined);
                                }
                                else {
                                    serializedState = JSON.stringify({
                                        amendingHeadCommitSha: amendingCommits[0].commit.id,
                                        latestCommitSha: nextCommit ? nextCommit.commit.id : undefined
                                    });
                                    this.props.storageService.setData(storageKey, serializedState);
                                }
                                break;
                        }
                        if (this.state.lastCommit && nextCommit) {
                            transitionData_1 = { direction: direction, previousLastCommit: this.state.lastCommit };
                            this.setState({ lastCommit: nextCommit, amendingCommits: amendingCommits, transition: __assign(__assign({}, transitionData_1), { state: 'start' }) });
                            this.onNextFrame(function () {
                                _this.setState({ transition: __assign(__assign({}, transitionData_1), { state: 'transitioning' }) });
                            });
                            setTimeout(function () {
                                _this.setState({ transition: { state: 'none' } });
                            }, TRANSITION_TIME_MS);
                        }
                        else {
                            // No previous last commit so no transition
                            this.setState({ transition: { state: 'none' }, amendingCommits: amendingCommits, lastCommit: nextCommit });
                        }
                        _a.label = 6;
                    case 6:
                        this.transitionHint = 'none';
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.clearAmendingCommits = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.setData(storageKey, undefined)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.buildAmendingList = function (lastCommit) {
        return __awaiter(this, void 0, void 0, function () {
            var storageKey, storedState, _a, amendingHeadCommitSha, latestCommitSha, commits, amendingCommitPromises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        storageKey = this.getStorageKey();
                        return [4 /*yield*/, this.props.storageService.getData(storageKey, undefined)];
                    case 1:
                        storedState = _b.sent();
                        if (!storedState) return [3 /*break*/, 3];
                        _a = JSON.parse(storedState), amendingHeadCommitSha = _a.amendingHeadCommitSha, latestCommitSha = _a.latestCommitSha;
                        if (!this.commitsAreEqual(lastCommit, latestCommitSha)) {
                            // The head commit in the repository has changed.  It is not the same commit that was the
                            // head commit after the last 'amend'.
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, this.props.scmAmendSupport.getInitialAmendingCommits(amendingHeadCommitSha, lastCommit ? lastCommit.id : undefined)];
                    case 2:
                        commits = _b.sent();
                        amendingCommitPromises = commits.map(function (commit) { return __awaiter(_this, void 0, void 0, function () {
                            var avatar;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                                    case 1:
                                        avatar = _a.sent();
                                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                                }
                            });
                        }); });
                        return [2 /*return*/, Promise.all(amendingCommitPromises)];
                    case 3: return [2 /*return*/, []];
                }
            });
        });
    };
    ScmAmendComponent.prototype.getStorageKey = function () {
        return REPOSITORY_STORAGE_KEY + ':' + this.props.repository.provider.rootUri;
    };
    /**
     * Commits are equal if the ids are equal or if both are undefined.
     * (If a commit is undefined, it represents the initial empty state of a repository,
     * before the initial commit).
     */
    ScmAmendComponent.prototype.commitsAreEqual = function (lastCommit, savedLastCommitId) {
        return lastCommit
            ? lastCommit.id === savedLastCommitId
            : savedLastCommitId === undefined;
    };
    ScmAmendComponent.prototype.resetAndSetMessage = function (commitToRestore, commitToUseForMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var message, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!commitToUseForMessage) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.props.scmAmendSupport.getMessage(commitToUseForMessage)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = '';
                        _b.label = 3;
                    case 3:
                        message = _a;
                        return [4 /*yield*/, this.props.scmAmendSupport.reset(commitToRestore)];
                    case 4:
                        _b.sent();
                        this.props.setCommitMessage(message);
                        return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.render = function () {
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? __assign(__assign({}, this.props.style), { flexShrink: 0 }) : __assign(__assign({}, this.props.style), { flexShrink: 1, minHeight: 240 // height with three commits
         });
        return (React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_CONTAINER + ' no-select', style: style },
            this.state.amendingCommits.length > 0 || (this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down')
                ? this.renderAmendingCommits()
                : '',
            this.state.lastCommit ?
                React.createElement("div", null,
                    React.createElement("div", { id: 'lastCommit', className: 'theia-scm-amend' },
                        React.createElement("div", { className: 'theia-header scm-theia-header' }, "HEAD Commit"),
                        this.renderLastCommit()))
                : ''));
    };
    ScmAmendComponent.prototype.getLastCommit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commit, avatar;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.scmAmendSupport.getLastCommit()];
                    case 1:
                        commit = _a.sent();
                        if (!commit) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.props.avatarService.getAvatar(commit.authorEmail)];
                    case 2:
                        avatar = _a.sent();
                        return [2 /*return*/, { commit: commit, avatar: avatar }];
                    case 3: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ScmAmendComponent.prototype.renderAmendingCommits = function () {
        var _this = this;
        var neverShrink = this.state.amendingCommits.length <= 3;
        var style = neverShrink
            ? {
                flexShrink: 0,
            }
            : {
                flexShrink: 1,
                // parent minHeight controls height, we just need any value smaller than
                // what the height would be when the parent is at its minHeight
                minHeight: 0
            };
        return React.createElement("div", { id: 'amendedCommits', className: 'theia-scm-amend-outer-container', style: style },
            React.createElement("div", { className: 'theia-header scm-theia-header' },
                React.createElement("div", { className: 'noWrapInfo' }, "Commits being Amended"),
                this.renderAmendCommitListButtons(),
                this.renderCommitCount(this.state.amendingCommits.length)),
            React.createElement("div", { style: this.styleAmendedCommits() },
                this.state.amendingCommits.map(function (commitData, index, array) {
                    return _this.renderCommitBeingAmended(commitData, index === array.length - 1);
                }),
                this.state.lastCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'down'
                    ? this.renderCommitBeingAmended(this.state.lastCommit, false)
                    : ''));
    };
    ScmAmendComponent.prototype.renderAmendCommitListButtons = function () {
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' },
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-minus', title: 'Unamend All Commits', onClick: this.unamendAll })),
                React.createElement("div", { className: 'theia-scm-inline-action' },
                    React.createElement("a", { className: 'fa fa-times', title: 'Clear Amending Commits', onClick: this.clearAmending }))));
    };
    ScmAmendComponent.prototype.renderLastCommit = function () {
        if (!this.state.lastCommit) {
            return '';
        }
        var canAmend = true;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AND_BUTTON, style: { flexGrow: 0, flexShrink: 0 }, key: this.state.lastCommit.commit.id },
            this.renderLastCommitNoButton(this.state.lastCommit),
            canAmend
                ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                    React.createElement("button", { className: 'theia-button', title: 'Amend last commit', onClick: this.amend }, "Amend"))
                : '');
    };
    ScmAmendComponent.prototype.renderLastCommitNoButton = function (lastCommit) {
        switch (this.state.transition.state) {
            case 'none':
                return React.createElement("div", { ref: this.lastCommitScrollRef, className: 'theia-scm-scrolling-container' }, this.renderCommitAvatarAndDetail(lastCommit));
            case 'start':
            case 'transitioning':
                switch (this.state.transition.direction) {
                    case 'up':
                        return React.createElement("div", { style: this.styleLastCommitMovingUp(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit),
                            this.renderCommitAvatarAndDetail(lastCommit));
                    case 'down':
                        return React.createElement("div", { style: this.styleLastCommitMovingDown(this.state.transition.state) },
                            this.renderCommitAvatarAndDetail(lastCommit),
                            this.renderCommitAvatarAndDetail(this.state.transition.previousLastCommit));
                }
        }
    };
    /**
     * See https://stackoverflow.com/questions/26556436/react-after-render-code
     *
     * @param callback
     */
    ScmAmendComponent.prototype.onNextFrame = function (callback) {
        setTimeout(function () { return window.requestAnimationFrame(callback); }, 0);
    };
    ScmAmendComponent.prototype.renderCommitAvatarAndDetail = function (commitData) {
        var commit = commitData.commit, avatar = commitData.avatar;
        return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, key: commit.id },
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_AVATAR },
                React.createElement("img", { src: avatar })),
            React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_DETAILS },
                React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_MESSAGE_SUMMARY }, commit.summary),
                React.createElement("div", { className: ScmAmendComponent.Styles.LAST_COMMIT_MESSAGE_TIME }, commit.authorDateRelative + " by " + commit.authorName)));
    };
    ScmAmendComponent.prototype.renderCommitCount = function (commits) {
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, commits));
    };
    ScmAmendComponent.prototype.renderCommitBeingAmended = function (commitData, isOldestAmendCommit) {
        if (isOldestAmendCommit && this.state.transition.state !== 'none' && this.state.transition.direction === 'up') {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                React.createElement("div", { className: 'fixed-height-commit-container' }, this.renderCommitAvatarAndDetail(commitData)));
        }
        else {
            return React.createElement("div", { className: ScmAmendComponent.Styles.COMMIT_AVATAR_AND_TEXT, style: { flexGrow: 0, flexShrink: 0 }, key: commitData.commit.id },
                this.renderCommitAvatarAndDetail(commitData),
                isOldestAmendCommit
                    ? React.createElement("div", { className: ScmAmendComponent.Styles.FLEX_CENTER },
                        React.createElement("button", { className: 'theia-button', title: 'Unamend commit', onClick: this.unamend }, "Unamend"))
                    : '');
        }
    };
    /*
     * The style for the <div> containing the list of commits being amended.
     * This div is scrollable.
     */
    ScmAmendComponent.prototype.styleAmendedCommits = function () {
        var base = {
            display: 'flex',
            whitespace: 'nowrap',
            width: '100%',
            minHeight: 0,
            flexShrink: 1,
            paddingTop: '2px',
        };
        switch (this.state.transition.state) {
            case 'none':
                return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'auto', marginBottom: '0' });
            case 'start':
            case 'transitioning':
                var startingMargin = 0;
                var endingMargin = 0;
                switch (this.state.transition.direction) {
                    case 'down':
                        startingMargin = 0;
                        endingMargin = -32;
                        break;
                    case 'up':
                        startingMargin = -32;
                        endingMargin = 0;
                        break;
                }
                switch (this.state.transition.state) {
                    case 'start':
                        return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'hidden', marginBottom: startingMargin + "px" });
                    case 'transitioning':
                        return __assign(__assign({}, base), { flexDirection: 'column', overflowY: 'hidden', marginBottom: endingMargin + "px", transitionProperty: 'margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
                }
        }
    };
    ScmAmendComponent.prototype.styleLastCommitMovingUp = function (transitionState) {
        return this.styleLastCommit(transitionState, 0, -28);
    };
    ScmAmendComponent.prototype.styleLastCommitMovingDown = function (transitionState) {
        return this.styleLastCommit(transitionState, -28, 0);
    };
    ScmAmendComponent.prototype.styleLastCommit = function (transitionState, startingMarginTop, startingMarginBottom) {
        var base = {
            display: 'flex',
            width: '100%',
            overflow: 'hidden',
            paddingTop: 0,
            paddingBottom: 0,
            borderTop: 0,
            borderBottom: 0,
            height: this.lastCommitHeight * 2
        };
        // We end with top and bottom margins switched
        var endingMarginTop = startingMarginBottom;
        var endingMarginBottom = startingMarginTop;
        switch (transitionState) {
            case 'start':
                return __assign(__assign({}, base), { position: 'relative', flexDirection: 'column', marginTop: startingMarginTop, marginBottom: startingMarginBottom });
            case 'transitioning':
                return __assign(__assign({}, base), { position: 'relative', flexDirection: 'column', marginTop: endingMarginTop, marginBottom: endingMarginBottom, transitionProperty: 'margin-top margin-bottom', transitionDuration: TRANSITION_TIME_MS + "ms", transitionTimingFunction: 'linear' });
        }
    };
    ScmAmendComponent.prototype.doUnamendAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.state.amendingCommits.length > 0)) return [3 /*break*/, 2];
                        this.unamend();
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, TRANSITION_TIME_MS); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ScmAmendComponent.prototype.doClearAmending = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearAmendingCommits()];
                    case 1:
                        _a.sent();
                        this.setState({ amendingCommits: [] });
                        return [2 /*return*/];
                }
            });
        });
    };
    return ScmAmendComponent;
}(React.Component));
exports.ScmAmendComponent = ScmAmendComponent;
(function (ScmAmendComponent) {
    var Styles;
    (function (Styles) {
        Styles.COMMIT_CONTAINER = 'theia-scm-commit-container';
        Styles.COMMIT_AND_BUTTON = 'theia-scm-commit-and-button';
        Styles.COMMIT_AVATAR_AND_TEXT = 'theia-scm-commit-avatar-and-text';
        Styles.COMMIT_DETAILS = 'theia-scm-commit-details';
        Styles.COMMIT_MESSAGE_AVATAR = 'theia-scm-commit-message-avatar';
        Styles.COMMIT_MESSAGE_SUMMARY = 'theia-scm-commit-message-summary';
        Styles.LAST_COMMIT_MESSAGE_TIME = 'theia-scm-commit-message-time';
        Styles.FLEX_CENTER = 'theia-scm-flex-container-center';
    })(Styles = ScmAmendComponent.Styles || (ScmAmendComponent.Styles = {}));
})(ScmAmendComponent = exports.ScmAmendComponent || (exports.ScmAmendComponent = {}));
exports.ScmAmendComponent = ScmAmendComponent;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-amend-widget.js":
/*!*************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-amend-widget.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScmAmendWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var scm_avatar_service_1 = __webpack_require__(/*! ./scm-avatar-service */ "../../packages/scm/lib/browser/scm-avatar-service.js");
var scm_amend_component_1 = __webpack_require__(/*! ./scm-amend-component */ "../../packages/scm/lib/browser/scm-amend-component.js");
var ScmAmendWidget = /** @class */ (function (_super) {
    __extends(ScmAmendWidget, _super);
    function ScmAmendWidget(contextMenuRenderer) {
        var _this = _super.call(this) || this;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.shouldScrollToRow = true;
        _this.setInputValue = function (event) {
            var repository = _this.scmService.selectedRepository;
            if (repository) {
                repository.input.value = typeof event === 'string' ? event : event.currentTarget.value;
            }
        };
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35
        };
        _this.addClass('theia-scm-commit-container');
        _this.id = ScmAmendWidget_1.ID;
        return _this;
    }
    ScmAmendWidget_1 = ScmAmendWidget;
    ScmAmendWidget.prototype.render = function () {
        var repository = this.scmService.selectedRepository;
        if (repository && repository.provider.amendSupport) {
            return React.createElement(scm_amend_component_1.ScmAmendComponent, {
                key: "amend:" + repository.provider.rootUri,
                style: { flexGrow: 0 },
                repository: repository,
                scmAmendSupport: repository.provider.amendSupport,
                setCommitMessage: this.setInputValue,
                avatarService: this.avatarService,
                storageService: this.storageService,
            });
        }
    };
    var ScmAmendWidget_1;
    ScmAmendWidget.ID = 'scm-amend-widget';
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmAmendWidget.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(scm_avatar_service_1.ScmAvatarService),
        __metadata("design:type", scm_avatar_service_1.ScmAvatarService)
    ], ScmAmendWidget.prototype, "avatarService", void 0);
    __decorate([
        inversify_1.inject(browser_1.StorageService),
        __metadata("design:type", Object)
    ], ScmAmendWidget.prototype, "storageService", void 0);
    __decorate([
        inversify_1.inject(common_1.SelectionService),
        __metadata("design:type", common_1.SelectionService)
    ], ScmAmendWidget.prototype, "selectionService", void 0);
    __decorate([
        inversify_1.inject(browser_1.LabelProvider),
        __metadata("design:type", browser_1.LabelProvider)
    ], ScmAmendWidget.prototype, "labelProvider", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], ScmAmendWidget.prototype, "keybindings", void 0);
    ScmAmendWidget = ScmAmendWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [browser_1.ContextMenuRenderer])
    ], ScmAmendWidget);
    return ScmAmendWidget;
}(browser_1.ReactWidget));
exports.ScmAmendWidget = ScmAmendWidget;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-commit-widget.js":
/*!**************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-commit-widget.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScmCommitWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var react_autosize_textarea_1 = __webpack_require__(/*! react-autosize-textarea */ "../../node_modules/react-autosize-textarea/lib/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var ScmCommitWidget = /** @class */ (function (_super) {
    __extends(ScmCommitWidget, _super);
    function ScmCommitWidget(contextMenuRenderer) {
        var _this = _super.call(this) || this;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.shouldScrollToRow = true;
        /**
         * Don't modify DOM use React! only exposed for `focusInput`
         * Use `this.scmService.selectedRepository?.input.value` as a single source of truth!
         */
        _this.inputRef = React.createRef();
        _this.setInputValue = function (event) {
            var repository = _this.scmService.selectedRepository;
            if (repository) {
                repository.input.value = typeof event === 'string' ? event : event.currentTarget.value;
            }
        };
        _this.scrollOptions = {
            suppressScrollX: true,
            minScrollbarLength: 35
        };
        _this.addClass('theia-scm-commit');
        _this.id = ScmCommitWidget_1.ID;
        return _this;
    }
    ScmCommitWidget_1 = ScmCommitWidget;
    ScmCommitWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.focus();
    };
    ScmCommitWidget.prototype.focus = function () {
        (this.inputRef.current || this.node).focus();
    };
    ScmCommitWidget.prototype.render = function () {
        var repository = this.scmService.selectedRepository;
        if (repository) {
            return React.createElement('div', this.createContainerAttributes(), this.renderInput(repository.input));
        }
    };
    /**
     * Create the container attributes for the widget.
     */
    ScmCommitWidget.prototype.createContainerAttributes = function () {
        return {
            style: { flexGrow: 0 }
        };
    };
    ScmCommitWidget.prototype.renderInput = function (input) {
        var validationStatus = input.issue ? input.issue.type : 'idle';
        var validationMessage = input.issue ? input.issue.message : '';
        var format = function (value) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (args.length !== 0) {
                return value.replace(/{(\d+)}/g, function (found, n) {
                    var i = parseInt(n);
                    return isNaN(i) || i < 0 || i >= args.length ? found : args[i];
                });
            }
            return value;
        };
        var keybinding = this.keybindings.acceleratorFor(this.keybindings.getKeybindingsForCommand('scm.acceptInput')[0]).join('+');
        var message = format(input.placeholder || '', keybinding);
        return React.createElement("div", { className: ScmCommitWidget_1.Styles.INPUT_MESSAGE_CONTAINER },
            React.createElement(react_autosize_textarea_1.default, { className: ScmCommitWidget_1.Styles.INPUT_MESSAGE + " theia-input theia-scm-input-message-" + validationStatus, id: ScmCommitWidget_1.Styles.INPUT_MESSAGE, placeholder: message, autoFocus: true, value: input.value, onChange: this.setInputValue, ref: this.inputRef, rows: 1, maxRows: 6 }),
            React.createElement("div", { className: ScmCommitWidget_1.Styles.VALIDATION_MESSAGE + " " + ScmCommitWidget_1.Styles.NO_SELECT + "\n                    theia-scm-validation-message-" + validationStatus + " theia-scm-input-message-" + validationStatus, style: {
                    display: !!input.issue ? 'block' : 'none'
                } }, validationMessage));
    };
    /**
     * Store the tree state.
     */
    ScmCommitWidget.prototype.storeState = function () {
        var _a;
        var message = (_a = this.scmService.selectedRepository) === null || _a === void 0 ? void 0 : _a.input.value;
        return { message: message };
    };
    /**
     * Restore the state.
     * @param oldState the old state object.
     */
    ScmCommitWidget.prototype.restoreState = function (oldState) {
        var _this = this;
        var value = oldState.message;
        if (!value) {
            return;
        }
        var repository = this.scmService.selectedRepository;
        if (repository) {
            repository.input.value = value;
        }
        else {
            var listener_1 = this.scmService.onDidChangeSelectedRepository(function () {
                repository = _this.scmService.selectedRepository;
                if (repository) {
                    listener_1.dispose();
                    if (!repository.input.value) {
                        repository.input.value = value;
                    }
                }
            });
            this.toDispose.push(listener_1);
        }
    };
    var ScmCommitWidget_1;
    ScmCommitWidget.ID = 'scm-commit-widget';
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmCommitWidget.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(browser_1.KeybindingRegistry),
        __metadata("design:type", browser_1.KeybindingRegistry)
    ], ScmCommitWidget.prototype, "keybindings", void 0);
    ScmCommitWidget = ScmCommitWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __metadata("design:paramtypes", [browser_1.ContextMenuRenderer])
    ], ScmCommitWidget);
    return ScmCommitWidget;
}(browser_1.ReactWidget));
exports.ScmCommitWidget = ScmCommitWidget;
(function (ScmCommitWidget) {
    var Styles;
    (function (Styles) {
        Styles.INPUT_MESSAGE_CONTAINER = 'theia-scm-input-message-container';
        Styles.INPUT_MESSAGE = 'theia-scm-input-message';
        Styles.VALIDATION_MESSAGE = 'theia-scm-input-validation-message';
        Styles.NO_SELECT = 'no-select';
    })(Styles = ScmCommitWidget.Styles || (ScmCommitWidget.Styles = {}));
})(ScmCommitWidget = exports.ScmCommitWidget || (exports.ScmCommitWidget = {}));
exports.ScmCommitWidget = ScmCommitWidget;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-no-repository-widget.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-no-repository-widget.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.ScmNoRepositoryWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var alert_message_1 = __webpack_require__(/*! @theia/core/lib/browser/widgets/alert-message */ "../../packages/core/lib/browser/widgets/alert-message.js");
var ScmNoRepositoryWidget = /** @class */ (function (_super) {
    __extends(ScmNoRepositoryWidget, _super);
    function ScmNoRepositoryWidget() {
        var _this = _super.call(this) || this;
        _this.addClass('theia-scm-no-repository');
        _this.id = ScmNoRepositoryWidget_1.ID;
        return _this;
    }
    ScmNoRepositoryWidget_1 = ScmNoRepositoryWidget;
    ScmNoRepositoryWidget.prototype.render = function () {
        return React.createElement(alert_message_1.AlertMessage, { type: 'WARNING', header: 'No repository found' });
    };
    var ScmNoRepositoryWidget_1;
    ScmNoRepositoryWidget.ID = 'scm-no-repository-widget';
    ScmNoRepositoryWidget = ScmNoRepositoryWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ScmNoRepositoryWidget);
    return ScmNoRepositoryWidget;
}(browser_1.ReactWidget));
exports.ScmNoRepositoryWidget = ScmNoRepositoryWidget;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-preferences.js":
/*!************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-preferences.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindScmPreferences = exports.createScmPreferences = exports.ScmPreferences = exports.scmPreferenceSchema = void 0;
var preferences_1 = __webpack_require__(/*! @theia/core/lib/browser/preferences */ "../../packages/core/lib/browser/preferences/index.js");
exports.scmPreferenceSchema = {
    type: 'object',
    properties: {
        'scm.defaultViewMode': {
            type: 'string',
            enum: ['tree', 'list'],
            enumDescriptions: [
                'Show the repository changes as a tree.',
                'Show the repository changes as a list.'
            ],
            description: 'Controls the default source control view mode.',
            default: 'list'
        }
    }
};
exports.ScmPreferences = Symbol('ScmPreferences');
function createScmPreferences(preferences) {
    return preferences_1.createPreferenceProxy(preferences, exports.scmPreferenceSchema);
}
exports.createScmPreferences = createScmPreferences;
function bindScmPreferences(bind) {
    bind(exports.ScmPreferences).toDynamicValue(function (ctx) {
        var preferences = ctx.container.get(preferences_1.PreferenceService);
        return createScmPreferences(preferences);
    }).inSingletonScope();
    bind(preferences_1.PreferenceContribution).toConstantValue({ schema: exports.scmPreferenceSchema });
}
exports.bindScmPreferences = bindScmPreferences;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-tree-model.js":
/*!***********************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-tree-model.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "../../packages/core/lib/browser/tree/index.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
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


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-tree-widget.js":
/*!************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-tree-widget.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.ScmInlineAction = exports.ScmInlineActions = exports.ScmResourceFolderElement = exports.ScmResourceGroupElement = exports.ScmResourceComponent = exports.ScmElement = exports.ScmTreeWidget = void 0;
/* eslint-disable no-null/no-null, @typescript-eslint/no-explicit-any */
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var tree_1 = __webpack_require__(/*! @theia/core/lib/browser/tree */ "../../packages/core/lib/browser/tree/index.js");
var scm_tree_model_1 = __webpack_require__(/*! ./scm-tree-model */ "../../packages/scm/lib/browser/scm-tree-model.js");
var menu_1 = __webpack_require__(/*! @theia/core/lib/common/menu */ "../../packages/core/lib/common/menu.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var command_1 = __webpack_require__(/*! @theia/core/lib/common/command */ "../../packages/core/lib/common/command.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var scm_context_key_service_1 = __webpack_require__(/*! ./scm-context-key-service */ "../../packages/scm/lib/browser/scm-context-key-service.js");
var browser_2 = __webpack_require__(/*! @theia/editor/lib/browser */ "../../packages/editor/lib/browser/index.js");
var icon_theme_service_1 = __webpack_require__(/*! @theia/core/lib/browser/icon-theme-service */ "../../packages/core/lib/browser/icon-theme-service.js");
var scm_tree_model_2 = __webpack_require__(/*! ./scm-tree-model */ "../../packages/scm/lib/browser/scm-tree-model.js");
var ScmTreeWidget = /** @class */ (function (_super) {
    __extends(ScmTreeWidget, _super);
    function ScmTreeWidget(props, model, contextMenuRenderer, scmService) {
        var _this = _super.call(this, props, model, contextMenuRenderer) || this;
        _this.props = props;
        _this.model = model;
        _this.contextMenuRenderer = contextMenuRenderer;
        _this.scmService = scmService;
        _this.id = ScmTreeWidget_1.ID;
        _this.addClass('groups-outer-container');
        return _this;
    }
    ScmTreeWidget_1 = ScmTreeWidget;
    ScmTreeWidget.prototype.onAfterAttach = function (msg) {
        var _this = this;
        _super.prototype.onAfterAttach.call(this, msg);
        this.refreshOnRepositoryChange();
        this.toDisposeOnDetach.push(this.scmService.onDidChangeSelectedRepository(function () {
            _this.refreshOnRepositoryChange();
            _this.forceUpdate();
        }));
    };
    Object.defineProperty(ScmTreeWidget.prototype, "viewMode", {
        get: function () {
            return this.model.viewMode;
        },
        set: function (id) {
            this.model.viewMode = id;
        },
        enumerable: false,
        configurable: true
    });
    ScmTreeWidget.prototype.refreshOnRepositoryChange = function () {
        var repository = this.scmService.selectedRepository;
        this.model.repository = repository;
        if (repository) {
            this.contextKeys.scmProvider.set(repository.provider.id);
        }
        else {
            this.contextKeys.scmProvider.reset();
        }
    };
    /**
     * Render the node given the tree node and node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    ScmTreeWidget.prototype.renderNode = function (node, props) {
        var _this = this;
        var repository = this.scmService.selectedRepository;
        if (!repository) {
            return undefined;
        }
        if (!tree_1.TreeNode.isVisible(node)) {
            return undefined;
        }
        var attributes = this.createNodeAttributes(node, props);
        if (scm_tree_model_2.ScmFileChangeGroupNode.is(node)) {
            var content = React.createElement(ScmResourceGroupElement, { key: "" + node.groupId, repository: repository, groupId: node.groupId, groupLabel: node.groupLabel, renderExpansionToggle: function () { return _this.renderExpansionToggle(node, props); }, contextMenuRenderer: this.contextMenuRenderer, commands: this.commands, menus: this.menus, contextKeys: this.contextKeys, labelProvider: this.labelProvider, corePreferences: this.corePreferences });
            return React.createElement('div', attributes, content);
        }
        if (scm_tree_model_2.ScmFileChangeFolderNode.is(node)) {
            var content = React.createElement(ScmResourceFolderElement, { key: String(node.sourceUri), repository: repository, groupId: node.groupId, path: node.path, node: node, sourceUri: new uri_1.default(node.sourceUri), renderExpansionToggle: function () { return _this.renderExpansionToggle(node, props); }, contextMenuRenderer: this.contextMenuRenderer, commands: this.commands, menus: this.menus, contextKeys: this.contextKeys, labelProvider: this.labelProvider, corePreferences: this.corePreferences });
            return React.createElement('div', attributes, content);
        }
        if (scm_tree_model_2.ScmFileChangeNode.is(node)) {
            var parentNode = node.parent;
            if (!(parentNode && (scm_tree_model_2.ScmFileChangeFolderNode.is(parentNode) || scm_tree_model_2.ScmFileChangeGroupNode.is(parentNode)))) {
                return '';
            }
            var groupId = parentNode.groupId;
            var name_1 = this.labelProvider.getName(new uri_1.default(node.sourceUri));
            var parentPath = (node.parent && scm_tree_model_2.ScmFileChangeFolderNode.is(node.parent))
                ? new uri_1.default(node.parent.sourceUri) : new uri_1.default(repository.provider.rootUri);
            var content = React.createElement(ScmResourceComponent, __assign({ key: node.sourceUri, repository: repository, contextMenuRenderer: this.contextMenuRenderer, commands: this.commands, menus: this.menus, contextKeys: this.contextKeys, labelProvider: this.labelProvider, corePreferences: this.corePreferences }, __assign(__assign({}, this.props), { name: name_1,
                parentPath: parentPath,
                groupId: groupId, sourceUri: node.sourceUri, decorations: node.decorations, renderExpansionToggle: function () { return _this.renderExpansionToggle(node, props); } })));
            return React.createElement('div', attributes, content);
        }
        return _super.prototype.renderNode.call(this, node, props);
    };
    ScmTreeWidget.prototype.createContainerAttributes = function () {
        var _this = this;
        var repository = this.scmService.selectedRepository;
        if (repository) {
            var select = function () {
                var selectedResource = _this.selectionService.selection;
                if (!tree_1.TreeNode.is(selectedResource) || !scm_tree_model_2.ScmFileChangeFolderNode.is(selectedResource) && !scm_tree_model_2.ScmFileChangeNode.is(selectedResource)) {
                    var nonEmptyGroup = repository.provider.groups
                        .find(function (g) { return g.resources.length !== 0; });
                    if (nonEmptyGroup) {
                        _this.selectionService.selection = nonEmptyGroup.resources[0];
                    }
                }
            };
            return __assign(__assign({}, _super.prototype.createContainerAttributes.call(this)), { onFocus: select, tabIndex: 0 });
        }
        return _super.prototype.createContainerAttributes.call(this);
    };
    /**
     * The ARROW_LEFT key controls both the movement around the file tree and also
     * the movement through the change chunks within a file.
     *
     * If the selected tree node is a folder then the ARROW_LEFT key behaves exactly
     * as it does in explorer.  It collapses the tree node if the folder is expanded and
     * it moves the selection up to the parent folder if the folder is collapsed (no-op if no parent folder, as
     * group headers are not selectable).  This behavior is the default behavior implemented
     * in the TreeWidget super class.
     *
     * If the selected tree node is a file then the ARROW_LEFT key moves up through the
     * change chunks within each file.  If the selected chunk is the first chunk in the file
     * then the file selection is moved to the previous file (no-op if no previous file).
     *
     * Note that when cursoring through change chunks, the ARROW_LEFT key cannot be used to
     * move up through the parent folders of the file tree.  If users want to do this, using
     * keys only, then they must press ARROW_UP repeatedly until the selected node is the folder
     * node and then press ARROW_LEFT.
     */
    ScmTreeWidget.prototype.handleLeft = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selectedNode, selectedResource, widget, diffNavigator, previousNode, previousResource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        if (!(this.model.selectedNodes.length === 1)) return [3 /*break*/, 2];
                        selectedNode = this.model.selectedNodes[0];
                        if (!scm_tree_model_2.ScmFileChangeNode.is(selectedNode)) return [3 /*break*/, 2];
                        selectedResource = this.getResourceFromNode(selectedNode);
                        if (!selectedResource) {
                            return [2 /*return*/, _super.prototype.handleLeft.call(this, event)];
                        }
                        return [4 /*yield*/, this.openResource(selectedResource)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasPrevious()) {
                                diffNavigator.previous();
                            }
                            else {
                                previousNode = this.moveToPreviousFileNode();
                                if (previousNode) {
                                    previousResource = this.getResourceFromNode(previousNode);
                                    if (previousResource) {
                                        this.openResource(previousResource);
                                    }
                                }
                            }
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, _super.prototype.handleLeft.call(this, event)];
                }
            });
        });
    };
    /**
     * The ARROW_RIGHT key controls both the movement around the file tree and also
     * the movement through the change chunks within a file.
     *
     * If the selected tree node is a folder then the ARROW_RIGHT key behaves exactly
     * as it does in explorer.  It expands the tree node if the folder is collapsed and
     * it moves the selection to the first child node if the folder is expanded.
     * This behavior is the default behavior implemented
     * in the TreeWidget super class.
     *
     * If the selected tree node is a file then the ARROW_RIGHT key moves down through the
     * change chunks within each file.  If the selected chunk is the last chunk in the file
     * then the file selection is moved to the next file (no-op if no next file).
     */
    ScmTreeWidget.prototype.handleRight = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, selectedNode, selectedResource, widget, diffNavigator, nextNode, nextResource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = this.scmService.selectedRepository;
                        if (!repository) {
                            return [2 /*return*/];
                        }
                        if (!(this.model.selectedNodes.length === 1)) return [3 /*break*/, 2];
                        selectedNode = this.model.selectedNodes[0];
                        if (!scm_tree_model_2.ScmFileChangeNode.is(selectedNode)) return [3 /*break*/, 2];
                        selectedResource = this.getResourceFromNode(selectedNode);
                        if (!selectedResource) {
                            return [2 /*return*/, _super.prototype.handleRight.call(this, event)];
                        }
                        return [4 /*yield*/, this.openResource(selectedResource)];
                    case 1:
                        widget = _a.sent();
                        if (widget) {
                            diffNavigator = this.diffNavigatorProvider(widget.editor);
                            if (diffNavigator.canNavigate() && diffNavigator.hasNext()) {
                                diffNavigator.next();
                            }
                            else {
                                nextNode = this.moveToNextFileNode();
                                if (nextNode) {
                                    nextResource = this.getResourceFromNode(nextNode);
                                    if (nextResource) {
                                        this.openResource(nextResource);
                                    }
                                }
                            }
                        }
                        return [2 /*return*/];
                    case 2: return [2 /*return*/, _super.prototype.handleRight.call(this, event)];
                }
            });
        });
    };
    ScmTreeWidget.prototype.handleEnter = function (event) {
        if (this.model.selectedNodes.length === 1) {
            var selectedNode = this.model.selectedNodes[0];
            if (scm_tree_model_2.ScmFileChangeNode.is(selectedNode)) {
                var selectedResource = this.getResourceFromNode(selectedNode);
                if (selectedResource) {
                    this.openResource(selectedResource);
                }
                return;
            }
        }
        _super.prototype.handleEnter.call(this, event);
    };
    ScmTreeWidget.prototype.getResourceFromNode = function (node) {
        var repository = this.scmService.selectedRepository;
        if (!repository) {
            return;
        }
        var parentNode = node.parent;
        if (!(parentNode && (scm_tree_model_2.ScmFileChangeFolderNode.is(parentNode) || scm_tree_model_2.ScmFileChangeGroupNode.is(parentNode)))) {
            return;
        }
        var groupId = parentNode.groupId;
        var group = repository.provider.groups.find(function (g) { return g.id === groupId; });
        return group.resources.find(function (r) { return String(r.sourceUri) === node.sourceUri; });
    };
    ScmTreeWidget.prototype.moveToPreviousFileNode = function () {
        var previousNode = this.model.getPrevSelectableNode();
        while (previousNode) {
            if (scm_tree_model_2.ScmFileChangeNode.is(previousNode)) {
                this.model.selectNode(previousNode);
                return previousNode;
            }
            this.model.selectNode(previousNode);
            previousNode = this.model.getPrevSelectableNode();
        }
        ;
    };
    ScmTreeWidget.prototype.moveToNextFileNode = function () {
        var nextNode = this.model.getNextSelectableNode();
        while (nextNode) {
            if (scm_tree_model_2.ScmFileChangeNode.is(nextNode)) {
                this.model.selectNode(nextNode);
                return nextNode;
            }
            this.model.selectNode(nextNode);
            nextNode = this.model.getNextSelectableNode();
        }
        ;
    };
    ScmTreeWidget.prototype.openResource = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, standaloneEditor, resourcePath, _a, _b, widget, resourceUri, editorResourcePath;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, resource.open()];
                    case 1:
                        _d.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _d.sent();
                        console.error('Failed to open a SCM resource', e_1);
                        return [2 /*return*/, undefined];
                    case 3:
                        resourcePath = resource.sourceUri.path.toString();
                        try {
                            for (_a = __values(this.editorManager.all), _b = _a.next(); !_b.done; _b = _a.next()) {
                                widget = _b.value;
                                resourceUri = widget.getResourceUri();
                                editorResourcePath = resourceUri && resourceUri.path.toString();
                                if (resourcePath === editorResourcePath) {
                                    if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME) {
                                        // prefer diff editor
                                        return [2 /*return*/, widget];
                                    }
                                    else {
                                        standaloneEditor = widget;
                                    }
                                }
                                if (widget.editor.uri.scheme === browser_1.DiffUris.DIFF_SCHEME
                                    && String(widget.getResourceUri()) === resource.sourceUri.toString()) {
                                    return [2 /*return*/, widget];
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        // fallback to standalone editor
                        return [2 /*return*/, standaloneEditor];
                }
            });
        });
    };
    ScmTreeWidget.prototype.getPaddingLeft = function (node, props) {
        if (this.viewMode === 'list') {
            if (props.depth === 1) {
                return this.props.expansionTogglePadding;
            }
        }
        return _super.prototype.getPaddingLeft.call(this, node, props);
    };
    ScmTreeWidget.prototype.needsExpansionTogglePadding = function (node) {
        var theme = this.iconThemeService.getDefinition(this.iconThemeService.current);
        if (theme && (theme.hidesExplorerArrows || (theme.hasFileIcons && !theme.hasFolderIcons))) {
            return false;
        }
        return _super.prototype.needsExpansionTogglePadding.call(this, node);
    };
    var ScmTreeWidget_1;
    ScmTreeWidget.ID = 'scm-resource-widget';
    ScmTreeWidget.RESOURCE_GROUP_CONTEXT_MENU = ['RESOURCE_GROUP_CONTEXT_MENU'];
    ScmTreeWidget.RESOURCE_GROUP_INLINE_MENU = ['RESOURCE_GROUP_INLINE_MENU'];
    ScmTreeWidget.RESOURCE_FOLDER_CONTEXT_MENU = ['RESOURCE_FOLDER_CONTEXT_MENU'];
    ScmTreeWidget.RESOURCE_FOLDER_INLINE_MENU = ['RESOURCE_FOLDER_INLINE_MENU'];
    ScmTreeWidget.RESOURCE_INLINE_MENU = ['RESOURCE_INLINE_MENU'];
    ScmTreeWidget.RESOURCE_CONTEXT_MENU = ['RESOURCE_CONTEXT_MENU'];
    __decorate([
        inversify_1.inject(menu_1.MenuModelRegistry),
        __metadata("design:type", menu_1.MenuModelRegistry)
    ], ScmTreeWidget.prototype, "menus", void 0);
    __decorate([
        inversify_1.inject(command_1.CommandRegistry),
        __metadata("design:type", command_1.CommandRegistry)
    ], ScmTreeWidget.prototype, "commands", void 0);
    __decorate([
        inversify_1.inject(browser_1.CorePreferences),
        __metadata("design:type", Object)
    ], ScmTreeWidget.prototype, "corePreferences", void 0);
    __decorate([
        inversify_1.inject(scm_context_key_service_1.ScmContextKeyService),
        __metadata("design:type", scm_context_key_service_1.ScmContextKeyService)
    ], ScmTreeWidget.prototype, "contextKeys", void 0);
    __decorate([
        inversify_1.inject(browser_2.EditorManager),
        __metadata("design:type", browser_2.EditorManager)
    ], ScmTreeWidget.prototype, "editorManager", void 0);
    __decorate([
        inversify_1.inject(browser_2.DiffNavigatorProvider),
        __metadata("design:type", Function)
    ], ScmTreeWidget.prototype, "diffNavigatorProvider", void 0);
    __decorate([
        inversify_1.inject(icon_theme_service_1.IconThemeService),
        __metadata("design:type", icon_theme_service_1.IconThemeService)
    ], ScmTreeWidget.prototype, "iconThemeService", void 0);
    ScmTreeWidget = ScmTreeWidget_1 = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(tree_1.TreeProps)),
        __param(1, inversify_1.inject(scm_tree_model_1.ScmTreeModel)),
        __param(2, inversify_1.inject(browser_1.ContextMenuRenderer)),
        __param(3, inversify_1.inject(scm_service_1.ScmService)),
        __metadata("design:paramtypes", [Object, scm_tree_model_1.ScmTreeModel,
            browser_1.ContextMenuRenderer,
            scm_service_1.ScmService])
    ], ScmTreeWidget);
    return ScmTreeWidget;
}(tree_1.TreeWidget));
exports.ScmTreeWidget = ScmTreeWidget;
(function (ScmTreeWidget) {
    var Styles;
    (function (Styles) {
        Styles.NO_SELECT = 'no-select';
    })(Styles = ScmTreeWidget.Styles || (ScmTreeWidget.Styles = {}));
})(ScmTreeWidget = exports.ScmTreeWidget || (exports.ScmTreeWidget = {}));
exports.ScmTreeWidget = ScmTreeWidget;
var ScmElement = /** @class */ (function (_super) {
    __extends(ScmElement, _super);
    function ScmElement(props) {
        var _this = _super.call(this, props) || this;
        _this.toDisposeOnUnmount = new disposable_1.DisposableCollection();
        _this.detectHover = function (element) {
            if (element) {
                window.requestAnimationFrame(function () {
                    var hover = element.matches(':hover');
                    _this.setState({ hover: hover });
                });
            }
        };
        _this.showHover = function () { return _this.setState({ hover: true }); };
        _this.hideHover = function () { return _this.setState({ hover: false }); };
        _this.renderContextMenu = function (event) {
            event.preventDefault();
            var _a = _this.props, groupId = _a.groupId, contextKeys = _a.contextKeys, contextMenuRenderer = _a.contextMenuRenderer;
            var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
            contextKeys.scmResourceGroup.set(groupId);
            try {
                contextMenuRenderer.render({
                    menuPath: _this.contextMenuPath,
                    anchor: event.nativeEvent,
                    args: _this.contextMenuArgs
                });
            }
            finally {
                contextKeys.scmResourceGroup.set(currentScmResourceGroup);
            }
        };
        _this.state = {
            hover: false
        };
        var setState = _this.setState.bind(_this);
        _this.setState = function (newState) {
            if (!_this.toDisposeOnUnmount.disposed) {
                setState(newState);
            }
        };
        return _this;
    }
    ScmElement.prototype.componentDidMount = function () {
        this.toDisposeOnUnmount.push(disposable_1.Disposable.create(function () { }));
    };
    ScmElement.prototype.componentWillUnmount = function () {
        this.toDisposeOnUnmount.dispose();
    };
    /*
     * Normally the group would always be expected to be found.  However if the tree is restored
     * in restoreState then the tree may be rendered before the groups have been created
     * in the provider.  The provider's groups property will exist be will be empty in such
     * situation.  We want to render the tree (as that is the point of restoreState, we can render
     * the tree in the saved state before the provider has provided status).  We therefore must
     * be prepared to render the tree without having the ScmResourceGroup or ScmResource
     * objects.
     */
    ScmElement.prototype.findGroup = function (repository, groupId) {
        return repository.provider.groups.find(function (g) { return g.id === groupId; });
    };
    return ScmElement;
}(React.Component));
exports.ScmElement = ScmElement;
var ScmResourceComponent = /** @class */ (function (_super) {
    __extends(ScmResourceComponent, _super);
    function ScmResourceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.open = function () {
            var group = _this.findGroup(_this.props.repository, _this.props.groupId);
            if (group) {
                var selectedResource = group.resources.find(function (r) { return String(r.sourceUri) === _this.props.sourceUri; });
                selectedResource.open();
            }
        };
        _this.contextMenuPath = ScmTreeWidget.RESOURCE_CONTEXT_MENU;
        /**
         * Handle the single clicking of nodes present in the widget.
         */
        _this.handleClick = function () {
            // Determine the behavior based on the preference value.
            var isSingle = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'singleClick';
            if (isSingle) {
                _this.open();
            }
        };
        /**
         * Handle the double clicking of nodes present in the widget.
         */
        _this.handleDoubleClick = function () {
            // Determine the behavior based on the preference value.
            var isDouble = _this.props.corePreferences && _this.props.corePreferences['workbench.list.openMode'] === 'doubleClick';
            // Nodes should only be opened through double clicking if the correct preference is set.
            if (isDouble) {
                _this.open();
            }
        };
        return _this;
    }
    ScmResourceComponent.prototype.render = function () {
        var hover = this.state.hover;
        var _a = this.props, name = _a.name, groupId = _a.groupId, parentPath = _a.parentPath, sourceUri = _a.sourceUri, decorations = _a.decorations, labelProvider = _a.labelProvider, commands = _a.commands, menus = _a.menus, contextKeys = _a.contextKeys;
        var resourceUri = new uri_1.default(sourceUri);
        var icon = labelProvider.getIcon(resourceUri);
        var color = decorations && decorations.color || '';
        var letter = decorations && decorations.letter || '';
        var tooltip = decorations && decorations.tooltip || '';
        var relativePath = parentPath.relative(resourceUri.parent);
        var path = relativePath ? relativePath.toString() : labelProvider.getLongName(resourceUri.parent);
        return React.createElement("div", { key: sourceUri, className: "scmItem " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS, onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover, onClick: this.handleClick, onDoubleClick: this.handleDoubleClick },
            React.createElement("span", { className: icon + ' file-icon' }),
            this.props.renderExpansionToggle(),
            React.createElement("div", { className: "noWrapInfo " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS },
                React.createElement("span", { className: 'name' }, name),
                React.createElement("span", { className: 'path' }, path)),
            React.createElement(ScmInlineActions, __assign({}, {
                hover: hover,
                menu: menus.getMenu(ScmTreeWidget.RESOURCE_INLINE_MENU),
                args: this.contextMenuArgs,
                commands: commands,
                contextKeys: contextKeys,
                groupId: groupId
            }),
                React.createElement("div", { title: tooltip, className: 'status', style: { color: color } }, letter)));
    };
    Object.defineProperty(ScmResourceComponent.prototype, "contextMenuArgs", {
        get: function () {
            var _this = this;
            var group = this.findGroup(this.props.repository, this.props.groupId);
            if (group) {
                var selectedResource = group.resources.find(function (r) { return String(r.sourceUri) === _this.props.sourceUri; });
                return [selectedResource, false]; // TODO support multiselection
            }
            else {
                // Repository status not yet available. Empty args disables the action.
                return [];
            }
        },
        enumerable: false,
        configurable: true
    });
    return ScmResourceComponent;
}(ScmElement));
exports.ScmResourceComponent = ScmResourceComponent;
var ScmResourceGroupElement = /** @class */ (function (_super) {
    __extends(ScmResourceGroupElement, _super);
    function ScmResourceGroupElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contextMenuPath = ScmTreeWidget.RESOURCE_GROUP_CONTEXT_MENU;
        return _this;
    }
    ScmResourceGroupElement.prototype.render = function () {
        var hover = this.state.hover;
        var _a = this.props, groupId = _a.groupId, groupLabel = _a.groupLabel, menus = _a.menus, commands = _a.commands, contextKeys = _a.contextKeys;
        return React.createElement("div", { className: "theia-header scm-theia-header " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS, onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover },
            this.props.renderExpansionToggle(),
            React.createElement("div", { className: "noWrapInfo " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS }, groupLabel),
            React.createElement(ScmInlineActions, __assign({}, {
                hover: hover,
                args: this.contextMenuArgs,
                menu: menus.getMenu(ScmTreeWidget.RESOURCE_GROUP_INLINE_MENU),
                commands: commands,
                contextKeys: contextKeys,
                groupId: groupId
            }), this.renderChangeCount()));
    };
    ScmResourceGroupElement.prototype.renderChangeCount = function () {
        var group = this.findGroup(this.props.repository, this.props.groupId);
        return React.createElement("div", { className: 'notification-count-container scm-change-count' },
            React.createElement("span", { className: 'notification-count' }, group ? group.resources.length : 0));
    };
    Object.defineProperty(ScmResourceGroupElement.prototype, "contextMenuArgs", {
        get: function () {
            var group = this.findGroup(this.props.repository, this.props.groupId);
            if (group) {
                return [group];
            }
            else {
                // Repository status not yet available. Empty args disables the action.
                return [];
            }
        },
        enumerable: false,
        configurable: true
    });
    return ScmResourceGroupElement;
}(ScmElement));
exports.ScmResourceGroupElement = ScmResourceGroupElement;
var ScmResourceFolderElement = /** @class */ (function (_super) {
    __extends(ScmResourceFolderElement, _super);
    function ScmResourceFolderElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contextMenuPath = ScmTreeWidget.RESOURCE_FOLDER_CONTEXT_MENU;
        return _this;
    }
    ScmResourceFolderElement.prototype.render = function () {
        var hover = this.state.hover;
        var _a = this.props, groupId = _a.groupId, sourceUri = _a.sourceUri, path = _a.path, labelProvider = _a.labelProvider, commands = _a.commands, menus = _a.menus, contextKeys = _a.contextKeys;
        var sourceFileStat = { uri: String(sourceUri), isDirectory: true, lastModification: 0 };
        var icon = labelProvider.getIcon(sourceFileStat);
        return React.createElement("div", { key: String(sourceUri), className: "scmItem " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS + " " + ScmTreeWidget.Styles.NO_SELECT, onContextMenu: this.renderContextMenu, onMouseEnter: this.showHover, onMouseLeave: this.hideHover, ref: this.detectHover },
            this.props.renderExpansionToggle(),
            React.createElement("span", { className: icon + ' file-icon' }),
            React.createElement("div", { className: "noWrapInfo " + tree_1.TREE_NODE_SEGMENT_GROW_CLASS },
                React.createElement("span", { className: 'name' }, path)),
            React.createElement(ScmInlineActions, __assign({}, {
                hover: hover,
                menu: menus.getMenu(ScmTreeWidget.RESOURCE_FOLDER_INLINE_MENU),
                args: this.contextMenuArgs,
                commands: commands,
                contextKeys: contextKeys,
                groupId: groupId
            })));
    };
    Object.defineProperty(ScmResourceFolderElement.prototype, "contextMenuArgs", {
        get: function () {
            var uris = [];
            var group = this.findGroup(this.props.repository, this.props.groupId);
            if (group) {
                this.collectUris(uris, this.props.node, group);
            }
            return [uris, true];
        },
        enumerable: false,
        configurable: true
    });
    ScmResourceFolderElement.prototype.collectUris = function (uris, node, group) {
        var e_3, _a;
        if (scm_tree_model_2.ScmFileChangeFolderNode.is(node)) {
            try {
                for (var _b = __values(node.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    this.collectUris(uris, child, group);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (scm_tree_model_2.ScmFileChangeNode.is(node)) {
            var resource = group.resources.find(function (r) { return String(r.sourceUri) === node.sourceUri; });
            uris.push(resource);
        }
    };
    return ScmResourceFolderElement;
}(ScmElement));
exports.ScmResourceFolderElement = ScmResourceFolderElement;
var ScmInlineActions = /** @class */ (function (_super) {
    __extends(ScmInlineActions, _super);
    function ScmInlineActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScmInlineActions.prototype.render = function () {
        var _a = this.props, hover = _a.hover, menu = _a.menu, args = _a.args, commands = _a.commands, groupId = _a.groupId, contextKeys = _a.contextKeys, children = _a.children;
        return React.createElement("div", { className: 'theia-scm-inline-actions-container' },
            React.createElement("div", { className: 'theia-scm-inline-actions' }, hover && menu.children
                .map(function (node, index) { return node instanceof menu_1.ActionMenuNode && React.createElement(ScmInlineAction, __assign({ key: index }, { node: node, args: args, commands: commands, groupId: groupId, contextKeys: contextKeys })); })),
            children);
    };
    return ScmInlineActions;
}(React.Component));
exports.ScmInlineActions = ScmInlineActions;
var ScmInlineAction = /** @class */ (function (_super) {
    __extends(ScmInlineAction, _super);
    function ScmInlineAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.execute = function (event) {
            event.stopPropagation();
            var _a = _this.props, commands = _a.commands, node = _a.node, args = _a.args;
            commands.executeCommand.apply(commands, __spread([node.action.commandId], args));
        };
        return _this;
    }
    ScmInlineAction.prototype.render = function () {
        var _a = this.props, node = _a.node, args = _a.args, commands = _a.commands, groupId = _a.groupId, contextKeys = _a.contextKeys;
        var currentScmResourceGroup = contextKeys.scmResourceGroup.get();
        contextKeys.scmResourceGroup.set(groupId);
        try {
            if (!commands.isVisible.apply(commands, __spread([node.action.commandId], args)) || !contextKeys.match(node.action.when)) {
                return false;
            }
            return React.createElement("div", { className: 'theia-scm-inline-action' },
                React.createElement("a", { className: node.icon, title: node.label, onClick: this.execute }));
        }
        finally {
            contextKeys.scmResourceGroup.set(currentScmResourceGroup);
        }
    };
    return ScmInlineAction;
}(React.Component));
exports.ScmInlineAction = ScmInlineAction;


/***/ }),

/***/ "../../packages/scm/lib/browser/scm-widget.js":
/*!*******************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/lib/browser/scm-widget.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
exports.ScmWidget = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var disposable_1 = __webpack_require__(/*! @theia/core/lib/common/disposable */ "../../packages/core/lib/common/disposable.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var scm_commit_widget_1 = __webpack_require__(/*! ./scm-commit-widget */ "../../packages/scm/lib/browser/scm-commit-widget.js");
var scm_amend_widget_1 = __webpack_require__(/*! ./scm-amend-widget */ "../../packages/scm/lib/browser/scm-amend-widget.js");
var scm_no_repository_widget_1 = __webpack_require__(/*! ./scm-no-repository-widget */ "../../packages/scm/lib/browser/scm-no-repository-widget.js");
var scm_service_1 = __webpack_require__(/*! ./scm-service */ "../../packages/scm/lib/browser/scm-service.js");
var scm_tree_widget_1 = __webpack_require__(/*! ./scm-tree-widget */ "../../packages/scm/lib/browser/scm-tree-widget.js");
var scm_preferences_1 = __webpack_require__(/*! ./scm-preferences */ "../../packages/scm/lib/browser/scm-preferences.js");
var ScmWidget = /** @class */ (function (_super) {
    __extends(ScmWidget, _super);
    function ScmWidget() {
        var _this = _super.call(this) || this;
        _this.toDisposeOnRefresh = new disposable_1.DisposableCollection();
        _this.node.tabIndex = 0;
        _this.id = ScmWidget_1.ID;
        _this.addClass('theia-scm');
        _this.addClass('theia-scm-main-container');
        return _this;
    }
    ScmWidget_1 = ScmWidget;
    Object.defineProperty(ScmWidget.prototype, "viewMode", {
        get: function () {
            return this.resourceWidget.viewMode;
        },
        set: function (mode) {
            this.resourceWidget.viewMode = mode;
        },
        enumerable: false,
        configurable: true
    });
    ScmWidget.prototype.init = function () {
        var _this = this;
        var layout = new browser_1.PanelLayout();
        this.layout = layout;
        this.panel = new browser_1.Panel({
            layout: new browser_1.PanelLayout({})
        });
        this.panel.node.tabIndex = -1;
        this.panel.node.setAttribute('class', 'theia-scm-panel');
        layout.addWidget(this.panel);
        this.containerLayout.addWidget(this.commitWidget);
        this.containerLayout.addWidget(this.resourceWidget);
        this.containerLayout.addWidget(this.amendWidget);
        this.containerLayout.addWidget(this.noRepositoryWidget);
        this.refresh();
        this.toDispose.push(this.scmService.onDidChangeSelectedRepository(function () { return _this.refresh(); }));
        this.updateViewMode(this.scmPreferences.get('scm.defaultViewMode'));
        this.toDispose.push(this.scmPreferences.onPreferenceChanged(function (e) {
            if (e.preferenceName === 'scm.defaultViewMode') {
                _this.updateViewMode(e.newValue);
            }
        }));
    };
    Object.defineProperty(ScmWidget.prototype, "containerLayout", {
        get: function () {
            return this.panel.layout;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates the view mode based on the preference value.
     * @param preference the view mode preference.
     */
    ScmWidget.prototype.updateViewMode = function (preference) {
        this.viewMode = preference;
    };
    ScmWidget.prototype.refresh = function () {
        var _this = this;
        this.toDisposeOnRefresh.dispose();
        this.toDispose.push(this.toDisposeOnRefresh);
        var repository = this.scmService.selectedRepository;
        this.title.label = repository ? repository.provider.label : 'no repository found';
        this.title.caption = this.title.label;
        this.update();
        if (repository) {
            this.toDisposeOnRefresh.push(repository.onDidChange(function () { return _this.update(); }));
            // render synchronously to avoid cursor jumping
            // see https://stackoverflow.com/questions/28922275/in-reactjs-why-does-setstate-behave-differently-when-called-synchronously/28922465#28922465
            this.toDisposeOnRefresh.push(repository.input.onDidChange(function () { return _this.updateImmediately(); }));
            this.toDisposeOnRefresh.push(repository.input.onDidFocus(function () { return _this.focusInput(); }));
            this.commitWidget.show();
            this.resourceWidget.show();
            this.amendWidget.show();
            this.noRepositoryWidget.hide();
        }
        else {
            this.commitWidget.hide();
            this.resourceWidget.hide();
            this.amendWidget.hide();
            this.noRepositoryWidget.show();
        }
    };
    ScmWidget.prototype.updateImmediately = function () {
        this.onUpdateRequest(browser_1.Widget.Msg.UpdateRequest);
    };
    ScmWidget.prototype.onUpdateRequest = function (msg) {
        browser_1.MessageLoop.sendMessage(this.commitWidget, msg);
        browser_1.MessageLoop.sendMessage(this.resourceWidget, msg);
        browser_1.MessageLoop.sendMessage(this.amendWidget, msg);
        browser_1.MessageLoop.sendMessage(this.noRepositoryWidget, msg);
        _super.prototype.onUpdateRequest.call(this, msg);
    };
    ScmWidget.prototype.onAfterAttach = function (msg) {
        this.node.appendChild(this.commitWidget.node);
        this.node.appendChild(this.resourceWidget.node);
        this.node.appendChild(this.amendWidget.node);
        this.node.appendChild(this.noRepositoryWidget.node);
        _super.prototype.onAfterAttach.call(this, msg);
        this.update();
    };
    ScmWidget.prototype.onActivateRequest = function (msg) {
        _super.prototype.onActivateRequest.call(this, msg);
        this.commitWidget.focus();
    };
    ScmWidget.prototype.focusInput = function () {
        this.commitWidget.focus();
    };
    ScmWidget.prototype.storeState = function () {
        var state = {
            commitState: this.commitWidget.storeState(),
            changesTreeState: this.resourceWidget.storeState(),
        };
        return state;
    };
    ScmWidget.prototype.restoreState = function (oldState) {
        var commitState = oldState.commitState, changesTreeState = oldState.changesTreeState;
        this.commitWidget.restoreState(commitState);
        this.resourceWidget.restoreState(changesTreeState);
    };
    var ScmWidget_1;
    ScmWidget.ID = 'scm-view';
    __decorate([
        inversify_1.inject(scm_service_1.ScmService),
        __metadata("design:type", scm_service_1.ScmService)
    ], ScmWidget.prototype, "scmService", void 0);
    __decorate([
        inversify_1.inject(scm_commit_widget_1.ScmCommitWidget),
        __metadata("design:type", scm_commit_widget_1.ScmCommitWidget)
    ], ScmWidget.prototype, "commitWidget", void 0);
    __decorate([
        inversify_1.inject(scm_tree_widget_1.ScmTreeWidget),
        __metadata("design:type", scm_tree_widget_1.ScmTreeWidget)
    ], ScmWidget.prototype, "resourceWidget", void 0);
    __decorate([
        inversify_1.inject(scm_amend_widget_1.ScmAmendWidget),
        __metadata("design:type", scm_amend_widget_1.ScmAmendWidget)
    ], ScmWidget.prototype, "amendWidget", void 0);
    __decorate([
        inversify_1.inject(scm_no_repository_widget_1.ScmNoRepositoryWidget),
        __metadata("design:type", scm_no_repository_widget_1.ScmNoRepositoryWidget)
    ], ScmWidget.prototype, "noRepositoryWidget", void 0);
    __decorate([
        inversify_1.inject(scm_preferences_1.ScmPreferences),
        __metadata("design:type", Object)
    ], ScmWidget.prototype, "scmPreferences", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ScmWidget.prototype, "init", null);
    ScmWidget = ScmWidget_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ScmWidget);
    return ScmWidget;
}(browser_1.BaseWidget));
exports.ScmWidget = ScmWidget;


/***/ }),

/***/ "../../packages/scm/src/browser/style/scm-amend-component.css":
/*!***********************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/scm/src/browser/style/scm-amend-component.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./scm-amend-component.css */ "../../node_modules/css-loader/index.js!../../packages/scm/src/browser/style/scm-amend-component.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "../../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
//# sourceMappingURL=35.bundle.js.map