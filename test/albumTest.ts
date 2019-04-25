import { expect } from 'chai';
import { Usuario } from '../usuario';
import { Album } from '../album';

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

    

   
});

