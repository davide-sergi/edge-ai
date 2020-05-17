/********************************************************************************
 * Copyright (C) 2020 Arm and others.
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
import URI from '@theia/core/lib/common/uri';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { Message } from '@phosphor/messaging';
import { TreeWidget, TreeNode, TreeProps, NodeProps } from '@theia/core/lib/browser/tree';
import { ScmTreeModel } from './scm-tree-model';
import { MenuModelRegistry, ActionMenuNode, CompositeMenuNode, MenuPath } from '@theia/core/lib/common/menu';
import { ScmResourceGroup, ScmResource, ScmResourceDecorations } from './scm-provider';
import { ScmService } from './scm-service';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { ScmRepository } from './scm-repository';
import { ContextMenuRenderer, LabelProvider, CorePreferences } from '@theia/core/lib/browser';
import { ScmContextKeyService } from './scm-context-key-service';
import { EditorWidget } from '@theia/editor/lib/browser';
import { EditorManager, DiffNavigatorProvider } from '@theia/editor/lib/browser';
import { IconThemeService } from '@theia/core/lib/browser/icon-theme-service';
import { ScmFileChangeFolderNode, ScmFileChangeNode } from './scm-tree-model';
export declare class ScmTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: ScmTreeModel;
    protected readonly contextMenuRenderer: ContextMenuRenderer;
    protected readonly scmService: ScmService;
    static ID: string;
    static RESOURCE_GROUP_CONTEXT_MENU: string[];
    static RESOURCE_GROUP_INLINE_MENU: string[];
    static RESOURCE_FOLDER_CONTEXT_MENU: string[];
    static RESOURCE_FOLDER_INLINE_MENU: string[];
    static RESOURCE_INLINE_MENU: string[];
    static RESOURCE_CONTEXT_MENU: string[];
    protected readonly menus: MenuModelRegistry;
    protected readonly commands: CommandRegistry;
    protected readonly corePreferences: CorePreferences;
    protected readonly contextKeys: ScmContextKeyService;
    protected readonly editorManager: EditorManager;
    protected readonly diffNavigatorProvider: DiffNavigatorProvider;
    protected readonly iconThemeService: IconThemeService;
    constructor(props: TreeProps, model: ScmTreeModel, contextMenuRenderer: ContextMenuRenderer, scmService: ScmService);
    protected onAfterAttach(msg: Message): void;
    set viewMode(id: 'tree' | 'list');
    get viewMode(): 'tree' | 'list';
    protected refreshOnRepositoryChange(): void;
    /**
     * Render the node given the tree node and node properties.
     * @param node the tree node.
     * @param props the node properties.
     */
    protected renderNode(node: TreeNode, props: NodeProps): React.ReactNode;
    protected createContainerAttributes(): React.HTMLAttributes<HTMLElement>;
    /**
     * The ARROW_LEFT key controls both the movement around the file tree and also
     * the movement through the change chunks within a file.
     *
     * If the selected tree node is a folder then the ARROW_LEFT key behaves exactly
     * as it does in explorer.  It collapses the tree node if the folder is expanded and
     * it moves the selection up to the parent folder if the folder is collapsed (no-op if no parent folder, as
     * group headers are not selectable).  This behavior is the default behavior implemented
     * in the TreeWidget super class.
     *
     * If the selected tree node is a file then the ARROW_LEFT key moves up through the
     * change chunks within each file.  If the selected chunk is the first chunk in the file
     * then the file selection is moved to the previous file (no-op if no previous file).
     *
     * Note that when cursoring through change chunks, the ARROW_LEFT key cannot be used to
     * move up through the parent folders of the file tree.  If users want to do this, using
     * keys only, then they must press ARROW_UP repeatedly until the selected node is the folder
     * node and then press ARROW_LEFT.
     */
    protected handleLeft(event: KeyboardEvent): Promise<void>;
    /**
     * The ARROW_RIGHT key controls both the movement around the file tree and also
     * the movement through the change chunks within a file.
     *
     * If the selected tree node is a folder then the ARROW_RIGHT key behaves exactly
     * as it does in explorer.  It expands the tree node if the folder is collapsed and
     * it moves the selection to the first child node if the folder is expanded.
     * This behavior is the default behavior implemented
     * in the TreeWidget super class.
     *
     * If the selected tree node is a file then the ARROW_RIGHT key moves down through the
     * change chunks within each file.  If the selected chunk is the last chunk in the file
     * then the file selection is moved to the next file (no-op if no next file).
     */
    protected handleRight(event: KeyboardEvent): Promise<void>;
    protected handleEnter(event: KeyboardEvent): void;
    protected getResourceFromNode(node: ScmFileChangeNode): ScmResource | undefined;
    protected moveToPreviousFileNode(): ScmFileChangeNode | undefined;
    protected moveToNextFileNode(): ScmFileChangeNode | undefined;
    protected openResource(resource: ScmResource): Promise<EditorWidget | undefined>;
    protected getPaddingLeft(node: TreeNode, props: NodeProps): number;
    protected needsExpansionTogglePadding(node: TreeNode): boolean;
}
export declare namespace ScmTreeWidget {
    namespace Styles {
        const NO_SELECT = "no-select";
    }
    interface Props {
        repository: ScmRepository;
        commands: CommandRegistry;
        menus: MenuModelRegistry;
        contextKeys: ScmContextKeyService;
        labelProvider: LabelProvider;
        contextMenuRenderer: ContextMenuRenderer;
        corePreferences?: CorePreferences;
    }
}
export declare abstract class ScmElement<P extends ScmElement.Props = ScmElement.Props> extends React.Component<P, ScmElement.State> {
    constructor(props: P);
    protected readonly toDisposeOnUnmount: DisposableCollection;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected detectHover: (element: HTMLElement | null) => void;
    protected showHover: () => void;
    protected hideHover: () => void;
    protected renderContextMenu: (event: React.MouseEvent<HTMLElement>) => void;
    protected findGroup(repository: ScmRepository, groupId: string): ScmResourceGroup | undefined;
    protected abstract get contextMenuPath(): MenuPath;
    protected abstract get contextMenuArgs(): any[];
}
export declare namespace ScmElement {
    interface Props extends ScmTreeWidget.Props {
        groupId: string;
        renderExpansionToggle: () => React.ReactNode;
    }
    interface State {
        hover: boolean;
    }
}
export declare class ScmResourceComponent extends ScmElement<ScmResourceComponent.Props> {
    render(): JSX.Element | undefined;
    protected open: () => void;
    protected readonly contextMenuPath: string[];
    protected get contextMenuArgs(): any[];
    /**
     * Handle the single clicking of nodes present in the widget.
     */
    protected handleClick: () => void;
    /**
     * Handle the double clicking of nodes present in the widget.
     */
    protected handleDoubleClick: () => void;
}
export declare namespace ScmResourceComponent {
    interface Props extends ScmElement.Props {
        name: string;
        parentPath: URI;
        sourceUri: string;
        decorations?: ScmResourceDecorations;
    }
}
export declare class ScmResourceGroupElement extends ScmElement<ScmResourceGroupComponent.Props> {
    render(): JSX.Element;
    protected renderChangeCount(): React.ReactNode;
    protected readonly contextMenuPath: string[];
    protected get contextMenuArgs(): any[];
}
export declare namespace ScmResourceGroupComponent {
    interface Props extends ScmElement.Props {
        groupLabel: string;
    }
}
export declare class ScmResourceFolderElement extends ScmElement<ScmResourceFolderElement.Props> {
    render(): JSX.Element;
    protected readonly contextMenuPath: string[];
    protected get contextMenuArgs(): any[];
    protected collectUris(uris: ScmResource[], node: TreeNode, group: ScmResourceGroup): void;
}
export declare namespace ScmResourceFolderElement {
    interface Props extends ScmElement.Props {
        node: ScmFileChangeFolderNode;
        sourceUri: URI;
        path: string;
    }
}
export declare class ScmInlineActions extends React.Component<ScmInlineActions.Props> {
    render(): React.ReactNode;
}
export declare namespace ScmInlineActions {
    interface Props {
        hover: boolean;
        menu: CompositeMenuNode;
        commands: CommandRegistry;
        groupId: string;
        contextKeys: ScmContextKeyService;
        args: any[];
        children?: React.ReactNode;
    }
}
export declare class ScmInlineAction extends React.Component<ScmInlineAction.Props> {
    render(): React.ReactNode;
    protected execute: (event: React.MouseEvent) => void;
}
export declare namespace ScmInlineAction {
    interface Props {
        node: ActionMenuNode;
        commands: CommandRegistry;
        groupId: string;
        contextKeys: ScmContextKeyService;
        args: any[];
    }
}
//# sourceMappingURL=scm-tree-widget.d.ts.map