'use strict'

const Model = use('Model');
const Hash = use('Hash');

class Usuario extends Model {

    static boot() {
        super.boot()

        this.addHook('beforeSave', async (userInstance) => {
            if (userInstance.dirty.va_password) {
                userInstance.va_password = await Hash.make(userInstance.va_password)
            }
        })
    }

    tokens() {
        return this.hasMany('App/Models/Token')
    }

    endereco() {
        return this.hasOne('App/Models/Endereco', 'in_usuario_id', 'in_usuario_id');
    }

    usuarioImagem() {
        return this.hasOne('App/Models/UsuarioImagem', 'in_usuario_id', 'in_usuario_id');
    }

    anuncios() {
        return this.hasMany('App/Models/Anuncio', 'in_usuario_id', 'in_usuario_id');
    }

    static get table() {
        return 'usuario';
    }
    static get primaryKey() {
        return 'in_usuario_id';
    }
    static get createdAtColumn() {
        return null;
    }
    static get updatedAtColumn() {
        return null;
    }
}

module.exports = Usuario
