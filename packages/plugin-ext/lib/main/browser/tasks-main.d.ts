/********************************************************************************
 * Copyright (C) 2018 Red Hat, Inc. and others.
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
import { TasksMain, TaskExecutionDto, TaskDto } from '../../common/plugin-api-rpc';
import { RPCProtocol } from '../../common/rpc-protocol';
import { Disposable } from '@theia/core/lib/common';
import { TaskProvider, TaskResolver } from '@theia/task/lib/browser/task-contribution';
import { interfaces } from 'inversify';
import { TaskConfiguration } from '@theia/task/lib/common/task-protocol';
export declare class TasksMainImpl implements TasksMain, Disposable {
    private readonly proxy;
    private readonly taskProviderRegistry;
    private readonly taskResolverRegistry;
    private readonly taskWatcher;
    private readonly taskService;
    private readonly taskDefinitionRegistry;
    private readonly taskProviders;
    private readonly toDispose;
    constructor(rpc: RPCProtocol, container: interfaces.Container);
    dispose(): void;
    $registerTaskProvider(handle: number, type: string): void;
    $unregister(handle: number): void;
    $fetchTasks(taskVersion: string | undefined, taskType: string | undefined): Promise<TaskDto[]>;
    $executeTask(taskDto: TaskDto): Promise<TaskExecutionDto | undefined>;
    $taskExecutions(): Promise<{
        id: number;
        task: TaskDto;
    }[]>;
    $terminateTask(id: number): void;
    protected createTaskProvider(handle: number): TaskProvider;
    protected createTaskResolver(handle: number): TaskResolver;
    protected toTaskConfiguration(taskDto: TaskDto): TaskConfiguration;
    protected fromTaskConfiguration(task: TaskConfiguration): TaskDto;
}
//# sourceMappingURL=tasks-main.d.ts.map