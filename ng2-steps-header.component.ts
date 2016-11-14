import { Component , Input, OnInit } from '@angular/core';

import { StepsService } from './ng2-steps.service';

@Component({
  selector:'ng2-steps-header',
  template:`
  <div class="steps-headers">
    <div class="steps-header" *ngFor="let _step of stepsData; let i=index" (click)="selectStep(i)" [ngClass]="{active:(i+1)==currentStep}" [innerHTML]="_step.title"></div>
  </div>
  `,

  styles:[`
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
})
export class StepsHeaderComponent {

  private stepsData:any=[];
  public currentStep:number=1;

  constructor(
    private steps:StepsService
  ){
    this.steps.getSteps((data)=>{
      this.stepsData=data;
    });
    this.steps.getCurrentStep((step)=>{
      this.currentStep=step;
    });
  }

  selectStep(index){
    this.steps.setCurrentStep(index+1);
  }

}
