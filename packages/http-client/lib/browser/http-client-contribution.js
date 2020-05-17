"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientMenuContribution = exports.HttpClientCommandContribution = exports.HttpClientCommand = void 0;
var inversify_1 = require("inversify");
var browser_1 = require("@theia/core/lib/browser");
var axios = require("axios");
axios.defaults.adapter = require('axios/lib/adapters/http');
exports.HttpClientCommand = {
    id: 'HttpClient.command',
    label: "Send HTTP request"
};
var HttpClientCommandContribution = /** @class */ (function () {
    function HttpClientCommandContribution() {
    }
    HttpClientCommandContribution.prototype.registerCommands = function (registry) {
        registry.registerCommand(exports.HttpClientCommand, {
            execute: function (options) {
                var response = axios.request(options[0]);
                return response;
            }
        });
    };
    HttpClientCommandContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], HttpClientCommandContribution);
    return HttpClientCommandContribution;
}());
exports.HttpClientCommandContribution = HttpClientCommandContribution;
var HttpClientMenuContribution = /** @class */ (function () {
    function HttpClientMenuContribution() {
    }
    HttpClientMenuContribution.prototype.registerMenus = function (menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.HttpClientCommand.id,
            label: exports.HttpClientCommand.label
        });
    };
    HttpClientMenuContribution = __decorate([
        inversify_1.injectable()
    ], HttpClientMenuContribution);
    return HttpClientMenuContribution;
}());
exports.HttpClientMenuContribution = HttpClientMenuContribution;
//# sourceMappingURL=http-client-contribution.js.map