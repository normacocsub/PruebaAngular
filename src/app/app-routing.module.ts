import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarContactosComponent } from './Contactos/consultar-contactos/consultar-contactos.component';
import { CrearContactoComponent } from './Contactos/crear-contacto/crear-contacto.component';
import { ModificarContactoComponent } from './Contactos/modificar-contacto/modificar-contacto.component';

const routes: Routes = [
  {
    path: 'crearContacto', component: CrearContactoComponent
  },
  {
    path: 'consultarContactos', component: ConsultarContactosComponent
  },
  {
    path: 'modificarContacto/:numero', component: ModificarContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
