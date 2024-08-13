'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OpcoesProdutos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OpcoesProdutos.init({
    produto_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    shape: {DataTypes.ENUM('square','circle'), defaultValue: 'square'},
    radius: DataTypes.INTEGER,
    type: DataTypes.ENUM('text','image'),
    values: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OpcoesProdutos',
  });
  return OpcoesProdutos;
};