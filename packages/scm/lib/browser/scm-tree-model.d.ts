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
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { TreeModelImpl, TreeNode, CompositeTreeNode, SelectableTreeNode, ExpandableTreeNode } from '@theia/core/lib/browser/tree';
import { ScmResourceGroup, ScmResource, ScmResourceDecorations } from './scm-provider';
import { ScmRepository } from './scm-repository';
import { ScmProvider } from './scm-provider';
export declare const ScmTreeModelProps: unique symbol;
export interface ScmTreeModelProps {
    defaultExpansion?: 'collapsed' | 'expanded';
    nestingThreshold?: number;
}
export interface ScmFileChangeRootNode extends CompositeTreeNode {
    rootUri: string;
    children: ScmFileChangeGroupNode[];
}
export interface ScmFileChangeGroupNode extends ExpandableTreeNode {
    groupId: string;
    groupLabel: string;
    children: (ScmFileChangeFolderNode | ScmFileChangeNode)[];
}
export declare namespace ScmFileChangeGroupNode {
    function is(node: TreeNode): node is ScmFileChangeGroupNode;
}
export interface ScmFileChangeFolderNode extends ExpandableTreeNode, SelectableTreeNode {
    groupId: string;
    path: string;
    sourceUri: string;
    children: (ScmFileChangeFolderNode | ScmFileChangeNode)[];
}
export declare namespace ScmFileChangeFolderNode {
    function is(node: TreeNode): node is ScmFileChangeFolderNode;
}
export interface ScmFileChangeNode extends SelectableTreeNode {
    sourceUri: string;
    decorations?: ScmResourceDecorations;
}
export declare namespace ScmFileChangeNode {
    function is(node: TreeNode): node is ScmFileChangeNode;
}
export declare class ScmTreeModel extends TreeModelImpl {
    private _languageId;
    protected readonly toDisposeOnRepositoryChange: DisposableCollection;
    protected readonly props: ScmTreeModelProps;
    get languageId(): string | undefined;
    protected _viewMode: 'tree' | 'list';
    set viewMode(id: 'tree' | 'list');
    get viewMode(): 'tree' | 'list';
    protected _provider: ScmProvider | undefined;
    set repository(repository: ScmRepository | undefined);
    protected createTree(): ScmFileChangeRootNode | undefined;
    protected toGroupNode(group: ScmResourceGroup, parent: CompositeTreeNode): ScmFileChangeGroupNode;
    protected buildFileChangeTree(resources: {
        resource: ScmResource;
        pathParts: string[];
    }[], start: number, end: number, level: number, parent: (ScmFileChangeGroupNode | ScmFileChangeFolderNode)): (ScmFileChangeFolderNode | ScmFileChangeNode)[];
    protected compareNodes: (a: ScmFileChangeFolderNode | ScmFileChangeNode, b: ScmFileChangeFolderNode | ScmFileChangeNode) => number;
    protected doCompareNodes(a: ScmFileChangeFolderNode | ScmFileChangeNode, b: ScmFileChangeFolderNode | ScmFileChangeNode): number;
    protected toFileChangeFolderNode(resources: {
        resource: ScmResource;
        pathParts: string[];
    }[], start: number, end: number, level: number, nodeRelativePath: string, parent: (ScmFileChangeGroupNode | ScmFileChangeFolderNode)): ScmFileChangeFolderNode;
    protected getRoot(node: ScmFileChangeGroupNode | ScmFileChangeFolderNode): ScmFileChangeRootNode;
    protected toFileChangeNode(resource: ScmResource, parent: CompositeTreeNode): ScmFileChangeNode;
    protected revealNode(node: TreeNode): Promise<void>;
    storeState(): any;
    restoreState(oldState: any): void;
}
//# sourceMappingURL=scm-tree-model.d.ts.map