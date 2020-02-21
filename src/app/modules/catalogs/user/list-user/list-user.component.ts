import { Component, OnInit } from '@angular/core';
import { DataTableDTO } from '@interfaces/data-table-dto';
import { DataTableDataDefaultService } from '@services/data-table-data-default.service';
import { DataTableClass } from '@interfaces/data-table-class';
import { DataTableButtonsOptionsDTO } from '@interfaces/data-table-buttons-options-dto';
import { DataTableHeaders } from '@interfaces/data-table-headers';
import { DataTableTypeFilters } from '../../../../enums/data-table-type-filters.enum';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, DataTableClass { 
  resource    : DataTableDTO;
  users : any[] = [
    {name: 'joseph',  email : 'deyvid@', status : true, birthday : '2020-01-01'},
    {name: 'david',   email : 'david@', status : true, birthday : '2020-01-01'},
    {name: 'arambu',  email : 'arambu@', status : true, birthday : '2020-01-01'},
    {name: 'cabada',  email : 'cabada@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
    {name: 'dayana',  email : 'dayana@', status : true, birthday : '2020-01-01'},
  ];

  constructor(
    private dataTableServices : DataTableDataDefaultService 
  ) { }

  ngOnInit(): void {
    this.setDataDefault();
  }

  setDataDefault():void{
    this.resource               = this.dataTableServices.getStructure();
    this.resource.title         = 'Listado de Usuarios';
    this.resource.totalRecords  = 100;
    this.setListButtons();
    this.setHeaders();
    this.setBodyData();
  }

  setHeaders(): void {
    let listHeaders : DataTableHeaders[] = [];
    let header : DataTableHeaders = {
      key         : 'name',
      text        : 'Nombre',
      typeFilter  : DataTableTypeFilters.input,
      value       : '',
      isFilter    : true
    };
    listHeaders.push(header);

    header = {
      key         : 'email',
      text        : 'Correo',
      typeFilter  : DataTableTypeFilters.input,
      value       : '',
      isFilter    : true
    };
    listHeaders.push(header);

    header = {
      key         : 'status',
      text        : 'Estatus',
      typeFilter  : DataTableTypeFilters.select,
      value       : '',
      isFilter    : true,
      options     : [
        {text : 'ACTIVO',   value : 'true' },
        {text : 'INACTIVO', value : 'false' }
      ]
    };
    listHeaders.push(header);

    header = {
      key         : 'birthday',
      text        : 'Fecha Cumpleaños',
      typeFilter  : DataTableTypeFilters.datapicker,
      value       : '',
      isFilter    : true
    };
    listHeaders.push(header);

    this.resource.structure.headers = listHeaders;
  }

  setBodyData(): void {
    this.resource.structure.body = this.users;
  }

  setListButtons(): void {
    let listB   : DataTableButtonsOptionsDTO[]  = [];
    let button  : DataTableButtonsOptionsDTO    = {
      id      : 1,
      icon    : 'edit',
      type    : 'primary',
      class   : ''
    };
    listB.push(button);

    button   = {
      id      : 2,
      icon    : 'delete',
      type    : 'danger',
      class   : ''
    };
    listB.push(button);

    this.resource.buttonsOptions = listB;
  }  

  filters(event:any):void{
    console.log("filters", event);
  }

  clickButtons(event:any):void{
    console.log("clickButtons",event);
  }

}
