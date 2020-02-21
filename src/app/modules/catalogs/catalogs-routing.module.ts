import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModule } from '@modules/catalogs/user/user.module';


const routes: Routes = [
  {
    path:'user',
    loadChildren:() => UserModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogsRoutingModule { }
