import { Album } from "./album";

export class Usuario{
    private nombre: string;
    private apellido: string;  
    private imagen: string;
    albums: Array<Album>;

    constructor(nombre: string){
        this.nombre = nombre;
        this.albums = [];
    }

    agregarAlbum(album: Album){
        var bandera = 0;
        this.albums.forEach((key, index) => {
            if(key.getNombre() == album.getNombre()){
                bandera = 1
            }
        }); 
        if(bandera == 0){
            this.albums.push(album);
        }         
    }

    quitarAlbum(nombre: string){
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombre ){
                this.albums.splice(index, 1);
            }
        });      
    }

    obtenerAlbum(nombre: string): Album{
        var albumBuscado: Album;
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombre ){
                albumBuscado = key;
            }
        });
        return albumBuscado;     
    }

    
    }
