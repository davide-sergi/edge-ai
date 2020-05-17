(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "../api-samples/lib/browser/api-samples-frontend-module.js":
/*!*****************************************************************!*\
  !*** ../api-samples/lib/browser/api-samples-frontend-module.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var sample_dynamic_label_provider_command_contribution_1 = __webpack_require__(/*! ./label/sample-dynamic-label-provider-command-contribution */ "../api-samples/lib/browser/label/sample-dynamic-label-provider-command-contribution.js");
var sample_unclosable_view_contribution_1 = __webpack_require__(/*! ./view/sample-unclosable-view-contribution */ "../api-samples/lib/browser/view/sample-unclosable-view-contribution.js");
var sample_output_channel_with_severity_1 = __webpack_require__(/*! ./output/sample-output-channel-with-severity */ "../api-samples/lib/browser/output/sample-output-channel-with-severity.js");
exports.default = new inversify_1.ContainerModule(function (bind) {
    sample_dynamic_label_provider_command_contribution_1.bindDynamicLabelProvider(bind);
    sample_unclosable_view_contribution_1.bindSampleUnclosableView(bind);
    sample_output_channel_with_severity_1.bindSampleOutputChannelWithSeverity(bind);
});


/***/ }),

/***/ "../api-samples/lib/browser/label/sample-dynamic-label-provider-command-contribution.js":
/*!**********************************************************************************************!*\
  !*** ../api-samples/lib/browser/label/sample-dynamic-label-provider-command-contribution.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.bindDynamicLabelProvider = exports.ExampleLabelProviderCommandHandler = exports.SampleDynamicLabelProviderCommandContribution = exports.ExampleLabelProviderCommands = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var sample_dynamic_label_provider_contribution_1 = __webpack_require__(/*! ./sample-dynamic-label-provider-contribution */ "../api-samples/lib/browser/label/sample-dynamic-label-provider-contribution.js");
var ExampleLabelProviderCommands;
(function (ExampleLabelProviderCommands) {
    var EXAMPLE_CATEGORY = 'Examples';
    ExampleLabelProviderCommands.TOGGLE_SAMPLE = {
        id: 'example_label_provider.toggle',
        category: EXAMPLE_CATEGORY,
        label: 'Toggle Dynamically-Changing Labels'
    };
})(ExampleLabelProviderCommands = exports.ExampleLabelProviderCommands || (exports.ExampleLabelProviderCommands = {}));
var SampleDynamicLabelProviderCommandContribution = /** @class */ (function () {
    function SampleDynamicLabelProviderCommandContribution() {
    }
    SampleDynamicLabelProviderCommandContribution.prototype.initialize = function () { };
    SampleDynamicLabelProviderCommandContribution.prototype.registerCommands = function (commands) {
        commands.registerCommand(ExampleLabelProviderCommands.TOGGLE_SAMPLE, new ExampleLabelProviderCommandHandler(this.labelProviderContribution));
    };
    __decorate([
        inversify_1.inject(sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution),
        __metadata("design:type", sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution)
    ], SampleDynamicLabelProviderCommandContribution.prototype, "labelProviderContribution", void 0);
    SampleDynamicLabelProviderCommandContribution = __decorate([
        inversify_1.injectable()
    ], SampleDynamicLabelProviderCommandContribution);
    return SampleDynamicLabelProviderCommandContribution;
}());
exports.SampleDynamicLabelProviderCommandContribution = SampleDynamicLabelProviderCommandContribution;
var ExampleLabelProviderCommandHandler = /** @class */ (function () {
    function ExampleLabelProviderCommandHandler(labelProviderContribution) {
        this.labelProviderContribution = labelProviderContribution;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ExampleLabelProviderCommandHandler.prototype.execute = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.labelProviderContribution.toggle();
    };
    return ExampleLabelProviderCommandHandler;
}());
exports.ExampleLabelProviderCommandHandler = ExampleLabelProviderCommandHandler;
exports.bindDynamicLabelProvider = function (bind) {
    bind(sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution).toSelf().inSingletonScope();
    bind(browser_1.LabelProviderContribution).toService(sample_dynamic_label_provider_contribution_1.SampleDynamicLabelProviderContribution);
    bind(core_1.CommandContribution).to(SampleDynamicLabelProviderCommandContribution).inSingletonScope();
};


/***/ }),

