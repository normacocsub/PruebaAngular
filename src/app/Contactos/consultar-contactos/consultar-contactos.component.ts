import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/@base/modal/modal-alert/modal-alert.component';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-consultar-contactos',
  templateUrl: './consultar-contactos.component.html',
  styleUrls: ['./consultar-contactos.component.css']
})
export class ConsultarContactosComponent implements OnInit {
  contactos: Contacto[];
  constructor(private modalService: NgbModal,private contactoService: ContactoService) { this.contactos = [];}

  ngOnInit(): void {
    this.contactos = [];

    
    this.get();

  }

  get(){
    if(this.contactoService.get() != null){
      this.contactos = this.contactoService.get();
    }
  }

  eliminar(contacto: Contacto){
    this.contactoService.eliminar(contacto).subscribe(result =>{
      if(result != null){
        const messageBox = this.modalService.open(ModalAlertComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Contacto Eliminado!!! :-)';
        this.get();
      }
    })
  }

}
