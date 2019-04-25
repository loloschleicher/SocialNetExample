import { Album } from "./album";

export class Usuario{
    private nombre: string;
    private apellido: string;  
    private imagen: string;
    private albums: Album;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    agregarAlbum(album: Album){
        this.albums = album;
    }

    
    }
