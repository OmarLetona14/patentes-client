import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import {NgxSpinnerModule} from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './services/spinner.service';
import { ConsultasComponent } from './components/consultas/consultas.component';

import {MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { PaisesListComponent } from './components/paises-list/paises-list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PaisesFormComponent } from './components/paises-form/paises-form.component';
import { CountrynamePipe } from './pipes/countryname.pipe';
import { PreguntasListComponent } from './components/preguntas-list/preguntas-list.component';
import { PreguntasFormComponent } from './components/preguntas-form/preguntas-form.component';
import { InventorComponent } from './components/invento/invento.component';
import { PreguntaPipe } from './pipes/pregunta.pipe';
import { InventoFormComponent } from './components/invento-form/invento-form.component';
import { InventoPipe } from './pipes/invento.pipe';
import { Consulta1Component } from './components/consulta1/consulta1.component';
import { Consulta2Component } from './components/consulta2/consulta2.component';
import { Consulta3Component } from './components/consulta3/consulta3.component';
import { Consulta4Component } from './components/consulta4/consulta4.component';
import { Consulta5Component } from './components/consulta5/consulta5.component';
import { Consulta6Component } from './components/consulta6/consulta6.component';
import { Consulta7Component } from './components/consulta7/consulta7.component';
import { Consulta8Component } from './components/consulta8/consulta8.component';
import { Consulta9Component } from './components/consulta9/consulta9.component';
import { Consulta10Component } from './components/consulta10/consulta10.component';
import { Consulta11Component } from './components/consulta11/consulta11.component';
import { Consulta12Component } from './components/consulta12/consulta12.component';
import { Consulta13Component } from './components/consulta13/consulta13.component';
import { Consulta14Component } from './components/consulta14/consulta14.component';
import { Consulta15Component } from './components/consulta15/consulta15.component';
import { Consulta16Component } from './components/consulta16/consulta16.component';
import { Consulta17Component } from './components/consulta17/consulta17.component';
import { Consulta18Component } from './components/consulta18/consulta18.component';
import { Consulta19Component } from './components/consulta19/consulta19.component';
import { Consulta20Component } from './components/consulta20/consulta20.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    SpinnerComponent,
    ConsultasComponent,
    PaisesListComponent,
    ButtonsComponent,
    PaisesFormComponent,
    CountrynamePipe,
    PreguntasListComponent,
    PreguntasFormComponent,
    InventorComponent,
    PreguntaPipe,
    InventoFormComponent,
    InventoPipe,
    Consulta1Component,
    Consulta2Component,
    Consulta3Component,
    Consulta4Component,
    Consulta5Component,
    Consulta6Component,
    Consulta7Component,
    Consulta8Component,
    Consulta9Component,
    Consulta10Component,
    Consulta11Component,
    Consulta12Component,
    Consulta13Component,
    Consulta14Component,
    Consulta15Component,
    Consulta16Component,
    Consulta17Component,
    Consulta18Component,
    Consulta19Component,
    Consulta20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
