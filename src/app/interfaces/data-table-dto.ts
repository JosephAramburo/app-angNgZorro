import { DataTableStructureDTO } from '@interfaces/data-table-structure-dto';
import { DataTableButtonsOptionsDTO } from '@interfaces/data-table-buttons-options-dto';
import { DataTableEnumTableSize } from '@interfaces/data-table-enum-table-size';

export interface DataTableDTO {
    title           : string;
    showBtnAdd      : boolean;
    page            : number;
    pageSize        : number;
    totalRecords    : number;
    tableSize       : DataTableEnumTableSize;
    structure       : DataTableStructureDTO;
    buttonsOptions  : DataTableButtonsOptionsDTO[];
}
