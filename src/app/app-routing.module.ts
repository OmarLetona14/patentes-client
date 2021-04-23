import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { LoginComponent } from './components/login/login.component';
import { PaisesFormComponent } from './components/paises-form/paises-form.component';
import { PaisesListComponent } from './components/paises-list/paises-list.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'consultas',
    component:ConsultasComponent
  },
  {
    path:'paises',
    component:PaisesListComponent
  },
  {
    path:'form-paises',
    component:PaisesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
