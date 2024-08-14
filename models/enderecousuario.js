'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EnderecoUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EnderecoUsuario.init({
    endereco_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EnderecoUsuario',
  });
  return EnderecoUsuario;
};

EnderecoUsuario.associate = 
function (models) {

EnderecoUsuario.belongsTo(models.Endereco, 
  { foreingnKey: 'endereco_id' });

EnderecoUsuario.belongsTo(models.Usuarios,
  { foreingnKey: 'usuario_id' });  
  
};