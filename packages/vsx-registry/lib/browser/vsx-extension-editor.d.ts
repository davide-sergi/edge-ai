/********************************************************************************
 * Copyright (C) 2020 TypeFox and others.
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
import * as React from 'react';
import { ReactWidget, Message } from '@theia/core/lib/browser';
import { VSXExtension } from './vsx-extension';
import { VSXExtensionsModel } from './vsx-extensions-model';
export declare class VSXExtensionEditor extends ReactWidget {
    static ID: string;
    protected readonly extension: VSXExtension;
    protected readonly model: VSXExtensionsModel;
    protected init(): void;
    protected onActivateRequest(msg: Message): void;
    protected onUpdateRequest(msg: Message): void;
    protected updateTitle(): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=vsx-extension-editor.d.ts.map