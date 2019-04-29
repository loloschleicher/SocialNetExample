export class Publicacion{

    fecha: string;
    contenido: string;
    tipo: string;
    descripcion: string;    

    constructor(descripcion: string, contenido: string, tipo: string){
        this.descripcion= descripcion;
        this.contenido = contenido;
        this.tipo = tipo;
        this.fecha = Date.now().toLocaleString();
    }



}