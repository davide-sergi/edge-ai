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
import { EditorManager, EditorWidget, TextEditor, TextEditorDocument } from '@theia/editor/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event, Disposable, DisposableCollection } from '@theia/core';
import { ContentLines } from '@theia/scm/lib/browser/dirty-diff/content-lines';
import { DirtyDiffUpdate } from '@theia/scm/lib/browser/dirty-diff/dirty-diff-decorator';
import { DirtyDiff } from '@theia/scm/lib/browser/dirty-diff/diff-computer';
import { GitPreferences, GitConfiguration } from '../git-preferences';
import { PreferenceChangeEvent } from '@theia/core/lib/browser';
import { GitResourceResolver } from '../git-resource-resolver';
import { WorkingDirectoryStatus, GitFileChange, Repository, Git } from '../../common';
import { GitRepositoryTracker } from '../git-repository-tracker';
export declare class DirtyDiffManager {
    protected readonly models: Map<string, DirtyDiffModel>;
    protected readonly onDirtyDiffUpdateEmitter: Emitter<DirtyDiffUpdate>;
    readonly onDirtyDiffUpdate: Event<DirtyDiffUpdate>;
    protected readonly git: Git;
    protected readonly repositoryTracker: GitRepositoryTracker;
    protected readonly gitResourceResolver: GitResourceResolver;
    protected readonly editorManager: EditorManager;
    protected readonly preferences: GitPreferences;
    protected initialize(): Promise<void>;
    protected handleEditorCreated(editorWidget: EditorWidget): Promise<void>;
    protected createNewModel(editor: TextEditor): DirtyDiffModel;
    protected createPreviousFileRevision(fileUri: URI): DirtyDiffModel.PreviousFileRevision;
    protected handleGitStatusUpdate(repository: Repository | undefined, status: WorkingDirectoryStatus | undefined): Promise<void>;
}
export declare class DirtyDiffModel implements Disposable {
    readonly editor: TextEditor;
    readonly preferences: GitPreferences;
    protected readonly previousRevision: DirtyDiffModel.PreviousFileRevision;
    protected toDispose: DisposableCollection;
    protected enabled: boolean;
    protected staged: boolean;
    protected previousContent: ContentLines | undefined;
    protected currentContent: ContentLines | undefined;
    protected readonly onDirtyDiffUpdateEmitter: Emitter<DirtyDiffUpdate>;
    readonly onDirtyDiffUpdate: Event<DirtyDiffUpdate>;
    constructor(editor: TextEditor, preferences: GitPreferences, previousRevision: DirtyDiffModel.PreviousFileRevision);
    protected handlePreferenceChange(event: PreferenceChangeEvent<GitConfiguration>): Promise<void>;
    protected get linesLimit(): number;
    protected updateTimeout: number | undefined;
    protected shouldRender(): boolean;
    update(): void;
    handleDocumentChanged(document: TextEditorDocument): void;
    handleGitStatusUpdate(repository: Repository | undefined, relevantChanges: GitFileChange[]): Promise<void>;
    protected isInGitRepository(repository: Repository | undefined): Promise<boolean>;
    protected getPreviousRevisionContent(): Promise<ContentLines | undefined>;
    dispose(): void;
}
export declare namespace DirtyDiffModel {
    /**
     * Returns an eventually consistent result. E.g. it can happen, that lines are deleted during the computation,
     * which will internally produce 'line out of bound' errors, then it will return `undefined`.
     *
     * `ContentLines` are to avoid copying contents which improves the performance, therefore handling of the `undefined`
     * result, and rescheduling of the computation should be done by caller.
     */
    function computeDirtyDiff(previous: ContentLines, current: ContentLines): DirtyDiff | undefined;
    function documentContentLines(document: TextEditorDocument): ContentLines;
    interface PreviousFileRevision {
        readonly fileUri: URI;
        getContents(staged: boolean): Promise<string>;
        isVersionControlled(): Promise<boolean>;
    }
}
//# sourceMappingURL=dirty-diff-manager.d.ts.map