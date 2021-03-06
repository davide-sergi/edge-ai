/********************************************************************************
 * Copyright (C) 2018 Ericsson and others.
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
import { interfaces } from 'inversify';
import { PreferenceProxy, PreferenceService, PreferenceSchema, PreferenceChangeEvent } from '@theia/core/lib/browser/preferences';
export declare const EDITOR_FONT_DEFAULTS: {
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing: number;
};
export declare const EDITOR_MODEL_DEFAULTS: {
    tabSize: number;
    indentSize: number;
    insertSpaces: boolean;
    detectIndentation: boolean;
    trimAutoWhitespace: boolean;
    largeFileOptimizations: boolean;
};
declare const codeEditorPreferenceProperties: {
    'editor.tabSize': {
        type: string;
        default: number;
        minimum: number;
        markdownDescription: string;
    };
    'editor.insertSpaces': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.detectIndentation': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.trimAutoWhitespace': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.largeFileOptimizations': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.wordBasedSuggestions': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.stablePeek': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.maxTokenizationLineLength': {
        type: string;
        default: number;
        description: string;
    };
    'diffEditor.maxComputationTime': {
        type: string;
        default: number;
        description: string;
    };
    'diffEditor.renderSideBySide': {
        type: string;
        default: boolean;
        description: string;
    };
    'diffEditor.ignoreTrimWhitespace': {
        type: string;
        default: boolean;
        description: string;
    };
    'diffEditor.renderIndicators': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.acceptSuggestionOnCommitCharacter': {
        markdownDescription: string;
        type: string;
        default: boolean;
    };
    'editor.acceptSuggestionOnEnter': {
        markdownEnumDescriptions: string[];
        markdownDescription: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.accessibilitySupport': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        default: string;
        description: string;
    };
    'editor.accessibilityPageSize': {
        description: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.autoClosingBrackets': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.autoClosingOvertype': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.autoClosingQuotes': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.autoIndent': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.autoSurround': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.codeLens': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.colorDecorators': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.copyWithSyntaxHighlighting': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.cursorBlinking': {
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.cursorSmoothCaretAnimation': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.cursorStyle': {
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.cursorSurroundingLines': {
        description: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.cursorSurroundingLinesStyle': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.cursorWidth': {
        markdownDescription: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.dragAndDrop': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.emptySelectionClipboard': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.fastScrollSensitivity': {
        markdownDescription: string;
        type: string;
        default: number;
    };
    'editor.find.seedSearchStringFromSelection': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.find.autoFindInSelection': {
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
        description: string;
    };
    'editor.find.globalFindClipboard': {
        type: string;
        default: boolean;
        description: string;
        included: boolean;
    };
    'editor.find.addExtraSpaceOnTop': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.folding': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.foldingStrategy': {
        markdownDescription: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.fontFamily': {
        description: string;
        type: string;
        default: string;
    };
    'editor.fontLigatures': {
        anyOf: {
            type: string;
            description: string;
        }[];
        description: string;
        default: boolean;
    };
    'editor.fontSize': {
        type: string;
        minimum: number;
        maximum: number;
        default: number;
        description: string;
    };
    'editor.fontWeight': {
        enum: string[];
        description: string;
        type: string;
        default: string;
    };
    'editor.formatOnPaste': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.formatOnType': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.glyphMargin': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.gotoLocation.multiple': {
        type: string;
        default: string;
        deprecationMessage: string;
    };
    'editor.gotoLocation.multipleDefinitions': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.gotoLocation.multipleTypeDefinitions': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.gotoLocation.multipleDeclarations': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.gotoLocation.multipleImplementations': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.gotoLocation.multipleReferences': {
        description: string;
        type: string;
        enum: string[];
        default: string;
        enumDescriptions: string[];
    };
    'editor.gotoLocation.alternativeDefinitionCommand': {
        type: string;
        default: string;
        description: string;
    };
    'editor.gotoLocation.alternativeTypeDefinitionCommand': {
        type: string;
        default: string;
        description: string;
    };
    'editor.gotoLocation.alternativeDeclarationCommand': {
        type: string;
        default: string;
        description: string;
    };
    'editor.gotoLocation.alternativeImplementationCommand': {
        type: string;
        default: string;
        description: string;
    };
    'editor.gotoLocation.alternativeReferenceCommand': {
        type: string;
        default: string;
        description: string;
    };
    'editor.hideCursorInOverviewRuler': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.highlightActiveIndentGuide': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.hover.enabled': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.hover.delay': {
        type: string;
        default: number;
        description: string;
    };
    'editor.hover.sticky': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.letterSpacing': {
        description: string;
        type: string;
        default: number;
    };
    'editor.lightbulb.enabled': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.lineHeight': {
        description: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.lineNumbers': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        default: string;
        description: string;
    };
    'editor.links': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.matchBrackets': {
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.minimap.enabled': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.minimap.side': {
        type: string;
        enum: string[];
        default: string;
        description: string;
    };
    'editor.minimap.showSlider': {
        type: string;
        enum: string[];
        default: string;
        description: string;
    };
    'editor.minimap.scale': {
        type: string;
        default: number;
        minimum: number;
        maximum: number;
        description: string;
    };
    'editor.minimap.renderCharacters': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.minimap.maxColumn': {
        type: string;
        default: number;
        description: string;
    };
    'editor.mouseWheelScrollSensitivity': {
        markdownDescription: string;
        type: string;
        default: number;
    };
    'editor.mouseWheelZoom': {
        markdownDescription: string;
        type: string;
        default: boolean;
    };
    'editor.multiCursorMergeOverlapping': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.multiCursorModifier': {
        markdownEnumDescriptions: string[];
        markdownDescription: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.multiCursorPaste': {
        markdownEnumDescriptions: string[];
        markdownDescription: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.occurrencesHighlight': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.overviewRulerBorder': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.parameterHints.enabled': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.parameterHints.cycle': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.quickSuggestions': {
        anyOf: ({
            type: string;
            properties?: undefined;
        } | {
            type: string;
            properties: {
                strings: {
                    type: string;
                    default: boolean;
                    description: string;
                };
                comments: {
                    type: string;
                    default: boolean;
                    description: string;
                };
                other: {
                    type: string;
                    default: boolean;
                    description: string;
                };
            };
        })[];
        default: {
            other: boolean;
            comments: boolean;
            strings: boolean;
        };
        description: string;
    };
    'editor.quickSuggestionsDelay': {
        description: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.renderControlCharacters': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.renderIndentGuides': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.renderFinalNewline': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.renderLineHighlight': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.renderWhitespace': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.roundedSelection': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.rulers': {
        type: string;
        items: {
            type: string;
        };
        default: never[];
        description: string;
    };
    'editor.scrollBeyondLastColumn': {
        description: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.scrollBeyondLastLine': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.selectionClipboard': {
        description: string;
        included: boolean;
        type: string;
        default: boolean;
    };
    'editor.selectionHighlight': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.showFoldingControls': {
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.showUnused': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.snippetSuggestions': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.smoothScrolling': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.suggest.insertMode': {
        type: string;
        enum: string[];
        enumDescriptions: string[];
        default: string;
        description: string;
    };
    'editor.suggest.insertHighlight': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.filterGraceful': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.localityBonus': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.shareSuggestSelections': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.snippetsPreventQuickSuggestions': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.showIcons': {
        type: string;
        default: boolean;
        description: string;
    };
    'editor.suggest.maxVisibleSuggestions': {
        type: string;
        default: number;
        minimum: number;
        maximum: number;
        description: string;
    };
    'editor.suggest.filteredTypes': {
        type: string;
        default: {};
        deprecationMessage: string;
    };
    'editor.suggest.showMethods': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showFunctions': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showConstructors': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showFields': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showVariables': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showClasses': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showStructs': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showInterfaces': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showModules': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showProperties': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showEvents': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showOperators': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showUnits': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showValues': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showConstants': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showEnums': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showEnumMembers': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showKeywords': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showWords': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showColors': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showFiles': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showReferences': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showCustomcolors': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showFolders': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showTypeParameters': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggest.showSnippets': {
        type: string;
        default: boolean;
        markdownDescription: string;
    };
    'editor.suggestFontSize': {
        markdownDescription: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.suggestLineHeight': {
        markdownDescription: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.suggestOnTriggerCharacters': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.suggestSelection': {
        markdownEnumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.tabCompletion': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.useTabStops': {
        description: string;
        type: string;
        default: boolean;
    };
    'editor.wordSeparators': {
        description: string;
        type: string;
        default: string;
    };
    'editor.wordWrap': {
        markdownEnumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
    'editor.wordWrapColumn': {
        markdownDescription: string;
        type: string;
        default: number;
        minimum: number;
        maximum: number;
    };
    'editor.wrappingIndent': {
        enumDescriptions: string[];
        description: string;
        type: string;
        enum: string[];
        default: string;
    };
};
export declare const editorPreferenceSchema: PreferenceSchema;
declare type CodeEditorPreferenceProperties = typeof codeEditorPreferenceProperties;
export declare type CodeEditorConfiguration = {
    [P in keyof CodeEditorPreferenceProperties]: CodeEditorPreferenceProperties[P] extends {
        enum: string[];
    } ? CodeEditorPreferenceProperties[P]['enum'][number] : CodeEditorPreferenceProperties[P]['default'];
};
export interface EditorConfiguration extends CodeEditorConfiguration {
    'editor.autoSave': 'on' | 'off';
    'editor.autoSaveDelay': number;
    'editor.formatOnSave': boolean;
    'editor.formatOnSaveTimeout': number;
    'files.eol': EndOfLinePreference;
    'files.encoding': string;
}
export declare type EndOfLinePreference = '\n' | '\r\n' | 'auto';
export declare type EditorPreferenceChange = PreferenceChangeEvent<EditorConfiguration>;
export declare const EditorPreferences: unique symbol;
export declare type EditorPreferences = PreferenceProxy<EditorConfiguration>;
export declare function createEditorPreferences(preferences: PreferenceService): EditorPreferences;
export declare function bindEditorPreferences(bind: interfaces.Bind): void;
export {};
//# sourceMappingURL=editor-preferences.d.ts.map