import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contacto } from '../Contactos/models/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  post(contacto: Contacto): Observable<Contacto>{
    let contactos: Contacto[]  = [];
    if(this.get().length > 0 ){
      contactos = this.get();
    }
    contactos.push(contacto);

    localStorage.setItem('contacto', JSON.stringify(contactos));
    return of(contacto);
  }

  get():Contacto[]{
    return JSON.parse(localStorage.getItem('contacto') || '{}');
  }

  buscar(id: string):Observable<Contacto>{
    var lista: any[] = [];
    if(this.get().length>0){
      lista = this.get();
    }
    return of (lista.find(c => c.identificacion == id));
  }

  modificar(contacto: Contacto): Observable<Contacto>{
    var lista: any[] = [];
    if(this.get().length>0){
      lista = this.get();
      var response = lista.find(c => c.identificacion == contacto.identificacion);
      if(response != null){
        var index = lista.findIndex(c => c.identificacion == contacto.identificacion);
        lista[index] = contacto;
        localStorage.setItem('contacto', JSON.stringify(lista));
        return of(contacto);
      }
      
    }
    return of();
  }

  eliminar(contacto:Contacto): Observable<Contacto>{
    var lista: any[] = [];
    if(this.get().length>0){
      lista = this.get();
      var response = lista.find(c => c.identificacion == contacto.identificacion);
      if(response != null){
        var index = lista.findIndex(c => c.identificacion == contacto.identificacion);
        lista.splice(index,1);
        localStorage.setItem('contacto', JSON.stringify(lista));
        return of(contacto);
      }
      
    }
    return of();
  }
}
