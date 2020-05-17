/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { MenuModelRegistry, CommandRegistry } from '@theia/core';
import { AbstractViewContribution, KeybindingRegistry, Widget, PreferenceService } from '@theia/core/lib/browser';
import { TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { FileSystem } from '@theia/filesystem/lib/common';
import { EditorManager } from '@theia/editor/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { PreferencesWidget } from './views/preference-widget';
import { PreferencesEventService } from './util/preference-event-service';
import { WorkspacePreferenceProvider } from './workspace-preference-provider';
import { Preference } from './util/preference-types';
import { ClipboardService } from '@theia/core/lib/browser/clipboard-service';
export declare class PreferencesContribution extends AbstractViewContribution<PreferencesWidget> {
    protected readonly preferencesEventService: PreferencesEventService;
    protected readonly filesystem: FileSystem;
    protected readonly workspacePreferenceProvider: WorkspacePreferenceProvider;
    protected readonly editorManager: EditorManager;
    protected readonly preferenceValueRetrievalService: PreferenceService;
    protected readonly clipboardService: ClipboardService;
    protected preferencesScope: Preference.SelectedScopeDetails;
    constructor();
    init(): void;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
    registerKeybindings(keybindings: KeybindingRegistry): void;
    registerToolbarItems(toolbar: TabBarToolbarRegistry): void;
    protected openPreferencesJSON(preferenceNode: Preference.NodeWithValueInAllScopes): Promise<void>;
    private getPreferencesJSONUri;
    protected getOrCreateSettingsFile(folderURI: string): Promise<URI>;
    /**
     * Determine if the current widget is the PreferencesWidget.
     */
    protected withWidget<T>(widget: Widget | undefined, fn: (widget: PreferencesWidget) => T): T | false;
}
//# sourceMappingURL=preference-contribution.d.ts.map