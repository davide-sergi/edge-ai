"use strict";
/********************************************************************************
 * Copyright (C) 2015-2018 Red Hat, Inc.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TheiaPluginScanner = void 0;
var inversify_1 = require("inversify");
var plugin_protocol_1 = require("../../../common/plugin-protocol");
var fs = require("fs");
var path = require("path");
var util_1 = require("util");
var grammars_reader_1 = require("./grammars-reader");
var jsoncparser = require("jsonc-parser");
var objects_1 = require("@theia/core/lib/common/objects");
var file_uri_1 = require("@theia/core/lib/node/file-uri");
var preference_schema_1 = require("@theia/core/lib/common/preferences/preference-schema");
var nls;
(function (nls) {
    function localize(key, _default) {
        return _default;
    }
    nls.localize = localize;
})(nls || (nls = {}));
var INTERNAL_CONSOLE_OPTIONS_SCHEMA = {
    enum: ['neverOpen', 'openOnSessionStart', 'openOnFirstSessionStart'],
    default: 'openOnFirstSessionStart',
    description: nls.localize('internalConsoleOptions', 'Controls when the internal debug console should open.')
};
var colorIdPattern = '^\\w+[.\\w+]*$';
var TheiaPluginScanner = /** @class */ (function () {
    function TheiaPluginScanner() {
        this._apiType = 'theiaPlugin';
    }
    Object.defineProperty(TheiaPluginScanner.prototype, "apiType", {
        get: function () {
            return this._apiType;
        },
        enumerable: false,
        configurable: true
    });
    TheiaPluginScanner.prototype.getModel = function (plugin) {
        var result = {
            packagePath: plugin.packagePath,
            packageUri: file_uri_1.FileUri.create(plugin.packagePath).toString(),
            // see id definition: https://github.com/microsoft/vscode/blob/15916055fe0cb9411a5f36119b3b012458fe0a1d/src/vs/platform/extensions/common/extensions.ts#L167-L169
            id: plugin.publisher.toLowerCase() + "." + plugin.name.toLowerCase(),
            name: plugin.name,
            publisher: plugin.publisher,
            version: plugin.version,
            displayName: plugin.displayName,
            description: plugin.description,
            engine: {
                type: this._apiType,
                version: plugin.engines[this._apiType]
            },
            entryPoint: {
                frontend: plugin.theiaPlugin.frontend,
                backend: plugin.theiaPlugin.backend
            }
        };
        return result;
    };
    TheiaPluginScanner.prototype.getLifecycle = function (plugin) {
        return {
            startMethod: 'start',
            stopMethod: 'stop',
            frontendModuleName: plugin_protocol_1.buildFrontendModuleName(plugin),
            backendInitPath: __dirname + '/backend-init-theia.js'
        };
    };
    TheiaPluginScanner.prototype.getDependencies = function (rawPlugin) {
        // skip it since there is no way to load transitive dependencies for Theia plugins yet
        return undefined;
    };
    TheiaPluginScanner.prototype.getContribution = function (rawPlugin) {
        var e_1, _a, e_2, _b;
        var _this = this;
        if (!rawPlugin.contributes && !rawPlugin.activationEvents) {
            return undefined;
        }
        var contributions = {
            activationEvents: rawPlugin.activationEvents
        };
        if (!rawPlugin.contributes) {
            return contributions;
        }
        try {
            if (rawPlugin.contributes.configuration) {
                var configurations = Array.isArray(rawPlugin.contributes.configuration) ? rawPlugin.contributes.configuration : [rawPlugin.contributes.configuration];
                contributions.configuration = [];
                try {
                    for (var configurations_1 = __values(configurations), configurations_1_1 = configurations_1.next(); !configurations_1_1.done; configurations_1_1 = configurations_1.next()) {
                        var c = configurations_1_1.value;
                        var config = this.readConfiguration(c, rawPlugin.packagePath);
                        if (config) {
                            contributions.configuration.push(config);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (configurations_1_1 && !configurations_1_1.done && (_a = configurations_1.return)) _a.call(configurations_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'configuration'.", rawPlugin.contributes.configuration, err);
        }
        var configurationDefaults = rawPlugin.contributes.configurationDefaults;
        contributions.configurationDefaults = preference_schema_1.PreferenceSchemaProperties.is(configurationDefaults) ? configurationDefaults : undefined;
        try {
            if (rawPlugin.contributes.languages) {
                var languages = this.readLanguages(rawPlugin.contributes.languages, rawPlugin.packagePath);
                contributions.languages = languages;
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'languages'.", rawPlugin.contributes.languages, err);
        }
        try {
            if (rawPlugin.contributes.grammars) {
                var grammars = this.grammarsReader.readGrammars(rawPlugin.contributes.grammars, rawPlugin.packagePath);
                contributions.grammars = grammars;
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'grammars'.", rawPlugin.contributes.grammars, err);
        }
        try {
            if (rawPlugin.contributes && rawPlugin.contributes.viewsContainers) {
                var viewsContainers = rawPlugin.contributes.viewsContainers;
                contributions.viewsContainers = {};
                try {
                    for (var _c = __values(Object.keys(viewsContainers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var location_1 = _d.value;
                        var containers = this.readViewsContainers(viewsContainers[location_1], rawPlugin);
                        var loc = location_1 === 'activitybar' ? 'left' : location_1;
                        if (contributions.viewsContainers[loc]) {
                            contributions.viewsContainers[loc] = contributions.viewsContainers[loc].concat(containers);
                        }
                        else {
                            contributions.viewsContainers[loc] = containers;
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'viewsContainers'.", rawPlugin.contributes.viewsContainers, err);
        }
        try {
            if (rawPlugin.contributes.views) {
                contributions.views = {};
                Object.keys(rawPlugin.contributes.views).forEach(function (location) {
                    var views = _this.readViews(rawPlugin.contributes.views[location]);
                    contributions.views[location] = views;
                });
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'views'.", rawPlugin.contributes.views, err);
        }
        try {
            var pluginCommands = rawPlugin.contributes.commands;
            if (pluginCommands) {
                var commands = Array.isArray(pluginCommands) ? pluginCommands : [pluginCommands];
                contributions.commands = commands.map(function (command) { return _this.readCommand(command, rawPlugin); });
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'commands'.", rawPlugin.contributes.commands, err);
        }
        try {
            if (rawPlugin.contributes.menus) {
                contributions.menus = {};
                Object.keys(rawPlugin.contributes.menus).forEach(function (location) {
                    var menus = _this.readMenus(rawPlugin.contributes.menus[location]);
                    contributions.menus[location] = menus;
                });
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'menus'.", rawPlugin.contributes.menus, err);
        }
        try {
            if (rawPlugin.contributes && rawPlugin.contributes.keybindings) {
                var rawKeybindings = Array.isArray(rawPlugin.contributes.keybindings) ? rawPlugin.contributes.keybindings : [rawPlugin.contributes.keybindings];
                contributions.keybindings = rawKeybindings.map(function (rawKeybinding) { return _this.readKeybinding(rawKeybinding); });
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'keybindings'.", rawPlugin.contributes.keybindings, err);
        }
        try {
            if (rawPlugin.contributes.debuggers) {
                var debuggers = this.readDebuggers(rawPlugin.contributes.debuggers);
                contributions.debuggers = debuggers;
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'debuggers'.", rawPlugin.contributes.debuggers, err);
        }
        try {
            if (rawPlugin.contributes.taskDefinitions) {
                var definitions = rawPlugin.contributes.taskDefinitions;
                contributions.taskDefinitions = definitions.map(function (definitionContribution) { return _this.readTaskDefinition(rawPlugin.name, definitionContribution); });
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'taskDefinitions'.", rawPlugin.contributes.taskDefinitions, err);
        }
        try {
            if (rawPlugin.contributes.problemMatchers) {
                contributions.problemMatchers = rawPlugin.contributes.problemMatchers;
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'problemMatchers'.", rawPlugin.contributes.problemMatchers, err);
        }
        try {
            if (rawPlugin.contributes.problemPatterns) {
                contributions.problemPatterns = rawPlugin.contributes.problemPatterns;
            }
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'problemPatterns'.", rawPlugin.contributes.problemPatterns, err);
        }
        try {
            contributions.snippets = this.readSnippets(rawPlugin);
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'snippets'.", rawPlugin.contributes.snippets, err);
        }
        try {
            contributions.themes = this.readThemes(rawPlugin);
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'themes'.", rawPlugin.contributes.themes, err);
        }
        try {
            contributions.iconThemes = this.readIconThemes(rawPlugin);
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'iconThemes'.", rawPlugin.contributes.iconThemes, err);
        }
        try {
            contributions.colors = this.readColors(rawPlugin);
        }
        catch (err) {
            console.error("Could not read '" + rawPlugin.name + "' contribution 'colors'.", rawPlugin.contributes.colors, err);
        }
        return contributions;
    };
    TheiaPluginScanner.prototype.readCommand = function (_a, pck) {
        var command = _a.command, title = _a.title, category = _a.category, icon = _a.icon;
        var iconUrl;
        if (icon) {
            if (typeof icon === 'string') {
                iconUrl = this.toPluginUrl(pck, icon);
            }
            else {
                iconUrl = {
                    light: this.toPluginUrl(pck, icon.light),
                    dark: this.toPluginUrl(pck, icon.dark)
                };
            }
        }
        return { command: command, title: title, category: category, iconUrl: iconUrl };
    };
    TheiaPluginScanner.prototype.toPluginUrl = function (pck, relativePath) {
        return plugin_protocol_1.PluginPackage.toPluginUrl(pck, relativePath);
    };
    TheiaPluginScanner.prototype.readColors = function (pck) {
        var e_3, _a;
        if (!pck.contributes || !pck.contributes.colors) {
            return undefined;
        }
        var result = [];
        try {
            for (var _b = __values(pck.contributes.colors), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (typeof contribution.id !== 'string' || contribution.id.length === 0) {
                    console.error("'configuration.colors.id' must be defined and can not be empty");
                    continue;
                }
                if (!contribution.id.match(colorIdPattern)) {
                    console.error("'configuration.colors.id' must follow the word[.word]*");
                    continue;
                }
                if (typeof contribution.description !== 'string' || contribution.id.length === 0) {
                    console.error("'configuration.colors.description' must be defined and can not be empty");
                    continue;
                }
                var defaults = contribution.defaults;
                if (!defaults || typeof defaults !== 'object' || typeof defaults.light !== 'string' || typeof defaults.dark !== 'string' || typeof defaults.highContrast !== 'string') {
                    console.error("'configuration.colors.defaults' must be defined and must contain 'light', 'dark' and 'highContrast'");
                    continue;
                }
                result.push({
                    id: contribution.id,
                    description: contribution.description,
                    defaults: {
                        light: defaults.light,
                        dark: defaults.dark,
                        hc: defaults.highContrast
                    }
                });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    TheiaPluginScanner.prototype.readThemes = function (pck) {
        var e_4, _a;
        if (!pck.contributes || !pck.contributes.themes) {
            return undefined;
        }
        var result = [];
        try {
            for (var _b = __values(pck.contributes.themes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.path) {
                    result.push({
                        id: contribution.id,
                        uri: file_uri_1.FileUri.create(path.join(pck.packagePath, contribution.path)).toString(),
                        description: contribution.description,
                        label: contribution.label,
                        uiTheme: contribution.uiTheme
                    });
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    };
    TheiaPluginScanner.prototype.readIconThemes = function (pck) {
        var e_5, _a;
        if (!pck.contributes || !pck.contributes.iconThemes) {
            return undefined;
        }
        var result = [];
        try {
            for (var _b = __values(pck.contributes.iconThemes), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (typeof contribution.id !== 'string') {
                    console.error('Expected string in `contributes.iconThemes.id`. Provided value:', contribution.id);
                    continue;
                }
                if (typeof contribution.path !== 'string') {
                    console.error('Expected string in `contributes.iconThemes.path`. Provided value:', contribution.path);
                    continue;
                }
                result.push({
                    id: contribution.id,
                    uri: file_uri_1.FileUri.create(path.join(pck.packagePath, contribution.path)).toString(),
                    description: contribution.description,
                    label: contribution.label,
                    uiTheme: contribution.uiTheme
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
        return result;
    };
    TheiaPluginScanner.prototype.readSnippets = function (pck) {
        var e_6, _a;
        if (!pck.contributes || !pck.contributes.snippets) {
            return undefined;
        }
        var result = [];
        try {
            for (var _b = __values(pck.contributes.snippets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var contribution = _c.value;
                if (contribution.path) {
                    result.push({
                        language: contribution.language,
                        source: pck.displayName || pck.name,
                        uri: file_uri_1.FileUri.create(path.join(pck.packagePath, contribution.path)).toString()
                    });
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        return result;
    };
    TheiaPluginScanner.prototype.readJson = function (filePath) {
        var content = this.readFileSync(filePath);
        return content ? jsoncparser.parse(content, undefined, { disallowComments: false }) : undefined;
    };
    TheiaPluginScanner.prototype.readFileSync = function (filePath) {
        try {
            return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
        }
        catch (e) {
            console.error(e);
            return '';
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TheiaPluginScanner.prototype.readConfiguration = function (rawConfiguration, pluginPath) {
        return preference_schema_1.PreferenceSchema.is(rawConfiguration) ? rawConfiguration : undefined;
    };
    TheiaPluginScanner.prototype.readKeybinding = function (rawKeybinding) {
        return {
            keybinding: rawKeybinding.key,
            command: rawKeybinding.command,
            when: rawKeybinding.when,
            mac: rawKeybinding.mac,
            linux: rawKeybinding.linux,
            win: rawKeybinding.win
        };
    };
    TheiaPluginScanner.prototype.readViewsContainers = function (rawViewsContainers, pck) {
        var _this = this;
        return rawViewsContainers.map(function (rawViewContainer) { return _this.readViewContainer(rawViewContainer, pck); });
    };
    TheiaPluginScanner.prototype.readViewContainer = function (rawViewContainer, pck) {
        return {
            id: rawViewContainer.id,
            title: rawViewContainer.title,
            iconUrl: this.toPluginUrl(pck, rawViewContainer.icon)
        };
    };
    TheiaPluginScanner.prototype.readViews = function (rawViews) {
        var _this = this;
        return rawViews.map(function (rawView) { return _this.readView(rawView); });
    };
    TheiaPluginScanner.prototype.readView = function (rawView) {
        var result = {
            id: rawView.id,
            name: rawView.name,
            when: rawView.when
        };
        return result;
    };
    TheiaPluginScanner.prototype.readMenus = function (rawMenus) {
        var _this = this;
        return rawMenus.map(function (rawMenu) { return _this.readMenu(rawMenu); });
    };
    TheiaPluginScanner.prototype.readMenu = function (rawMenu) {
        var result = {
            command: rawMenu.command,
            alt: rawMenu.alt,
            group: rawMenu.group,
            when: rawMenu.when
        };
        return result;
    };
    TheiaPluginScanner.prototype.readLanguages = function (rawLanguages, pluginPath) {
        var _this = this;
        return rawLanguages.map(function (language) { return _this.readLanguage(language, pluginPath); });
    };
    TheiaPluginScanner.prototype.readLanguage = function (rawLang, pluginPath) {
        // TODO: add validation to all parameters
        var result = {
            id: rawLang.id,
            aliases: rawLang.aliases,
            extensions: rawLang.extensions,
            filenamePatterns: rawLang.filenamePatterns,
            filenames: rawLang.filenames,
            firstLine: rawLang.firstLine,
            mimetypes: rawLang.mimetypes
        };
        if (rawLang.configuration) {
            var rawConfiguration = this.readJson(path.resolve(pluginPath, rawLang.configuration));
            if (rawConfiguration) {
                var configuration = {
                    brackets: rawConfiguration.brackets,
                    comments: rawConfiguration.comments,
                    folding: rawConfiguration.folding,
                    wordPattern: rawConfiguration.wordPattern,
                    autoClosingPairs: this.extractValidAutoClosingPairs(rawLang.id, rawConfiguration),
                    indentationRules: rawConfiguration.indentationRules,
                    surroundingPairs: this.extractValidSurroundingPairs(rawLang.id, rawConfiguration)
                };
                result.configuration = configuration;
            }
        }
        return result;
    };
    TheiaPluginScanner.prototype.readDebuggers = function (rawDebuggers) {
        var _this = this;
        return rawDebuggers.map(function (rawDebug) { return _this.readDebugger(rawDebug); });
    };
    TheiaPluginScanner.prototype.readDebugger = function (rawDebugger) {
        var result = {
            type: rawDebugger.type,
            label: rawDebugger.label,
            languages: rawDebugger.languages,
            enableBreakpointsFor: rawDebugger.enableBreakpointsFor,
            variables: rawDebugger.variables,
            adapterExecutableCommand: rawDebugger.adapterExecutableCommand,
            configurationSnippets: rawDebugger.configurationSnippets,
            win: rawDebugger.win,
            winx86: rawDebugger.winx86,
            windows: rawDebugger.windows,
            osx: rawDebugger.osx,
            linux: rawDebugger.linux,
            program: rawDebugger.program,
            args: rawDebugger.args,
            runtime: rawDebugger.runtime,
            runtimeArgs: rawDebugger.runtimeArgs
        };
        result.configurationAttributes = rawDebugger.configurationAttributes
            && this.resolveSchemaAttributes(rawDebugger.type, rawDebugger.configurationAttributes);
        return result;
    };
    TheiaPluginScanner.prototype.readTaskDefinition = function (pluginName, definitionContribution) {
        var propertyKeys = definitionContribution.properties ? Object.keys(definitionContribution.properties) : [];
        return {
            taskType: definitionContribution.type,
            source: pluginName,
            properties: {
                required: definitionContribution.required,
                all: propertyKeys,
                schema: definitionContribution
            }
        };
    };
    TheiaPluginScanner.prototype.resolveSchemaAttributes = function (type, configurationAttributes) {
        var taskSchema = {};
        return Object.keys(configurationAttributes).map(function (request) {
            var attributes = objects_1.deepClone(configurationAttributes[request]);
            var defaultRequired = ['name', 'type', 'request'];
            attributes.required = attributes.required && attributes.required.length ? defaultRequired.concat(attributes.required) : defaultRequired;
            attributes.additionalProperties = false;
            attributes.type = 'object';
            if (!attributes.properties) {
                attributes.properties = {};
            }
            var properties = attributes.properties;
            properties['type'] = {
                enum: [type],
                description: nls.localize('debugType', 'Type of configuration.'),
                pattern: '^(?!node2)',
                errorMessage: nls.localize('debugTypeNotRecognised', 'The debug type is not recognized. Make sure that you have a corresponding debug extension installed and that it is enabled.'),
                patternErrorMessage: nls.localize('node2NotSupported', '"node2" is no longer supported, use "node" instead and set the "protocol" attribute to "inspector".')
            };
            properties['name'] = {
                type: 'string',
                description: nls.localize('debugName', 'Name of configuration; appears in the launch configuration drop down menu.'),
                default: 'Launch'
            };
            properties['request'] = {
                enum: [request],
                description: nls.localize('debugRequest', 'Request type of configuration. Can be "launch" or "attach".'),
            };
            properties['debugServer'] = {
                type: 'number',
                description: nls.localize('debugServer', 'For debug extension development only: if a port is specified VS Code tries to connect to a debug adapter running in server mode'),
                default: 4711
            };
            properties['preLaunchTask'] = {
                anyOf: [taskSchema, {
                        type: ['string'],
                    }],
                default: '',
                description: nls.localize('debugPrelaunchTask', 'Task to run before debug session starts.')
            };
            properties['postDebugTask'] = {
                anyOf: [taskSchema, {
                        type: ['string'],
                    }],
                default: '',
                description: nls.localize('debugPostDebugTask', 'Task to run after debug session ends.')
            };
            properties['internalConsoleOptions'] = INTERNAL_CONSOLE_OPTIONS_SCHEMA;
            var osProperties = Object.assign({}, properties);
            properties['windows'] = {
                type: 'object',
                description: nls.localize('debugWindowsConfiguration', 'Windows specific launch configuration attributes.'),
                properties: osProperties
            };
            properties['osx'] = {
                type: 'object',
                description: nls.localize('debugOSXConfiguration', 'OS X specific launch configuration attributes.'),
                properties: osProperties
            };
            properties['linux'] = {
                type: 'object',
                description: nls.localize('debugLinuxConfiguration', 'Linux specific launch configuration attributes.'),
                properties: osProperties
            };
            Object.keys(attributes.properties).forEach(function (name) {
                // Use schema allOf property to get independent error reporting #21113
                attributes.properties[name].pattern = attributes.properties[name].pattern || '^(?!.*\\$\\{(env|config|command)\\.)';
                attributes.properties[name].patternErrorMessage = attributes.properties[name].patternErrorMessage ||
                    nls.localize('deprecatedVariables', "'env.', 'config.' and 'command.' are deprecated, use 'env:', 'config:' and 'command:' instead.");
            });
            return attributes;
        });
    };
    TheiaPluginScanner.prototype.extractValidAutoClosingPairs = function (langId, configuration) {
        var source = configuration.autoClosingPairs;
        if (typeof source === 'undefined') {
            return undefined;
        }
        if (!Array.isArray(source)) {
            console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs` to be an array.");
            return undefined;
        }
        var result = undefined;
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = 0, len = source.length; i < len; i++) {
            var pair = source[i];
            if (Array.isArray(pair)) {
                if (!isCharacterPair(pair)) {
                    console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs[" + i + "]` to be an array of two strings or an object.");
                    continue;
                }
                result = result || [];
                result.push({ open: pair[0], close: pair[1] });
            }
            else {
                if (!util_1.isObject(pair)) {
                    console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs[" + i + "]` to be an array of two strings or an object.");
                    continue;
                }
                if (typeof pair.open !== 'string') {
                    console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs[" + i + "].open` to be a string.");
                    continue;
                }
                if (typeof pair.close !== 'string') {
                    console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs[" + i + "].close` to be a string.");
                    continue;
                }
                if (typeof pair.notIn !== 'undefined') {
                    if (!isStringArr(pair.notIn)) {
                        console.warn("[" + langId + "]: language configuration: expected `autoClosingPairs[" + i + "].notIn` to be a string array.");
                        continue;
                    }
                }
                result = result || [];
                result.push({ open: pair.open, close: pair.close, notIn: pair.notIn });
            }
        }
        return result;
    };
    TheiaPluginScanner.prototype.extractValidSurroundingPairs = function (langId, configuration) {
        var source = configuration.surroundingPairs;
        if (typeof source === 'undefined') {
            return undefined;
        }
        if (!Array.isArray(source)) {
            console.warn("[" + langId + "]: language configuration: expected `surroundingPairs` to be an array.");
            return undefined;
        }
        var result = undefined;
        // tslint:disable-next-line:one-variable-per-declaration
        for (var i = 0, len = source.length; i < len; i++) {
            var pair = source[i];
            if (Array.isArray(pair)) {
                if (!isCharacterPair(pair)) {
                    console.warn("[" + langId + "]: language configuration: expected `surroundingPairs[" + i + "]` to be an array of two strings or an object.");
                    continue;
                }
                result = result || [];
                result.push({ open: pair[0], close: pair[1] });
            }
            else {
                if (!util_1.isObject(pair)) {
                    console.warn("[" + langId + "]: language configuration: expected `surroundingPairs[" + i + "]` to be an array of two strings or an object.");
                    continue;
                }
                if (typeof pair.open !== 'string') {
                    console.warn("[" + langId + "]: language configuration: expected `surroundingPairs[" + i + "].open` to be a string.");
                    continue;
                }
                if (typeof pair.close !== 'string') {
                    console.warn("[" + langId + "]: language configuration: expected `surroundingPairs[" + i + "].close` to be a string.");
                    continue;
                }
                result = result || [];
                result.push({ open: pair.open, close: pair.close });
            }
        }
        return result;
    };
    __decorate([
        inversify_1.inject(grammars_reader_1.GrammarsReader),
        __metadata("design:type", grammars_reader_1.GrammarsReader)
    ], TheiaPluginScanner.prototype, "grammarsReader", void 0);
    TheiaPluginScanner = __decorate([
        inversify_1.injectable()
    ], TheiaPluginScanner);
    return TheiaPluginScanner;
}());
exports.TheiaPluginScanner = TheiaPluginScanner;
function isCharacterPair(something) {
    return (isStringArr(something)
        && something.length === 2);
}
function isStringArr(something) {
    if (!Array.isArray(something)) {
        return false;
    }
    // tslint:disable-next-line:one-variable-per-declaration
    for (var i = 0, len = something.length; i < len; i++) {
        if (typeof something[i] !== 'string') {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=scanner-theia.js.map