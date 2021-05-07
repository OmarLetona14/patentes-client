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
import {MatTabsModule} from '@angular/material/tabs';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'


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
    InventoPipe
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
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
