import { Directive , Input, OnInit, ComponentResolver,ViewContainerRef } from '@angular/core';

import { StepsService } from './steps.service';

@Directive({
  selector:'[ng2Steps]'
})
export class StepDirective implements OnInit{

  @Input('content') content:any;
  @Input('index') index:string;
  public instance;

  constructor(
    private resolver:ComponentResolver,
    private viewContainerRef:ViewContainerRef,
    private sds:StepsService
  ){}

  ngOnInit(){
    //Magic!
    this.resolver.resolveComponent(this.content)
    .then(cmpFactory => {
        const injector = this.viewContainerRef.injector;
        return this.viewContainerRef.createComponent(cmpFactory, 0,  injector);
    });
  }

}
