import { Directive , Input , OnInit , Compiler , ViewContainerRef } from '@angular/core';

import { StepsService } from './ng2-steps.service';

@Directive({
  selector:'[ng2-step]'
})
export class StepDirective /* implements OnInit*/{

  @Input('content') content:any;
  @Input('module') module:any;
  @Input('index') index:string;
  public instance;

  constructor(

    private compiler:Compiler,
    private viewContainerRef:ViewContainerRef,
    private sds:StepsService

  ){}


  ngOnInit(){
    this.compiler.compileModuleAndAllComponentsAsync(this.module).then((moduleWithFactories)=>{
      const injector = this.viewContainerRef.injector;
      let cmpFactory=moduleWithFactories.componentFactories[0];
      this.viewContainerRef.createComponent(cmpFactory, 0,  injector);
    });
  }

}
