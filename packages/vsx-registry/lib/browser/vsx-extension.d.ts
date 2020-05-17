/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import { TreeElement } from '@theia/core/lib/browser/source-tree';
import { OpenerService, OpenerOptions } from '@theia/core/lib/browser/opener-service';
import { HostedPluginSupport } from '@theia/plugin-ext/lib/hosted/browser/hosted-plugin';
import { PluginServer, DeployedPlugin } from '@theia/plugin-ext/lib/common/plugin-protocol';
import { ProgressService } from '@theia/core/lib/common/progress-service';
import { VSXEnvironment } from '../common/vsx-environment';
import { VSXExtensionsSearchModel } from './vsx-extensions-search-model';
import { VSXExtensionNamespaceAccess, VSXUser } from '../common/vsx-registry-types';
export declare class VSXExtensionData {
    readonly version?: string;
    readonly iconUrl?: string;
    readonly publisher?: string;
    readonly name?: string;
    readonly displayName?: string;
    readonly description?: string;
    readonly averageRating?: number;
    readonly downloadCount?: number;
    readonly readmeUrl?: string;
    readonly licenseUrl?: string;
    readonly repository?: string;
    readonly license?: string;
    readonly readme?: string;
    readonly preview?: boolean;
    readonly namespaceAccess?: VSXExtensionNamespaceAccess;
    readonly publishedBy?: VSXUser;
    static KEYS: Set<(keyof VSXExtensionData)>;
}
export declare class VSXExtensionOptions {
    readonly id: string;
}
export declare const VSXExtensionFactory: unique symbol;
export declare type VSXExtensionFactory = (options: VSXExtensionOptions) => VSXExtension;
export declare class VSXExtension implements VSXExtensionData, TreeElement {
    protected readonly options: VSXExtensionOptions;
    protected readonly openerService: OpenerService;
    protected readonly pluginSupport: HostedPluginSupport;
    protected readonly pluginServer: PluginServer;
    protected readonly progressService: ProgressService;
    readonly environment: VSXEnvironment;
    readonly search: VSXExtensionsSearchModel;
    protected readonly data: Partial<VSXExtensionData>;
    get uri(): URI;
    get id(): string;
    get visible(): boolean;
    get plugin(): DeployedPlugin | undefined;
    get installed(): boolean;
    get builtin(): boolean;
    update(data: Partial<VSXExtensionData>): void;
    protected getData<K extends keyof VSXExtensionData>(key: K): VSXExtensionData[K];
    get iconUrl(): string | undefined;
    get publisher(): string | undefined;
    get name(): string | undefined;
    get displayName(): string | undefined;
    get description(): string | undefined;
    get version(): string | undefined;
    get averageRating(): number | undefined;
    get downloadCount(): number | undefined;
    get readmeUrl(): string | undefined;
    get licenseUrl(): string | undefined;
    get repository(): string | undefined;
    get license(): string | undefined;
    get readme(): string | undefined;
    get preview(): boolean | undefined;
    get namespaceAccess(): VSXExtensionNamespaceAccess | undefined;
    get publishedBy(): VSXUser | undefined;
    protected _busy: number;
    get busy(): boolean;
    install(): Promise<void>;
    uninstall(): Promise<void>;
    open(options?: OpenerOptions): Promise<void>;
    doOpen(uri: URI, options?: OpenerOptions): Promise<void>;
    render(): React.ReactNode;
    renderEditor(): React.ReactNode;
}
export declare abstract class AbstractVSXExtensionComponent extends React.Component<AbstractVSXExtensionComponent.Props> {
    readonly install: () => Promise<void>;
    readonly uninstall: () => Promise<void>;
    protected renderAction(): React.ReactNode;
}
export declare namespace AbstractVSXExtensionComponent {
    interface Props {
        extension: VSXExtension;
    }
}
export declare class VSXExtensionComponent extends AbstractVSXExtensionComponent {
    render(): React.ReactNode;
}
export declare class VSXExtensionEditorComponent extends AbstractVSXExtensionComponent {
    render(): React.ReactNode;
    protected renderNamespaceAccess(): React.ReactNode;
    protected renderStars(): React.ReactNode;
    protected body: HTMLElement | undefined;
    readonly openLink: (event: React.MouseEvent) => void;
    readonly openExtension: (e: React.MouseEvent) => Promise<void>;
    readonly searchPublisher: (e: React.MouseEvent) => void;
    readonly openPublishedBy: (e: React.MouseEvent) => Promise<void>;
    readonly openAverageRating: (e: React.MouseEvent) => Promise<void>;
    readonly openRepository: (e: React.MouseEvent) => void;
    readonly openLicense: (e: React.MouseEvent) => void;
}
//# sourceMappingURL=vsx-extension.d.ts.map