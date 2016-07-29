import { Component , Input, OnInit } from '@angular/core';

import { StepsService } from './ng2-steps';

@Component({
  moduleId:module.id,
  selector:'ng2-steps-header',
  templateUrl:'templates/header.html',
  styleUrls:['css/header.css']
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
