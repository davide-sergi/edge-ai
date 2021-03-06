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
import { Tree, TreeDecorator, TreeDecoration, PreferenceDataProperty, PreferenceService } from '@theia/core/lib/browser';
import { Emitter, Event, MaybePromise } from '@theia/core';
export declare class PreferencesDecorator implements TreeDecorator {
    readonly id: string;
    protected activeFolderUri: string | undefined;
    protected preferences: {
        [id: string]: PreferenceDataProperty;
    }[];
    protected preferencesDecorations: Map<string, TreeDecoration.Data>;
    protected readonly emitter: Emitter<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    protected readonly preferencesService: PreferenceService;
    protected init(): void;
    get onDidChangeDecorations(): Event<(tree: Tree) => Map<string, TreeDecoration.Data>>;
    fireDidChangeDecorations(preferences: {
        [id: string]: PreferenceDataProperty;
    }[]): void;
    decorations(tree: Tree): MaybePromise<Map<string, TreeDecoration.Data>>;
    protected setActiveFolder(folder: string): void;
    protected getPreferenceDisplayValue(storedValue: any, defaultValue: any): any;
    protected buildTooltip(data: PreferenceDataProperty): string;
    /**
     * Get the description for the preference for display purposes.
     * @param value {PreferenceDataProperty} the preference data property.
     * @returns the description if available.
     */
    protected getDescription(value: PreferenceDataProperty): string;
}
//# sourceMappingURL=preferences-decorator.d.ts.map