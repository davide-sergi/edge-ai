(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[101],{

/***/ "../../packages/http-client/lib/browser/http-client-contribution.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/http-client/lib/browser/http-client-contribution.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientMenuContribution = exports.HttpClientCommandContribution = exports.HttpClientCommand = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var axios = __webpack_require__(/*! axios */ "../../node_modules/axios/index.js");
axios.defaults.adapter = __webpack_require__(/*! axios/lib/adapters/http */ "../../node_modules/axios/lib/adapters/xhr.js");
exports.HttpClientCommand = {
    id: 'HttpClient.command',
    label: "Send HTTP request"
};
var HttpClientCommandContribution = /** @class */ (function () {
    function HttpClientCommandContribution(messageService) {
        this.messageService = messageService;
    }
    HttpClientCommandContribution.prototype.registerCommands = function (registry) {
        var _this = this;
        registry.registerCommand(exports.HttpClientCommand, {
            execute: function (options) {
                _this.messageService.info('Sending HTTP request');
                var response = axios.request(options[0]);
                _this.messageService.info('HTTP request sent');
                return response;
            }
        });
    };
    HttpClientCommandContribution = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(common_1.MessageService)),
        __metadata("design:paramtypes", [common_1.MessageService])
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

if (!global) global = {};
(global['theia'] = global['theia'] || {})['http-client/lib/browser/http-client-contribution'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/http-client/lib/browser/http-client-frontend-module.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/sergi/work/projects/edge-ai/theia/theia-ide-1.1.0/packages/http-client/lib/browser/http-client-frontend-module.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
var http_client_contribution_1 = __webpack_require__(/*! ./http-client-contribution */ "../../packages/http-client/lib/browser/http-client-contribution.js");
var common_1 = __webpack_require__(/*! @theia/core/lib/common */ "../../packages/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(http_client_contribution_1.HttpClientCommandContribution);
    bind(common_1.MenuContribution).to(http_client_contribution_1.HttpClientMenuContribution);
});

if (!global) global = {};
(global['theia'] = global['theia'] || {})['http-client/lib/browser/http-client-frontend-module'] = this;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=101.bundle.js.map