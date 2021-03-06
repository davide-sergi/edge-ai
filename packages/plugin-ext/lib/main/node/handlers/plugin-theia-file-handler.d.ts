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
import { PluginDeployerFileHandler, PluginDeployerEntry, PluginDeployerFileHandlerContext } from '../../../common/plugin-protocol';
import { PluginTheiaEnvironment } from '../../common/plugin-theia-environment';
export declare class PluginTheiaFileHandler implements PluginDeployerFileHandler {
    private readonly systemPluginsDirUri;
    protected readonly environment: PluginTheiaEnvironment;
    accept(resolvedPlugin: PluginDeployerEntry): boolean;
    handle(context: PluginDeployerFileHandlerContext): Promise<void>;
    protected getPluginDir(context: PluginDeployerFileHandlerContext): Promise<string>;
}
//# sourceMappingURL=plugin-theia-file-handler.d.ts.map