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
    CountrynamePipe
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
