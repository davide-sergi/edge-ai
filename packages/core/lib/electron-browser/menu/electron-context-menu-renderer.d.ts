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
import * as electron from 'electron';
import { ContextMenuRenderer, RenderContextMenuOptions, ContextMenuAccess } from '../../browser';
import { ElectronMainMenuFactory } from './electron-main-menu-factory';
import { ContextMenuContext } from '../../browser/menu/context-menu-context';
export declare class ElectronContextMenuAccess extends ContextMenuAccess {
    readonly menu: electron.Menu;
    constructor(menu: electron.Menu);
}
export declare class ElectronContextMenuRenderer extends ContextMenuRenderer {
    private menuFactory;
    protected readonly context: ContextMenuContext;
    constructor(menuFactory: ElectronMainMenuFactory);
    protected doRender({ menuPath, anchor, args, onHide }: RenderContextMenuOptions): ElectronContextMenuAccess;
}
//# sourceMappingURL=electron-context-menu-renderer.d.ts.map