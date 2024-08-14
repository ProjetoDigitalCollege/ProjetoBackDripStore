'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Venda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Venda.init({
    usuario_id: DataTypes.INTEGER,
    valor_total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Venda',
  });
  return Venda;
};

Venda.associate = function(models) {
  Venda.belongsTo(models.Usuaio,
  { foreignKey:'usuario_id'});
  Venda.hasMany (models.Pedido, {
    foreignKey: 'venda_id' });
    };
