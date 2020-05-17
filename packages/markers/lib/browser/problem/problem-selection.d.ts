/********************************************************************************
 * Copyright (C) 2019 Ericsson and others.
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
import { SelectionService } from '@theia/core/lib/common/selection-service';
import { SelectionCommandHandler } from '@theia/core/lib/common/selection-command-handler';
import { Marker } from '../../common/marker';
export interface ProblemSelection {
    marker: Marker<object>;
}
export declare namespace ProblemSelection {
    function is(arg: Object | undefined): arg is ProblemSelection;
    class CommandHandler extends SelectionCommandHandler<ProblemSelection> {
        protected readonly selectionService: SelectionService;
        protected readonly options: SelectionCommandHandler.Options<ProblemSelection>;
        constructor(selectionService: SelectionService, options: SelectionCommandHandler.Options<ProblemSelection>);
    }
}
//# sourceMappingURL=problem-selection.d.ts.map