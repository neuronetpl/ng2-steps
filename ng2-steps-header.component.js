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
var StepsHeaderComponent = (function () {
    function StepsHeaderComponent(steps) {
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
    StepsHeaderComponent.prototype.selectStep = function (index) {
        this.steps.setCurrentStep(index + 1);
    };
    StepsHeaderComponent = __decorate([
        core_1.Component({
            selector: 'ng2-steps-header',
            template: "\n  <div class=\"steps-headers\">\n    <div class=\"steps-header\" *ngFor=\"let _step of stepsData; let i=index\" (click)=\"selectStep(i)\" [ngClass]=\"{active:(i+1)==currentStep}\" [innerHTML]=\"_step.title\"></div>\n  </div>\n  ",
            styles: ["\n  .steps-headers {\n    overflow: hidden;\n    display: flex;\n    user-select: none;\n    -webkit-user-select: none;\n  }\n  .steps-headers .steps-header {\n    flex-grow: 1;\n    cursor: pointer;\n    padding: 10px;\n  }\n  .steps-headers .steps-header.active {\n    color: white;\n    font-weight: bold;\n    background: #0078ff;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [ng2_steps_service_1.StepsService])
    ], StepsHeaderComponent);
    return StepsHeaderComponent;
}());
exports.StepsHeaderComponent = StepsHeaderComponent;
//# sourceMappingURL=ng2-steps-header.component.js.map