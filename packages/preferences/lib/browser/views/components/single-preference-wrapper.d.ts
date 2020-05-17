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
import * as React from 'react';
import { Menu, PreferenceDataProperty, PreferenceItem, PreferenceService, ContextMenuRenderer } from '@theia/core/lib/browser';
import { Preference } from '../../util/preference-types';
interface SinglePreferenceWrapperProps {
    contextMenuRenderer: ContextMenuRenderer;
    preferenceDisplayNode: Preference.NodeWithValueInAllScopes;
    currentScope: number;
    currentScopeURI: string;
    preferencesService: PreferenceService;
    openJSON(preferenceNode: Preference.NodeWithValueInAllScopes): void;
}
interface SinglePreferenceWrapperState {
    showCog: boolean;
    menuOpen: boolean;
}
export declare class SinglePreferenceWrapper extends React.Component<SinglePreferenceWrapperProps, SinglePreferenceWrapperState> {
    protected contextMenu: Menu;
    protected value: PreferenceItem | undefined;
    state: SinglePreferenceWrapperState;
    protected handleOnCogClick: (e: React.MouseEvent | React.KeyboardEvent) => void;
    protected setMenuShown: () => void;
    protected setMenuHidden: () => void;
    protected showCog: () => void;
    protected hideCog: () => void;
    render(): React.ReactNode;
    protected openJSONForCurrentPreference: () => void;
    protected getValueInCurrentScope(preferenceValuesInAllScopes: Preference.ValuesInAllScopes | undefined, currentScope: number): PreferenceItem | undefined;
    protected renderOtherModifiedScopes(preferenceValuesInAllScopes: Preference.ValuesInAllScopes | undefined, data: PreferenceDataProperty, currentScope: number): React.ReactNode[] | undefined;
    protected setPreference: (preferenceName: string, preferenceValue: any) => void;
    getInputType: (preferenceDisplayNode: Preference.NodeWithValueInSingleScope) => React.ReactNode;
}
export {};
//# sourceMappingURL=single-preference-wrapper.d.ts.map