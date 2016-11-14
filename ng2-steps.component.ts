import { Component, Input } from '@angular/core';


import { StepsService } from './ng2-steps.service';


@Component({
  selector: 'ng2-steps-body',

  template:`
  <div class="steps">
    <div class="steps-body">
      <div class="step" *ngFor="let _step of stepsData; let i=index" [ngClass]="{visible:i+1==currentStep}">
        <div id="component_{{i}}"></div>
        <div class="step-content" ng2-step [content]="_step.content" [module]="_step.module" [index]="i">
        </div>
      </div>
    </div>
    <div class="steps-footer">
    </div>
  </div>
  `,


  styles:[`
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
})
export class StepsBodyComponent {

  private stepsData:any=[];
  private currentStep:number=1;

  constructor(private steps:StepsService){
    this.steps.getSteps((data)=>{
      this.stepsData=data;
    });
    this.steps.getCurrentStep((step)=>{
      this.currentStep=step;
    });
  }


  selectStep(index){
    this.currentStep=index+1;
    this.steps.setCurrentStep(this.currentStep);
  }

}
