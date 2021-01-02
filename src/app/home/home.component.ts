import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Contactos/models/contacto';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  totalContactos: number | undefined;
  totalContactosCumpleano: number | undefined;
  contactos: Contacto[] | undefined;
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    console.log('a');
    this.contactos = [];
    if(this.contactoService.get() != null){
      this.contactos = this.contactoService.get();
      this.totalContactos = this.contactos.length;
      var fecha = new Date(Date.now());
      this.totalContactosCumpleano = this.contactos.filter(c =>  this.filtroFecha(c.fecha,fecha) == true).length;
    }

  }

  filtroFecha(fecha1: Date, fecha2: Date): boolean{
    var fecha = new Date();
    var fecha3 = Date.parse(fecha1.toString());
    fecha.setTime(fecha3);
    //fecha.setDate(fecha.getDate() +1 );
    fecha2.setHours(0,0,0,0);
    fecha.setHours(0,0,0,0);
    if(fecha.getTime() == fecha2.getTime()){
      return true;
    }
    else{
      return false;
    }
  }

}
