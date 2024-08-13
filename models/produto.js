'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produto.init({
    enabled: DataTypes.BOOLEAN,
    slug: DataTypes.STRING,
    use_in_menu: DataTypes.BOOLEAN,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    price_with_discount: DataTypes.DECIMAL,
    categoria_id: DataTypes.INTEGER,
    marca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};