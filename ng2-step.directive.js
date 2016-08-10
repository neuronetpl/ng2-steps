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
var ng2_steps_1 = require('./ng2-steps');
var StepDirective = (function () {
    function StepDirective(compiler, viewContainerRef, sds) {
        this.compiler = compiler;
        this.viewContainerRef = viewContainerRef;
        this.sds = sds;
    }
    StepDirective.prototype.ngOnInit = function () {
        var _this = this;
        //Magic!
        this.compiler.compileComponentAsync(this.content).then(function (cmpFactory) {
            var injector = _this.viewContainerRef.injector;
            _this.viewContainerRef.createComponent(cmpFactory, 0, injector);
        });
    };
    __decorate([
        core_1.Input('content'), 
        __metadata('design:type', Object)
    ], StepDirective.prototype, "content", void 0);
    __decorate([
        core_1.Input('index'), 
        __metadata('design:type', String)
    ], StepDirective.prototype, "index", void 0);
    StepDirective = __decorate([
        core_1.Directive({
            selector: '[ng2-step]'
        }), 
        __metadata('design:paramtypes', [core_1.Compiler, core_1.ViewContainerRef, ng2_steps_1.StepsService])
    ], StepDirective);
    return StepDirective;
}());
exports.StepDirective = StepDirective;
//# sourceMappingURL=ng2-step.directive.js.map