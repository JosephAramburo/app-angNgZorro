import { DataTableTypeFilters } from '../enums/data-table-type-filters.enum';

export interface DataTableHeaders {
    key         : string;
    text        : string;
    isFilter    : boolean;
    typeFilter  ?: DataTableTypeFilters;
    value       : any;
    options     ?: any[]
}
