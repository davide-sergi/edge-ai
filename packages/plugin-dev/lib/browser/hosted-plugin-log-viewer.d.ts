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
import { OutputChannel, OutputChannelManager } from '@theia/output/lib/common/output-channel';
import { OutputContribution } from '@theia/output/lib/browser/output-contribution';
import { LogPart } from '@theia/plugin-ext/lib/common/types';
import { HostedPluginWatcher } from '@theia/plugin-ext/lib/hosted/browser/hosted-plugin-watcher';
export declare class HostedPluginLogViewer {
    static OUTPUT_CHANNEL_NAME: string;
    protected readonly watcher: HostedPluginWatcher;
    protected readonly outputChannelManager: OutputChannelManager;
    protected readonly outputContribution: OutputContribution;
    protected channel: OutputChannel;
    showLogConsole(): void;
    protected init(): void;
    protected logMessageEventHandler(event: LogPart): void;
}
//# sourceMappingURL=hosted-plugin-log-viewer.d.ts.map