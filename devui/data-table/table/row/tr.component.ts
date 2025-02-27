import { AfterContentInit, Component, ContentChildren, EventEmitter, OnInit, Output, QueryList } from '@angular/core';
import { RowCheckChangeEventArg, TableCheckOptions } from '../../data-table.model';
import { TableThComponent } from '../head/th/th.component';

@Component({
  /* eslint-disable-next-line @angular-eslint/component-selector*/
  selector: '[dTableRow]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss']
})
export class TableTrComponent implements OnInit, AfterContentInit {
  @ContentChildren(TableThComponent) thList: QueryList<TableThComponent>;
  headerCheckable: boolean;
  headerCheckDisabled: boolean;
  headerRowspan = 1;
  headerCheckOptions: TableCheckOptions[];

  headerChecked: boolean;
  headerHalfChecked: boolean;
  firstTh: TableThComponent;

  @Output() headerCheckStatusEvent = new EventEmitter<boolean>();
  @Output() checkStatusEvent = new EventEmitter<RowCheckChangeEventArg>();
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    if (this.thList) {
      this.firstTh = this.thList.first;
    }
  }

  onHeaderCheckChange(checked) {
    this.headerChecked = checked;
    this.headerHalfChecked = false;
    this.headerCheckStatusEvent.emit(checked);
  }

  onOptionSelect(option: TableCheckOptions) {
    if (option.onChecked) {
      option.onChecked();
    }
  }
}
