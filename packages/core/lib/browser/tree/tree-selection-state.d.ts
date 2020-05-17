/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import { Tree, TreeNode } from './tree';
import { TreeSelection, SelectableTreeNode } from './tree-selection';
/**
 * A tree selection that might contain additional information about the tree node that has the focus.
 */
export interface FocusableTreeSelection extends TreeSelection {
    /**
     * The tree node that has the focus in the tree selection. In case of a range selection,
     * the `focus` differs from the `node`.
     */
    readonly focus?: SelectableTreeNode;
}
export declare namespace FocusableTreeSelection {
    /**
     * `true` if the argument is a focusable tree selection. Otherwise, `false`.
     */
    function is(arg: object | undefined): arg is FocusableTreeSelection;
    /**
     * Returns with the tree node that has the focus if the argument is a focusable tree selection.
     * Otherwise, returns `undefined`.
     */
    function focus(arg: TreeSelection | undefined): SelectableTreeNode | undefined;
}
/**
 * Class for representing and managing the selection state and the focus of a tree.
 */
export declare class TreeSelectionState {
    protected readonly tree: Tree;
    readonly selectionStack: ReadonlyArray<FocusableTreeSelection>;
    constructor(tree: Tree, selectionStack?: ReadonlyArray<FocusableTreeSelection>);
    nextState(selection: FocusableTreeSelection): TreeSelectionState;
    selection(): ReadonlyArray<SelectableTreeNode>;
    get focus(): SelectableTreeNode | undefined;
    protected handleDefault(state: TreeSelectionState, node: Readonly<SelectableTreeNode>): TreeSelectionState;
    protected handleToggle(state: TreeSelectionState, node: Readonly<SelectableTreeNode>): TreeSelectionState;
    protected handleRange(state: TreeSelectionState, node: Readonly<SelectableTreeNode>): TreeSelectionState;
    /**
     * Returns with an array of items representing the selection range. The from node is the `focus` the to node
     * is the selected node itself on the tree selection. Both the `from` node and the `to` node are inclusive.
     */
    protected selectionRange(selection: FocusableTreeSelection): Readonly<SelectableTreeNode>[];
    protected toSelectableTreeNode(node: TreeNode | undefined): SelectableTreeNode | undefined;
    /**
     * Checks whether the argument contains any `DEFAULT` tree selection type. If yes, throws an error, otherwise returns with a reference the argument.
     */
    protected checkNoDefaultSelection<T extends TreeSelection>(selections: ReadonlyArray<T>): ReadonlyArray<T>;
}
//# sourceMappingURL=tree-selection-state.d.ts.map