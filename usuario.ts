import { Album } from "./album";

export class Usuario{
    private nombre: string;
    private apellido: string;  
    private imagen: string;
    public albums: Array<Album>;

    constructor(nombre: string){
        this.nombre = nombre;
        this.albums = [];
    }

    agregarAlbum(album: Album){
        this.albums.push(album);
    }

    quitarAlbum(nombre: string){
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombre ){
                this.albums.splice(index, 1);
            }
        });      
    }

    
    }
