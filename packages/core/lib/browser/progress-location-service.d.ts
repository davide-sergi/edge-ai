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
import { CancellationToken } from '../common/cancellation';
import { ProgressClient } from '../common/progress-service-protocol';
import { ProgressMessage, ProgressUpdate } from '../common/message-service-protocol';
import { Event, Emitter } from '../common/event';
export interface LocationProgress {
    show: boolean;
}
export declare class ProgressLocationService implements ProgressClient {
    protected emitters: Map<string, Emitter<LocationProgress>[]>;
    protected lastEvents: Map<string, LocationProgress>;
    getProgress(locationId: string): LocationProgress | undefined;
    onProgress(locationId: string): Event<LocationProgress>;
    protected addEmitter(locationId: string): Emitter<LocationProgress>;
    protected readonly progressByLocation: Map<string, Set<string>>;
    showProgress(progressId: string, message: ProgressMessage, cancellationToken: CancellationToken): Promise<string | undefined>;
    protected processEvent(progressId: string, locationId: string, event: 'start' | 'done'): void;
    protected fireEvent(locationId: string, show: boolean): void;
    protected getOrCreateEmitters(locationId: string): Emitter<LocationProgress>[];
    protected getLocationId(message: ProgressMessage): string;
    reportProgress(progressId: string, update: ProgressUpdate, message: ProgressMessage, cancellationToken: CancellationToken): Promise<void>;
}
//# sourceMappingURL=progress-location-service.d.ts.map