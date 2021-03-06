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
import URI from '@theia/core/lib/common/uri';
import { Path } from '@theia/core';
export interface WorkingDirectoryStatus {
    /**
     * `true` if the repository exists, otherwise `false`.
     */
    readonly exists: boolean;
    /**
     * An array of changed files.
     */
    readonly changes: GitFileChange[];
    /**
     * The optional name of the branch. Can be absent.
     */
    readonly branch?: string;
    /**
     * The name of the upstream branch. Optional.
     */
    readonly upstreamBranch?: string;
    /**
     * Wraps the `ahead` and `behind` numbers.
     */
    readonly aheadBehind?: {
        ahead: number;
        behind: number;
    };
    /**
     * The hash string of the current HEAD.
     */
    readonly currentHead?: string;
    /**
     * `true` if a limit was specified and reached during get `git status`, so this result is not complete. Otherwise, (including `undefined`) is complete.
     */
    readonly incomplete?: boolean;
}
export declare namespace WorkingDirectoryStatus {
    /**
     * `true` if the directory statuses are deep equal, otherwise `false`.
     */
    function equals(left: WorkingDirectoryStatus | undefined, right: WorkingDirectoryStatus | undefined): boolean;
}
/**
 * Enumeration of states that a file resource can have in the working directory.
 */
export declare enum GitFileStatus {
    'New' = 0,
    'Copied' = 1,
    'Modified' = 2,
    'Renamed' = 3,
    'Deleted' = 4,
    'Conflicted' = 5
}
export declare namespace GitFileStatus {
    /**
     * Compares the statuses based on the natural order of the enumeration.
     */
    const statusCompare: (left: GitFileStatus, right: GitFileStatus) => number;
    /**
     * Returns with human readable representation of the Git file status argument. If the `staged` argument is `undefined`,
     * it will be treated as `false`.
     */
    const toString: (status: GitFileStatus, staged?: boolean | undefined) => string;
    /**
     * Returns with the human readable abbreviation of the Git file status argument. `staged` argument defaults to `false`.
     */
    const toAbbreviation: (status: GitFileStatus, staged?: boolean | undefined) => string;
    /**
     * It should be aligned with https://github.com/microsoft/vscode/blob/0dfa355b3ad185a6289ba28a99c141ab9e72d2be/extensions/git/src/repository.ts#L197
     */
    function getColor(status: GitFileStatus, staged?: boolean): string;
}
/**
 * Representation of an individual file change in the working directory.
 */
export interface GitFileChange {
    /**
     * The current URI of the changed file resource.
     */
    readonly uri: string;
    /**
     * The file status.
     */
    readonly status: GitFileStatus;
    /**
     * The previous URI of the changed URI. Can be absent if the file is new, or just changed and so on.
     */
    readonly oldUri?: string;
    /**
     * `true` if the file is staged or committed, `false` if not staged. If absent, it means not staged.
     */
    readonly staged?: boolean;
}
/**
 * An object encapsulating the changes to a committed file.
 */
export interface CommittedFileChange extends GitFileChange {
    /**
     * A commit SHA or some other identifier that ultimately dereferences to a commit.
     * This is the pointer to the `after` version of this change. For instance, the parent of this
     * commit will contain the `before` (or nothing, if the file change represents a new file).
     */
    readonly commitish: string;
}
/**
 * Bare minimum representation of a local Git clone.
 */
export interface Repository {
    /**
     * The FS URI of the local clone.
     */
    readonly localUri: string;
}
export declare namespace Repository {
    function equal(repository: Repository | undefined, repository2: Repository | undefined): boolean;
    function is(repository: Object | undefined): repository is Repository;
    function relativePath(repository: Repository | URI, uri: URI | string): Path | undefined;
}
/**
 * Representation of a Git remote.
 */
export interface Remote {
    /**
     * The name of the remote.
     */
    readonly name: string;
    /**
     * The remote fetch url.
     */
    readonly fetch: string;
    /**
     * The remote git url.
     */
    readonly push: string;
}
/**
 * The branch type. Either local or remote.
 * The order matters.
 */
export declare enum BranchType {
    /**
     * The local branch type.
     */
    Local = 0,
    /**
     * The remote branch type.
     */
    Remote = 1
}
/**
 * Representation of a Git branch.
 */
