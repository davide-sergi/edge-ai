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
import URI from '../common/uri';
import { LabelProviderContribution, LabelProvider, DidChangeLabelEvent } from './label-provider';
export declare namespace DiffUris {
    const DIFF_SCHEME = "diff";
    function encode(left: URI, right: URI, label?: string): URI;
    function decode(uri: URI): URI[];
    function isDiffUri(uri: URI): boolean;
}
export declare class DiffUriLabelProviderContribution implements LabelProviderContribution {
    protected labelProvider: LabelProvider;
    constructor(labelProvider: LabelProvider);
    canHandle(element: object): number;
    getLongName(uri: URI): string;
    getName(uri: URI): string;
    getIcon(uri: URI): string;
    affects(diffUri: URI, event: DidChangeLabelEvent): boolean;
}
//# sourceMappingURL=diff-uris.d.ts.map