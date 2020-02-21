import { Injectable } from '@angular/core';
import { DataTableDTO } from '@interfaces/data-table-dto';
import { DataTableEnumTableSize } from '@interfaces/data-table-enum-table-size';

@Injectable({
  providedIn: 'root'
})
export class DataTableDataDefaultService {
  dataDefault : DataTableDTO = {
    title           : '',
    showBtnAdd      : true,
    page            : 1,
    pageSize        : 10,
    buttonsOptions  : [],
    structure       : {
      headers : [],
      body    : []
    },
    tableSize       : DataTableEnumTableSize.small,
    totalRecords    : 0,
  };

  constructor() { }

  getStructure():DataTableDTO{
    return this.dataDefault;
  }
}
