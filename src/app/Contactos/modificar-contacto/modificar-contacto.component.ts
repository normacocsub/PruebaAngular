import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAlertComponent } from 'src/app/@base/modal/modal-alert/modal-alert.component';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from '../models/contacto';

@Component({
  selector: 'app-modificar-contacto',
  templateUrl: './modificar-contacto.component.html',
  styleUrls: ['./modificar-contacto.component.css']
})
export class ModificarContactoComponent implements OnInit {

  contacto: Contacto;
  constructor(private modalService: NgbModal,private router: Router, private routeActive: ActivatedRoute, private contactoService: ContactoService) { this.contacto = new Contacto(); }

  ngOnInit(): void {
    this.contacto = new Contacto();
    const id = this.routeActive.snapshot.params.numero;

    this.contactoService.buscar(id).subscribe(result => {
      this.contacto = result;
    })

  }

  guardar() {
    if(this.contacto.identificacion == '' || this.contacto.nombre == '' || this.contacto.celular == '' || this.contacto.direccion == ''){
          const messageBox = this.modalService.open(ModalAlertComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.cuerpo = 'Error: No se permiten campos vacios !!! :-)';
    }
    else{
      this.contactoService.modificar(this.contacto).subscribe(resutl => {
        if(resutl != null){
          const messageBox = this.modalService.open(ModalAlertComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.cuerpo = 'Contacto Modificado!!! :-)';
          this.contacto = new Contacto();
          this.router.navigate(['/consultarContactos']);
        }
      });
    }
  }
}
