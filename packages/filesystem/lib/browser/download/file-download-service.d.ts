/********************************************************************************
 * Copyright (C) 2018 TypeFox and others.
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
import URI from '@theia/core/lib/common/uri';
import { ILogger } from '@theia/core/lib/common/logger';
import { FileSystem } from '../../common/filesystem';
import { FileDownloadData } from '../../common/download/file-download-data';
import { MessageService } from '@theia/core/lib/common/message-service';
export declare class FileDownloadService {
    protected anchor: HTMLAnchorElement | undefined;
    protected downloadCounter: number;
    protected readonly logger: ILogger;
    protected readonly fileSystem: FileSystem;
    protected readonly messageService: MessageService;
    protected handleCopy(event: ClipboardEvent, downloadUrl: string): void;
    cancelDownload(id: string): Promise<void>;
    download(uris: URI[], options?: FileDownloadService.DownloadOptions): Promise<void>;
    protected forceDownload(id: string, title: string): Promise<void>;
    protected request(uris: URI[]): Request;
    protected requestInit(uris: URI[]): RequestInit;
    protected body(uris: URI[]): FileDownloadData;
    protected url(uris: URI[]): string;
    protected endpoint(): string;
    protected filesUrl(): string;
}
export declare namespace FileDownloadService {
    interface DownloadOptions {
        /**
         * `true` if the download link has to be copied to the clipboard. This will not trigger the actual download. Defaults to `false`.
         */
        readonly copyLink?: boolean;
    }
}
//# sourceMappingURL=file-download-service.d.ts.map