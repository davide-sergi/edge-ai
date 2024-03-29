/********************************************************************************
 * Copyright (C) 2017-2018 Ericsson and others.
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
import '../../src/browser/styles/index.css';
import { ContainerModule, interfaces } from 'inversify';
import { SearchInWorkspaceResultTreeWidget } from './search-in-workspace-result-tree-widget';
declare const _default: ContainerModule;
export default _default;
export declare function createSearchTreeWidget(parent: interfaces.Container): SearchInWorkspaceResultTreeWidget;
//# sourceMappingURL=search-in-workspace-frontend-module.d.ts.map