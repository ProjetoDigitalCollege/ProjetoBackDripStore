'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TelefoneUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TelefoneUsuario.init({
    telefone_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TelefoneUsuario',
  });
  return TelefoneUsuario;
};

TelefoneUsuario.associate =
function (models) {

TelefoneUsuario.belongsTo(models.Telefone,
  { foreingnKey: 'telefone_id' });
  
TelefoneUsuario.belongsTo(models.Usuarios,
  { foreingnKey: 'usuario_id' });
  
};