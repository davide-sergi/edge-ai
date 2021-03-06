/********************************************************************************
 * Copyright (C) 2017 TypeFox and others.
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
import { ProblemManager } from './problem-manager';
import { MarkerNode, MarkerTree, MarkerOptions, MarkerInfoNode } from '../marker-tree';
import { MarkerTreeModel } from '../marker-tree-model';
import { OpenerOptions, TreeNode } from '@theia/core/lib/browser';
import { Marker } from '../../common/marker';
import { Diagnostic } from 'vscode-languageserver-types';
export declare class ProblemTree extends MarkerTree<Diagnostic> {
    protected readonly problemManager: ProblemManager;
    protected readonly markerOptions: MarkerOptions;
    constructor(problemManager: ProblemManager, markerOptions: MarkerOptions);
    protected getMarkerNodes(parent: MarkerInfoNode, markers: Marker<Diagnostic>[]): MarkerNode[];
    /**
     * Sort markers based on the following rules:
     * - Markers are fist sorted by `severity`.
     * - Markers are sorted by `line number` if applicable.
     * - Markers are sorted by `column number` if
     * @param a the first marker for comparison.
     * @param b the second marker for comparison.
     */
    protected sortMarkers(a: MarkerNode, b: MarkerNode): number;
}
export declare class ProblemTreeModel extends MarkerTreeModel {
    protected readonly problemManager: ProblemManager;
    protected getOpenerOptionsByMarker(node: MarkerNode): OpenerOptions | undefined;
    removeNode(node: TreeNode): void;
}
//# sourceMappingURL=problem-tree-model.d.ts.map