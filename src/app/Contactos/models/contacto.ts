export class Contacto {
    identificacion: string;
    nombre: string;
    celular: string;
    direccion: string;
    fecha: Date;
    constructor(){
        this.identificacion = '';
        this.nombre = '';
        this.celular = '';
        this.direccion = '';
        this.fecha = new Date;
    }
}
