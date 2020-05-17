/********************************************************************************
 * Copyright (C) 2019 TypeFox and others.
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
import { ColorRegistry, ColorDefinition, Color } from '@theia/core/lib/browser/color-registry';
import { Disposable } from '@theia/core/lib/common/disposable';
export declare class MonacoColorRegistry extends ColorRegistry {
    protected readonly monacoThemeService: monaco.services.IStandaloneThemeService;
    protected readonly monacoColorRegistry: monaco.color.IColorRegistry;
    getColors(): IterableIterator<string>;
    getCurrentColor(id: string): string | undefined;
    protected doRegister(definition: ColorDefinition): Disposable;
    protected toColor(value: Color | undefined): monaco.color.ColorValue | undefined;
}
//# sourceMappingURL=monaco-color-registry.d.ts.map