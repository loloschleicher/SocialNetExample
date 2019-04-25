import { expect } from 'chai';
import { Usuario } from '../usuario';
import { Album } from '../album';
import { Imagen } from '../imagen';

describe('Test de Album', function(){
    it('Usuario agrega 1 album', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album1")
        usuario.agregarAlbum(album);  
        expect(usuario.albums.length).to.equals(1); 
    });

    it('Usuario quita un album', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album1")
        usuario.agregarAlbum(album);
        usuario.quitarAlbum("album1");
        expect(usuario.albums.length).to.equals(0);
    });

    it('Usuario obtiene un album por el nombre', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album");
        var album1 = new Album("album1");
        usuario.agregarAlbum(album);
        usuario.agregarAlbum(album1);
        expect(usuario.obtenerAlbum("album")).to.equals(album);
    });
    it('Usuario no puede agregar un album con nombre ya exisente', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album");
        var album1 = new Album("album1");
        var album2 = new Album("album");
        usuario.agregarAlbum(album);
        usuario.agregarAlbum(album1);
        usuario.agregarAlbum(album2);
        expect(usuario.albums.length).to.equals(2);
    });
    it('Usuario no puede quitar un album con nombre no exisente', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album");
        var album1 = new Album("album1");
        var album2 = new Album("album2");
        usuario.agregarAlbum(album);
        usuario.agregarAlbum(album1);
        usuario.agregarAlbum(album2);
        usuario.quitarAlbum("album3");
        expect(usuario.albums.length).to.equals(3);
    });
    it('Usuario agrega 10 albums', function(){
        var usuario = new Usuario("leonel");    
        for(var i=0; i<10; i++ ){
            var album = new Album("album" + i);
            usuario.agregarAlbum(album);
        }
        expect(usuario.albums.length).to.equals(10);
    });
    it('Usuario quita el album 4 de 10', function(){
        var usuario = new Usuario("leonel");    
        for(var i=0; i<10; i++ ){
            var album = new Album("album" + i);
            usuario.agregarAlbum(album);
        }

        var nombre = "";
        usuario.albums.forEach((key, index) => {
            if(index == 3){
                usuario.quitarAlbum(key.getNombre());
                nombre = key.getNombre();
            }
        })
        expect(nombre).to.equals("album3");
    });
    it('Usuario agrega una imagen en un album', function(){
        var usuario = new Usuario("leonel");    
        var album = new Album("albumPerfil");
        var imagen = new Imagen("fotoPerfil.jpg");
        var imagen1 = new Imagen("fotoPerfil1.jpg");
        usuario.agregarAlbum(album);
        usuario.agregarImagen(imagen, "albumPerfil" );
        usuario.agregarImagen(imagen1, "albumPerfil" );
        expect(album.imagenes.length).to.equals(2);
    });
    it('Usuario elimina una imagen en un album', function(){
        var usuario = new Usuario("leonel");    
        var album = new Album("albumPerfil");
        var imagen = new Imagen("fotoPerfil.jpg");
        var imagen1 = new Imagen("fotoPerfil1.jpg");
        usuario.agregarAlbum(album);
        usuario.agregarImagen(imagen, "albumPerfil" );
        usuario.agregarImagen(imagen1, "albumPerfil" );
        usuario.eliminarImagen("fotoPerfil.jpg", "albumPerfil");
        expect(album.imagenes.length).to.equals(1);
    });


    

   
});

