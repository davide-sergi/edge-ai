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
import { BackendApplicationContribution } from '@theia/core/lib/node/backend-application';
import { HostedPluginReader as PluginReaderHosted } from '@theia/plugin-ext/lib/hosted/node/plugin-reader';
import { PluginMetadata } from '@theia/plugin-ext/lib/common/plugin-protocol';
import { HostedPluginDeployerHandler } from '@theia/plugin-ext/lib/hosted/node/hosted-plugin-deployer-handler';
export declare class HostedPluginReader implements BackendApplicationContribution {
    protected pluginReader: PluginReaderHosted;
    private readonly hostedPlugin;
    protected deployerHandler: HostedPluginDeployerHandler;
    initialize(): Promise<void>;
    getPlugin(): Promise<PluginMetadata | undefined>;
}
//# sourceMappingURL=hosted-plugin-reader.d.ts.map