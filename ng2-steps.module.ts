import { NgModule }      from '@angular/core';

import { StepsService, StepDirective, StepsBodyComponent, StepsHeaderComponent } from './ng2-steps';

@NgModule({
  imports:[],
  declarations:[StepDirective,StepsBodyComponent,StepsHeaderComponent],
  providers:[StepsService]
})
export class StepsModule {}
