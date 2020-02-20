import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COMPONENTS
import { LoginComponent } from '@pages/login/login.component';
import { HomeComponent } from '@pages/home/home.component';
import { InitComponent } from '@pages/init/init.component';
//MODULES
// import { TodoModule } from '@modules/todo/todo.module';

const routes: Routes = [
  {
    path      : '',
    component : InitComponent,
    children  : [
      {
        path        : '',
        redirectTo  : '/login',
        pathMatch   : 'full',
        data        : {
          show : false,
        }
      },
      {
        path      : 'home',
        component :  HomeComponent,
        data      : {
          module:"Dashboard",
          title: "Dashboard",
          icon:'fa fa-home',
          show:false,
          permission:'app-all'
        }
      },
      // {
      //   path:'todo',
      //   loadChildren:() => TodoModule
      // }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent }
];

// const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: '/welcome' },
//   // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
