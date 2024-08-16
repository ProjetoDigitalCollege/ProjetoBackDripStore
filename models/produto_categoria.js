const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produto_categoria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'produto',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'produto_categoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_produto_categoria",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
