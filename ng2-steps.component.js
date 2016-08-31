var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { StepsService, StepDirective } from './ng2-steps';
export let StepsBodyComponent = class StepsBodyComponent {
    constructor(steps) {
        this.steps = steps;
        this.stepsData = [];
        this.currentStep = 1;
        this.steps.getSteps((data) => {
            this.stepsData = data;
        });
        this.steps.getCurrentStep((step) => {
            this.currentStep = step;
        });
    }
    ngOnInit() { }
    selectStep(index) {
        this.currentStep = index + 1;
        this.steps.setCurrentStep(this.currentStep);
    }
};
StepsBodyComponent = __decorate([
    Component({
        selector: 'ng2-steps-body',
        template: `
  <div class="steps">
    <div class="steps-body">
      <div class="step" *ngFor="let _step of stepsData; let i=index" [ngClass]="{visible:i+1==currentStep}">
        <div id="component_{{i}}"></div>
        <div class="step-content" ng2-step [content]="_step.content" [index]="i">
        </div>
      </div>
    </div>
    <div class="steps-footer">
    </div>
  </div>

  `,
        styles: [`
    .steps .steps-body {
      overflow: hidden;
    }
    .steps .steps-body .step {
      display: none;
    }
    .steps .steps-body .step.visible {
      display: block;
    }
  `],
        directives: [StepDirective]
    }), 
    __metadata('design:paramtypes', [StepsService])
], StepsBodyComponent);
//# sourceMappingURL=ng2-steps.component.js.map