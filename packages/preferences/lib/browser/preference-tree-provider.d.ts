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
/// <reference types="lodash" />
import { TreeNode, CompositeTreeNode, PreferenceSchemaProvider, PreferenceDataSchema, PreferenceDataProperty, PreferenceScope } from '@theia/core/lib/browser';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
import { PreferencesEventService } from './util/preference-event-service';
import { PreferenceTreeGenerator } from './util/preference-tree-generator';
import { Preference } from './util/preference-types';
interface PreferenceFilterOptions {
    minLength?: number;
    baseSchemaAltered?: boolean;
}
export declare class PreferencesTreeProvider {
    protected _isFiltered: boolean;
    protected lastSearchedLiteral: string;
    protected lastSearchedFuzzy: string;
    protected baseSchema: PreferenceDataSchema;
    protected baseTree: CompositeTreeNode;
    protected _currentTree: CompositeTreeNode;
    protected currentScope: Preference.SelectedScopeDetails;
    protected handleUnderlyingDataChange: ((options: PreferenceFilterOptions, newScope?: Preference.SelectedScopeDetails | undefined) => void) & import("lodash").Cancelable;
    protected readonly preferencesEventService: PreferencesEventService;
    protected readonly schemaProvider: PreferenceSchemaProvider;
    protected readonly preferenceConfigs: PreferenceConfigurations;
    protected readonly preferencesTreeGenerator: PreferenceTreeGenerator;
    protected init(): void;
    protected updateUnderlyingData(options: PreferenceFilterOptions, newScope?: Preference.SelectedScopeDetails): void;
    protected updateDisplay(term?: string, options?: PreferenceFilterOptions): void;
    protected filter<Tree extends TreeNode>(searchTerm: string, currentScope: PreferenceScope, tree: Tree, filterOptions?: PreferenceFilterOptions): Tree;
    protected recurseAndSetVisible<Tree extends TreeNode>(scope: PreferenceScope, tree: Tree): Tree;
    get currentTree(): CompositeTreeNode;
    get propertyList(): {
        [key: string]: PreferenceDataProperty;
    };
    get isFiltered(): boolean;
}
export {};
//# sourceMappingURL=preference-tree-provider.d.ts.map