/***/ "../api-samples/lib/browser/label/sample-dynamic-label-provider-contribution.js":
/*!**************************************************************************************!*\
  !*** ../api-samples/lib/browser/label/sample-dynamic-label-provider-contribution.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2019 Arm and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.SampleDynamicLabelProviderContribution = void 0;
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var label_provider_1 = __webpack_require__(/*! @theia/core/lib/browser/label-provider */ "../../packages/core/lib/browser/label-provider.js");
var uri_1 = __webpack_require__(/*! @theia/core/lib/common/uri */ "../../packages/core/lib/common/uri.js");
var core_1 = __webpack_require__(/*! @theia/core */ "../../packages/core/lib/common/index.js");
var SampleDynamicLabelProviderContribution = /** @class */ (function (_super) {
    __extends(SampleDynamicLabelProviderContribution, _super);
    function SampleDynamicLabelProviderContribution() {
        var _this = _super.call(this) || this;
        _this.isActive = false;
        _this.onDidChangeEmitter = new core_1.Emitter();
        _this.x = 0;
        var outer = _this;
        setInterval(function () {
            if (_this.isActive) {
                outer.x++;
                outer.fireLabelsDidChange();
            }
        }, 1000);
        return _this;
    }
    SampleDynamicLabelProviderContribution.prototype.canHandle = function (element) {
        if (element.toString().includes('test')) {
            return 30;
        }
        return 0;
    };
    SampleDynamicLabelProviderContribution.prototype.toggle = function () {
        this.isActive = !this.isActive;
        this.fireLabelsDidChange();
    };
    SampleDynamicLabelProviderContribution.prototype.fireLabelsDidChange = function () {
        this.onDidChangeEmitter.fire({
            affects: function (element) { return element.toString().includes('test'); }
        });
    };
    SampleDynamicLabelProviderContribution.prototype.getUri = function (element) {
        return new uri_1.default(element.toString());
    };
    SampleDynamicLabelProviderContribution.prototype.getIcon = function (element) {
        var uri = this.getUri(element);
        var icon = _super.prototype.getFileIcon.call(this, uri);
        if (!icon) {
            return this.defaultFileIcon;
        }
        return icon;
    };
    SampleDynamicLabelProviderContribution.prototype.getName = function (element) {
        var uri = this.getUri(element);
        if (this.isActive && uri.toString().includes('test')) {
            return _super.prototype.getName.call(this, uri) + '-' + this.x.toString(10);
        }
        else {
            return _super.prototype.getName.call(this, uri);
        }
    };
    SampleDynamicLabelProviderContribution.prototype.getLongName = function (element) {
        var uri = this.getUri(element);
        return _super.prototype.getLongName.call(this, uri);
    };
    Object.defineProperty(SampleDynamicLabelProviderContribution.prototype, "onDidChange", {
        get: function () {
            return this.onDidChangeEmitter.event;
        },
        enumerable: false,
        configurable: true
    });
    SampleDynamicLabelProviderContribution = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], SampleDynamicLabelProviderContribution);
    return SampleDynamicLabelProviderContribution;
}(label_provider_1.DefaultUriLabelProviderContribution));
exports.SampleDynamicLabelProviderContribution = SampleDynamicLabelProviderContribution;


/***/ }),

/***/ "../api-samples/lib/browser/output/sample-output-channel-with-severity.js":
/*!********************************************************************************!*\
  !*** ../api-samples/lib/browser/output/sample-output-channel-with-severity.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
exports.bindSampleOutputChannelWithSeverity = exports.SampleOutputChannelWithSeverity = void 0;
/********************************************************************************
 * Copyright (c) 2020 SAP SE or an SAP affiliate company and others.
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
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var output_channel_1 = __webpack_require__(/*! @theia/output/lib/common/output-channel */ "../../packages/output/lib/common/output-channel.js");
var SampleOutputChannelWithSeverity = /** @class */ (function () {
    function SampleOutputChannelWithSeverity() {
    }
    SampleOutputChannelWithSeverity.prototype.onStart = function () {
        var channel = this.outputChannelManager.getChannel('my test channel');
        channel.appendLine('hello info1'); // showed without color
        channel.appendLine('hello info2', output_channel_1.OutputChannelSeverity.Info);
        channel.appendLine('hello error', output_channel_1.OutputChannelSeverity.Error);
        channel.appendLine('hello warning', output_channel_1.OutputChannelSeverity.Warning);
    };
    __decorate([
        inversify_1.inject(output_channel_1.OutputChannelManager),
        __metadata("design:type", output_channel_1.OutputChannelManager)
    ], SampleOutputChannelWithSeverity.prototype, "outputChannelManager", void 0);
    SampleOutputChannelWithSeverity = __decorate([
        inversify_1.injectable()
    ], SampleOutputChannelWithSeverity);
    return SampleOutputChannelWithSeverity;
}());
exports.SampleOutputChannelWithSeverity = SampleOutputChannelWithSeverity;
exports.bindSampleOutputChannelWithSeverity = function (bind) {
    bind(browser_1.FrontendApplicationContribution)
        .to(SampleOutputChannelWithSeverity)
        .inSingletonScope();
};


