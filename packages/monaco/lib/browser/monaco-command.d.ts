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
import { ProtocolToMonacoConverter } from 'monaco-languageclient/lib';
import { CommandContribution, CommandRegistry } from '@theia/core/lib/common/command';
import { QuickOpenService } from '@theia/core/lib/browser/quick-open/quick-open-service';
import { MonacoEditor } from './monaco-editor';
import { MonacoCommandRegistry, MonacoEditorCommandHandler } from './monaco-command-registry';
import { MonacoEditorService } from './monaco-editor-service';
import { MonacoTextModelService } from './monaco-text-model-service';
export declare namespace MonacoCommands {
    const COMMON_ACTIONS: Map<string, string>;
    const GO_TO_DEFINITION = "editor.action.revealDefinition";
    const EXCLUDE_ACTIONS: Set<string>;
}
export declare class MonacoEditorCommandHandlers implements CommandContribution {
    protected readonly monacoCommandRegistry: MonacoCommandRegistry;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly p2m: ProtocolToMonacoConverter;
    protected readonly quickOpenService: QuickOpenService;
    protected readonly codeEditorService: MonacoEditorService;
    protected readonly textModelService: MonacoTextModelService;
    protected readonly contextKeyService: monaco.contextKeyService.ContextKeyService;
    registerCommands(): void;
    /**
     * Register commands from Monaco to Theia registry.
     *
     * Monaco has different kind of commands which should be handled differently by Theia.
     *
     * ### Editor Actions
     *
     * They should be registered with a label to be visible in the quick command palette.
     *
     * Such actions should be enabled only if the current editor is available and
     * it supports such action in the current context.
     *
     * ### Editor Commands
     *
     * Such actions should be enabled only if the current editor is available.
     *
     * `actions.find` and `editor.action.startFindReplaceAction` are registed as handlers for `find` and `replace`.
     * If handlers are not enabled then the core should prevent the default browser behaviour.
     * Other Theia extensions can register alternative implementations using custom enablement.
     *
     * ### Global Commands
     *
     * These commands are not necessary dependend on the current editor and enabled always.
     * But they depend on services which are global in VS Code, but bound to the editor in Monaco,
     * i.e. `ICodeEditorService` or `IContextKeyService`. We should take care of providing Theia implementations for such services.
     *
     * #### Global Native or Editor Commands
     *
     * Namely: `undo`, `redo` and `editor.action.selectAll`. They depend on `ICodeEditorService`.
     * They will try to delegate to the current editor and if it is not available delegate to the browser.
     * They are registered as handlers for corresponding core commands always.
     * Other Theia extensions can provide alternative implementations by introducing a dependency to `@theia/monaco` extension.
     *
     * #### Global Language Commands
     *
     * Like `_executeCodeActionProvider`, they depend on `ICodeEditorService` and `ITextModelService`.
     *
     * #### Global Context Commands
     *
     * It is `setContext`. It depends on `IContextKeyService`.
     *
     * #### Global Editor Commands
     *
     * Like `openReferenceToSide` and `openReference`, they depend on `IListService`.
     * We treat all commands which don't match any other category of global commands as global editor commands
     * and execute them using the instantiation service of the current editor.
     */
    protected registerMonacoCommands(): void;
    protected registerEditorCommandHandlers(): void;
    protected newShowReferenceHandler(): MonacoEditorCommandHandler;
    protected newConfigIndentationHandler(): MonacoEditorCommandHandler;
    protected configureIndentation(editor: MonacoEditor): void;
    protected newConfigEolHandler(): MonacoEditorCommandHandler;
    protected configureEol(editor: MonacoEditor): void;
    protected setEol(editor: MonacoEditor, lineEnding: string): void;
    protected newConfigTabSizeHandler(useSpaces: boolean): MonacoEditorCommandHandler;
    protected configureTabSize(editor: MonacoEditor, useSpaces: boolean): void;
}
//# sourceMappingURL=monaco-command.d.ts.map