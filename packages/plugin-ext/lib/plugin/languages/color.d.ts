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
import * as theia from '@theia/plugin';
import { URI } from 'vscode-uri';
import { DocumentsExtImpl } from '../documents';
import { RawColorInfo } from '../../common/plugin-api-rpc';
import { ColorPresentation } from '../../common/plugin-api-rpc-model';
export declare class ColorProviderAdapter {
    private documents;
    private provider;
    constructor(documents: DocumentsExtImpl, provider: theia.DocumentColorProvider);
    provideColors(resource: URI, token: theia.CancellationToken): Promise<RawColorInfo[]>;
    provideColorPresentations(resource: URI, raw: RawColorInfo, token: theia.CancellationToken): Promise<ColorPresentation[]>;
}
//# sourceMappingURL=color.d.ts.map