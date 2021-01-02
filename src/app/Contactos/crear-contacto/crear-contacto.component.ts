import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
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
  formGroup: FormGroup ;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private contactoService: ContactoService, private router: Router) {
    this.contacto = new Contacto();
    this.formGroup = formBuilder.group({});
  }

  ngOnInit(): void {
    this.contacto = new Contacto();
    this.buildForm();
  }

  private buildForm(){
    this.contacto = new Contacto();
    this.contacto.celular = '';
    this.contacto.direccion = '';
    this.contacto.fecha = new Date();
    this.contacto.identificacion = '';
    this.contacto.nombre = '';

    this.formGroup = this.formBuilder.group({
      celular: [this.contacto.celular, [Validators.required]],
      direccion: [this.contacto.direccion, [Validators.required]],
      fecha: [this.contacto.fecha, [Validators.required]],
      identificacion: [this.contacto.identificacion, [Validators.required]],
      nombre: [this.contacto.nombre, [Validators.required]]
    });
  }

  get control(){
    return this.formGroup?.controls;
  }

  onSubmit() {
    if (this.formGroup?.invalid) {
      return;
    }
    this.guardar();
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
