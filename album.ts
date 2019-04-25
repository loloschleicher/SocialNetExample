import { Imagen } from "./imagen";

export class Album{
    nombre: string;
    imagenes: Array<Imagen>;
    caratula: Imagen;

    constructor(nombre: string){
        this.setNombre(nombre);
        this.imagenes = [];
    }

    setNombre(nombre: string){
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }

    agregarImagen(imagen: Imagen){      
        this.imagenes.push(imagen);   
    }

    eliminarImagen(nombreimagen: string){
        this.imagenes.forEach((key, index) => {
            if(key.getNombre() == nombreimagen){
                this.imagenes.splice(index, 1);
            }
        })
    }

    asignarCaratula(nombreimagen: string){
        this.imagenes.forEach((key, index) => {
            if(key.getNombre() == nombreimagen){
                this.caratula = key;
            }
        })
    }




}