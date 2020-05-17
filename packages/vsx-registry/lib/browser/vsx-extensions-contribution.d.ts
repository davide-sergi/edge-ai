/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import { Command, CommandRegistry } from '@theia/core/lib/common/command';
import { AbstractViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { VSXExtensionsViewContainer } from './vsx-extensions-view-container';
import { Widget } from '@theia/core/lib/browser/widgets/widget';
import { VSXExtensionsModel } from './vsx-extensions-model';
import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
import { ColorRegistry } from '@theia/core/lib/browser/color-registry';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
export declare namespace VSXExtensionsCommands {
    const CLEAR_ALL: Command;
}
export declare class VSXExtensionsContribution extends AbstractViewContribution<VSXExtensionsViewContainer> implements ColorContribution, TabBarToolbarContribution {
    protected readonly model: VSXExtensionsModel;
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    registerColors(colors: ColorRegistry): void;
    protected withWidget<T>(widget: Widget | undefined, fn: (widget: VSXExtensionsViewContainer) => T): T | false;
}
//# sourceMappingURL=vsx-extensions-contribution.d.ts.map