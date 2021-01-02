import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/@base/modal/modal-alert/modal-alert.component';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {
  contacto: Contacto;
  constructor(private modalService: NgbModal, private contactoService: ContactoService, private router: Router) {
    this.contacto = new Contacto();
  }

  ngOnInit(): void {
    this.contacto = new Contacto();
  }


  guardar() {
    console.log(this.contacto);
    var date = this.contacto.fecha;
    this.contactoService.post(this.contacto).subscribe(result => {
      if (result != null) {
        const messageBox = this.modalService.open(ModalAlertComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.cuerpo = 'Contacto creado!!! :-)';
        this.contacto = new Contacto();
        this.router.navigate(['/consultarContactos']);
      }
    });
  }

}
