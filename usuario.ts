import { Album } from "./album";
import { Imagen } from "./imagen";

export class Usuario{
    private nombre: string;
    private apellido: string;  
    //imagen: string;
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

    agregarImagen(imagen: Imagen, nombreAlbum: string){
        this.obtenerAlbum(nombreAlbum).agregarImagen(imagen);
    }

    eliminarImagen(nombreimagen: string, nombreAlbum: string){
        this.albums.forEach((key, index) => {
            if(key.getNombre() == nombreAlbum){
                key.imagenes.forEach((key1, index) => {
                    if(key1.getNombre() == nombreimagen){
                        key.imagenes.splice(index, 1);
                    }
                })
            }
        })
    }

    /*asignarCaratula(nombreimagen: string, nombreAlbum: string){
        this.albums.ca
    }*/



    
    }
