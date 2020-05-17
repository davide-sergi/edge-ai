"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var http_client_contribution_1 = require("./http-client-contribution");
var common_1 = require("@theia/core/lib/common");
var inversify_1 = require("inversify");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(http_client_contribution_1.HttpClientCommandContribution);
    bind(common_1.MenuContribution).to(http_client_contribution_1.HttpClientMenuContribution);
});
//# sourceMappingURL=http-client-frontend-module.js.map