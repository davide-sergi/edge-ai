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
import { WidgetManager, Panel, Widget, Message } from '@theia/core/lib/browser';
import { Preference } from '../util/preference-types';
import { PreferencesEditorWidget } from './preference-editor-widget';
import { PreferencesTreeWidget } from './preference-tree-widget';
import { PreferencesSearchbarWidget } from './preference-searchbar-widget';
import { PreferencesScopeTabBar } from './preference-scope-tabbar-widget';
export declare class PreferencesWidget extends Panel {
    /**
     * The widget `id`.
     */
    static readonly ID = "settings_widget";
    /**
     * The widget `label` which is used for display purposes.
     */
    static readonly LABEL = "Preferences";
    static readonly COMMAND_LABEL = "Open Preferences";
    protected _preferenceScope: Preference.SelectedScopeDetails;
    protected editorWidget: PreferencesEditorWidget;
    protected treeWidget: PreferencesTreeWidget;
    protected searchbarWidget: PreferencesSearchbarWidget;
    protected tabBarWidget: PreferencesScopeTabBar;
    protected readonly manager: WidgetManager;
    get preferenceScope(): Preference.SelectedScopeDetails;
    set preferenceScope(preferenceScopeDetails: Preference.SelectedScopeDetails);
    protected onResize(msg: Widget.ResizeMessage): void;
    protected onActivateRequest(msg: Message): void;
    protected init(): Promise<void>;
}
//# sourceMappingURL=preference-widget.d.ts.map