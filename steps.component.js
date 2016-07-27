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
var step_directive_1 = require('./step.directive');
var steps_service_1 = require('./steps.service');
var StepsComponent = (function () {
    function StepsComponent(steps) {
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
    StepsComponent.prototype.ngOnInit = function () { };
    StepsComponent.prototype.selectStep = function (index) {
        this.currentStep = index + 1;
        this.steps.setCurrentStep(this.currentStep);
    };
    StepsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'nn-steps',
            templateUrl: "templates/steps.html",
            styleUrls: ['css/steps.css'],
            directives: [step_directive_1.StepDirective],
            providers: []
        }), 
        __metadata('design:paramtypes', [steps_service_1.StepsService])
    ], StepsComponent);
    return StepsComponent;
}());
exports.StepsComponent = StepsComponent;
//# sourceMappingURL=steps.component.js.map