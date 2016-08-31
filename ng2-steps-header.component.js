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
import { StepsService } from './ng2-steps';
export let StepsHeaderComponent = class StepsHeaderComponent {
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
    selectStep(index) {
        this.steps.setCurrentStep(index + 1);
    }
};
StepsHeaderComponent = __decorate([
    Component({
        selector: 'ng2-steps-header',
        template: `
  <div class="steps-headers">
    <div class="steps-header" *ngFor="let _step of stepsData; let i=index" (click)="selectStep(i)" [ngClass]="{active:(i+1)==currentStep}" [innerHTML]="_step.title"></div>
  </div>
  `,
        styles: [`
  .steps-headers {
    overflow: hidden;
    display: flex;
    user-select: none;
    -webkit-user-select: none;
  }
  .steps-headers .steps-header {
    flex-grow: 1;
    cursor: pointer;
    padding: 10px;
  }
  .steps-headers .steps-header.active {
    color: white;
    font-weight: bold;
    background: #0078ff;
  }
  `]
    }), 
    __metadata('design:paramtypes', [StepsService])
], StepsHeaderComponent);
//# sourceMappingURL=ng2-steps-header.component.js.map