var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, Compiler, ViewContainerRef } from '@angular/core';
import { StepsService } from './ng2-steps';
export let StepDirective = class StepDirective {
    constructor(compiler, viewContainerRef, sds) {
        this.compiler = compiler;
        this.viewContainerRef = viewContainerRef;
        this.sds = sds;
    }
    ngOnInit() {
        //Magic!
        this.compiler.compileComponentAsync(this.content).then((cmpFactory) => {
            const injector = this.viewContainerRef.injector;
            this.viewContainerRef.createComponent(cmpFactory, 0, injector);
        });
    }
};
__decorate([
    Input('content'), 
    __metadata('design:type', Object)
], StepDirective.prototype, "content", void 0);
__decorate([
    Input('index'), 
    __metadata('design:type', String)
], StepDirective.prototype, "index", void 0);
StepDirective = __decorate([
    Directive({
        selector: '[ng2-step]'
    }), 
    __metadata('design:paramtypes', [Compiler, ViewContainerRef, StepsService])
], StepDirective);
//# sourceMappingURL=ng2-step.directive.js.map