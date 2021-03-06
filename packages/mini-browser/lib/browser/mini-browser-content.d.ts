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
import { Message } from '@phosphor/messaging';
import { ILogger } from '@theia/core/lib/common/logger';
import { Emitter } from '@theia/core/lib/common/event';
import { FileSystem } from '@theia/filesystem/lib/common/filesystem';
import { KeybindingRegistry } from '@theia/core/lib/browser/keybinding';
import { WindowService } from '@theia/core/lib/browser/window/window-service';
import { FileSystemWatcher } from '@theia/filesystem/lib/browser/filesystem-watcher';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import { BaseWidget } from '@theia/core/lib/browser/widgets/widget';
import { LocationMapperService } from './location-mapper-service';
import { ApplicationShellMouseTracker } from '@theia/core/lib/browser/shell/application-shell-mouse-tracker';
/**
 * Initializer properties for the embedded browser widget.
 */
export declare class MiniBrowserProps {
    /**
     * `show` if the toolbar should be visible. If `read-only`, the toolbar is visible but the address cannot be changed and it acts as a link instead.\
     * `hide` if the toolbar should be hidden. `show` by default. If the `startPage` is not defined, this property is always `show`.
     */
    readonly toolbar?: 'show' | 'hide' | 'read-only';
    /**
     * If defined, the browser will load this page on startup. Otherwise, it show a blank page.
     */
    readonly startPage?: string;
    /**
     * Sandbox options for the underlying `iframe`. Defaults to `SandboxOptions#DEFAULT` if not provided.
     */
    readonly sandbox?: MiniBrowserProps.SandboxOptions[];
    /**
     * The optional icon class for the widget.
     */
    readonly iconClass?: string;
    /**
     * The desired name of the widget.
     */
    readonly name?: string;
    /**
     * `true` if the `iFrame`'s background has to be reset to the default white color. Otherwise, `false`. `false` is the default.
     */
    readonly resetBackground?: boolean;
}
export declare namespace MiniBrowserProps {
    /**
     * Enumeration of the supported `sandbox` options for the `iframe`.
     */
    enum SandboxOptions {
        /**
         * Allows form submissions.
         */
        'allow-forms' = 0,
        /**
         * Allows popups, such as `window.open()`, `showModalDialog()`, `target=”_blank”`, etc.
         */
        'allow-popups' = 1,
        /**
         * Allows pointer lock.
         */
        'allow-pointer-lock' = 2,
        /**
         * Allows the document to maintain its origin. Pages loaded from https://example.com/ will retain access to that origin’s data.
         */
        'allow-same-origin' = 3,
        /**
         * Allows JavaScript execution. Also allows features to trigger automatically (as they’d be trivial to implement via JavaScript).
         */
        'allow-scripts' = 4,
        /**
         * Allows the document to break out of the frame by navigating the top-level `window`.
         */
        'allow-top-navigation' = 5,
        /**
         * Allows the embedded browsing context to open modal windows.
         */
        'allow-modals' = 6,
        /**
         * Allows the embedded browsing context to disable the ability to lock the screen orientation.
         */
        'allow-orientation-lock' = 7,
        /**
         * Allows a sandboxed document to open new windows without forcing the sandboxing flags upon them.
         * This will allow, for example, a third-party advertisement to be safely sandboxed without forcing the same restrictions upon a landing page.
         */
        'allow-popups-to-escape-sandbox' = 8,
        /**
         * Allows embedders to have control over whether an iframe can start a presentation session.
         */
        'allow-presentation' = 9,
        /**
         * Allows the embedded browsing context to navigate (load) content to the top-level browsing context only when initiated by a user gesture.
         * If this keyword is not used, this operation is not allowed.
         */
        'allow-top-navigation-by-user-activation' = 10
    }
    namespace SandboxOptions {
        /**
         * The default `sandbox` options, if other is not provided.
         *
         * See: https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/
         */
        const DEFAULT: SandboxOptions[];
    }
}
export declare const MiniBrowserContentFactory: unique symbol;
export declare type MiniBrowserContentFactory = (props: MiniBrowserProps) => MiniBrowserContent;
export declare class MiniBrowserContent extends BaseWidget {
    protected readonly props: MiniBrowserProps;
    protected readonly logger: ILogger;
    protected readonly windowService: WindowService;
    protected readonly locationMapper: LocationMapperService;
    protected readonly keybindings: KeybindingRegistry;
    protected readonly mouseTracker: ApplicationShellMouseTracker;
    protected readonly fileSystem: FileSystem;
    protected readonly fileSystemWatcher: FileSystemWatcher;
    protected readonly submitInputEmitter: Emitter<string>;
    protected readonly navigateBackEmitter: Emitter<void>;
    protected readonly navigateForwardEmitter: Emitter<void>;
    protected readonly refreshEmitter: Emitter<void>;
    protected readonly openEmitter: Emitter<void>;
    protected readonly input: HTMLInputElement;
    protected readonly loadIndicator: HTMLElement;
    protected readonly errorBar: HTMLElement & Readonly<{
        message: HTMLElement;
    }>;
    protected readonly frame: HTMLIFrameElement;
    protected readonly transparentOverlay: HTMLElement;
    protected readonly pdfContainer: HTMLElement;
    protected frameLoadTimeout: number;
    protected readonly initialHistoryLength: number;
    protected readonly toDisposeOnGo: DisposableCollection;
    constructor(props: MiniBrowserProps);
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected listenOnContentChange(location: string): Promise<void>;
    protected createToolbar(parent: HTMLElement): HTMLDivElement & Readonly<{
        input: HTMLInputElement;
    }>;
    protected getToolbarProps(): 'show' | 'hide' | 'read-only';
    protected createContentArea(parent: HTMLElement): HTMLElement & Readonly<{
        frame: HTMLIFrameElement;
        loadIndicator: HTMLElement;
        errorBar: HTMLElement & Readonly<{
            message: HTMLElement;
        }>;
        pdfContainer: HTMLElement;
        transparentOverlay: HTMLElement;
    }>;
    protected createIFrame(): HTMLIFrameElement;
    protected createErrorBar(): HTMLElement & Readonly<{
        message: HTMLElement;
    }>;
    protected onFrameLoad(): void;
    protected onFrameError(): void;
    protected onFrameTimeout(): void;
    protected showLoadIndicator(): void;
    protected hideLoadIndicator(): void;
    protected showErrorBar(message: string): void;
    protected hideErrorBar(): void;
    protected maybeResetBackground(): void;
    protected handleBack(): void;
    protected handleForward(): void;
    protected handleRefresh(): void;
    protected handleOpen(): void;
    protected createInput(parent: HTMLElement): HTMLInputElement;
    protected handleInputChange(e: KeyboardEvent): void;
    protected createPrevious(parent: HTMLElement): HTMLElement;
    protected createNext(parent: HTMLElement): HTMLElement;
    protected createRefresh(parent: HTMLElement): HTMLElement;
    protected createOpen(parent: HTMLElement): HTMLElement;
    protected createButton(parent: HTMLElement, title: string, ...className: string[]): HTMLElement;
    protected onClick(element: HTMLElement, emitter: Emitter<any>): HTMLElement;
    protected mapLocation(location: string): Promise<string>;
    protected setInput(value: string): void;
    protected frameSrc(): string;
    protected contentDocument(): Document | null;
    protected go(location: string, options?: Partial<{
        showLoadIndicator: boolean;
        preserveFocus: boolean;
    }>): Promise<void>;
}
//# sourceMappingURL=mini-browser-content.d.ts.map