"use strict";
/********************************************************************************
 * Copyright (C) 2017 Ericsson and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindUserStorage = void 0;
var inversify_1 = require("inversify");
var common_1 = require("@theia/core/lib/common");
var user_storage_resource_1 = require("./user-storage-resource");
var user_storage_service_filesystem_1 = require("./user-storage-service-filesystem");
var user_storage_service_1 = require("./user-storage-service");
function bindUserStorage(bind) {
    bind(common_1.ResourceResolver).to(user_storage_resource_1.UserStorageResolver).inSingletonScope();
    bind(user_storage_service_1.UserStorageService).to(user_storage_service_filesystem_1.UserStorageServiceFilesystemImpl).inSingletonScope();
}
exports.bindUserStorage = bindUserStorage;
exports.default = new inversify_1.ContainerModule(function (bind) {
    bindUserStorage(bind);
});
//# sourceMappingURL=user-storage-frontend-module.js.map