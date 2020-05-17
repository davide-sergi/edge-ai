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
/// <reference types="node" />
import { ILogger } from '@theia/core/lib/common';
import { Process, ProcessOptions } from './process';
import { ProcessManager } from './process-manager';
import { IPty } from '@theia/node-pty';
import { MultiRingBuffer, MultiRingBufferReadableStream } from './multi-ring-buffer';
import { DevNullStream } from './dev-null-stream';
import { Writable } from 'stream';
export declare const TerminalProcessOptions: unique symbol;
export interface TerminalProcessOptions extends ProcessOptions {
    /**
     * Windows only. Allow passing complex command lines already escaped for CommandLineToArgvW.
     */
    commandLine?: string;
}
export declare const TerminalProcessFactory: unique symbol;
export interface TerminalProcessFactory {
    (options: TerminalProcessOptions): TerminalProcess;
}
/**
 * Run arbitrary processes inside pseudo-terminals (PTY).
 *
 * Note: a PTY is not a shell process (bash/pwsh/cmd...)
 */
export declare class TerminalProcess extends Process {
    protected readonly options: TerminalProcessOptions;
    protected readonly ringBuffer: MultiRingBuffer;
    protected readonly terminal: IPty | undefined;
    readonly outputStream: MultiRingBufferReadableStream;
    readonly errorStream: DevNullStream;
    readonly inputStream: Writable;
    constructor(// eslint-disable-next-line @typescript-eslint/indent
    options: TerminalProcessOptions, processManager: ProcessManager, ringBuffer: MultiRingBuffer, logger: ILogger);
    createOutputStream(): MultiRingBufferReadableStream;
    get pid(): number;
    get executable(): string;
    get arguments(): string[];
    kill(signal?: string): void;
    resize(cols: number, rows: number): void;
    write(data: string): void;
    protected checkTerminal(): void | never;
}
//# sourceMappingURL=terminal-process.d.ts.map