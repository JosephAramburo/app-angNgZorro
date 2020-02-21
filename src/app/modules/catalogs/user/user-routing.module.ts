import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { ListUserComponent } from '@modules/catalogs/user/list-user/list-user.component';
import { FrmUserComponent } from '@modules/catalogs/user/frm-user/frm-user.component';

const routes: Routes = [
  {
    path:'',
    component : ListUserComponent
  },
  {
    path:'/add',
    component : FrmUserComponent
  },
  {
    path:'/:id',
    component : FrmUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
