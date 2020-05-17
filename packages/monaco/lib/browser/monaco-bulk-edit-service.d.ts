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
import { MonacoWorkspace } from './monaco-workspace';
export declare class MonacoBulkEditService implements monaco.editor.IBulkEditService {
    protected readonly workspace: MonacoWorkspace;
    apply(edit: monaco.languages.WorkspaceEdit): Promise<monaco.editor.IBulkEditResult>;
}
//# sourceMappingURL=monaco-bulk-edit-service.d.ts.map