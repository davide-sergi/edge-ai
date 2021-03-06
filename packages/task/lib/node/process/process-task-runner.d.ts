/********************************************************************************
 * Copyright (C) 2017-2019 Ericsson and others.
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
import { ILogger } from '@theia/core';
import { RawProcessFactory, TerminalProcessFactory } from '@theia/process/lib/node';
import { ShellQuotingFunctions } from '@theia/process/lib/common/shell-quoting';
import { TaskFactory } from './process-task';
import { TaskRunner } from '../task-runner';
import { Task } from '../task';
import { TaskConfiguration } from '../../common/task-protocol';
/**
 * Task runner that runs a task as a process or a command inside a shell.
 */
export declare class ProcessTaskRunner implements TaskRunner {
    protected readonly logger: ILogger;
    protected readonly rawProcessFactory: RawProcessFactory;
    protected readonly terminalProcessFactory: TerminalProcessFactory;
    protected readonly taskFactory: TaskFactory;
    /**
     * Runs a task from the given task configuration.
     * @param taskConfig task configuration to run a task from. The provided task configuration must have a shape of `CommandProperties`.
     */
    run(taskConfig: TaskConfiguration, ctx?: string): Promise<Task>;
    private getResolvedCommand;
    private getCommand;
    /**
     * This is task specific, to align with VS Code's behavior.
     *
     * When parsing arguments, VS Code will try to detect if the user already
     * tried to quote things.
     *
     * See: https://github.com/microsoft/vscode/blob/d363b988e1e58cf49963841c498681cdc6cb55a3/src/vs/workbench/contrib/tasks/browser/terminalTaskSystem.ts#L1101-L1127
     *
     * @param value
     * @param shellQuotingOptions
     */
    protected argumentNeedsQuotes(value: string, shellQuotingOptions: ShellQuotingFunctions): boolean;
    private getSystemSpecificCommand;
    protected asFsPath(uriOrPath: string): string;
    /**
     * @deprecated
     *
     * Remove ProcessTaskRunner.findCommand, introduce process "started" event
     * Checks for the existence of a file, at the provided path, and make sure that
     * it's readable and executable.
     */
    protected executableFileExists(filePath: string): Promise<boolean>;
}
//# sourceMappingURL=process-task-runner.d.ts.map