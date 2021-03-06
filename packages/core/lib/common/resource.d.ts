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
import { TextDocumentContentChangeEvent } from 'vscode-languageserver-protocol';
import URI from '../common/uri';
import { ContributionProvider } from './contribution-provider';
import { Event, Emitter } from './event';
import { Disposable } from './disposable';
import { MaybePromise } from './types';
import { CancellationToken } from './cancellation';
import { ApplicationError } from './application-error';
export interface ResourceVersion {
}
export interface ResourceReadOptions {
    encoding?: string;
}
export interface ResourceSaveOptions {
    encoding?: string;
    overwriteEncoding?: string;
    version?: ResourceVersion;
}
export interface Resource extends Disposable {
    readonly uri: URI;
    /**
     * Latest read version of this resource.
     *
     * Optional if a resource does not support versioning, check with `in` operator`.
     * Undefined if a resource did not read content yet.
     */
    readonly version?: ResourceVersion | undefined;
    /**
     * Reads latest content of this resource.
     *
     * If a resource supports versioning it updates version to latest.
     *
     * @throws `ResourceError.NotFound` if a resource not found
     */
    readContents(options?: ResourceReadOptions): Promise<string>;
    /**
     * Rewrites the complete content for this resource.
     * If a resource does not exist it will be created.
     *
     * If a resource supports versioning clients can pass some version
     * to check against it, if it is not provided latest version is used.
     * It updates version to latest.
     *
     * @throws `ResourceError.OutOfSync` if latest resource version is out of sync with the given
     */
    saveContents?(content: string, options?: ResourceSaveOptions): Promise<void>;
    /**
     * Applies incremental content changes to this resource.
     *
     * If a resource supports versioning clients can pass some version
     * to check against it, if it is not provided latest version is used.
     * It updates version to latest.
     *
     * @throws `ResourceError.NotFound` if a resource not found or was not read yet
     * @throws `ResourceError.OutOfSync` if latest resource version is out of sync with the given
     */
    saveContentChanges?(changes: TextDocumentContentChangeEvent[], options?: ResourceSaveOptions): Promise<void>;
    readonly onDidChangeContents?: Event<void>;
    guessEncoding?(): Promise<string | undefined>;
}
export declare namespace Resource {
    interface SaveContext {
        content: string;
        changes?: TextDocumentContentChangeEvent[];
        options?: ResourceSaveOptions;
    }
    function save(resource: Resource, context: SaveContext, token?: CancellationToken): Promise<void>;
    function trySaveContentChanges(resource: Resource, context: SaveContext): Promise<boolean>;
    function shouldSaveContent({ content, changes }: SaveContext): boolean;
}
export declare namespace ResourceError {
    const NotFound: ApplicationError.Constructor<-40000, {
        uri: URI;
    }>;
    const OutOfSync: ApplicationError.Constructor<-40001, {
        uri: URI;
    }>;
}
export declare const ResourceResolver: unique symbol;
export interface ResourceResolver {
    /**
     * Reject if a resource cannot be provided.
     */
    resolve(uri: URI): MaybePromise<Resource>;
}
export declare const ResourceProvider: unique symbol;
export declare type ResourceProvider = (uri: URI) => Promise<Resource>;
export declare class DefaultResourceProvider {
    protected readonly resolversProvider: ContributionProvider<ResourceResolver>;
    constructor(resolversProvider: ContributionProvider<ResourceResolver>);
    /**
     * Reject if a resource cannot be provided.
     */
    get(uri: URI): Promise<Resource>;
}
export declare class MutableResource implements Resource {
    readonly uri: URI;
    readonly dispose: () => void;
    private contents;
    constructor(uri: URI, contents: string, dispose: () => void);
    readContents(): Promise<string>;
    saveContents(contents: string): Promise<void>;
    protected readonly onDidChangeContentsEmitter: Emitter<void>;
    onDidChangeContents: Event<void>;
    protected fireDidChangeContents(): void;
}
export declare class InMemoryResources implements ResourceResolver {
    private resources;
    add(uri: URI, contents: string): Resource;
    update(uri: URI, contents: string): Resource;
    resolve(uri: URI): Resource;
}
//# sourceMappingURL=resource.d.ts.map