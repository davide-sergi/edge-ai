"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var contribution_provider_1 = require("@theia/core/lib/common/contribution-provider");
var backend_application_1 = require("@theia/core/lib/node/backend-application");
var common_1 = require("@theia/core/lib/common");
var mini_browser_service_1 = require("../common/mini-browser-service");
var mini_browser_endpoint_1 = require("./mini-browser-endpoint");
exports.default = new inversify_1.ContainerModule(function (bind) {
    bind(mini_browser_endpoint_1.MiniBrowserEndpoint).toSelf().inSingletonScope();
    bind(backend_application_1.BackendApplicationContribution).toService(mini_browser_endpoint_1.MiniBrowserEndpoint);
    bind(mini_browser_service_1.MiniBrowserService).toService(mini_browser_endpoint_1.MiniBrowserEndpoint);
    bind(common_1.ConnectionHandler).toDynamicValue(function (context) { return new common_1.JsonRpcConnectionHandler(mini_browser_service_1.MiniBrowserServicePath, function () { return context.container.get(mini_browser_service_1.MiniBrowserService); }); }).inSingletonScope();
    contribution_provider_1.bindContributionProvider(bind, mini_browser_endpoint_1.MiniBrowserEndpointHandler);
    bind(mini_browser_endpoint_1.MiniBrowserEndpointHandler).to(mini_browser_endpoint_1.HtmlHandler).inSingletonScope();
    bind(mini_browser_endpoint_1.MiniBrowserEndpointHandler).to(mini_browser_endpoint_1.ImageHandler).inSingletonScope();
    bind(mini_browser_endpoint_1.MiniBrowserEndpointHandler).to(mini_browser_endpoint_1.PdfHandler).inSingletonScope();
    bind(mini_browser_endpoint_1.MiniBrowserEndpointHandler).to(mini_browser_endpoint_1.SvgHandler).inSingletonScope();
});
//# sourceMappingURL=mini-browser-backend-module.js.map