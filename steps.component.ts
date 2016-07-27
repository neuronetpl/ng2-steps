import { Component, Input, OnInit } from '@angular/core';

import { StepDirective } from './step.directive';
import { StepsService } from './steps.service';


@Component({
  moduleId:module.id,
  selector: 'nn-steps',
  templateUrl:`templates/steps.html`,
  styleUrls:['css/steps.css'],
  directives:[StepDirective],
  providers:[]
})
export class StepsComponent implements OnInit{

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

  ngOnInit(){}

  selectStep(index){
    this.currentStep=index+1;
    this.steps.setCurrentStep(this.currentStep);
  }

}
