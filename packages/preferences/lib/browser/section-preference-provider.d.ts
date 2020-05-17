/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import URI from '@theia/core/lib/common/uri';
import { AbstractResourcePreferenceProvider } from './abstract-resource-preference-provider';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
export declare const SectionPreferenceProviderUri: unique symbol;
export declare const SectionPreferenceProviderSection: unique symbol;
/**
 * This class encapsulates the logic of using separate files for some workpace configuration like 'launch.json' or 'tasks.json'.
 * Anything that is not a contributed section will be in the main config file.
 */
export declare abstract class SectionPreferenceProvider extends AbstractResourcePreferenceProvider {
    protected readonly workspaceService: WorkspaceService;
    protected readonly uri: URI;
    protected readonly section: string;
    protected readonly preferenceConfigurations: PreferenceConfigurations;
    private _isSection?;
    private get isSection();
    protected getUri(): URI;
    protected parse(content: string): any;
    protected getPath(preferenceName: string): string[] | undefined;
}
//# sourceMappingURL=section-preference-provider.d.ts.map