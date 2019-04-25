import { expect } from 'chai';
import { Usuario } from '../usuario';
import { Album } from '../album';

describe('Agregar 1 Album', function(){
    it('Deberia ser igual a album1', function(){
        var usuario = new Usuario("leonel");
        
        var album = new Album("album1")
        usuario.agregarAlbum(album);

        expect(album.getNombre()).to.equal("album1");
    });
});