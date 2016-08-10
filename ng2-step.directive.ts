import { Directive , Input, OnInit, Compiler , ViewContainerRef } from '@angular/core';

import { StepsService } from './ng2-steps';

@Directive({
  selector:'[ng2-step]'
})
export class StepDirective implements OnInit{

  @Input('content') content:any;
  @Input('index') index:string;
  public instance;

  constructor(
    private compiler:Compiler,
    private viewContainerRef:ViewContainerRef,
    private sds:StepsService
  ){}

  ngOnInit(){
    //Magic!
    this.compiler.compileComponentAsync(this.content).then((cmpFactory)=>{
      const injector = this.viewContainerRef.injector;
      this.viewContainerRef.createComponent(cmpFactory, 0,  injector);
    });
  }

}
