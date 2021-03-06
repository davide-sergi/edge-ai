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
import { MaybePromise } from '@theia/core/lib/common/types';
import { Event, Emitter } from '@theia/core/lib/common/event';
import { PreferenceChangeEvent } from '@theia/core/lib/browser/preferences';
import { FileSystemPreferences, FileSystemConfiguration } from '@theia/filesystem/lib/browser/filesystem-preferences';
import { FileNavigatorPreferences, FileNavigatorConfiguration } from './navigator-preferences';
/**
 * Filter for omitting elements from the navigator. For more details on the exclusion patterns,
 * one should check either the manual with `man 5 gitignore` or just [here](https://git-scm.com/docs/gitignore).
 */
export declare class FileNavigatorFilter {
    protected readonly preferences: FileNavigatorPreferences;
    protected readonly emitter: Emitter<void>;
    protected filterPredicate: FileNavigatorFilter.Predicate;
    protected showHiddenFiles: boolean;
    protected readonly filesPreferences: FileSystemPreferences;
    constructor(preferences: FileNavigatorPreferences);
    protected init(): Promise<void>;
    filter<T extends {
        id: string;
    }>(items: MaybePromise<T[]>): Promise<T[]>;
    get onFilterChanged(): Event<void>;
    protected filterItem(item: {
        id: string;
    }): boolean;
    protected fireFilterChanged(): void;
    protected onFilesPreferenceChanged(event: PreferenceChangeEvent<FileSystemConfiguration>): void;
    protected onPreferenceChanged(event: PreferenceChangeEvent<FileNavigatorConfiguration>): void;
    protected createFilterPredicate(exclusions: FileNavigatorFilter.Exclusions): FileNavigatorFilter.Predicate;
    toggleHiddenFiles(): void;
    protected interceptExclusions(exclusions: FileNavigatorFilter.Exclusions): FileNavigatorFilter.Exclusions;
}
export declare namespace FileNavigatorFilter {
    /**
     * File navigator filter predicate.
     */
    interface Predicate {
        /**
         * Returns `true` if the item should filtered our from the navigator. Otherwise, `true`.
         *
         * @param item the identifier of a tree node.
         */
        filter(item: {
            id: string;
        }): boolean;
    }
    namespace Predicate {
        /**
         * Wraps a bunch of predicates and returns with a new one that evaluates to `true` if
         * each of the wrapped predicates evaluates to `true`. Otherwise, `false`.
         */
        function and(...predicates: Predicate[]): Predicate;
    }
    /**
     * Type for the exclusion patterns. The property keys are the patterns, values are whether the exclusion is enabled or not.
     */
    interface Exclusions {
        [key: string]: boolean;
    }
}
/**
 * Concrete filter navigator filter predicate that is decoupled from the preferences.
 */
export declare class FileNavigatorFilterPredicate implements FileNavigatorFilter.Predicate {
    private readonly delegate;
    constructor(exclusions: FileNavigatorFilter.Exclusions);
    filter(item: {
        id: string;
    }): boolean;
    protected createDelegate(pattern: string): FileNavigatorFilter.Predicate;
}
//# sourceMappingURL=navigator-filter.d.ts.map