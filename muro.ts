import { MuroGeneral } from "./muroGeneral";
import { Publicacion } from "./publicacion";

export class Muro extends MuroGeneral{

    publicaciones: Array<Publicacion>;
   

    constructor(){
        super();
    }

    publicar(descripcion: string, contenido: string, tipo: string){
        super.publicar(descripcion, contenido, tipo);
        if(tipo == "publico"){
            MuroGeneral.getInstance().publicar(descripcion, contenido, tipo);
        }
    }

    setPublicacion(publicacion: Publicacion) {
        this.publicaciones.push(publicacion);
        if (publicacion.tipo == "publico") {
          MuroGeneral.getInstance().setPublicacion(publicacion);
        }
      }

}