export interface Branch {
    /**
     * The short name of the branch. For instance; `master`.
     */
    readonly name: string;
    /**
     * The remote-prefixed upstream name. For instance; `origin/master`.
     */
    readonly upstream?: string;
    /**
     * The type of branch. Could be either [local](BranchType.Local) or [remote](BranchType.Remote).
     */
    readonly type: BranchType;
    /**
     * The commit associated with this branch.
     */
    readonly tip: Commit;
    /**
     * The name of the remote of the upstream.
     */
    readonly remote?: string;
    /**
     * The name of the branch's upstream without the remote prefix.
     */
    readonly upstreamWithoutRemote?: string;
    /**
     * The name of the branch without the remote prefix. If the branch is a local
     * branch, this is the same as its `name`.
     */
    readonly nameWithoutRemote: string;
}
/**
 * Representation of a Git tag.
 */
export interface Tag {
    /**
     * The name of the tag.
     */
    readonly name: string;
}
/**
 * A Git commit.
 */
export interface Commit {
    /**
     * The commit SHA.
     */
    readonly sha: string;
    /**
     * The first line of the commit message.
     */
    readonly summary: string;
    /**
     * The commit message without the first line and CR.
     */
    readonly body?: string;
    /**
     * Information about the author of this commit. It includes name, email and date.
     */
    readonly author: CommitIdentity;
    /**
     * The SHAs for the parents of the commit.
     */
    readonly parentSHAs?: string[];
}
/**
 * Representation of a Git commit, plus the changes that were performed in that particular commit.
 */
export interface CommitWithChanges extends Commit {
    /**
     * The date when the commit was authored (ISO format).
     */
    readonly authorDateRelative: string;
    /**
     * The file changes in the commit.
     */
    readonly fileChanges: GitFileChange[];
}
/**
 * A tuple of name, email, and a date for the author or commit info in a commit.
 */
export interface CommitIdentity {
    /**
     * The name for the commit.
     */
    readonly name: string;
    /**
     * The email address for the user who did the commit.
     */
    readonly email: string;
    /**
     * The date of the commit in ISO format.
     */
    readonly timestamp: string;
}
/**
 * The result of shelling out to Git.
 */
export interface GitResult {
    /**
     * The standard output from Git.
     */
    readonly stdout: string;
    /**
     * The standard error output from Git.
     */
    readonly stderr: string;
    /**
     * The exit code of the Git process.
     */
    readonly exitCode: number;
}
/**
 * StashEntry
 */
export interface StashEntry {
    readonly id: string;
    readonly message: string;
}
/**
 * The Git errors which can be parsed from failed Git commands.
 */
export declare enum GitError {
    SSHKeyAuditUnverified = 0,
    SSHAuthenticationFailed = 1,
    SSHPermissionDenied = 2,
    HTTPSAuthenticationFailed = 3,
    RemoteDisconnection = 4,
    HostDown = 5,
    RebaseConflicts = 6,
    MergeConflicts = 7,
    HTTPSRepositoryNotFound = 8,
    SSHRepositoryNotFound = 9,
    PushNotFastForward = 10,
    BranchDeletionFailed = 11,
    DefaultBranchDeletionFailed = 12,
    RevertConflicts = 13,
    EmptyRebasePatch = 14,
    NoMatchingRemoteBranch = 15,
    NothingToCommit = 16,
    NoSubmoduleMapping = 17,
    SubmoduleRepositoryDoesNotExist = 18,
    InvalidSubmoduleSHA = 19,
    LocalPermissionDenied = 20,
    InvalidMerge = 21,
    InvalidRebase = 22,
    NonFastForwardMergeIntoEmptyHead = 23,
    PatchDoesNotApply = 24,
    BranchAlreadyExists = 25,
    BadRevision = 26,
    NotAGitRepository = 27,
    CannotMergeUnrelatedHistories = 28,
    LFSAttributeDoesNotMatch = 29,
    BranchRenameFailed = 30,
    PathDoesNotExist = 31,
    InvalidObjectName = 32,
    OutsideRepository = 33,
    LockFileAlreadyExists = 34,
    PushWithFileSizeExceedingLimit = 35,
    HexBranchNameRejected = 36,
    ForcePushRejected = 37,
    InvalidRefLength = 38,
    ProtectedBranchRequiresReview = 39,
    ProtectedBranchForcePush = 40,
    ProtectedBranchDeleteRejected = 41,
    ProtectedBranchRequiredStatus = 42,
    PushWithPrivateEmail = 43
}
export interface GitFileBlame {
    readonly uri: string;
    readonly commits: Commit[];
    readonly lines: CommitLine[];
}
export interface CommitLine {
    readonly sha: string;
    readonly line: number;
}
//# sourceMappingURL=git-model.d.ts.map