import { expect } from 'chai';
import { Usuario } from '../usuario';
import { Album } from '../album';
import { Imagen } from '../imagen';
import { MuroGeneral } from '../muroGeneral';


describe('Test de Muro', function(){
    it('Usuario agrega una publicacion', function(){
        var usuario = new Usuario("leonel");
        usuario.publicar("Hola", "Nueva Publicacion", "publico");
         
        expect(usuario.muro.publicaciones.length).to.equals(1); 
    });
    it('Usuario agrega una publicacion', function(){
        var usuario = new Usuario("leonel");
        usuario.publicar("Hola", "Nueva Publicacion", "publico");
        expect(MuroGeneral.getInstance().publicaciones[0].contenido).to.equals("Nueva Publicacion"); 
    });
});