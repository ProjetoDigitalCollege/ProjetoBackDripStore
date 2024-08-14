'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProdutoImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProdutoImg.init({
    produto_id: DataTypes.INTEGER,
    imagem_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProdutoImg',
  });
  return ProdutoImg;
};

ProdutoImg.associate = 
function (models) {

ProdutoImg.belongsTo (models.Produto,
  { foreignKey: 'produto_id' });

ProdutoImg.belongsTo (models.Imagem,
  { foreignKey: 'imagem_id' });
  
};
