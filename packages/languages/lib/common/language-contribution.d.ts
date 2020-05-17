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
export interface LanguageContribution {
    readonly id: string;
    readonly name: string;
}
export declare namespace LanguageContribution {
    const servicePath = "/services/languages";
    function getPath(contribution: LanguageContribution, sessionId?: string): string;
    const Service: unique symbol;
    interface Service {
        create(contributionId: string, parameters: any): Promise<string>;
        destroy(sessionId: string): Promise<void>;
    }
}
//# sourceMappingURL=language-contribution.d.ts.map