import {Component, Input, ChangeDetectionStrategy, ContentChildren, QueryList} from '@angular/core';
import {TdDefDirective} from './tddef.directive';


@Component({
  selector: 'nr-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TableComponent {
  @Input() table: Table;

  @ContentChildren(TdDefDirective, {}) tdTemplates: QueryList<TdDefDirective>;

  currentCustomColumn: TdDefDirective | undefined;

  haveHeaderGroupTitles(): boolean {
    return !!this.table.headerGroups.find((headerGroup) => !!headerGroup.title);
  }

  isCustomColumn(index: number): boolean {
    this.currentCustomColumn = this.tdTemplates.find(item => item.column === index);

    return !!this.currentCustomColumn;
  }
}

export interface Table {
  title?: string;
  headerGroups: HeaderGroup[];
  rowGroups: RowGroup[];
}

export interface HeaderGroup {
  title?: string;
  headers: string[];
}

export interface RowGroup {
  title?: string;
  rows: any[][];
}
