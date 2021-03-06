"use strict";
/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InPluginFileSystemWatcherManager = void 0;
var inversify_1 = require("inversify");
var language_selector_1 = require("@theia/languages/lib/common/language-selector");
var filesystem_watcher_1 = require("@theia/filesystem/lib/browser/filesystem-watcher");
var types_impl_1 = require("../../plugin/types-impl");
var uri_components_1 = require("../../common/uri-components");
/**
 * Actual implementation of file watching system of the plugin API.
 * Holds subscriptions (with its settings) from within plugins
 * and process all file system events in all workspace roots whether they matches to any subscription.
 * Only if event matches it will be sent into plugin side to specific subscriber.
 */
var InPluginFileSystemWatcherManager = /** @class */ (function () {
    function InPluginFileSystemWatcherManager() {
        this.subscribers = new Map();
        this.nextSubscriberId = 0;
    }
    InPluginFileSystemWatcherManager.prototype.init = function () {
        var _this = this;
        this.fileSystemWatcher.onFilesChanged(function (event) { return _this.onFilesChangedEventHandler(event); });
        this.fileSystemWatcher.onDidMove(function (event) { return _this.onDidMoveEventHandler(event); });
        this.fileSystemWatcher.onWillMove(function (event) { return _this.onWillMoveEventHandler(event); });
    };
    // Filter file system changes according to subscribers settings here to avoid unneeded traffic.
    InPluginFileSystemWatcherManager.prototype.onFilesChangedEventHandler = function (changes) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
        try {
            for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
                var change = changes_1_1.value;
                switch (change.type) {
                    case filesystem_watcher_1.FileChangeType.UPDATED:
                        try {
                            for (var _e = (e_2 = void 0, __values(this.subscribers)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var _g = __read(_f.value, 2), id = _g[0], subscriber = _g[1];
                                if (!subscriber.ignoreChangeEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'updated' });
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        break;
                    case filesystem_watcher_1.FileChangeType.ADDED:
                        try {
                            for (var _h = (e_3 = void 0, __values(this.subscribers)), _j = _h.next(); !_j.done; _j = _h.next()) {
                                var _k = __read(_j.value, 2), id = _k[0], subscriber = _k[1];
                                if (!subscriber.ignoreCreateEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'created' });
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        break;
                    case filesystem_watcher_1.FileChangeType.DELETED:
                        try {
                            for (var _l = (e_4 = void 0, __values(this.subscribers)), _m = _l.next(); !_m.done; _m = _l.next()) {
                                var _o = __read(_m.value, 2), id = _o[0], subscriber = _o[1];
                                if (!subscriber.ignoreDeleteEvents && this.uriMatches(subscriber, change)) {
                                    subscriber.proxy.$fileChanged({ subscriberId: id, uri: uri_components_1.theiaUritoUriComponents(change.uri), type: 'deleted' });
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    // Filter file system changes according to subscribers settings here to avoid unneeded traffic.
    InPluginFileSystemWatcherManager.prototype.onDidMoveEventHandler = function (change) {
        var e_5, _a;
        try {
            for (var _b = __values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), id = _d[0], subscriber = _d[1];
                subscriber.proxy.$onFileRename({
                    subscriberId: id,
                    oldUri: uri_components_1.theiaUritoUriComponents(change.sourceUri),
                    newUri: uri_components_1.theiaUritoUriComponents(change.targetUri)
                });
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    // Filter file system changes according to subscribers settings here to avoid unneeded traffic.
    InPluginFileSystemWatcherManager.prototype.onWillMoveEventHandler = function (change) {
        var e_6, _a;
        try {
            for (var _b = __values(this.subscribers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), id = _d[0], subscriber = _d[1];
                subscriber.proxy.$onWillRename({
                    subscriberId: id,
                    oldUri: uri_components_1.theiaUritoUriComponents(change.sourceUri),
                    newUri: uri_components_1.theiaUritoUriComponents(change.targetUri)
                });
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    InPluginFileSystemWatcherManager.prototype.uriMatches = function (subscriber, fileChange) {
        return subscriber.mather(fileChange.uri.path.toString());
    };
    /**
     * Registers new file system events subscriber.
     *
     * @param options subscription options
     * @returns generated subscriber id
     */
    InPluginFileSystemWatcherManager.prototype.registerFileWatchSubscription = function (options, proxy) {
        var subscriberId = this.getNextId();
        var globPatternMatcher;
        if (typeof options.globPattern === 'string') {
            globPatternMatcher = language_selector_1.parse(options.globPattern);
        }
        else {
            var relativePattern = new types_impl_1.RelativePattern(options.globPattern.base, options.globPattern.pattern);
            globPatternMatcher = language_selector_1.parse(relativePattern);
        }
        var subscriber = {
            id: subscriberId,
            mather: globPatternMatcher,
            ignoreCreateEvents: options.ignoreCreateEvents === true,
            ignoreChangeEvents: options.ignoreChangeEvents === true,
            ignoreDeleteEvents: options.ignoreDeleteEvents === true,
            proxy: proxy
        };
        this.subscribers.set(subscriberId, subscriber);
        return subscriberId;
    };
    InPluginFileSystemWatcherManager.prototype.unregisterFileWatchSubscription = function (subscriptionId) {
        this.subscribers.delete(subscriptionId);
    };
    InPluginFileSystemWatcherManager.prototype.getNextId = function () {
        return 'ipfsw' + this.nextSubscriberId++;
    };
    __decorate([
        inversify_1.inject(filesystem_watcher_1.FileSystemWatcher),
        __metadata("design:type", filesystem_watcher_1.FileSystemWatcher)
    ], InPluginFileSystemWatcherManager.prototype, "fileSystemWatcher", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InPluginFileSystemWatcherManager.prototype, "init", null);
    InPluginFileSystemWatcherManager = __decorate([
        inversify_1.injectable()
    ], InPluginFileSystemWatcherManager);
    return InPluginFileSystemWatcherManager;
}());
exports.InPluginFileSystemWatcherManager = InPluginFileSystemWatcherManager;
//# sourceMappingURL=in-plugin-filesystem-watcher-manager.js.map