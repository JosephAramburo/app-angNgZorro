import { DataTableHeaders } from '@interfaces/data-table-headers';
import { DataTableBody } from '@interfaces/data-table-body';

export interface DataTableStructureDTO {
    headers     : DataTableHeaders[];
    body        : DataTableBody[];
}
