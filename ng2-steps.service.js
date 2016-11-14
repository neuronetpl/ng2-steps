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
var Subject_1 = require('rxjs/Subject');
var StepsService = (function () {
    function StepsService() {
        this.dataSubject = new Subject_1.Subject();
        this.observableData = this.dataSubject.asObservable();
        this.steps = [];
        this.stepsSubject = new Subject_1.Subject();
        this.observableSteps = this.stepsSubject.asObservable();
        this.currentStep = 1;
        this.currentStepSubject = new Subject_1.Subject();
        this.observableCurrentStep = this.currentStepSubject.asObservable();
        this.subscriptions = [];
        this.data = {};
    }
    StepsService.prototype.setSteps = function (steps) {
        this.steps = steps;
        this.stepsSubject.next(steps);
    };
    StepsService.prototype.getSteps = function (fn) {
        var sub = this.observableSteps.subscribe(fn);
        this.subscriptions.push(sub);
    };
    StepsService.prototype.setData = function (name, data) {
        this.data[name] = data;
        this.dataSubject.next(this.data);
    };
    StepsService.prototype.getData = function (fn, name) {
        if (name === void 0) { name = ''; }
        var sub = this.observableData.subscribe(function (data) {
            if (name == '') {
                fn(data);
            }
            else {
                fn(data[name]);
            }
        });
        this.subscriptions.push(sub);
    };
    StepsService.prototype.setCurrentStep = function (index_1) {
        this.currentStep = index_1;
        this.currentStepSubject.next(index_1);
    };
    StepsService.prototype.getCurrentStep = function (fn) {
        var sub = this.observableCurrentStep.subscribe(fn);
        this.subscriptions.push(sub);
    };
    StepsService.prototype.nextStep = function () {
        if (this.currentStep < this.steps.length) {
            this.setCurrentStep(this.currentStep + 1);
        }
    };
    StepsService.prototype.prevStep = function () {
        if (this.currentStep > 1) {
            this.setCurrentStep(this.currentStep - 1);
        }
    };
    StepsService.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    StepsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StepsService);
    return StepsService;
}());
exports.StepsService = StepsService;
//# sourceMappingURL=ng2-steps.service.js.map