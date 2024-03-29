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
import { EditorDecoration, EditorDecorationOptions, EditorDecorator, TextEditor } from '@theia/editor/lib/browser';
import { DirtyDiff, LineRange } from './diff-computer';
export declare enum DirtyDiffDecorationType {
    AddedLine = "dirty-diff-added-line",
    RemovedLine = "dirty-diff-removed-line",
    ModifiedLine = "dirty-diff-modified-line"
}
export interface DirtyDiffUpdate extends DirtyDiff {
    readonly editor: TextEditor;
}
export declare class DirtyDiffDecorator extends EditorDecorator {
    applyDecorations(update: DirtyDiffUpdate): void;
    protected toDeltaDecoration(from: LineRange | number, options: EditorDecorationOptions): EditorDecoration;
}
//# sourceMappingURL=dirty-diff-decorator.d.ts.map