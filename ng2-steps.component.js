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
var core_1 = require('@angular/core');
var ng2_steps_service_1 = require('./ng2-steps.service');
var StepsBodyComponent = (function () {
    function StepsBodyComponent(steps) {
        var _this = this;
        this.steps = steps;
        this.stepsData = [];
        this.currentStep = 1;
        this.steps.getSteps(function (data) {
            _this.stepsData = data;
        });
        this.steps.getCurrentStep(function (step) {
            _this.currentStep = step;
        });
    }
    StepsBodyComponent.prototype.selectStep = function (index) {
        this.currentStep = index + 1;
        this.steps.setCurrentStep(this.currentStep);
    };
    StepsBodyComponent = __decorate([
        core_1.Component({
            selector: 'ng2-steps-body',
            template: "\n  <div class=\"steps\">\n    <div class=\"steps-body\">\n      <div class=\"step\" *ngFor=\"let _step of stepsData; let i=index\" [ngClass]=\"{visible:i+1==currentStep}\">\n        <div id=\"component_{{i}}\"></div>\n        <div class=\"step-content\" ng2-step [content]=\"_step.content\" [module]=\"_step.module\" [index]=\"i\">\n        </div>\n      </div>\n    </div>\n    <div class=\"steps-footer\">\n    </div>\n  </div>\n  ",
            styles: ["\n    .steps .steps-body {\n      overflow: hidden;\n    }\n    .steps .steps-body .step {\n      display: none;\n    }\n    .steps .steps-body .step.visible {\n      display: block;\n    }\n  "],
        }), 
        __metadata('design:paramtypes', [ng2_steps_service_1.StepsService])
    ], StepsBodyComponent);
    return StepsBodyComponent;
}());
exports.StepsBodyComponent = StepsBodyComponent;
//# sourceMappingURL=ng2-steps.component.js.map