import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
    selector: '[nrTdDef]'
})
export class TdDefDirective {
    @Input('nrTdDefColumn') column: number;

    constructor(public template: TemplateRef<TdContext>) {}
}

export interface TdContext {
    $implicit: any;
}
