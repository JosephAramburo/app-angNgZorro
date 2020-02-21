import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';

import { NgZorroAntdModule, NZ_I18N, en_US, es_ES } from 'ng-zorro-antd';

@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule
  ],
  exports:[
    DataTableComponent
  ]
})
export class SharedModulesModule { }
