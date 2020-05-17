/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import URI from '@theia/core/lib/common/uri';
import { Emitter, Event } from '@theia/core/lib/common/event';
import { EditorManager, EditorWidget } from '@theia/editor/lib/browser';
import { PreferenceProvider } from '@theia/core/lib/browser';
import { QuickPickService } from '@theia/core/lib/common/quick-pick-service';
import { WorkspaceService } from '@theia/workspace/lib/browser/workspace-service';
import { TaskConfigurationModel } from './task-configuration-model';
import { TaskTemplateSelector } from './task-templates';
import { TaskCustomization, TaskConfiguration, TaskConfigurationScope } from '../common/task-protocol';
import { WorkspaceVariableContribution } from '@theia/workspace/lib/browser/workspace-variable-contribution';
import { FileSystem } from '@theia/filesystem/lib/common';
import { FileChangeType } from '@theia/filesystem/lib/common/filesystem-watcher-protocol';
import { PreferenceConfigurations } from '@theia/core/lib/browser/preferences/preference-configurations';
export interface TasksChange {
    scope: TaskConfigurationScope;
    type: FileChangeType;
}
/**
 * This class connnects the the "tasks" preferences sections to task system: it collects tasks preference values and
 * provides them to the task system as raw, parsed JSON.
 */
export declare class TaskConfigurationManager {
    protected readonly workspaceService: WorkspaceService;
    protected readonly editorManager: EditorManager;
    protected readonly quickPick: QuickPickService;
    protected readonly filesystem: FileSystem;
    protected readonly folderPreferences: PreferenceProvider;
    protected readonly userPreferences: PreferenceProvider;
    protected readonly preferenceConfigurations: PreferenceConfigurations;
    protected readonly workspaceVariables: WorkspaceVariableContribution;
    protected readonly taskTemplateSelector: TaskTemplateSelector;
    protected readonly onDidChangeTaskConfigEmitter: Emitter<TasksChange>;
    readonly onDidChangeTaskConfig: Event<TasksChange>;
    protected readonly models: Map<string, TaskConfigurationModel>;
    protected userModel: TaskConfigurationModel;
    protected init(): Promise<void>;
    protected updateModels: () => Promise<void>;
    getTasks(scope: TaskConfigurationScope): (TaskCustomization | TaskConfiguration)[];
    getTask(name: string, scope: TaskConfigurationScope): TaskCustomization | TaskConfiguration | undefined;
    openConfiguration(scope: TaskConfigurationScope): Promise<void>;
    addTaskConfiguration(sourceFolderUri: string, taskConfig: TaskCustomization): Promise<boolean>;
    setTaskConfigurations(sourceFolderUri: string, taskConfigs: (TaskCustomization | TaskConfiguration)[]): Promise<boolean>;
    private getModel;
    protected doOpen(model: TaskConfigurationModel): Promise<EditorWidget | undefined>;
    protected doCreate(model: TaskConfigurationModel): Promise<URI | undefined>;
    protected getInitialConfigurationContent(): Promise<string | undefined>;
}
export declare namespace TaskConfigurationManager {
    interface Data {
        current?: {
            name: string;
            workspaceFolderUri?: string;
        };
    }
}
//# sourceMappingURL=task-configuration-manager.d.ts.map