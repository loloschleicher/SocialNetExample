export class Album{
    nombre: string;

    constructor(nombre: string){
        this.setNombre(nombre);
    }

    setNombre(nombre: string){
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }




}