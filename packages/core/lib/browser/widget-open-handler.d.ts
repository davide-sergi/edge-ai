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
import URI from '../common/uri';
import { MaybePromise, Emitter, Event } from '../common';
import { BaseWidget } from './widgets';
import { ApplicationShell } from './shell';
import { OpenHandler, OpenerOptions } from './opener-service';
import { WidgetManager } from './widget-manager';
export declare type WidgetOpenMode = 'open' | 'reveal' | 'activate';
export interface WidgetOpenerOptions extends OpenerOptions {
    /**
     * Whether the widget should be only opened, revealed or activated.
     * By default is `activate`.
     */
    mode?: WidgetOpenMode;
    /**
     * Specify how an opened widget should be added to the shell.
     * By default to the main area.
     */
    widgetOptions?: ApplicationShell.WidgetOptions;
}
export declare abstract class WidgetOpenHandler<W extends BaseWidget> implements OpenHandler {
    protected readonly shell: ApplicationShell;
    protected readonly widgetManager: WidgetManager;
    protected readonly onCreatedEmitter: Emitter<W>;
    /**
     * Emit when a new widget is created.
     */
    readonly onCreated: Event<W>;
    protected init(): void;
    /**
     * The widget open handler id.
     *
     * #### Implementation
     * - A widget factory for this id should be registered.
     * - Subclasses should not implement `WidgetFactory`
     * to avoid exposing capabilities to create a widget outside of `WidgetManager`.
     */
    abstract readonly id: string;
    abstract canHandle(uri: URI, options?: WidgetOpenerOptions): MaybePromise<number>;
    /**
     * Open a widget for the given uri and options.
     * Reject if the given options is not an widget options or a widget cannot be opened.
     */
    open(uri: URI, options?: WidgetOpenerOptions): Promise<W>;
    protected doOpen(widget: W, options?: WidgetOpenerOptions): Promise<void>;
    /**
     * Return an existing widget for the given uri.
     */
    getByUri(uri: URI): Promise<W | undefined>;
    /**
     * Return an existing widget for the given uri or creates a new one.
     *
     * It does not open a widget, use `open` instead.
     */
    getOrCreateByUri(uri: URI): Promise<W>;
    /**
     * All opened widgets.
     */
    get all(): W[];
    protected getWidget(uri: URI, options?: WidgetOpenerOptions): Promise<W | undefined>;
    protected getOrCreateWidget(uri: URI, options?: WidgetOpenerOptions): Promise<W>;
    protected abstract createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): Object;
    closeAll(options?: ApplicationShell.CloseOptions): Promise<W[]>;
}
//# sourceMappingURL=widget-open-handler.d.ts.map