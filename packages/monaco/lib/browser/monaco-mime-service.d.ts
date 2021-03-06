/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
/// <reference types="lodash" />
import { MimeAssociation, MimeService } from '@theia/core/lib/browser/mime-service';
export declare class MonacoMimeService extends MimeService {
    protected associations: MimeAssociation[];
    protected updatingAssociations: boolean;
    constructor();
    setAssociations(associations: MimeAssociation[]): void;
    protected updateAssociations: (() => void) & import("lodash").Cancelable;
    protected getMimeForMode(langId: string): string | undefined;
}
//# sourceMappingURL=monaco-mime-service.d.ts.map