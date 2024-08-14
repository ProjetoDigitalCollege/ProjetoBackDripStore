'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutoCategoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProdutoCategoria.init({
    categoria_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdutoCategoria',
  });
  return ProdutoCategoria;
};

ProdutoCategoria.associate = 
function (models) {

ProdutoCategoria.BelongsTo (models.Categoria,
  { foreignKey: 'categoria_id' }); 
  
ProdutoCategoria.BelongsTo (models.Produto,
  { foreignKey: 'produto_id' });
  
};  