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
import { DisposableCollection, Disposable } from '@theia/core';
import { Repository } from '../common';
import { GitWatcherServer, GitWatcherClient } from '../common/git-watcher';
import { GitRepositoryManager } from './git-repository-manager';
export declare class DugiteGitWatcherServer implements GitWatcherServer {
    protected readonly manager: GitRepositoryManager;
    protected client: GitWatcherClient | undefined;
    protected watcherSequence: number;
    protected readonly watchers: Map<number, Disposable>;
    protected readonly subscriptions: Map<string, DisposableCollection>;
    constructor(manager: GitRepositoryManager);
    dispose(): void;
    watchGitChanges(repository: Repository): Promise<number>;
    unwatchGitChanges(watcher: number): Promise<void>;
    setClient(client?: GitWatcherClient): void;
}
//# sourceMappingURL=dugite-git-watcher.d.ts.map