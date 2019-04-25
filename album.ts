export class Album{
    nombre: string;
    imagenes: Array<string>;

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




}