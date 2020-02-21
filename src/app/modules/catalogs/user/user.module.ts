import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { FrmUserComponent } from './frm-user/frm-user.component';

import { NgZorroAntdModule, NZ_I18N, en_US, es_ES } from 'ng-zorro-antd';

import { SharedModulesModule } from '@modules/shared-modules/shared-modules.module';


@NgModule({
  declarations: [ListUserComponent, FrmUserComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    SharedModulesModule,
    UserRoutingModule
  ]
})
export class UserModule { }
