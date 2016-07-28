# ng2-steps
Steps component for angular2 where each step is different component and everything is wired together.

![example](http://neuronet.it:8888/github/ng2Steps.gif)

Main component that contain steps:
```javascript
import { StepsService, StepsComponent } from '../your_path/ng2Steps/steps';

import {Step1Component} from './step1.component';
import {Step2Component} from './step2.component';
import {Step3Component} from './step3.component';
import {Step4Component} from './step4.component';

@Component({
  moduleId:module.id,
  templateUrl:`templates/steptest.html`,
  providers:[StepsService],// <---- don't forget
  directives:[StepsComponent]// <---- don't forget
})
export class StepTestComponent implements OnInit{
  public myData:any={};
  public step:number=1;

  public stepsData=[
    {title:'first',content:Step1Component},
    {title:'second',content:Step2Component},
    {title:'third',content:Step3Component},
    {title:'fourth',content:Step4Component}
  ];

  constructor(private steps:StepsService){}

  ngOnInit(){

    this.steps.setSteps(this.stepsData);
    this.steps.setCurrentStep(1);
    this.steps.getCurrentStep((currentStep)=>{
      this.step=currentStep;
    });
    this.steps.getData((data)=>{ // subscribe to data from each component
      this.myData=data;
    }/*, name */);// second parameter is name if we want only specific data from object

  }

  prev(){
    this.steps.prevStep();// service will go through the steps
  }
  next(){
    this.steps.nextStep();
  }

}
```

```html
<span>currentStep: {{step}}</span>

<ng2Steps></ng2Steps>

<div class="steps-buttons">
  <button (click)="prev()" [disabled]="step==1"> Previous page</button>
  <button (click)="next()" [hidden]="step==4"> Next page</button>
</div>
```

Individual steps:
```javascript
import {Component,Input} from '@angular/core';

import { StepsService } from '../your_path/ng2Steps/steps';

@Component({
  moduleId:module.id,
  templateUrl:'your_path/templates/step1.html'
})
export class Step1Component{
  private someData:any={};
  private otherCompsData:any={}

  constructor(private steps:StepsService){}

  updateData(data){
    this.someData=data;
    this.steps.setData('someData',data);// this will publish data to other components
  }

  ngOnInit(){
    // subscribe for specific data from other components
    // each time some other component update data - we will have info
    // getData is subscribing and unsubscribing on destroy for us
    this.steps.getData((oData)=>{
      this.otherData=oData;
    },'otherData');
  }
}

```


(author:[oprogramowanie dedykowane](https://www.neuronet.pl))
