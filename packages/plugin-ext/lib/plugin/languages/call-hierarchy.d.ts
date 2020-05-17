/********************************************************************************
 * Copyright (C) 2020 Red Hat, Inc. and others.
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
import { URI } from 'vscode-uri';
import * as theia from '@theia/plugin';
import { DocumentsExtImpl } from '../documents';
import * as model from '../../common/plugin-api-rpc-model';
import * as rpc from '../../common/plugin-api-rpc';
export declare class CallHierarchyAdapter {
    private readonly provider;
    private readonly documents;
    constructor(provider: theia.CallHierarchyProvider, documents: DocumentsExtImpl);
    provideRootDefinition(resource: URI, position: rpc.Position, token: theia.CancellationToken): Promise<model.CallHierarchyDefinition | undefined>;
    provideCallers(definition: model.CallHierarchyDefinition, token: theia.CancellationToken): Promise<model.CallHierarchyReference[] | undefined>;
    private fromCallHierarchyitem;
    private fromRange;
    private toRange;
    private toCallHierarchyItem;
    private fromCallHierarchyIncomingCall;
}
//# sourceMappingURL=call-hierarchy.d.ts.map