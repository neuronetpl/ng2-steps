var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export let StepsService = class StepsService {
    constructor() {
        this.dataSubject = new Subject();
        this.observableData = this.dataSubject.asObservable();
        this.steps = [];
        this.stepsSubject = new Subject();
        this.observableSteps = this.stepsSubject.asObservable();
        this.currentStep = 1;
        this.currentStepSubject = new Subject();
        this.observableCurrentStep = this.currentStepSubject.asObservable();
        this.subscriptions = [];
        this.data = {};
    }
    setSteps(steps) {
        this.steps = steps;
        this.stepsSubject.next(steps);
    }
    getSteps(fn) {
        let sub = this.observableSteps.subscribe(fn);
        this.subscriptions.push(sub);
    }
    setData(name, data) {
        this.data[name] = data;
        this.dataSubject.next(this.data);
    }
    getData(fn, name = '') {
        let sub = this.observableData.subscribe((data) => {
            if (name == '') {
                fn(data);
            }
            else {
                fn(data[name]);
            }
        });
        this.subscriptions.push(sub);
    }
    setCurrentStep(index_1) {
        this.currentStep = index_1;
        this.currentStepSubject.next(index_1);
    }
    getCurrentStep(fn) {
        let sub = this.observableCurrentStep.subscribe(fn);
        this.subscriptions.push(sub);
    }
    nextStep() {
        if (this.currentStep < this.steps.length) {
            this.setCurrentStep(this.currentStep + 1);
        }
    }
    prevStep() {
        if (this.currentStep > 1) {
            this.setCurrentStep(this.currentStep - 1);
        }
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
};
StepsService = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], StepsService);
//# sourceMappingURL=ng2-steps.service.js.map