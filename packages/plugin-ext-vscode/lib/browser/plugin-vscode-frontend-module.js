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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var core_1 = require("@theia/core");
var plugin_vscode_commands_contribution_1 = require("./plugin-vscode-commands-contribution");
var plugin_vscode_environment_1 = require("../common/plugin-vscode-environment");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(plugin_vscode_environment_1.PluginVSCodeEnvironment).toSelf().inSingletonScope();
    bind(plugin_vscode_commands_contribution_1.PluginVscodeCommandsContribution).toSelf().inSingletonScope();
    bind(core_1.CommandContribution).toDynamicValue(function (context) { return context.container.get(plugin_vscode_commands_contribution_1.PluginVscodeCommandsContribution); });
});
//# sourceMappingURL=plugin-vscode-frontend-module.js.map