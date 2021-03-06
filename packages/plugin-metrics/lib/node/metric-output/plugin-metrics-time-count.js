"use strict";
/********************************************************************************
 * Copyright (C) 2019 Red Hat, Inc. and others.
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginMetricTimeCount = void 0;
var inversify_1 = require("inversify");
var PluginMetricTimeCount = /** @class */ (function () {
    function PluginMetricTimeCount() {
        this.header = '# HELP language_server_time_count Number of language server requests\n# TYPE language_server_time_count gauge\n';
    }
    PluginMetricTimeCount.prototype.createMetricOutput = function (id, method, requestAnalytics) {
        if (requestAnalytics.succesfulResponses < 0) {
            requestAnalytics.succesfulResponses = 0;
        }
        var successMetric = "language_server_time_count{id=\"" + id + "\" method=\"" + method + "\" result=\"success\"} " + requestAnalytics.succesfulResponses + "\n";
        var failedRequests = requestAnalytics.totalRequests - requestAnalytics.succesfulResponses;
        var failureMetric = "language_server_time_count{id=\"" + id + "\" method=\"" + method + "\" result=\"fail\"} " + failedRequests + "\n";
        return successMetric + failureMetric;
    };
    PluginMetricTimeCount = __decorate([
        inversify_1.injectable()
    ], PluginMetricTimeCount);
    return PluginMetricTimeCount;
}());
exports.PluginMetricTimeCount = PluginMetricTimeCount;
//# sourceMappingURL=plugin-metrics-time-count.js.map