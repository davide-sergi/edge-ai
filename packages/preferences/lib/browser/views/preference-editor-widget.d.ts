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
import { ReactWidget, PreferenceService, PreferenceDataProperty, CompositeTreeNode } from '@theia/core/lib/browser';
import { Message } from '@theia/core/lib/browser/widgets/widget';
import { SinglePreferenceDisplayFactory } from './components/single-preference-display-factory';
import { Preference } from '../util/preference-types';
import { PreferencesEventService } from '../util/preference-event-service';
import { PreferencesTreeProvider } from '../preference-tree-provider';
export declare class PreferencesEditorWidget extends ReactWidget {
    static readonly ID = "settings.editor";
    static readonly LABEL = "Settings Editor";
    protected properties: {
        [key: string]: PreferenceDataProperty;
    };
    protected currentDisplay: CompositeTreeNode;
    protected activeScope: number;
    protected activeURI: string;
    protected activeScopeIsFolder: boolean;
    protected scrollContainerRef: React.RefObject<HTMLDivElement>;
    protected hasRendered: boolean;
    protected _preferenceScope: Preference.SelectedScopeDetails;
    protected readonly preferencesEventService: PreferencesEventService;
    protected readonly preferenceValueRetrievalService: PreferenceService;
    protected readonly preferenceTreeProvider: PreferencesTreeProvider;
    protected readonly singlePreferenceFactory: SinglePreferenceDisplayFactory;
    protected init(): void;
    set preferenceScope(preferenceScopeDetails: Preference.SelectedScopeDetails);
    protected callAfterFirstRender(callback: Function): void;
    protected onAfterAttach(msg: Message): void;
    protected render(): React.ReactNode;
    protected handleChangeDisplay: () => void;
    protected onScroll: () => void;
    protected addFirstVisibleChildId(container: Element, array: string[]): void;
    protected isInView(e: HTMLElement, parent: HTMLElement): boolean;
    protected compare: (value: number) => {
        isBetween: (a: number, b: number) => boolean;
    };
    protected handleChangeScope: ({ scope, uri, activeScopeIsFolder }: Preference.SelectedScopeDetails) => void;
    protected renderCategory(category: Preference.Branch): React.ReactNode;
    protected renderNoResultMessage(): React.ReactNode;
    protected scrollToEditorElement(nodeID: string): void;
    /**
     * Sort two strings.
     *
     * @param a the first string.
     * @param b the second string.
     */
    protected sort(a: string, b: string): number;
}
//# sourceMappingURL=preference-editor-widget.d.ts.map