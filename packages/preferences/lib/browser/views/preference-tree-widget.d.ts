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
import { Message } from '@phosphor/messaging';
import { ContextMenuRenderer, ExpandableTreeNode, PreferenceService, TreeModel, TreeNode, TreeProps, TreeWidget, SelectableTreeNode, NodeProps } from '@theia/core/lib/browser';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
import React = require('react');
import { PreferencesEventService } from '../util/preference-event-service';
import { PreferencesDecorator } from '../preferences-decorator';
import { PreferencesTreeProvider } from '../preference-tree-provider';
import { Preference } from '../util/preference-types';
export declare class PreferencesTreeWidget extends TreeWidget {
    static ID: string;
    protected shouldFireSelectionEvents: boolean;
    protected firstVisibleLeafNodeID: string;
    protected readonly preferenceService: PreferenceService;
    protected readonly decorator: PreferencesDecorator;
    protected readonly preferenceConfigs: PreferenceConfigurations;
    protected readonly preferenceTreeProvider: PreferencesTreeProvider;
    readonly model: TreeModel;
    protected readonly treeProps: TreeProps;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly preferencesEventService: PreferencesEventService;
    init(): void;
    protected handleEditorScroll(firstVisibleChildId: string): void;
    protected collapseAllExcept(openNode: Preference.TreeExtension): void;
    protected getAncestorsForVisibleNode(visibleNodeID: string): {
        selectionAncestor: SelectableTreeNode;
        expansionAncestor: ExpandableTreeNode;
    };
    protected onAfterAttach(msg: Message): void;
    protected updateDisplay(): void;
    protected fireEditorScrollForNewSelection(previousAndCurrentSelectedNodes: readonly SelectableTreeNode[]): void;
    protected renderNode(node: TreeNode, props: NodeProps): React.ReactNode;
    protected calculateVisibleLeaves(node: Preference.TreeExtension): number;
    protected renderExpansionToggle(node: Preference.TreeExtension, props: NodeProps): React.ReactNode;
}
//# sourceMappingURL=preference-tree-widget.d.ts.map