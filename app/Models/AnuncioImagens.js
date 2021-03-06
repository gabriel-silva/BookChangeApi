'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AnuncioImagens extends Model {
    static get table() {
        return 'anuncio_imagens';
    }
    static get primaryKey() {
        return 'in_anuncio_imagens_id';
    }
    static get foreignKey() {
        return 'in_anuncio_id';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }

}

module.exports = AnuncioImagens
