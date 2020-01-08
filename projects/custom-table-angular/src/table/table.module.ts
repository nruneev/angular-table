import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {TableComponent} from './table.component';
import {TdDirective} from './td.directive';
import {TdDefDirective} from './tddef.directive';


@NgModule({
    declarations: [
        TableComponent,
        TdDirective,
        TdDefDirective
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        TableComponent,
        TdDirective,
        TdDefDirective
    ]
})
export class TableModule {}
