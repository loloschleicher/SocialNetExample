import { Publicacion } from "./publicacion";

export class MuroGeneral{

    publicaciones: Array<Publicacion>
    private static instance: MuroGeneral;

    constructor(){
        this.publicaciones = [];
    }

    static getInstance(){
        if (!MuroGeneral.instance) {
          MuroGeneral.instance = new MuroGeneral();
        }
        return MuroGeneral.instance;
      }

   publicar(descripcion: string, contenido: string, tipo: string ){
        this.publicaciones.push(new Publicacion(descripcion, contenido, tipo));     
    }

    setPublicacion(publicacion: Publicacion) {
        this.publicaciones.push(publicacion);
      }

}