"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ng2_steps_service_1 = require('./ng2-steps.service');
var StepDirective /* implements OnInit*/ = (function () {
    function StepDirective /* implements OnInit*/(compiler, viewContainerRef, sds) {
        this.compiler = compiler;
        this.viewContainerRef = viewContainerRef;
        this.sds = sds;
    }
    StepDirective /* implements OnInit*/.prototype.ngOnInit = function () {
        var _this = this;
        this.compiler.compileModuleAndAllComponentsAsync(this.module).then(function (moduleWithFactories) {
            var injector = _this.viewContainerRef.injector;
            var cmpFactory = moduleWithFactories.componentFactories[0];
            _this.viewContainerRef.createComponent(cmpFactory, 0, injector);
        });
    };
    __decorate([
        core_1.Input('content'), 
        __metadata('design:type', Object)
    ], StepDirective /* implements OnInit*/.prototype, "content", void 0);
    __decorate([
        core_1.Input('module'), 
        __metadata('design:type', Object)
    ], StepDirective /* implements OnInit*/.prototype, "module", void 0);
    __decorate([
        core_1.Input('index'), 
        __metadata('design:type', String)
    ], StepDirective /* implements OnInit*/.prototype, "index", void 0);
    StepDirective /* implements OnInit*/ = __decorate([
        core_1.Directive({
            selector: '[ng2-step]'
        }), 
        __metadata('design:paramtypes', [core_1.Compiler, core_1.ViewContainerRef, ng2_steps_service_1.StepsService])
    ], StepDirective /* implements OnInit*/);
    return StepDirective /* implements OnInit*/;
}());
exports.StepDirective /* implements OnInit*/ = StepDirective /* implements OnInit*/;
//# sourceMappingURL=ng2-step.directive.js.map