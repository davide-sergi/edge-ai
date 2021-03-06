"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLanguageServerContribution = exports.LanguageServerContribution = exports.LanguageContribution = void 0;
var net = require("net");
var inversify_1 = require("inversify");
var vscode_ws_jsonrpc_1 = require("vscode-ws-jsonrpc");
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
var server_1 = require("vscode-ws-jsonrpc/lib/server");
var messaging_1 = require("@theia/core/lib/node/messaging");
var common_1 = require("../common");
Object.defineProperty(exports, "LanguageContribution", { enumerable: true, get: function () { return common_1.LanguageContribution; } });
var raw_process_1 = require("@theia/process/lib/node/raw-process");
var process_manager_1 = require("@theia/process/lib/node/process-manager");
exports.LanguageServerContribution = Symbol('LanguageServerContribution');
var BaseLanguageServerContribution = /** @class */ (function () {
    function BaseLanguageServerContribution() {
    }
    BaseLanguageServerContribution.prototype.forward = function (clientConnection, serverConnection) {
        server_1.forward(clientConnection, serverConnection, this.map.bind(this));
        if (messaging_1.WebSocketChannelConnection.is(clientConnection)) {
            serverConnection.onClose(function () { return clientConnection.channel.tryClose(); });
        }
    };
    BaseLanguageServerContribution.prototype.map = function (message) {
        if (vscode_ws_jsonrpc_1.isRequestMessage(message)) {
            if (message.method === vscode_languageserver_protocol_1.InitializeRequest.type.method) {
                var initializeParams = message.params;
                initializeParams.processId = process.pid;
            }
        }
        return message;
    };
    BaseLanguageServerContribution.prototype.createProcessSocketConnection = function (outSocket, inSocket, command, args, options) {
        return __awaiter(this, void 0, void 0, function () {
            var process, _a, outSock, inSock;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.spawnProcessAsync(command, args, options)];
                    case 1:
                        process = _b.sent();
                        return [4 /*yield*/, Promise.all([outSocket, inSocket])];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 2]), outSock = _a[0], inSock = _a[1];
                        return [2 /*return*/, server_1.createProcessSocketConnection(process.process, outSock, inSock)];
                }
            });
        });
    };
    /**
     * @deprecated use `createProcessStreamConnectionAsync` instead.
     * Otherwise, the backend cannot notify the client if the LS has failed at start-up.
     */
    BaseLanguageServerContribution.prototype.createProcessStreamConnection = function (command, args, options) {
        var process = this.spawnProcess(command, args, options);
        return server_1.createStreamConnection(process.output, process.input, function () { return process.kill(); });
    };
    BaseLanguageServerContribution.prototype.createProcessStreamConnectionAsync = function (command, args, options) {
        return __awaiter(this, void 0, void 0, function () {
            var process;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.spawnProcessAsync(command, args, options)];
                    case 1:
                        process = _a.sent();
                        return [2 /*return*/, server_1.createStreamConnection(process.outputStream, process.inputStream, function () { return process.kill(); })];
                }
            });
        });
    };
    /**
     * @deprecated use `spawnProcessAsync` instead.
     */
    BaseLanguageServerContribution.prototype.spawnProcess = function (command, args, options) {
        var rawProcess = this.processFactory({ command: command, args: args, options: options });
        rawProcess.onError(this.onDidFailSpawnProcess.bind(this));
        rawProcess.errorStream.on('data', this.logError.bind(this));
        return rawProcess;
    };
    BaseLanguageServerContribution.prototype.spawnProcessAsync = function (command, args, options) {
        var _this = this;
        var rawProcess = this.processFactory({ command: command, args: args, options: options });
        rawProcess.errorStream.on('data', this.logError.bind(this));
        return new Promise(function (resolve, reject) {
            rawProcess.onError(function (error) {
                _this.onDidFailSpawnProcess(error);
                if (error.code === 'ENOENT') {
                    var guess = command.split(/\s+/).shift();
                    if (guess) {
                        reject(new Error("Failed to spawn " + guess + "\nPerhaps it is not on the PATH."));
                        return;
                    }
                }
                reject(error);
            });
            process.nextTick(function () { return resolve(rawProcess); });
        });
    };
    BaseLanguageServerContribution.prototype.onDidFailSpawnProcess = function (error) {
        console.error(error);
    };
    BaseLanguageServerContribution.prototype.logError = function (data) {
        if (data) {
            console.error(this.name + ": " + data);
        }
    };
    BaseLanguageServerContribution.prototype.logInfo = function (data) {
        if (data) {
            console.info(this.name + ": " + data);
        }
    };
    BaseLanguageServerContribution.prototype.startSocketServer = function () {
        return new Promise(function (resolve) {
            var server = net.createServer();
            server.addListener('listening', function () {
                return resolve(server);
            });
            // allocate ports dynamically
            server.listen(0, '127.0.0.1');
        });
    };
    BaseLanguageServerContribution.prototype.accept = function (server) {
        return new Promise(function (resolve, reject) {
            server.on('error', reject);
            server.on('connection', function (socket) {
                // stop accepting new connections
                server.close();
                resolve(socket);
            });
        });
    };
    __decorate([
        inversify_1.inject(raw_process_1.RawProcessFactory),
        __metadata("design:type", Function)
    ], BaseLanguageServerContribution.prototype, "processFactory", void 0);
    __decorate([
        inversify_1.inject(process_manager_1.ProcessManager),
        __metadata("design:type", process_manager_1.ProcessManager)
    ], BaseLanguageServerContribution.prototype, "processManager", void 0);
    BaseLanguageServerContribution = __decorate([
        inversify_1.injectable()
    ], BaseLanguageServerContribution);
    return BaseLanguageServerContribution;
}());
exports.BaseLanguageServerContribution = BaseLanguageServerContribution;
//# sourceMappingURL=language-server-contribution.js.map