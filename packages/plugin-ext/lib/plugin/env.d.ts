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
import { RPCProtocol } from '../common/rpc-protocol';
import { QueryParameters } from '../common/env';
export declare abstract class EnvExtImpl {
    private proxy;
    private queryParameters;
    private lang;
    private applicationName;
    private defaultShell;
    private envMachineId;
    private envSessionId;
    constructor(rpc: RPCProtocol);
    getEnvVariable(envVarName: string): Promise<string | undefined>;
    getQueryParameter(queryParamName: string): string | string[] | undefined;
    getQueryParameters(): QueryParameters;
    setQueryParameters(queryParams: QueryParameters): void;
    setApplicationName(applicationName: string): void;
    setLanguage(lang: string): void;
    setShell(shell: string): void;
    getClientOperatingSystem(): Promise<theia.OperatingSystem>;
    get appName(): string;
    abstract get appRoot(): string;
    get language(): string;
    get machineId(): string;
    get sessionId(): string;
    get uriScheme(): string;
    get shell(): string;
}
//# sourceMappingURL=env.d.ts.map