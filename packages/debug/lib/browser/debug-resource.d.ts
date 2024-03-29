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
import { Resource, ResourceResolver } from '@theia/core';
import URI from '@theia/core/lib/common/uri';
import { DebugSessionManager } from './debug-session-manager';
export declare class DebugResource implements Resource {
    uri: URI;
    protected readonly manager: DebugSessionManager;
    constructor(uri: URI, manager: DebugSessionManager);
    dispose(): void;
    readContents(): Promise<string>;
}
export declare class DebugResourceResolver implements ResourceResolver {
    protected readonly manager: DebugSessionManager;
    resolve(uri: URI): DebugResource;
}
//# sourceMappingURL=debug-resource.d.ts.map