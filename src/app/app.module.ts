import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CrearContactoComponent } from './Contactos/crear-contacto/crear-contacto.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConsultarContactosComponent } from './Contactos/consultar-contactos/consultar-contactos.component';
import { ModificarContactoComponent } from './Contactos/modificar-contacto/modificar-contacto.component';
import { ModalAlertComponent } from './@base/modal/modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CrearContactoComponent,
    HomeComponent,
    ConsultarContactosComponent,
    ModificarContactoComponent,
    ModalAlertComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
