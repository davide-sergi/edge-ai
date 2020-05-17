/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
import { JsonRpcServer } from '@theia/core/lib/common/messaging/proxy-factory';
import { Disposable } from '@theia/core';
export interface TerminalProcessInfo {
    executable: string;
    arguments: string[];
}
export interface IBaseTerminalServerOptions {
}
export interface IBaseTerminalServer extends JsonRpcServer<IBaseTerminalClient> {
    create(IBaseTerminalServerOptions: object): Promise<number>;
    getProcessId(id: number): Promise<number>;
    getProcessInfo(id: number): Promise<TerminalProcessInfo>;
    getCwdURI(id: number): Promise<string>;
    resize(id: number, cols: number, rows: number): Promise<void>;
    attach(id: number): Promise<number>;
    close(id: number): Promise<void>;
    getDefaultShell(): Promise<string>;
}
export declare namespace IBaseTerminalServer {
    function validateId(id?: number): boolean;
}
export interface IBaseTerminalExitEvent {
    terminalId: number;
    code?: number;
    signal?: string;
}
export interface IBaseTerminalErrorEvent {
    terminalId: number;
    error: Error;
}
export interface IBaseTerminalClient {
    onTerminalExitChanged(event: IBaseTerminalExitEvent): void;
    onTerminalError(event: IBaseTerminalErrorEvent): void;
}
export declare class DispatchingBaseTerminalClient {
    protected readonly clients: Set<IBaseTerminalClient>;
    push(client: IBaseTerminalClient): Disposable;
    onTerminalExitChanged(event: IBaseTerminalExitEvent): void;
    onTerminalError(event: IBaseTerminalErrorEvent): void;
}
//# sourceMappingURL=base-terminal-protocol.d.ts.map