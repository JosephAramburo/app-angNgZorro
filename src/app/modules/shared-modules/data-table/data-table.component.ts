import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
//import getISOWeek from 'date-fns/get_iso_week';
import { en_US, es_ES, NzI18nService } from 'ng-zorro-antd/i18n';
import { DataTableButtonsOptionsDTO } from '@interfaces/data-table-buttons-options-dto';
import { DataTableHeaders } from '@interfaces/data-table-headers';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() title           : string                       = '';
  @Input() tableSize       : string                       = 'small';
  @Input() showBtnAdd      : boolean                      = true;
  @Input() pageIndex       : number                       = 1;
  @Input() pageSize        : number                       = 10;
  @Input() total           : number                       = 100;  
  @Input() headers         : DataTableHeaders[]           = [];
  @Input() data            : any[]                        = [];
  @Input() buttonsOptions  : DataTableButtonsOptionsDTO[] = []; 
  keys                     : string[]                     = []; 
  listOfData               : any[]                        = [];
  filterGender    : any[]         = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
  sortValue       : string | null = null;
  sortKey         : string | null = null;
  searchGenderList: string[]      = [];
  @Output() filters       = new EventEmitter();
  @Output() clickButtons  = new EventEmitter();

  constructor(
    private i18n: NzI18nService
  ) { }

  ngOnInit(): void {
    this.i18n.setLocale(en_US);
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log("changes", changes);
    // if(changes.data.data)
  }

  filtersData():void{
    this.filters.emit(this.headers);
  }

  clickButton(btnId : number, rowIndex : any, isAdd : boolean = false):void{
    this.clickButtons.emit({
      btnId     : btnId,
      rowIndex  : rowIndex,
      isAdd     : isAdd
    });
  }

}
