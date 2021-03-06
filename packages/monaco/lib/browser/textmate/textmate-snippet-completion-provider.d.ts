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
/// <reference types="@theia/monaco-editor-core/monaco" />
/**
 * @deprecated use MonacoSnippetSuggestProvider instead
 */
export declare class TextmateSnippetCompletionProvider implements monaco.languages.CompletionItemProvider {
    protected config: TextmateSnippets;
    protected mdLanguage: string;
    private items;
    constructor(config: TextmateSnippets, mdLanguage?: string);
    protected replaceVariables(textmateSnippet: string): string;
    provideCompletionItems(document: monaco.editor.ITextModel, position: monaco.Position, context: monaco.languages.CompletionContext, token: monaco.CancellationToken): monaco.languages.CompletionList;
}
/**
 * @deprecated use JsonSerializedSnippets & MonacoSnippetSuggestProvider instead
 */
export interface TextmateSnippets {
    [name: string]: TextmateSnippet;
}
/**
 * @deprecated use JsonSerializedSnippet & MonacoSnippetSuggestProvider instead
 */
export interface TextmateSnippet {
    readonly prefix: string;
    readonly body: string[];
    readonly description: string;
}
//# sourceMappingURL=textmate-snippet-completion-provider.d.ts.map