/***/ }),

/***/ "../api-samples/lib/browser/view/sample-unclosable-view-contribution.js":
/*!******************************************************************************!*\
  !*** ../api-samples/lib/browser/view/sample-unclosable-view-contribution.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TORO Limited and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.bindSampleUnclosableView = exports.SampleUnclosableViewContribution = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var sample_unclosable_view_1 = __webpack_require__(/*! ./sample-unclosable-view */ "../api-samples/lib/browser/view/sample-unclosable-view.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var SampleUnclosableViewContribution = /** @class */ (function (_super) {
    __extends(SampleUnclosableViewContribution, _super);
    function SampleUnclosableViewContribution() {
        return _super.call(this, {
            widgetId: sample_unclosable_view_1.SampleViewUnclosableView.ID,
            widgetName: 'Sample Unclosable View',
            toggleCommandId: SampleUnclosableViewContribution_1.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID,
            defaultWidgetOptions: {
                area: 'main'
            }
        }) || this;
    }
    SampleUnclosableViewContribution_1 = SampleUnclosableViewContribution;
    var SampleUnclosableViewContribution_1;
    SampleUnclosableViewContribution.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID = 'sampleUnclosableView:toggle';
    SampleUnclosableViewContribution = SampleUnclosableViewContribution_1 = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], SampleUnclosableViewContribution);
    return SampleUnclosableViewContribution;
}(browser_1.AbstractViewContribution));
exports.SampleUnclosableViewContribution = SampleUnclosableViewContribution;
exports.bindSampleUnclosableView = function (bind) {
    browser_1.bindViewContribution(bind, SampleUnclosableViewContribution);
    bind(sample_unclosable_view_1.SampleViewUnclosableView).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(function (ctx) { return ({
        id: sample_unclosable_view_1.SampleViewUnclosableView.ID,
        createWidget: function () { return ctx.container.get(sample_unclosable_view_1.SampleViewUnclosableView); }
    }); });
};


/***/ }),

/***/ "../api-samples/lib/browser/view/sample-unclosable-view.js":
/*!*****************************************************************!*\
  !*** ../api-samples/lib/browser/view/sample-unclosable-view.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/********************************************************************************
 * Copyright (C) 2020 TORO Limited and others.
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.SampleViewUnclosableView = void 0;
var browser_1 = __webpack_require__(/*! @theia/core/lib/browser */ "../../packages/core/lib/browser/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "../../node_modules/inversify/lib/inversify.js");
var React = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/**
 * This sample view is used to demo the behavior of "Widget.title.closable".
 */
var SampleViewUnclosableView = /** @class */ (function (_super) {
    __extends(SampleViewUnclosableView, _super);
    function SampleViewUnclosableView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SampleViewUnclosableView_1 = SampleViewUnclosableView;
    SampleViewUnclosableView.prototype.init = function () {
        this.id = SampleViewUnclosableView_1.ID;
        this.title.caption = 'Sample Unclosable View';
        this.title.label = 'Sample Unclosable View';
        this.title.iconClass = 'fa fa-window-maximize';
        this.title.closable = false;
        this.update();
    };
    SampleViewUnclosableView.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            "Closable",
            React.createElement("input", { type: "checkbox", defaultChecked: this.title.closable, onChange: function (e) { return _this.title.closable = e.target.checked; } })));
    };
    var SampleViewUnclosableView_1;
    SampleViewUnclosableView.ID = 'sampleUnclosableView';
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SampleViewUnclosableView.prototype, "init", null);
    SampleViewUnclosableView = SampleViewUnclosableView_1 = __decorate([
        inversify_1.injectable()
    ], SampleViewUnclosableView);
    return SampleViewUnclosableView;
}(browser_1.ReactWidget));
exports.SampleViewUnclosableView = SampleViewUnclosableView;


/***/ })

}]);
//# sourceMappingURL=82.bundle.js.map