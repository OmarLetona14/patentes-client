import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { LoginComponent } from './components/login/login.component';
import { PaisesFormComponent } from './components/paises-form/paises-form.component';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { PreguntasFormComponent } from './components/preguntas-form/preguntas-form.component';
import { PreguntasListComponent } from './components/preguntas-list/preguntas-list.component';
import {InventorComponent} from './components/invento/invento.component';
import { InventoFormComponent } from './components/invento-form/invento-form.component';

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
  },
  {
    path:'edit-pais/:id',
    component:PaisesFormComponent
  },
  {
    path:'preguntas',
    component:PreguntasListComponent
  },
  {
    path:'form-preguntas',
    component:PreguntasFormComponent
  },
  {
    path:'edit-pregunta/:id',
    component:PreguntasFormComponent
  },
  {
    path:'inventos',
    component:InventorComponent
  },
  {
    path:'edit-invento/:id',
    component:InventoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
