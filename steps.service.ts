import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class StepsService {

  private data:any;

  private dataSubject=new Subject<any>();
  private observableData=this.dataSubject.asObservable();

  private steps=[];
  private stepsSubject=new Subject<any>();
  private observableSteps=this.stepsSubject.asObservable();

  private currentStep:number=1;
  private currentStepSubject= new Subject<number>();
  private observableCurrentStep = this.currentStepSubject.asObservable();

  private subscriptions=[];

  constructor(){
    this.data={};
  }

  setSteps(steps){
    this.steps=steps;
    this.stepsSubject.next(steps);
  }

  getSteps(fn){
    let sub=this.observableSteps.subscribe(fn);
    this.subscriptions.push(sub);
  }

  setData(name,data){
    this.data[name]=data;
    this.dataSubject.next(this.data);
  }

  getData(fn,name=''){
    let sub=this.observableData.subscribe((data)=>{
      if(name==''){
        fn(data);
      }else{
        fn(data[name]);
      }
    });
    this.subscriptions.push(sub);
  }

  setCurrentStep(index_1){
    this.currentStep=index_1;
    this.currentStepSubject.next(index_1);
  }

  getCurrentStep(fn){
    let sub=this.observableCurrentStep.subscribe(fn);
    this.subscriptions.push(sub);
  }

  nextStep(){
    if(this.currentStep<this.steps.length){
      this.setCurrentStep(this.currentStep+1);
    }
  }

  prevStep(){
    if(this.currentStep>1){
      this.setCurrentStep(this.currentStep-1);
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach((sub)=>{
      sub.unsubscribe();
    })
  }

}
